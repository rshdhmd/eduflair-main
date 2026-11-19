import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../../lib/api';
import { useAuth } from '../../lib/auth';

const emptyForm = { name: '', email: '', password: '', role: 'editor' };

export default function AdminUsers() {
  const { isAdmin, loading: authLoading } = useAuth();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      const data = await api.listUsers();
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  if (authLoading) {
    return <p className="text-sm text-gray-500">Loading…</p>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const onCreate = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api.createUser(form);
      setForm(emptyForm);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const toggleActive = async (u) => {
    try {
      await api.updateUser({ id: u.id, is_active: u.is_active ? 0 : 1 });
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  const changeRole = async (u, role) => {
    try {
      await api.updateUser({ id: u.id, role });
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#ffa800' }}>
          Team
        </p>
        <h1 className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>Users</h1>
        <p className="text-sm text-slate-500 mt-2">Admins manage everything; editors can edit pages, blogs and media.</p>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
      )}

      <form
        onSubmit={onCreate}
        className="bg-white border border-slate-200/80 rounded-2xl p-6 mb-8 grid sm:grid-cols-2 gap-4 shadow-sm"
      >
        <h2 className="sm:col-span-2 font-bold text-lg" style={{ color: '#003c4c' }}>Add staff user</h2>
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25"
        />
        <input
          required
          type="password"
          minLength={8}
          placeholder="Password (min 8)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003c4c]/25"
        >
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={busy}
            className="text-white font-bold px-5 py-3 rounded-xl disabled:opacity-60 shadow-sm"
            style={{ backgroundColor: '#003c4c' }}
          >
            {busy ? 'Creating…' : 'Create user'}
          </button>
        </div>
      </form>

      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wide text-slate-400" style={{ background: 'linear-gradient(90deg,#f8fbfc,#fff)' }}>
            <tr>
              <th className="px-5 py-3.5 font-bold">Name</th>
              <th className="px-5 py-3.5 font-bold">Role</th>
              <th className="px-5 py-3.5 font-bold">Status</th>
              <th className="px-5 py-3.5 font-bold" />
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-slate-100">
                <td className="px-5 py-4">
                  <p className="font-semibold" style={{ color: '#003c4c' }}>{u.name}</p>
                  <p className="text-xs text-slate-400">{u.email}</p>
                </td>
                <td className="px-5 py-4">
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u, e.target.value)}
                    className="border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"
                  >
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-bold ${Number(u.is_active) ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {Number(u.is_active) ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button type="button" onClick={() => toggleActive(u)} className="text-xs font-bold" style={{ color: '#003c4c' }}>
                    {Number(u.is_active) ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
