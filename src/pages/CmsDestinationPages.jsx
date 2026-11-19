import CmsPageView from '../components/CmsPageView';

/** Thin CMS-driven wrappers — edit all sections/images in Admin → Pages */

export function StudyInUKPage() {
  return (
    <CmsPageView
      pageKey="study-in-uk"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in UK' }]}
      defaults={{
        hero_badge: 'Study Abroad — UK',
        hero_title: 'Study In UK — World-Class Education & Global Career Opportunities',
        hero_subtitle: "Top-ranked universities, a 2-year post-study work visa, and access to one of the world's strongest job markets.",
        hero_image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '£11k–38k', label: 'Annual Tuition' },
          { value: '2 Years', label: 'Post-Study Work Visa' },
          { value: '3 Years', label: "Bachelor's Duration" },
          { value: 'Top 10', label: 'World Ranked Universities' },
        ],
        intro_badge: 'Why Study in UK?',
        intro_title: 'Why Choose the UK for Higher Education?',
        intro_html:
          '<p>Top-ranked universities, a 2-year Graduate Route work visa, and globally recognised degrees. Eduflair guides you through university selection, applications, IELTS, and visas.</p>',
        intro_image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
        features_title: 'Top Universities & Popular Courses',
        features_subtitle: 'Leading UK institutions and high-demand fields',
        features: [
          { title: 'University of Oxford', desc: 'World-class education and research excellence across all disciplines. (#1 UK)', icon: '🎓' },
          { title: 'University of Cambridge', desc: 'Excellence in science, engineering, humanities, and social sciences. (#2 UK)', icon: '🎓' },
          { title: 'Imperial College London', desc: 'STEM-focused, specialising in engineering, technology, and medicine. (#3 UK)', icon: '🎓' },
          { title: 'University College London (UCL)', desc: 'Research-intensive with strengths in medicine, law, and architecture. (#4 UK)', icon: '🎓' },
          { title: 'University of Edinburgh', desc: 'Innovation, research, and strong industry connections in Scotland. (Top 20 World)', icon: '🎓' },
          { title: 'Business & Management', desc: 'Very High demand — careers in Finance, Consulting, Marketing.', icon: '💼' },
          { title: 'Engineering & Technology', desc: 'Very High demand — Civil, Mechanical, Software careers.', icon: '⚙️' },
          { title: 'Data Science & AI', desc: 'Very High demand — Tech Companies, Analytics, Finance.', icon: '🤖' },
          { title: 'Healthcare & Medicine', desc: 'High demand — NHS, Private Sector, Research careers.', icon: '🏥' },
          { title: 'Law & Social Sciences', desc: 'High demand — Legal Firms, Government, NGOs.', icon: '⚖️' },
        ],
        faqs_title: 'Study in UK — FAQs',
        faqs: [
          { q: 'What is the Graduate Route (post-study work visa) in the UK?', a: 'The Graduate Route allows international students to stay in the UK for 2 years (3 for PhD) after graduation to work or look for work.' },
          { q: 'How much does it cost to study in the UK?', a: 'Tuition fees for international students range from £11,000–£38,000 per year. Living costs are approximately £1,100/month.' },
          { q: 'Do I need IELTS to study in the UK?', a: 'Yes, most UK universities require IELTS Academic with an overall band of 6.5–7.0, with no component below 6.0.' },
          { q: 'Can I work while studying in the UK?', a: 'Yes, international students can work up to 20 hours per week during term time and full-time during vacations.' },
          { q: 'How long are degrees in the UK?', a: "Bachelor's degrees are typically 3 years, Master's programmes are 1 year — making UK education faster and more cost-effective than many other destinations." },
        ],
        cta_title: 'Start Your UK Journey Today!',
        cta_text: "Get expert guidance on UK university applications, visa, and scholarships from Eduflair's counsellors.",
      }}
    />
  );
}

