import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { EMAIL } from '../constants';

export default function PrivacyPage() {
  return (
    <Layout>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="How Eduflair Learning Solutions collects, uses, and protects your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-sm max-w-none">
          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ffa800' }}>Last Updated: January 2026</p>
              <p>This Privacy Policy describes how <strong style={{ color: '#003c4c' }}>Eduflair Learning Solutions Pvt. Ltd.</strong> ("Eduflair", "we", "us", or "our") collects, uses, and shares information about you when you use our website, services, or contact us.</p>
            </div>

            {[
              {
                title: '1. Information We Collect',
                content: [
                  'Personal identification information (name, email address, phone number, date of birth)',
                  'Academic and professional information (qualifications, grades, work experience)',
                  'Contact preferences and service enquiries submitted through our website or in person',
                  'Technical data such as IP address, browser type, and pages visited on our website',
                ],
              },
              {
                title: '2. How We Use Your Information',
                content: [
                  'To provide study abroad counselling, language training, and placement consultancy services',
                  'To contact you about your enquiries and updates relevant to your application',
                  'To send information about our services, events, and offers (you may opt out at any time)',
                  'To comply with legal and regulatory obligations',
                ],
              },
              {
                title: '3. Information Sharing',
                content: [
                  'We do not sell your personal information to third parties',
                  'We may share your information with partner universities, embassies, and employers as required for your application — always with your knowledge and consent',
                  'We may share data with service providers who assist us in operating our website and delivering services, subject to confidentiality agreements',
                ],
              },
              {
                title: '4. Data Security',
                content: [
                  'We implement appropriate technical and organisational measures to protect your personal data',
                  'Access to your data is restricted to authorised Eduflair staff only',
                  'We retain your data for as long as necessary to provide services and comply with legal requirements',
                ],
              },
              {
                title: '5. Your Rights',
                content: [
                  'You have the right to access, correct, or delete your personal information',
                  'You may withdraw consent for marketing communications at any time',
                  'To exercise your rights, contact us at the details below',
                ],
              },
              {
                title: '6. Cookies',
                content: [
                  'Our website uses cookies to improve your browsing experience',
                  'You can control cookie settings through your browser preferences',
                  'Disabling cookies may affect some website functionality',
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="font-extrabold text-base mb-3" style={{ color: '#003c4c' }}>{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#ffa800' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="font-extrabold text-base mb-3" style={{ color: '#003c4c' }}>7. Contact Us</h2>
              <p>For any questions about this Privacy Policy or to exercise your data rights, please contact us:</p>
              <div className="mt-3 p-4 rounded-xl" style={{ backgroundColor: '#e8f4f7' }}>
                <p><strong style={{ color: '#003c4c' }}>Eduflair Learning Solutions Pvt. Ltd.</strong></p>
                <p>3rd Floor, RP Mall, Mavoor Road, Calicut, Kerala – 673004</p>
                <p>Email: <a href={`mailto:${EMAIL}`} style={{ color: '#003c4c' }}>{EMAIL}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
