import { useState } from 'react';
import { NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';

const NAV = [
  { to: '/admin', label: 'Dashboard', end: true, icon: '▦' },
  { to: '/admin/pages', label: 'Pages & sections', icon: '☰' },
  { to: '/admin/blogs', label: 'Blog', icon: '✎' },
  { to: '/admin/media', label: 'Media library', icon: '◫' },
  { to: '/admin/users', label: 'Team users', adminOnly: true, icon: '☺' },
];

export default function AdminLayout() {
  const { user, loading, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-slate-500" style={{ background: '#eef3f5' }}>
        Loading admin…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const onLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const Sidebar = (
    <aside
      className="w-64 flex-shrink-0 text-white flex flex-col h-full shadow-xl"
      style={{ background: 'linear-gradient(180deg, #003c4c 0%, #002a36 100%)' }}
    >
      <div className="px-5 py-6 border-b border-white/10 flex items-start justify-between gap-2">
        <div>
          <p className="font-extrabold text-xl tracking-tight">Eduflair</p>
          <p className="text-xs text-white/50 mt-1">Content management</p>
        </div>
        <button
          type="button"
          className="lg:hidden text-white/60 hover:text-white p-1"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {NAV.filter((n) => !n.adminOnly || isAdmin).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white text-[#003c4c] shadow-sm'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <span className="opacity-70 text-base w-5 text-center">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="rounded-xl bg-white/5 px-3 py-3 mb-3">
          <p className="text-sm font-semibold truncate">{user.name}</p>
          <p className="text-[10px] uppercase tracking-wider text-white/45 mt-0.5">{user.role}</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="w-full text-left text-sm text-white/80 hover:text-white px-1 py-1"
        >
          Log out
        </button>
        <a href="/" target="_blank" rel="noreferrer" className="block mt-2 text-xs text-white/40 hover:text-white/70 px-1">
          Open website ↗
        </a>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen flex" style={{ background: '#eef3f5' }}>
      <div className="hidden lg:flex sticky top-0 h-screen">{Sidebar}</div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="absolute inset-y-0 left-0">{Sidebar}</div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-600"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <p className="font-bold text-sm" style={{ color: '#003c4c' }}>Eduflair Admin</p>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
