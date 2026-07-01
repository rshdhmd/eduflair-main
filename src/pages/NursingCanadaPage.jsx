import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const STEPS = [
  { n: '01', title: 'Profile Assessment', desc: 'We evaluate your nursing qualifications, experience, IELTS score, and eligibility for Canadian nursing registration.' },
  { n: '02', title: 'NCLEX Preparation', desc: 'Guidance and resources for the NCLEX-RN exam, which is the mandatory nursing licensure test for Canada.' },
  { n: '03', title: 'Credential Evaluation', desc: 'Assistance with NNAS (National Nursing Assessment Service) and provincial nursing college applications.' },
  { n: '04', title: 'Job Placement', desc: 'We connect you with verified Canadian healthcare employers actively hiring internationally trained nurses.' },
  { n: '05', title: 'Visa & Immigration', desc: 'Complete support for Temporary Foreign Worker Program, LMIA, and permanent residency pathways via Express Entry.' },
];

const FAQS = [
  { q: 'What exams do I need to work as a nurse in Canada?', a: 'You need to pass the NCLEX-RN (for RNs) or NCLEX-PN (for LPNs). You also need your credentials assessed by NNAS and registered with the provincial nursing college.' },
  { q: 'Is IELTS required for nursing in Canada?', a: 'Yes. Most provincial nursing colleges require a high English proficiency score — typically IELTS overall 7.0 with no component below 6.5.' },
  { q: 'How long does the process take?', a: 'The complete process from assessment to arrival in Canada typically takes 12–18 months, including NCLEX preparation and credential verification.' },
  { q: 'Can I get PR in Canada as a nurse?', a: 'Yes. Nurses qualify for the Federal Skilled Worker Program and Canadian Experience Class under Express Entry, and many provinces have specific PNP streams for healthcare workers.' },
  { q: 'What is the salary for nurses in Canada?', a: 'Registered Nurses in Canada earn CAD 65,000–95,000 per year on average, with higher salaries in provinces like Alberta and British Columbia.' },
];

export default function NursingCanadaPage() {
  return (
    <Layout>
      <PageHero
        badge="Placement Consultancy"
        title="Nursing Placement in Canada — Start Your Canadian Healthcare Career"
        subtitle="From NCLEX preparation to job placement and Express Entry PR — Eduflair guides Indian nurses every step of the way."
        breadcrumbs={[{ label: 'Placement Consultancy', href: '/placement' }, { label: 'Nursing in Canada' }]}
        bgImage="/images/pl2.jpg"
      />

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: 'CAD 65k–95k', label: 'Average Annual Salary' },
              { val: 'NCLEX-RN', label: 'Licensing Exam' },
              { val: 'Express Entry', label: 'PR Pathway' },
              { val: '12–18 Months', label: 'Typical Timeline' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Canada */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Canada for Nursing?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Nurses Choose Canada</h2>
            <div className="space-y-4">
              {[
                { title: 'Critical Nursing Shortage', desc: 'Canada faces a significant healthcare worker shortage, making internationally trained nurses highly sought after.' },
                { title: 'Competitive Salaries', desc: 'RNs earn CAD 65,000–95,000/year with excellent benefits, pension, and overtime opportunities.' },
                { title: 'Clear PR Pathway', desc: 'Canadian nursing experience qualifies for Express Entry (CEC) and many Provincial Nominee Programs (PNPs).' },
                { title: 'Family Sponsorship', desc: 'Once you have PR, you can sponsor your family members to join you in Canada.' },
                { title: 'Work-Life Balance', desc: 'Canadian healthcare offers structured shift work, union protections, and excellent working conditions.' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ffa800' }}>Eligibility</p>
            <h3 className="font-extrabold mb-4" style={{ color: '#003c4c' }}>Who Can Apply?</h3>
            <div className="space-y-3 mb-6">
              {[
                'Registered Nurse (BSc Nursing or GNM) with valid licence',
                'IELTS Academic — Overall 7.0, no component below 6.5',
                'Minimum 1–2 years of clinical nursing experience',
                'Willingness to appear for NCLEX-RN licensing exam',
                'Age: 21–45 years (preferred)',
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
              <img src="/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg" alt="Nursing professionals in Canada" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16" style={{ backgroundColor: '#003c4c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Process</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12">How Eduflair Places You in Canada</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-sm" style={{ backgroundColor: '#ffa800', color: '#003c4c' }}>{s.n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title="Nursing in Canada — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Your Canadian Nursing Journey"
        sub="Book a free assessment with Eduflair's placement team and begin your path to a nursing career in Canada."
      />
    </Layout>
  );
}
