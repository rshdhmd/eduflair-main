import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../lib/api';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await api.listBlogs(false);
        setPosts(data.posts || []);
      } catch (err) {
        setError(err.message || 'Could not load posts');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Layout>
      <div style={{ backgroundColor: '#003c4c' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>Insights</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Blog</h1>
          <p className="mt-3 text-white/70 max-w-2xl text-sm md:text-base">
            Guides and updates on Ausbildung, study abroad, language training, and overseas careers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {loading && <p className="text-gray-500 text-sm">Loading posts…</p>}
        {error && (
          <div className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-6">
            {error}. Blog will appear here once the CMS database is connected.
          </div>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="text-gray-500 text-sm">No published posts yet. Check back soon.</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                {post.cover_image ? (
                  <img src={post.cover_image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400" style={{ backgroundColor: '#e8f4f7' }}>
                    Eduflair
                  </div>
                )}
              </div>
              <div className="p-5">
                {post.published_at && (
                  <p className="text-xs text-gray-400 mb-2">{new Date(post.published_at).toLocaleDateString()}</p>
                )}
                <h2 className="font-bold text-lg mb-2 group-hover:underline" style={{ color: '#003c4c' }}>{post.title}</h2>
                {post.excerpt && <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
