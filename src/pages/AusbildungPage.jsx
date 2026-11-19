import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';
import CmsIcon from '../components/CmsIcon';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_STATS = [
  { value: '2–3.5 yrs', label: 'Programme Duration' },
  { value: '€1,000–1,400', label: 'Monthly Stipend' },
  { value: '100% Free', label: 'Tuition Fees' },
  { value: '90%+', label: 'Employment After Completion' },
];

const DEFAULT_INTRO_BULLETS = [
  { text: 'Zero tuition fees — 100% employer-funded training' },
  { text: 'Earn €1,000–€1,400 per month during training' },
  { text: '90%+ employment rate after completion' },
  { text: 'Permanent Residency pathway after 2 years work experience' },
  { text: 'Globally recognised German vocational certificates' },
];

const DEFAULT_FIELDS = [
  { title: 'Nursing & Healthcare', desc: 'High-demand sector with excellent job security and PR pathways.', icon: '🏥' },
  { title: 'Mechatronics', desc: 'Combines mechanical, electrical, and computer engineering.', icon: '⚙️' },
  { title: 'Information Technology', desc: "Germany's tech sector offers top salaries and career growth.", icon: '💻' },
  { title: 'Logistics', desc: "Europe's supply chain hub creates thousands of openings yearly.", icon: '📦' },
  { title: 'Food Processing', desc: 'Growing industry with strong employer-sponsored programmes.', icon: '🥗' },
  { title: 'Electrical Engineering', desc: 'Precision engineering roles with globally recognised certificates.', icon: '⚡' },
];

const DEFAULT_ELIGIBILITY = [
  { label: 'Academic Qualification', desc: 'Minimum 55% marks in 12th grade (Plus Two / HSC)' },
  { label: 'German Language', desc: 'B2 level German language certification is mandatory' },
  { label: 'Age Requirement', desc: 'Applicants must be between 18 and 26 years of age' },
  { label: 'Motivation', desc: 'Demonstrated willingness to work and settle in Germany' },
  { label: 'Health Clearance', desc: 'Basic medical fitness required by German employers' },
];

const DEFAULT_SUPPORT_ITEMS = [
  { text: 'Free eligibility assessment and career guidance' },
  { text: 'A1 to B2 German language training at our Language Academy' },
  { text: 'CV preparation and motivation letter writing' },
  { text: 'Mock interview coaching with German employer standards' },
  { text: 'Complete visa documentation and embassy preparation' },
  { text: 'Pre-departure briefing and accommodation guidance' },
  { text: 'Post-arrival support and emergency contact in Germany' },
];

const DEFAULT_STEPS = [
  { n: '01', title: 'Career Consultation', desc: 'Free session to assess your background, interests, and eligibility for Ausbildung.' },
  { n: '02', title: 'German Language Training', desc: 'Intensive A1–B2 German training at Eduflair Language Academy.' },
  { n: '03', title: 'Application & Interview', desc: 'CV preparation, motivation letter writing, and mock interview coaching.' },
  { n: '04', title: 'Visa Process', desc: 'Complete visa documentation support — from student visa to work permit pathway.' },
  { n: '05', title: 'Relocation & Training', desc: 'Pre-departure briefing, accommodation guidance, and on-arrival support.' },
];

const DEFAULT_FAQS = [
  { q: 'What is the age limit for Ausbildung in Germany?', a: 'Typically 18–26 years, though some employers accept candidates up to 30 years depending on the sector.' },
  { q: 'Is German language mandatory for Ausbildung?', a: 'Yes. A minimum of B2 level German is required to communicate effectively at the workplace and pass vocational exams.' },
  { q: 'How much will I earn during Ausbildung?', a: 'You receive a monthly training allowance (Ausbildungsvergütung) of approximately €1,000–€1,400 paid by your employer.' },
  { q: 'Is Ausbildung completely free?', a: 'Yes. The vocational school (Berufsschule) is tuition-free and your employer funds the practical training. You earn while you learn.' },
  { q: 'Can I get Permanent Residency after Ausbildung?', a: 'Yes. After completing Ausbildung and working for 2 years in Germany, you can apply for permanent residency (Niederlassungserlaubnis).' },
  { q: 'How long does the entire process take?', a: 'From consultation to departure typically takes 10–14 months, including 8 months of German language training.' },
];

