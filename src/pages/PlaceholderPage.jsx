import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function PlaceholderPage({ title, breadcrumb, description }) {
  return (
    <Layout>
      {/* Page hero */}
      <div style={{ backgroundColor: '#003c4c' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffa800' }}>
            {breadcrumb || 'Eduflair'}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h1>
        </div>
      </div>

      {/* Placeholder body */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-lg mx-auto">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-7"
            style={{ backgroundColor: '#e8f4f7' }}
          >
            <svg className="w-10 h-10" fill="none" stroke="#003c4c" viewBox="0 0 24 24" style={{ opacity: 0.5 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: '#003c4c' }}>Content Coming Soon</h2>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            {description || `We're preparing detailed content for the ${title} page. In the meantime, reach out to us directly — our counsellors are happy to answer any questions.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="text-white font-bold px-7 py-3 rounded-md transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: '#003c4c' }}
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="font-bold px-7 py-3 rounded-md border-2 transition-colors hover:bg-[#003c4c] hover:text-white text-sm"
              style={{ color: '#003c4c', borderColor: '#003c4c' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
