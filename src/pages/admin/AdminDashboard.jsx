import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../lib/api';
import { useAuth } from '../../lib/auth';
import { PAGE_GROUPS } from '../../cms/pageRegistry';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ posts: 0, published: 0, media: 0 });

  useEffect(() => {
    (async () => {
      try {
        const [blogs, media] = await Promise.all([api.listBlogs(true), api.listMedia()]);
        const posts = blogs.posts || [];
        setStats({
          posts: posts.length,
          published: posts.filter((p) => p.status === 'published').length,
          media: (media.media || []).length,
        });
      } catch {
        /* ignore */
      }
    })();
  }, []);

  const pageCount = PAGE_GROUPS.reduce((n, g) => n + g.pages.length, 0);

  const cards = [
    { label: 'Editable pages', value: pageCount, to: '/admin/pages', hint: 'Sections & images' },
    { label: 'Blog posts', value: stats.posts, to: '/admin/blogs', hint: `${stats.published} published` },
    { label: 'Media files', value: stats.media, to: '/admin/media', hint: 'Uploads library' },
  ];

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#ffa800' }}>
          Dashboard
        </p>
        <h1 className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>
          Hello, {user?.name?.split(' ')[0] || 'there'}
        </h1>
        <p className="text-slate-500 mt-2 text-sm max-w-xl">
          Edit any page section, swap images, publish blogs, or add new Study Abroad pages — all from here.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {cards.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:border-[#003c4c]/20 transition-all"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400 font-bold">{c.label}</p>
            <p className="text-4xl font-extrabold mt-2" style={{ color: '#003c4c' }}>{c.value}</p>
            <p className="text-xs text-slate-500 mt-2">{c.hint}</p>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 className="font-bold mb-2" style={{ color: '#003c4c' }}>Edit website content</h2>
          <p className="text-sm text-slate-500 mb-4">
            Open Pages to change hero text, section copy, and images for Home, Study Abroad destinations, Placement, and more.
          </p>
          <Link
            to="/admin/pages"
            className="inline-flex text-sm font-bold px-5 py-2.5 rounded-xl text-white"
            style={{ backgroundColor: '#003c4c' }}
          >
            Open page editor →
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <h2 className="font-bold mb-2" style={{ color: '#003c4c' }}>Add a Study Abroad page</h2>
          <p className="text-sm text-slate-500 mb-4">
            In Pages → Study Abroad, click “+ Add page” to create a new destination (e.g. Study in Spain) with full section editing.
          </p>
          <Link
            to="/admin/pages"
            className="inline-flex text-sm font-bold px-5 py-2.5 rounded-xl border border-slate-200"
            style={{ color: '#003c4c' }}
          >
            Go to Pages →
          </Link>
        </div>
      </div>
    </div>
  );
}
