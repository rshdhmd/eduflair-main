import { Link } from 'react-router-dom';

export default function AboutEduflair() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left — image */}
          <div className="mb-12 lg:mb-0 relative">
            <img
              src="/images/DSC01527-1-924x520.jpg"
              alt="Eduflair office, Calicut"
              className="w-full h-96 rounded-2xl object-cover shadow-xl"
            />

            {/* Floating stat */}
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-4 shadow-lg hidden lg:block"
              style={{ backgroundColor: '#ffa800' }}
            >
              <p className="text-3xl font-extrabold" style={{ color: '#003c4c' }}>500<span>+</span></p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: '#003c4c', opacity: 0.7 }}>Students Placed Abroad</p>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight" style={{ color: '#003c4c' }}>About Eduflair</h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              Leading Study Abroad Consultancy &amp; Career Development Experts in Kerala
            </h3>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              At Eduflair Learning Solutions, we are one of the most reliable overseas education consultants in Kerala, offering comprehensive services in study abroad consultancy, language training, skill development, and placement assistance.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our goal is to help students and professionals access global education opportunities and build successful careers. With an in-house language academy, certified trainers, and a dedicated visa and placement team, we provide truly end-to-end support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/our-story"
                className="text-white font-bold px-7 py-3 rounded-md transition-opacity hover:opacity-90 text-sm"
                style={{ backgroundColor: '#003c4c' }}
              >
                Our Story
              </Link>
              <Link
                to="/meet-the-founders"
                className="font-bold px-7 py-3 rounded-md transition-opacity hover:opacity-90 text-sm border-2"
                style={{ color: '#003c4c', borderColor: '#003c4c' }}
              >
                Meet The Founders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
