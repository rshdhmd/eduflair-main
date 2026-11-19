import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import CmsIcon from '../components/CmsIcon';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_TIMELINE = [
  { year: 'Chapter 1', title: 'Founding Vision', desc: 'Established to empower Kerala\'s youth with the skills, knowledge, and guidance needed for international employment and educational growth.' },
  { year: 'Chapter 2', title: 'Growth and Expansion', desc: 'Expanded from a small Kerala initiative to a recognised education and placement provider with students across multiple countries.' },
  { year: 'Chapter 3', title: 'Commitment to Excellence', desc: 'Built industry-leading success rates through quality education, expert counselling, and a results-driven approach.' },
  { year: 'Chapter 4', title: 'German Language Training', desc: 'Established our Language Academy — achieving outstanding results helping students reach B2 German and secure Ausbildung placements.' },
  { year: 'Chapter 5', title: 'Ausbildung Program', desc: 'Set new benchmarks in Kerala for international student placement in Germany\'s vocational training system.' },
  { year: 'Chapter 6', title: 'Expert Team & Facilities', desc: 'Built a dedicated team of professionals and modern training facilities with a structured, student-first approach.' },
];

const DEFAULT_VALUES = [
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every service we deliver.', icon: '⭐' },
  { title: 'Growth Mindset', desc: 'We embrace learning, adaptation, and continuous improvement in everything we do.', icon: '📈' },
  { title: 'Collaboration', desc: 'We work as a team — with colleagues, students, and global partners.', icon: '🤝' },
  { title: 'Integrity & Empathy', desc: 'We operate with honesty, responsibility, and deep respect for every student\'s journey.', icon: '💙' },
  { title: 'Transformation', desc: 'We believe in fostering personal and professional growth that changes lives permanently.', icon: '✨' },
];

const CONTENT_DEFAULTS = {
  hero_badge: 'About Eduflair',
  hero_title: 'Our Story',
  hero_subtitle:
    "From a vision to transform education in Kerala, to becoming one of India's most trusted study abroad consultancies and language institutes.",
  hero_image: '/images/C0107430-1-rmixu2pffp49hjn6t76z1ksy1ub8810r55opfztx80.jpg',
  intro_badge: 'Who We Are',
  intro_title: 'About Eduflair Learning Solutions',
  intro_html:
    "<p>Eduflair Learning Solutions Pvt. Ltd. is Kerala's leading overseas education consultancy and language training institute, headquartered in Calicut. We provide comprehensive services across study abroad, Ausbildung in Germany, language certifications, and overseas job placements.</p>",
  timeline: DEFAULT_TIMELINE,
  values: DEFAULT_VALUES,
  cta_title: 'Be Part of the Eduflair Story',
  cta_text: "Join thousands of students who have transformed their lives with Eduflair's guidance.",
};

export default function OurStoryPage() {
  const { content } = usePageContent('our-story', CONTENT_DEFAULTS);
  const timeline = asList(content.timeline, DEFAULT_TIMELINE);
  const values = asList(content.values, DEFAULT_VALUES);

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'About Us' }, { label: 'Our Story' }]}
        bgImage={content.hero_image}
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{content.intro_badge || 'Who We Are'}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>{content.intro_title || 'About Eduflair Learning Solutions'}</h2>
            <div
              className="text-gray-600 text-sm leading-relaxed space-y-4 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: content.intro_html }}
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '1000+', label: 'Students Guided' },
                { val: '90%+', label: 'Visa Success Rate' },
                { val: '10+', label: 'Countries Covered' },
                { val: 'Calicut', label: 'Headquarters' },
              ].map((s, i) => (
                <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                  <p className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Journey</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12" style={{ color: '#003c4c' }}>How We Got Here</h2>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs text-white" style={{ backgroundColor: '#003c4c' }}>{i + 1}</div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: '#c5dde3' }} />}
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#ffa800' }}>{t.year}</p>
                  <h3 className="font-extrabold mb-2" style={{ color: '#003c4c' }}>{t.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>What We Stand For</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white overflow-hidden" style={{ backgroundColor: '#003c4c' }}>
                  <CmsIcon image={v.icon_image} emoji={v.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#003c4c' }}>{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading={content.cta_title}
        sub={content.cta_text}
      />
    </Layout>
  );
}
