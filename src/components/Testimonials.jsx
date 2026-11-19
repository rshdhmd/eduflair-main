import { useEffect, useRef, useState } from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_TESTIMONIALS = [
  {
    name: 'Nandana Sivadasan',
    badge: 'B2 Certified',
    quote:
      "Hade a nice experience with Eduflair team. I have completed my A1 to B2 studies in Eduflair. Soon after my B2 completion I started my processing. Jumana ma'am was our processing consultant and she was very helpful and guided me through all the process. Highly recommended!",
    rating: 5,
    initials: 'NS',
    color: '#003c4c',
  },
  {
    name: 'Ziyad',
    badge: 'B2 Certified',
    quote:
      'I just wanted to say a big thanks for all the help you gave me in learning German. I went from knowing nothing to being able to speak it fluently. The teachers and classes are wonderful. Really happy with Eduflair and the entire team.',
    rating: 5,
    initials: 'Z',
    color: '#005566',
  },
  {
    name: 'Fiyona Sara Binu',
    badge: 'B2 Certified',
    quote:
      'Eduflair is a good consultancy. I did my A1–B2 in Eduflair. The classes, teachers and atmosphere are all very good. My processing time was very fast (6 months). I am very happy and thankful for the entire Eduflair team.',
    rating: 5,
    initials: 'FS',
    color: '#003c4c',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < count ? '#ffa800' : '#e5e7eb'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow flex-shrink-0"
      style={{ color: '#003c4c' }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {direction === 'prev' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const viewportRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const { content } = usePageContent('home', {
    testimonials_badge: 'Student Stories',
    testimonials_title: 'What Our Students Say',
    testimonials: DEFAULT_TESTIMONIALS,
  });
  const testimonials = asList(content.testimonials, DEFAULT_TESTIMONIALS);
  const colors = ['#003c4c', '#005566'];

  const step = (direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const track = viewport.firstElementChild;
    const card = track.querySelector('[data-card]');
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : viewport.clientWidth;
    const maxOffset = track.scrollWidth - viewport.clientWidth;

    setOffset((current) => {
      if (direction > 0 && current >= maxOffset - 4) return 0;
      if (direction < 0 && current <= 4) return maxOffset;
      return Math.min(Math.max(current + amount * direction, 0), maxOffset);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => step(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: '#e8f4f7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 gap-6">
          <div className="text-center flex-1">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
              {content.testimonials_badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003c4c' }}>
              {content.testimonials_title}
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#ffa800' }} />
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          <ArrowButton direction="prev" onClick={() => step(-1)} />

          <div ref={viewportRef} className="overflow-hidden flex-1">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  data-card
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{ borderBottom: '3px solid #ffa800' }}
                >
                  <svg className="w-8 h-8 mb-4 flex-shrink-0" fill="#ffa800" viewBox="0 0 32 32" style={{ opacity: 0.3 }}>
                    <path d="M10 8C5.582 8 2 11.582 2 16v8h8v-8H6c0-2.206 1.794-4 4-4V8zm14 0c-4.418 0-8 3.582-8 8v8h8v-8h-4c0-2.206 1.794-4 4-4V8z" />
                  </svg>

                  <Stars count={t.rating || 5} />
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                    {t.photo ? (
                      <img src={t.photo} alt="" className="w-11 h-11 rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: t.color || colors[i % 2] }}
                      >
                        {t.initials || (t.name || '?').slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#003c4c' }}>
                        {t.name}
                      </p>
                      {t.badge && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#ffa800', color: '#003c4c' }}
                        >
                          {t.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ArrowButton direction="next" onClick={() => step(1)} />
        </div>
      </div>
    </section>
  );
}
