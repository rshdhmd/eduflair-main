import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const TIMELINE = [
  { year: 'Chapter 1', title: 'Founding Vision', desc: 'Established to empower Kerala\'s youth with the skills, knowledge, and guidance needed for international employment and educational growth.' },
  { year: 'Chapter 2', title: 'Growth and Expansion', desc: 'Expanded from a small Kerala initiative to a recognised education and placement provider with students across multiple countries.' },
  { year: 'Chapter 3', title: 'Commitment to Excellence', desc: 'Built industry-leading success rates through quality education, expert counselling, and a results-driven approach.' },
  { year: 'Chapter 4', title: 'German Language Training', desc: 'Established our Language Academy — achieving outstanding results helping students reach B2 German and secure Ausbildung placements.' },
  { year: 'Chapter 5', title: 'Ausbildung Program', desc: 'Set new benchmarks in Kerala for international student placement in Germany\'s vocational training system.' },
  { year: 'Chapter 6', title: 'Expert Team & Facilities', desc: 'Built a dedicated team of professionals and modern training facilities with a structured, student-first approach.' },
];

const VALUES = [
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in every service we deliver.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
  },
  {
    title: 'Growth Mindset',
    desc: 'We embrace learning, adaptation, and continuous improvement in everything we do.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
  },
  {
    title: 'Collaboration',
    desc: 'We work as a team — with colleagues, students, and global partners.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  },
  {
    title: 'Integrity & Empathy',
    desc: 'We operate with honesty, responsibility, and deep respect for every student\'s journey.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  },
  {
    title: 'Transformation',
    desc: 'We believe in fostering personal and professional growth that changes lives permanently.',
    svg: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
];

export default function OurStoryPage() {
  return (
    <Layout>
      <PageHero
        badge="About Eduflair"
        title="Our Story"
        subtitle="From a vision to transform education in Kerala, to becoming one of India's most trusted study abroad consultancies and language institutes."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Our Story' }]}
        bgImage="/images/C0107430-1-rmixu2pffp49hjn6t76z1ksy1ub8810r55opfztx80.jpg"
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Who We Are</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#003c4c' }}>About Eduflair Learning Solutions</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Eduflair Learning Solutions Pvt. Ltd. is Kerala's leading overseas education consultancy and language training institute, headquartered in Calicut. We provide comprehensive services across study abroad, Ausbildung in Germany, language certifications, and overseas job placements.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Founded by Adv. K M Roy and led by Sithara Roy, Eduflair was built on a single belief: that every student in Kerala deserves the guidance to access world-class education and career opportunities — regardless of background.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Today, we have successfully placed students in top universities and workplaces across Europe, UK, Canada, and more — transforming lives one counselling session at a time.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '1000+', label: 'Students Guided' },
                { val: '90%+', label: 'Visa Success Rate' },
                { val: '10+', label: 'Countries Covered' },
                { val: 'Calicut', label: 'Headquarters' },
              ].map((s, i) => (
                <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#e8f4f7' }}>
                  <p className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>{s.val}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>Our Journey</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12" style={{ color: '#003c4c' }}>How We Got Here</h2>
          <div className="space-y-6">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs text-white" style={{ backgroundColor: '#003c4c' }}>{i + 1}</div>
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: '#c5dde3' }} />}
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#ffa800' }}>{t.year}</p>
                  <h3 className="font-extrabold mb-2" style={{ color: '#003c4c' }}>{t.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: '#ffa800' }}>What We Stand For</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10" style={{ color: '#003c4c' }}>Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white" style={{ backgroundColor: '#003c4c' }}>
                  {v.svg}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#003c4c' }}>{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Be Part of the Eduflair Story"
        sub="Join thousands of students who have transformed their lives with Eduflair's guidance."
      />
    </Layout>
  );
}
