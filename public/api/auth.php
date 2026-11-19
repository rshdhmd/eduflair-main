<?php
require __DIR__ . '/bootstrap.php';

$action = read_action();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
  if ($action === 'login' && $method === 'POST') {
    $data = json_body();
    $email = strtolower(trim((string) ($data['email'] ?? '')));
    $password = (string) ($data['password'] ?? '');

    if ($email === '' || $password === '') {
      respond(['ok' => false, 'error' => 'Email and password are required'], 400);
    }

    $stmt = db()->prepare('SELECT id, name, email, role, is_active, password_hash FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !(int) $user['is_active'] || !password_verify($password, $user['password_hash'])) {
      respond(['ok' => false, 'error' => 'Invalid email or password'], 401);
    }

    session_regenerate_id(true);
    $_SESSION['user_id'] = (int) $user['id'];

    respond([
      'ok' => true,
      'user' => [
        'id' => (int) $user['id'],
        'name' => $user['name'],
        'email' => $user['email'],
        'role' => $user['role'],
      ],
    ]);
  }

  if ($action === 'logout' && $method === 'POST') {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
      $p = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000, $p['path'], $p['domain'] ?? '', (bool) $p['secure'], (bool) $p['httponly']);
    }
    session_destroy();
    respond(['ok' => true]);
  }

  if ($action === 'me' && $method === 'GET') {
    $user = current_user();
    if (!$user) {
      respond(['ok' => false, 'user' => null], 200);
    }
    respond([
      'ok' => true,
      'user' => [
        'id' => (int) $user['id'],
        'name' => $user['name'],
        'email' => $user['email'],
        'role' => $user['role'],
      ],
    ]);
  }

  respond(['ok' => false, 'error' => 'Unknown action. Use ?action=login|logout|me'], 400);
} catch (Throwable $e) {
  respond(['ok' => false, 'error' => 'Server error: ' . $e->getMessage()], 500);
}
