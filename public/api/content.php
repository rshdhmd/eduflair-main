<?php
require __DIR__ . '/bootstrap.php';

$action = read_action();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
  if ($action === 'get' && $method === 'GET') {
    $page = trim((string) ($_GET['page'] ?? ''));
    if ($page === '') {
      // all pages summary for admin
      require_staff();
      $rows = db()->query(
        'SELECT page_key, COUNT(*) AS fields FROM site_content GROUP BY page_key ORDER BY page_key'
      )->fetchAll();
      respond(['ok' => true, 'pages' => $rows]);
    }

    $stmt = db()->prepare(
      'SELECT field_key, field_type, value, label, updated_at FROM site_content WHERE page_key = ? ORDER BY id ASC'
    );
    $stmt->execute([$page]);
    $rows = $stmt->fetchAll();
    $fields = [];
    foreach ($rows as $row) {
      $fields[$row['field_key']] = [
        'type' => $row['field_type'],
        'value' => $row['value'],
        'label' => $row['label'],
        'updated_at' => $row['updated_at'],
      ];
    }
    respond(['ok' => true, 'page' => $page, 'fields' => $fields]);
  }

  if ($action === 'schema' && $method === 'GET') {
    require_staff();
    $page = trim((string) ($_GET['page'] ?? ''));
    if ($page === '') {
      respond(['ok' => false, 'error' => 'page required'], 400);
    }
    $stmt = db()->prepare(
      'SELECT id, page_key, field_key, field_type, value, label, updated_at FROM site_content WHERE page_key = ? ORDER BY id ASC'
    );
    $stmt->execute([$page]);
    respond(['ok' => true, 'fields' => $stmt->fetchAll()]);
  }

  if ($action === 'update' && $method === 'POST') {
    $user = require_staff();
    $data = json_body();
    $page = trim((string) ($data['page'] ?? ''));
    $updates = $data['fields'] ?? null;

    if ($page === '' || !is_array($updates)) {
      respond(['ok' => false, 'error' => 'page and fields object required'], 400);
    }

    $pdo = db();
    $pdo->beginTransaction();
    try {
      $stmt = $pdo->prepare(
        'UPDATE site_content SET value = ?, updated_by = ? WHERE page_key = ? AND field_key = ?'
      );
      foreach ($updates as $fieldKey => $value) {
        $stmt->execute([(string) $value, $user['id'], $page, (string) $fieldKey]);
      }
      $pdo->commit();
    } catch (Throwable $e) {
      $pdo->rollBack();
      throw $e;
    }

    respond(['ok' => true]);
  }

  if ($action === 'upsert' && $method === 'POST') {
    // Staff can upsert field definitions; value overwrite only with force_value
    $user = require_staff();
    $data = json_body();
    $page = trim((string) ($data['page'] ?? ''));
    $fieldKey = trim((string) ($data['field_key'] ?? ''));
    $fieldType = (string) ($data['field_type'] ?? 'text');
    $label = trim((string) ($data['label'] ?? $fieldKey));
    $value = (string) ($data['value'] ?? '');

    if ($page === '' || $fieldKey === '') {
      respond(['ok' => false, 'error' => 'page and field_key required'], 400);
    }
    if (!in_array($fieldType, ['text', 'html', 'image', 'json'], true)) {
      $fieldType = 'text';
    }

    $force = !empty($data['force_value']);
    if ($force) {
      $stmt = db()->prepare(
        'INSERT INTO site_content (page_key, field_key, field_type, value, label, updated_by)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE field_type = VALUES(field_type), value = VALUES(value), label = VALUES(label), updated_by = VALUES(updated_by)'
      );
    } else {
      $stmt = db()->prepare(
        'INSERT INTO site_content (page_key, field_key, field_type, value, label, updated_by)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE field_type = VALUES(field_type), label = VALUES(label), updated_by = VALUES(updated_by)'
      );
    }
    $stmt->execute([$page, $fieldKey, $fieldType, $value, $label, $user['id']]);
    respond(['ok' => true]);
  }

  if ($action === 'ensure' && $method === 'POST') {
    // Create missing fields; fill blank values with defaults (never overwrite non-empty edits)
    $user = require_staff();
    $data = json_body();
    $page = trim((string) ($data['page'] ?? ''));
    $fields = $data['fields'] ?? [];
    if ($page === '' || !is_array($fields)) {
      respond(['ok' => false, 'error' => 'page and fields required'], 400);
    }
    $insert = db()->prepare(
      'INSERT IGNORE INTO site_content (page_key, field_key, field_type, value, label, updated_by)
       VALUES (?, ?, ?, ?, ?, ?)'
    );
    $fill = db()->prepare(
      "UPDATE site_content
       SET value = ?, field_type = ?, label = ?, updated_by = ?
       WHERE page_key = ? AND field_key = ?
         AND (value IS NULL OR value = '' OR value = '[]' OR value = '{}')"
    );
    $added = 0;
    $filled = 0;
    foreach ($fields as $f) {
      $fk = trim((string) ($f['field_key'] ?? ''));
      if ($fk === '') continue;
      $ft = (string) ($f['field_type'] ?? 'text');
      if (!in_array($ft, ['text', 'html', 'image', 'json'], true)) $ft = 'text';
      $val = (string) ($f['value'] ?? '');
      $label = trim((string) ($f['label'] ?? $fk));
      $insert->execute([$page, $fk, $ft, $val, $label, $user['id']]);
      if ($insert->rowCount() > 0) {
        $added += 1;
        continue;
      }
      if ($val !== '' && $val !== '[]' && $val !== '{}') {
        $fill->execute([$val, $ft, $label, $user['id'], $page, $fk]);
        $filled += $fill->rowCount() > 0 ? 1 : 0;
      }
    }
    respond(['ok' => true, 'added' => $added, 'filled' => $filled]);
  }

  respond(['ok' => false, 'error' => 'Unknown action'], 400);
} catch (Throwable $e) {
  respond(['ok' => false, 'error' => 'Server error: ' . $e->getMessage()], 500);
}
