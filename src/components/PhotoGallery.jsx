import { useState } from 'react';

const PHOTOS = [
  { src: '/images/eduflair-life-1.jpeg', alt: 'Eduflair office' },
  { src: '/images/eduflair-life-2.jpeg', alt: 'Eduflair team' },
  { src: '/images/eduflair-life-3.jpeg', alt: 'Eduflair reception' },
  { src: '/images/eduflair-life-4.jpeg', alt: 'Eduflair session' },
  { src: '/images/eduflair-life-5.jpeg', alt: 'Eduflair classroom' },
  { src: '/images/eduflair-life-6.jpeg', alt: 'Eduflair counselling' },
  { src: '/images/eduflair-life-7.jpeg', alt: 'Eduflair students' },
  { src: '/images/eduflair-life-8.jpeg', alt: 'Eduflair team group photo' },
];

export default function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
            Our Campus & Classrooms
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: '#003c4c' }}>
            Life at Eduflair
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#ffa800' }} />
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(i)}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl leading-none hover:opacity-70"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={PHOTOS[openIndex].src}
            alt={PHOTOS[openIndex].alt}
            className="max-w-full max-h-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
