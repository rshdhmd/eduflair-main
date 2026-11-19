import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../lib/api';
import {
  PAGE_GROUPS,
  getPageDef,
  fieldsForPageDef,
  buildCustomDestinationPage,
} from '../../cms/pageRegistry';
import { asList, toStoredValue, fromStoredValue } from '../../cms/contentHelpers';

function emptyItem(itemFields) {
  const row = {};
  (itemFields || []).forEach((f) => {
    row[f.key] = '';
  });
  return row;
}

function SimpleField({ field, value, onChange, onPickImage }) {
  const inputClass =
    'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#003c4c]/30 focus:border-[#003c4c]';

  if (field.type === 'html') {
    return (
      <textarea
        rows={4}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} font-mono text-[13px] leading-relaxed`}
        placeholder="HTML allowed: <p>, <br>, <strong>…"
      />
    );
  }

  if (field.type === 'image') {
    return (
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
            placeholder="/uploads/… or https://…"
          />
          <button
            type="button"
            onClick={onPickImage}
            className="shrink-0 px-3 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50"
            style={{ color: '#003c4c' }}
          >
            Library
          </button>
        </div>
        {value ? (
          <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50 h-24">
            <img src={value} alt="" className="w-full h-full object-cover" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <input value={value || ''} onChange={(e) => onChange(e.target.value)} className={inputClass} />
  );
}

function ListEditor({ field, value, onChange, onPickImageFor }) {
  const items = Array.isArray(value) ? value : asList(value, []);
  const itemFields = field.itemFields || [{ key: 'text', type: 'text', label: 'Text' }];

  const updateItem = (index, key, v) => {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: v } : item));
    onChange(next);
  };

  const addItem = () => onChange([...items, emptyItem(itemFields)]);
  const removeItem = (index) => onChange(items.filter((_, i) => i !== index));
  const moveItem = (index, dir) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[index], next[j]] = [next[j], next[index]];
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <p className="text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl px-4 py-6 text-center">
          No items yet — click Add item below.
        </p>
      )}
      {items.map((item, index) => (
        <div key={index} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-3">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Item {index + 1}
            </span>
            <div className="flex gap-1">
              <button type="button" onClick={() => moveItem(index, -1)} className="text-xs px-2 py-1 rounded-lg border border-slate-200 bg-white" title="Move up">↑</button>
              <button type="button" onClick={() => moveItem(index, 1)} className="text-xs px-2 py-1 rounded-lg border border-slate-200 bg-white" title="Move down">↓</button>
              <button type="button" onClick={() => removeItem(index)} className="text-xs px-2 py-1 rounded-lg text-red-600 border border-red-100 bg-white">Remove</button>
            </div>
          </div>
          {itemFields.map((f) => (
            <div key={f.key}>
              <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-500 mb-1.5">
                {f.label}
              </label>
              <SimpleField
                field={f}
                value={item[f.key]}
                onChange={(v) => updateItem(index, f.key, v)}
                onPickImage={() => onPickImageFor(index, f.key)}
              />
            </div>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-sm font-bold hover:border-[#003c4c] hover:bg-[#e8f4f7] transition-colors"
        style={{ color: '#003c4c' }}
      >
        + Add item
      </button>
    </div>
  );
}

function FieldEditor({ field, value, onChange, onPickImage, onPickImageForList }) {
  if (field.type === 'list') {
    return (
      <ListEditor
        field={field}
        value={value}
        onChange={onChange}
        onPickImageFor={onPickImageForList}
      />
    );
  }
  return <SimpleField field={field} value={value} onChange={onChange} onPickImage={onPickImage} />;
}

export default function AdminPages() {
  const [customPages, setCustomPages] = useState([]);
  const [selected, setSelected] = useState('home');
  const [openGroup, setOpenGroup] = useState('home');
  const [values, setValues] = useState({});
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [media, setMedia] = useState([]);
  const [pickField, setPickField] = useState(null); // string key OR { listKey, index, itemKey }
  const [showAdd, setShowAdd] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [creating, setCreating] = useState(false);

  const pageDef = useMemo(() => {
    return getPageDef(selected) || customPages.find((p) => p.key === selected) || null;
  }, [selected, customPages]);

  const fieldMeta = useMemo(() => {
    const map = {};
    (pageDef?.sections || []).forEach((s) => {
      (s.fields || []).forEach((f) => {
        map[f.key] = f;
      });
    });
    return map;
  }, [pageDef]);

  const loadMeta = async () => {
    try {
      const [m, meta] = await Promise.all([
        api.listMedia(),
        api.getContent('__cms_meta__').catch(() => ({ fields: {} })),
      ]);
      setMedia(m.media || []);
      const raw = meta.fields?.custom_pages?.value;
      if (raw) {
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (Array.isArray(parsed)) setCustomPages(parsed);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const ensureAndLoad = async (pageKey) => {
    const def = getPageDef(pageKey) || customPages.find((p) => p.key === pageKey);
    if (!def) return;
    setError('');
    try {
      const rows = fieldsForPageDef(def).map((r) => ({
        field_key: r.field_key,
        field_type: r.field_type,
        label: r.label,
        value: r.value,
      }));
      await api.ensureContentFields(pageKey, rows);
      const data = await api.getContentSchema(pageKey);
      const list = data.fields || [];
      const map = {};
      list.forEach((f) => {
        map[f.field_key] = f.value || '';
      });
      // Prefer registry field defs for parsing lists into editable arrays
      (def.sections || []).forEach((section) => {
        (section.fields || []).forEach((f) => {
          const raw = map[f.key];
          if (f.type === 'list') {
            const parsed = fromStoredValue('list', raw, f.default || []);
            map[f.key] = parsed.length ? parsed : (f.default || []);
          } else if (raw === undefined || raw === null || raw === '') {
            map[f.key] = f.default ?? '';
          }
        });
      });
      setValues(map);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadMeta();
  }, []);

  useEffect(() => {
    if (selected) ensureAndLoad(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, customPages]);

  const onSave = async () => {
    setSaving(true);
    setError('');
    setSavedFlash(false);
    try {
      const payload = {};
      Object.entries(values).forEach(([key, val]) => {
        const meta = fieldMeta[key];
        const type = meta?.type || (Array.isArray(val) ? 'list' : 'text');
        payload[key] = toStoredValue(type, val);
      });
      await api.updateContent(selected, payload);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const onCreatePage = async (e) => {
    e.preventDefault();
    if (!showAdd || !newTitle.trim()) return;
    setCreating(true);
    setError('');
    try {
      const def = buildCustomDestinationPage({ title: newTitle.trim(), groupId: showAdd });
      const rows = fieldsForPageDef(def);
      for (const r of rows) {
        await api.upsertContentField({
          page: def.key,
          field_key: r.field_key,
          field_type: r.field_type,
          label: r.label,
          value: r.value,
          force_value: true,
        });
      }
      const nextCustom = [
        ...customPages.filter((p) => p.key !== def.key),
        {
          key: def.key,
          title: def.title,
          path: def.path,
          groupId: def.groupId,
          groupLabel: def.groupLabel,
          isCustom: true,
          sections: def.sections,
        },
      ];
      await api.upsertContentField({
        page: '__cms_meta__',
        field_key: 'custom_pages',
        field_type: 'json',
        label: 'Custom pages',
        value: JSON.stringify(nextCustom),
      });
      setCustomPages(nextCustom);
      setSelected(def.key);
      setOpenGroup(showAdd);
      setShowAdd(null);
      setNewTitle('');
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const pagesInGroup = (groupId) => {
    const builtIn = PAGE_GROUPS.find((g) => g.id === groupId)?.pages || [];
    const extras = customPages.filter((p) => p.groupId === groupId);
    const keys = new Set(builtIn.map((p) => p.key));
    return [...builtIn, ...extras.filter((p) => !keys.has(p.key))];
  };

  const applyPickedImage = (path) => {
    if (!pickField) return;
    if (typeof pickField === 'string') {
      setValues((v) => ({ ...v, [pickField]: path }));
    } else {
      const { listKey, index, itemKey } = pickField;
      setValues((v) => {
        const items = Array.isArray(v[listKey]) ? [...v[listKey]] : asList(v[listKey], []);
        items[index] = { ...items[index], [itemKey]: path };
        return { ...v, [listKey]: items };
      });
    }
    setPickField(null);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] -mx-2">
      <div className="flex flex-col lg:flex-row gap-6 min-h-[70vh]">
        <aside className="lg:w-72 shrink-0">
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden sticky top-6">
            <div className="px-4 py-4 border-b border-slate-100">
              <h1 className="text-lg font-extrabold" style={{ color: '#003c4c' }}>
                Page content
              </h1>
              <p className="text-xs text-slate-500 mt-1">Edit every section, image &amp; card — like WordPress</p>
            </div>
            <div className="max-h-[70vh] overflow-y-auto py-2">
              {PAGE_GROUPS.map((group) => (
                <div key={group.id} className="mb-1">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(openGroup === group.id ? '' : group.id)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50"
                  >
                    <span>{group.label}</span>
                    <span className="text-slate-300">{openGroup === group.id ? '−' : '+'}</span>
                  </button>
                  {openGroup === group.id && (
                    <div className="pb-2">
                      {pagesInGroup(group.id).map((p) => (
                        <button
                          key={p.key}
                          type="button"
                          onClick={() => setSelected(p.key)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            selected === p.key
                              ? 'bg-[#e8f4f7] font-semibold text-[#003c4c] border-r-2 border-[#003c4c]'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {p.title}
                          {p.isCustom && (
                            <span className="ml-2 text-[10px] uppercase tracking-wide text-amber-600 font-bold">New</span>
                          )}
                        </button>
                      ))}
                      {group.allowAdd && (
                        <button
                          type="button"
                          onClick={() => {
                            setShowAdd(group.id);
                            setNewTitle('');
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-[#003c4c] hover:bg-[#e8f4f7]"
                        >
                          + Add page
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
          )}

          {!pageDef ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-slate-500">
              Select a page from the left.
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    {pageDef.groupLabel || 'Page'}
                  </p>
                  <h2 className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>
                    {pageDef.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {(pageDef.sections || []).length} sections · edit headings, text, images, icons &amp; lists
                  </p>
                  {pageDef.path && pageDef.path !== '—' && (
                    <Link
                      to={pageDef.path}
                      target="_blank"
                      className="inline-flex mt-2 text-xs font-semibold text-slate-500 hover:text-[#003c4c]"
                    >
                      View live page ↗ {pageDef.path}
                    </Link>
                  )}
                  {pageDef.isCustom && (
                    <button
                      type="button"
                      onClick={async () => {
                        if (!confirm(`Remove “${pageDef.title}” from the site menu?`)) return;
                        try {
                          const nextCustom = customPages.filter((p) => p.key !== pageDef.key);
                          await api.upsertContentField({
                            page: '__cms_meta__',
                            field_key: 'custom_pages',
                            field_type: 'json',
                            label: 'Custom pages',
                            value: JSON.stringify(nextCustom),
                          });
                          setCustomPages(nextCustom);
                          setSelected('study-abroad');
                          setOpenGroup('study-abroad');
                        } catch (err) {
                          setError(err.message);
                        }
                      }}
                      className="block mt-3 text-xs font-bold text-red-600 hover:underline"
                    >
                      Remove this custom page
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onSave}
                  disabled={saving}
                  className="text-white font-bold px-6 py-3 rounded-xl shadow-sm disabled:opacity-60"
                  style={{ backgroundColor: '#003c4c' }}
                >
                  {saving ? 'Saving…' : savedFlash ? 'Saved ✓' : 'Save all sections'}
                </button>
              </div>

              <div className="space-y-5">
                {(pageDef.sections || []).map((section) => (
                  <section
                    key={section.id}
                    className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden"
                  >
                    <div
                      className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3"
                      style={{ background: 'linear-gradient(90deg,#f8fbfc,#fff)' }}
                    >
                      <div>
                        <h3 className="font-bold text-[#003c4c]">{section.title}</h3>
                        {section.description && (
                          <p className="text-xs text-slate-500 mt-0.5">{section.description}</p>
                        )}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#e8f4f7] text-[#003c4c]">
                        Section
                      </span>
                    </div>
                    <div className="p-5 space-y-5">
                      {(section.fields || []).map((field) => (
                        <div key={field.key}>
                          <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                            {field.label}
                            {field.type === 'list' && (
                              <span className="ml-2 font-semibold normal-case tracking-normal text-amber-600">
                                (add / edit / reorder items)
                              </span>
                            )}
                          </label>
                          <FieldEditor
                            field={field}
                            value={values[field.key]}
                            onChange={(v) => setValues((prev) => ({ ...prev, [field.key]: v }))}
                            onPickImage={() => setPickField(field.key)}
                            onPickImageForList={(index, itemKey) =>
                              setPickField({ listKey: field.key, index, itemKey })
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="sticky bottom-4 mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={onSave}
                  disabled={saving}
                  className="text-white font-bold px-8 py-3.5 rounded-xl shadow-lg disabled:opacity-60"
                  style={{ backgroundColor: '#003c4c' }}
                >
                  {saving ? 'Saving…' : savedFlash ? 'Saved ✓' : 'Save all sections'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {pickField && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setPickField(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-auto p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg" style={{ color: '#003c4c' }}>Choose image</h3>
              <button type="button" className="text-slate-400 hover:text-slate-700" onClick={() => setPickField(null)}>✕</button>
            </div>
            {media.length === 0 ? (
              <p className="text-sm text-slate-500">
                No uploads yet. Go to <Link to="/admin/media" className="underline font-semibold">Media</Link> to upload.
              </p>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {media.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className="aspect-square rounded-xl overflow-hidden border border-slate-100 hover:ring-2 hover:ring-[#003c4c]"
                    onClick={() => applyPickedImage(m.path)}
                  >
                    <img src={m.path} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setShowAdd(null)}>
          <form
            onSubmit={onCreatePage}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg mb-1" style={{ color: '#003c4c' }}>Add page</h3>
            <p className="text-sm text-slate-500 mb-5">
              Creates a new editable page under{' '}
              <strong>{PAGE_GROUPS.find((g) => g.id === showAdd)?.label}</strong>.
            </p>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Page title</label>
            <input
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Study in Spain"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-[#003c4c]/30"
            />
            <div className="flex gap-3 justify-end">
              <button type="button" onClick={() => setShowAdd(null)} className="px-4 py-2.5 text-sm font-semibold text-slate-600">
                Cancel
              </button>
              <button
                type="submit"
                disabled={creating}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white disabled:opacity-60"
                style={{ backgroundColor: '#003c4c' }}
              >
                {creating ? 'Creating…' : 'Create page'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
