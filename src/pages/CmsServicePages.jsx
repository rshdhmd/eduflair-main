import CmsPageView from '../components/CmsPageView';

/** CMS-driven service / placement / language child pages */

export function ApplicationProcessPage() {
  return (
    <CmsPageView
      pageKey="application-process"
      breadcrumbs={[{ label: 'Study Abroad', href: '/study-abroad' }, { label: 'Application Process' }]}
      defaults={{
        hero_badge: 'Study Abroad',
        hero_title: 'Study Abroad Application Process — Step-by-Step Guide',
        hero_subtitle: 'From your first consultation to your first day abroad — Eduflair handles every step of the journey.',
        hero_image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1600&q=80',
        intro_badge: 'How It Works',
        intro_title: 'Your End-to-End Study Abroad Journey',
        intro_html:
          '<p>Applying to study abroad can feel overwhelming — but with Eduflair by your side, every step is clear, organised, and stress-free. Our 8-step process ensures nothing is missed, from choosing the right university to landing at your destination.</p>',
        steps_badge: 'Our Process',
        steps_title: '8-Step Application Process',
        steps: [
          { n: '01', title: 'Free Initial Consultation', desc: 'Book a free session with our counsellors. We assess your academic background, budget, career goals, and preferred destination to create a personalised action plan.' },
          { n: '02', title: 'Course & University Selection', desc: 'We shortlist universities and programmes based on your eligibility, budget, and career goals — covering rankings, acceptance rates, and scholarship availability.' },
          { n: '03', title: 'Language Test Preparation', desc: 'If required, we enrol you in our in-house IELTS, German, or OET coaching at Eduflair Language Academy to meet language requirements.' },
          { n: '04', title: 'Application & Documentation', desc: 'We prepare SOP, LOR, CV, academic transcripts, and submit applications to universities on your behalf.' },
          { n: '05', title: 'Offer Letter & Acceptance', desc: 'Once you receive admission offers, we help you evaluate and select the best offer, and guide you through accepting it and paying the deposit.' },
          { n: '06', title: 'Scholarship Application', desc: 'We identify available scholarships and bursaries and assist with scholarship applications to reduce your financial burden.' },
          { n: '07', title: 'Visa Application & Embassy Prep', desc: 'We prepare your complete visa file and provide mock interviews for embassy appointments.' },
          { n: '08', title: 'Pre-Departure & Accommodation', desc: 'Comprehensive pre-departure orientation — accommodation, packing list, banking, local transport, and cultural tips.' },
        ],
        cta_title: 'Ready to Start Your Application?',
        cta_text: "Book a free consultation today — let's build your personalised action plan for studying abroad.",
      }}
    />
  );
}

