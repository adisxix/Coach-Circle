export default function MentorCard({ name, role, industry, rating, bio, buttonText = 'View Profile', onButtonClick }) {
  const initials = name.split(' ').map(n => n[0]).join('');
  const stars = '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');

  return (
    <div className="gradient-border card-lift flex-shrink-0 w-72">
      <div className="gradient-border-inner flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center mb-4">
          <span className="text-white font-bold text-xl">{initials}</span>
        </div>

        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-sky text-sm font-medium mt-1">{role}</p>
        {industry && <span className="text-white/40 text-xs mt-1">{industry}</span>}

        <div className="star-rating text-sm mt-3" aria-label={`${rating} out of 5 stars`}>
          {stars}
        </div>

        <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-2">{bio}</p>

        <button
          onClick={onButtonClick}
          className="mt-5 bg-sky text-white font-semibold px-6 py-2 rounded-full text-sm btn-hover hover:bg-sky-dark transition-colors w-full cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
