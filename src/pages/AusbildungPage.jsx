import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FIELDS = [
  {
    title: 'Nursing & Healthcare',
    desc: 'High-demand sector with excellent job security and PR pathways.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
  },
  {
    title: 'Mechatronics',
    desc: 'Combines mechanical, electrical, and computer engineering.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  },
  {
    title: 'Information Technology',
    desc: 'Germany\'s tech sector offers top salaries and career growth.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  },
  {
    title: 'Logistics',
    desc: 'Europe\'s supply chain hub creates thousands of openings yearly.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
  },
  {
    title: 'Food Processing',
    desc: 'Growing industry with strong employer-sponsored programmes.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>,
  },
  {
    title: 'Electrical Engineering',
    desc: 'Precision engineering roles with globally recognised certificates.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  },
];

const STEPS = [
  { n: '01', title: 'Career Consultation', desc: 'Free session to assess your background, interests, and eligibility for Ausbildung.' },
  { n: '02', title: 'German Language Training', desc: 'Intensive A1–B2 German training at Eduflair Language Academy.' },
  { n: '03', title: 'Application & Interview', desc: 'CV preparation, motivation letter writing, and mock interview coaching.' },
  { n: '04', title: 'Visa Process', desc: 'Complete visa documentation support — from student visa to work permit pathway.' },
  { n: '05', title: 'Relocation & Training', desc: 'Pre-departure briefing, accommodation guidance, and on-arrival support.' },
];

const FAQS = [
  { q: 'What is the age limit for Ausbildung in Germany?', a: 'Typically 18–26 years, though some employers accept candidates up to 30 years depending on the sector.' },
  { q: 'Is German language mandatory for Ausbildung?', a: 'Yes. A minimum of B2 level German is required to communicate effectively at the workplace and pass vocational exams.' },
  { q: 'How much will I earn during Ausbildung?', a: 'You receive a monthly training allowance (Ausbildungsvergütung) of approximately €1,000–€1,400 paid by your employer.' },
  { q: 'Is Ausbildung completely free?', a: 'Yes. The vocational school (Berufsschule) is tuition-free and your employer funds the practical training. You earn while you learn.' },
  { q: 'Can I get Permanent Residency after Ausbildung?', a: 'Yes. After completing Ausbildung and working for 2 years in Germany, you can apply for permanent residency (Niederlassungserlaubnis).' },
  { q: 'How long does the entire process take?', a: 'From consultation to departure typically takes 10–14 months, including 8 months of German language training.' },
];

export default function AusbildungPage() {
  return (
    <Layout>
      <PageHero
        badge="Ausbildung Program"
        title="Ausbildung in Germany: Your Pathway to a Career Without a Degree"
        subtitle="Earn while you learn — zero tuition fees, €1,000–€1,400/month stipend, and a direct route to German Permanent Residency."
        breadcrumbs={[{ label: 'Ausbildung Program' }]}
        bgImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Key Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '2–3.5 yrs', label: 'Programme Duration' },
              { val: '€1,000–1,400', label: 'Monthly Stipend' },
              { val: '100% Free', label: 'Tuition Fees' },
              { val: '90%+', label: 'Employment After Completion' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Overview</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>What is Ausbildung in Germany?</h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">
              Ausbildung is Germany's world-renowned dual education system combining practical on-the-job training with classroom instruction. Unlike a traditional degree, it is fully employer-funded — you receive a monthly stipend throughout your training.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              On completion, you earn a nationally and internationally recognised German vocational certificate — opening doors to permanent employment and a clear PR pathway in Germany.
            </p>
            <div className="space-y-3">
              {[
                'Zero tuition fees — 100% employer-funded training',
                'Earn €1,000–€1,400 per month during training',
                '90%+ employment rate after completion',
                'Permanent Residency pathway after 2 years work experience',
                'Globally recognised German vocational certificates',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003c4c' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"
              alt="Vocational technical training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Top Fields */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Career Options</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>Top Ausbildung Fields in Germany</h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">Choose from in-demand vocational fields with excellent job prospects and employer partnerships across Germany.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIELDS.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: '#003c4c' }}>
                  {f.svg}
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Requirements</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Eligibility Criteria</h2>
            <div className="space-y-4">
              {[
                { label: 'Academic Qualification', desc: 'Minimum 55% marks in 12th grade (Plus Two / HSC)' },
                { label: 'German Language', desc: 'B2 level German language certification is mandatory' },
                { label: 'Age Requirement', desc: 'Applicants must be between 18 and 26 years of age' },
                { label: 'Motivation', desc: 'Demonstrated willingness to work and settle in Germany' },
                { label: 'Health Clearance', desc: 'Basic medical fitness required by German employers' },
              ].map((item, i) => (
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Our Support</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>How Eduflair Helps You</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">From your first consultation to your first day in Germany, Eduflair's dedicated Ausbildung team handles every step.</p>
            <div className="space-y-3">
              {[
                'Free eligibility assessment and career guidance',
                'A1 to B2 German language training at our Language Academy',
                'CV preparation and motivation letter writing',
                'Mock interview coaching with German employer standards',
                'Complete visa documentation and embassy preparation',
                'Pre-departure briefing and accommodation guidance',
                'Post-arrival support and emergency contact in Germany',
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
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16" style={{ backgroundColor: '#003c4c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>The Journey</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12">The Ausbildung Application Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-sm" style={{ backgroundColor: '#ffa800', color: '#003c4c' }}>{s.n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title="FAQ's — Ausbildung in Germany" faqs={FAQS} />
      <PageCTA
        heading="Start Your Ausbildung Journey Today!"
        sub="Speak to an Eduflair counsellor and find out if you qualify for a German Ausbildung programme."
      />
    </Layout>
  );
}
