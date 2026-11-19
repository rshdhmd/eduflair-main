<?php
require __DIR__ . '/bootstrap.php';

$action = read_action();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

try {
  if ($action === 'list' && $method === 'GET') {
    $status = trim((string) ($_GET['status'] ?? 'published'));
    $adminView = isset($_GET['all']) && $_GET['all'] === '1';

    if ($adminView) {
      require_staff();
      $sql = 'SELECT b.*, u.name AS author_name FROM blog_posts b LEFT JOIN users u ON u.id = b.author_id ORDER BY b.updated_at DESC';
      $rows = db()->query($sql)->fetchAll();
    } else {
      $sql = 'SELECT id, title, slug, excerpt, cover_image, published_at, created_at
              FROM blog_posts
              WHERE status = "published"
              ORDER BY published_at DESC, id DESC';
      $rows = db()->query($sql)->fetchAll();
    }
    respond(['ok' => true, 'posts' => $rows]);
  }

  if ($action === 'get' && $method === 'GET') {
    $id = (int) ($_GET['id'] ?? 0);
    $slug = trim((string) ($_GET['slug'] ?? ''));
    $adminView = isset($_GET['all']) && $_GET['all'] === '1';

    if ($adminView) {
      require_staff();
      if ($id > 0) {
        $stmt = db()->prepare('SELECT b.*, u.name AS author_name FROM blog_posts b LEFT JOIN users u ON u.id = b.author_id WHERE b.id = ?');
        $stmt->execute([$id]);
      } else {
        $stmt = db()->prepare('SELECT b.*, u.name AS author_name FROM blog_posts b LEFT JOIN users u ON u.id = b.author_id WHERE b.slug = ?');
        $stmt->execute([$slug]);
      }
    } else {
      if ($id > 0) {
        $stmt = db()->prepare('SELECT * FROM blog_posts WHERE id = ? AND status = "published"');
        $stmt->execute([$id]);
      } else {
        $stmt = db()->prepare('SELECT * FROM blog_posts WHERE slug = ? AND status = "published"');
        $stmt->execute([$slug]);
      }
    }

    $post = $stmt->fetch();
    if (!$post) {
      respond(['ok' => false, 'error' => 'Post not found'], 404);
    }
    respond(['ok' => true, 'post' => $post]);
  }

  if ($action === 'create' && $method === 'POST') {
    $user = require_staff();
    $data = json_body();
    $title = trim((string) ($data['title'] ?? ''));
    $body = (string) ($data['body_html'] ?? '');
    $excerpt = trim((string) ($data['excerpt'] ?? ''));
    $cover = trim((string) ($data['cover_image'] ?? ''));
    $status = ($data['status'] ?? 'draft') === 'published' ? 'published' : 'draft';
    $slug = trim((string) ($data['slug'] ?? ''));
    if ($slug === '') {
      $slug = slugify($title);
    } else {
      $slug = slugify($slug);
    }

    if ($title === '' || $body === '') {
      respond(['ok' => false, 'error' => 'Title and body are required'], 400);
    }

    // Ensure unique slug
    $base = $slug;
    $i = 1;
    while (true) {
      $check = db()->prepare('SELECT id FROM blog_posts WHERE slug = ?');
      $check->execute([$slug]);
      if (!$check->fetch()) {
        break;
      }
      $slug = $base . '-' . $i++;
    }

    $publishedAt = $status === 'published' ? date('Y-m-d H:i:s') : null;
    $stmt = db()->prepare(
      'INSERT INTO blog_posts (title, slug, excerpt, body_html, cover_image, status, author_id, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$title, $slug, $excerpt, $body, $cover ?: null, $status, $user['id'], $publishedAt]);

    respond(['ok' => true, 'id' => (int) db()->lastInsertId(), 'slug' => $slug]);
  }

  if ($action === 'update' && $method === 'POST') {
    $user = require_staff();
    $data = json_body();
    $id = (int) ($data['id'] ?? 0);
    if ($id < 1) {
      respond(['ok' => false, 'error' => 'Post id required'], 400);
    }

    $stmt = db()->prepare('SELECT * FROM blog_posts WHERE id = ?');
    $stmt->execute([$id]);
    $existing = $stmt->fetch();
    if (!$existing) {
      respond(['ok' => false, 'error' => 'Post not found'], 404);
    }

    $title = trim((string) ($data['title'] ?? $existing['title']));
    $body = (string) ($data['body_html'] ?? $existing['body_html']);
    $excerpt = trim((string) ($data['excerpt'] ?? $existing['excerpt']));
    $cover = array_key_exists('cover_image', $data) ? trim((string) $data['cover_image']) : $existing['cover_image'];
    $status = isset($data['status'])
      ? (($data['status'] === 'published') ? 'published' : 'draft')
      : $existing['status'];
    $slug = isset($data['slug']) ? slugify((string) $data['slug']) : $existing['slug'];

    if ($title === '' || $body === '') {
      respond(['ok' => false, 'error' => 'Title and body are required'], 400);
    }

    $check = db()->prepare('SELECT id FROM blog_posts WHERE slug = ? AND id != ?');
    $check->execute([$slug, $id]);
    if ($check->fetch()) {
      respond(['ok' => false, 'error' => 'Slug already in use'], 409);
    }

    $publishedAt = $existing['published_at'];
    if ($status === 'published' && empty($publishedAt)) {
      $publishedAt = date('Y-m-d H:i:s');
    }
    if ($status === 'draft') {
      // keep published_at history or clear — keep for now
    }

    $stmt = db()->prepare(
      'UPDATE blog_posts SET title=?, slug=?, excerpt=?, body_html=?, cover_image=?, status=?, published_at=? WHERE id=?'
    );
    $stmt->execute([$title, $slug, $excerpt, $body, $cover ?: null, $status, $publishedAt, $id]);

    respond(['ok' => true, 'slug' => $slug]);
  }

  if ($action === 'delete' && $method === 'POST') {
    require_staff();
    $data = json_body();
    $id = (int) ($data['id'] ?? $_GET['id'] ?? 0);
    if ($id < 1) {
      respond(['ok' => false, 'error' => 'Post id required'], 400);
    }
    $stmt = db()->prepare('DELETE FROM blog_posts WHERE id = ?');
    $stmt->execute([$id]);
    respond(['ok' => true]);
  }

  respond(['ok' => false, 'error' => 'Unknown action'], 400);
} catch (Throwable $e) {
  respond(['ok' => false, 'error' => 'Server error: ' . $e->getMessage()], 500);
}
