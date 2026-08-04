import { useEffect, useState } from 'react';

const keyServices = [
  'Personalized University Selection',
  'Application & Admission Assistance',
  'Student Visa Guidance & Processing',
  'IELTS / PTE Language Training',
  'Scholarship & Financial Aid Support',
  'Pre-Departure & Post-Arrival Support',
];

const VIDEO_IDS = [
  'uq3S4hKHYcA',
  '5xSKeP0APSY',
  '70ZP-DiE8wY',
  'cELke30Rgo4',
  '--gdYYb_nE0',
  'rkMc_J4EJl0',
  'Ohlred9s9jw',
];

function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || playingId) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % VIDEO_IDS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, playingId]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {VIDEO_IDS.map((id) => (
            <button
              key={id}
              onClick={() => setPlayingId(id)}
              className="relative w-full flex-shrink-0 h-96 group"
              aria-label="Play video"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt="Eduflair video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 ml-1" fill="#003c4c" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => setIndex((i) => (i - 1 + VIDEO_IDS.length) % VIDEO_IDS.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-lg font-bold hover:bg-white transition-colors"
        style={{ color: '#003c4c' }}
        aria-label="Previous video"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % VIDEO_IDS.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-lg font-bold hover:bg-white transition-colors"
        style={{ color: '#003c4c' }}
        aria-label="Next video"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {VIDEO_IDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === index ? '20px' : '8px',
              backgroundColor: i === index ? '#ffa800' : '#d0e8ef',
            }}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>

      {playingId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setPlayingId(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl leading-none hover:opacity-70"
            onClick={() => setPlayingId(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${playingId}?autoplay=1`}
              title="Eduflair video"
              allow="accelerate; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function KeyServices() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fffaf0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left */}
          <div className="mb-12 lg:mb-0">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
              Core Offerings
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#003c4c' }}>
              Everything You Need for Global Education &amp; Career Success
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              At Eduflair, we provide end-to-end support for students and professionals pursuing opportunities abroad. Our comprehensive services cover every step of your journey.
            </p>
            <h3 className="font-bold text-lg mb-5" style={{ color: '#003c4c' }}>Our Key Services:</h3>
            <ul className="space-y-3">
              {keyServices.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffa800' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#003c4c" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — video carousel */}
          <VideoCarousel />
        </div>
      </div>
    </section>
  );
}