export function IELTSCoachingPage() {
  return (
    <CmsPageView
      pageKey="ielts-coaching"
      breadcrumbs={[{ label: 'Language Academy', href: '/language-academy' }, { label: 'IELTS Coaching' }]}
      defaults={{
        hero_badge: 'Language Academy',
        hero_title: 'Master IELTS with Eduflair',
        hero_subtitle: 'Expert IELTS coaching in Calicut — proven strategies, all four modules, and mock tests to get you to band 7+.',
        hero_image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80',
        intro_badge: 'About the Exam',
        intro_title: 'About IELTS — Your Gateway to Study, Work & Migration',
        intro_html:
          "<p>The International English Language Testing System (IELTS) is the world's most popular English proficiency test, accepted by over 11,000 organisations in 140+ countries. It assesses Listening, Reading, Writing and Speaking. Available in Academic and General Training formats. Scores range from Band 0–9. Most institutions require Band 6.5–7.5.</p>",
        features_title: 'IELTS Training Programmes at Eduflair',
        features_subtitle: 'Choose the programme that fits your timeline',
        features: [
          { title: '1-Month Fast Track', desc: 'Intensive daily coaching for students with a solid English base. Focus on exam strategy and timed mock tests.', icon: '⚡' },
          { title: '2-Month Comprehensive', desc: 'Complete module-by-module training covering all four skills with regular feedback and progress tracking.', icon: '⭐' },
          { title: 'Full Module Training', desc: 'In-depth coverage of Listening, Reading, Writing, and Speaking with expert feedback on each component.', icon: '📚' },
          { title: 'Online IELTS Coaching', desc: 'Live online sessions — ideal for working professionals and outstation students. Same quality curriculum.', icon: '💻' },
          { title: 'Expert Trainers', desc: 'IELTS-certified instructors with deep knowledge of the exam format and scoring criteria.', icon: '👨‍🏫' },
          { title: 'Mock Tests & Feedback', desc: 'Regular full-length mock tests with detailed score analysis and personalised feedback.', icon: '📝' },
        ],
        faqs_title: 'IELTS Coaching — FAQs',
        faqs: [
          { q: 'What is the IELTS minimum score for UK universities?', a: 'Most UK universities require an overall band of 6.5–7.0 with no individual component below 6.0.' },
          { q: 'How many times can I take the IELTS exam?', a: 'There is no limit. You can retake IELTS as many times as needed, with most centres offering sittings every week.' },
          { q: 'What is the difference between Academic and General IELTS?', a: 'Academic IELTS is for university admissions. General Training is for work visas and immigration (Canada, Australia, UK Skilled Worker).' },
          { q: 'How long is the IELTS score valid?', a: 'IELTS scores are valid for 2 years from the date of the test.' },
          { q: 'What band score do I need for Canada PR?', a: 'For Express Entry (Federal Skilled Worker), you typically need CLB 7, which corresponds to IELTS 6.0 in each component.' },
          { q: 'Does Eduflair help with IELTS registration?', a: 'Yes, we assist students with IELTS exam registration and scheduling at centres in Calicut and nearby cities.' },
        ],
        cta_title: 'Start Your IELTS Journey Today',
        cta_text: "Enrol in Eduflair's IELTS coaching programme and achieve the band score you need.",
      }}
    />
  );
}

export function GermanLanguagePage() {
  return (
    <CmsPageView
      pageKey="german-language"
      breadcrumbs={[{ label: 'Language Academy', href: '/language-academy' }, { label: 'German Language' }]}
      defaults={{
        hero_badge: 'Language Academy',
        hero_title: 'Learn German — Build a Bright Future with Eduflair',
        hero_subtitle: 'From A1 Beginner to B2 Certified — structured, exam-focused German language training in Calicut, Kerala.',
        hero_image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
        stats: [
          { value: '8 Months', label: 'Programme Duration' },
          { value: '200+ Hours', label: 'Total Instruction' },
          { value: 'A1 to B2', label: 'Levels Covered' },
          { value: '95%+', label: 'Exam Pass Rate' },
        ],
        intro_badge: 'Why German?',
        intro_title: 'Why Learn German?',
        intro_html:
          "<p>German is the gateway to Europe's largest economy. Whether you're pursuing Ausbildung, planning to study at a tuition-free German university, or seeking a healthcare career in Germany — B2 German is your key.</p>",
        intro_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
        features_title: 'German Language Courses — A1 to B2',
        features_subtitle: 'Daily 4-hour classes with weekly Saturday assessment tests.',
        features: [
          { title: 'A1 — Beginner', desc: 'Greetings, basic vocabulary, numbers, introductions. No prior knowledge required.', icon: 'A1' },
          { title: 'A2 — Elementary', desc: 'Daily conversations, shopping, travel, simple descriptions and routines.', icon: 'A2' },
          { title: 'B1 — Intermediate', desc: 'Express opinions, understand workplace instructions, read simple texts.', icon: 'B1' },
          { title: 'B2 — Upper-Intermediate', desc: 'Required for Ausbildung & university admission. Fluent workplace communication, complex grammar.', icon: 'B2' },
          { title: "India's No:1 Language Institute", desc: 'Trusted by thousands of students who have achieved B2 and secured placements in Germany.', icon: '🏆' },
          { title: 'Expert Trainers', desc: 'Our trainers are TELC/Goethe certified with years of experience in exam-focused coaching.', icon: '👨‍🏫' },
          { title: 'Nursing-Specific Curriculum', desc: 'Specialised German modules for healthcare workers including medical terminology.', icon: '🩺' },
          { title: 'Small Batch Sizes', desc: 'Maximum 15 students per batch for personalised attention and faster progress.', icon: '👥' },
          { title: 'Online & Offline Modes', desc: 'Flexible timings for working professionals. Weekend batches available.', icon: '💻' },
        ],
        faqs_title: 'German Language Training — FAQs',
        faqs: [
          { q: 'How long does it take to reach B2 level from scratch?', a: 'Approximately 8 months with our structured A1 to B2 programme (200+ hours of instruction).' },
          { q: 'Which German exam should I take — Goethe or TELC?', a: 'Both are accepted for Ausbildung. Our counsellors will recommend the right one based on your goals and timeline.' },
          { q: 'Are classes available on weekends?', a: 'Yes. We offer weekend batches for working professionals and students with college schedules.' },
          { q: 'Is online German coaching available?', a: 'Yes. We offer live online and in-person classes with the same quality curriculum.' },
          { q: 'Do I need German for Ausbildung in all fields?', a: 'Yes. B2 is the minimum requirement across all Ausbildung fields including nursing, IT, and logistics.' },
        ],
        cta_title: 'Start Learning German Today',
        cta_text: "Join Kerala's most trusted German language programme and get B2 certified with Eduflair.",
      }}
    />
  );
}

