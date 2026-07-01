import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FAQS = [
  { q: 'What registration is required to nurse in Australia?', a: 'You must register with AHPRA (Australian Health Practitioner Regulation Agency) after having your qualifications assessed and passing the NCLEX or OSCE if required.' },
  { q: 'Is English required for nursing in Australia?', a: 'Yes. You need either OET (Grade B in all components) or IELTS Academic (overall 7.0, no component below 7.0 for nursing).' },
  { q: 'What is the salary for nurses in Australia?', a: 'Registered Nurses in Australia earn AUD 65,000–90,000 per year. Specialty and ICU nurses can earn significantly more.' },
  { q: 'Can I get PR in Australia as a nurse?', a: 'Yes. Nurses are on Australia\'s skilled occupation list and are eligible for the Skilled Independent Visa (subclass 189) and state-sponsored Subclass 190 visas.' },
  { q: 'Does Eduflair help with OET preparation?', a: 'Yes. Eduflair Language Academy offers OET coaching for nurses and healthcare professionals planning to work in Australia.' },
];

export default function NursingAustraliaPage() {
  return (
    <Layout>
      <PageHero
        badge="Placement Consultancy"
        title="Nursing Placement in Australia — AHPRA Registration & Skilled Migration"
        subtitle="Australia's growing healthcare sector is actively recruiting internationally trained nurses. Eduflair handles everything from OET coaching to AHPRA registration and visa."
        breadcrumbs={[{ label: 'Placement Consultancy', href: '/placement' }, { label: 'Nursing in Australia' }]}
        bgImage="/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg"
      />

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: 'AUD 65k–90k', label: 'Average Annual Salary' },
              { val: 'AHPRA', label: 'Registration Body' },
              { val: 'Subclass 189/190', label: 'PR Visa Options' },
              { val: 'OET / IELTS 7.0', label: 'English Requirement' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Australia for Nursing?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Australia for Your Nursing Career?</h2>
            <div className="space-y-4">
              {[
                { title: 'High Demand for Nurses', desc: 'Australia faces a critical nursing shortage, with thousands of internationally trained nurses recruited every year.' },
                { title: 'Competitive Pay & Benefits', desc: 'AUD 65,000–90,000 annually with strong union protections, overtime, and excellent working conditions.' },
                { title: 'Skilled Migration PR Pathway', desc: 'Nursing is on Australia\'s Medium and Long-term Strategic Skills List (MLTSSL) — direct pathway to PR.' },
                { title: 'High Quality of Life', desc: 'Beautiful cities like Sydney, Melbourne, Brisbane, and Perth consistently rank among the world\'s most liveable.' },
                { title: 'English-Speaking Environment', desc: 'No language barrier to daily life and work — a major advantage for Indian nurses.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100">
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
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ffa800' }}>How Eduflair Helps</p>
            <div className="space-y-3">
              {[
                'OET coaching at Eduflair Language Academy (Grade B target)',
                'AHPRA registration guidance and document preparation',
                'Skills assessment through ANMAC (Australian Nursing & Midwifery Accreditation Council)',
                'Connection with verified Australian healthcare employers',
                'Skilled visa application support (Subclass 189, 190, 491)',
                'Pre-departure orientation and accommodation guidance',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden h-60">
              <img src="/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg" alt="Nursing professional in Australia" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <PageFAQ title="Nursing in Australia — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Begin Your Australian Nursing Career"
        sub="Contact Eduflair for a free placement assessment and start your OET coaching today."
      />
    </Layout>
  );
}
