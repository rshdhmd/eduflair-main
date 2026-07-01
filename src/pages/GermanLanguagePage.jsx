import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const LEVELS = [
  { code: 'A1', title: 'Beginner', desc: 'Greetings, basic vocabulary, numbers, introductions. No prior knowledge required.' },
  { code: 'A2', title: 'Elementary', desc: 'Daily conversations, shopping, travel, simple descriptions and routines.' },
  { code: 'B1', title: 'Intermediate', desc: 'Express opinions, understand workplace instructions, read simple texts.' },
  { code: 'B2', title: 'Upper-Intermediate', desc: 'Required for Ausbildung & university admission. Fluent workplace communication, complex grammar.' },
];

const WHY = [
  { title: 'Kerala\'s Leading Language Institute', desc: 'Trusted by thousands of students who have achieved B2 and secured placements in Germany.' },
  { title: 'Expert Trainers', desc: 'Our trainers are TELC/Goethe certified with years of experience in exam-focused coaching.' },
  { title: 'Nursing-Specific Curriculum', desc: 'Specialised German modules for healthcare workers including medical terminology.' },
  { title: 'Small Batch Sizes', desc: 'Maximum 15 students per batch for personalised attention and faster progress.' },
  { title: 'Online & Offline Modes', desc: 'Flexible timings for working professionals. Weekend batches available.' },
  { title: 'High Exam Pass Rate', desc: 'Consistent 95%+ pass rate in TELC and Goethe B2 certification exams.' },
];

const FAQS = [
  { q: 'How long does it take to reach B2 level from scratch?', a: 'Approximately 8 months with our structured A1 to B2 programme (200+ hours of instruction).' },
  { q: 'Which German exam should I take — Goethe or TELC?', a: 'Both are accepted for Ausbildung. Our counsellors will recommend the right one based on your goals and timeline.' },
  { q: 'Are classes available on weekends?', a: 'Yes. We offer weekend batches for working professionals and students with college schedules.' },
  { q: 'Is online German coaching available?', a: 'Yes. We offer live online and in-person classes with the same quality curriculum.' },
  { q: 'Do I need German for Ausbildung in all fields?', a: 'Yes. B2 is the minimum requirement across all Ausbildung fields including nursing, IT, and logistics.' },
];

export default function GermanLanguagePage() {
  return (
    <Layout>
      <PageHero
        badge="Language Academy"
        title="Learn German — Build a Bright Future with Eduflair"
        subtitle="From A1 Beginner to B2 Certified — structured, exam-focused German language training in Calicut, Kerala."
        breadcrumbs={[{ label: 'Language & Skill Academy', href: '/language-academy' }, { label: 'German Language' }]}
        bgImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '8 Months', label: 'Programme Duration' },
              { val: '200+ Hours', label: 'Total Instruction' },
              { val: 'A1 to B2', label: 'Levels Covered' },
              { val: '95%+', label: 'Exam Pass Rate' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn German */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why German?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Learn German?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">German is the gateway to Europe's largest economy. Whether you're pursuing Ausbildung, planning to study at a tuition-free German university, or seeking a healthcare career in Germany — B2 German is your key.</p>
            <div className="space-y-3">
              {[
                'Qualify for Ausbildung (vocational training) in Germany',
                'Gain admission to tuition-free German public universities',
                'Meet requirements for German nursing and healthcare jobs',
                'Strengthen your work visa and immigration applications',
                'Communicate confidently with German employers and colleagues',
                'Open doors to one of Europe\'s strongest job markets',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
              alt="Language learning and books"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Curriculum</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>German Language Courses — A1 to B2</h2>
          <p className="text-center text-sm text-gray-500 mb-10 max-w-xl mx-auto">Daily 4-hour classes with weekly Saturday assessment tests. Structured progression ensures a strong foundation at each level.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEVELS.map((l, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm" style={{ borderTop: '3px solid #ffa800' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-black text-lg" style={{ backgroundColor: '#003c4c', color: 'white' }}>{l.code}</div>
                <h3 className="font-bold mb-2" style={{ color: '#003c4c' }}>{l.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 max-w-2xl mx-auto text-sm text-gray-600 text-center">
            <strong style={{ color: '#003c4c' }}>B2 Exam Crash Course also available</strong> — intensive revision for students with prior German knowledge who want to clear B2 certification quickly.
          </div>
        </div>
      </section>

      {/* Why Eduflair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Why Choose Eduflair for German Training?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f4f7' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#003c4c' }}>{w.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title="German Language Training — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Learning German Today"
        sub="Join Kerala's most trusted German language programme and get B2 certified with Eduflair."
      />
    </Layout>
  );
}