export function OETPage() {
  return (
    <CmsPageView
      pageKey="oet"
      breadcrumbs={[{ label: 'Language Academy', href: '/language-academy' }, { label: 'OET' }]}
      defaults={{
        hero_badge: 'Language Academy',
        hero_title: 'OET Coaching — Occupational English Test for Healthcare Professionals',
        hero_subtitle: 'Specialised OET preparation for nurses, doctors, dentists, and all registered healthcare professionals at Eduflair Language Academy.',
        hero_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
        intro_badge: 'About the Exam',
        intro_title: 'What is the OET?',
        intro_html:
          '<p>The Occupational English Test (OET) is an internationally recognised English language test designed specifically for healthcare professionals. Unlike general English tests, OET uses healthcare-specific materials — making it far more relevant for nurses, doctors, and allied health workers. OET is accepted by healthcare regulators in the UK, Australia, Ireland, Canada, New Zealand, UAE, and over 20 countries.</p>',
        features_title: 'Why Choose Eduflair for OET',
        features: [
          { title: 'Healthcare-Specific Training', desc: 'All materials use clinical settings relevant to nurses and doctors.', icon: '🩺' },
          { title: 'Grade B Target', desc: 'Focused coaching to achieve Grade B (IELTS 7.0 equivalent) in all four sub-tests.', icon: '🎯' },
          { title: '4–8 Week Programmes', desc: 'Intensive and regular batch options based on your current English level.', icon: '📅' },
          { title: 'Nursing', desc: 'OET preparation tailored for nursing registration pathways.', icon: '👩‍⚕️' },
          { title: 'Medicine', desc: 'Clinical communication practice for doctors and medical professionals.', icon: '⚕️' },
          { title: 'Allied Health', desc: 'Support for physiotherapy, pharmacy, dentistry and related professions.', icon: '💊' },
        ],
        faqs_title: 'OET Coaching — FAQs',
        faqs: [
          { q: 'What is OET and who needs it?', a: 'OET is an English proficiency test for healthcare professionals, required for registration in UK, Australia, Ireland, Canada, UAE, and New Zealand.' },
          { q: 'What score do I need to pass OET?', a: 'Most regulators require Grade B in all four sub-tests: Listening, Reading, Writing, and Speaking.' },
          { q: 'How is OET different from IELTS?', a: 'OET is healthcare-specific — all materials are from clinical settings. IELTS uses general academic topics.' },
          { q: 'How long is OET training at Eduflair?', a: 'Our OET programme runs for 4–8 weeks depending on your current English level.' },
          { q: 'Is OET accepted in the UK for NMC registration?', a: 'Yes. The NMC accepts OET as proof of English proficiency for international nurses.' },
          { q: 'Can I take OET online?', a: 'Yes. OET is available in paper-based and computer-based formats at test centres.' },
        ],
        cta_title: 'Start OET Preparation',
        cta_text: 'Enrol in Eduflair OET coaching and take the next step toward your healthcare career abroad.',
      }}
    />
  );
}

