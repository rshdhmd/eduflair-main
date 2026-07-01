import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FAQS = [
  { q: 'Is it expensive to study in France?', a: 'France is actually one of the most affordable European study destinations. Public university fees are very low (€170–€380/year for EU-funded programmes). Many English-taught programmes at private schools range from €3,000–€12,000/year.' },
  { q: 'Are there scholarships for Indian students in France?', a: 'Yes. The Eiffel Excellence Scholarship, Charpak scholarships (Campus France India), and various university-specific awards are available for Indian students.' },
  { q: 'Can I work while studying in France?', a: 'Yes. International students can work up to 964 hours per year (approximately 20 hours/week).' },
  { q: 'Is French language mandatory?', a: 'For French-taught programmes, yes. However, many engineering and business schools offer English-taught programmes. Basic French is helpful for daily life.' },
  { q: 'What post-study work rights are available in France?', a: 'After graduation, you can apply for a temporary residence permit (APS) for 1 year to find work in France, with the possibility of extending into a work visa.' },
];

const UNIVERSITIES = [
  { name: 'Sorbonne University', tag: 'Arts & Sciences', desc: 'One of the world\'s oldest and most prestigious universities, renowned for arts, humanities, and sciences.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Sorbonne_University_Logo.svg/250px-Sorbonne_University_Logo.svg.png' },
  { name: 'École Polytechnique', tag: 'Engineering', desc: 'France\'s leading engineering school, known globally for producing top scientists and engineers.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/POLYTECHNIQUE-IP_PARIS.png/250px-POLYTECHNIQUE-IP_PARIS.png' },
  { name: 'HEC Paris', tag: 'Business', desc: 'Europe\'s top-ranked business school, offering world-class MBA and management programmes.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HEC_Paris.svg/250px-HEC_Paris.svg.png' },
  { name: 'Sciences Po Paris', tag: 'Social Sciences', desc: 'Global leader in political science, international relations, and public affairs education.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_Sciences_Po.svg/250px-Logo_Sciences_Po.svg.png' },
  { name: 'PSL Research University', tag: 'Research', desc: 'A world-top research university grouping ENS, MINES, Dauphine, and other elite institutions.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LOGO-PSL-juin-2026.svg/250px-LOGO-PSL-juin-2026.svg.png' },
];

export default function StudyInFrancePage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad — France"
        title="Study In France — Affordable Tuition, Scholarships & European Careers"
        subtitle="World-class education in arts, fashion, engineering, and business — at some of Europe's most affordable tuition fees."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in France' }]}
        bgImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '€170–380/yr', label: 'Public Uni Fees' },
              { val: '1 Year', label: 'Post-Study APS Permit' },
              { val: '~20 hrs/wk', label: 'Part-time Work' },
              { val: 'Eiffel', label: 'Scholarship Available' },
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
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why France?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose France for Higher Education?</h2>
            <div className="space-y-4">
              {[
                { title: 'Very Affordable Tuition', desc: 'State-subsidised public universities charge as little as €170–380/year — among the lowest in the world.' },
                { title: 'World Leader in Fashion & Luxury', desc: 'Unmatched global reputation in fashion, design, arts, hospitality, and culinary arts.' },
                { title: 'Excellent Business Schools', desc: 'HEC Paris, INSEAD, and ESSEC are ranked among the world\'s best business schools.' },
                { title: 'Scholarship Opportunities', desc: 'Eiffel Excellence and Charpak scholarships offer generous funding for Indian students.' },
                { title: 'Central European Location', desc: 'Ideal base for exploring Europe\'s job market and professional networks.' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#ffa800' }}>Top Courses</p>
            <div className="space-y-3 mb-6">
              {['Business & Management (MBA, BBA)', 'Fashion Design & Luxury Management', 'Engineering & Technology', 'Culinary Arts & Hospitality', 'Data Science & Digital Marketing', 'Fine Arts & Architecture'].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#ffa800' }} />
                  <span className="text-sm font-medium" style={{ color: '#003c4c' }}>{c}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9357976b82?auto=format&fit=crop&w=800&q=80"
                alt="Eiffel Tower, Paris"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Top Institutions</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in France</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIVERSITIES.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 mb-3 flex items-center">
                  <img src={u.logo} alt={u.name} className="max-h-8 max-w-[120px] object-contain" />
                </div>
                <div className="mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{u.tag}</span>
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#003c4c' }}>{u.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ title="Study in France — FAQs" faqs={FAQS} />
      <PageCTA heading="Discover France's World-Class Education" sub="Book a free consultation with Eduflair and explore study options in France." />
    </Layout>
  );
}
