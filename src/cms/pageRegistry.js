/**
 * CMS page & section registry — WordPress-style editable sections.
 * Types: text | html | image | list (repeatable items with itemFields)
 */

import { toStoredValue } from './contentHelpers';

const HERO = (defaults = {}) => ([
  { key: 'hero_badge', type: 'text', label: 'Hero badge', default: defaults.badge || '' },
  { key: 'hero_title', type: 'text', label: 'Hero title', default: defaults.title || '' },
  { key: 'hero_subtitle', type: 'text', label: 'Hero subtitle', default: defaults.subtitle || '' },
  { key: 'hero_image', type: 'image', label: 'Hero background image', default: defaults.image || '' },
]);

const INTRO = (defaults = {}) => ([
  { key: 'intro_badge', type: 'text', label: 'Intro eyebrow', default: defaults.badge || 'Overview' },
  { key: 'intro_title', type: 'text', label: 'Intro heading', default: defaults.title || '' },
  { key: 'intro_html', type: 'html', label: 'Intro content (HTML allowed)', default: defaults.html || '' },
  { key: 'intro_image', type: 'image', label: 'Intro side image', default: defaults.image || '' },
]);

const SECTION = (prefix, label, defaults = {}) => ([
  { key: `${prefix}_title`, type: 'text', label: `${label} — title`, default: defaults.title || '' },
  { key: `${prefix}_html`, type: 'html', label: `${label} — content`, default: defaults.html || '' },
  { key: `${prefix}_image`, type: 'image', label: `${label} — image`, default: defaults.image || '' },
]);

const CTA = (defaults = {}) => ([
  { key: 'cta_badge', type: 'text', label: 'CTA badge / eyebrow', default: defaults.badge || '' },
  { key: 'cta_title', type: 'text', label: 'Bottom CTA title', default: defaults.title || 'Need Assistance?' },
  { key: 'cta_text', type: 'text', label: 'Bottom CTA text', default: defaults.text || 'Talk to our counsellors today.' },
  { key: 'cta_button', type: 'text', label: 'Bottom CTA button', default: defaults.button || 'Contact Us' },
]);

const CARD_ITEM = [
  { key: 'title', type: 'text', label: 'Title' },
  { key: 'desc', type: 'text', label: 'Description' },
  { key: 'icon', type: 'text', label: 'Icon emoji (e.g. ✅ or 🇬🇧)' },
  { key: 'icon_image', type: 'image', label: 'Icon / card image (optional)' },
];

const FAQ_ITEM = [
  { key: 'q', type: 'text', label: 'Question' },
  { key: 'a', type: 'html', label: 'Answer' },
];

const STAT_ITEM = [
  { key: 'value', type: 'text', label: 'Value (e.g. 1K+)' },
  { key: 'label', type: 'text', label: 'Label' },
];

const STEP_ITEM = [
  { key: 'n', type: 'text', label: 'Step number' },
  { key: 'title', type: 'text', label: 'Title' },
  { key: 'desc', type: 'text', label: 'Description' },
];

/** Standard destination / service page — full section editing */
export function destinationSections(d = {}) {
  return [
    { id: 'hero', title: 'Hero banner', description: 'Top of the page — title, subtitle, background', fields: HERO(d.hero || {}) },
    {
      id: 'stats',
      title: 'Stats bar',
      description: 'Optional quick-fact tiles under the hero',
      fields: [
        {
          key: 'stats',
          type: 'list',
          label: 'Stat items',
          itemFields: STAT_ITEM,
          default: d.stats || [],
        },
      ],
    },
    { id: 'intro', title: 'Intro section', description: 'Main text + side image', fields: INTRO(d.intro || {}) },
    { id: 'highlights', title: 'Highlights section', description: 'Second content block', fields: SECTION('highlights', 'Highlights', d.highlights || {}) },
    {
      id: 'features',
      title: 'Feature / benefit cards',
      description: 'Add, remove, or edit each card — title, text, emoji or image',
      fields: [
        { key: 'features_title', type: 'text', label: 'Section heading', default: d.featuresTitle || 'Why choose us' },
        { key: 'features_subtitle', type: 'text', label: 'Section subtitle', default: d.featuresSubtitle || '' },
        {
          key: 'features',
          type: 'list',
          label: 'Cards',
          itemFields: CARD_ITEM,
          default: d.features || [],
        },
      ],
    },
    {
      id: 'steps',
      title: 'Process steps',
      description: 'Numbered process / how-it-works steps',
      fields: [
        { key: 'steps_badge', type: 'text', label: 'Steps eyebrow', default: d.stepsBadge || '' },
        { key: 'steps_title', type: 'text', label: 'Steps heading', default: d.stepsTitle || '' },
        {
          key: 'steps',
          type: 'list',
          label: 'Steps',
          itemFields: STEP_ITEM,
          default: d.steps || [],
        },
      ],
    },
    {
      id: 'faqs',
      title: 'FAQs',
      description: 'Questions and answers visitors see on this page',
      fields: [
        { key: 'faqs_title', type: 'text', label: 'FAQ section title', default: d.faqsTitle || 'Frequently Asked Questions' },
        {
          key: 'faqs',
          type: 'list',
          label: 'FAQ items',
          itemFields: FAQ_ITEM,
          default: d.faqs || [],
        },
      ],
    },
    { id: 'cta', title: 'Call to action', description: 'Bottom banner text', fields: CTA(d.cta || {}) },
  ];
}

