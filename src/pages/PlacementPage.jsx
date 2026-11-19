import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import CmsIcon from '../components/CmsIcon';
import { Link } from 'react-router-dom';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_FEATURES = [
  { title: 'Proven Expertise', desc: 'Years of placement experience across industries, with a focus on healthcare and nursing.' },
  { title: 'Comprehensive Support', desc: 'From document verification to visa guidance — we handle everything.' },
  { title: 'Hassle-Free Processing', desc: 'Personalised support for a smooth, stress-free placement journey.' },
  { title: 'Post-Arrival Guidance', desc: 'Accommodation, work culture orientation, and settlement support included.' },
  { title: 'Strong Employer Network', desc: 'Partnerships with verified international organisations and healthcare providers.' },
];

const DEFAULT_STEPS = [
  { n: '01', title: 'Consultation & Eligibility Check', desc: 'We assess your qualifications, work experience, language proficiency, and target destinations.' },
  { n: '02', title: 'Document Assistance', desc: 'Credential evaluation, licensing guidance, and complete documentation support.' },
  { n: '03', title: 'Employer Matching', desc: 'We connect you with verified international employers and healthcare organisations.' },
  { n: '04', title: 'Visa & Immigration Support', desc: 'End-to-end work visa applications, legal requirements, and embassy preparation.' },
  { n: '05', title: 'Pre-Departure Support', desc: 'Orientation, accommodation guidance, and on-arrival support at your destination.' },
];

const DEFAULT_DESTINATIONS = [
  { code: 'ca', title: 'Nursing Placement in Canada', href: '/nursing-canada', desc: 'NCLEX pathway, PGWP, and Express Entry PR opportunities for RNs.' },
  { code: 'au', title: 'Nursing Placement in Australia', href: '/nursing-australia', desc: 'AHPRA registration support and skilled migration pathways for nurses.' },
  { code: 'de', title: 'Nursing Placement in Germany', href: '/nursing-germany', desc: 'Ausbildung and direct nursing placements with B2 German language support.' },
  { code: '', title: 'Other Destinations', href: '/other-nursing-destinations', desc: 'UK, Ireland, New Zealand, USA, UAE and more nursing placement options.' },
];

const CONTENT_DEFAULTS = {
  hero_badge: 'Placement Consultancy',
  hero_title: 'Overseas Job Consultancy in Kerala — Eduflair Placement & Immigration',
  hero_subtitle:
    'Your trusted path to global careers. Expert placement services for healthcare professionals and skilled workers across Canada, Australia, Germany, and more.',
  hero_image: '/images/DSC06788.JPG',
  intro_badge: 'About Our Services',
  intro_title: 'Why Choose Eduflair Placement & Immigration Consultancy?',
  intro_html:
    '<p>Eduflair specialises in guiding skilled professionals — especially healthcare workers — toward rewarding career opportunities abroad. As a trusted Kerala-based consultancy, we offer comprehensive international job placement and immigration services.</p>',
  intro_image: '/images/DSC06782.JPG',
  features: DEFAULT_FEATURES,
  steps_badge: 'Our Process',
  steps_title: '5-Step Placement Process',
  steps: DEFAULT_STEPS,
  destinations_badge: 'Destinations',
  destinations_title: 'Nursing Placement Destinations',
  destinations: DEFAULT_DESTINATIONS,
  cta_title: 'Ready to Start Your Global Career?',
  cta_text:
    "Book a free consultation with Eduflair's placement experts and take the first step toward your international career.",
};

export default function PlacementPage() {
  const { content } = usePageContent('placement', CONTENT_DEFAULTS);

  const features = asList(content.features, DEFAULT_FEATURES);
  const steps = asList(content.steps, DEFAULT_STEPS);
  const destinations = asList(content.destinations, DEFAULT_DESTINATIONS);

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'Placement Consultancy' }]}
        bgImage={content.hero_image}
      />

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
                className="text-gray-600 text-sm leading-relaxed mb-4 [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: content.intro_html }}
              />
            )}
            <div className="space-y-3 mt-6">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  {item.icon || item.icon_image ? (
                    <CmsIcon image={item.icon_image} emoji={item.icon} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  )}
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#003c4c' }}>{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {content.intro_image && (
            <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
              <img
                src={content.intro_image}
                alt="Eduflair office and certifications"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {destinations.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
          <div className="max-w-7xl mx-auto px-6">
            {content.destinations_badge && (
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>
                {content.destinations_badge}
              </p>
            )}
            {content.destinations_title && (
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>
                {content.destinations_title}
              </h2>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((d, i) => (
                <Link key={i} to={d.href || '#'} className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                  <div className="mb-4">
                    {d.code ? (
                      <img
                        src={`https://flagcdn.com/48x36/${d.code}.png`}
                        srcSet={`https://flagcdn.com/96x72/${d.code}.png 2x`}
                        alt={`${d.title} flag`}
                        className="rounded shadow-sm"
                        style={{ width: 48, height: 36, objectFit: 'cover' }}
                      />
                    ) : (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#003c4c" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold mb-2 group-hover:underline text-sm" style={{ color: '#003c4c' }}>{d.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                  <div className="mt-4 text-xs font-semibold flex items-center gap-1" style={{ color: '#ffa800' }}>
                    Learn more <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA heading={content.cta_title || undefined} sub={content.cta_text || undefined} />
    </Layout>
  );
}
