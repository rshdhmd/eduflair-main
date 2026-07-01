import { useState } from 'react';

export default function PathwayFinder() {
  const [form, setForm] = useState({
    qualification: '',
    destination: '',
    germanLevel: '',
    budget: '',
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up form submission / redirect
    alert('Thanks! We\'ll be in touch with your personalised roadmap.');
  };

  const selectClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent appearance-none cursor-pointer';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-700 rounded-3xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">

            {/* Left — copy */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-indigo-300 font-semibold text-xs uppercase tracking-widest mb-4">Personalised</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Find Your Perfect Study-Abroad Path
              </h2>
              <p className="text-indigo-200 text-base leading-relaxed mb-8">
                Answer four quick questions and we'll send you a free, personalised roadmap — which country, which pathway, and what to do first.
              </p>
              <ul className="space-y-3">
                {[
                  'Free, no-obligation assessment',
                  'Tailored to your qualification & budget',
                  'Sent within 24 hours',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-indigo-100 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="bg-white p-10 lg:p-14">
              <h3 className="font-bold text-gray-900 text-lg mb-7">Tell us about yourself</h3>
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Highest Qualification
                  </label>
                  <div className="relative">
                    <select name="qualification" value={form.qualification} onChange={handle} className={selectClass} required>
                      <option value="" disabled>Select your qualification</option>
                      <option>10th Pass (SSLC)</option>
                      <option>Plus Two (12th / HSC)</option>
                      <option>Diploma</option>
                      <option>Graduate (Bachelor's)</option>
                      <option>Postgraduate (Master's)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <select name="destination" value={form.destination} onChange={handle} className={selectClass} required>
                      <option value="" disabled>Select a country</option>
                      <option>Germany</option>
                      <option>United Kingdom</option>
                      <option>Ireland</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Austria</option>
                      <option>Not sure yet</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Current German Level
                  </label>
                  <div className="relative">
                    <select name="germanLevel" value={form.germanLevel} onChange={handle} className={selectClass} required>
                      <option value="" disabled>Select your level</option>
                      <option>None / Absolute Beginner</option>
                      <option>A1</option>
                      <option>A2</option>
                      <option>B1</option>
                      <option>B2 or above</option>
                      <option>Not required for my path</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Total Budget (INR)
                  </label>
                  <div className="relative">
                    <select name="budget" value={form.budget} onChange={handle} className={selectClass} required>
                      <option value="" disabled>Select a budget range</option>
                      <option>Under ₹5 Lakh</option>
                      <option>₹5 Lakh – ₹10 Lakh</option>
                      <option>₹10 Lakh – ₹20 Lakh</option>
                      <option>Above ₹20 Lakh</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3.5 rounded-lg transition-colors text-sm mt-2 shadow-md shadow-indigo-200"
                >
                  Get My Free Roadmap →
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
