import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const DESTINATIONS = [
  {
    code: 'gb',
    country: 'United Kingdom',
    salary: '£28,000–£45,000/yr',
    visa: 'Health & Care Worker Visa',
    registration: 'NMC (Nursing & Midwifery Council)',
    english: 'IELTS 7.0 or OET Grade B',
    highlights: 'Fast-track visa, NHS employment, 5-year visa with family, PR after 5 years.',
  },
  {
    code: 'ie',
    country: 'Ireland',
    salary: '€35,000–€55,000/yr',
    visa: 'Critical Skills Employment Permit',
    registration: 'NMBI (Nursing & Midwifery Board of Ireland)',
    english: 'IELTS 6.5 or OET Grade B',
    highlights: 'English-speaking EU country, strong pharma sector, pathway to EU citizenship.',
  },
  {
    code: 'nz',
    country: 'New Zealand',
    salary: 'NZD 55,000–80,000/yr',
    visa: 'Accredited Employer Work Visa',
    registration: 'Nursing Council of New Zealand',
    english: 'IELTS 7.0 or OET Grade B',
    highlights: 'Peaceful lifestyle, strong demand for nurses, pathway to NZ PR.',
  },
  {
    code: 'us',
    country: 'United States',
    salary: 'USD 70,000–95,000/yr',
    visa: 'EB-3 (Employment-based Immigration)',
    registration: 'NCLEX-RN + State Nursing Board',
    english: 'IELTS 6.5 or TOEFL',
    highlights: 'Highest salaries globally, strong demand in ICU/CCU specialties.',
  },
  {
    code: 'ae',
    country: 'UAE / Gulf',
    salary: 'AED 8,000–15,000/mo (tax-free)',
    visa: 'Employment Visa',
    registration: 'MOH / DHA / HAAD (State-specific)',
    english: 'English proficiency preferred',
    highlights: 'Tax-free income, proximity to India, strong Kerala nurse community.',
  },
];

export default function OtherNursingPage() {
  return (
    <Layout>
      <PageHero
        badge="Placement Consultancy"
        title="Other Popular Nursing Placement Destinations"
        subtitle="Nursing opportunities in UK, Ireland, New Zealand, USA, UAE, and more — with Eduflair's complete placement support."
        breadcrumbs={[{ label: 'Placement Consultancy', href: '/placement' }, { label: 'Other Destinations' }]}
        bgImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Explore Options</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>Nursing Placement Destinations</h2>
          <p className="text-center text-sm text-gray-500 mb-10 max-w-xl mx-auto">Each country offers unique salary structures, visa types, and career progression. Our counsellors will help you choose the right destination.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            {DESTINATIONS.map((d, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={`https://flagcdn.com/48x36/${d.code}.png`}
                    srcSet={`https://flagcdn.com/96x72/${d.code}.png 2x`}
                    alt={`${d.country} flag`}
                    className="rounded shadow-sm flex-shrink-0"
                    style={{ width: 48, height: 36, objectFit: 'cover' }}
                  />
                  <div>
                    <h3 className="font-extrabold" style={{ color: '#003c4c' }}>{d.country}</h3>
                    <p className="text-xs font-bold" style={{ color: '#ffa800' }}>{d.salary}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Visa', val: d.visa },
                    { label: 'Registration', val: d.registration },
                    { label: 'English Req.', val: d.english },
                  ].map((item, j) => (
                    <div key={j} className="p-3 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-xs font-semibold" style={{ color: '#003c4c' }}>{item.val}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{d.highlights}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Find the Right Destination for Your Nursing Career"
        sub="Book a free assessment with Eduflair's placement team and explore all your options."
      />
    </Layout>
  );
}
