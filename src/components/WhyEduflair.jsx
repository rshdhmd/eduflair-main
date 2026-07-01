const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'In-House Language Training',
    description: 'Our own certified trainers teach German (A1–B2), IELTS, and OET — no outsourcing, no referrals to third parties.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Full Transparency',
    description: 'No hidden fees. You see our full service structure from day one — fees, timelines, and what\'s included.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'One Integrated Team',
    description: 'Language coaches, admissions counsellors, visa specialists, and placement officers — all in-house and accountable.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'End-to-End Roadmap',
    description: 'From A1 class to arrival abroad — we map your complete journey and walk every step with you.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'Streamlined processes mean most students receive offer letters within 3–6 months of starting their journey.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Post-Arrival Support',
    description: 'We don\'t stop at the boarding gate. Bank accounts, registration, and settling-in guidance once you land.',
  },
];

export default function WhyEduflair() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left — text */}
          <div className="mb-12 lg:mb-0">
            <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              The Only Team You'll Ever Need — From First Class to First Job
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Most consultancies hand you off the moment you need language coaching, or drop you after the visa. Eduflair is different. Every service lives in-house: your counsellor, your German tutor, your visa officer, and your placement contact are one accountable team.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — grid of reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
