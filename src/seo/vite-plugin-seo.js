/**
 * Build-time SEO for the React SPA.
 *
 * - Replaces the <!--seo:start-->…<!--seo:end--> block in index.html with the
 *   home page's tags (dev + build).
 * - After the build, writes dist/<route>.html for every route in seo.config.js
 *   with that route's title / description / canonical / OG tags baked into
 *   <head>. public/.htaccess serves /german-language → german-language.html, so
 *   crawlers and social previews get correct tags without running JavaScript.
 *   React then boots normally and takes over.
 * - Writes dist/sitemap.xml and dist/robots.txt from the same config.
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROUTE_SEO, SITE, buildSeoTags } from './seo.config.js';

const BLOCK_RE = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export function renderSeoBlock(routePath) {
  const t = buildSeoTags({ ...ROUTE_SEO[routePath], path: routePath });
  const lines = [
    `<title>${esc(t.title)}</title>`,
    `<link rel="canonical" href="${esc(t.canonical)}" />`,
    ...t.meta.map((m) =>
      m.name
        ? `<meta name="${esc(m.name)}" content="${esc(m.content)}" />`
        : `<meta property="${esc(m.property)}" content="${esc(m.content)}" />`
    ),
  ];
  return `<!--seo:start-->\n    ${lines.join('\n    ')}\n    <!--seo:end-->`;
}

/** '/study-in-uk' → 'study-in-uk.html'; '/' → 'index.html' */
export function routeFile(routePath) {
  return routePath === '/' ? 'index.html' : routePath.replace(/^\//, '') + '.html';
}

export function seoPlugin() {
  let outDir = 'dist';
  return {
    name: 'eduflair-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html) {
      if (!BLOCK_RE.test(html)) {
        throw new Error('[eduflair-seo] index.html is missing the <!--seo:start--> … <!--seo:end--> block');
      }
      return html.replace(BLOCK_RE, renderSeoBlock('/'));
    },
    writeBundle() {
      const indexPath = path.join(outDir, 'index.html');
      const html = fs.readFileSync(indexPath, 'utf8');
      const routes = Object.keys(ROUTE_SEO);

      for (const route of routes) {
        if (route === '/') continue;
        fs.writeFileSync(path.join(outDir, routeFile(route)), html.replace(BLOCK_RE, renderSeoBlock(route)));
      }

      const today = new Date().toISOString().slice(0, 10);
      const urls = routes
        .map((r) => {
          const loc = SITE.url + (r === '/' ? '/' : r);
          const priority = r === '/' ? '1.0' : r.split('/').length === 2 ? '0.8' : '0.6';
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
        })
        .join('\n');
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );

      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap.xml\n`
      );

      console.log(`[eduflair-seo] wrote ${routes.length - 1} route pages, sitemap.xml, robots.txt`);
    },
  };
}
