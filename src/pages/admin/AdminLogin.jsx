import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';

export default function AdminLogin() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (!loading && user) {
    return <Navigate to="/admin" replace />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await login(email.trim(), password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #e8f4f7 0%, #f7fafb 45%, #fff6e8 100%)' }}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10"
      >
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#ffa800' }}>
            Eduflair CMS
          </p>
          <h1 className="text-3xl font-extrabold mb-2" style={{ color: '#003c4c' }}>
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">Sign in to edit pages, sections, images and blog posts.</p>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
        )}

        <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25 focus:border-[#003c4c]"
          placeholder="you@eduflair.com"
        />

        <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25 focus:border-[#003c4c]"
          placeholder="••••••••"
        />

        <button
          type="submit"
          disabled={busy}
          className="w-full text-white font-bold py-3.5 rounded-xl disabled:opacity-60 shadow-sm"
          style={{ backgroundColor: '#003c4c' }}
        >
          {busy ? 'Signing in…' : 'Sign in to admin'}
        </button>
      </form>
    </div>
  );
}
