import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_SEO, SITE, buildSeoTags, isNoindexPath } from './seo.config';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content ?? '');
}

/** Writes title, description, canonical, robots, Open Graph and Twitter tags into <head>. */
export function applySeo(seo) {
  const tags = buildSeoTags(seo);
  document.title = tags.title;

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', tags.canonical);

  for (const m of tags.meta) {
    if (m.name) upsertMeta('name', m.name, m.content);
    else upsertMeta('property', m.property, m.content);
  }
}

/** Dynamic routes whose page component sets its own SEO once data has loaded. */
const DYNAMIC_PREFIXES = ['/blog/', '/p/'];

/**
 * Mount once inside <BrowserRouter>. Applies the static per-route SEO from
 * seo.config.js on every navigation. Dynamic pages refine it with useSeo().
 */
export function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const home = ROUTE_SEO['/'];

    if (isNoindexPath(path)) {
      applySeo({ ...home, path, title: `Admin | ${SITE.name}`, noindex: true });
      return;
    }
    if (ROUTE_SEO[path]) {
      applySeo({ ...ROUTE_SEO[path], path });
      return;
    }
    if (DYNAMIC_PREFIXES.some((p) => path.startsWith(p))) {
      // Placeholder until the page loads its data and calls useSeo().
      applySeo({ ...home, ogTitle: undefined, ogDescription: undefined, path });
      return;
    }
    // Unknown URL: keep it out of the index.
    applySeo({ ...home, path, title: `Page not found | ${SITE.name}`, noindex: true });
  }, [pathname]);

  return null;
}

/**
 * Page-level SEO for content loaded at runtime (blog posts, custom CMS pages).
 * Pass null while loading; pass { title, description, image, type, noindex } when ready.
 */
export function useSeo(seo) {
  const { pathname } = useLocation();
  const key = seo ? JSON.stringify(seo) : '';

  useEffect(() => {
    if (!seo) return;
    applySeo({ path: pathname, ...seo });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, pathname]);
}

/** Plain-text excerpt for meta descriptions (strips HTML, trims to ~155 chars). */
export function toMetaDescription(text, max = 155) {
  const plain = String(text || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, max).replace(/\s+\S*$/, '') + '…';
}
