import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const UNIVERSITIES = [
  { name: 'Technical University of Munich (TUM)', desc: 'Germany\'s top-ranked university, widely recognised for excellence in engineering, technology, and innovation.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/250px-Logo_of_the_Technical_University_of_Munich.svg.png' },
  { name: 'Ludwig Maximilian University of Munich (LMU)', desc: 'Leading research university with a global reputation in medicine, humanities, and law.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LMU_Muenchen_Logo.svg/250px-LMU_Muenchen_Logo.svg.png' },
  { name: 'Heidelberg University', desc: 'Germany\'s oldest university, highly regarded for medicine, life sciences, and natural sciences.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ruprecht-Karls-Universit%C3%A4t_Heidelberg_Logo.svg/250px-Ruprecht-Karls-Universit%C3%A4t_Heidelberg_Logo.svg.png' },
  { name: 'RWTH Aachen University', desc: 'Top destination for engineering and applied sciences with strong industry partnerships.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/RWTH_Logo_3.svg/250px-RWTH_Logo_3.svg.png' },
  { name: 'University of Mannheim', desc: 'Leading university for business, economics, and management in Europe.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Uni_Mannheim_Siegel.svg/250px-Uni_Mannheim_Siegel.svg.png' },
];

const FAQS = [
  { q: 'Is education really free in Germany?', a: 'Yes. Public universities in Germany do not charge tuition fees for undergraduate and most postgraduate courses, even for international students. Only small semester fees (€150–350) apply.' },
  { q: 'Do I need German language skills to study in Germany?', a: 'For German-taught programmes, B2–C1 German is required. Many English-taught programmes are available at Bachelor\'s and Master\'s level.' },
  { q: 'What is a blocked account and do I need one?', a: 'A blocked account (Sperrkonto) is required for the German student visa. You need to deposit approximately €11,208 per year to show proof of sufficient funds.' },
  { q: 'Can I work while studying in Germany?', a: 'Yes, international students can work up to 120 full days (or 240 half-days) per year.' },
  { q: 'What is the post-study work visa duration in Germany?', a: '18 months. After completing your degree, you can stay in Germany for up to 18 months to find a job.' },
  { q: 'Can I apply for PR after studying in Germany?', a: 'Yes. After securing employment and meeting residence requirements, you can apply for the Niederlassungserlaubnis (permanent residency).' },
];

export default function StudyInGermanyPage() {
  return (
    <Layout>
      <PageHero
        bgImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
        badge="Study Abroad — Germany"
        title="Study In Germany — Tuition-Free Education & Career Opportunities"
        subtitle="World-renowned universities, zero tuition at public institutions, 18-month post-study work visa, and a direct pathway to PR."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Germany' }]}
      />

      {/* Quick Facts */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '100% Free', label: 'Public University Tuition' },
              { val: '18 Months', label: 'Post-Study Work Visa' },
              { val: '€934/mo', label: 'Avg. Living Costs' },
              { val: '20 hrs/wk', label: 'Part-time Work Allowed' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Germany */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Study in Germany?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Germany for Your Studies?</h2>
            <div className="space-y-4">
              {[
                { title: 'Tuition-Free Public Universities', desc: 'Study at world-renowned universities with zero tuition fees — even as an international student.' },
                { title: 'Booming Job Market', desc: 'Excellent career opportunities in engineering, healthcare, IT, and business sectors.' },
                { title: 'Practical Learning Focus', desc: 'Paid internships, industry collaborations, and research projects integrated into your programme.' },
                { title: 'Affordable Living Costs', desc: 'Average €934/month — significantly cheaper than UK, Canada, or Australia.' },
                { title: 'PR Pathway', desc: 'Clear route to permanent residency after graduation and employment in Germany.' },
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
          <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
              alt="Brandenburg Gate, Berlin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Top Institutions</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in Germany</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIVERSITIES.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 mb-3 flex items-center">
                  <img src={u.logo} alt={u.name} className="max-h-8 max-w-[120px] object-contain" />
                </div>
                <div className="mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>Tuition-Free</span>
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#003c4c' }}>{u.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs + Eduflair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Costs & Opportunities</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Cost of Living & Work Rights</h2>
            <div className="space-y-4">
              {[
                { label: 'Public University Tuition', val: '0€ — Free', note: 'Only a small semester administration fee (~€300)' },
                { label: 'Private University Tuition', val: '€10,000–€30,000/yr', note: 'Varies by institution and programme' },
                { label: 'Monthly Living Expenses', val: '~€934/month', note: 'Includes accommodation, food, transport, insurance' },
                { label: 'Blocked Account Requirement', val: '€11,208/year', note: 'Required for student visa application' },
                { label: 'Part-time Work', val: '120 days/year', note: '20 hrs/week equivalent — paid internships also available' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="font-extrabold" style={{ color: '#003c4c' }}>{item.val}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>How We Help</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>How Eduflair Helps You Study in Germany</h2>
            <div className="space-y-3">
              {[
                'Expert university selection and application support',
                'Visa guidance and blocked account assistance',
                'German language preparation (A1 to B2) at our Academy',
                'Pre-departure orientation and career coaching',
                'Scholarship identification and application support',
                'Accommodation search and settling-in guidance',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ title="Study in Germany — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Explore Tuition-Free Education in Germany"
        sub="Let Eduflair guide you from application to arrival — German language training included."
      />
    </Layout>
  );
}