export function NursingCanadaPage() {
  return (
    <CmsPageView
      pageKey="nursing-canada"
      breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Nursing in Canada' }]}
      defaults={{
        hero_badge: 'Placement Consultancy',
        hero_title: 'Nursing Placement in Canada — Start Your Canadian Healthcare Career',
        hero_subtitle: 'From NCLEX preparation to job placement and Express Entry PR — Eduflair guides Indian nurses every step of the way.',
        hero_image: '/images/pl2.jpg',
        stats: [
          { value: 'CAD 65k–95k', label: 'Average Annual Salary' },
          { value: 'NCLEX-RN', label: 'Licensing Exam' },
          { value: 'Express Entry', label: 'PR Pathway' },
          { value: '12–18 Months', label: 'Typical Timeline' },
        ],
        intro_badge: 'Why Canada for Nursing?',
        intro_title: 'Why Nurses Choose Canada',
        intro_html:
          '<p>Canada faces a significant healthcare worker shortage, making internationally trained nurses highly sought after. Eduflair guides you through licensing, NCLEX, job offers and immigration pathways.</p>',
        intro_image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
        features_title: 'Why Nurses Choose Canada',
        features: [
          { title: 'Critical Nursing Shortage', desc: 'Canada faces a significant healthcare worker shortage, making internationally trained nurses highly sought after.' },
          { title: 'Competitive Salaries', desc: 'RNs earn CAD 65,000–95,000/year with excellent benefits, pension, and overtime opportunities.' },
          { title: 'Clear PR Pathway', desc: 'Canadian nursing experience qualifies for Express Entry (CEC) and many Provincial Nominee Programs (PNPs).' },
          { title: 'Family Sponsorship', desc: 'Once you have PR, you can sponsor your family members to join you in Canada.' },
          { title: 'Work-Life Balance', desc: 'Canadian healthcare offers structured shift work, union protections, and excellent working conditions.' },
        ],
        steps_badge: 'Our Process',
        steps_title: 'How Eduflair Places You in Canada',
        steps: [
          { n: '01', title: 'Profile Assessment', desc: 'We evaluate your nursing qualifications, experience, IELTS score, and eligibility for Canadian nursing registration.' },
          { n: '02', title: 'NCLEX Preparation', desc: 'Guidance and resources for the NCLEX-RN exam, which is the mandatory nursing licensure test for Canada.' },
          { n: '03', title: 'Credential Evaluation', desc: 'Assistance with NNAS (National Nursing Assessment Service) and provincial nursing college applications.' },
          { n: '04', title: 'Job Placement', desc: 'We connect you with verified Canadian healthcare employers actively hiring internationally trained nurses.' },
          { n: '05', title: 'Visa & Immigration', desc: 'Complete support for Temporary Foreign Worker Program, LMIA, and permanent residency pathways via Express Entry.' },
        ],
        faqs_title: 'Nursing in Canada — FAQs',
        faqs: [
          { q: 'What exams do I need to work as a nurse in Canada?', a: 'You need to pass the NCLEX-RN (for RNs) or NCLEX-PN (for LPNs). You also need your credentials assessed by NNAS and registered with the provincial nursing college.' },
          { q: 'Is IELTS required for nursing in Canada?', a: 'Yes. Most provincial nursing colleges require a high English proficiency score — typically IELTS overall 7.0 with no component below 6.5.' },
          { q: 'How long does the process take?', a: 'The complete process from assessment to arrival in Canada typically takes 12–18 months, including NCLEX preparation and credential verification.' },
          { q: 'Can I get PR in Canada as a nurse?', a: 'Yes. Nurses qualify for the Federal Skilled Worker Program and Canadian Experience Class under Express Entry, and many provinces have specific PNP streams for healthcare workers.' },
          { q: 'What is the salary for nurses in Canada?', a: 'Registered Nurses in Canada earn CAD 65,000–95,000 per year on average, with higher salaries in provinces like Alberta and British Columbia.' },
        ],
        cta_title: 'Start Your Canadian Nursing Journey',
        cta_text: "Book a free assessment with Eduflair's placement team and begin your path to a nursing career in Canada.",
      }}
    />
  );
}

