import { useEffect, useRef, useState } from 'react';
import { api } from '../../lib/api';

export default function AdminMedia() {
  const [media, setMedia] = useState([]);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState('');
  const inputRef = useRef(null);

  const load = async () => {
    try {
      const data = await api.listMedia();
      setMedia(data.media || []);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      await api.uploadMedia(file);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const onDelete = async (id) => {
    if (!confirm('Delete this image?')) return;
    try {
      await api.deleteMedia(id);
      setMedia((m) => m.filter((x) => x.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const copyPath = async (path) => {
    try {
      await navigator.clipboard.writeText(path);
      setCopied(path);
      setTimeout(() => setCopied(''), 2000);
    } catch {
      prompt('Copy path:', path);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between mb-8 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#ffa800' }}>
            Assets
          </p>
          <h1 className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>Media library</h1>
          <p className="text-sm text-slate-500 mt-2">Upload images, then pick them in Pages → section image fields.</p>
        </div>
        <label
          className="text-sm font-bold px-5 py-3 rounded-xl text-white cursor-pointer shadow-sm"
          style={{ backgroundColor: '#003c4c' }}
        >
          {uploading ? 'Uploading…' : 'Upload image'}
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={onUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
      )}

      {media.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-14 text-center">
          <p className="text-slate-500 text-sm mb-4">No images yet — upload your first asset.</p>
          <p className="text-xs text-slate-400">JPG, PNG, WebP · max 5MB</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {media.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-slate-50">
                <img src={m.path} alt={m.alt_text || ''} className="w-full h-full object-cover" />
              </div>
              <div className="p-3.5">
                <p className="text-xs text-slate-500 truncate font-medium">{m.filename}</p>
                <div className="flex gap-3 mt-2.5">
                  <button
                    type="button"
                    onClick={() => copyPath(m.path)}
                    className="text-xs font-bold"
                    style={{ color: '#003c4c' }}
                  >
                    {copied === m.path ? 'Copied ✓' : 'Copy URL'}
                  </button>
                  <button type="button" onClick={() => onDelete(m.id)} className="text-xs font-semibold text-red-600">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
