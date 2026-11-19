import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { mergeContent } from '../cms/contentHelpers';

/**
 * Load CMS content for a page key; merge over defaults so the site
 * keeps working when the API/DB is unavailable. List fields are parsed from JSON.
 */
export function usePageContent(pageKey, defaults = {}) {
  const [content, setContent] = useState(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await api.getContent(pageKey);
        if (cancelled) return;
        setContent(mergeContent(defaults, data.fields || {}));
      } catch {
        if (!cancelled) setContent(defaults);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageKey]);

  return { content, loading };
}
