export default function TestimonialCard({ quote, name, role, avatar }) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg card-lift border border-cream-dark/20 flex flex-col">
      <span className="text-sky text-5xl font-serif leading-none mb-2">"</span>

      <p className="text-navy/70 text-sm leading-relaxed flex-1 italic">
        {quote}
      </p>

      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-cream-dark/20">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-xs">{initials}</span>
        </div>
        <div>
          <p className="text-navy font-semibold text-sm">{name}</p>
          <p className="text-navy/50 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
