/*
 * Country flag images:
 *   import germanyFlag  from '../assets/flags/germany.svg'
 *   import ukFlag       from '../assets/flags/uk.svg'
 *   ... etc.
 *   Replace each <PlaceholderFlag> with <img src={...} alt="..." className="w-12 h-8 object-cover rounded" />
 */

const destinations = [
  {
    name: 'Germany',
    flag: '🇩🇪',
    highlight: 'Ausbildung · PR Pathway',
    description: 'Europe\'s top destination for vocational training and healthcare placement.',
    href: '/destinations/germany',
    popular: true,
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    highlight: 'University · Work Visa',
    description: 'World-class universities with post-study work rights.',
    href: '/destinations/uk',
    popular: false,
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    highlight: 'Study · Stay Back',
    description: 'English-speaking EU country with a generous two-year stay-back option.',
    href: '/destinations/ireland',
    popular: false,
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    highlight: 'PR · Healthcare Jobs',
    description: 'Strong immigration pathways for nurses, technicians, and graduates.',
    href: '/destinations/canada',
    popular: false,
  },
  {
    name: 'France',
    flag: '🇫🇷',
    highlight: 'Affordable Tuition',
    description: 'Public universities with very low fees and scholarships for international students.',
    href: '/destinations/france',
    popular: false,
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    highlight: 'Ausbildung · EU PR',
    description: 'German-speaking country with excellent Ausbildung and study options.',
    href: '/destinations/austria',
    popular: false,
  },
];

export default function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">Destinations</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Where Do You Want to Go?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We place students and professionals in six countries — with tailored pathways for each.
          </p>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {destinations.map((d) => (
            <a
              key={d.name}
              href={d.href}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex gap-5 items-start"
            >
              {d.popular && (
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Popular
                </span>
              )}

              {/* Flag / image placeholder */}
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl flex-shrink-0">
                {/* REPLACE: with <img src={flag} alt={d.name} className="w-10 h-7 object-cover rounded" /> */}
                {d.flag}
              </div>

              <div className="min-w-0">
                <span className="text-indigo-500 text-xs font-semibold uppercase tracking-wider">{d.highlight}</span>
                <h3 className="font-bold text-gray-900 text-base mt-0.5 mb-1">{d.name}</h3>
                <p className="text-gray-500 text-sm leading-snug">{d.description}</p>
              </div>

              <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Other destinations CTA */}
        <div className="text-center">
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 border-2 border-indigo-200 hover:border-indigo-400 text-indigo-700 hover:text-indigo-900 font-semibold px-6 py-3 rounded-md transition-colors text-sm"
          >
            View Other Popular Destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