export function NursingAustraliaPage() {
  return (
    <CmsPageView
      pageKey="nursing-australia"
      breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Nursing in Australia' }]}
      defaults={{
        hero_badge: 'Placement Consultancy',
        hero_title: 'Nursing Placement in Australia — AHPRA Registration & Skilled Migration',
        hero_subtitle: "Australia's growing healthcare sector is actively recruiting internationally trained nurses. Eduflair handles everything from OET coaching to AHPRA registration and visa.",
        hero_image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
        stats: [
          { value: 'AUD 65k–90k', label: 'Average Annual Salary' },
          { value: 'AHPRA', label: 'Registration Body' },
          { value: 'Subclass 189/190', label: 'PR Visa Options' },
          { value: 'OET / IELTS 7.0', label: 'English Requirement' },
        ],
        intro_badge: 'Why Australia for Nursing?',
        intro_title: 'Why Choose Australia for Your Nursing Career?',
        intro_html: '<p>Support for AHPRA, OET/IELTS, and skilled migration for registered nurses targeting Australia.</p>',
        intro_image: '/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg',
        features_title: 'Why Choose Australia',
        features: [
          { title: 'High Demand for Nurses', desc: 'Australia faces a critical nursing shortage, with thousands of internationally trained nurses recruited every year.' },
          { title: 'Competitive Pay & Benefits', desc: 'AUD 65,000–90,000 annually with strong union protections, overtime, and excellent working conditions.' },
          { title: 'Skilled Migration PR Pathway', desc: "Nursing is on Australia's Medium and Long-term Strategic Skills List (MLTSSL) — direct pathway to PR." },
          { title: 'High Quality of Life', desc: "Beautiful cities like Sydney, Melbourne, Brisbane, and Perth consistently rank among the world's most liveable." },
          { title: 'English-Speaking Environment', desc: 'No language barrier to daily life and work — a major advantage for Indian nurses.' },
        ],
        faqs_title: 'Nursing in Australia — FAQs',
        faqs: [
          { q: 'What registration is required to nurse in Australia?', a: 'You must register with AHPRA after having your qualifications assessed and passing the NCLEX or OSCE if required.' },
          { q: 'Is English required for nursing in Australia?', a: 'Yes. You need either OET (Grade B in all components) or IELTS Academic (overall 7.0, no component below 7.0 for nursing).' },
          { q: 'What is the salary for nurses in Australia?', a: 'Registered Nurses in Australia earn AUD 65,000–90,000 per year. Specialty and ICU nurses can earn significantly more.' },
          { q: 'Can I get PR in Australia as a nurse?', a: 'Yes. Nurses are on Australia\'s skilled occupation list and are eligible for Subclass 189 and 190 visas.' },
          { q: 'Does Eduflair help with OET preparation?', a: 'Yes. Eduflair Language Academy offers OET coaching for nurses and healthcare professionals planning to work in Australia.' },
        ],
        cta_title: 'Begin Your Australian Nursing Career',
        cta_text: 'Contact Eduflair for a free placement assessment and start your OET coaching today.',
      }}
    />
  );
}