export function StudyInGermanyPage() {
  return (
    <CmsPageView
      pageKey="study-in-germany"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Germany' }]}
      defaults={{
        hero_badge: 'Study Abroad — Germany',
        hero_title: 'Study In Germany — Tuition-Free Education & Career Opportunities',
        hero_subtitle: 'World-renowned universities, zero tuition at public institutions, 18-month post-study work visa, and a direct pathway to PR.',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '100% Free', label: 'Public University Tuition' },
          { value: '18 Months', label: 'Post-Study Work Visa' },
          { value: '€934/mo', label: 'Avg. Living Costs' },
          { value: '20 hrs/wk', label: 'Part-time Work Allowed' },
        ],
        intro_badge: 'Why Study in Germany?',
        intro_title: 'Why Choose Germany for Your Studies?',
        intro_html: '<p>Germany offers tuition-free public universities, strong engineering & IT careers, and a clear path from study to work and PR.</p>',
        intro_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
        features_title: 'Top Universities in Germany',
        features: [
          { title: 'Technical University of Munich (TUM)', desc: "Germany's top-ranked university for engineering, technology, and innovation.", icon: '🎓' },
          { title: 'Ludwig Maximilian University of Munich (LMU)', desc: 'Leading research university with a global reputation in medicine, humanities, and law.', icon: '🎓' },
          { title: 'Heidelberg University', desc: "Germany's oldest university, highly regarded for medicine and life sciences.", icon: '🎓' },
          { title: 'RWTH Aachen University', desc: 'Top destination for engineering and applied sciences with strong industry partnerships.', icon: '🎓' },
          { title: 'University of Mannheim', desc: 'Leading university for business, economics, and management in Europe.', icon: '🎓' },
          { title: 'Tuition-Free Public Universities', desc: 'Study at world-renowned universities with zero tuition fees — even as an international student.', icon: '💶' },
        ],
        faqs_title: 'Study in Germany — FAQs',
        faqs: [
          { q: 'Is education really free in Germany?', a: 'Yes. Public universities do not charge tuition for undergraduate and most postgraduate courses. Only small semester fees (€150–350) apply.' },
          { q: 'Do I need German language skills to study in Germany?', a: 'For German-taught programmes, B2–C1 German is required. Many English-taught programmes are also available.' },
          { q: 'What is a blocked account and do I need one?', a: 'A blocked account (Sperrkonto) is required for the German student visa. You need to deposit approximately €11,208 per year.' },
          { q: 'Can I work while studying in Germany?', a: 'Yes, international students can work up to 120 full days (or 240 half-days) per year.' },
          { q: 'What is the post-study work visa duration in Germany?', a: '18 months after completing your degree to find a job.' },
          { q: 'Can I apply for PR after studying in Germany?', a: 'Yes. After securing employment and meeting residence requirements, you can apply for permanent residency.' },
        ],
        cta_title: 'Start Your Germany Journey',
        cta_text: 'Talk to Eduflair about tuition-free universities, blocked accounts, and German language pathways.',
      }}
    />
  );
}

