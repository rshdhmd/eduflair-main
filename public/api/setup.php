<?php
/**
 * One-time CMS installer.
 * 1. Create MySQL DB in Hostinger
 * 2. Copy config.example.php → config.php with credentials
 * 3. Open /api/setup.php in browser
 * 4. Create first admin
 * 5. DELETE this file after setup
 */
declare(strict_types=1);

header('Content-Type: text/html; charset=utf-8');

$configPath = __DIR__ . '/config.php';
$schemaPath = dirname(__DIR__, 2) . '/database/schema.sql';
// When deployed, schema lives next to public or in /database — try both
if (!is_file($schemaPath)) {
  $schemaPath = dirname(__DIR__) . '/../database/schema.sql';
}
if (!is_file($schemaPath)) {
  $schemaPath = __DIR__ . '/schema.sql';
}

function h(string $s): string
{
  return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

$messages = [];
$errors = [];
$done = false;

if (!is_file($configPath)) {
  $errors[] = 'Missing config.php. Copy config.example.php to config.php and add your MySQL credentials.';
}

$config = is_file($configPath) ? require $configPath : null;

function seed_content(PDO $pdo): void
{
  $seeds = [
    // Home hero
    ['home', 'hero_badge', 'text', "Kerala's Study Abroad & German Careers Specialists", 'Hero badge'],
    ['home', 'hero_title', 'html', "Guiding Career Success<br />Gateway to Global Education &amp; Career Success!", 'Hero headline'],
    ['home', 'hero_subtitle', 'text', 'At Eduflair, we bridge the gap between aspirations and achievements through expert study abroad consultancy, skill development, and career placement. Our mission is to equip students with the knowledge and opportunities needed to thrive in a competitive global landscape.', 'Hero subtitle'],
    ['home', 'hero_image', 'image', '/images/hero-eduflair.jpg', 'Hero background image'],

    // Our story
    ['our-story', 'hero_title', 'text', 'Our Story', 'Page title'],
    ['our-story', 'hero_subtitle', 'text', 'How Eduflair became Kerala’s trusted partner for global education and careers.', 'Page subtitle'],
    ['our-story', 'intro_html', 'html', '<p>Eduflair Learning Solutions guides students and professionals toward international education and career pathways with counselling, language training, and placement support.</p>', 'Intro content'],

    // Contact
    ['contact', 'hero_title', 'text', 'Contact Us', 'Page title'],
    ['contact', 'hero_badge', 'text', 'Get In Touch', 'Hero badge'],
    ['contact', 'form_heading', 'text', 'Send Us a Message', 'Form heading'],
    ['contact', 'sidebar_note', 'text', 'A counsellor will be in touch within 24 hours.', 'Sidebar / success note'],

    // Shared CTAs
    ['shared', 'cta_title', 'text', 'Need Assistance?', 'CTA title'],
    ['shared', 'cta_text', 'text', 'Talk to our counsellors about Ausbildung, study abroad, language training, or placement.', 'CTA text'],
    ['shared', 'cta_button', 'text', 'Check Eligibility', 'CTA button label'],

    // Services blurb keys
    ['home', 'services_title', 'text', 'Our Key Services', 'Services section title'],
    ['home', 'services_subtitle', 'text', 'End-to-end guidance for study abroad, Ausbildung, language training, and overseas placement.', 'Services subtitle'],

    // Core service pages (expandable in admin via upsert later)
    ['study-abroad', 'hero_title', 'text', 'Study Abroad', 'Page title'],
    ['study-abroad', 'hero_subtitle', 'text', 'Expert guidance for international university admissions, visas, and career pathways.', 'Page subtitle'],
    ['ausbildung-in-germany', 'hero_title', 'text', 'Ausbildung in Germany', 'Page title'],
    ['ausbildung-in-germany', 'hero_subtitle', 'text', 'Vocational training pathways with German language support and placement guidance.', 'Page subtitle'],
    ['language-academy', 'hero_title', 'text', 'Language & Skill Academy', 'Page title'],
    ['language-academy', 'hero_subtitle', 'text', 'IELTS, German language, and OET coaching for global careers.', 'Page subtitle'],
    ['placement', 'hero_title', 'text', 'Placement Consultancy', 'Page title'],
    ['placement', 'hero_subtitle', 'text', 'Overseas job consultancy for healthcare and skilled professionals.', 'Page subtitle'],
  ];

  $stmt = $pdo->prepare(
    'INSERT IGNORE INTO site_content (page_key, field_key, field_type, value, label) VALUES (?, ?, ?, ?, ?)'
  );
  foreach ($seeds as $row) {
    $stmt->execute($row);
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $config) {
  $name = trim((string) ($_POST['name'] ?? ''));
  $email = strtolower(trim((string) ($_POST['email'] ?? '')));
  $password = (string) ($_POST['password'] ?? '');

  try {
    $dsn = sprintf(
      'mysql:host=%s;dbname=%s;charset=%s',
      $config['db_host'],
      $config['db_name'],
      $config['db_charset'] ?? 'utf8mb4'
    );
    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    // Run schema — prefer bundled schema.sql next to api after deploy
    $sqlFile = is_file(__DIR__ . '/schema.sql') ? __DIR__ . '/schema.sql' : $schemaPath;
    if (!is_file($sqlFile)) {
      throw new RuntimeException('schema.sql not found. Upload database/schema.sql or api/schema.sql');
    }
    $sql = file_get_contents($sqlFile);
    $pdo->exec($sql);

    seed_content($pdo);

    $count = (int) $pdo->query('SELECT COUNT(*) FROM users')->fetchColumn();
    if ($count > 0) {
      $messages[] = 'Tables ready and content seeded. An admin user already exists — skip creating another or add staff from /admin/users.';
      $done = true;
    } else {
      if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
        throw new InvalidArgumentException('Provide name, valid email, and password (min 8 characters).');
      }
      $hash = password_hash($password, PASSWORD_DEFAULT);
      $stmt = $pdo->prepare('INSERT INTO users (name, email, password_hash, role, is_active) VALUES (?, ?, ?, "admin", 1)');
      $stmt->execute([$name, $email, $hash]);
      $messages[] = 'CMS installed. First admin created.';
      $messages[] = 'IMPORTANT: Delete /api/setup.php from the server now.';
      $done = true;
    }
  } catch (Throwable $e) {
    $errors[] = $e->getMessage();
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Eduflair CMS Setup</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f4f7f8; color: #1a2e35; margin: 0; padding: 40px 16px; }
    .card { max-width: 480px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 8px 30px rgba(0,60,76,.08); }
    h1 { color: #003c4c; font-size: 1.4rem; margin: 0 0 8px; }
    p { color: #5a6b72; font-size: .95rem; line-height: 1.5; }
    label { display: block; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: #5a6b72; margin: 14px 0 6px; }
    input { width: 100%; box-sizing: border-box; padding: 12px 14px; border: 1px solid #dce5e8; border-radius: 10px; font-size: .95rem; }
    button { margin-top: 18px; width: 100%; background: #003c4c; color: #fff; border: 0; border-radius: 10px; padding: 14px; font-weight: 700; cursor: pointer; }
    .ok { background: #e8f7ee; color: #0d5c2e; padding: 12px; border-radius: 10px; margin-bottom: 12px; font-size: .9rem; }
    .err { background: #fdecea; color: #8a1f11; padding: 12px; border-radius: 10px; margin-bottom: 12px; font-size: .9rem; }
    a { color: #003c4c; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Eduflair CMS Setup</h1>
    <p>Creates database tables, seeds editable page content, and the first admin account.</p>

    <?php foreach ($errors as $e): ?>
      <div class="err"><?= h($e) ?></div>
    <?php endforeach; ?>
    <?php foreach ($messages as $m): ?>
      <div class="ok"><?= h($m) ?></div>
    <?php endforeach; ?>

    <?php if ($done): ?>
      <p><a href="/admin/login">Go to Admin Login →</a></p>
      <p style="color:#b45309;font-weight:600">Delete <code>api/setup.php</code> from the server for security.</p>
    <?php elseif ($config): ?>
      <form method="post">
        <label>Admin name</label>
        <input name="name" required placeholder="Your name" />
        <label>Admin email</label>
        <input name="email" type="email" required placeholder="you@eduflair.com" />
        <label>Password (min 8 characters)</label>
        <input name="password" type="password" required minlength="8" />
        <button type="submit">Install CMS</button>
      </form>
    <?php endif; ?>
  </div>
</body>
</html>
