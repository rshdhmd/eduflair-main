import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../lib/api';

export default function AdminBlogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.listBlogs(true);
      setPosts(data.posts || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onDelete = async (id, title) => {
    if (!confirm(`Delete “${title}”? This cannot be undone.`)) return;
    try {
      await api.deleteBlog(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between mb-8 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#ffa800' }}>
            Content
          </p>
          <h1 className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>Blog posts</h1>
          <p className="text-sm text-slate-500 mt-2">Write, draft, and publish articles on the public blog.</p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="text-sm font-bold px-5 py-3 rounded-xl text-white shadow-sm"
          style={{ backgroundColor: '#003c4c' }}
        >
          New post
        </Link>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
      )}
      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : posts.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-14 text-center text-slate-500 text-sm">
          No posts yet. Create your first blog post.
        </div>
      ) : (
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-slate-400" style={{ background: 'linear-gradient(90deg,#f8fbfc,#fff)' }}>
              <tr>
                <th className="px-5 py-3.5 font-bold">Title</th>
                <th className="px-5 py-3.5 font-bold">Status</th>
                <th className="px-5 py-3.5 font-bold">Updated</th>
                <th className="px-5 py-3.5 font-bold" />
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                  <td className="px-5 py-4">
                    <Link to={`/admin/blogs/${p.id}`} className="font-semibold hover:underline" style={{ color: '#003c4c' }}>
                      {p.title}
                    </Link>
                    <p className="text-xs text-slate-400 mt-0.5">/{p.slug}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${
                        p.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-500">
                    {p.updated_at ? new Date(p.updated_at).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-5 py-4 text-right space-x-3">
                    <Link to={`/blog/${p.slug}`} target="_blank" className="text-xs font-semibold text-slate-500 hover:underline">
                      View
                    </Link>
                    <button type="button" onClick={() => onDelete(p.id, p.title)} className="text-xs font-semibold text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