export function StudyInCanadaPage() {
  return (
    <CmsPageView
      pageKey="study-in-canada"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Canada' }]}
      defaults={{
        hero_badge: 'Study Abroad — Canada',
        hero_title: 'Study In Canada — Top Universities, Courses & PR Opportunities',
        hero_subtitle: "High-quality education, a 3-year post-graduation work permit, and one of the world's most accessible PR pathways.",
        hero_image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: 'CAD 20k–36k', label: 'Annual Tuition' },
          { value: 'Up to 3 Yrs', label: 'Post-Study Work Permit' },
          { value: '24 hrs/wk', label: 'Part-time Work' },
          { value: 'Express Entry', label: 'PR Pathway' },
        ],
        intro_badge: 'Why Canada?',
        intro_title: 'Why Choose Canada for Higher Education?',
        intro_html: '<p>Canada combines excellent universities with post-graduation work permits and Express Entry PR opportunities.</p>',
        intro_image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80',
        features_title: 'Top Universities in Canada',
        features: [
          { title: 'University of Toronto', desc: "Canada's top-ranked university, known for cutting-edge research and innovation.", icon: '🎓' },
          { title: 'University of British Columbia (UBC)', desc: 'Leading institution for engineering, business, and sustainability in Vancouver.', icon: '🎓' },
          { title: 'McGill University', desc: 'Globally renowned for medicine, law, and science in Montreal.', icon: '🎓' },
          { title: 'University of Alberta', desc: 'Recognised for engineering, energy research, and artificial intelligence.', icon: '🎓' },
          { title: 'University of Waterloo', desc: 'Famous for co-op programmes and tech-focused courses with industry exposure.', icon: '🎓' },
          { title: 'Excellent PR Opportunities', desc: 'Express Entry and PNPs make Canada one of the easiest countries to get permanent residency.', icon: '🏠' },
        ],
        faqs_title: 'Study in Canada — FAQs',
        faqs: [
          { q: 'What is the Post-Graduation Work Permit (PGWP)?', a: 'The PGWP allows international graduates to work in Canada for up to 3 years after completing their studies — a major step toward PR.' },
          { q: 'How can I get PR in Canada after studying?', a: 'Through Express Entry (FSW or CEC) or Provincial Nominee Programs after gaining Canadian work experience.' },
          { q: 'What are the tuition fees in Canada?', a: 'Undergraduate tuition ranges from CAD 20,000–36,100/year. Graduate programmes average CAD 21,100/year.' },
          { q: 'Can I work while studying in Canada?', a: 'Yes, up to 24 hours per week off-campus during academic sessions and full-time during breaks.' },
          { q: 'Is IELTS required for Canadian universities?', a: 'Yes. Most universities require IELTS Academic with a minimum overall band of 6.5.' },
        ],
        cta_title: 'Start Your Canada Journey',
        cta_text: 'Get counselling on Canadian universities, PGWP, and Express Entry pathways.',
      }}
    />
  );
}

export function StudyInIrelandPage() {
  return (
    <CmsPageView
      pageKey="study-in-ireland"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Ireland' }]}
      defaults={{
        hero_badge: 'Study Abroad — Ireland',
        hero_title: 'Study In Ireland — English-Speaking EU with Strong Career Prospects',
        hero_subtitle: "English-taught degrees, a 2-year post-study work visa, and access to Ireland's booming tech and pharma industries.",
        hero_image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '€9k–25k', label: 'Annual Tuition' },
          { value: 'Up to 2 Yrs', label: 'Stay-Back Visa' },
          { value: '20 hrs/wk', label: 'Part-time Work' },
          { value: 'English', label: 'Language of Instruction' },
        ],
        intro_badge: 'Why Ireland?',
        intro_title: 'Why Choose Ireland for Higher Education?',
        intro_html: '<p>Ireland offers English-taught degrees, strong IT & pharma industries, and post-study work options in an EU country.</p>',
        features_title: 'Top Universities in Ireland',
        features: [
          { title: 'Trinity College Dublin', desc: "Ireland's oldest and most prestigious university, globally ranked.", icon: '🎓' },
          { title: 'University College Dublin', desc: "Ireland's largest university with strong industry links.", icon: '🎓' },
          { title: 'University of Limerick', desc: 'Renowned for cooperative education and paid work placements.', icon: '🎓' },
          { title: 'Dublin City University', desc: 'Leading technology and business university with multinational partners.', icon: '🎓' },
          { title: 'University of Galway', desc: 'Research excellence in engineering, medicine, and humanities.', icon: '🎓' },
          { title: 'Strong IT & Tech Industry', desc: 'Home to European HQs of Google, Apple, Facebook, and hundreds of tech firms.', icon: '💻' },
        ],
        faqs_title: 'Study in Ireland — FAQs',
        faqs: [
          { q: 'Can I stay and work in Ireland after studying?', a: 'Yes. Non-EEA graduates from Level 8 or higher can apply for the Third Level Graduate Scheme (up to 24 months).' },
          { q: 'Is Ireland English-speaking?', a: 'Yes. Ireland is an English-speaking EU country.' },
          { q: 'What are the tuition fees in Ireland?', a: 'International student tuition typically ranges from €9,850–€25,000 per year.' },
          { q: 'Can I work while studying in Ireland?', a: 'Yes, up to 20 hours/week during term and 40 hours/week during holidays.' },
          { q: 'Which industries are strong in Ireland?', a: 'IT, pharmaceuticals, medical devices, and financial services.' },
        ],
        cta_title: 'Explore Study in Ireland',
        cta_text: 'Book a free counselling session about Irish universities and stay-back visas.',
      }}
    />
  );
}

