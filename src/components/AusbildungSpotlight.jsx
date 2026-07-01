/*
 * Ausbildung spotlight image:
 *   import ausbildungImg from '../assets/ausbildung-spotlight.jpg'
 *   Then replace <PlaceholderImg /> with:
 *   <img src={ausbildungImg} alt="Ausbildung in Germany" className="w-full h-full object-cover rounded-2xl" />
 */

const highlights = [
  { value: '€1,000–€1,400', label: 'Monthly Stipend', sub: 'paid by your employer' },
  { value: '₹0',             label: 'Tuition Fees',   sub: 'fully employer-funded' },
  { value: '90%+',           label: 'Hired After',    sub: 'programme completion' },
  { value: '2–3 yrs',        label: 'to PR Pathway',  sub: 'permanent residency' },
];


export default function AusbildungSpotlight() {
  return (
    <section className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left — content */}
          <div className="mb-12 lg:mb-0">
            <span className="inline-block bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Flagship Programme
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Germany's Earn-While-You-Train Programme
            </h2>
            <p className="text-indigo-200 text-base leading-relaxed mb-10">
              Ausbildung is Germany's vocational training route — you work with a real employer, earn a real salary, and gain a qualification recognised across the EU. No tuition. No loans. Just a direct path to permanent residency.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="bg-white/10 rounded-xl px-5 py-4 border border-white/10">
                  <p className="text-2xl font-extrabold text-white mb-0.5">{h.value}</p>
                  <p className="text-indigo-200 text-sm font-semibold">{h.label}</p>
                  <p className="text-indigo-400 text-xs">{h.sub}</p>
                </div>
              ))}
            </div>

            <a
              href="/ausbildung"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold px-7 py-3 rounded-md transition-colors text-sm shadow-lg shadow-yellow-900/30"
            >
              Explore Ausbildung
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
              alt="Brandenburg Gate, Berlin — Germany"
              className="w-full min-h-[320px] rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
