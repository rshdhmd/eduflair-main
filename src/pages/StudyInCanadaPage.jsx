import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const UNIVERSITIES = [
  { name: 'University of Toronto', desc: 'Canada\'s top-ranked university, known for cutting-edge research and innovation.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/UofT_logo.svg/250px-UofT_logo.svg.png' },
  { name: 'University of British Columbia (UBC)', desc: 'Leading institution for engineering, business, and sustainability studies in Vancouver.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/British_columbia_ca_univ_logo.svg/250px-British_columbia_ca_univ_logo.svg.png' },
  { name: 'McGill University', desc: 'Globally renowned for strong programmes in medicine, law, and science in Montreal.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mcgill_univ_ca_logo.png/250px-Mcgill_univ_ca_logo.png' },
  { name: 'University of Alberta', desc: 'Recognised for excellence in engineering, energy research, and artificial intelligence.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/University_of_Alberta_Logo_%282021%29.svg/250px-University_of_Alberta_Logo_%282021%29.svg.png' },
  { name: 'University of Waterloo', desc: 'Famous for co-op programmes and tech-focused courses with direct industry exposure.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/University_of_Waterloo_logo.svg/250px-University_of_Waterloo_logo.svg.png' },
];

const FAQS = [
  { q: 'What is the Post-Graduation Work Permit (PGWP)?', a: 'The PGWP allows international graduates to work in Canada for up to 3 years after completing their studies — a major step toward PR.' },
  { q: 'How can I get PR in Canada after studying?', a: 'You can apply through Express Entry (Federal Skilled Worker or Canadian Experience Class) or Provincial Nominee Programs (PNPs) after gaining Canadian work experience.' },
  { q: 'What are the tuition fees in Canada?', a: 'Undergraduate tuition ranges from CAD 20,000–36,100/year. Graduate programmes average CAD 21,100/year for international students.' },
  { q: 'Can I work while studying in Canada?', a: 'Yes, international students can work up to 24 hours per week off-campus during academic sessions and full-time during scheduled breaks.' },
  { q: 'Is IELTS required for Canadian universities?', a: 'Yes. Most universities require IELTS Academic with a minimum overall band of 6.5, with no component below 6.0.' },
];

export default function StudyInCanadaPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad — Canada"
        title="Study In Canada — Top Universities, Courses & PR Opportunities"
        subtitle="High-quality education, a 3-year post-graduation work permit, and one of the world's most accessible PR pathways."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Canada' }]}
        bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: 'CAD 20k–36k', label: 'Annual Tuition' },
              { val: 'Up to 3 Yrs', label: 'Post-Study Work Permit' },
              { val: '24 hrs/wk', label: 'Part-time Work' },
              { val: 'Express Entry', label: 'PR Pathway' },
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
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Canada?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Canada for Higher Education?</h2>
            <div className="space-y-4">
              {[
                { title: 'World-Class Universities', desc: 'Canada\'s universities rank consistently among the top 200 globally, offering research-intensive programmes.' },
                { title: 'Up to 3-Year Post-Study Work Permit', desc: 'The PGWP lets you work in Canada for up to 3 years after graduation — a major advantage for PR applications.' },
                { title: 'Excellent PR Opportunities', desc: 'Express Entry and Provincial Nominee Programs make Canada one of the easiest countries to get permanent residency.' },
                { title: 'Multicultural & Welcoming', desc: 'Canada is consistently rated one of the world\'s most welcoming countries for immigrants and students.' },
                { title: 'Work While You Study', desc: 'Part-time work rights of 24 hours/week help you manage living costs independently.' },
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
              src="https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80"
              alt="Toronto skyline, Canada"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Top Institutions</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in Canada</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIVERSITIES.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 mb-3 flex items-center">
                  <img src={u.logo} alt={u.name} className="max-h-8 max-w-[120px] object-contain" />
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#003c4c' }}>{u.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>In-Demand Programmes</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Popular Courses in Canada</h2>
            <div className="space-y-3">
              {[
                { field: 'Computer Science & IT', note: 'Co-op programmes available at Waterloo & UBC' },
                { field: 'Business & Management', note: 'MBA & BCom programmes with PGWP benefits' },
                { field: 'Engineering & Technology', note: 'Civil, Mechanical, Electrical, Software' },
                { field: 'Healthcare & Medicine', note: 'Nursing, Pharmacy, Public Health' },
                { field: 'Hospitality & Tourism', note: 'Growing sector with strong job market' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#003c4c' }}>{c.field}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.note}</p>
                  </div>
                  <svg className="w-4 h-4" style={{ color: '#ffa800' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Costs & Immigration</p>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#003c4c' }}>Study & Immigration Overview</h2>
            <div className="space-y-4">
              {[
                { label: 'Undergraduate Tuition', val: '~CAD 36,100/yr' },
                { label: 'Graduate Tuition', val: '~CAD 21,100/yr' },
                { label: 'Living Expenses', val: 'CAD 1,000–2,000/month' },
                { label: 'PGWP Duration', val: 'Up to 3 Years' },
                { label: 'PR Pathway', val: 'Express Entry + PNP' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: '#003c4c' }}>{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ title="Study in Canada — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Start Your Canadian Education Journey"
        sub="Eduflair guides you through every step — from university selection to visa approval and beyond."
      />
    </Layout>
  );
}
