import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const DESTINATIONS = [
  { code: 'au', name: 'Australia', highlights: 'Top QS universities, 2–4 year post-study work visa, clear PR pathway via skilled migration.' },
  { code: 'us', name: 'USA', highlights: 'World\'s largest higher education system, OPT/STEM OPT work rights, top research universities.' },
  { code: 'nz', name: 'New Zealand', highlights: 'Post-study work right of 1–3 years, peaceful lifestyle, strong agriculture and tech sectors.' },
  { code: 'se', name: 'Sweden', highlights: 'Strong engineering and design programmes, free education for PhD students, innovative work culture.' },
  { code: 'no', name: 'Norway', highlights: 'Low tuition fees at public universities, strong oil & gas and maritime industries.' },
  { code: 'dk', name: 'Denmark', highlights: 'Tuition-free for EU students, excellent life sciences and design programmes, high quality of life.' },
  { code: 'nl', name: 'Netherlands', highlights: 'Wide range of English-taught programmes, one of Europe\'s most international student populations.' },
  { code: 'fi', name: 'Finland', highlights: 'World-leading education system, strong engineering and ICT sectors, excellent quality of life.' },
  { code: 'ch', name: 'Switzerland', highlights: 'Home to ETH Zurich (top 10 world), strong finance and pharma industries, excellent salaries.' },
  { code: 'it', name: 'Italy', highlights: 'Rich cultural heritage, strong design and fashion programmes, affordable Mediterranean lifestyle.' },
  { code: 'es', name: 'Spain', highlights: 'Vibrant culture, growing tech startup ecosystem, affordable living costs in major cities.' },
];

export default function OtherDestinationsPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad"
        title="Other Popular Study Destinations"
        subtitle="Beyond UK, Germany, Canada, Ireland, France, and Austria — explore more study options supported by Eduflair."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Other Destinations' }]}
        bgImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: '#003c4c' }}>More Study Abroad Destinations We Support</h2>
          <p className="text-center text-sm text-gray-500 mb-10 max-w-xl mx-auto">Every destination has unique advantages. Our counsellors will help you find the right fit for your goals, budget, and career plans.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESTINATIONS.map((d, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://flagcdn.com/48x36/${d.code}.png`}
                    srcSet={`https://flagcdn.com/96x72/${d.code}.png 2x`}
                    alt={`${d.name} flag`}
                    className="rounded shadow-sm flex-shrink-0"
                    style={{ width: 48, height: 36, objectFit: 'cover' }}
                  />
                  <h3 className="font-extrabold" style={{ color: '#003c4c' }}>{d.name}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{d.highlights}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eduflair */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Our Expertise</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Not Sure Which Country to Choose?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Choosing the right study destination depends on your course, budget, career goals, and long-term immigration plans. Eduflair's expert counsellors will analyse your profile and recommend the best-fit country — with a clear breakdown of costs, timelines, and visa requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white" style={{ backgroundColor: '#003c4c' }}>
            Book a Free Counselling Session
          </Link>
        </div>
      </section>

      <PageCTA heading="Find Your Perfect Study Destination" sub="Let Eduflair match you with the right country, university, and programme for your goals." />
    </Layout>
  );
}
