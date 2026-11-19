<?php
require __DIR__ . '/bootstrap.php';

$action = read_action();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

$uploadDir = dirname(__DIR__) . '/uploads';
$publicPrefix = '/uploads';

try {
  if ($action === 'list' && $method === 'GET') {
    require_staff();
    $rows = db()->query(
      'SELECT m.*, u.name AS uploaded_by_name
       FROM media m
       LEFT JOIN users u ON u.id = m.uploaded_by
       ORDER BY m.id DESC
       LIMIT 200'
    )->fetchAll();
    respond(['ok' => true, 'media' => $rows]);
  }

  if ($action === 'upload' && $method === 'POST') {
    $user = require_staff();

    if (empty($_FILES['file']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
      respond(['ok' => false, 'error' => 'No file uploaded'], 400);
    }

    $file = $_FILES['file'];
    if (($file['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK) {
      respond(['ok' => false, 'error' => 'Upload failed'], 400);
    }
    if (($file['size'] ?? 0) > 5 * 1024 * 1024) {
      respond(['ok' => false, 'error' => 'File too large (max 5MB)'], 400);
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']) ?: '';
    $allowed = [
      'image/jpeg' => 'jpg',
      'image/png' => 'png',
      'image/webp' => 'webp',
    ];
    if (!isset($allowed[$mime])) {
      respond(['ok' => false, 'error' => 'Only JPG, PNG, and WebP images are allowed'], 400);
    }

    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0755, true);
    }

    $ext = $allowed[$mime];
    $stored = bin2hex(random_bytes(16)) . '.' . $ext;
    $dest = $uploadDir . '/' . $stored;
    if (!move_uploaded_file($file['tmp_name'], $dest)) {
      respond(['ok' => false, 'error' => 'Could not save file'], 500);
    }

    $alt = trim((string) ($_POST['alt_text'] ?? ''));
    $path = $publicPrefix . '/' . $stored;
    $origName = basename((string) $file['name']);

    $stmt = db()->prepare(
      'INSERT INTO media (filename, path, mime, size, alt_text, uploaded_by) VALUES (?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$origName, $path, $mime, (int) $file['size'], $alt ?: null, $user['id']]);

    respond([
      'ok' => true,
      'media' => [
        'id' => (int) db()->lastInsertId(),
        'filename' => $origName,
        'path' => $path,
        'mime' => $mime,
        'size' => (int) $file['size'],
        'alt_text' => $alt,
      ],
    ]);
  }

  if ($action === 'delete' && $method === 'POST') {
    require_staff();
    $data = json_body();
    $id = (int) ($data['id'] ?? 0);
    if ($id < 1) {
      respond(['ok' => false, 'error' => 'id required'], 400);
    }

    $stmt = db()->prepare('SELECT * FROM media WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) {
      respond(['ok' => false, 'error' => 'Not found'], 404);
    }

    $full = dirname(__DIR__) . $row['path'];
    // Only delete inside uploads
    $realUpload = realpath($uploadDir);
    $realFile = realpath($full);
    if ($realUpload && $realFile && str_starts_with($realFile, $realUpload) && is_file($realFile)) {
      @unlink($realFile);
    }

    $del = db()->prepare('DELETE FROM media WHERE id = ?');
    $del->execute([$id]);
    respond(['ok' => true]);
  }

  respond(['ok' => false, 'error' => 'Unknown action'], 400);
} catch (Throwable $e) {
  respond(['ok' => false, 'error' => 'Server error: ' . $e->getMessage()], 500);
}
