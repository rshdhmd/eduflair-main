import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';
import CmsIcon from '../components/CmsIcon';
import { usePageContent } from '../hooks/usePageContent';
import { useCustomCmsPages } from '../hooks/useCustomCmsPages';
import { asList } from '../cms/contentHelpers';

const DEFAULT_DESTINATIONS = [
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    href: '/study-in-uk',
    tag: 'Top Choice',
    highlights: "2-year post-study work visa\n3-year bachelor's / 1-year master's\nOxford, Cambridge, Imperial, UCL",
    courses: 'Business, Engineering, Healthcare, AI, Law',
  },
  {
    flag: '🇩🇪',
    country: 'Germany',
    href: '/study-in-germany',
    tag: 'Tuition-Free',
    highlights: 'Tuition-free public universities\n18-month post-study work visa\nStrong engineering & IT job market',
    courses: 'Mechanical Engineering, IT, Healthcare, Business',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    href: '/study-in-canada',
    tag: 'Best PR Pathway',
    highlights: 'Up to 3-year post-graduation work permit\nExpress Entry PR pathway\nWorld-class universities',
    courses: 'Computer Science, Engineering, Business, Healthcare',
  },
  {
    flag: '🇮🇪',
    country: 'Ireland',
    href: '/study-in-ireland',
    tag: 'English-Speaking EU',
    highlights: 'Up to 2-year post-study work visa\nStrong IT & pharma industry\nEnglish-speaking EU country',
    courses: 'Data Science, Business, Nursing, Engineering',
  },
  {
    flag: '🇫🇷',
    country: 'France',
    href: '/study-in-france',
    tag: 'Affordable',
    highlights: 'Affordable tuition & scholarships\nStrong in fashion, arts & business\nGateway to European job market',
    courses: 'Business, Fashion, Engineering, Culinary Arts',
  },
  {
    flag: '🇦🇹',
    country: 'Austria',
    href: '/study-in-austria',
    tag: 'Low Fees',
    highlights: 'Low tuition fees\nNo blocked account required\nCentral European job exposure',
    courses: 'Engineering, Business, Music, Sciences',
  },
];

const DEFAULT_FEATURES = [
  { title: 'Global Exposure & International Experience', desc: 'Experience new cultures, languages, and global work environments that shape your world-view.', icon: '🌍' },
  { title: 'World-Class Education', desc: 'Study in top-ranked universities with advanced research facilities and industry connections.', icon: '🎓' },
  { title: 'High-Paying Career Opportunities', desc: 'Gain globally recognised degrees and significantly boost your employability and salary potential.', icon: '💼' },
  { title: 'In-Demand Courses & Specialisations', desc: 'Access trending programmes in AI, Data Science, Engineering, Business, and Healthcare.', icon: '📚' },
  { title: 'Strong Networking Opportunities', desc: 'Connect with global professionals, mentors, and fellow students from around the world.', icon: '🤝' },
  { title: 'PR & Settlement Opportunities', desc: 'Canada, Germany, and the UK offer clear pathways to permanent residency after graduation.', icon: '🏠' },
];

const DEFAULT_WHY_ITEMS = [
  { text: 'Personalised career counselling for every student' },
  { text: 'University selection & application assistance' },
  { text: 'Visa processing & documentation support' },
  { text: 'Scholarship & financial aid guidance' },
  { text: 'IELTS & German language training in-house' },
  { text: 'Pre-departure & accommodation support' },
];

const DEFAULT_FAQS = [
  { q: 'Which is the best country to study abroad from Kerala?', a: 'Canada, Germany, the UK, and Ireland are top choices due to their career opportunities, PR pathways, and quality of education.' },
  { q: 'How much does it cost to study abroad?', a: 'Costs vary by country. Germany offers tuition-free education at public universities. UK ranges from £11,000–£38,000/year.' },
  { q: 'Can I work while studying abroad?', a: 'Yes, most countries allow up to 20 hours per week of part-time work during term time.' },
  { q: 'Is IELTS mandatory for studying abroad?', a: 'Yes, IELTS or an equivalent English test (PTE, TOEFL) is required for most English-medium universities abroad.' },
  { q: 'Which country offers the easiest PR pathway?', a: 'Canada (Express Entry) and Germany (post-study work visa to PR) have some of the most accessible PR pathways for international students.' },
  { q: 'How long does the application process take?', a: 'Usually 3–8 months depending on the country and intake. Starting 6–12 months in advance is recommended.' },
  { q: 'Are scholarships available for Kerala students?', a: 'Yes, many universities and governments offer merit-based and need-based scholarships for international students.' },
  { q: 'When should I start the study abroad process?', a: 'Ideally 9–12 months before your preferred intake (January or September). Early applications improve scholarship chances.' },
];

