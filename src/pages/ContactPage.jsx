import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { PHONE, EMAIL, ADDRESS, HOURS, WHATSAPP_NUMBER } from '../constants';
import { usePageContent } from '../hooks/usePageContent';

const CONTENT_DEFAULTS = {
  hero_badge: 'Get In Touch',
  hero_title: 'Contact Us',
  form_heading: 'Send Us a Message',
  sidebar_note: 'A counsellor will be in touch within 24 hours.',
};

export default function ContactPage() {
  const { content } = usePageContent('contact', CONTENT_DEFAULTS);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', website: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setSent(true);
    } catch (err) {
      setError(err.message || 'Unable to send. Please email info@eduflair.com.');
    } finally {
      setSending(false);
    }
  };

  const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:border-transparent';

  return (
    <Layout>
      {/* Hero */}
      <div style={{ backgroundColor: '#003c4c' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>{content.hero_badge}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{content.hero_title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">

          {/* Sidebar */}
          <div className="mb-10 lg:mb-0 space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold mb-5" style={{ color: '#003c4c' }}>Contact Details</h3>
              <div className="space-y-4">
                {[
                  { icon: 'phone', href: `tel:${PHONE}`, text: PHONE, label: 'Phone' },
                  { icon: 'email', href: `mailto:${EMAIL}`, text: EMAIL, label: 'Email' },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4f7' }}>
                      <svg className="w-4 h-4" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                        {item.icon === 'phone'
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold group-hover:underline" style={{ color: '#003c4c' }}>{item.text}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4f7' }}>
                    <svg className="w-4 h-4" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Address</p>
                    <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4f7' }}>
                    <svg className="w-4 h-4" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Hours</p>
                    <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{HOURS}</p>
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#e8f4f7' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#003c4c' }}>Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">{content.sidebar_note}</p>
                <Link to="/" className="text-sm font-semibold underline" style={{ color: '#003c4c' }}>Back to Home</Link>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-lg mb-7" style={{ color: '#003c4c' }}>{content.form_heading}</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Honeypot — hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handle}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" className={inputClass} style={{ '--tw-ring-color': '#003c4c' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Service</label>
                    <div className="relative">
                      <select name="service" value={form.service} onChange={handle} className={`${inputClass} appearance-none cursor-pointer`}>
                        <option value="">Select a service</option>
                        <option>German Language</option>
                        <option>Ausbildung Program</option>
                        <option>Nursing Placement</option>
                        <option>Study Abroad</option>
                        <option>Not sure yet</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your background, goals, or any questions..." className={`${inputClass} resize-none`} />
                  </div>
                  {error && (
                    <div className="sm:col-span-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                      {error}
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="text-white font-bold px-10 py-3.5 rounded-lg transition-opacity hover:opacity-90 text-sm disabled:opacity-60"
                      style={{ backgroundColor: '#003c4c' }}
                    >
                      {sending ? 'Sending…' : 'Send Message →'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Our Locations */}
        <div className="mt-20 space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Calicut Head Office</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
              <iframe
                title="Eduflair Calicut Head Office Map"
                src="https://www.google.com/maps?cid=17122405543329733042&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">General Inquiries</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>info@eduflair.com</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{PHONE}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Calicut Head Office</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>3rd Floor, Building No: 63/2721, RP Mall, Kozhikkode, Mavoor Road</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Working Hours</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{HOURS}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Perinthalmanna Branch</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
              <iframe
                title="Eduflair Perinthalmanna Branch Map"
                src="https://www.google.com/maps?cid=16346435502116965555&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">General Inquiries</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>info@eduflair.com</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>{PHONE}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Perinthalmanna Branch</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>2nd Floor, VAVA'S Mall, Perinthalmanna</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Working Hours</p>
                <p className="text-sm font-semibold" style={{ color: '#003c4c' }}>9 AM – 5:30 PM, Mon to Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
