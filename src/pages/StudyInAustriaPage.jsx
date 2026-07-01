import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import PageFAQ from '../components/PageFAQ';

const FAQS = [
  { q: 'Do I need a blocked account for Austria?', a: 'No. Austria does not require a blocked account for a student visa, making it more accessible than Germany for some students.' },
  { q: 'What are the tuition fees in Austria?', a: 'EU/EEA students pay very low fees (~€363/semester). Non-EU students at public universities pay approximately €726–€1,500 per semester depending on the institution.' },
  { q: 'Can I study in English in Austria?', a: 'Yes. Many universities in Vienna, Graz, and Innsbruck offer English-taught programmes, especially at Master\'s level in engineering and business.' },
  { q: 'Is German required for life in Austria?', a: 'German is the primary language of daily life, so basic German is very helpful. However, many international students manage with English, especially in Vienna.' },
  { q: 'What are the job opportunities in Austria?', a: 'Austria has a strong economy with opportunities in engineering, IT, tourism, healthcare, and finance. Its central location in Europe also opens doors across the EU.' },
];

const UNIVERSITIES = [
  { name: 'University of Vienna', tag: 'Oldest & Largest', desc: 'Founded in 1365, Austria\'s largest university and one of Central Europe\'s most esteemed institutions.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Seal_of_the_University_of_Vienna.svg/250px-Seal_of_the_University_of_Vienna.svg.png' },
  { name: 'TU Wien', tag: 'Engineering', desc: 'Vienna\'s leading technical university, consistently ranked among Europe\'s top engineering schools.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/TU_Signet_CMYK.svg/250px-TU_Signet_CMYK.svg.png' },
  { name: 'Graz University of Technology', tag: 'Tech & Sciences', desc: 'A top Austrian technical university with a strong focus on engineering, IT, and natural sciences.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/TU_Graz.svg/250px-TU_Graz.svg.png' },
  { name: 'University of Innsbruck', tag: 'Alpine Campus', desc: 'A comprehensive university renowned for science, medicine, and business with a stunning alpine setting.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Universitaet-innsbruck-logo-rgb-farbe.svg/250px-Universitaet-innsbruck-logo-rgb-farbe.svg.png' },
  { name: 'Vienna University of Economics (WU)', tag: 'Business', desc: 'The largest business and economics university in the EU, with world-class MBA and management programmes.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Wirtschaftsuniversit%C3%A4t_Wien.svg/250px-Logo_Wirtschaftsuniversit%C3%A4t_Wien.svg.png' },
];

export default function StudyInAustriaPage() {
  return (
    <Layout>
      <PageHero
        badge="Study Abroad — Austria"
        title="Study In Austria — Low Fees, No Blocked Account Required"
        subtitle="Quality European education in the heart of Central Europe — affordable fees, no blocked account requirement, and strong career exposure."
        breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Austria' }]}
        bgImage="https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { val: '€726–1,500', label: 'Fees/Semester (Non-EU)' },
              { val: 'Not Required', label: 'Blocked Account' },
              { val: '20 hrs/wk', label: 'Part-time Work' },
              { val: 'Central EU', label: 'Location Advantage' },
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
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Why Austria?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>Why Choose Austria for Higher Education?</h2>
            <div className="space-y-4">
              {[
                { title: 'Low Tuition Fees', desc: 'Significantly lower fees compared to UK, Australia, or Canada — great value for an EU education.' },
                { title: 'No Blocked Account Required', desc: 'Unlike Germany, Austria does not mandate a blocked account for student visa applications.' },
                { title: 'Central European Location', desc: 'Vienna is at the heart of Europe — access to careers and travel across the EU.' },
                { title: 'Quality University Education', desc: 'University of Vienna, TU Wien, and Graz University of Technology are internationally recognised.' },
                { title: 'Excellent Quality of Life', desc: 'Vienna is consistently ranked the world\'s most liveable city by multiple global surveys.' },
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
              {['Engineering & Technology', 'Business & Management', 'Computer Science & IT', 'Music & Arts', 'Natural & Life Sciences', 'Architecture & Design'].map((c, i) => (
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Top Universities in Austria</h2>
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

      <PageFAQ title="Study in Austria — FAQs" faqs={FAQS} />
      <PageCTA heading="Explore Study Options in Austria" sub="Contact Eduflair for free guidance on Austrian universities, visa, and applications." />
    </Layout>
  );
}