function toHighlights(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    return value.split('\n').map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

export default function StudyAbroadPage() {
  const customPages = useCustomCmsPages();
  const { content } = usePageContent('study-abroad', {
    hero_badge: 'Study Abroad',
    hero_title: 'Study Abroad From Kerala — Best Overseas Education Consultants',
    hero_subtitle: 'Your gateway to global careers. Expert guidance for UK, Germany, Canada, Ireland, France, Austria, and more.',
    hero_image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    intro_badge: 'Your Gateway to the World',
    intro_title: 'Study Abroad with Eduflair',
    intro_html:
      '<p>Looking for the best study abroad consultants in Kerala? Eduflair helps students achieve their dream of studying in top countries like the UK, Germany, Canada, France, and more. From university selection to visa approval, we provide complete end-to-end support to make your study abroad journey smooth and successful.</p><p>Studying abroad is one of the most powerful ways to build a successful global career. It offers international exposure, world-class education, and better job opportunities that simply aren\'t available at home.</p>',
    intro_image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    intro_cta_primary: 'Book Free Consultation',
    intro_cta_secondary: 'View Application Process',
    features_title: 'Benefits of Studying Abroad for Kerala Students',
    features_subtitle: 'A world-class education opens doors that local degrees simply cannot.',
    features: DEFAULT_FEATURES,
    destinations_badge: 'Destinations',
    destinations_title: 'Study Destination Guide',
    destinations: DEFAULT_DESTINATIONS,
    why_badge: 'Our Edge',
    why_title: 'Why Choose Eduflair — Top Study Abroad Consultants in Kerala',
    why_items: DEFAULT_WHY_ITEMS,
    faqs_title: 'Study Abroad from Kerala — FAQs',
    faqs: DEFAULT_FAQS,
    cta_title: 'Start Your Study Abroad Journey Today',
    cta_text: "Contact Eduflair — Kerala's most trusted overseas education consultants — for a free counselling session.",
  });

  const features = asList(content.features, DEFAULT_FEATURES);
  const whyItems = asList(content.why_items, DEFAULT_WHY_ITEMS);
  const faqs = asList(content.faqs, DEFAULT_FAQS).map((f) => ({
    q: f.q,
    a: typeof f.a === 'string' ? f.a.replace(/<[^>]+>/g, '') : f.a,
  }));

  const destinations = asList(content.destinations, DEFAULT_DESTINATIONS).map((d) => ({
    ...d,
    highlights: toHighlights(d.highlights),
  }));

  const extraDestinations = customPages
    .filter((p) => p.groupId === 'study-abroad' && p.path)
    .filter((p) => !destinations.some((d) => d.href === p.path))
    .map((p) => ({
      flag: '🌍',
      country: p.title,
      href: p.path,
      tag: 'New',
      highlights: ['Edit this page in Admin → Pages', 'Custom destination added by your team'],
      courses: 'Ask our counsellors for course options',
    }));

  const allDestinations = [...destinations, ...extraDestinations];

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'Study Abroad' }]}
        bgImage={content.hero_image}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{content.intro_badge}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>{content.intro_title}</h2>
            <div
              className="text-gray-600 text-sm leading-relaxed space-y-4 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: content.intro_html }}
            />
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white" style={{ backgroundColor: '#003c4c' }}>
                {content.intro_cta_primary}
              </Link>
              <Link to="/application-process" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2" style={{ borderColor: '#003c4c', color: '#003c4c' }}>
                {content.intro_cta_secondary}
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src={content.intro_image}
              alt="University campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Go Global</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>{content.features_title}</h2>
          {content.features_subtitle && (
            <p className="text-center text-sm text-gray-500 mb-10 max-w-xl mx-auto">{content.features_subtitle}</p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <CmsIcon image={b.icon_image} emoji={b.icon} className="w-10 h-10 mb-3" />
                <h3 className="font-bold text-sm mb-2" style={{ color: '#003c4c' }}>{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>{content.destinations_badge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>{content.destinations_title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDestinations.map((d, i) => (
              <Link key={i} to={d.href} className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                {d.image && (
                  <div className="h-36 overflow-hidden">
                    <img src={d.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{d.flag}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{d.tag}</span>
                  </div>
                  <h3 className="font-extrabold text-lg mb-3 group-hover:underline" style={{ color: '#003c4c' }}>Study in {d.country}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {d.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-3 border-t border-gray-50" style={{ backgroundColor: '#f8fbfc' }}>
                  <p className="text-xs text-gray-500"><span className="font-semibold" style={{ color: '#003c4c' }}>Top Courses: </span>{d.courses}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/other-destinations" className="inline-flex items-center gap-2 text-sm font-semibold underline" style={{ color: '#003c4c' }}>
              View Other Popular Destinations (Australia, USA, New Zealand & more) →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Eduflair */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>{content.why_badge}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>{content.why_title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span className="text-sm text-gray-700">{item.text || item}</span>
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
