import Layout from './Layout';
import PageHero from './PageHero';
import PageCTA from './PageCTA';
import PageFAQ from './PageFAQ';
import CmsIcon from './CmsIcon';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

/**
 * Full CMS-driven page: hero, stats, intro, highlights, features, steps, FAQs, CTA.
 */
export default function CmsPageView({
  pageKey,
  defaults = {},
  breadcrumbs = [],
  fallbackBadge = '',
}) {
  const { content } = usePageContent(pageKey, {
    hero_badge: defaults.hero_badge || fallbackBadge || '',
    hero_title: defaults.hero_title || 'Page',
    hero_subtitle: defaults.hero_subtitle || '',
    hero_image: defaults.hero_image || '',
    intro_badge: defaults.intro_badge || 'Overview',
    intro_title: defaults.intro_title || '',
    intro_html: defaults.intro_html || '',
    intro_image: defaults.intro_image || '',
    highlights_title: defaults.highlights_title || '',
    highlights_html: defaults.highlights_html || '',
    highlights_image: defaults.highlights_image || '',
    stats: defaults.stats || [],
    features_title: defaults.features_title || '',
    features_subtitle: defaults.features_subtitle || '',
    features: defaults.features || [],
    steps_title: defaults.steps_title || '',
    steps_badge: defaults.steps_badge || '',
    steps: defaults.steps || [],
    faqs_title: defaults.faqs_title || 'Frequently Asked Questions',
    faqs: defaults.faqs || [],
    cta_title: defaults.cta_title || defaults.cta_heading || '',
    cta_text: defaults.cta_text || defaults.cta_sub || '',
    cta_button: defaults.cta_button || 'Get Free Consultation',
  });

  const stats = asList(content.stats, []).map((s) => ({
    value: s.value ?? s.val ?? '',
    label: s.label ?? '',
  }));
  const features = asList(content.features, []);
  const steps = asList(content.steps, []);
  const faqs = asList(content.faqs, []).map((f) => ({
    q: f.q,
    a: typeof f.a === 'string' ? f.a.replace(/<[^>]+>/g, '') : f.a,
  }));

  const hasIntro = content.intro_title || content.intro_html || content.intro_image;
  const hasHighlights = content.highlights_title || content.highlights_html || content.highlights_image;

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge || undefined}
        title={content.hero_title}
        subtitle={content.hero_subtitle || undefined}
        breadcrumbs={breadcrumbs}
        bgImage={content.hero_image || undefined}
      />

      {stats.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                  <p className="text-2xl md:text-3xl font-extrabold" style={{ color: '#003c4c' }}>{s.value}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasIntro && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              {content.intro_badge && (
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>
                  {content.intro_badge}
                </p>
              )}
              {content.intro_title && (
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>
                  {content.intro_title}
                </h2>
              )}
              {content.intro_html && (
                <div
                  className="text-gray-600 text-sm leading-relaxed space-y-4 [&_p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: content.intro_html }}
                />
              )}
            </div>
            {content.intro_image && (
              <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
                <img src={content.intro_image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            )}
          </div>
        </section>
      )}

      {hasHighlights && (
        <section className="py-16" style={{ backgroundColor: '#f7fafb' }}>
          <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {content.highlights_image && (
              <div className="mb-10 lg:mb-0 rounded-2xl overflow-hidden h-80 order-2 lg:order-1">
                <img src={content.highlights_image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            )}
            <div className="order-1 lg:order-2">
              {content.highlights_title && (
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>
                  {content.highlights_title}
                </h2>
              )}
              {content.highlights_html && (
                <div
                  className="text-gray-600 text-sm leading-relaxed space-y-4 [&_p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: content.highlights_html }}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {(content.features_title || content.features_subtitle) && (
              <div className="text-center mb-10">
                {content.features_title && (
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: '#003c4c' }}>
                    {content.features_title}
                  </h2>
                )}
                {content.features_subtitle && (
                  <p className="text-sm text-gray-500 max-w-xl mx-auto">{content.features_subtitle}</p>
                )}
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <CmsIcon image={f.icon_image || f.logo} emoji={f.icon} className="w-12 h-12 mb-3" />
                  {f.title && (
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#003c4c' }}>{f.title}</h3>
                  )}
                  {f.desc && <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {steps.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#003c4c' }}>
          <div className="max-w-7xl mx-auto px-6">
            {content.steps_badge && (
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>
                {content.steps_badge}
              </p>
            )}
            {content.steps_title && (
              <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12">
                {content.steps_title}
              </h2>
            )}
            <div className={`grid gap-6 ${steps.length >= 5 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {steps.map((s, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-sm"
                    style={{ backgroundColor: '#ffa800', color: '#003c4c' }}
                  >
                    {s.n || String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && <PageFAQ title={content.faqs_title} faqs={faqs} />}

      <PageCTA
        heading={content.cta_title || undefined}
        sub={content.cta_text || undefined}
        buttonText={content.cta_button || undefined}
      />
    </Layout>
  );
}
