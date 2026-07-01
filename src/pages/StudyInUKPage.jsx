import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const UNIVERSITIES = [
  { name: 'University of Oxford', rank: '#1 UK', desc: 'World-class education and research excellence across all disciplines.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Arms_of_University_of_Oxford.svg/250px-Arms_of_University_of_Oxford.svg.png' },
  { name: 'University of Cambridge', rank: '#2 UK', desc: 'Excellence in science, engineering, humanities, and social sciences.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/University_of_Cambridge_logo.svg/250px-University_of_Cambridge_logo.svg.png' },
  { name: 'Imperial College London', rank: '#3 UK', desc: 'STEM-focused, specialising in engineering, technology, and medicine.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Imperial_College_London_new_logo.png/250px-Imperial_College_London_new_logo.png' },
  { name: 'University College London (UCL)', rank: '#4 UK', desc: 'Research-intensive with strengths in medicine, law, and architecture.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/UCL_Logo%2C_plain_background.svg/250px-UCL_Logo%2C_plain_background.svg.png' },
  { name: 'University of Edinburgh', rank: 'Top 20 World', desc: 'Innovation, research, and strong industry connections in Scotland.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/University_of_Edinburgh_Corporate_Logo_Colour.svg/330px-University_of_Edinburgh_Corporate_Logo_Colour.svg.png' },
];

const COURSES = [
  { field: 'Business & Management', demand: 'Very High', careers: 'Finance, Consulting, Marketing' },
  { field: 'Engineering & Technology', demand: 'Very High', careers: 'Civil, Mechanical, Software' },
  { field: 'Healthcare & Medicine', demand: 'High', careers: 'NHS, Private Sector, Research' },
  { field: 'Data Science & AI', demand: 'Very High', careers: 'Tech Companies, Analytics, Finance' },
  { field: 'Law & Social Sciences', demand: 'High', careers: 'Legal Firms, Government, NGOs' },
];

const FAQS = [
  { q: 'What is the Graduate Route (post-study work visa) in the UK?', a: 'The Graduate Route allows international students to stay in the UK for 2 years (3 for PhD) after graduation to work or look for work.' },
  { q: 'How much does it cost to study in the UK?', a: 'Tuition fees for international students range from £11,000–£38,000 per year. Living costs are approximately £1,100/month.' },
  { q: 'Do I need IELTS to study in the UK?', a: 'Yes, most UK universities require IELTS Academic with an overall band of 6.5–7.0, with no component below 6.0.' },
  { q: 'Can I work while studying in the UK?', a: 'Yes, international students can work up to 20 hours per week during term time and full-time during vacations.' },
  { q: 'How long are degrees in the UK?', a: 'Bachelor\'s degrees are typically 3 years, Master\'s programmes are 1 year — making UK education faster and more cost-effective than many other destinations.' },
];

export default function StudyInUKPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad — UK"
        title="Study In UK — World-Class Education & Global Career Opportunities"
        subtitle="Top-ranked universities, a 2-year post-study work visa, and access to one of the world's strongest job markets."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in UK' }]}
        bgImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Quick Facts */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '£11k–38k', label: 'Annual Tuition' },
              { val: '2 Years', label: 'Post-Study Work Visa' },
              { val: '3 Years', label: 'Bachelor\'s Duration' },
              { val: 'Top 10', label: 'World Ranked Universities' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p className="text-2xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Study in UK?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose the UK for Higher Education?</h2>
            <div className="space-y-4">
              {[
                { title: 'Top-Ranked Universities', desc: 'Study at institutions like Oxford, Cambridge, and Imperial College London — consistently ranked among the world\'s best.' },
                { title: '2-Year Post-Study Work Visa', desc: 'The Graduate Route lets you stay and work in the UK for 2 years after graduation — 3 years for PhD graduates.' },
                { title: 'Short Duration Degrees', desc: '3-year bachelors and 1-year masters programmes save you time and money compared to other countries.' },
                { title: 'Strong Job Market', desc: 'The UK is a global hub for finance, technology, healthcare, and research — offering diverse career opportunities.' },
                { title: 'Diverse International Community', desc: 'One of the most welcoming multicultural environments for international students in the world.' },
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
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
              alt="Tower Bridge, London"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Top Institutions</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in the UK</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIVERSITIES.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 mb-3 flex items-center">
                  <img src={u.logo} alt={u.name} className="max-h-8 max-w-[120px] object-contain" />
                </div>
                <div className="mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{u.rank}</span>
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#003c4c' }}>{u.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses + Costs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Popular Courses</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Top Courses & Career Prospects</h2>
            <div className="space-y-3">
              {COURSES.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#003c4c' }}>{c.field}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.careers}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#e8f4f7', color: '#003c4c' }}>{c.demand}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Cost of Studying</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Cost of Studying in the UK</h2>
            <div className="space-y-4">
              {[
                { label: 'Annual Tuition Fees', val: '£11,000 – £38,000', note: 'Varies by university and programme' },
                { label: 'Monthly Living Costs', val: '~£1,100/month', note: 'London is higher; regional cities are cheaper' },
                { label: 'Part-time Work', val: 'Up to 20 hrs/week', note: 'Allowed during term time' },
                { label: 'Post-Study Work Visa', val: '2 Years (Graduate Route)', note: '3 years for PhD graduates' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="font-extrabold text-lg" style={{ color: '#003c4c' }}>{item.val}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ title="Study in UK — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Your UK Journey Today!"
        sub="Get expert guidance on UK university applications, visa, and scholarships from Eduflair's counsellors."
      />
    </Layout>
  );
}
