import { Link } from 'react-router-dom';

/*
 * Service card images — import and use in the <PlaceholderImg> slots:
 *   import studyAbroadImg  from '../assets/images/service-study-abroad.jpg'  // university building
 *   import ausbildungImg   from '../assets/images/service-ausbildung.jpg'    // hands-on training
 *   import languageImg     from '../assets/images/service-language.jpg'      // classroom / learning
 *   import placementImg    from '../assets/images/service-placement.jpg'     // healthcare professional
 * Then replace <PlaceholderImg label={s.imgLabel} /> with:
 *   <img src={studyAbroadImg} alt="Study Abroad" className="w-full h-52 object-cover" />
 */

const services = [
  {
    title: 'Study Abroad',
    description: 'Admissions to top universities in the UK, Canada, Ireland, France, Austria and more — course and university selection, applications, scholarships and student-visa support, with IELTS/PTE coaching built in.',
    href: '/study-abroad',
    cta: 'Explore Study Abroad',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    alt: 'University campus building',
  },
  {
    title: 'Ausbildung in Germany',
    description: 'Earn while you train in Germany with zero tuition and a clear route to PR. In-house German training to B2, employer placement, and full visa support.',
    href: '/ausbildung-in-germany',
    cta: 'Explore Ausbildung',
    img: '/images/Germany-best-country-for-masters-article-image.avif',
    alt: 'Technical vocational training',
  },
  {
    title: 'Language & Skill Academy',
    description: 'Certified, in-house coaching for German (A1–B2), IELTS and OET — small batches, weekly assessments and intensive exam prep that gets students through the first time.',
    href: '/language-academy',
    cta: 'Explore the Academy',
    img: '/images/close-up-people-learning-language.webp',
    alt: 'Language learning classroom',
  },
  {
    title: 'Placement Consultancy',
    description: 'International careers for nurses and healthcare professionals in Germany, Canada and Australia — verified employers, work-visa processing and relocation support.',
    href: '/placement',
    cta: 'Explore Placements',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    alt: 'Healthcare professional',
  },
];


export default function Services() {
  return (
    <section className="py-20" style={{ backgroundColor: '#003c4c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={s.img} alt={s.alt} className="w-full h-52 object-cover" />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-extrabold text-base mb-2 leading-snug" style={{ color: '#0d2630' }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>
                <Link
                  to={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: '#003c4c' }}
                >
                  {s.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