export function StudyInFrancePage() {
  return (
    <CmsPageView
      pageKey="study-in-france"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in France' }]}
      defaults={{
        hero_badge: 'Study Abroad — France',
        hero_title: 'Study In France — Affordable Tuition, Scholarships & European Careers',
        hero_subtitle: "World-class education in arts, fashion, engineering, and business — at some of Europe's most affordable tuition fees.",
        hero_image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '€170–380/yr', label: 'Public Uni Fees' },
          { value: '1 Year', label: 'Post-Study APS Permit' },
          { value: '~20 hrs/wk', label: 'Part-time Work' },
          { value: 'Eiffel', label: 'Scholarship Available' },
        ],
        intro_badge: 'Why France?',
        intro_title: 'Why Choose France for Higher Education?',
        intro_html: '<p>France offers affordable tuition, scholarships, and strengths in business, fashion, engineering and the arts.</p>',
        features_title: 'Top Universities in France',
        features: [
          { title: 'Sorbonne University', desc: "One of the world's oldest universities, renowned for arts, humanities, and sciences.", icon: '🎓' },
          { title: 'École Polytechnique', desc: "France's leading engineering school, known globally for science and engineering.", icon: '🎓' },
          { title: 'HEC Paris', desc: "Europe's top-ranked business school for MBA and management programmes.", icon: '🎓' },
          { title: 'Sciences Po Paris', desc: 'Global leader in political science, international relations, and public affairs.', icon: '🎓' },
          { title: 'Very Affordable Tuition', desc: 'Public universities charge as little as €170–380/year.', icon: '💶' },
          { title: 'Scholarship Opportunities', desc: 'Eiffel Excellence and Charpak scholarships for Indian students.', icon: '🏆' },
        ],
        faqs_title: 'Study in France — FAQs',
        faqs: [
          { q: 'Is it expensive to study in France?', a: 'Public university fees are very low (€170–€380/year for many programmes). Private schools range from €3,000–€12,000/year.' },
          { q: 'Are there scholarships for Indian students in France?', a: 'Yes. Eiffel Excellence, Charpak (Campus France India), and university-specific awards.' },
          { q: 'Can I work while studying in France?', a: 'Yes. Up to 964 hours per year (approximately 20 hours/week).' },
          { q: 'Is French language mandatory?', a: 'For French-taught programmes, yes. Many engineering and business schools offer English-taught programmes.' },
          { q: 'What post-study work rights are available in France?', a: 'After graduation, you can apply for a temporary residence permit (APS) for 1 year to find work.' },
        ],
        cta_title: 'Start Your France Journey',
        cta_text: 'Ask Eduflair about French universities, scholarships, and APS work rights.',
      }}
    />
  );
}