export function NursingGermanyPage() {
  return (
    <CmsPageView
      pageKey="nursing-germany"
      breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Nursing in Germany' }]}
      defaults={{
        hero_badge: 'Placement Consultancy',
        hero_title: 'Nursing Placement in Germany — Secure Career with PR Pathway',
        hero_subtitle: 'Germany urgently needs qualified nurses. Eduflair provides A1–B2 German training, qualification recognition support, and direct employer placements.',
        hero_image: '/images/ChatGPT-Image-Apr-27-2026-07_43_16-PM-768x511.jpg',
        stats: [
          { value: '€2,200–3,500', label: 'Monthly Salary' },
          { value: 'B2 German', label: 'Language Requirement' },
          { value: '2 Years', label: 'Path to PR' },
          { value: 'Recognised', label: 'Indian Qualifications' },
        ],
        intro_badge: 'Why Germany for Nursing?',
        intro_title: 'Why Nurses Choose Germany',
        intro_html: '<p>German language training plus placement into nursing and healthcare Ausbildung roles with a clear PR pathway.</p>',
        intro_image: '/images/ChatGPT-Image-Apr-27-2026-07_28_15-PM-768x512.jpg',
        features_title: 'Why Nurses Choose Germany',
        features: [
          { title: 'Critical Nursing Shortage', desc: 'Germany needs 500,000+ additional healthcare workers by 2030 — creating massive demand for internationally trained nurses.' },
          { title: 'Excellent Salary & Benefits', desc: '€2,200–€3,500/month with full health insurance, pension contributions, and generous leave entitlements.' },
          { title: 'Permanent Residency Pathway', desc: 'After 2 years of permanent employment in Germany, you can apply for PR and eventually citizenship.' },
          { title: 'Job Security', desc: 'Healthcare workers in Germany have some of the strongest employment protections in Europe.' },
          { title: 'Ausbildung Option', desc: 'For those who want to train in Germany, the nursing Ausbildung programme leads directly to full recognition and employment.' },
        ],
        faqs_title: 'Nursing in Germany — FAQs',
        faqs: [
          { q: 'Is German language mandatory for nursing in Germany?', a: 'Yes. B2 German is the minimum requirement for all nursing positions. Many hospitals require C1 for clinical communication.' },
          { q: 'What is the Anerkennungsverfahren (recognition process)?', a: 'This is the process of getting your Indian nursing qualification recognised by a German state. Eduflair guides you through document translation, notarisation, and submission.' },
          { q: 'Do I need to requalify to nurse in Germany?', a: 'If your qualification is partially recognised, you may need to complete a practical adaptation measure (Anpassungslehrgang) of 3–12 months.' },
          { q: 'What is the salary for nurses in Germany?', a: 'Nurses earn €2,200–€3,500/month gross, with a 13th month bonus in many healthcare institutions.' },
          { q: 'Can I get PR in Germany as a nurse?', a: 'Yes. After 2 years of permanent employment you can apply for the Niederlassungserlaubnis (permanent residency permit).' },
        ],
        cta_title: 'Start Your Nursing Career in Germany',
        cta_text: 'Enrol in German language training and begin your journey toward a nursing career in Germany with Eduflair.',
      }}
    />
  );
}

export function OtherNursingPage() {
  return (
    <CmsPageView
      pageKey="other-nursing-destinations"
      breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Other Destinations' }]}
      defaults={{
        hero_badge: 'Placement Consultancy',
        hero_title: 'Other Popular Nursing Placement Destinations',
        hero_subtitle: "Nursing opportunities in UK, Ireland, New Zealand, USA, UAE, and more — with Eduflair's complete placement support.",
        hero_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
        intro_badge: 'Explore Options',
        intro_title: 'Nursing Placement Destinations',
        intro_html:
          '<p>Each country offers unique salary structures, visa types, and career progression. Our counsellors will help you choose the right destination.</p>',
        features_title: 'Nursing Placement Destinations',
        features_subtitle: 'Compare salaries, visas, and registration requirements',
        features: [
          { title: 'United Kingdom', desc: '£28,000–£45,000/yr · Health & Care Worker Visa · NMC registration · IELTS 7.0 or OET Grade B. Fast-track visa, NHS employment, PR after 5 years.', icon: '🇬🇧' },
          { title: 'Ireland', desc: '€35,000–€55,000/yr · Critical Skills Employment Permit · NMBI · IELTS 6.5 or OET Grade B. English-speaking EU country.', icon: '🇮🇪' },
          { title: 'New Zealand', desc: 'NZD 55,000–80,000/yr · Accredited Employer Work Visa · Nursing Council · IELTS 7.0 or OET Grade B. Pathway to NZ PR.', icon: '🇳🇿' },
          { title: 'United States', desc: 'USD 70,000–95,000/yr · EB-3 · NCLEX-RN + State Nursing Board · IELTS 6.5 or TOEFL. Highest salaries globally.', icon: '🇺🇸' },
          { title: 'UAE / Gulf', desc: 'AED 8,000–15,000/mo (tax-free) · Employment Visa · MOH/DHA/HAAD · English preferred. Proximity to India.', icon: '🇦🇪' },
        ],
        cta_title: 'Explore Nursing Destinations',
        cta_text: 'Book a free counselling session to find the right nursing destination for your goals.',
      }}
    />
  );
}
