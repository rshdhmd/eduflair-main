import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FAQS = [
  { q: 'Can I stay and work in Ireland after studying?', a: 'Yes. Non-EEA graduates from Level 8 or higher programmes can apply for the Third Level Graduate Scheme, allowing up to 24 months to work in Ireland.' },
  { q: 'Is Ireland English-speaking?', a: 'Yes. Ireland is an English-speaking EU country, making it ideal for Indian students who want European opportunities without a language barrier.' },
  { q: 'What are the tuition fees in Ireland?', a: 'International student tuition typically ranges from €9,850–€25,000 per year depending on the university and programme.' },
  { q: 'Can I work while studying in Ireland?', a: 'Yes, non-EEA students can work up to 20 hours/week during term and 40 hours/week during holidays.' },
  { q: 'Which industries are strong in Ireland?', a: 'Ireland is a European hub for IT, pharmaceuticals, medical devices, and financial services — companies like Google, Facebook, Apple, and Pfizer have European headquarters there.' },
];

const UNIVERSITIES = [
  { name: 'Trinity College Dublin', tag: '#1 Ireland', desc: 'Ireland\'s oldest and most prestigious university, globally ranked and home to the legendary Book of Kells.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Trinity_College_Dublin_logo.svg/250px-Trinity_College_Dublin_logo.svg.png' },
  { name: 'University College Dublin', tag: 'Top Research', desc: 'Ireland\'s largest university, offering an extensive range of programmes with strong industry links.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_College_Dublin_logo.svg/250px-University_College_Dublin_logo.svg.png' },
  { name: 'University of Limerick', tag: 'Co-op Courses', desc: 'Renowned for its cooperative education model, placing students in paid work placements during their degree.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/University_of_Limerick_Logo.svg/250px-University_of_Limerick_Logo.svg.png' },
  { name: 'Dublin City University', tag: 'Industry Focus', desc: 'A leading technology and business university with strong partnerships with multinationals in Dublin.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Dublin_City_University_%28logo%29.png/250px-Dublin_City_University_%28logo%29.png' },
  { name: 'University of Galway', tag: 'Research Led', desc: 'Known for research excellence in engineering, medicine, and humanities on Ireland\'s Atlantic coast.', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Galway_logo_2022.png/250px-University_of_Galway_logo_2022.png' },
];

export default function StudyInIrelandPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad — Ireland"
        title="Study In Ireland — English-Speaking EU with Strong Career Prospects"
        subtitle="English-taught degrees, a 2-year post-study work visa, and access to Ireland's booming tech and pharma industries."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Ireland' }]}
        bgImage="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '€9k–25k', label: 'Annual Tuition' },
              { val: 'Up to 2 Yrs', label: 'Stay-Back Visa' },
              { val: '20 hrs/wk', label: 'Part-time Work' },
              { val: 'English', label: 'Language of Instruction' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Ireland?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Ireland for Higher Education?</h2>
            <div className="space-y-4">
              {[
                { title: 'English-Speaking EU Country', desc: 'Enjoy the benefits of EU education and job market without the language barrier.' },
                { title: 'Strong IT & Tech Industry', desc: 'Home to European headquarters of Google, Apple, Facebook, and hundreds of tech firms.' },
                { title: 'Up to 2-Year Post-Study Work Visa', desc: 'The Third Level Graduate Scheme allows qualified graduates to stay and work in Ireland.' },
                { title: 'Affordable Compared to UK', desc: 'Lower tuition fees than the UK with similar English-language advantages.' },
                { title: 'Top Universities', desc: 'Trinity College Dublin, UCD, UCC, and DCU are globally recognised institutions.' },
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
            <div className="space-y-3">
              {['Data Science & Analytics', 'Computer Science & IT', 'Business & Management', 'Nursing & Healthcare', 'Engineering', 'Pharmacy & Life Sciences'].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#f8fbfc' }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#ffa800' }} />
                  <span className="text-sm font-medium" style={{ color: '#003c4c' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Top Institutions</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in Ireland</h2>
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

      <PageFAQ title="Study in Ireland — FAQs" faqs={FAQS} />
      <PageCTA
        heading="Explore Education in Ireland"
        sub="Talk to an Eduflair counsellor and find the right Irish university for your goals."
      />
    </Layout>
  );
}
