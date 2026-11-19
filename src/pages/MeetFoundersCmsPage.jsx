import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import PageCTA from '../components/PageCTA';
import { usePageContent } from '../hooks/usePageContent';
import { asList } from '../cms/contentHelpers';

const DEFAULT_FOUNDERS = [
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
    quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there. — Stephen Chbosky",
  },
];

/**
 * Meet the Founders — fully editable from Admin → Pages
 */
export default function MeetFoundersCmsPage() {
  const { content } = usePageContent('meet-the-founders', {
    hero_badge: 'About Eduflair',
    hero_title: 'Meet The Founders',
    hero_subtitle: "The people behind Eduflair's mission to transform education and careers across Kerala.",
    hero_image: '/images/DSC01527-1-924x520.jpg',
    intro_title: 'The Vision Behind Eduflair',
    intro_html:
      "<p>Meet the founders who built Eduflair into one of Kerala's most trusted overseas education and career consultancies.</p>",
    founders: DEFAULT_FOUNDERS,
    cta_title: 'Ready to Start Your Journey?',
    cta_text: 'Meet our team in person — visit our Calicut office or book a free online consultation.',
  });

  const founders = asList(content.founders, DEFAULT_FOUNDERS);

  return (
    <Layout>
      <PageHero
        badge={content.hero_badge}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        breadcrumbs={[{ label: 'About', href: '/our-story' }, { label: 'Meet the Founders' }]}
        bgImage={content.hero_image || undefined}
      />

      {(content.intro_title || content.intro_html) && (
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            {content.intro_title && (
              <h2 className="text-2xl font-extrabold mb-4" style={{ color: '#003c4c' }}>{content.intro_title}</h2>
            )}
            {content.intro_html && (
              <div
                className="text-gray-600 text-sm leading-relaxed [&_p]:mb-3"
                dangerouslySetInnerHTML={{ __html: content.intro_html }}
              />
            )}
          </div>
        </section>
      )}

      <section className="py-16" style={{ backgroundColor: '#f7fafb' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {founders.map((f, i) => (
            <div
              key={i}
              className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="mb-8 lg:mb-0">
                {f.photo ? (
                  <img src={f.photo} alt={f.name || ''} className="w-full h-96 object-cover object-top rounded-2xl shadow-lg" />
                ) : (
                  <div className="w-full h-96 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                    Add photo in admin
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>{f.role}</p>
                <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#003c4c' }}>{f.name}</h3>
                {f.bio && (
                  <div
                    className="text-gray-600 text-sm leading-relaxed mb-4 [&_p]:mb-3"
                    dangerouslySetInnerHTML={{ __html: f.bio }}
                  />
                )}
                {f.quote && (
                  <blockquote className="border-l-4 pl-4 italic text-sm text-gray-500" style={{ borderColor: '#ffa800' }}>
                    &ldquo;{f.quote}&rdquo;
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA heading={content.cta_title || undefined} sub={content.cta_text || undefined} />
    </Layout>
  );
}
