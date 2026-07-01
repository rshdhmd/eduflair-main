import { useState } from 'react';

export default function PageFAQ({ title = "Frequently Asked Questions", faqs = [] }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>FAQ</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm transition-colors"
                style={{ backgroundColor: open === i ? '#003c4c' : 'white', color: open === i ? 'white' : '#003c4c' }}
              >
                <span>{faq.q}</span>
                <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed" style={{ backgroundColor: '#f8fbfc' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
