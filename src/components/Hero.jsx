import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../constants';

/*
 * Hero collage images — once you have real photos, import them:
 *   import heroMain  from '../assets/images/hero-main.jpg'   // large left (airplane / campus)
 *   import heroTop   from '../assets/images/hero-top.jpg'    // top-right (students studying)
 *   import heroBot   from '../assets/images/hero-bottom.jpg' // bottom-right (student with books)
 * Then replace each <PlaceholderImg> with:
 *   <img src={heroMain} alt="..." className="w-full h-[340px] rounded-2xl object-cover" />
 */

const WAIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function PlaceholderImg({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ backgroundColor: '#c5dce3' }}>
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: '#eef6f9' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text ── */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: '#003c4c' }}>
              Kerala's Study Abroad &amp; German Careers Specialists
            </p>

            <h1 className="text-4xl md:text-[2.75rem] font-extrabold leading-[1.1] mb-6" style={{ color: '#0d2630' }}>
              Study, Work &amp; Settle<br />
              Abroad — From A1 to<br />
              Arrival
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              From German classes and IELTS to university admissions, Ausbildung placements, visas and the day you land — Eduflair guides students from Kerala to Germany, the UK, Canada, Ireland and beyond. One team. Start to boarding pass.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/contact"
                className="text-white text-sm font-bold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#003c4c' }}
              >
                Check My Free Eligibility
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
              >
                <WAIcon />
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>
                  2,000<span style={{ color: '#ffa800' }}>+</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Students sent abroad</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-3xl font-extrabold flex items-center gap-1.5" style={{ color: '#003c4c' }}>
                  4.9<span className="text-xl" style={{ color: '#ffa800' }}>★</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">on Google Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Right: Image collage ── */}
          <div className="relative hidden lg:flex items-center justify-end">

            {/* Decorative blob */}
            <div
              className="absolute w-[440px] h-[440px] rounded-full right-[-80px] top-1/2 -translate-y-1/2"
              style={{ backgroundColor: '#d0e8ef', zIndex: 0 }}
            />

            {/* Collage */}
            <div className="relative z-10 flex gap-3 w-full max-w-[480px]">
              {/* Large left image */}
              <img
                src="/images/DCS03993-1-768x512.jpg"
                alt="Eduflair classroom"
                className="flex-1 h-[360px] rounded-2xl object-cover"
              />

              {/* Two stacked right images */}
              <div className="flex flex-col gap-3" style={{ width: '46%' }}>
                <img
                  src="/images/DSC01527-1-924x520.jpg"
                  alt="Eduflair office"
                  className="w-full h-[170px] rounded-2xl object-cover"
                />
                <img
                  src="/images/C0107430-1-rmixu2pffp49hjn6t76z1ksy1ub8810r55opfztx80.jpg"
                  alt="Eduflair awards"
                  className="w-full h-[173px] rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 left-2 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#e8f4f7' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#003c4c" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold leading-tight" style={{ color: '#003c4c' }}>10+</p>
                <p className="text-xs text-gray-500 leading-snug">Years Guiding Kerala<br />Students</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
