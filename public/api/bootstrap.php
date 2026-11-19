<?php
/**
 * Shared bootstrap for Eduflair CMS API
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
  http_response_code(500);
  echo json_encode([
    'ok' => false,
    'error' => 'API not configured. Copy config.example.php to config.php and add database credentials.',
  ]);
  exit;
}

/** @var array $config */
$config = require $configPath;

$secure = !empty($config['secure_cookies']);
session_name($config['session_name'] ?? 'eduflair_admin');
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'secure' => $secure,
  'httponly' => true,
  'samesite' => 'Lax',
]);
if (session_status() !== PHP_SESSION_ACTIVE) {
  session_start();
}

function db(): PDO
{
  static $pdo = null;
  if ($pdo instanceof PDO) {
    return $pdo;
  }
  global $config;
  $dsn = sprintf(
    'mysql:host=%s;dbname=%s;charset=%s',
    $config['db_host'],
    $config['db_name'],
    $config['db_charset'] ?? 'utf8mb4'
  );
  $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
  ]);
  return $pdo;
}

function json_body(): array
{
  $raw = file_get_contents('php://input');
  $data = json_decode($raw ?: '', true);
  return is_array($data) ? $data : [];
}

function respond(array $payload, int $code = 200): void
{
  http_response_code($code);
  echo json_encode($payload);
  exit;
}

function require_method(string ...$methods): void
{
  $m = $_SERVER['REQUEST_METHOD'] ?? 'GET';
  if (!in_array($m, $methods, true)) {
    respond(['ok' => false, 'error' => 'Method not allowed'], 405);
  }
}

function current_user(): ?array
{
  if (empty($_SESSION['user_id'])) {
    return null;
  }
  try {
    $stmt = db()->prepare('SELECT id, name, email, role, is_active FROM users WHERE id = ? LIMIT 1');
    $stmt->execute([(int) $_SESSION['user_id']]);
    $user = $stmt->fetch();
    if (!$user || !(int) $user['is_active']) {
      return null;
    }
    return $user;
  } catch (Throwable $e) {
    return null;
  }
}

function require_auth(?string $role = null): array
{
  $user = current_user();
  if (!$user) {
    respond(['ok' => false, 'error' => 'Unauthorized'], 401);
  }
  if ($role === 'admin' && $user['role'] !== 'admin') {
    respond(['ok' => false, 'error' => 'Forbidden — admin only'], 403);
  }
  return $user;
}

function require_staff(): array
{
  return require_auth(null);
}

function slugify(string $text): string
{
  $text = strtolower(trim($text));
  $text = preg_replace('/[^a-z0-9]+/', '-', $text) ?? '';
  $text = trim($text, '-');
  return $text !== '' ? $text : 'post-' . time();
}

function read_action(): string
{
  return trim((string) ($_GET['action'] ?? ''));
}
