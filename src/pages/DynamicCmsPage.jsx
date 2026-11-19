import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CmsPageView from '../components/CmsPageView';
import Layout from '../components/Layout';
import { api } from '../lib/api';
import { getPageDef } from '../cms/pageRegistry';
import { useSeo } from '../seo/useSeo';

/**
 * Dynamic CMS page at /p/:slug — for custom pages added in admin
 * (e.g. new Study Abroad destinations).
 */
export default function DynamicCmsPage() {
  const { slug } = useParams();
  const pageKey = slug;
  const registry = getPageDef(pageKey);
  const [custom, setCustom] = useState(null);
  const [loading, setLoading] = useState(!registry);

  useEffect(() => {
    if (registry) return;
    (async () => {
      try {
        const meta = await api.getContent('__cms_meta__');
        const raw = meta.fields?.custom_pages?.value;
        const list = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : [];
        setCustom(Array.isArray(list) ? list.find((p) => p.key === pageKey) : null);
      } catch {
        setCustom(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [pageKey, registry]);

  const seoDef = registry || custom;
  useSeo(
    loading
      ? null
      : seoDef
        ? {
            title: `${seoDef.title} | Eduflair`,
            description: `Learn more about ${seoDef.title} with Eduflair Learning Solutions – study abroad, language training and overseas placement experts in Kerala.`,
          }
        : { title: 'Page not found | Eduflair Learning Solutions', description: 'This page could not be found.', noindex: true }
  );

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-20 text-sm text-gray-500">Loading…</div>
      </Layout>
    );
  }

  const def = registry || custom;
  if (!def) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-2xl font-extrabold mb-3" style={{ color: '#003c4c' }}>Page not found</h1>
          <Link to="/" className="text-sm font-semibold underline" style={{ color: '#003c4c' }}>
            Back to home
          </Link>
        </div>
      </Layout>
    );
  }

  const crumbs = [];
  if (def.groupId === 'study-abroad' || def.groupLabel === 'Study Abroad') {
    crumbs.push({ label: 'Study Abroad', href: '/study-abroad' });
  }
  crumbs.push({ label: def.title });

  return (
    <CmsPageView
      pageKey={pageKey}
      breadcrumbs={crumbs}
      fallbackBadge={def.groupLabel || ''}
      defaults={{
        hero_title: def.title,
        hero_subtitle: `Learn more about ${def.title} with Eduflair.`,
        intro_title: def.title,
      }}
    />
  );
}
