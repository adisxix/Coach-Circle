export default function PricingCard({ plan, price, period, features, highlighted, badge, onCTA }) {
  return (
    <div className={`rounded-2xl p-8 flex flex-col card-lift transition-all ${
      highlighted
        ? 'bg-gradient-to-b from-navy-light to-navy border-2 border-sky glow-sky scale-105'
        : 'bg-navy-light/60 border border-white/10'
    }`}>
      {badge && (
        <span className="self-start bg-sky text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}

      <h3 className="text-white font-bold text-xl">{plan}</h3>

      <div className="mt-4 mb-6">
        <span className="text-white text-4xl font-extrabold">{price}</span>
        {period && <span className="text-white/50 text-sm ml-1">/{period}</span>}
      </div>

      <div className="h-px bg-white/10 mb-6" />

      <ul className="flex-1 space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
            <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={onCTA}
        className={`w-full py-3 rounded-full font-semibold text-sm btn-hover transition-colors cursor-pointer ${
          highlighted
            ? 'bg-sky text-white hover:bg-sky-dark'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
