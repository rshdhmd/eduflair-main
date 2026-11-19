import { useEffect, useState } from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_ITEMS = [
  { text: 'Personalized University Selection' },
  { text: 'Application & Admission Assistance' },
  { text: 'Student Visa Guidance & Processing' },
  { text: 'IELTS / PTE Language Training' },
  { text: 'Scholarship & Financial Aid Support' },
  { text: 'Pre-Departure & Post-Arrival Support' },
];

const DEFAULT_VIDEOS = [
  { id: 'uq3S4hKHYcA' },
  { id: '5xSKeP0APSY' },
  { id: '70ZP-DiE8wY' },
  { id: 'cELke30Rgo4' },
  { id: '--gdYYb_nE0' },
  { id: 'rkMc_J4EJl0' },
  { id: 'Ohlred9s9jw' },
];

function VideoCarousel({ videoIds }) {
  const ids = videoIds.length ? videoIds : DEFAULT_VIDEOS.map((v) => v.id);
  const [index, setIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || playingId || ids.length === 0) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ids.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, playingId, ids.length]);

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
          {ids.map((id) => (
            <button
              key={id}
              type="button"
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

      <div className="flex justify-center gap-2 mt-5">
        {ids.map((_, i) => (
          <button
            key={i}
            type="button"
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
            type="button"
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
  const { content } = usePageContent('home', {
    services_title: 'Everything You Need for Global Education & Career Success',
    services_subtitle:
      'At Eduflair, we provide end-to-end support for students and professionals pursuing opportunities abroad. Our comprehensive services cover every step of your journey.',
    key_service_items: DEFAULT_ITEMS,
    video_ids: DEFAULT_VIDEOS,
  });

  const items = asList(content.key_service_items, DEFAULT_ITEMS);
  const videoIds = asList(content.video_ids, DEFAULT_VIDEOS)
    .map((v) => (typeof v === 'string' ? v : v.id))
    .filter(Boolean);

  return (
    <section className="py-20" style={{ backgroundColor: '#fffaf0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
              Core Offerings
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#003c4c' }}>
              {content.services_title}
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#ffa800' }} />
            <p className="text-gray-500 text-base leading-relaxed mb-8">{content.services_subtitle}</p>
            <h3 className="font-bold text-lg mb-5" style={{ color: '#003c4c' }}>Our Key Services:</h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#ffa800' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#003c4c" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item.text || item}</span>
                </li>
              ))}
            </ul>
          </div>

          <VideoCarousel videoIds={videoIds} />
        </div>
      </div>
    </section>
  );
}
