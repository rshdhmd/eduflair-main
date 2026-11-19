import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';
import logoBlack from '../assets/images/eduflair black.png';
import { useCustomCmsPages } from '../hooks/useCustomCmsPages';

const BASE_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Ausbildung', href: '/ausbildung-in-germany' },
  {
    label: 'Study Abroad',
    href: '/study-abroad',
    groupId: 'study-abroad',
    children: [
      { label: 'Study Abroad Overview', href: '/study-abroad' },
      { label: 'Application Process', href: '/application-process' },
      { label: 'Study In UK', href: '/study-in-uk' },
      { label: 'Study In Germany', href: '/study-in-germany' },
      { label: 'Study In Ireland', href: '/study-in-ireland' },
      { label: 'Study In Canada', href: '/study-in-canada' },
      { label: 'Study In France', href: '/study-in-france' },
      { label: 'Study In Austria', href: '/study-in-austria' },
      { label: 'Other Destinations', href: '/other-destinations' },
    ],
  },
  {
    label: 'Language & Skill Academy',
    href: '/language-academy',
    groupId: 'language',
    children: [
      { label: 'Language Academy Overview', href: '/language-academy' },
      { label: 'IELTS Coaching', href: '/ielts-coaching' },
      { label: 'German Language', href: '/german-language' },
      { label: 'OET', href: '/oet' },
    ],
  },
  {
    label: 'Placement',
    href: '/placement',
    groupId: 'placement',
    children: [
      { label: 'Placement & Immigration', href: '/placement' },
      { label: 'Nursing in Canada', href: '/nursing-canada' },
      { label: 'Nursing in Australia', href: '/nursing-australia' },
      { label: 'Nursing in Germany', href: '/nursing-germany' },
      { label: 'Other Destinations', href: '/other-nursing-destinations' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'About',
    href: '/our-story',
    children: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Meet The Founders', href: '/meet-the-founders' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

const ChevronDown = () => (
  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const customPages = useCustomCmsPages();

  const NAV_ITEMS = useMemo(() => {
    return BASE_NAV.map((item) => {
      if (!item.groupId || !item.children) return item;
      const extras = customPages
        .filter((p) => p.groupId === item.groupId && p.path)
        .filter((p) => !item.children.some((c) => c.href === p.path))
        .map((p) => ({ label: p.title, href: p.path }));
      if (!extras.length) return item;
      return { ...item, children: [...item.children, ...extras] };
    });
  }, [customPages]);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100" style={{ boxShadow: '0 1px 12px rgba(0,60,76,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-[70px] gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mr-2">
            <img src={logoBlack} alt="Eduflair" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_ITEMS.map(item => (
              <li key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap hover:bg-[#e8f4f7]"
                  style={{ color: '#1a2e35' }}
                >
                  {item.label}
                  {item.children && <ChevronDown />}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#003c4c] hover:bg-[#e8f4f7] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop right: social + CTA */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            {/* Social icons */}
            <div className="flex items-center gap-1.5 mr-1">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-[#e8f4f7]"
                style={{ borderColor: '#d1e8ee', color: '#003c4c' }}
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-[#e8f4f7]"
                style={{ borderColor: '#d1e8ee', color: '#003c4c' }}
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors hover:bg-[#e8f4f7]"
                style={{ borderColor: '#d1e8ee', color: '#003c4c' }}
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: '#003c4c' }}
            >
              Check Eligibility
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="xl:hidden ml-auto p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden py-3 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map(item => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(prev => prev === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#e8f4f7] rounded-lg"
                    >
                      {item.label}
                      <ChevronDown />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mb-1">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#003c4c] rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#e8f4f7] rounded-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-1 pb-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-white text-sm font-bold px-4 py-3 rounded-full text-center"
                style={{ backgroundColor: '#003c4c' }}
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
