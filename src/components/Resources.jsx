/*
 * Blog article images:
 *   import blog1 from '../assets/blog/visa-documents.jpg'
 *   import blog2 from '../assets/blog/german-learning.jpg'
 *   import blog3 from '../assets/blog/germany-packing.jpg'
 *
 *   Replace each <PlaceholderImg> with <img src={...} alt={...} className="w-full h-full object-cover" />
 */

const articles = [
  {
    category: 'Visa Tips',
    title: 'How to Get Your Visa Documents Right the First Time',
    excerpt: 'Missing a single document can delay your visa by months. Here\'s the definitive checklist our visa officers use for Germany, UK, and Canada applications.',
    readTime: '5 min read',
    href: '/blog/visa-documents',
    categoryColor: 'bg-blue-50 text-blue-600',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Passport and travel documents',
  },
  {
    category: 'Language Learning',
    title: 'How Long Does It Really Take to Learn German?',
    excerpt: 'From A1 to B1 — the honest timeline, common myths busted, and why the quality of your coaching matters more than the hours you put in.',
    readTime: '4 min read',
    href: '/blog/german-learning-timeline',
    categoryColor: 'bg-indigo-50 text-indigo-600',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'German language books and learning',
  },
  {
    category: 'Travel Guide',
    title: 'Your Complete Germany Pre-Departure Packing Guide',
    excerpt: 'What to carry, what to leave behind, and the documents you absolutely must have in your hand luggage before boarding your flight to Germany.',
    readTime: '6 min read',
    href: '/blog/germany-packing-guide',
    categoryColor: 'bg-green-50 text-green-600',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Airport terminal at night',
  },
];


export default function Resources() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">Resources</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">From the Eduflair Blog</h2>
          </div>
          <a href="/blog" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center gap-1 flex-shrink-0">
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <a key={i} href={a.href} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">

              <img src={a.img} alt={a.imgAlt} className="w-full h-48 object-cover" />

              <div className="p-6 flex flex-col flex-1">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${a.categoryColor}`}>
                  {a.category}
                </span>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-indigo-700 transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-xs">{a.readTime}</span>
                  <span className="text-indigo-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
