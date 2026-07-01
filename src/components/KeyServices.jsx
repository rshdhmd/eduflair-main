const keyServices = [
  'Personalized University Selection',
  'Application & Admission Assistance',
  'Student Visa Guidance & Processing',
  'IELTS / PTE Language Training',
  'Scholarship & Financial Aid Support',
  'Pre-Departure & Post-Arrival Support',
];

export default function KeyServices() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fffaf0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left */}
          <div className="mb-12 lg:mb-0">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
              Core Offerings
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#003c4c' }}>
              Everything You Need for Global Education &amp; Career Success
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              At Eduflair, we provide end-to-end support for students and professionals pursuing opportunities abroad. Our comprehensive services cover every step of your journey.
            </p>
            <h3 className="font-bold text-lg mb-5" style={{ color: '#003c4c' }}>Our Key Services:</h3>
            <ul className="space-y-3">
              {keyServices.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffa800' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#003c4c" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src="/images/DCS03993-1-768x512.jpg"
              alt="Eduflair classroom session"
              className="w-full h-96 rounded-2xl object-cover shadow-xl"
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 rounded-2xl px-6 py-4 shadow-lg hidden lg:block"
              style={{ backgroundColor: '#003c4c' }}
            >
              <p className="text-3xl font-extrabold text-white">10<span style={{ color: '#ffa800' }}>+</span></p>
              <p className="text-white/70 text-xs mt-0.5">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