export default function AusbildungPage() {
  const { content } = usePageContent('ausbildung-in-germany', {
    hero_badge: 'Ausbildung Program',
    hero_title: 'Ausbildung in Germany: Your Pathway to a Career Without a Degree',
    hero_subtitle: 'Earn while you learn — zero tuition fees, €1,000–€1,400/month stipend, and a direct route to German Permanent Residency.',
    hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
    stats: DEFAULT_STATS,
    intro_badge: 'Overview',
    intro_title: 'What is Ausbildung in Germany?',
    intro_html:
      '<p>Ausbildung is Germany\'s world-renowned dual education system combining practical on-the-job training with classroom instruction. Unlike a traditional degree, it is fully employer-funded — you receive a monthly stipend throughout your training.</p><p>On completion, you earn a nationally and internationally recognised German vocational certificate — opening doors to permanent employment and a clear PR pathway in Germany.</p>',
    intro_image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80',
    intro_bullets: DEFAULT_INTRO_BULLETS,
    fields_badge: 'Career Options',
    fields_title: 'Top Ausbildung Fields in Germany',
    fields_subtitle: 'Choose from in-demand vocational fields with excellent job prospects and employer partnerships across Germany.',
    fields: DEFAULT_FIELDS,
    eligibility_badge: 'Requirements',
    eligibility_title: 'Eligibility Criteria',
    eligibility: DEFAULT_ELIGIBILITY,
    support_badge: 'Our Support',
    support_title: 'How Eduflair Helps You',
    support_html: '<p>From your first consultation to your first day in Germany, Eduflair\'s dedicated Ausbildung team handles every step.</p>',
    support_items: DEFAULT_SUPPORT_ITEMS,
    steps_badge: 'The Journey',
    steps_title: 'The Ausbildung Application Process',
    steps: DEFAULT_STEPS,
    faqs_title: "FAQ's — Ausbildung in Germany",
    faqs: DEFAULT_FAQS,
    cta_title: 'Start Your Ausbildung Journey Today!',
    cta_text: 'Speak to an Eduflair counsellor and find out if you qualify for a German Ausbildung programme.',
  });

  const stats = asList(content.stats, DEFAULT_STATS);
  const introBullets = asList(content.intro_bullets, DEFAULT_INTRO_BULLETS);
  const fields = asList(content.fields, DEFAULT_FIELDS);
  const eligibility = asList(content.eligibility, DEFAULT_ELIGIBILITY);
  const supportItems = asList(content.support_items, DEFAULT_SUPPORT_ITEMS);
  const steps = asList(content.steps, DEFAULT_STEPS);
  const faqs = asList(content.faqs, DEFAULT_FAQS).map((f) => ({
    q: f.q,
    a: typeof f.a === 'string' ? f.a.replace(/<[^>]+>/g, '') : f.a,
  }));

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'Ausbildung Program' }]}
        bgImage={content.hero_image}
      />

      {/* Key Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: '#003c4c' }}>{s.value ?? s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Ausbildung */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{content.intro_badge}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>{content.intro_title}</h2>
            <div
              className="text-gray-600 leading-relaxed mb-6 text-sm space-y-4 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: content.intro_html }}
            />
            <div className="space-y-3">
              {introBullets.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003c4c' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{item.text || item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src={content.intro_image}
              alt="Vocational technical training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Top Fields */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>{content.fields_badge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>{content.fields_title}</h2>
          {content.fields_subtitle && (
            <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">{content.fields_subtitle}</p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fields.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white overflow-hidden" style={{ backgroundColor: '#003c4c' }}>
                  <CmsIcon image={f.icon_image} emoji={f.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1.5 text-sm" style={{ color: '#003c4c' }}>{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + How Eduflair Helps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{content.eligibility_badge}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>{content.eligibility_title}</h2>
            <div className="space-y-4">
              {eligibility.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xs" style={{ backgroundColor: '#003c4c' }}>{i + 1}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#003c4c' }}>{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{content.support_badge}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>{content.support_title}</h2>
            <div
              className="text-gray-600 text-sm leading-relaxed mb-5 [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: content.support_html }}
            />
            <div className="space-y-3">
              {supportItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">{item.text || item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16" style={{ backgroundColor: '#003c4c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>{content.steps_badge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12">{content.steps_title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-sm" style={{ backgroundColor: '#ffa800', color: '#003c4c' }}>{s.n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title={content.faqs_title} faqs={faqs} />
      <PageCTA
        heading={content.cta_title}
        sub={content.cta_text}
      />
    </Layout>
  );
}
