import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const COURSES = [
  {
    href: '/german-language',
    iconBg: '#003c4c',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <path d="M8 10h8M8 13h5"/>
      </svg>
    ),
    title: 'German Language Training',
    subtitle: 'A1 to B2 Certification',
    desc: 'Structured German language programme from beginner to B2 — the mandatory requirement for Ausbildung, German university admission, and healthcare placements in Germany.',
    stats: [{ val: '8 Months', lbl: 'Duration' }, { val: '200+ Hrs', lbl: 'Training' }, { val: '95%+', lbl: 'Pass Rate' }],
    tag: 'Most In-Demand',
  },
  {
    href: '/ielts-coaching',
    iconBg: '#ffa800',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: 'IELTS Coaching',
    subtitle: 'Academic & General Training',
    desc: 'Expert IELTS preparation covering all four modules — Listening, Reading, Writing, and Speaking. Flexible 1-month and 2-month programmes with mock tests and detailed feedback.',
    stats: [{ val: '4 Skills', lbl: 'Covered' }, { val: '1–2 Months', lbl: 'Programmes' }, { val: 'Band 7+', lbl: 'Target Score' }],
    tag: 'Study Abroad Essential',
  },
  {
    href: '/oet',
    iconBg: '#e05555',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'OET Coaching',
    subtitle: 'Occupational English Test',
    desc: 'Specialised English test preparation for healthcare professionals — nurses, doctors, dentists, and pharmacists — required for registration and practice in UK, Australia, Canada, Ireland, and UAE.',
    stats: [{ val: 'Grade B', lbl: 'Target Score' }, { val: '12 Professions', lbl: 'Covered' }, { val: 'Flexible', lbl: 'Schedule' }],
    tag: 'Healthcare Professionals',
  },
];

export default function LanguageAcademyPage() {
  return (
    <Layout>
      <PageHero
        badge="Language & Skill Academy"
        title="Eduflair Language & Skill Academy — Kerala"
        subtitle="In-house certified coaching for German A1–B2, IELTS, and OET. Everything you need for global education and career success — all under one roof in Calicut."
        breadcrumbs={[{ label: 'Language & Skill Academy' }]}
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>About the Academy</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#003c4c' }}>Kerala's Leading Language Training Institute</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Eduflair Language & Skill Academy is the in-house training arm of Eduflair Learning Solutions. We offer internationally recognised language certification programmes designed specifically for students and professionals pursuing global education, Ausbildung in Germany, and overseas healthcare placements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '1000+', label: 'Students Trained' },
              { val: '95%+', label: 'Exam Pass Rate' },
              { val: '3', label: 'Certified Programmes' },
              { val: 'Calicut', label: 'Centre Location' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Programmes</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Language Training Programmes</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {COURSES.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0" style={{ backgroundColor: c.iconBg }}>
                      {c.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{c.tag}</span>
                  </div>
                  <h3 className="font-extrabold text-lg mb-1" style={{ color: '#003c4c' }}>{c.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: '#ffa800' }}>{c.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {c.stats.map((s, j) => (
                      <div key={j} className="text-center p-2 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                        <p className="text-sm font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                        <p className="text-xs text-gray-400">{s.lbl}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-50">
                  <Link to={c.href} className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all" style={{ color: '#003c4c' }}>
                    Learn More <span style={{ color: '#ffa800' }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eduflair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Why Train at Eduflair Language Academy?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Certified Expert Trainers', desc: 'All trainers hold international certifications in their respective exam formats.' },
              { title: 'Small Batch Sizes', desc: 'Maximum 15 students per batch for personalised attention and faster progress.' },
              { title: 'Exam-Focused Curriculum', desc: 'Every lesson is designed around the exam pattern, not just language learning.' },
              { title: 'Online & Offline Classes', desc: 'Choose from in-centre or live online sessions to suit your schedule.' },
              { title: 'Mock Tests & Analysis', desc: 'Regular full-length mock tests with detailed score breakdown and feedback.' },
              { title: 'Placement Integration', desc: 'Language training is seamlessly linked to our Ausbildung and placement programmes.' },
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

      <PageCTA
        heading="Enrol in Eduflair Language Academy"
        sub="Start your German, IELTS, or OET coaching today and unlock doors to global careers."
      />
    </Layout>
  );
}
