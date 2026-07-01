import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FAQS = [
  { q: 'Is German language mandatory for nursing in Germany?', a: 'Yes. B2 German is the minimum requirement for all nursing positions in Germany. Many hospitals require C1 for clinical communication.' },
  { q: 'What is the Anerkennungsverfahren (recognition process)?', a: 'This is the process of getting your Indian nursing qualification recognised by a German state. Eduflair guides you through this application, which includes document translation, notarisation, and submission.' },
  { q: 'Do I need to requalify to nurse in Germany?', a: 'If your qualification is partially recognised, you may need to complete a practical adaptation measure (Anpassungslehrgang) of 3–12 months at a German hospital.' },
  { q: 'What is the salary for nurses in Germany?', a: 'Nurses in Germany earn €2,200–€3,500/month gross, with a 13th month bonus in many healthcare institutions. Overtime and shift allowances add significantly to take-home pay.' },
  { q: 'Can I get PR in Germany as a nurse?', a: 'Yes. After 2 years of permanent employment in Germany, you can apply for the Niederlassungserlaubnis (permanent residency permit).' },
];

export default function NursingGermanyPage() {
  return (
    <Layout>
      <PageHero
        badge="Placement Consultancy"
        title="Nursing Placement in Germany — Secure Career with PR Pathway"
        subtitle="Germany urgently needs qualified nurses. Eduflair provides A1–B2 German training, qualification recognition support, and direct employer placements."
        breadcrumbs={[{ label: 'Placement Consultancy', href: '/placement' }, { label: 'Nursing in Germany' }]}
        bgImage="/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg"
      />

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '€2,200–3,500', label: 'Monthly Salary' },
              { val: 'B2 German', label: 'Language Requirement' },
              { val: '2 Years', label: 'Path to PR' },
              { val: 'Recognised', label: 'Indian Qualifications' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Germany for Nursing?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Nurses Choose Germany</h2>
            <div className="space-y-4">
              {[
                { title: 'Critical Nursing Shortage', desc: 'Germany needs 500,000+ additional healthcare workers by 2030 — creating massive demand for internationally trained nurses.' },
                { title: 'Excellent Salary & Benefits', desc: '€2,200–€3,500/month with full health insurance, pension contributions, and generous leave entitlements.' },
                { title: 'Permanent Residency Pathway', desc: 'After 2 years of permanent employment in Germany, you can apply for PR and eventually citizenship.' },
                { title: 'Job Security', desc: 'Healthcare workers in Germany have some of the strongest employment protections in Europe.' },
                { title: 'Ausbildung Option', desc: 'For those who want to train in Germany, the nursing Ausbildung programme leads directly to full recognition and employment.' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ffa800' }}>Eduflair Support</p>
            <h3 className="font-extrabold mb-4" style={{ color: '#003c4c' }}>How We Support You</h3>
            <div className="space-y-3">
              {[
                'German language training A1 to B2 at our Language Academy',
                'Anerkennungsverfahren (qualification recognition) guidance',
                'Document translation and notarisation coordination',
                'Direct employer connections with German hospitals and care homes',
                'Work visa (Employment Visa) application support',
                'Adaptation programme (Anpassungslehrgang) placement if needed',
                'Pre-departure briefing and on-arrival support in Germany',
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
              <img src="/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg" alt="Nursing professionals in Germany" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <PageFAQ title="Nursing in Germany — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Your Nursing Career in Germany"
        sub="Enrol in German language training and begin your journey toward a nursing career in Germany with Eduflair."
      />
    </Layout>
  );
}
