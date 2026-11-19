import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../lib/api';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError('');
      try {
        const data = await api.getBlog({ slug });
        setPost(data.post);
      } catch (err) {
        setError(err.message || 'Post not found');
        setPost(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  return (
    <Layout>
      <div style={{ backgroundColor: '#003c4c' }} className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="text-xs text-white/60 hover:text-white">← Back to Blog</Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {loading && <p className="text-gray-500 text-sm">Loading…</p>}
        {error && !loading && (
          <div>
            <h1 className="text-2xl font-extrabold mb-3" style={{ color: '#003c4c' }}>Post not found</h1>
            <p className="text-gray-500 text-sm mb-6">{error}</p>
            <Link to="/blog" className="text-sm font-semibold underline" style={{ color: '#003c4c' }}>View all posts</Link>
          </div>
        )}
        {post && (
          <>
            {post.published_at && (
              <p className="text-xs text-gray-400 mb-3">{new Date(post.published_at).toLocaleDateString()}</p>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight" style={{ color: '#003c4c' }}>
              {post.title}
            </h1>
            {post.cover_image && (
              <img src={post.cover_image} alt="" className="w-full rounded-2xl mb-8 object-cover max-h-[420px]" />
            )}
            {post.excerpt && <p className="text-lg text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>}
            <div
              className="prose prose-p:text-gray-600 prose-headings:text-[#003c4c] max-w-none text-[15px] leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          </>
        )}
      </article>
    </Layout>
  );
}
