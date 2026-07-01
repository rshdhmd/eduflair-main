const PHOTOS = [
  { src: '/images/DSC01520.JPG',  alt: 'Eduflair office' },
  { src: '/images/DSC01538.JPG',  alt: 'Eduflair team' },
  { src: '/images/DSC01542.JPG',  alt: 'Eduflair reception' },
  { src: '/images/DSC06461.JPG',  alt: 'Eduflair session' },
  { src: '/images/DSC06782.JPG',  alt: 'Eduflair classroom' },
  { src: '/images/DSC06788.JPG',  alt: 'Eduflair training' },
  { src: '/images/DSC06792.JPG',  alt: 'Eduflair counselling' },
  { src: '/images/IMG_4187.jpg',  alt: 'Eduflair campus' },
];

export default function PhotoGallery() {
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

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {/* Tall span item — row 1 col 1 */}
          <div className="row-span-2 rounded-2xl overflow-hidden">
            <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Normal items */}
          <div className="rounded-2xl overflow-hidden">
            <img src={PHOTOS[1].src} alt={PHOTOS[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Wide span item — row 1 cols 3-4 */}
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img src={PHOTOS[2].src} alt={PHOTOS[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Normal */}
          <div className="rounded-2xl overflow-hidden">
            <img src={PHOTOS[3].src} alt={PHOTOS[3].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Normal */}
          <div className="rounded-2xl overflow-hidden">
            <img src={PHOTOS[4].src} alt={PHOTOS[4].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Tall span item — row 3 col 4 */}
          <div className="row-span-2 rounded-2xl overflow-hidden">
            <img src={PHOTOS[5].src} alt={PHOTOS[5].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Normal */}
          <div className="rounded-2xl overflow-hidden">
            <img src={PHOTOS[6].src} alt={PHOTOS[6].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Wide */}
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img src={PHOTOS[7].src} alt={PHOTOS[7].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
