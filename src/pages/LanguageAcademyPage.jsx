import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import CmsIcon from '../components/CmsIcon';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_COURSES = [
  {
    title: 'German Language Training',
    desc: 'Structured German language programme from beginner to B2 — required for Ausbildung and German placements.',
    tag: 'Most In-Demand',
    href: '/german-language',
    icon: '🇩🇪',
  },
  {
    title: 'IELTS Coaching',
    desc: 'Expert IELTS preparation covering Listening, Reading, Writing, and Speaking.',
    tag: 'Study Abroad Essential',
    href: '/ielts-coaching',
    icon: '📝',
  },
  {
    title: 'OET Coaching',
    desc: 'Specialised English test preparation for healthcare professionals.',
    tag: 'Healthcare Professionals',
    href: '/oet',
    icon: '🩺',
  },
];

const DEFAULT_FEATURES = [
  { title: 'Certified Expert Trainers', desc: 'All trainers hold international certifications in their respective exam formats.', icon: '✅' },
  { title: 'Small Batch Sizes', desc: 'Maximum 15 students per batch for personalised attention and faster progress.', icon: '👥' },
  { title: 'Exam-Focused Curriculum', desc: 'Every lesson is designed around the exam pattern, not just language learning.', icon: '🎯' },
  { title: 'Online & Offline Classes', desc: 'Choose from in-centre or live online sessions to suit your schedule.', icon: '💻' },
  { title: 'Mock Tests & Analysis', desc: 'Regular full-length mock tests with detailed score breakdown and feedback.', icon: '📊' },
  { title: 'Placement Integration', desc: 'Language training is seamlessly linked to our Ausbildung and placement programmes.', icon: '🔗' },
];

export default function LanguageAcademyPage() {
  const { content } = usePageContent('language-academy', {
    hero_badge: 'Language & Skill Academy',
    hero_title: 'Eduflair Language & Skill Academy — Kerala',
    hero_subtitle:
      'In-house certified coaching for German A1–B2, IELTS, and OET. Everything you need for global education and career success — all under one roof in Calicut.',
    hero_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80',
    courses: DEFAULT_COURSES,
    features: DEFAULT_FEATURES,
    features_title: 'Why Train at Eduflair Language Academy?',
  });

  const courses = asList(content.courses, DEFAULT_COURSES);
  const features = asList(content.features, DEFAULT_FEATURES);

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'Language & Skill Academy' }]}
        bgImage={content.hero_image}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>About the Academy</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#003c4c' }}>
              India&apos;s No:1 Language Academy
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Eduflair Language & Skill Academy is the in-house training arm of Eduflair Learning Solutions — German A1–B2, IELTS, and OET under one roof in Calicut.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Programmes</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Language Training Programmes</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
                      style={{ backgroundColor: '#003c4c' }}
                    >
                      <CmsIcon image={c.icon_image} emoji={c.icon} className="w-8 h-8" />
                    </div>
                    {c.tag && (
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-lg mb-3" style={{ color: '#003c4c' }}>{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                </div>
                {c.href && (
                  <div className="px-6 py-4 border-t border-gray-50">
                    <Link to={c.href} className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all" style={{ color: '#003c4c' }}>
                      Learn More <span style={{ color: '#ffa800' }}>→</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>
            {content.features_title || 'Why Train at Eduflair Language Academy?'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl border border-gray-100">
                <CmsIcon image={item.icon_image} emoji={item.icon} className="w-10 h-10 mb-3" />
                <h3 className="font-bold text-sm mb-2" style={{ color: '#003c4c' }}>{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading={content.cta_title || undefined} sub={content.cta_text || undefined} />
    </Layout>
  );
}
