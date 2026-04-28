import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/Footer';
import MentorCard from '../../components/MentorCard';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function CommunityLayout({
  name,
  icon,
  tagline,
  subtext,
  accentColor,
  accentBg,
  posts,
  events,
  mentors,
  resources,
  stats,
  sectionOrder,
}) {
  useScrollReveal();

  const sections = {
    feed: (
      <section key="feed" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-2xl md:text-3xl font-bold mb-10">Community Feed</h2>
          <div className="space-y-4">
            {posts.map((p, i) => (
              <div key={i} className="bg-cream/40 rounded-2xl p-6 border border-cream-dark/20 card-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`} style={{ background: accentColor }}>
                    {p.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">{p.author}</p>
                    <p className="text-navy/40 text-xs">{p.time}</p>
                  </div>
                </div>
                <p className="text-navy/70 text-sm leading-relaxed">{p.excerpt}</p>
                <div className="flex gap-4 mt-4 text-navy/40 text-xs">
                  <span>❤️ {p.likes}</span>
                  <span>💬 {p.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    events: (
      <section key="events" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-2xl md:text-3xl font-bold mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-lift border border-cream-dark/20 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: accentColor }}>{e.date}</span>
                  <span className="text-navy/40 text-xs">{e.time}</span>
                </div>
                <h3 className="text-navy font-bold text-base mb-2">{e.topic}</h3>
                <p className="text-navy/50 text-sm mb-4 flex-1">Hosted by {e.host}</p>
                <button className="w-full py-2.5 rounded-full text-white text-sm font-semibold btn-hover cursor-pointer" style={{ background: accentColor }}>
                  RSVP
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    mentors: (
      <section key="mentors" className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-10">Featured Mentors in {name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <MentorCard key={i} {...m} buttonText="Connect" />
            ))}
          </div>
        </div>
      </section>
    ),
    resources: (
      <section key="resources" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-navy text-2xl md:text-3xl font-bold mb-10">Resources & Reading List</h2>
          <div className="space-y-3">
            {resources.map((r, i) => (
              <div key={i} className="flex items-center gap-4 bg-cream/40 rounded-2xl p-5 border border-cream-dark/20 card-lift">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: accentBg }}>
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-navy font-semibold text-sm">{r.title}</p>
                  <p className="text-navy/50 text-xs truncate">{r.desc}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: accentColor, background: accentBg }}>
                  {r.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    stats: (
      <section key="stats" className="py-12" style={{ background: accentColor }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 text-white text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-extrabold">{s.val}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    cta: (
      <section key="cta" className="py-20 bg-gradient-to-r from-sky to-purple-blue">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to dive in?</h2>
          <p className="text-white/80 text-lg mb-8">Start connecting with mentors and peers in the {name} community.</p>
          <button className="bg-white text-navy font-semibold px-10 py-4 rounded-full btn-hover hover:bg-cream transition-colors cursor-pointer">
            Join the Discussion
          </button>
        </div>
      </section>
    ),
  };

  const orderedSections = sectionOrder || ['feed', 'events', 'mentors', 'resources', 'stats', 'cta'];

  return (
    <div className="bg-cream">
      <Navbar2 />

      <section className="relative py-32 pt-40 overflow-hidden" style={{ background: `linear-gradient(135deg, #0B2D72 0%, ${accentColor} 100%)` }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full" style={{ background: accentColor, filter: 'blur(80px)' }} />
          <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-sky" style={{ filter: 'blur(100px)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">{icon}</div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{name}</h1>
          <p className="text-white text-xl md:text-2xl font-medium mb-3">{tagline}</p>
          <p className="text-white/70 text-base max-w-xl mx-auto">{subtext}</p>
        </div>
      </section>

      {orderedSections.map((key) => sections[key])}

      <Footer />
    </div>
  );
}
