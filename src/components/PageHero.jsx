import { Link } from 'react-router-dom';

export default function PageHero({ badge, title, subtitle, breadcrumbs = [], bgImage }) {
  return (
    <div className="relative py-20 overflow-hidden" style={{ backgroundColor: '#003c4c' }}>

      {/* Faded country/page background image */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.13 }}
        />
      )}

      {/* Subtle bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,60,76,0.6))' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs mb-5 opacity-60">
            <Link to="/" className="text-white hover:opacity-100">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2 text-white">
                <span>/</span>
                {b.href ? <Link to={b.href} className="hover:opacity-100">{b.label}</Link> : <span>{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,168,0,0.18)', color: '#ffa800', border: '1px solid rgba(255,168,0,0.25)' }}>
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{subtitle}</p>}
      </div>
    </div>
  );
}
