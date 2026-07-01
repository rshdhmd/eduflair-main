import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const PROFESSIONS = [
  'Nursing', 'Medicine', 'Dentistry', 'Pharmacy', 'Physiotherapy',
  'Occupational Therapy', 'Optometry', 'Radiography', 'Veterinary Science', 'Podiatry', 'Dietetics', 'Speech Pathology',
];

const FAQS = [
  { q: 'What is OET and who needs it?', a: 'OET (Occupational English Test) is an English proficiency test for healthcare professionals. It is required for registration and clinical practice in UK, Australia, Ireland, Canada, UAE, and New Zealand.' },
  { q: 'What score do I need to pass OET?', a: 'Most healthcare regulatory bodies require Grade B (equivalent to IELTS 7.0) in all four sub-tests: Listening, Reading, Writing, and Speaking.' },
  { q: 'How is OET different from IELTS?', a: 'OET is healthcare-specific — all test materials, topics, and case studies are from clinical settings. IELTS uses general academic or everyday topics. Nurses and doctors often find OET more relevant to their work.' },
  { q: 'How long is OET training at Eduflair?', a: 'Our OET programme runs for 4–8 weeks depending on your current English level. Intensive and regular batch options are available.' },
  { q: 'Is OET accepted in the UK for NMC registration?', a: 'Yes. The NMC (Nursing & Midwifery Council) accepts OET as proof of English proficiency for international nurses registering in the UK.' },
  { q: 'Can I take OET online?', a: 'Yes. OET is available in both paper-based and computer-based formats at test centres, and you can sit it multiple times with no waiting period.' },
];

export default function OETPage() {
  return (
    <Layout>
      <PageHero
        badge="Language Academy"
        title="OET Coaching — Occupational English Test for Healthcare Professionals"
        subtitle="Specialised OET preparation for nurses, doctors, dentists, and all registered healthcare professionals at Eduflair Language Academy."
        breadcrumbs={[{ label: 'Language & Skill Academy', href: '/language-academy' }, { label: 'OET Coaching' }]}
        bgImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
      />

      {/* About OET */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>About the Exam</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>What is the OET?</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The Occupational English Test (OET) is an internationally recognised English language test designed specifically for healthcare professionals. Unlike general English tests, OET uses healthcare-specific materials — making it far more relevant for nurses, doctors, and allied health workers.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              OET is accepted by healthcare regulators in the UK, Australia, Ireland, Canada, New Zealand, UAE, and over 20 countries for professional registration and visa applications.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Listening', 'Reading', 'Writing', 'Speaking'].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#e8f4f7' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white flex-shrink-0" style={{ backgroundColor: '#003c4c' }}>
                    {skill[0]}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#003c4c' }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ffa800' }}>Quick Facts</p>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Target Score', val: 'Grade B in all 4 sub-tests' },
                { label: 'Grade B Equivalent', val: 'IELTS 7.0 equivalent' },
                { label: 'Course Duration', val: '4–8 weeks at Eduflair' },
                { label: 'Test Format', val: 'Paper-based or computer-based' },
                { label: 'Validity', val: '2 years from test date' },
                { label: 'Accepted In', val: 'UK, Australia, Ireland, Canada, UAE, NZ & more' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="py-14" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Who Needs OET?</p>
          <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: '#003c4c' }}>OET is Available for 12 Healthcare Professions</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {PROFESSIONS.map((p, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'white', color: '#003c4c', border: '1px solid #c5dde3' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eduflair for OET */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Why Choose Eduflair for OET Coaching?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Healthcare-Specific Training', desc: 'All coaching materials are based on clinical scenarios — directly relevant to your profession.' },
              { title: 'Expert Trainers', desc: 'Our OET trainers are certified and experienced in coaching nurses and healthcare professionals.' },
              { title: 'Flexible Batches', desc: 'Morning, evening, weekend, and online batches. Intensive options for quick exam preparation.' },
              { title: 'Mock Tests & Feedback', desc: 'Full-length OET mock tests with detailed feedback on your writing and speaking components.' },
              { title: 'Placement Integration', desc: 'OET coaching is linked directly to our nursing placement programmes for UK and Australia.' },
              { title: 'Small Groups', desc: 'Maximum 12 students per batch for personalised attention and faster skill development.' },
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

      <PageFAQ title="OET Coaching — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start OET Coaching at Eduflair"
        sub="Enrol today and get Grade B with Eduflair's healthcare-focused OET coaching in Calicut."
      />
    </Layout>
  );
}