export const PAGE_GROUPS = [
  {
    id: 'home',
    label: 'Homepage',
    pages: [
      {
        key: 'home',
        title: 'Home',
        path: '/',
        sections: [
          {
            id: 'hero',
            title: 'Hero banner',
            description: 'First screen — badge, headline, text, background image',
            fields: [
              ...HERO({
                badge: "Kerala's Study Abroad & German Careers Specialists",
                title: 'Guiding Career Success<br />Gateway to Global Education &amp; Career Success!',
                subtitle:
                  'At Eduflair, we bridge the gap between aspirations and achievements through expert study abroad consultancy, skill development, and career placement.',
                image: '/images/hero-eduflair.jpg',
              }),
              { key: 'hero_cta_primary', type: 'text', label: 'Primary button text', default: 'Check My Free Eligibility' },
              { key: 'hero_cta_whatsapp', type: 'text', label: 'WhatsApp button text', default: 'Chat on WhatsApp' },
            ],
          },
          {
            id: 'stats',
            title: 'Stats bar',
            description: 'Numbers under the hero',
            fields: [
              {
                key: 'stats',
                type: 'list',
                label: 'Stat items',
                itemFields: STAT_ITEM,
                default: [
                  { value: '1K+', label: 'German Students Enrolled' },
                  { value: '950+', label: 'Placement Success Rate' },
                  { value: '990+', label: 'Visa Success Rate' },
                  { value: '10+', label: 'Years of Experience' },
                ],
              },
            ],
          },
          {
            id: 'service_cards',
            title: 'Service cards',
            description: 'Four big service cards with images',
            fields: [
              {
                key: 'service_cards',
                type: 'list',
                label: 'Service cards',
                itemFields: [
                  { key: 'title', type: 'text', label: 'Title' },
                  { key: 'description', type: 'text', label: 'Description' },
                  { key: 'href', type: 'text', label: 'Link URL' },
                  { key: 'cta', type: 'text', label: 'Button / link text' },
                  { key: 'img', type: 'image', label: 'Card image' },
                  { key: 'alt', type: 'text', label: 'Image alt text' },
                ],
                default: [
                  {
                    title: 'Study Abroad',
                    description:
                      'Admissions to top universities in the UK, Canada, Ireland, France, Austria and more — course and university selection, applications, scholarships and student-visa support, with IELTS/PTE coaching built in.',
                    href: '/study-abroad',
                    cta: 'Explore Study Abroad',
                    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
                    alt: 'University campus building',
                  },
                  {
                    title: 'Ausbildung in Germany',
                    description:
                      'Earn while you train in Germany with zero tuition and a clear route to PR. In-house German training to B2, employer placement, and full visa support.',
                    href: '/ausbildung-in-germany',
                    cta: 'Explore Ausbildung',
                    img: '/images/Germany-best-country-for-masters-article-image.avif',
                    alt: 'Technical vocational training',
                  },
                  {
                    title: 'Language & Skill Academy',
                    description:
                      'Certified, in-house coaching for German (A1–B2), IELTS and OET — small batches, weekly assessments and intensive exam prep that gets students through the first time.',
                    href: '/language-academy',
                    cta: 'Explore the Academy',
                    img: '/images/close-up-people-learning-language.webp',
                    alt: 'Language learning classroom',
                  },
                  {
                    title: 'Placement Consultancy',
                    description:
                      'International careers for nurses and healthcare professionals in Germany, Canada and Australia — verified employers, work-visa processing and relocation support.',
                    href: '/placement',
                    cta: 'Explore Placements',
                    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
                    alt: 'Healthcare professional',
                  },
                ],
              },
            ],
          },
          {
            id: 'key_services',
            title: 'Key services + videos',
            description: 'Headline, bullet list, and YouTube video IDs',
            fields: [
              { key: 'services_title', type: 'text', label: 'Section title', default: 'Our Key Services' },
              {
                key: 'services_subtitle',
                type: 'text',
                label: 'Section subtitle',
                default: 'End-to-end guidance for study abroad, Ausbildung, language training, and overseas placement.',
              },
              {
                key: 'key_service_items',
                type: 'list',
                label: 'Service bullets',
                itemFields: [{ key: 'text', type: 'text', label: 'Bullet text' }],
                default: [
                  { text: 'Personalized University Selection' },
                  { text: 'Application & Admission Assistance' },
                  { text: 'Student Visa Guidance & Processing' },
                  { text: 'IELTS / PTE Language Training' },
                  { text: 'Scholarship & Financial Aid Support' },
                  { text: 'Pre-Departure & Post-Arrival Support' },
                ],
              },
              {
                key: 'video_ids',
                type: 'list',
                label: 'YouTube videos',
                itemFields: [{ key: 'id', type: 'text', label: 'YouTube video ID' }],
                default: [
                  { id: 'uq3S4hKHYcA' },
                  { id: '5xSKeP0APSY' },
                  { id: '70ZP-DiE8wY' },
                  { id: 'cELke30Rgo4' },
                  { id: '--gdYYb_nE0' },
                  { id: 'rkMc_J4EJl0' },
                  { id: 'Ohlred9s9jw' },
                ],
              },
            ],
          },
          {
            id: 'about_teaser',
            title: 'About teaser',
            description: 'About block on homepage — image, headings, text, buttons',
            fields: [
              { key: 'about_badge', type: 'text', label: 'Eyebrow', default: 'Who We Are' },
              { key: 'about_title', type: 'text', label: 'Heading', default: 'About Eduflair' },
              {
                key: 'about_subtitle',
                type: 'text',
                label: 'Subheading',
                default: 'Leading Study Abroad Consultancy & Career Development Experts in Kerala',
              },
              {
                key: 'about_html',
                type: 'html',
                label: 'Body text (HTML)',
                default:
                  '<p>At Eduflair Learning Solutions, we are one of the most reliable overseas education consultants in Kerala, offering comprehensive services in study abroad consultancy, language training, skill development, and placement assistance.</p><p>Our goal is to help students and professionals access global education opportunities and build successful careers. With an in-house language academy, certified trainers, and a dedicated visa and placement team, we provide truly end-to-end support.</p>',
              },
              { key: 'about_image', type: 'image', label: 'Side image', default: '/images/DSC01527-1-924x520.jpg' },
              { key: 'about_stat_value', type: 'text', label: 'Floating stat value', default: '500+' },
              { key: 'about_stat_label', type: 'text', label: 'Floating stat label', default: 'Students Placed Abroad' },
              { key: 'about_btn1_text', type: 'text', label: 'Button 1 text', default: 'Our Story' },
              { key: 'about_btn1_href', type: 'text', label: 'Button 1 link', default: '/our-story' },
              { key: 'about_btn2_text', type: 'text', label: 'Button 2 text', default: 'Meet The Founders' },
              { key: 'about_btn2_href', type: 'text', label: 'Button 2 link', default: '/meet-the-founders' },
            ],
          },
          {
            id: 'testimonials',
            title: 'Testimonials',
            description: 'Student reviews — name, quote, badge, photo',
            fields: [
              { key: 'testimonials_badge', type: 'text', label: 'Eyebrow', default: 'Success Stories' },
              { key: 'testimonials_title', type: 'text', label: 'Heading', default: 'What Our Students Say' },
              {
                key: 'testimonials',
                type: 'list',
                label: 'Testimonials',
                itemFields: [
                  { key: 'name', type: 'text', label: 'Name' },
                  { key: 'badge', type: 'text', label: 'Badge' },
                  { key: 'quote', type: 'text', label: 'Quote' },
                  { key: 'photo', type: 'image', label: 'Photo (optional)' },
                  { key: 'initials', type: 'text', label: 'Initials (if no photo)' },
                ],
                default: [
                  {
                    name: 'Nandana Sivadasan',
                    badge: 'B2 Certified',
                    quote:
                      "Hade a nice experience with Eduflair team. I have completed my A1 to B2 studies in Eduflair. Soon after my B2 completion I started my processing. Jumana ma'am was our processing consultant and she was very helpful and guided me through all the process. Highly recommended!",
                    initials: 'NS',
                  },
                  {
                    name: 'Ziyad',
                    badge: 'B2 Certified',
                    quote:
                      'I just wanted to say a big thanks for all the help you gave me in learning German. I went from knowing nothing to being able to speak it fluently. The teachers and classes are wonderful. Really happy with Eduflair and the entire team.',
                    initials: 'Z',
                  },
                  {
                    name: 'Fiyona Sara Binu',
                    badge: 'B2 Certified',
                    quote:
                      'Eduflair is a good consultancy. I did my A1–B2 in Eduflair. The classes, teachers and atmosphere are all very good. My processing time was very fast (6 months). I am very happy and thankful for the entire Eduflair team.',
                    initials: 'FS',
                  },
                ],
              },
            ],
          },
          {
            id: 'gallery',
            title: 'Photo gallery',
            description: 'Life at Eduflair images',
            fields: [
              { key: 'gallery_badge', type: 'text', label: 'Eyebrow', default: 'Our Campus & Classrooms' },
              { key: 'gallery_title', type: 'text', label: 'Heading', default: 'Life at Eduflair' },
              {
                key: 'gallery',
                type: 'list',
                label: 'Photos',
                itemFields: [
                  { key: 'src', type: 'image', label: 'Image' },
                  { key: 'alt', type: 'text', label: 'Alt text' },
                ],
                default: [
                  { src: '/images/eduflair-life-1.jpeg', alt: 'Eduflair office' },
                  { src: '/images/eduflair-life-2.jpeg', alt: 'Eduflair team' },
                  { src: '/images/eduflair-life-3.jpeg', alt: 'Eduflair reception' },
                  { src: '/images/eduflair-life-4.jpeg', alt: 'Eduflair session' },
                  { src: '/images/eduflair-life-5.jpeg', alt: 'Eduflair classroom' },
                  { src: '/images/eduflair-life-6.jpeg', alt: 'Eduflair counselling' },
                  { src: '/images/eduflair-life-7.jpeg', alt: 'Eduflair students' },
                  { src: '/images/eduflair-life-8.jpeg', alt: 'Eduflair team group photo' },
                ],
              },
            ],
          },
          {
            id: 'faqs',
            title: 'Homepage FAQs',
            description: 'FAQ accordion on the home page',
            fields: [
              { key: 'faqs_badge', type: 'text', label: 'Eyebrow', default: 'FAQs' },
              { key: 'faqs_title', type: 'text', label: 'Heading', default: 'Frequently Asked Questions' },
              {
                key: 'faqs',
                type: 'list',
                label: 'Questions',
                itemFields: FAQ_ITEM,
                default: [
                  {
                    q: 'What services does Eduflair offer?',
                    a: 'Eduflair offers four core services: Study Abroad consultancy (UK, Canada, Ireland, France, Austria), Ausbildung in Germany, Language & Skill Academy (German A1–B2, IELTS, OET), and Placement Consultancy for healthcare professionals.',
                  },
                  {
                    q: 'Do I need a degree to apply for Ausbildung in Germany?',
                    a: 'No. Most Ausbildung programmes accept Plus Two (10+2 / HSC) qualifications. Some specific trades may have additional requirements. Book a free counselling session with us to check your exact eligibility.',
                  },
                  {
                    q: 'Do you provide in-house German language training?',
                    a: 'Yes. Our Language & Skill Academy in Calicut provides certified German language training from A1 to B2 level. We also offer IELTS and OET coaching — all in-house with our own certified trainers.',
                  },
                  {
                    q: 'How long does the entire abroad process take?',
                    a: 'Typically 6–12 months from your first counselling session to flying out. Language training (3–6 months) runs first, followed by the application and visa process.',
                  },
                  {
                    q: 'What are the costs involved? Are scholarships available?',
                    a: 'We are fully transparent about our fees from day one. Several Ausbildung programmes are employer-funded with zero tuition. For university programmes, we actively help you identify and apply for scholarships.',
                  },
                  {
                    q: 'Where is your office and how can I visit?',
                    a: 'We are located at the 3rd Floor, RP Mall, Mavoor Road, Calicut, Kerala – 673004. Walk-ins are welcome Monday to Saturday, 9am–6pm.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'study-abroad',
    label: 'Study Abroad',
    allowAdd: true,
    addTemplate: 'destination',
    pages: [
      {
        key: 'study-abroad',
        title: 'Study Abroad Overview',
        path: '/study-abroad',
        sections: [
          ...destinationSections({
            hero: {
              badge: 'Study Abroad',
              title: 'Study Abroad From Kerala — Best Overseas Education Consultants',
              subtitle:
                'Your gateway to global careers. Expert guidance for UK, Germany, Canada, Ireland, France, Austria, and more.',
              image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
            },
            intro: {
              badge: 'Your Gateway to the World',
              title: 'Study Abroad with Eduflair',
              html: '<p>Looking for the best study abroad consultants in Kerala? Eduflair helps students achieve their dream of studying in top countries.</p>',
              image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
            },
            featuresTitle: 'Benefits of Studying Abroad',
            features: [
              { title: 'Global Exposure & International Experience', desc: 'Experience new cultures, languages, and global work environments.', icon: '🌍' },
              { title: 'World-Class Education', desc: 'Study in top-ranked universities with advanced research facilities.', icon: '🎓' },
              { title: 'High-Paying Career Opportunities', desc: 'Gain globally recognised degrees and boost employability.', icon: '💼' },
              { title: 'In-Demand Courses & Specialisations', desc: 'Access trending programmes in AI, Data Science, Engineering, Business, and Healthcare.', icon: '📚' },
              { title: 'Strong Networking Opportunities', desc: 'Connect with global professionals and mentors.', icon: '🤝' },
              { title: 'PR & Settlement Opportunities', desc: 'Clear pathways to permanent residency after graduation.', icon: '🏠' },
            ],
            faqs: [
              { q: 'Which is the best country to study abroad from Kerala?', a: 'Canada, Germany, the UK, and Ireland are top choices due to career opportunities, PR pathways, and quality of education.' },
              { q: 'How much does it cost to study abroad?', a: 'Costs vary by country. Germany offers tuition-free education at public universities. UK ranges from £11,000–£38,000/year.' },
              { q: 'Can I work while studying abroad?', a: 'Yes, most countries allow up to 20 hours per week of part-time work during term time.' },
            ],
          }),
          {
            id: 'destinations',
            title: 'Destination cards',
            description: 'Country cards on the Study Abroad page',
            fields: [
              { key: 'destinations_title', type: 'text', label: 'Section title', default: 'Study Destination Guide' },
              { key: 'destinations_badge', type: 'text', label: 'Eyebrow', default: 'Destinations' },
              {
                key: 'destinations',
                type: 'list',
                label: 'Destination cards',
                itemFields: [
                  { key: 'flag', type: 'text', label: 'Flag emoji' },
                  { key: 'country', type: 'text', label: 'Country name' },
                  { key: 'href', type: 'text', label: 'Page link' },
                  { key: 'tag', type: 'text', label: 'Tag / badge' },
                  { key: 'highlights', type: 'text', label: 'Highlights (one per line)' },
                  { key: 'courses', type: 'text', label: 'Popular courses line' },
                  { key: 'image', type: 'image', label: 'Card image (optional)' },
                ],
                default: [
                  {
                    flag: '🇬🇧',
                    country: 'United Kingdom',
                    href: '/study-in-uk',
                    tag: 'Top Choice',
                    highlights: '2-year post-study work visa\n3-year bachelor\'s / 1-year master\'s\nOxford, Cambridge, Imperial, UCL',
                    courses: 'Business, Engineering, Healthcare, AI, Law',
                  },
                  {
                    flag: '🇩🇪',
                    country: 'Germany',
                    href: '/study-in-germany',
                    tag: 'Tuition-Free',
                    highlights: 'Tuition-free public universities\n18-month post-study work visa\nStrong engineering & IT job market',
                    courses: 'Mechanical Engineering, IT, Healthcare, Business',
                  },
                  {
                    flag: '🇨🇦',
                    country: 'Canada',
                    href: '/study-in-canada',
                    tag: 'Best PR Pathway',
                    highlights: 'Up to 3-year post-graduation work permit\nExpress Entry PR pathway\nWorld-class universities',
                    courses: 'Computer Science, Engineering, Business, Healthcare',
                  },
                  {
                    flag: '🇮🇪',
                    country: 'Ireland',
                    href: '/study-in-ireland',
                    tag: 'English-Speaking EU',
                    highlights: 'Up to 2-year post-study work visa\nStrong IT & pharma industry\nEnglish-speaking EU country',
                    courses: 'Data Science, Business, Nursing, Engineering',
                  },
                  {
                    flag: '🇫🇷',
                    country: 'France',
                    href: '/study-in-france',
                    tag: 'Affordable',
                    highlights: 'Affordable tuition & scholarships\nStrong in fashion, arts & business\nGateway to European job market',
                    courses: 'Business, Fashion, Engineering, Culinary Arts',
                  },
                  {
                    flag: '🇦🇹',
                    country: 'Austria',
                    href: '/study-in-austria',
                    tag: 'Low Fees',
                    highlights: 'Low tuition fees\nNo blocked account required\nCentral European job exposure',
                    courses: 'Engineering, Business, Music, Sciences',
                  },
                ],
              },
            ],
          },
          {
            id: 'intro_ctas',
            title: 'Intro buttons',
            fields: [
              { key: 'intro_cta_primary', type: 'text', label: 'Primary button text', default: 'Book Free Consultation' },
              { key: 'intro_cta_secondary', type: 'text', label: 'Secondary button text', default: 'View Application Process' },
            ],
          },
          {
            id: 'why',
            title: 'Why Eduflair',
            fields: [
              { key: 'why_badge', type: 'text', label: 'Eyebrow', default: 'Our Edge' },
              {
                key: 'why_title',
                type: 'text',
                label: 'Section title',
                default: 'Why Choose Eduflair — Top Study Abroad Consultants in Kerala',
              },
              {
                key: 'why_items',
                type: 'list',
                label: 'Why bullets',
                itemFields: [{ key: 'text', type: 'text', label: 'Bullet text' }],
                default: [
                  { text: 'Personalised career counselling for every student' },
                  { text: 'University selection & application assistance' },
                  { text: 'Visa processing & documentation support' },
                  { text: 'Scholarship & financial aid guidance' },
                  { text: 'IELTS & German language training in-house' },
                  { text: 'Pre-departure & accommodation support' },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 'application-process',
        title: 'Application Process',
        path: '/application-process',
        sections: destinationSections({
          hero: {
            badge: 'Study Abroad',
            title: 'Study Abroad Application Process — Step-by-Step Guide',
            subtitle: 'From your first consultation to your first day abroad — Eduflair handles every step of the journey.',
            image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1600&q=80',
          },
          intro: {
            badge: 'How It Works',
            title: 'Your End-to-End Study Abroad Journey',
            html: '<p>Applying to study abroad can feel overwhelming — but with Eduflair by your side, every step is clear, organised, and stress-free. Our 8-step process ensures nothing is missed, from choosing the right university to landing at your destination.</p>',
          },
          stepsBadge: 'Our Process',
          stepsTitle: '8-Step Application Process',
          steps: [
            { n: '01', title: 'Free Initial Consultation', desc: 'Book a free session with our counsellors. We assess your academic background, budget, career goals, and preferred destination to create a personalised action plan.' },
            { n: '02', title: 'Course & University Selection', desc: 'We shortlist universities and programmes based on your eligibility, budget, and career goals — covering rankings, acceptance rates, and scholarship availability.' },
            { n: '03', title: 'Language Test Preparation', desc: 'If required, we enrol you in our in-house IELTS, German, or OET coaching at Eduflair Language Academy.' },
            { n: '04', title: 'Application & Documentation', desc: 'We prepare SOP, LOR, CV, academic transcripts, and submit applications to universities on your behalf.' },
            { n: '05', title: 'Offer Letter & Acceptance', desc: 'We help you evaluate offers, select the best one, and guide you through accepting it and paying the deposit.' },
            { n: '06', title: 'Scholarship Application', desc: 'We identify scholarships and bursaries you are eligible for and assist with applications.' },
            { n: '07', title: 'Visa Application & Embassy Prep', desc: 'Complete visa file preparation and mock interviews for embassy appointments.' },
            { n: '08', title: 'Pre-Departure & Accommodation', desc: 'Pre-departure orientation — accommodation, packing, banking, transport, and cultural tips.' },
          ],
          cta: {
            title: 'Ready to Start Your Application?',
            text: "Book a free consultation today — let's build your personalised action plan for studying abroad.",
          },
        }),
      },
      {
        key: 'study-in-uk',
        title: 'Study in UK',
        path: '/study-in-uk',
        sections: destinationSections({
          hero: {
            badge: 'Study Abroad — UK',
            title: 'Study In UK — World-Class Education & Global Career Opportunities',
            subtitle: "Top-ranked universities, a 2-year post-study work visa, and access to one of the world's strongest job markets.",
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
          },
          stats: [
            { value: '£11k–38k', label: 'Annual Tuition' },
            { value: '2 Years', label: 'Post-Study Work Visa' },
            { value: '3 Years', label: "Bachelor's Duration" },
            { value: 'Top 10', label: 'World Ranked Universities' },
          ],
          intro: {
            badge: 'Why Study in UK?',
            title: 'Why Choose the UK for Higher Education?',
            html: '<p>Top-ranked universities, a 2-year Graduate Route work visa, and globally recognised degrees. Eduflair guides you through university selection, applications, IELTS, and visas.</p>',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
          },
          featuresTitle: 'Top Universities in the UK',
          featuresSubtitle: 'Leading institutions our students apply to',
          features: [
            { title: 'University of Oxford', desc: 'World-class education and research excellence across all disciplines. (#1 UK)', icon: '🎓' },
            { title: 'University of Cambridge', desc: 'Excellence in science, engineering, humanities, and social sciences. (#2 UK)', icon: '🎓' },
            { title: 'Imperial College London', desc: 'STEM-focused, specialising in engineering, technology, and medicine. (#3 UK)', icon: '🎓' },
            { title: 'University College London (UCL)', desc: 'Research-intensive with strengths in medicine, law, and architecture. (#4 UK)', icon: '🎓' },
            { title: 'University of Edinburgh', desc: 'Innovation, research, and strong industry connections in Scotland. (Top 20 World)', icon: '🎓' },
            { title: 'Business & Management', desc: 'Very High demand — careers in Finance, Consulting, Marketing.', icon: '💼' },
            { title: 'Engineering & Technology', desc: 'Very High demand — Civil, Mechanical, Software careers.', icon: '⚙️' },
            { title: 'Data Science & AI', desc: 'Very High demand — Tech Companies, Analytics, Finance.', icon: '🤖' },
          ],
          faqsTitle: 'Study in UK — FAQs',
          faqs: [
            { q: 'What is the Graduate Route (post-study work visa) in the UK?', a: 'The Graduate Route allows international students to stay in the UK for 2 years (3 for PhD) after graduation to work or look for work.' },
            { q: 'How much does it cost to study in the UK?', a: 'Tuition fees for international students range from £11,000–£38,000 per year. Living costs are approximately £1,100/month.' },
            { q: 'Do I need IELTS to study in the UK?', a: 'Yes, most UK universities require IELTS Academic with an overall band of 6.5–7.0, with no component below 6.0.' },
            { q: 'Can I work while studying in the UK?', a: 'Yes, international students can work up to 20 hours per week during term time and full-time during vacations.' },
            { q: 'How long are degrees in the UK?', a: "Bachelor's degrees are typically 3 years, Master's programmes are 1 year — making UK education faster and more cost-effective than many other destinations." },
          ],
          cta: {
            title: 'Start Your UK Journey Today!',
            text: "Get expert guidance on UK university applications, visa, and scholarships from Eduflair's counsellors.",
          },
        }),
      },
      ...[
        ['study-in-germany', 'Study in Germany', '/study-in-germany', 'Study Abroad — Germany', 'Study In Germany — Tuition-Free Education & Career Opportunities', 'World-renowned universities, zero tuition at public institutions, 18-month post-study work visa, and a direct pathway to PR.', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80'],
        ['study-in-canada', 'Study in Canada', '/study-in-canada', 'Study Abroad — Canada', 'Study In Canada — Top Universities, Courses & PR Opportunities', 'High-quality education, a 3-year post-graduation work permit, and one of the world\'s most accessible PR pathways.', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80'],
        ['study-in-ireland', 'Study in Ireland', '/study-in-ireland', 'Study Abroad — Ireland', 'Study In Ireland — English-Speaking EU with Strong Career Prospects', 'English-taught degrees, a 2-year post-study work visa, and access to Ireland\'s booming tech and pharma industries.', 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80'],
        ['study-in-france', 'Study in France', '/study-in-france', 'Study Abroad — France', 'Study In France — Affordable Tuition, Scholarships & European Careers', 'World-class education in arts, fashion, engineering, and business — at some of Europe\'s most affordable tuition fees.', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80'],
        ['study-in-austria', 'Study in Austria', '/study-in-austria', 'Study Abroad — Austria', 'Study In Austria — Low Fees, No Blocked Account Required', 'Quality European education in the heart of Central Europe — affordable fees, no blocked account requirement, and strong career exposure.', 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1600&q=80'],
        ['other-destinations', 'Other Destinations', '/other-destinations', 'Study Abroad', 'Other Popular Study Destinations', 'Beyond UK, Germany, Canada, Ireland, France, and Austria — explore more study options supported by Eduflair.', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80'],
      ].map(([key, title, path, badge, htitle, sub, img]) => ({
        key,
        title,
        path,
        sections: destinationSections({
          hero: { badge, title: htitle, subtitle: sub, image: img },
          intro: {
            badge: 'Overview',
            title,
            html: `<p>Learn about opportunities in ${title.replace('Study in ', '')} with Eduflair counselling and admissions support.</p>`,
            image: img,
          },
        }),
      })),
    ],
  },
  {
    id: 'ausbildung',
    label: 'Ausbildung',
    pages: [
      {
        key: 'ausbildung-in-germany',
        title: 'Ausbildung in Germany',
        path: '/ausbildung-in-germany',
        sections: [
          {
            id: 'hero',
            title: 'Hero banner',
            fields: HERO({
              badge: 'Ausbildung Program',
              title: 'Ausbildung in Germany: Your Pathway to a Career Without a Degree',
              subtitle: 'Earn while you learn — zero tuition fees, €1,000–€1,400/month stipend, and a direct route to German Permanent Residency.',
              image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
            }),
          },
          {
            id: 'stats',
            title: 'Key stats',
            fields: [
              {
                key: 'stats',
                type: 'list',
                label: 'Stat tiles',
                itemFields: STAT_ITEM,
                default: [
                  { value: '2–3.5 yrs', label: 'Programme Duration' },
                  { value: '€1,000–1,400', label: 'Monthly Stipend' },
                  { value: '100% Free', label: 'Tuition Fees' },
                  { value: 'PR Path', label: 'After 2 Years Work' },
                ],
              },
            ],
          },
          {
            id: 'intro',
            title: 'What is Ausbildung',
            fields: [
              ...INTRO({
                badge: 'Overview',
                title: 'What is Ausbildung in Germany?',
                html: '<p>Ausbildung is Germany\'s world-renowned dual education system combining practical on-the-job training with classroom instruction. Unlike a traditional degree, it is fully employer-funded — you receive a monthly stipend throughout your training.</p><p>On completion, you earn a nationally and internationally recognised German vocational certificate — opening doors to permanent employment and a clear PR pathway in Germany.</p>',
                image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80',
              }),
              {
                key: 'intro_bullets',
                type: 'list',
                label: 'Checkmark bullets',
                itemFields: [{ key: 'text', type: 'text', label: 'Bullet text' }],
                default: [
                  { text: 'Zero tuition fees — 100% employer-funded training' },
                  { text: 'Earn €1,000–€1,400 per month during training' },
                  { text: '90%+ employment rate after completion' },
                  { text: 'Permanent Residency pathway after 2 years work experience' },
                  { text: 'Globally recognised German vocational certificates' },
                ],
              },
            ],
          },
          {
            id: 'fields',
            title: 'Top fields / courses',
            description: 'Each card: title, description, emoji or image icon',
            fields: [
              { key: 'fields_badge', type: 'text', label: 'Eyebrow', default: 'Career Options' },
              { key: 'fields_title', type: 'text', label: 'Section title', default: 'Top Ausbildung Fields in Germany' },
              {
                key: 'fields_subtitle',
                type: 'text',
                label: 'Section subtitle',
                default: 'Choose from in-demand vocational fields with excellent job prospects and employer partnerships across Germany.',
              },
              {
                key: 'fields',
                type: 'list',
                label: 'Field cards',
                itemFields: CARD_ITEM,
                default: [
                  { title: 'Nursing & Healthcare', desc: 'High-demand sector with excellent job security and PR pathways.', icon: '🏥' },
                  { title: 'Mechatronics', desc: 'Combines mechanical, electrical, and computer engineering.', icon: '⚙️' },
                  { title: 'Information Technology', desc: "Germany's tech sector offers top salaries and career growth.", icon: '💻' },
                  { title: 'Logistics', desc: "Europe's supply chain hub creates thousands of openings yearly.", icon: '📦' },
                  { title: 'Food Processing', desc: 'Growing industry with strong employer-sponsored programmes.', icon: '🥗' },
                  { title: 'Electrical Engineering', desc: 'Precision engineering roles with globally recognised certificates.', icon: '⚡' },
                ],
              },
            ],
          },
          {
            id: 'eligibility',
            title: 'Eligibility criteria',
            fields: [
              { key: 'eligibility_badge', type: 'text', label: 'Eyebrow', default: 'Requirements' },
              { key: 'eligibility_title', type: 'text', label: 'Section title', default: 'Eligibility Criteria' },
              {
                key: 'eligibility',
                type: 'list',
                label: 'Eligibility cards',
                itemFields: [
                  { key: 'label', type: 'text', label: 'Label' },
                  { key: 'desc', type: 'text', label: 'Description' },
                ],
                default: [
                  { label: 'Academic Qualification', desc: 'Minimum 55% marks in 12th grade (Plus Two / HSC)' },
                  { label: 'German Language', desc: 'B2 level German language certification is mandatory' },
                  { label: 'Age Requirement', desc: 'Applicants must be between 18 and 26 years of age' },
                  { label: 'Motivation', desc: 'Demonstrated willingness to work and settle in Germany' },
                  { label: 'Health Clearance', desc: 'Basic medical fitness required by German employers' },
                ],
              },
            ],
          },
          {
            id: 'support',
            title: 'How Eduflair helps',
            fields: [
              { key: 'support_badge', type: 'text', label: 'Eyebrow', default: 'Our Support' },
              { key: 'support_title', type: 'text', label: 'Section title', default: 'How Eduflair Helps You' },
              {
                key: 'support_html',
                type: 'html',
                label: 'Intro text (HTML)',
                default: '<p>From your first consultation to your first day in Germany, Eduflair\'s dedicated Ausbildung team handles every step.</p>',
              },
              {
                key: 'support_items',
                type: 'list',
                label: 'Support bullets',
                itemFields: [{ key: 'text', type: 'text', label: 'Bullet text' }],
                default: [
                  { text: 'Free eligibility assessment and career guidance' },
                  { text: 'A1 to B2 German language training at our Language Academy' },
                  { text: 'CV preparation and motivation letter writing' },
                  { text: 'Mock interview coaching with German employer standards' },
                  { text: 'Complete visa documentation and embassy preparation' },
                  { text: 'Pre-departure briefing and accommodation guidance' },
                  { text: 'Post-arrival support and emergency contact in Germany' },
                ],
              },
            ],
          },
          {
            id: 'steps',
            title: 'Process steps',
            fields: [
              { key: 'steps_badge', type: 'text', label: 'Eyebrow', default: 'The Journey' },
              { key: 'steps_title', type: 'text', label: 'Section title', default: 'The Ausbildung Application Process' },
              {
                key: 'steps',
                type: 'list',
                label: 'Steps',
                itemFields: [
                  { key: 'n', type: 'text', label: 'Step number' },
                  { key: 'title', type: 'text', label: 'Title' },
                  { key: 'desc', type: 'text', label: 'Description' },
                ],
                default: [
                  { n: '01', title: 'Career Consultation', desc: 'Free session to assess your background, interests, and eligibility for Ausbildung.' },
                  { n: '02', title: 'German Language Training', desc: 'Intensive A1–B2 German training at Eduflair Language Academy.' },
                  { n: '03', title: 'Application & Interview', desc: 'CV preparation, motivation letter writing, and mock interview coaching.' },
                  { n: '04', title: 'Visa Process', desc: 'Complete visa documentation support — from student visa to work permit pathway.' },
                  { n: '05', title: 'Relocation & Training', desc: 'Pre-departure briefing, accommodation guidance, and on-arrival support.' },
                ],
              },
            ],
          },
          {
            id: 'faqs',
            title: 'FAQs',
            fields: [
              { key: 'faqs_title', type: 'text', label: 'FAQ title', default: "FAQ's — Ausbildung in Germany" },
              {
                key: 'faqs',
                type: 'list',
                label: 'FAQ items',
                itemFields: FAQ_ITEM,
                default: [
                  { q: 'What is the age limit for Ausbildung in Germany?', a: 'Typically 18–26 years, though some employers accept candidates up to 30 years depending on the sector.' },
                  { q: 'Is German language mandatory for Ausbildung?', a: 'Yes. A minimum of B2 level German is required to communicate effectively at the workplace and pass vocational exams.' },
                  { q: 'How much will I earn during Ausbildung?', a: 'You receive a monthly training allowance (Ausbildungsvergütung) of approximately €1,000–€1,400 paid by your employer.' },
                  { q: 'Is Ausbildung completely free?', a: 'Yes. The vocational school (Berufsschule) is tuition-free and your employer funds the practical training. You earn while you learn.' },
                  { q: 'Can I get Permanent Residency after Ausbildung?', a: 'Yes. After completing Ausbildung and working for 2 years in Germany, you can apply for permanent residency (Niederlassungserlaubnis).' },
                  { q: 'How long does the entire process take?', a: 'From consultation to departure typically takes 10–14 months, including 8 months of German language training.' },
                ],
              },
            ],
          },
          { id: 'cta', title: 'Call to action', fields: CTA({ title: 'Start Your Ausbildung Journey Today!', text: 'Speak to an Eduflair counsellor and find out if you qualify for a German Ausbildung programme.' }) },
        ],
      },
    ],
  },
  {
    id: 'language',
    label: 'Language Academy',
    allowAdd: true,
    addTemplate: 'destination',
    pages: [
      {
        key: 'language-academy',
        title: 'Language Academy Overview',
        path: '/language-academy',
        sections: [
          ...destinationSections({
            hero: {
              badge: 'Language & Skill Academy',
              title: 'Eduflair Language & Skill Academy — Kerala',
              subtitle: 'In-house certified coaching for German A1–B2, IELTS, and OET.',
              image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80',
            },
          }),
          {
            id: 'courses',
            title: 'Course cards',
            fields: [
              {
                key: 'courses',
                type: 'list',
                label: 'Courses',
                itemFields: [
                  { key: 'title', type: 'text', label: 'Title' },
                  { key: 'desc', type: 'text', label: 'Description' },
                  { key: 'tag', type: 'text', label: 'Tag' },
                  { key: 'href', type: 'text', label: 'Link' },
                  { key: 'icon', type: 'text', label: 'Emoji icon' },
                  { key: 'icon_image', type: 'image', label: 'Icon image' },
                ],
                default: [
                  { title: 'IELTS Coaching', desc: 'Achieve your target band with expert trainers.', tag: 'English', href: '/ielts-coaching', icon: '📝' },
                  { title: 'German Language', desc: 'A1–B2 courses for Ausbildung and careers in Germany.', tag: 'German', href: '/german-language', icon: '🇩🇪' },
                  { title: 'OET Coaching', desc: 'Occupational English Test for healthcare professionals.', tag: 'Healthcare', href: '/oet', icon: '🩺' },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 'ielts-coaching',
        title: 'IELTS Coaching',
        path: '/ielts-coaching',
        sections: destinationSections({
          hero: {
            badge: 'Language Academy',
            title: 'Master IELTS with Eduflair',
            subtitle: 'Expert IELTS coaching in Calicut — proven strategies, all four modules, and mock tests to get you to band 7+.',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80',
          },
          intro: {
            badge: 'About the Exam',
            title: 'About IELTS — Your Gateway to Study, Work & Migration',
            html: '<p>The International English Language Testing System (IELTS) is the world\'s most popular English proficiency test, accepted by over 11,000 organisations in 140+ countries. Available in Academic and General Training formats. Scores range from Band 0–9. Most institutions require Band 6.5–7.5.</p>',
          },
          featuresTitle: 'IELTS Training Programmes at Eduflair',
          featuresSubtitle: 'Choose the programme that fits your timeline',
          features: [
            { title: '1-Month Fast Track', desc: 'Intensive daily coaching for students with a solid English base. Focus on exam strategy and timed mock tests.', icon: '⚡' },
            { title: '2-Month Comprehensive', desc: 'Complete module-by-module training covering all four skills with regular feedback and progress tracking.', icon: '⭐' },
            { title: 'Full Module Training', desc: 'In-depth coverage of Listening, Reading, Writing, and Speaking with expert feedback on each component.', icon: '📚' },
            { title: 'Online IELTS Coaching', desc: 'Live online sessions — ideal for working professionals and outstation students.', icon: '💻' },
            { title: 'Expert Trainers', desc: 'IELTS-certified instructors with deep knowledge of the exam format and scoring criteria.', icon: '👨‍🏫' },
            { title: 'Mock Tests & Feedback', desc: 'Regular full-length mock tests with detailed score analysis and personalised feedback.', icon: '📝' },
          ],
          faqsTitle: 'IELTS Coaching — FAQs',
          faqs: [
            { q: 'What is the IELTS minimum score for UK universities?', a: 'Most UK universities require an overall band of 6.5–7.0 with no individual component below 6.0.' },
            { q: 'How many times can I take the IELTS exam?', a: 'There is no limit. You can retake IELTS as many times as needed.' },
            { q: 'What is the difference between Academic and General IELTS?', a: 'Academic IELTS is for university admissions. General Training is for work visas and immigration.' },
            { q: 'How long is the IELTS score valid?', a: 'IELTS scores are valid for 2 years from the date of the test.' },
            { q: 'What band score do I need for Canada PR?', a: 'For Express Entry (Federal Skilled Worker), you typically need CLB 7 (IELTS 6.0 in each component).' },
            { q: 'Does Eduflair help with IELTS registration?', a: 'Yes, we assist students with IELTS exam registration and scheduling at centres in Calicut and nearby cities.' },
          ],
          cta: { title: 'Start Your IELTS Journey Today', text: 'Enrol in Eduflair\'s IELTS coaching programme and achieve the band score you need.' },
        }),
      },
      {
        key: 'german-language',
        title: 'German Language',
        path: '/german-language',
        sections: destinationSections({
          hero: {
            badge: 'Language Academy',
            title: 'Learn German — Build a Bright Future with Eduflair',
            subtitle: 'From A1 Beginner to B2 Certified — structured, exam-focused German language training in Calicut, Kerala.',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
          },
          stats: [
            { value: '8 Months', label: 'Programme Duration' },
            { value: '200+ Hours', label: 'Total Instruction' },
            { value: 'A1 to B2', label: 'Levels Covered' },
            { value: '95%+', label: 'Exam Pass Rate' },
          ],
          intro: {
            badge: 'Why German?',
            title: 'Why Learn German?',
            html: '<p>German is the gateway to Europe\'s largest economy. Whether you\'re pursuing Ausbildung, planning to study at a tuition-free German university, or seeking a healthcare career in Germany — B2 German is your key.</p>',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
          },
          featuresTitle: 'German Language Courses — A1 to B2',
          featuresSubtitle: 'Daily 4-hour classes with weekly Saturday assessment tests.',
          features: [
            { title: 'A1 — Beginner', desc: 'Greetings, basic vocabulary, numbers, introductions. No prior knowledge required.', icon: 'A1' },
            { title: 'A2 — Elementary', desc: 'Daily conversations, shopping, travel, simple descriptions and routines.', icon: 'A2' },
            { title: 'B1 — Intermediate', desc: 'Express opinions, understand workplace instructions, read simple texts.', icon: 'B1' },
            { title: 'B2 — Upper-Intermediate', desc: 'Required for Ausbildung & university admission. Fluent workplace communication.', icon: 'B2' },
            { title: 'India\'s No:1 Language Institute', desc: 'Trusted by thousands of students who have achieved B2 and secured placements in Germany.', icon: '🏆' },
            { title: 'Expert Trainers', desc: 'TELC/Goethe certified trainers with years of exam-focused coaching experience.', icon: '👨‍🏫' },
          ],
          faqsTitle: 'German Language Training — FAQs',
          faqs: [
            { q: 'How long does it take to reach B2 level from scratch?', a: 'Approximately 8 months with our structured A1 to B2 programme (200+ hours of instruction).' },
            { q: 'Which German exam should I take — Goethe or TELC?', a: 'Both are accepted for Ausbildung. Our counsellors will recommend the right one based on your goals.' },
            { q: 'Are classes available on weekends?', a: 'Yes. We offer weekend batches for working professionals and students with college schedules.' },
            { q: 'Is online German coaching available?', a: 'Yes. We offer live online and in-person classes with the same quality curriculum.' },
            { q: 'Do I need German for Ausbildung in all fields?', a: 'Yes. B2 is the minimum requirement across all Ausbildung fields including nursing, IT, and logistics.' },
          ],
          cta: { title: 'Start Learning German Today', text: 'Join Kerala\'s most trusted German language programme and get B2 certified with Eduflair.' },
        }),
      },
      {
        key: 'oet',
        title: 'OET',
        path: '/oet',
        sections: destinationSections({
          hero: {
            badge: 'Language Academy',
            title: 'OET Coaching — Occupational English Test for Healthcare Professionals',
            subtitle: 'Specialised OET preparation for nurses, doctors, dentists, and all registered healthcare professionals.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
          },
          intro: {
            badge: 'About the Exam',
            title: 'What is the OET?',
            html: '<p>The Occupational English Test (OET) is an internationally recognised English language test designed specifically for healthcare professionals. OET is accepted by healthcare regulators in the UK, Australia, Ireland, Canada, New Zealand, UAE, and over 20 countries.</p>',
          },
          featuresTitle: 'Why Choose Eduflair for OET',
          features: [
            { title: 'Healthcare-Specific Training', desc: 'All materials use clinical settings relevant to nurses and doctors.', icon: '🩺' },
            { title: 'Grade B Target', desc: 'Focused coaching to achieve Grade B (IELTS 7.0 equivalent) in all four sub-tests.', icon: '🎯' },
            { title: '4–8 Week Programmes', desc: 'Intensive and regular batch options based on your current English level.', icon: '📅' },
          ],
          faqsTitle: 'OET Coaching — FAQs',
          faqs: [
            { q: 'What is OET and who needs it?', a: 'OET is an English proficiency test for healthcare professionals, required for registration in UK, Australia, Ireland, Canada, UAE, and New Zealand.' },
            { q: 'What score do I need to pass OET?', a: 'Most regulators require Grade B in all four sub-tests: Listening, Reading, Writing, and Speaking.' },
            { q: 'How is OET different from IELTS?', a: 'OET is healthcare-specific — all materials are from clinical settings. IELTS uses general academic topics.' },
            { q: 'How long is OET training at Eduflair?', a: 'Our OET programme runs for 4–8 weeks depending on your current English level.' },
            { q: 'Is OET accepted in the UK for NMC registration?', a: 'Yes. The NMC accepts OET as proof of English proficiency for international nurses.' },
          ],
          cta: { title: 'Start OET Preparation', text: 'Enrol in Eduflair OET coaching and take the next step toward your healthcare career abroad.' },
        }),
      },
    ],
  },
  {
    id: 'placement',
    label: 'Placement',
    allowAdd: true,
    addTemplate: 'destination',
    pages: [
      {
        key: 'placement',
        title: 'Placement Overview',
        path: '/placement',
        sections: [
          ...destinationSections({
            hero: {
              badge: 'Placement Consultancy',
              title: 'Overseas Job Consultancy in Kerala — Eduflair Placement & Immigration',
              subtitle: 'Your trusted path to global careers. Expert placement services for healthcare professionals and skilled workers across Canada, Australia, Germany, and more.',
              image: '/images/DSC06788.JPG',
            },
            intro: {
              badge: 'About Our Services',
              title: 'Why Choose Eduflair Placement & Immigration Consultancy?',
              html: '<p>Eduflair specialises in guiding skilled professionals — especially healthcare workers — toward rewarding career opportunities abroad. As a trusted Kerala-based consultancy, we offer comprehensive international job placement and immigration services.</p>',
              image: '/images/DSC06782.JPG',
            },
            featuresTitle: 'Why Choose Us',
            features: [
              { title: 'Proven Expertise', desc: 'Years of placement experience across industries, with a focus on healthcare and nursing.' },
              { title: 'Comprehensive Support', desc: 'From document verification to visa guidance — we handle everything.' },
              { title: 'Hassle-Free Processing', desc: 'Personalised support for a smooth, stress-free placement journey.' },
              { title: 'Post-Arrival Guidance', desc: 'Accommodation, work culture orientation, and settlement support included.' },
              { title: 'Strong Employer Network', desc: 'Partnerships with verified international organisations and healthcare providers.' },
            ],
            stepsBadge: 'Our Process',
            stepsTitle: '5-Step Placement Process',
            steps: [
              { n: '01', title: 'Consultation & Eligibility Check', desc: 'We assess your qualifications, work experience, language proficiency, and target destinations.' },
              { n: '02', title: 'Document Assistance', desc: 'Credential evaluation, licensing guidance, and complete documentation support.' },
              { n: '03', title: 'Employer Matching', desc: 'We connect you with verified international employers and healthcare organisations.' },
              { n: '04', title: 'Visa & Immigration Support', desc: 'End-to-end work visa applications, legal requirements, and embassy preparation.' },
              { n: '05', title: 'Pre-Departure Support', desc: 'Orientation, accommodation guidance, and on-arrival support at your destination.' },
            ],
            cta: {
              title: 'Ready to Start Your Global Career?',
              text: 'Book a free consultation with Eduflair\'s placement experts and take the first step toward your international career.',
            },
          }),
          {
            id: 'destinations',
            title: 'Destination cards',
            description: 'Nursing placement destination cards on the Placement page',
            fields: [
              { key: 'destinations_badge', type: 'text', label: 'Eyebrow', default: 'Destinations' },
              { key: 'destinations_title', type: 'text', label: 'Section title', default: 'Nursing Placement Destinations' },
              {
                key: 'destinations',
                type: 'list',
                label: 'Destination cards',
                itemFields: [
                  { key: 'code', type: 'text', label: 'Flag code (e.g. ca, au, de — leave blank for globe icon)' },
                  { key: 'title', type: 'text', label: 'Title' },
                  { key: 'href', type: 'text', label: 'Link URL' },
                  { key: 'desc', type: 'text', label: 'Description' },
                ],
                default: [
                  { code: 'ca', title: 'Nursing Placement in Canada', href: '/nursing-canada', desc: 'NCLEX pathway, PGWP, and Express Entry PR opportunities for RNs.' },
                  { code: 'au', title: 'Nursing Placement in Australia', href: '/nursing-australia', desc: 'AHPRA registration support and skilled migration pathways for nurses.' },
                  { code: 'de', title: 'Nursing Placement in Germany', href: '/nursing-germany', desc: 'Ausbildung and direct nursing placements with B2 German language support.' },
                  { code: '', title: 'Other Destinations', href: '/other-nursing-destinations', desc: 'UK, Ireland, New Zealand, USA, UAE and more nursing placement options.' },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 'nursing-canada',
        title: 'Nursing in Canada',
        path: '/nursing-canada',
        sections: destinationSections({
          hero: {
            badge: 'Placement Consultancy',
            title: 'Nursing Placement in Canada — Start Your Canadian Healthcare Career',
            subtitle: 'From NCLEX preparation to job placement and Express Entry PR — Eduflair guides Indian nurses every step of the way.',
            image: '/images/pl2.jpg',
          },
          stats: [
            { value: 'CAD 65k–95k', label: 'Average Annual Salary' },
            { value: 'NCLEX-RN', label: 'Licensing Exam' },
            { value: 'Express Entry', label: 'PR Pathway' },
            { value: '12–18 Months', label: 'Typical Timeline' },
          ],
          intro: {
            badge: 'Why Canada for Nursing?',
            title: 'Why Nurses Choose Canada',
            html: '<p>Canada faces a significant healthcare worker shortage, making internationally trained nurses highly sought after. Eduflair guides you through licensing, NCLEX, job offers and immigration pathways.</p>',
            image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
          },
          featuresTitle: 'Why Nurses Choose Canada',
          features: [
            { title: 'Critical Nursing Shortage', desc: 'Canada faces a significant healthcare worker shortage, making internationally trained nurses highly sought after.' },
            { title: 'Competitive Salaries', desc: 'RNs earn CAD 65,000–95,000/year with excellent benefits, pension, and overtime opportunities.' },
            { title: 'Clear PR Pathway', desc: 'Canadian nursing experience qualifies for Express Entry (CEC) and many Provincial Nominee Programs (PNPs).' },
            { title: 'Family Sponsorship', desc: 'Once you have PR, you can sponsor your family members to join you in Canada.' },
            { title: 'Work-Life Balance', desc: 'Canadian healthcare offers structured shift work, union protections, and excellent working conditions.' },
          ],
          stepsBadge: 'Our Process',
          stepsTitle: 'How Eduflair Places You in Canada',
          steps: [
            { n: '01', title: 'Profile Assessment', desc: 'We evaluate your nursing qualifications, experience, IELTS score, and eligibility for Canadian nursing registration.' },
            { n: '02', title: 'NCLEX Preparation', desc: 'Guidance and resources for the NCLEX-RN exam, which is the mandatory nursing licensure test for Canada.' },
            { n: '03', title: 'Credential Evaluation', desc: 'Assistance with NNAS and provincial nursing college applications.' },
            { n: '04', title: 'Job Placement', desc: 'We connect you with verified Canadian healthcare employers actively hiring internationally trained nurses.' },
            { n: '05', title: 'Visa & Immigration', desc: 'Complete support for Temporary Foreign Worker Program, LMIA, and permanent residency pathways via Express Entry.' },
          ],
          faqsTitle: 'Nursing in Canada — FAQs',
          faqs: [
            { q: 'What exams do I need to work as a nurse in Canada?', a: 'You need to pass the NCLEX-RN (for RNs) or NCLEX-PN (for LPNs). You also need credentials assessed by NNAS and registered with the provincial nursing college.' },
            { q: 'Is IELTS required for nursing in Canada?', a: 'Yes. Most provincial nursing colleges require IELTS overall 7.0 with no component below 6.5.' },
            { q: 'How long does the process take?', a: 'Typically 12–18 months from assessment to arrival, including NCLEX preparation and credential verification.' },
            { q: 'Can I get PR in Canada as a nurse?', a: 'Yes. Nurses qualify for Federal Skilled Worker and Canadian Experience Class under Express Entry, plus many PNP streams.' },
            { q: 'What is the salary for nurses in Canada?', a: 'Registered Nurses earn CAD 65,000–95,000 per year on average, with higher salaries in Alberta and British Columbia.' },
          ],
          cta: {
            title: 'Start Your Canadian Nursing Journey',
            text: 'Book a free assessment with Eduflair\'s placement team and begin your path to a nursing career in Canada.',
          },
        }),
      },
      {
        key: 'nursing-australia',
        title: 'Nursing in Australia',
        path: '/nursing-australia',
        sections: destinationSections({
          hero: {
            badge: 'Placement Consultancy',
            title: 'Nursing Placement in Australia — AHPRA Registration & Skilled Migration',
            subtitle: 'Australia\'s growing healthcare sector is actively recruiting internationally trained nurses. Eduflair handles everything from OET coaching to AHPRA registration and visa.',
            image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
          },
          stats: [
            { value: 'AUD 65k–90k', label: 'Average Annual Salary' },
            { value: 'AHPRA', label: 'Registration Body' },
            { value: 'Subclass 189/190', label: 'PR Visa Options' },
            { value: 'OET / IELTS 7.0', label: 'English Requirement' },
          ],
          intro: {
            badge: 'Why Australia for Nursing?',
            title: 'Why Choose Australia for Your Nursing Career?',
            html: '<p>Support for AHPRA, OET/IELTS, and skilled migration for registered nurses targeting Australia.</p>',
            image: '/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg',
          },
          featuresTitle: 'Why Choose Australia',
          features: [
            { title: 'High Demand for Nurses', desc: 'Australia faces a critical nursing shortage, with thousands of internationally trained nurses recruited every year.' },
            { title: 'Competitive Pay & Benefits', desc: 'AUD 65,000–90,000 annually with strong union protections, overtime, and excellent working conditions.' },
            { title: 'Skilled Migration PR Pathway', desc: 'Nursing is on Australia\'s MLTSSL — a direct pathway to PR.' },
            { title: 'High Quality of Life', desc: 'Sydney, Melbourne, Brisbane, and Perth consistently rank among the world\'s most liveable cities.' },
            { title: 'English-Speaking Environment', desc: 'No language barrier to daily life and work — a major advantage for Indian nurses.' },
          ],
          faqsTitle: 'Nursing in Australia — FAQs',
          faqs: [
            { q: 'What registration is required to nurse in Australia?', a: 'You must register with AHPRA after having your qualifications assessed and passing the NCLEX or OSCE if required.' },
            { q: 'Is English required for nursing in Australia?', a: 'Yes. You need either OET (Grade B in all components) or IELTS Academic (overall 7.0, no component below 7.0).' },
            { q: 'What is the salary for nurses in Australia?', a: 'Registered Nurses earn AUD 65,000–90,000 per year. Specialty and ICU nurses can earn more.' },
            { q: 'Can I get PR in Australia as a nurse?', a: 'Yes. Nurses are on the skilled occupation list and eligible for Subclass 189 and 190 visas.' },
            { q: 'Does Eduflair help with OET preparation?', a: 'Yes. Eduflair Language Academy offers OET coaching for nurses planning to work in Australia.' },
          ],
          cta: { title: 'Begin Your Australian Nursing Career', text: 'Contact Eduflair for a free placement assessment and start your OET coaching today.' },
        }),
      },
      {
        key: 'nursing-germany',
        title: 'Nursing in Germany',
        path: '/nursing-germany',
        sections: destinationSections({
          hero: {
            badge: 'Placement Consultancy',
            title: 'Nursing Placement in Germany — Secure Career with PR Pathway',
            subtitle: 'Germany urgently needs qualified nurses. Eduflair provides A1–B2 German training, qualification recognition support, and direct employer placements.',
            image: '/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg',
          },
          stats: [
            { value: '€2,200–3,500', label: 'Monthly Salary' },
            { value: 'B2 German', label: 'Language Requirement' },
            { value: '2 Years', label: 'Path to PR' },
            { value: 'Recognised', label: 'Indian Qualifications' },
          ],
          intro: {
            badge: 'Why Germany for Nursing?',
            title: 'Why Nurses Choose Germany',
            html: '<p>German language training plus placement into nursing and healthcare Ausbildung roles with a clear PR pathway.</p>',
            image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
          },
          featuresTitle: 'Why Nurses Choose Germany',
          features: [
            { title: 'Critical Nursing Shortage', desc: 'Germany needs 500,000+ additional healthcare workers by 2030.' },
            { title: 'Excellent Salary & Benefits', desc: '€2,200–€3,500/month with full health insurance, pension, and generous leave.' },
            { title: 'Permanent Residency Pathway', desc: 'After 2 years of permanent employment, you can apply for PR.' },
            { title: 'Job Security', desc: 'Healthcare workers in Germany have some of the strongest employment protections in Europe.' },
            { title: 'Ausbildung Option', desc: 'Nursing Ausbildung leads directly to full recognition and employment.' },
          ],
          faqsTitle: 'Nursing in Germany — FAQs',
          faqs: [
            { q: 'Is German language mandatory for nursing in Germany?', a: 'Yes. B2 German is the minimum requirement. Many hospitals require C1 for clinical communication.' },
            { q: 'What is the Anerkennungsverfahren (recognition process)?', a: 'Getting your Indian nursing qualification recognised by a German state — document translation, notarisation, and submission.' },
            { q: 'Do I need to requalify to nurse in Germany?', a: 'If partially recognised, you may need a practical adaptation measure (Anpassungslehrgang) of 3–12 months.' },
            { q: 'What is the salary for nurses in Germany?', a: 'Nurses earn €2,200–€3,500/month gross, with a 13th month bonus in many institutions.' },
            { q: 'Can I get PR in Germany as a nurse?', a: 'Yes. After 2 years of permanent employment you can apply for the Niederlassungserlaubnis.' },
          ],
          cta: { title: 'Start Your Nursing Career in Germany', text: 'Enrol in German language training and begin your journey toward a nursing career in Germany with Eduflair.' },
        }),
      },
      {
        key: 'other-nursing-destinations',
        title: 'Other Nursing Destinations',
        path: '/other-nursing-destinations',
        sections: destinationSections({
          hero: {
            badge: 'Placement Consultancy',
            title: 'Other Popular Nursing Placement Destinations',
            subtitle: 'Nursing opportunities in UK, Ireland, New Zealand, USA, UAE, and more — with Eduflair\'s complete placement support.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
          },
          intro: {
            badge: 'Explore Options',
            title: 'Nursing Placement Destinations',
            html: '<p>Each country offers unique salary structures, visa types, and career progression. Our counsellors will help you choose the right destination.</p>',
          },
          featuresTitle: 'Nursing Placement Destinations',
          featuresSubtitle: 'Compare salaries, visas, and registration requirements',
          features: [
            { title: 'United Kingdom', desc: '£28,000–£45,000/yr · Health & Care Worker Visa · NMC registration · IELTS 7.0 or OET Grade B.', icon: '🇬🇧' },
            { title: 'Ireland', desc: '€35,000–€55,000/yr · Critical Skills Permit · NMBI · IELTS 6.5 or OET Grade B.', icon: '🇮🇪' },
            { title: 'New Zealand', desc: 'NZD 55,000–80,000/yr · Accredited Employer Work Visa · Nursing Council · IELTS 7.0 or OET Grade B.', icon: '🇳🇿' },
            { title: 'United States', desc: 'USD 70,000–95,000/yr · EB-3 · NCLEX-RN + State Board · IELTS 6.5 or TOEFL.', icon: '🇺🇸' },
            { title: 'UAE / Gulf', desc: 'AED 8,000–15,000/mo tax-free · Employment Visa · MOH/DHA/HAAD · English preferred.', icon: '🇦🇪' },
          ],
          cta: { title: 'Explore Nursing Destinations', text: 'Book a free counselling session to find the right nursing destination for your goals.' },
        }),
      },
    ],
  },
  {
    id: 'about',
    label: 'About & Contact',
    pages: [
      {
        key: 'our-story',
        title: 'Our Story',
        path: '/our-story',
        sections: [
          ...destinationSections({
            hero: {
              badge: 'About Eduflair',
              title: 'Our Story',
              subtitle: "From a vision to transform education in Kerala, to becoming one of India's most trusted consultancies.",
              image: '/images/C0107430-1-rmixu2pffp49hjn6t76z1ksy1ub8810r55opfztx80.jpg',
            },
            intro: {
              badge: 'Who We Are',
              title: 'About Eduflair Learning Solutions',
              html: "<p>Eduflair Learning Solutions Pvt. Ltd. is Kerala's leading overseas education consultancy and language training institute.</p>",
            },
          }),
          {
            id: 'timeline',
            title: 'Timeline chapters',
            fields: [
              {
                key: 'timeline',
                type: 'list',
                label: 'Chapters',
                itemFields: [
                  { key: 'year', type: 'text', label: 'Label (e.g. Chapter 1)' },
                  { key: 'title', type: 'text', label: 'Title' },
                  { key: 'desc', type: 'text', label: 'Description' },
                ],
                default: [
                  { year: 'Chapter 1', title: 'Founding Vision', desc: "Established to empower Kerala's youth with skills and guidance for international growth." },
                  { year: 'Chapter 2', title: 'Growth and Expansion', desc: 'Expanded from a small Kerala initiative to a recognised education and placement provider.' },
                  { year: 'Chapter 3', title: 'Commitment to Excellence', desc: 'Built industry-leading success rates through quality education and expert counselling.' },
                ],
              },
            ],
          },
          {
            id: 'values',
            title: 'Core values',
            fields: [
              {
                key: 'values',
                type: 'list',
                label: 'Values',
                itemFields: CARD_ITEM,
                default: [
                  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every service we deliver.', icon: '⭐' },
                  { title: 'Growth Mindset', desc: 'We embrace learning, adaptation, and continuous improvement.', icon: '📈' },
                  { title: 'Collaboration', desc: 'We work as a team — with colleagues, students, and global partners.', icon: '🤝' },
                  { title: 'Integrity & Empathy', desc: "We operate with honesty and deep respect for every student's journey.", icon: '💙' },
                  { title: 'Transformation', desc: 'We believe in fostering growth that changes lives permanently.', icon: '✨' },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 'meet-the-founders',
        title: 'Meet the Founders',
        path: '/meet-the-founders',
        sections: [
          ...destinationSections({
            hero: {
              badge: 'About Eduflair',
              title: 'Meet The Founders',
              subtitle: 'The people behind Eduflair\'s mission to transform education and careers across Kerala.',
              image: '/images/DSC01527-1-924x520.jpg',
            },
            intro: {
              badge: 'Leadership',
              title: 'The Vision Behind Eduflair',
              html: '<p>Meet the founders who built Eduflair into one of Kerala\'s most trusted overseas education and career consultancies.</p>',
            },
            cta: {
              title: 'Ready to Start Your Journey?',
              text: 'Meet our team in person — visit our Calicut office or book a free online consultation.',
            },
          }),
          {
            id: 'founders',
            title: 'Founder profiles',
            description: 'Edit each founder — photo, name, role, bio',
            fields: [
              {
                key: 'founders',
                type: 'list',
                label: 'Founders',
                itemFields: [
                  { key: 'name', type: 'text', label: 'Name' },
                  { key: 'role', type: 'text', label: 'Role / title' },
                  { key: 'photo', type: 'image', label: 'Photo' },
                  { key: 'bio', type: 'html', label: 'Bio (HTML)' },
                  { key: 'quote', type: 'text', label: 'Quote' },
                ],
                default: [
                  {
                    name: 'Adv. K M Roy',
                    role: 'Chairman & Founder',
                    photo: '/images/Roy-1.jpg',
                    bio: '<p>Adv. K M Roy is a distinguished lawyer, educational consultant, and the founder of Eduflair Learning Solutions Pvt. Ltd. A rank holder in both LLM and LLB from Government Law College Kozhikode with a degree in Economics, he combines legal expertise with a deep passion for education and social impact.</p><p>From Malappuram, Kerala, he founded Eduflair to create a platform that guides students and professionals toward global education and career success. Under his visionary leadership, Eduflair has grown into one of Kerala\'s most trusted overseas education consultancies — helping hundreds of students secure Ausbildung placements, study abroad opportunities, and nursing careers in Germany, Canada, UK, and beyond.</p><p>He believes transformation begins with asking the right questions and making informed decisions. Every student\'s journey is unique — and with the right guidance, every goal is achievable.</p>',
                    quote: 'Education is the most powerful weapon which you can use to transform the world. — Nelson Mandela',
                  },
                  {
                    name: 'Sithara Roy',
                    role: 'Executive Director',
                    photo: '/images/Sithara-2.jpg',
                    bio: '<p>Sithara Roy is a dedicated career mentor, educational advisor, and the Executive Director of Eduflair Learning Solutions. With a strong academic background in language and communication, she brings a unique blend of pedagogical insight and student empowerment to everything Eduflair does.</p><p>Specialising in study abroad consulting, language training (German and IELTS), and personalised mentorship, Sithara has directly guided hundreds of students in navigating competitive global education landscapes. Her approach is holistic — she doesn\'t just guide students toward universities; she helps them discover their purpose.</p><p>She believes education\'s true power is transformation — that proper guidance converts passion into purpose, and every student deserves that chance.</p>',
                    quote: 'Even if we don\'t have the power to choose where we come from, we can still choose where we go from there. — Stephen Chbosky',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 'contact',
        title: 'Contact',
        path: '/contact',
        sections: [
          {
            id: 'hero',
            title: 'Contact header',
            fields: [
              { key: 'hero_badge', type: 'text', label: 'Badge', default: 'Get In Touch' },
              { key: 'hero_title', type: 'text', label: 'Title', default: 'Contact Us' },
            ],
          },
          {
            id: 'form',
            title: 'Form section',
            fields: [
              { key: 'form_heading', type: 'text', label: 'Form heading', default: 'Send Us a Message' },
              { key: 'sidebar_note', type: 'text', label: 'Success / sidebar note', default: 'A counsellor will be in touch within 24 hours.' },
            ],
          },
        ],
      },
      {
        key: 'shared',
        title: 'Shared site-wide CTAs',
        path: '—',
        sections: [
          {
            id: 'cta',
            title: 'Global “Need Assistance” block',
            fields: CTA({
              badge: "We're Here For You",
              title: 'Need Assistance?',
              text: 'Talk to our counsellors about Ausbildung, study abroad, language training, or placement.',
              button: 'Get Free Consultation',
            }),
          },
        ],
      },
    ],
  },
];

export function flattenRegistryPages() {
  return PAGE_GROUPS.flatMap((g) =>
    g.pages.map((p) => ({
      ...p,
      groupId: g.id,
      groupLabel: g.label,
      allowAddInGroup: !!g.allowAdd,
    }))
  );
}

export function getPageDef(pageKey) {
  return flattenRegistryPages().find((p) => p.key === pageKey) || null;
}

export function getGroup(groupId) {
  return PAGE_GROUPS.find((g) => g.id === groupId) || null;
}

/** Build default field rows for seeding / new pages */
export function fieldsForPageDef(pageDef) {
  const rows = [];
  (pageDef.sections || []).forEach((section) => {
    (section.fields || []).forEach((f) => {
      const storedType = f.type === 'list' ? 'json' : f.type;
      rows.push({
        field_key: f.key,
        field_type: storedType,
        label: f.label,
        value: toStoredValue(f.type, f.default ?? (f.type === 'list' ? [] : '')),
        section_id: section.id,
        section_title: section.title,
        itemFields: f.itemFields || null,
        ui_type: f.type,
      });
    });
  });
  return rows;
}

export function slugifyKey(text) {
  return (
    String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || `page-${Date.now()}`
  );
}

export function buildCustomDestinationPage({ title, groupId = 'study-abroad' }) {
  const key = slugifyKey(title);
  const group = getGroup(groupId);
  const path = `/p/${key}`;
  return {
    key,
    title,
    path,
    isCustom: true,
    groupId,
    groupLabel: group?.label || groupId,
    sections: destinationSections({
      hero: {
        badge: group?.label || 'New Page',
        title,
        subtitle: `Learn more about ${title} with Eduflair.`,
        image: '',
      },
      intro: {
        badge: 'Overview',
        title,
        html: `<p>Add your content for <strong>${title}</strong> here from the admin panel.</p>`,
        image: '',
      },
    }),
  };
}
