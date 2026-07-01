import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';

const FOUNDERS = [
  {
    name: 'Adv. K M Roy',
    title: 'Chairman & Founder',
    location: 'Malappuram, Kerala',
    photo: '/images/Roy-1.jpg',
    bio: [
      'Adv. K M Roy is a distinguished lawyer, educational consultant, and the founder of Eduflair Learning Solutions Pvt. Ltd. A rank holder in both LLM and LLB from Government Law College Kozhikode with a degree in Economics, he combines legal expertise with a deep passion for education and social impact.',
      'From Malappuram, Kerala, he founded Eduflair to create a platform that guides students and professionals toward global education and career success. Under his visionary leadership, Eduflair has grown into one of Kerala\'s most trusted overseas education consultancies — helping hundreds of students secure Ausbildung placements, study abroad opportunities, and nursing careers in Germany, Canada, UK, and beyond.',
    ],
    quote: '"Education is the most powerful weapon which you can use to transform the world."',
    quoteBy: '— Nelson Mandela (Adv. Roy\'s guiding principle)',
    message: 'He believes transformation begins with asking the right questions and making informed decisions. Every student\'s journey is unique — and with the right guidance, every goal is achievable.',
  },
  {
    name: 'Sithara Roy',
    title: 'Executive Director',
    location: 'Kerala',
    photo: '/images/Sithara-2.jpg',
    bio: [
      'Sithara Roy is a dedicated career mentor, educational advisor, and the Executive Director of Eduflair Learning Solutions. With a strong academic background in language and communication, she brings a unique blend of pedagogical insight and student empowerment to everything Eduflair does.',
      'Specialising in study abroad consulting, language training (German and IELTS), and personalised mentorship, Sithara has directly guided hundreds of students in navigating competitive global education landscapes. Her approach is holistic — she doesn\'t just guide students toward universities; she helps them discover their purpose.',
    ],
    quote: '"Even if we don\'t have the power to choose where we come from, we can still choose where we go from there."',
    quoteBy: '— Stephen Chbosky (Sithara Roy\'s guiding principle)',
    message: 'She believes education\'s true power is transformation — that proper guidance converts passion into purpose, and every student deserves that chance.',
  },
];

export default function MeetFoundersPage() {
  return (
    <Layout>
      <PageHero
        badge="About Eduflair"
        title="Meet The Founders"
        subtitle="The people behind Eduflair's mission to transform education and careers across Kerala."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Meet The Founders' }]}
        bgImage="/images/DSC01527-1-924x520.jpg"
      />

      {/* Founders */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {FOUNDERS.map((f, i) => (
            <div key={i} className={`lg:grid lg:grid-cols-5 lg:gap-14 items-start`}>
              {/* Photo */}
              <div className={`lg:col-span-2 mb-8 lg:mb-0 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] max-w-xs mx-auto shadow-xl">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#ffa800' }}>{f.title}</p>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: '#003c4c' }}>{f.name}</h2>
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#ffa800" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-400">{f.location}</p>
                </div>
                {f.bio.map((para, j) => (
                  <p key={j} className="text-sm text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}
                <blockquote className="my-6 pl-5 border-l-4 py-2" style={{ borderColor: '#ffa800' }}>
                  <p className="text-sm font-semibold italic text-gray-700 leading-relaxed">{f.quote}</p>
                  <footer className="mt-2 text-xs text-gray-400">{f.quoteBy}</footer>
                </blockquote>
                <div className="rounded-2xl p-5" style={{ backgroundColor: '#e8f4f7' }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#003c4c' }}>Message from {f.title.split(' ')[0]}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COO + Awards */}
      <section className="py-16" style={{ backgroundColor: '#e8f4f7' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-8 text-center" style={{ color: '#ffa800' }}>Leadership Team</p>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* COO card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex gap-6 items-center">
              <div className="rounded-2xl overflow-hidden w-28 h-28 flex-shrink-0 shadow">
                <img
                  src="/images/Ajith-1-768x957.jpg"
                  alt="COO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg" style={{ color: '#003c4c' }}>Ajith Jose</h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#ffa800' }}>Chief Operating Officer</p>
                <p className="text-sm text-gray-500 leading-relaxed">Overseeing day-to-day operations, Ajith ensures that every student receives the highest quality of service throughout their Eduflair journey.</p>
              </div>
            </div>

            {/* Awards photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-52">
              <img
                src="/images/C0107430-1-rmixu2pffp49hjn6t76z1ksy1ub8810r55opfztx80.jpg"
                alt="Eduflair awards and recognition"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        heading="Ready to Start Your Journey?"
        sub="Meet our team in person — visit our Calicut office or book a free online consultation."
      />
    </Layout>
  );
}
