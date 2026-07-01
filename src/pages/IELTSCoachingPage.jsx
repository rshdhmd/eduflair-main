import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const PROGRAMS = [
  { title: '1-Month Fast Track', desc: 'Intensive daily coaching for students with a solid English base. Focus on exam strategy and timed mock tests.', tag: 'Fast Track' },
  { title: '2-Month Comprehensive', desc: 'Complete module-by-module training covering all four skills with regular feedback and progress tracking.', tag: 'Most Popular' },
  { title: 'Full Module Training', desc: 'In-depth coverage of Listening, Reading, Writing, and Speaking with expert feedback on each component.', tag: 'Thorough' },
  { title: 'Online IELTS Coaching', desc: 'Live online sessions — ideal for working professionals and outstation students. Same quality curriculum.', tag: 'Flexible' },
];

const FAQS = [
  { q: 'What is the IELTS minimum score for UK universities?', a: 'Most UK universities require an overall band of 6.5–7.0 with no individual component below 6.0.' },
  { q: 'How many times can I take the IELTS exam?', a: 'There is no limit. You can retake IELTS as many times as needed, with most centres offering sittings every week.' },
  { q: 'What is the difference between Academic and General IELTS?', a: 'Academic IELTS is for university admissions. General Training is for work visas and immigration (Canada, Australia, UK Skilled Worker).' },
  { q: 'How long is the IELTS score valid?', a: 'IELTS scores are valid for 2 years from the date of the test.' },
  { q: 'What band score do I need for Canada PR?', a: 'For Express Entry (Federal Skilled Worker), you typically need CLB 7, which corresponds to IELTS 6.0 in each component.' },
  { q: 'Does Eduflair help with IELTS registration?', a: 'Yes, we assist students with IELTS exam registration and scheduling at centres in Calicut and nearby cities.' },
];

export default function IELTSCoachingPage() {
  return (
    <Layout>
      <PageHero
        badge="Language Academy"
        title="Master IELTS with Eduflair"
        subtitle="Expert IELTS coaching in Calicut — proven strategies, all four modules, and mock tests to get you to band 7+."
        breadcrumbs={[{ label: 'Language & Skill Academy', href: '/language-academy' }, { label: 'IELTS Coaching' }]}
        bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80"
      />

      {/* About IELTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>About the Exam</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>About IELTS — Your Gateway to Study, Work & Migration</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              The International English Language Testing System (IELTS) is the world's most popular English proficiency test, accepted by over 11,000 organisations in 140+ countries. It assesses four skills:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Listening', 'Reading', 'Writing', 'Speaking'].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#e8f4f7' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white flex-shrink-0" style={{ backgroundColor: '#003c4c' }}>
                    {skill[0]}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#003c4c' }}>{skill}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Available in <strong>Academic</strong> (university admissions) and <strong>General Training</strong> (work visa & immigration) formats. Scores range from Band 0–9. Most institutions require Band 6.5–7.5.</p>
          </div>
          {/* IELTS band scale */}
          <div className="mt-10 lg:mt-0 bg-white rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#ffa800' }}>IELTS Band Score Scale</p>
            <div className="space-y-3">
              {[
                { band: '9.0', label: 'Expert User', pct: 100 },
                { band: '8.0–8.5', label: 'Very Good User', pct: 85 },
                { band: '7.0–7.5', label: 'Good User', pct: 70 },
                { band: '6.0–6.5', label: 'Competent User', pct: 55, highlight: true },
                { band: '5.0–5.5', label: 'Modest User', pct: 40 },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-16 text-right text-xs font-bold flex-shrink-0" style={{ color: '#003c4c' }}>{b.band}</div>
                  <div className="flex-1 h-5 rounded-full overflow-hidden bg-gray-100">
                    <div className="h-full rounded-full" style={{ width: `${b.pct}%`, backgroundColor: b.highlight ? '#ffa800' : '#003c4c' }} />
                  </div>
                  <span className="text-xs text-gray-500 w-28 flex-shrink-0">{b.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">Most universities require Band 6.5–7.5</p>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Courses</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>IELTS Training Programmes at Eduflair</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{p.tag}</span>
                <h3 className="font-bold mb-2" style={{ color: '#003c4c' }}>{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eduflair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Why Choose Eduflair for IELTS Coaching?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Expert Trainers', desc: 'IELTS-certified instructors with deep knowledge of the exam format and scoring criteria.' },
              { title: 'All Four Modules', desc: 'Comprehensive training for Listening, Reading, Writing and Speaking with equal focus.' },
              { title: 'Mock Tests & Feedback', desc: 'Regular full-length mock tests with detailed score analysis and personalised feedback.' },
              { title: 'Flexible Schedule', desc: 'Morning, evening, weekend, and online batches to suit your timetable.' },
              { title: 'Study Materials Provided', desc: 'Official Cambridge practice tests and Eduflair\'s curated study materials included.' },
              { title: 'Progress Tracking', desc: 'Track your band improvement with weekly assessments throughout the programme.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4f7' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#003c4c' }}>{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title="IELTS Coaching — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Your IELTS Journey Today"
        sub="Enrol in Eduflair's IELTS coaching programme and achieve the band score you need."
      />
    </Layout>
  );
}
