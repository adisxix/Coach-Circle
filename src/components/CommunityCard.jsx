import { Link } from 'react-router-dom';

export default function CommunityCard({ name, icon, memberCount, path }) {
  return (
    <Link
      to={path}
      className="flex-shrink-0 w-56 bg-white/95 rounded-2xl p-6 flex flex-col items-center text-center card-lift group cursor-pointer border border-cream-dark/30"
    >
      <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="text-navy font-semibold text-base">{name}</h3>

      {memberCount && (
        <p className="text-navy/50 text-xs mt-1">{memberCount} members</p>
      )}

      <span className="mt-4 text-sky font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
        Explore <span className="text-lg">→</span>
      </span>
    </Link>
  );
}
