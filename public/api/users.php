<?php
require __DIR__ . '/bootstrap.php';

$action = read_action();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
  if ($action === 'list' && $method === 'GET') {
    require_auth('admin');
    $rows = db()->query('SELECT id, name, email, role, is_active, created_at, updated_at FROM users ORDER BY id ASC')->fetchAll();
    respond(['ok' => true, 'users' => $rows]);
  }

  if ($action === 'create' && $method === 'POST') {
    $admin = require_auth('admin');
    $data = json_body();
    $name = trim((string) ($data['name'] ?? ''));
    $email = strtolower(trim((string) ($data['email'] ?? '')));
    $password = (string) ($data['password'] ?? '');
    $role = ($data['role'] ?? 'editor') === 'admin' ? 'admin' : 'editor';

    if ($name === '' || $email === '' || strlen($password) < 8) {
      respond(['ok' => false, 'error' => 'Name, email, and password (min 8 chars) are required'], 400);
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      respond(['ok' => false, 'error' => 'Invalid email'], 400);
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    try {
      $stmt = db()->prepare('INSERT INTO users (name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, 1)');
      $stmt->execute([$name, $email, $hash, $role]);
    } catch (PDOException $e) {
      respond(['ok' => false, 'error' => 'Email already exists'], 409);
    }

    respond(['ok' => true, 'id' => (int) db()->lastInsertId()]);
  }

  if ($action === 'update' && $method === 'POST') {
    $admin = require_auth('admin');
    $data = json_body();
    $id = (int) ($data['id'] ?? 0);
    if ($id < 1) {
      respond(['ok' => false, 'error' => 'User id required'], 400);
    }

    $stmt = db()->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$id]);
    $existing = $stmt->fetch();
    if (!$existing) {
      respond(['ok' => false, 'error' => 'User not found'], 404);
    }

    $name = trim((string) ($data['name'] ?? $existing['name']));
    $email = strtolower(trim((string) ($data['email'] ?? $existing['email'])));
    $role = isset($data['role']) ? (($data['role'] === 'admin') ? 'admin' : 'editor') : $existing['role'];
    $isActive = array_key_exists('is_active', $data) ? ((int) !!$data['is_active']) : (int) $existing['is_active'];

    // Prevent locking yourself out
    if ($id === (int) $admin['id'] && (!$isActive || $role !== 'admin')) {
      respond(['ok' => false, 'error' => 'You cannot deactivate yourself or remove your own admin role'], 400);
    }

    if (!empty($data['password'])) {
      if (strlen((string) $data['password']) < 8) {
        respond(['ok' => false, 'error' => 'Password must be at least 8 characters'], 400);
      }
      $hash = password_hash((string) $data['password'], PASSWORD_DEFAULT);
      $stmt = db()->prepare('UPDATE users SET name=?, email=?, role=?, is_active=?, password_hash=? WHERE id=?');
      $stmt->execute([$name, $email, $role, $isActive, $hash, $id]);
    } else {
      $stmt = db()->prepare('UPDATE users SET name=?, email=?, role=?, is_active=? WHERE id=?');
      $stmt->execute([$name, $email, $role, $isActive, $id]);
    }

    respond(['ok' => true]);
  }

  respond(['ok' => false, 'error' => 'Unknown action. Use ?action=list|create|update'], 400);
} catch (Throwable $e) {
  respond(['ok' => false, 'error' => 'Server error: ' . $e->getMessage()], 500);
}
