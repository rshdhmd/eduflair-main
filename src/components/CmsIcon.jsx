/** Small icon: image, emoji, or default check */
export default function CmsIcon({ image, emoji, className = 'w-10 h-10' }) {
  if (image) {
    return <img src={image} alt="" className={`${className} object-contain`} />;
  }
  if (emoji) {
    return (
      <span className={`inline-flex items-center justify-center text-2xl ${className}`} aria-hidden>
        {emoji}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ${className}`}
      style={{ backgroundColor: '#003c4c' }}
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
