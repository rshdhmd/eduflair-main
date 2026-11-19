/**
 * Page-specific SEO metadata — single source of truth.
 *
 * Used in two places:
 *  1. At runtime by <RouteSeo /> (src/seo/useSeo.js) to update <head> on every
 *     client-side navigation.
 *  2. At build time by the Vite plugin (src/seo/vite-plugin-seo.js), which writes
 *     a static HTML file per route with these tags already in <head>, so crawlers
 *     and link previews (WhatsApp, Facebook, LinkedIn) see them without JS.
 *
 * Keep this file plain JS (no JSX / browser APIs) — Node imports it at build time.
 *
 * Guidelines: title ≤ 60 chars, description 140–160 chars, one entry per route.
 */

export const SITE = {
  url: 'https://eduflair.com',
  name: 'Eduflair Learning Solutions',
  locale: 'en_IN',
  defaultImage: '/images/hero-eduflair.jpg',
};

export const ROUTE_SEO = {
  '/': {
    title: "Eduflair – India's No:1 Language Institute | Study Abroad Consultants in Kerala",
    description:
      'Eduflair Learning Solutions – Leading study abroad consultancy and language training institute in Calicut, Kerala. Expert guidance for Ausbildung, IELTS, German language, and overseas placement.',
    ogTitle: 'Eduflair – Study Abroad & Language Training in Kerala',
    ogDescription:
      'Expert guidance for Ausbildung, IELTS, German language, and overseas placement from Eduflair Learning Solutions.',
  },

  // ── Ausbildung ────────────────────────────────────────────────
  '/ausbildung-in-germany': {
    title: 'Ausbildung in Germany from Kerala | Eduflair',
    description:
      'Ausbildung in Germany with Eduflair: zero tuition, €1,000–€1,400/month stipend and a route to German PR. German A1–B2 training and full placement support.',
  },

  // ── Study Abroad ──────────────────────────────────────────────
  '/study-abroad': {
    title: 'Study Abroad Consultants in Kerala | Eduflair',
    description:
      'Overseas education consultants in Calicut, Kerala. Expert help with universities, scholarships and visas for the UK, Germany, Canada, Ireland, France and Austria.',
  },
  '/application-process': {
    title: 'Study Abroad Application Process, Step by Step | Eduflair',
    description:
      'From free consultation to pre-departure: university selection, SOP & LOR, offer letters, scholarships and visa preparation. Eduflair handles every step.',
  },
  '/study-in-uk': {
    title: 'Study in UK from India – Universities & Visa | Eduflair',
    description:
      'Study in the UK with Eduflair: top-ranked universities, a 2-year post-study work visa and expert help with admissions, scholarships and your UK student visa.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
  },
  '/study-in-germany': {
    title: 'Study in Germany – Tuition-Free Universities | Eduflair',
    description:
      'Study in Germany at tuition-free public universities, with an 18-month post-study work visa and a path to PR. Admission, German and visa support from Eduflair.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
  },
  '/study-in-ireland': {
    title: 'Study in Ireland – Courses, Visa & Careers | Eduflair',
    description:
      "Study in Ireland: English-taught degrees, a 2-year post-study work visa and access to Ireland's tech and pharma industries. Admissions and visa help from Eduflair.",
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
  },
  '/study-in-canada': {
    title: 'Study in Canada – Universities, Courses & PR | Eduflair',
    description:
      'Study in Canada with Eduflair: quality universities and colleges, a 3-year post-graduation work permit and accessible PR pathways. Admission and visa guidance.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  },
  '/study-in-france': {
    title: 'Study in France – Affordable Tuition & Scholarships | Eduflair',
    description:
      'Study in France: world-class programmes in business, engineering, fashion and arts at affordable fees. Eduflair helps with admissions, scholarships and your visa.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
  },
  '/study-in-austria': {
    title: 'Study in Austria – Low Fees, No Blocked Account | Eduflair',
    description:
      'Study in Austria: quality European education at low fees, with no blocked account required. Eduflair guides you through admissions, documents and the student visa.',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80',
  },
  '/other-destinations': {
    title: 'Other Study Abroad Destinations | Eduflair',
    description:
      'Explore more study abroad destinations beyond the UK, Germany, Canada, Ireland, France and Austria, with complete admission and visa support from Eduflair, Kerala.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  },

  // ── Language Academy ──────────────────────────────────────────
  '/language-academy': {
    title: 'Language Academy in Calicut – German, IELTS & OET | Eduflair',
    description:
      'Eduflair Language & Skill Academy, Calicut: certified coaching for German A1–B2, IELTS and OET. Online and offline batches for study, work and migration abroad.',
  },
  '/ielts-coaching': {
    title: 'IELTS Coaching in Calicut – Band 7+ Training | Eduflair',
    description:
      'Expert IELTS coaching in Calicut, Kerala. Training in all four modules, full-length mock tests and personal feedback. Fast-track, regular and online batches.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
  },
  '/german-language': {
    title: 'German Language Classes in Calicut – A1 to B2 | Eduflair',
    description:
      'Learn German from A1 to B2 at Eduflair, Calicut. Exam-focused training with Goethe/TELC-certified trainers, small batches, and online and offline classes.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
  },
  '/oet': {
    title: 'OET Coaching for Nurses & Doctors in Kerala | Eduflair',
    description:
      'Specialised OET coaching for nurses, doctors and allied health professionals. Grade B-focused training with clinical materials and 4–8 week programmes.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },

  // ── Placement ─────────────────────────────────────────────────
  '/placement': {
    title: 'Overseas Job Consultancy in Kerala | Eduflair Placement',
    description:
      'Trusted overseas placement and immigration consultancy in Kerala for nurses, healthcare professionals and skilled workers in Canada, Australia, Germany and more.',
    image: '/images/DSC06788.JPG',
  },
  '/nursing-canada': {
    title: 'Nursing Jobs in Canada for Indian Nurses | Eduflair',
    description:
      'Start your nursing career in Canada: NCLEX preparation, NNAS credential evaluation, job placement and Express Entry PR support from Eduflair, Kerala.',
    image: '/images/pl2.jpg',
  },
  '/nursing-australia': {
    title: 'Nursing Jobs in Australia – AHPRA & Migration | Eduflair',
    description:
      'Work as a nurse in Australia: OET coaching, AHPRA registration, skilled migration and visa support for Indian nurses from Eduflair, Kerala.',
    image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
  },
  '/nursing-germany': {
    title: 'Nursing Jobs in Germany – German Training & PR | Eduflair',
    description:
      'Nursing placement in Germany: A1–B2 German training, help with qualification recognition and direct employer placements, with a pathway to permanent residency.',
    image: '/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg',
  },
  '/other-nursing-destinations': {
    title: 'Nursing Jobs Abroad – UK, Ireland, NZ, UAE | Eduflair',
    description:
      "Nursing opportunities in the UK, Ireland, New Zealand, the USA, the UAE and more, with Eduflair's complete placement, licensing and visa support for Indian nurses.",
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },

  // ── About ─────────────────────────────────────────────────────
  '/our-story': {
    title: 'Our Story – About Eduflair Learning Solutions',
    description:
      'The story of Eduflair Learning Solutions: how a Calicut institute grew into a leading language academy and study abroad consultancy for students across Kerala.',
  },
  '/meet-the-founders': {
    title: 'Meet the Founders | Eduflair Learning Solutions',
    description:
      "Meet the founders behind Eduflair's mission to transform education and careers across Kerala through language training, study abroad and overseas placement.",
  },

  // ── Blog / utility ────────────────────────────────────────────
  '/blog': {
    title: 'Blog – Study Abroad, Ausbildung & Language Tips | Eduflair',
    description:
      'News, guides and tips from Eduflair on studying abroad, Ausbildung in Germany, IELTS, OET, German language learning and overseas careers.',
  },
  '/contact': {
    title: 'Contact Eduflair – Calicut & Perinthalmanna Offices',
    description:
      'Get in touch with Eduflair Learning Solutions. Visit our Calicut head office or Perinthalmanna branch, or call and WhatsApp us for a free consultation.',
  },
  '/privacy': {
    title: 'Privacy Policy | Eduflair Learning Solutions',
    description:
      'How Eduflair Learning Solutions collects, uses and protects your personal information when you use our website and services.',
  },
};

/** Routes that must never be indexed. */
export const NOINDEX_PREFIXES = ['/admin'];

export function isNoindexPath(path) {
  return NOINDEX_PREFIXES.some((p) => path === p || path.startsWith(p + '/'));
}

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE.url + '/';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE.url + (pathOrUrl.startsWith('/') ? '' : '/') + pathOrUrl;
}

/**
 * Normalises a page's SEO into the full list of head tags.
 * Shared by the runtime hook and the build plugin so both emit identical tags.
 */
export function buildSeoTags({ path, title, description, ogTitle, ogDescription, image, type, noindex }) {
  const canonical = absoluteUrl(path === '/' ? '/' : path.replace(/\/+$/, ''));
  const img = absoluteUrl(image || SITE.defaultImage);
  return {
    title,
    canonical,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:locale', content: SITE.locale },
      { property: 'og:type', content: type || 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:image', content: img },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: img },
    ],
  };
}
