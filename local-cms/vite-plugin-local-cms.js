/**
 * Local-only CMS API (Vite middleware) so you can preview admin/blog
 * without installing PHP/MySQL. Production on Hostinger still uses /public/api/*.php
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const STORE_PATH = path.join(__dirname, 'store.json');
const UPLOAD_DIR = path.join(ROOT, 'public', 'uploads');

const SESSION_COOKIE = 'eduflair_local_session';
const sessions = new Map();

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  try {
    const [salt, hash] = String(stored).split(':');
    if (!salt || !hash) return false;
    const check = crypto.scryptSync(password, salt, 64).toString('hex');
    if (hash.length !== check.length) return false;
    return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(check, 'hex'));
  } catch {
    return false;
  }
}

function slugify(text) {
  const s = String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return s || `post-${Date.now()}`;
}

function defaultStore() {
  const now = new Date().toISOString();
  return {
    users: [
      {
        id: 1,
        name: 'Local Admin',
        email: 'admin@eduflair.com',
        password_hash: hashPassword('admin12345'),
        role: 'admin',
        is_active: 1,
        created_at: now,
        updated_at: now,
      },
    ],
    blog_posts: [
      {
        id: 1,
        title: 'Welcome to the Eduflair Blog',
        slug: 'welcome-to-eduflair-blog',
        excerpt: 'This is a sample post so you can preview the blog on localhost.',
        body_html:
          '<p>Edit or delete this post from the admin panel. Publish new posts and they will appear on <strong>/blog</strong>.</p>',
        cover_image: '/images/hero-eduflair.jpg',
        status: 'published',
        author_id: 1,
        published_at: now,
        created_at: now,
        updated_at: now,
        author_name: 'Local Admin',
      },
    ],
    site_content: [
      ['home', 'hero_badge', 'text', "Kerala's Study Abroad & German Careers Specialists", 'Hero badge'],
      ['home', 'hero_title', 'html', 'Guiding Career Success<br />Gateway to Global Education &amp; Career Success!', 'Hero headline'],
      ['home', 'hero_subtitle', 'text', 'At Eduflair, we bridge the gap between aspirations and achievements through expert study abroad consultancy, skill development, and career placement.', 'Hero subtitle'],
      ['home', 'hero_image', 'image', '/images/hero-eduflair.jpg', 'Hero background image'],
      ['home', 'services_title', 'text', 'Our Key Services', 'Services section title'],
      ['home', 'services_subtitle', 'text', 'End-to-end guidance for study abroad, Ausbildung, language training, and overseas placement.', 'Services subtitle'],
      ['our-story', 'hero_title', 'text', 'Our Story', 'Page title'],
      ['our-story', 'hero_subtitle', 'text', "How Eduflair became Kerala’s trusted partner for global education and careers.", 'Page subtitle'],
      ['our-story', 'intro_html', 'html', '<p>Eduflair Learning Solutions guides students and professionals toward international education and career pathways.</p>', 'Intro content'],
      ['contact', 'hero_title', 'text', 'Contact Us', 'Page title'],
      ['contact', 'hero_badge', 'text', 'Get In Touch', 'Hero badge'],
      ['contact', 'form_heading', 'text', 'Send Us a Message', 'Form heading'],
      ['contact', 'sidebar_note', 'text', 'A counsellor will be in touch within 24 hours.', 'Sidebar / success note'],
      ['shared', 'cta_title', 'text', 'Need Assistance?', 'CTA title'],
      ['shared', 'cta_text', 'text', 'Talk to our counsellors about Ausbildung, study abroad, language training, or placement.', 'CTA text'],
      ['shared', 'cta_button', 'text', 'Check Eligibility', 'CTA button label'],
      ['study-abroad', 'hero_title', 'text', 'Study Abroad From Kerala — Best Overseas Education Consultants', 'Page title'],
      ['study-abroad', 'hero_subtitle', 'text', 'Your gateway to global careers. Expert guidance for UK, Germany, Canada, Ireland, France, Austria, and more.', 'Page subtitle'],
      ['ausbildung-in-germany', 'hero_title', 'text', 'Ausbildung in Germany: Your Pathway to a Career Without a Degree', 'Page title'],
      ['ausbildung-in-germany', 'hero_subtitle', 'text', 'Earn while you learn — zero tuition fees, €1,000–€1,400/month stipend, and a direct route to German Permanent Residency.', 'Page subtitle'],
      ['language-academy', 'hero_title', 'text', 'Eduflair Language & Skill Academy — Kerala', 'Page title'],
      ['language-academy', 'hero_subtitle', 'text', 'In-house certified coaching for German A1–B2, IELTS, and OET.', 'Page subtitle'],
      ['placement', 'hero_title', 'text', 'Overseas Job Consultancy in Kerala — Eduflair Placement & Immigration', 'Page title'],
      ['placement', 'hero_subtitle', 'text', 'Expert placement services for healthcare professionals and skilled workers.', 'Page subtitle'],
    ].map(([page_key, field_key, field_type, value, label], i) => ({
      id: i + 1,
      page_key,
      field_key,
      field_type,
      value,
      label,
      updated_by: 1,
      updated_at: now,
    })),
    media: [],
    nextIds: { users: 2, blog_posts: 2, site_content: 100, media: 1 },
  };
}

function loadStore() {
  try {
    if (!fs.existsSync(STORE_PATH)) {
      const store = defaultStore();
      fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true });
      fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2));
      return store;
    }
    return JSON.parse(fs.readFileSync(STORE_PATH, 'utf8'));
  } catch (err) {
    console.error('[local-cms] loadStore failed, using defaults:', err.message);
    return defaultStore();
  }
}

function saveStore(store) {
  try {
    fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true });
    fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2));
  } catch (err) {
    console.error('[local-cms] saveStore failed:', err.message);
  }
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  header.split(';').forEach((part) => {
    const [k, ...rest] = part.trim().split('=');
    if (k) out[k] = decodeURIComponent(rest.join('=') || '');
  });
  return out;
}

function setCookie(res, name, value, maxAgeSec = 60 * 60 * 12) {
  const prev = res.getHeader('Set-Cookie');
  const cookies = Array.isArray(prev) ? prev : prev ? [prev] : [];
  cookies.push(
    `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}`
  );
  res.setHeader('Set-Cookie', cookies);
}

function clearCookie(res, name) {
  const prev = res.getHeader('Set-Cookie');
  const cookies = Array.isArray(prev) ? prev : prev ? [prev] : [];
  cookies.push(`${name}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  res.setHeader('Set-Cookie', cookies);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      const type = req.headers['content-type'] || '';
      if (type.includes('application/json')) {
        try {
          resolve(buf.length ? JSON.parse(buf.toString('utf8')) : {});
        } catch {
          resolve({});
        }
      } else {
        resolve({ raw: buf, type });
      }
    });
    req.on('error', reject);
  });
}

function json(res, data, code = 200) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

function publicUser(u) {
  return { id: u.id, name: u.name, email: u.email, role: u.role };
}

function currentUser(req, store) {
  const cookies = parseCookies(req);
  const sid = cookies[SESSION_COOKIE];
  if (!sid || !sessions.has(sid)) return null;
  const userId = sessions.get(sid);
  const user = store.users.find((u) => u.id === userId && Number(u.is_active));
  return user || null;
}

function requireStaff(req, res, store, adminOnly = false) {
  const user = currentUser(req, store);
  if (!user) {
    json(res, { ok: false, error: 'Unauthorized' }, 401);
    return null;
  }
  if (adminOnly && user.role !== 'admin') {
    json(res, { ok: false, error: 'Forbidden — admin only' }, 403);
    return null;
  }
  return user;
}

async function parseMultipart(req) {
  // Minimal multipart parser for single file field "file"
  const body = await readBody(req);
  if (!body.raw) return null;
  const type = body.type || '';
  const m = /boundary=(.+)$/i.exec(type);
  if (!m) return null;
  const boundary = m[1].trim();
  const parts = body.raw.toString('binary').split(`--${boundary}`);
  for (const part of parts) {
    if (!part.includes('Content-Disposition') || !part.includes('name="file"')) continue;
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd < 0) continue;
    const headers = part.slice(0, headerEnd);
    let data = part.slice(headerEnd + 4);
    if (data.endsWith('\r\n')) data = data.slice(0, -2);
    if (data.endsWith('--')) data = data.slice(0, -2);
    if (data.endsWith('\r\n')) data = data.slice(0, -2);
    const nameMatch = /filename="([^"]+)"/i.exec(headers);
    const filename = nameMatch ? nameMatch[1] : 'upload.bin';
    const mimeMatch = /Content-Type:\s*([^\r\n]+)/i.exec(headers);
    const mime = mimeMatch ? mimeMatch[1].trim() : 'application/octet-stream';
    return { filename, mime, buffer: Buffer.from(data, 'binary') };
  }
  return null;
}

export function localCmsPlugin() {
  return {
    name: 'eduflair-local-cms',
    configureServer(server) {
      if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

      // Pre-middleware so /api/* is never served as raw PHP files from /public
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url || '/';
          const url = new URL(rawUrl, 'http://localhost');

          // Local contact form stub (Hostinger uses real contact.php)
          if (url.pathname === '/contact.php') {
            if ((req.method || 'GET').toUpperCase() === 'POST') {
              await readBody(req);
              return json(res, { ok: true, local: true });
            }
            return json(res, { ok: false, error: 'Method not allowed' }, 405);
          }

          if (!url.pathname.startsWith('/api/')) return next();

          // Map /api/auth.php?action=login → file=auth, action=login
          const file = url.pathname.replace(/^\/api\//, '').replace(/\.php$/, '');
          const action = url.searchParams.get('action') || '';
          const method = (req.method || 'GET').toUpperCase();
          const store = loadStore();

          // AUTH
          if (file === 'auth') {
            if (action === 'login' && method === 'POST') {
              const data = await readBody(req);
              const email = String(data.email || '')
                .toLowerCase()
                .trim();
              const password = String(data.password || '');
              const user = store.users.find((u) => u.email === email && Number(u.is_active));
              if (!user || !verifyPassword(password, user.password_hash)) {
                return json(res, { ok: false, error: 'Invalid email or password' }, 401);
              }
              const sid = crypto.randomBytes(24).toString('hex');
              sessions.set(sid, user.id);
              setCookie(res, SESSION_COOKIE, sid);
              return json(res, { ok: true, user: publicUser(user) });
            }
            if (action === 'logout' && method === 'POST') {
              const cookies = parseCookies(req);
              sessions.delete(cookies[SESSION_COOKIE]);
              clearCookie(res, SESSION_COOKIE);
              return json(res, { ok: true });
            }
            if (action === 'me' && method === 'GET') {
              const user = currentUser(req, store);
              return json(res, { ok: true, user: user ? publicUser(user) : null });
            }
            return json(res, { ok: false, error: 'Unknown auth action' }, 400);
          }

          // USERS
          if (file === 'users') {
            if (action === 'list' && method === 'GET') {
              if (!requireStaff(req, res, store, true)) return;
              return json(res, {
                ok: true,
                users: store.users.map(({ password_hash, ...u }) => u),
              });
            }
            if (action === 'create' && method === 'POST') {
              if (!requireStaff(req, res, store, true)) return;
              const data = await readBody(req);
              const name = String(data.name || '').trim();
              const email = String(data.email || '')
                .toLowerCase()
                .trim();
              const password = String(data.password || '');
              const role = data.role === 'admin' ? 'admin' : 'editor';
              if (!name || !email || password.length < 8) {
                return json(res, { ok: false, error: 'Name, email, and password (min 8 chars) are required' }, 400);
              }
              if (store.users.some((u) => u.email === email)) {
                return json(res, { ok: false, error: 'Email already exists' }, 409);
              }
              const now = new Date().toISOString();
              const id = store.nextIds.users++;
              store.users.push({
                id,
                name,
                email,
                password_hash: hashPassword(password),
                role,
                is_active: 1,
                created_at: now,
                updated_at: now,
              });
              saveStore(store);
              return json(res, { ok: true, id });
            }
            if (action === 'update' && method === 'POST') {
              const admin = requireStaff(req, res, store, true);
              if (!admin) return;
              const data = await readBody(req);
              const id = Number(data.id || 0);
              const user = store.users.find((u) => u.id === id);
              if (!user) return json(res, { ok: false, error: 'User not found' }, 404);
              if (data.name != null) user.name = String(data.name).trim();
              if (data.email != null) user.email = String(data.email).toLowerCase().trim();
              if (data.role != null) user.role = data.role === 'admin' ? 'admin' : 'editor';
              if (data.is_active != null) user.is_active = data.is_active ? 1 : 0;
              if (id === admin.id && (!user.is_active || user.role !== 'admin')) {
                return json(res, { ok: false, error: 'You cannot deactivate yourself or remove your own admin role' }, 400);
              }
              if (data.password) {
                if (String(data.password).length < 8) {
                  return json(res, { ok: false, error: 'Password must be at least 8 characters' }, 400);
                }
                user.password_hash = hashPassword(String(data.password));
              }
              user.updated_at = new Date().toISOString();
              saveStore(store);
              return json(res, { ok: true });
            }
          }

          // BLOGS
          if (file === 'blogs') {
            if (action === 'list' && method === 'GET') {
              const all = url.searchParams.get('all') === '1';
              if (all && !requireStaff(req, res, store)) return;
              const posts = all
                ? [...store.blog_posts].sort((a, b) => String(b.updated_at).localeCompare(String(a.updated_at)))
                : store.blog_posts
                    .filter((p) => p.status === 'published')
                    .sort((a, b) => String(b.published_at || '').localeCompare(String(a.published_at || '')));
              return json(res, { ok: true, posts });
            }
            if (action === 'get' && method === 'GET') {
              const all = url.searchParams.get('all') === '1';
              if (all && !requireStaff(req, res, store)) return;
              const id = Number(url.searchParams.get('id') || 0);
              const slug = url.searchParams.get('slug') || '';
              let post = id
                ? store.blog_posts.find((p) => p.id === id)
                : store.blog_posts.find((p) => p.slug === slug);
              if (!post || (!all && post.status !== 'published')) {
                return json(res, { ok: false, error: 'Post not found' }, 404);
              }
              return json(res, { ok: true, post });
            }
            if (action === 'create' && method === 'POST') {
              const user = requireStaff(req, res, store);
              if (!user) return;
              const data = await readBody(req);
              const title = String(data.title || '').trim();
              const body_html = String(data.body_html || '');
              if (!title || !body_html) return json(res, { ok: false, error: 'Title and body are required' }, 400);
              let slug = slugify(data.slug || title);
              const base = slug;
              let i = 1;
              while (store.blog_posts.some((p) => p.slug === slug)) slug = `${base}-${i++}`;
              const now = new Date().toISOString();
              const status = data.status === 'published' ? 'published' : 'draft';
              const id = store.nextIds.blog_posts++;
              const post = {
                id,
                title,
                slug,
                excerpt: String(data.excerpt || ''),
                body_html,
                cover_image: data.cover_image || null,
                status,
                author_id: user.id,
                author_name: user.name,
                published_at: status === 'published' ? now : null,
                created_at: now,
                updated_at: now,
              };
              store.blog_posts.push(post);
              saveStore(store);
              return json(res, { ok: true, id, slug });
            }
            if (action === 'update' && method === 'POST') {
              if (!requireStaff(req, res, store)) return;
              const data = await readBody(req);
              const id = Number(data.id || 0);
              const post = store.blog_posts.find((p) => p.id === id);
              if (!post) return json(res, { ok: false, error: 'Post not found' }, 404);
              if (data.title != null) post.title = String(data.title).trim();
              if (data.body_html != null) post.body_html = String(data.body_html);
              if (data.excerpt != null) post.excerpt = String(data.excerpt);
              if (data.cover_image !== undefined) post.cover_image = data.cover_image || null;
              if (data.status != null) post.status = data.status === 'published' ? 'published' : 'draft';
              if (data.slug != null) {
                const slug = slugify(data.slug);
                if (store.blog_posts.some((p) => p.slug === slug && p.id !== id)) {
                  return json(res, { ok: false, error: 'Slug already in use' }, 409);
                }
                post.slug = slug;
              }
              if (post.status === 'published' && !post.published_at) post.published_at = new Date().toISOString();
              post.updated_at = new Date().toISOString();
              saveStore(store);
              return json(res, { ok: true, slug: post.slug });
            }
            if (action === 'delete' && method === 'POST') {
              if (!requireStaff(req, res, store)) return;
              const data = await readBody(req);
              const id = Number(data.id || url.searchParams.get('id') || 0);
              store.blog_posts = store.blog_posts.filter((p) => p.id !== id);
              saveStore(store);
              return json(res, { ok: true });
            }
          }

          // CONTENT
          if (file === 'content') {
            if (action === 'get' && method === 'GET') {
              const page = url.searchParams.get('page') || '';
              if (!page) {
                if (!requireStaff(req, res, store)) return;
                const map = {};
                store.site_content.forEach((f) => {
                  map[f.page_key] = (map[f.page_key] || 0) + 1;
                });
                return json(res, {
                  ok: true,
                  pages: Object.entries(map).map(([page_key, fields]) => ({ page_key, fields })),
                });
              }
              const fields = {};
              store.site_content
                .filter((f) => f.page_key === page)
                .forEach((f) => {
                  fields[f.field_key] = {
                    type: f.field_type,
                    value: f.value,
                    label: f.label,
                    updated_at: f.updated_at,
                  };
                });
              return json(res, { ok: true, page, fields });
            }
            if (action === 'schema' && method === 'GET') {
              if (!requireStaff(req, res, store)) return;
              const page = url.searchParams.get('page') || '';
              return json(res, {
                ok: true,
                fields: store.site_content.filter((f) => f.page_key === page),
              });
            }
            if (action === 'update' && method === 'POST') {
              const user = requireStaff(req, res, store);
              if (!user) return;
              const data = await readBody(req);
              const page = String(data.page || '');
              const updates = data.fields || {};
              Object.entries(updates).forEach(([field_key, value]) => {
                const row = store.site_content.find((f) => f.page_key === page && f.field_key === field_key);
                if (row) {
                  row.value = String(value);
                  row.updated_by = user.id;
                  row.updated_at = new Date().toISOString();
                }
              });
              saveStore(store);
              return json(res, { ok: true });
            }
            if (action === 'upsert' && method === 'POST') {
              const user = requireStaff(req, res, store);
              if (!user) return;
              const data = await readBody(req);
              const page_key = String(data.page || '').trim();
              const field_key = String(data.field_key || '').trim();
              if (!page_key || !field_key) return json(res, { ok: false, error: 'page and field_key required' }, 400);
              let row = store.site_content.find((f) => f.page_key === page_key && f.field_key === field_key);
              const now = new Date().toISOString();
              const force = data.force_value === true;
              if (!row) {
                row = {
                  id: store.nextIds.site_content++,
                  page_key,
                  field_key,
                  field_type: data.field_type || 'text',
                  value: String(data.value || ''),
                  label: data.label || field_key,
                  updated_by: user.id,
                  updated_at: now,
                };
                store.site_content.push(row);
              } else {
                row.field_type = data.field_type || row.field_type;
                if (force) row.value = String(data.value ?? row.value);
                row.label = data.label || row.label;
                row.updated_by = user.id;
                row.updated_at = now;
              }
              saveStore(store);
              return json(res, { ok: true });
            }

            if (action === 'ensure' && method === 'POST') {
              const user = requireStaff(req, res, store);
              if (!user) return;
              const data = await readBody(req);
              const page = String(data.page || '').trim();
              const fields = Array.isArray(data.fields) ? data.fields : [];
              if (!page) return json(res, { ok: false, error: 'page required' }, 400);
              let added = 0;
              let filled = 0;
              const now = new Date().toISOString();
              fields.forEach((f) => {
                const field_key = String(f.field_key || '').trim();
                if (!field_key) return;
                const nextVal = String(f.value ?? '');
                const row = store.site_content.find((r) => r.page_key === page && r.field_key === field_key);
                if (!row) {
                  store.site_content.push({
                    id: store.nextIds.site_content++,
                    page_key: page,
                    field_key,
                    field_type: f.field_type || 'text',
                    value: nextVal,
                    label: f.label || field_key,
                    updated_by: user.id,
                    updated_at: now,
                  });
                  added += 1;
                  return;
                }
                // Fill blank / empty-list values with registry defaults (never overwrite real edits)
                const empty =
                  row.value == null ||
                  row.value === '' ||
                  row.value === '[]' ||
                  row.value === '{}';
                if (empty && nextVal && nextVal !== '[]' && nextVal !== '{}') {
                  row.value = nextVal;
                  row.field_type = f.field_type || row.field_type;
                  row.label = f.label || row.label;
                  row.updated_by = user.id;
                  row.updated_at = now;
                  filled += 1;
                }
              });
              saveStore(store);
              return json(res, { ok: true, added, filled });
            }
          }

          // MEDIA
          if (file === 'media') {
            if (action === 'list' && method === 'GET') {
              if (!requireStaff(req, res, store)) return;
              return json(res, { ok: true, media: [...store.media].reverse() });
            }
            if (action === 'upload' && method === 'POST') {
              const user = requireStaff(req, res, store);
              if (!user) return;
              const fileData = await parseMultipart(req);
              if (!fileData) return json(res, { ok: false, error: 'No file uploaded' }, 400);
              const allowed = {
                'image/jpeg': 'jpg',
                'image/png': 'png',
                'image/webp': 'webp',
              };
              if (!allowed[fileData.mime]) {
                return json(res, { ok: false, error: 'Only JPG, PNG, and WebP images are allowed' }, 400);
              }
              if (fileData.buffer.length > 5 * 1024 * 1024) {
                return json(res, { ok: false, error: 'File too large (max 5MB)' }, 400);
              }
              const stored = `${crypto.randomBytes(16).toString('hex')}.${allowed[fileData.mime]}`;
              fs.writeFileSync(path.join(UPLOAD_DIR, stored), fileData.buffer);
              const mediaPath = `/uploads/${stored}`;
              const id = store.nextIds.media++;
              const row = {
                id,
                filename: fileData.filename,
                path: mediaPath,
                mime: fileData.mime,
                size: fileData.buffer.length,
                alt_text: null,
                uploaded_by: user.id,
                uploaded_by_name: user.name,
                created_at: new Date().toISOString(),
              };
              store.media.push(row);
              saveStore(store);
              return json(res, { ok: true, media: row });
            }
            if (action === 'delete' && method === 'POST') {
              if (!requireStaff(req, res, store)) return;
              const data = await readBody(req);
              const id = Number(data.id || 0);
              const row = store.media.find((m) => m.id === id);
              if (!row) return json(res, { ok: false, error: 'Not found' }, 404);
              const full = path.join(ROOT, 'public', row.path.replace(/^\//, ''));
              if (fs.existsSync(full)) fs.unlinkSync(full);
              store.media = store.media.filter((m) => m.id !== id);
              saveStore(store);
              return json(res, { ok: true });
            }
          }

          // contact.php is separate — ignore
          return json(res, { ok: false, error: `Unknown local API route: ${file}?action=${action}` }, 404);
        } catch (err) {
          console.error('[local-cms]', err);
          return json(res, { ok: false, error: err.message || 'Server error' }, 500);
        }
      });
    },
  };
}
