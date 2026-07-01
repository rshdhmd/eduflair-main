import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const STEPS = [
  {
    n: '01',
    title: 'Free Initial Consultation',
    desc: 'Book a free session with our counsellors. We assess your academic background, budget, career goals, and preferred destination to create a personalised action plan.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
  },
  {
    n: '02',
    title: 'Course & University Selection',
    desc: 'We shortlist universities and programmes based on your eligibility, budget, and career goals — covering rankings, acceptance rates, and scholarship availability.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
  },
  {
    n: '03',
    title: 'Language Test Preparation',
    desc: 'If required, we enrol you in our in-house IELTS, German, or OET coaching at Eduflair Language Academy to meet the language requirements of your chosen universities.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
  {
    n: '04',
    title: 'Application & Documentation',
    desc: 'We prepare all application documents — SOP (Statement of Purpose), LOR (Letters of Recommendation), CV, academic transcripts, and submit applications to universities on your behalf.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  },
  {
    n: '05',
    title: 'Offer Letter & Acceptance',
    desc: 'Once you receive admission offers, we help you evaluate and select the best offer, and guide you through accepting it and paying the deposit.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  },
  {
    n: '06',
    title: 'Scholarship Application',
    desc: 'We identify all available scholarships and bursaries you are eligible for and assist with scholarship applications to reduce your financial burden.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
  {
    n: '07',
    title: 'Visa Application & Embassy Prep',
    desc: 'We prepare your complete visa file — financial documents, biometrics, travel insurance, blocked account (if needed) — and provide mock interviews for embassy appointments.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"/><circle cx="9" cy="13" r="2" stroke="white" strokeWidth={1.8}/><path d="M11.83 15A3 3 0 006.17 15"/></svg>,
  },
  {
    n: '08',
    title: 'Pre-Departure & Accommodation',
    desc: 'Before you fly, we provide a comprehensive pre-departure orientation — accommodation search, packing list, banking, local transport, and cultural tips for your destination country.',
    icon: <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>,
  },
];

export default function ApplicationProcessPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad"
        title="Study Abroad Application Process — Step-by-Step Guide"
        subtitle="From your first consultation to your first day abroad — Eduflair handles every step of the journey."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Application Process' }]}
        bgImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>How It Works</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#003c4c' }}>Your End-to-End Study Abroad Journey</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Applying to study abroad can feel overwhelming — but with Eduflair by your side, every step is clear, organised, and stress-free. Our 8-step process ensures nothing is missed, from choosing the right university to landing at your destination.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-4 pb-16" style={{ backgroundColor: '#f8fbfc' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-5 items-start hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl" style={{ backgroundColor: '#003c4c' }}>
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black" style={{ color: '#ffa800' }}>STEP {s.n}</span>
                    <h3 className="font-extrabold" style={{ color: '#003c4c' }}>{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Timeline</p>
          <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: '#003c4c' }}>Typical Application Timeline</h2>
          <div className="space-y-3">
            {[
              { phase: 'Months 1–2', task: 'Initial consultation, course selection, language test enrolment' },
              { phase: 'Months 3–5', task: 'Language training, document preparation, university applications submitted' },
              { phase: 'Month 6', task: 'Receive offer letters, select university, pay deposit' },
              { phase: 'Months 7–8', task: 'Visa application, scholarship applications, pre-departure preparation' },
              { phase: 'Month 9+', task: 'Visa approved, accommodation arranged, departure & arrival' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                <div className="w-28 flex-shrink-0">
                  <span className="text-xs font-bold" style={{ color: '#ffa800' }}>{item.phase}</span>
                </div>
                <p className="text-sm text-gray-600">{item.task}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400 text-center">Timeline varies by country and intake. Start at least 9–12 months before your preferred intake date.</p>
        </div>
      </section>

      <PageCTA
        heading="Ready to Start Your Application?"
        sub="Book a free consultation today — let's build your personalised action plan for studying abroad."
      />
    </Layout>
  );
}
