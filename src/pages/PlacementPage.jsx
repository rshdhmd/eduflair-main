import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import { Link } from 'react-router-dom';

const STEPS = [
  { n: '01', title: 'Consultation & Eligibility Check', desc: 'We assess your qualifications, work experience, language proficiency, and target destinations.' },
  { n: '02', title: 'Document Assistance', desc: 'Credential evaluation, licensing guidance, and complete documentation support.' },
  { n: '03', title: 'Employer Matching', desc: 'We connect you with verified international employers and healthcare organisations.' },
  { n: '04', title: 'Visa & Immigration Support', desc: 'End-to-end work visa applications, legal requirements, and embassy preparation.' },
  { n: '05', title: 'Pre-Departure Support', desc: 'Orientation, accommodation guidance, and on-arrival support at your destination.' },
];

const DESTINATIONS = [
  { code: 'ca', title: 'Nursing Placement in Canada', href: '/nursing-canada', desc: 'NCLEX pathway, PGWP, and Express Entry PR opportunities for RNs.' },
  { code: 'au', title: 'Nursing Placement in Australia', href: '/nursing-australia', desc: 'AHPRA registration support and skilled migration pathways for nurses.' },
  { code: 'de', title: 'Nursing Placement in Germany', href: '/nursing-germany', desc: 'Ausbildung and direct nursing placements with B2 German language support.' },
  { code: null, title: 'Other Destinations', href: '/other-nursing-destinations', desc: 'UK, Ireland, New Zealand, USA, UAE and more nursing placement options.' },
];

export default function PlacementPage() {
  return (
    <Layout>
      <PageHero
        badge="Placement Consultancy"
        title="Overseas Job Consultancy in Kerala — Eduflair Placement & Immigration"
        subtitle="Your trusted path to global careers. Expert placement services for healthcare professionals and skilled workers across Canada, Australia, Germany, and more."
        breadcrumbs={[{ label: 'Placement Consultancy' }]}
        bgImage="/images/DSC06788.JPG"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>About Our Services</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Eduflair Placement & Immigration Consultancy?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Eduflair specialises in guiding skilled professionals — especially healthcare workers — toward rewarding career opportunities abroad. As a trusted Kerala-based consultancy, we offer comprehensive international job placement and immigration services.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { title: 'Proven Expertise', desc: 'Years of placement experience across industries, with a focus on healthcare and nursing.' },
                { title: 'Comprehensive Support', desc: 'From document verification to visa guidance — we handle everything.' },
                { title: 'Hassle-Free Processing', desc: 'Personalised support for a smooth, stress-free placement journey.' },
                { title: 'Post-Arrival Guidance', desc: 'Accommodation, work culture orientation, and settlement support included.' },
                { title: 'Strong Employer Network', desc: 'Partnerships with verified international organisations and healthcare providers.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#003c4c' }}>{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src="/images/DSC06782.JPG"
              alt="Eduflair office and certifications"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16" style={{ backgroundColor: '#003c4c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Process</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12">5-Step Placement Process</h2>
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

      {/* Destinations */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Destinations</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Nursing Placement Destinations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d, i) => (
              <Link key={i} to={d.href} className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="mb-4">
                  {d.code ? (
                    <img
                      src={`https://flagcdn.com/48x36/${d.code}.png`}
                      srcSet={`https://flagcdn.com/96x72/${d.code}.png 2x`}
                      alt={`${d.title} flag`}
                      className="rounded shadow-sm"
                      style={{ width: 48, height: 36, objectFit: 'cover' }}
                    />
                  ) : (
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#003c4c" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-bold mb-2 group-hover:underline text-sm" style={{ color: '#003c4c' }}>{d.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                <div className="mt-4 text-xs font-semibold flex items-center gap-1" style={{ color: '#ffa800' }}>
                  Learn more <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Ready to Start Your Global Career?"
        sub="Book a free consultation with Eduflair's placement experts and take the first step toward your international career."
      />
    </Layout>
  );
}
