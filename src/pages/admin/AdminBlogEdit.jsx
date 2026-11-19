import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../lib/api';

export default function AdminBlogEdit() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const navigate = useNavigate();
  const bodyRef = useRef(null);
  const [bodyReady, setBodyReady] = useState(isNew);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    cover_image: '',
    status: 'draft',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [media, setMedia] = useState([]);
  const [showMedia, setShowMedia] = useState(false);
  const [initialBody, setInitialBody] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const m = await api.listMedia();
        setMedia(m.media || []);
      } catch {
        /* ignore */
      }
    })();
  }, []);

  useEffect(() => {
    if (isNew) {
      setBodyReady(true);
      return;
    }
    (async () => {
      try {
        const data = await api.getBlog({ id, all: true });
        const p = data.post;
        setForm({
          title: p.title || '',
          slug: p.slug || '',
          excerpt: p.excerpt || '',
          cover_image: p.cover_image || '',
          status: p.status || 'draft',
        });
        setInitialBody(p.body_html || '');
        setBodyReady(true);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [id, isNew]);

  useEffect(() => {
    if (bodyReady && bodyRef.current && !isNew) {
      bodyRef.current.innerHTML = initialBody;
    }
  }, [bodyReady, initialBody, isNew]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    const body_html = bodyRef.current?.innerHTML || '';
    try {
      if (isNew) {
        const data = await api.createBlog({ ...form, body_html });
        navigate(`/admin/blogs/${data.id}`, { replace: true });
      } else {
        await api.updateBlog({ id: Number(id), ...form, body_html });
        alert('Saved');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link to="/admin/blogs" className="text-sm text-gray-500 hover:underline">
          ← Blog
        </Link>
        <h1 className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>
          {isNew ? 'New post' : 'Edit post'}
        </h1>
      </div>

      {error && <div className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{error}</div>}

      <form onSubmit={onSave} className="space-y-5">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Title</label>
            <input required value={form.title} onChange={set('title')} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Slug (URL)</label>
              <input value={form.slug} onChange={set('slug')} placeholder="auto from title" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Status</label>
              <select value={form.status} onChange={set('status')} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Excerpt</label>
            <textarea value={form.excerpt} onChange={set('excerpt')} rows={2} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Cover image URL</label>
            <div className="flex gap-2">
              <input value={form.cover_image} onChange={set('cover_image')} className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm" placeholder="/uploads/..." />
              <button type="button" onClick={() => setShowMedia(true)} className="px-4 py-2 text-sm font-semibold border border-gray-200 rounded-lg" style={{ color: '#003c4c' }}>
                Pick
              </button>
            </div>
            {form.cover_image && <img src={form.cover_image} alt="" className="mt-3 h-32 object-cover rounded-lg" />}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Body</label>
            {bodyReady ? (
              <div ref={bodyRef} contentEditable suppressContentEditableWarning className="min-h-[220px] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none" />
            ) : (
              <p className="text-sm text-gray-400">Loading editor…</p>
            )}
          </div>
        </div>

        <button type="submit" disabled={saving || !bodyReady} className="text-white font-bold px-6 py-3 rounded-lg disabled:opacity-60" style={{ backgroundColor: '#003c4c' }}>
          {saving ? 'Saving…' : 'Save post'}
        </button>
      </form>

      {showMedia && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6" onClick={() => setShowMedia(false)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-auto p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold mb-4" style={{ color: '#003c4c' }}>Select media</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {media.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className="aspect-square rounded-lg overflow-hidden border border-gray-100"
                  onClick={() => {
                    setForm((f) => ({ ...f, cover_image: m.path }));
                    setShowMedia(false);
                  }}
                >
                  <img src={m.path} alt={m.alt_text || ''} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