export function StudyInAustriaPage() {
  return (
    <CmsPageView
      pageKey="study-in-austria"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Study in Austria' }]}
      defaults={{
        hero_badge: 'Study Abroad — Austria',
        hero_title: 'Study In Austria — Low Fees, No Blocked Account Required',
        hero_subtitle: 'Quality European education in the heart of Central Europe — affordable fees, no blocked account requirement, and strong career exposure.',
        hero_image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '€726–1,500', label: 'Fees/Semester (Non-EU)' },
          { value: 'Not Required', label: 'Blocked Account' },
          { value: '20 hrs/wk', label: 'Part-time Work' },
          { value: 'Central EU', label: 'Location Advantage' },
        ],
        intro_badge: 'Why Austria?',
        intro_title: 'Why Choose Austria for Higher Education?',
        intro_html: '<p>Austria features low tuition fees, no blocked account requirement, and strong programmes in engineering, business, music and sciences.</p>',
        features_title: 'Top Universities in Austria',
        features: [
          { title: 'University of Vienna', desc: "Founded in 1365, Austria's largest and most esteemed university.", icon: '🎓' },
          { title: 'TU Wien', desc: "Vienna's leading technical university among Europe's top engineering schools.", icon: '🎓' },
          { title: 'Graz University of Technology', desc: 'Strong focus on engineering, IT, and natural sciences.', icon: '🎓' },
          { title: 'University of Innsbruck', desc: 'Renowned for science, medicine, and business with an alpine setting.', icon: '🎓' },
          { title: 'Vienna University of Economics (WU)', desc: 'The largest business and economics university in the EU.', icon: '🎓' },
          { title: 'No Blocked Account Required', desc: 'Unlike Germany, Austria does not mandate a blocked account for student visas.', icon: '✅' },
        ],
        faqs_title: 'Study in Austria — FAQs',
        faqs: [
          { q: 'Do I need a blocked account for Austria?', a: 'No. Austria does not require a blocked account for a student visa.' },
          { q: 'What are the tuition fees in Austria?', a: 'Non-EU students at public universities pay approximately €726–€1,500 per semester.' },
          { q: 'Can I study in English in Austria?', a: "Yes. Many universities offer English-taught programmes, especially at Master's level." },
          { q: 'Is German required for life in Austria?', a: 'Basic German is very helpful, though many international students manage with English in Vienna.' },
          { q: 'What are the job opportunities in Austria?', a: 'Strong opportunities in engineering, IT, tourism, healthcare, and finance.' },
        ],
        cta_title: 'Explore Study in Austria',
        cta_text: 'Get free counselling on Austrian universities and visa requirements.',
      }}
    />
  );
}

export function OtherDestinationsPage() {
  return (
    <CmsPageView
      pageKey="other-destinations"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Other Destinations' }]}
      defaults={{
        hero_badge: 'Study Abroad',
        hero_title: 'Other Popular Study Destinations',
        hero_subtitle: 'Beyond UK, Germany, Canada, Ireland, France, and Austria — explore more study options supported by Eduflair.',
        hero_image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
        intro_badge: 'Explore More',
        intro_title: 'More Study Abroad Destinations We Support',
        intro_html:
          '<p>Every destination has unique advantages. Our counsellors will help you find the right fit for your goals, budget, and career plans.</p>',
        features_title: 'More Study Abroad Destinations We Support',
        features_subtitle: 'Compare options and talk to our counsellors for the right fit',
        features: [
          { title: 'Australia', desc: 'Top QS universities, 2–4 year post-study work visa, clear PR pathway via skilled migration.', icon: '🇦🇺' },
          { title: 'USA', desc: "World's largest higher education system, OPT/STEM OPT work rights, top research universities.", icon: '🇺🇸' },
          { title: 'New Zealand', desc: 'Post-study work right of 1–3 years, peaceful lifestyle, strong agriculture and tech sectors.', icon: '🇳🇿' },
          { title: 'Sweden', desc: 'Strong engineering and design programmes, free education for PhD students, innovative work culture.', icon: '🇸🇪' },
          { title: 'Norway', desc: 'Low tuition fees at public universities, strong oil & gas and maritime industries.', icon: '🇳🇴' },
          { title: 'Denmark', desc: 'Tuition-free for EU students, excellent life sciences and design programmes, high quality of life.', icon: '🇩🇰' },
          { title: 'Netherlands', desc: "Wide range of English-taught programmes, one of Europe's most international student populations.", icon: '🇳🇱' },
          { title: 'Finland', desc: 'World-leading education system, strong engineering and ICT sectors, excellent quality of life.', icon: '🇫🇮' },
          { title: 'Switzerland', desc: 'Home to ETH Zurich (top 10 world), strong finance and pharma industries, excellent salaries.', icon: '🇨🇭' },
          { title: 'Italy', desc: 'Rich cultural heritage, strong design and fashion programmes, affordable Mediterranean lifestyle.', icon: '🇮🇹' },
          { title: 'Spain', desc: 'Vibrant culture, growing tech startup ecosystem, affordable living costs in major cities.', icon: '🇪🇸' },
        ],
        cta_title: 'Find Your Perfect Study Destination',
        cta_text: 'Let Eduflair match you with the right country, university, and programme for your goals.',
      }}
    />
  );
}
