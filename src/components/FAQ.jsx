import { useState } from 'react';

const faqs = [
  {
    q: 'What services does Eduflair offer?',
    a: 'Eduflair offers four core services: Study Abroad consultancy (UK, Canada, Ireland, France, Austria), Ausbildung in Germany, Language & Skill Academy (German A1–B2, IELTS, OET), and Placement Consultancy for healthcare professionals.',
  },
  {
    q: 'Do I need a degree to apply for Ausbildung in Germany?',
    a: 'No. Most Ausbildung programmes accept Plus Two (10+2 / HSC) qualifications. Some specific trades may have additional requirements. Book a free counselling session with us to check your exact eligibility.',
  },
  {
    q: 'Do you provide in-house German language training?',
    a: 'Yes. Our Language & Skill Academy in Calicut provides certified German language training from A1 to B2 level. We also offer IELTS and OET coaching — all in-house with our own certified trainers.',
  },
  {
    q: 'How long does the entire abroad process take?',
    a: 'Typically 6–12 months from your first counselling session to flying out. Language training (3–6 months) runs first, followed by the application and visa process. Some of our students have received offers in as little as 3 months.',
  },
  {
    q: 'What are the costs involved? Are scholarships available?',
    a: 'We are fully transparent about our fees from day one. Several Ausbildung programmes are employer-funded with zero tuition. For university programmes, we actively help you identify and apply for scholarships and financial aid.',
  },
  {
    q: 'Where is your office and how can I visit?',
    a: 'We are located at the 3rd Floor, RP Mall, Mavoor Road, Calicut, Kerala – 673004. Walk-ins are welcome Monday to Saturday, 9am–6pm. Online consultations are also available — book via our contact page.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#003c4c20' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#e8f4f7] transition-colors"
      >
        <span className="font-semibold text-sm leading-snug" style={{ color: '#003c4c' }}>{q}</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ backgroundColor: isOpen ? '#ffa800' : '#e8f4f7', color: isOpen ? '#003c4c' : '#003c4c' }}
        >
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-white border-t" style={{ borderColor: '#003c4c10' }}>
          <p className="text-gray-500 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">

          {/* Left */}
          <div className="mb-12 lg:mb-0">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#003c4c' }}>
              Got Questions?<br />We've Got Answers
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Can't find what you're looking for? Speak directly to a counsellor — we're happy to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-md border-2 transition-colors hover:bg-[#003c4c] hover:text-white"
              style={{ color: '#003c4c', borderColor: '#003c4c' }}
            >
              Ask a Question
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
