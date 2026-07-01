const steps = [
  {
    number: '01',
    title: 'Free Counselling',
    description: 'Book a free session. We map your qualifications, goals, and budget to the right pathway — study, Ausbildung, or placement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Language & Test Prep',
    description: 'In-house German (A1–B2), IELTS, or OET coaching with our certified trainers — the right level for your destination.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Applications',
    description: 'We build your profile, write your SOP, and apply to universities or Ausbildung firms on your behalf — on time, every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Visa Processing',
    description: 'Full document checklist, embassy appointment scheduling, and mock interviews. We\'ve done hundreds — we know what embassies want.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Fly Out',
    description: 'Pre-departure briefing, accommodation guidance, and a full packing checklist. You board with confidence.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Post-Arrival Support',
    description: 'Bank account setup, city registration, and settling-in guidance abroad. We\'re still your team after you land.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Six straightforward steps — from your first conversation to landing in your new country.</p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              {/* Step number badge */}
              <span className="absolute top-5 right-5 text-3xl font-black text-indigo-50 select-none">{step.number}</span>

              <div className="w-12 h-12 bg-indigo-700 rounded-xl flex items-center justify-center text-white mb-5 shadow-md shadow-indigo-200">
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/eligibility"
            className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Start Your Journey — Free Counselling
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
