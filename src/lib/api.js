const API_BASE = '/api';

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      credentials: 'include',
      ...options,
      headers: {
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {}),
      },
    });
  } catch {
    throw new Error('Cannot reach API. Make sure the site is open at http://localhost:5173 and npm run dev is running.');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  me: () => request('/auth.php?action=me'),
  login: (email, password) =>
    request('/auth.php?action=login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  logout: () => request('/auth.php?action=logout', { method: 'POST', body: '{}' }),

  listUsers: () => request('/users.php?action=list'),
  createUser: (payload) => request('/users.php?action=create', { method: 'POST', body: JSON.stringify(payload) }),
  updateUser: (payload) => request('/users.php?action=update', { method: 'POST', body: JSON.stringify(payload) }),

  listBlogs: (all = false) => request(`/blogs.php?action=list${all ? '&all=1' : ''}`),
  getBlog: ({ id, slug, all = false }) => {
    const q = id ? `id=${id}` : `slug=${encodeURIComponent(slug)}`;
    return request(`/blogs.php?action=get&${q}${all ? '&all=1' : ''}`);
  },
  createBlog: (payload) => request('/blogs.php?action=create', { method: 'POST', body: JSON.stringify(payload) }),
  updateBlog: (payload) => request('/blogs.php?action=update', { method: 'POST', body: JSON.stringify(payload) }),
  deleteBlog: (id) => request('/blogs.php?action=delete', { method: 'POST', body: JSON.stringify({ id }) }),

  listContentPages: () => request('/content.php?action=get'),
  getContent: (page) => request(`/content.php?action=get&page=${encodeURIComponent(page)}`),
  getContentSchema: (page) => request(`/content.php?action=schema&page=${encodeURIComponent(page)}`),
  updateContent: (page, fields) =>
    request('/content.php?action=update', { method: 'POST', body: JSON.stringify({ page, fields }) }),
  ensureContentFields: (page, fields) =>
    request('/content.php?action=ensure', { method: 'POST', body: JSON.stringify({ page, fields }) }),
  upsertContentField: (payload) =>
    request('/content.php?action=upsert', {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
        // force_value used when creating brand-new pages
        force_value: payload.force_value === true,
      }),
    }),

  listMedia: () => request('/media.php?action=list'),
  uploadMedia: (file, altText = '') => {
    const fd = new FormData();
    fd.append('file', file);
    if (altText) fd.append('alt_text', altText);
    return request('/media.php?action=upload', { method: 'POST', body: fd });
  },
  deleteMedia: (id) => request('/media.php?action=delete', { method: 'POST', body: JSON.stringify({ id }) }),
};
