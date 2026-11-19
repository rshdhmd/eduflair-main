import { useEffect, useState } from 'react';
import { api } from '../lib/api';

/**
 * Loads custom pages created in Admin → Pages (+ Add page).
 * Stored in site_content page `__cms_meta__` field `custom_pages`.
 */
export function useCustomCmsPages() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const meta = await api.getContent('__cms_meta__');
        const raw = meta.fields?.custom_pages?.value;
        const list = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : [];
        if (!cancelled && Array.isArray(list)) setPages(list);
      } catch {
        if (!cancelled) setPages([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return pages;
}
