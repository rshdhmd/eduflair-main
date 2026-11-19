import { Link } from 'react-router-dom';
import { usePageContent } from '../hooks/usePageContent';

const DEFAULTS = {
  about_badge: 'Who We Are',
  about_title: 'About Eduflair',
  about_subtitle: 'Leading Study Abroad Consultancy & Career Development Experts in Kerala',
  about_html:
    '<p>At Eduflair Learning Solutions, we are one of the most reliable overseas education consultants in Kerala, offering comprehensive services in study abroad consultancy, language training, skill development, and placement assistance.</p><p>Our goal is to help students and professionals access global education opportunities and build successful careers. With an in-house language academy, certified trainers, and a dedicated visa and placement team, we provide truly end-to-end support.</p>',
  about_image: '/images/DSC01527-1-924x520.jpg',
  about_stat_value: '500+',
  about_stat_label: 'Students Placed Abroad',
  about_btn1_text: 'Our Story',
  about_btn1_href: '/our-story',
  about_btn2_text: 'Meet The Founders',
  about_btn2_href: '/meet-the-founders',
};

export default function AboutEduflair() {
  const { content } = usePageContent('home', DEFAULTS);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0 relative">
            <img
              src={content.about_image}
              alt="Eduflair office, Calicut"
              className="w-full h-96 rounded-2xl object-cover shadow-xl"
            />
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-4 shadow-lg hidden lg:block"
              style={{ backgroundColor: '#ffa800' }}
            >
              <p className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>{content.about_stat_value}</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: '#003c4c', opacity: 0.7 }}>
                {content.about_stat_label}
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
              {content.about_badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight" style={{ color: '#003c4c' }}>
              {content.about_title}
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">{content.about_subtitle}</h3>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />
            <div
              className="text-gray-600 text-base leading-relaxed mb-8 space-y-4 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: content.about_html }}
            />
            <div className="flex flex-wrap gap-4">
              <Link
                to={content.about_btn1_href || '/our-story'}
                className="text-white font-bold px-7 py-3 rounded-md transition-opacity hover:opacity-90 text-sm"
                style={{ backgroundColor: '#003c4c' }}
              >
                {content.about_btn1_text}
              </Link>
              <Link
                to={content.about_btn2_href || '/meet-the-founders'}
                className="font-bold px-7 py-3 rounded-md transition-opacity hover:opacity-90 text-sm border-2"
                style={{ color: '#003c4c', borderColor: '#003c4c' }}
              >
                {content.about_btn2_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
