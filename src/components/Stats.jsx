const stats = [
  { value: '0k+', label: 'German Students Enrolled' },
  { value: '0+',  label: 'Placement Success Rate' },
  { value: '0+',  label: 'Visa Success Rate' },
  { value: '0+',  label: 'Years of Experience' },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: '#003c4c' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-2">
              <span className="text-4xl font-extrabold text-white mb-1" style={{ color: '#ffa800' }}>
                {s.value}
              </span>
              <span className="text-white/70 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
