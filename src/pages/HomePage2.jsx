import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import AutoSlider from '../components/AutoSlider';
import MentorCard from '../components/MentorCard';
import CommunityCard from '../components/CommunityCard';
import useScrollReveal from '../hooks/useScrollReveal';

const mentors = [
  { name: 'Sarah Chen', role: 'VP of Engineering', industry: 'Software', rating: 4.9, bio: 'Led teams at Google and Stripe. Passionate about helping engineers become leaders.' },
  { name: 'Marcus Williams', role: 'Investment Director', industry: 'Finance', rating: 4.8, bio: 'Former Goldman Sachs MD turned mentor. Specializing in career pivots into finance.' },
  { name: 'Priya Sharma', role: 'Design Lead', industry: 'Design', rating: 5, bio: 'Award-winning product designer at Figma. Loves mentoring aspiring UX designers.' },
  { name: 'James Okafor', role: 'Marketing SVP', industry: 'Marketing', rating: 4.7, bio: '20+ years in brand strategy. Built marketing teams from zero to 100 at three startups.' },
  { name: 'Angela Rivera', role: 'CTO', industry: 'Software', rating: 4.9, bio: 'Serial entrepreneur and technologist. Building better futures through tech mentorship.' },
  { name: 'Robert Kim', role: 'UX Director', industry: 'Design', rating: 4.6, bio: 'Formerly at Apple and Airbnb. Advocates for design-led thinking in every organization.' },
  { name: 'Fatima Al-Rashid', role: 'Healthcare Admin', industry: 'Healthcare', rating: 4.8, bio: 'Hospital administrator with 15 years experience. Guides healthcare professionals in leadership.' },
  { name: 'Chris Morgan', role: 'Startup Advisor', industry: 'Entrepreneurship', rating: 4.9, bio: 'Backed 50+ startups as an angel investor. Helping founders find product-market fit.' },
];

const communities = [
  { name: 'Software', icon: '💻', memberCount: 2340, path: '/community/software' },
  { name: 'Finance', icon: '💰', memberCount: 1820, path: '/community/finance' },
  { name: 'Management', icon: '📊', memberCount: 1560, path: '/community/management' },
  { name: 'Marketing', icon: '📣', memberCount: 1390, path: '/community/marketing' },
  { name: 'Design', icon: '🎨', memberCount: 1750, path: '/community/design' },
  { name: 'Healthcare', icon: '🏥', memberCount: 980, path: '/community/healthcare' },
  { name: 'Legal', icon: '⚖️', memberCount: 870, path: '/community/legal' },
  { name: 'Education', icon: '🎓', memberCount: 1120, path: '/community/education' },
  { name: 'Entrepreneurship', icon: '🚀', memberCount: 2100, path: '/community/entrepreneurship' },
  { name: 'Human Resources', icon: '👥', memberCount: 940, path: '/community/hr' },
];

export default function HomePage2() {
  useScrollReveal();
  const [subscribed, setSubscribed] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  return (
    <div className="bg-cream">
      <Navbar2 />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video className="video-bg" autoPlay muted loop playsInline src="">
        </video>
        <div className="video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-purple-blue z-0" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Welcome Back.<br />
            <span className="bg-gradient-to-r from-sky to-cream bg-clip-text text-transparent">Keep Growing.</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Your mentorship journey continues here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="bg-sky text-white font-semibold px-8 py-3.5 rounded-full text-base btn-hover hover:bg-sky-dark transition-colors">
              Setup Your Profile
            </Link>
            <Link to="/dashboard" className="border-2 border-cream text-cream font-semibold px-8 py-3.5 rounded-full text-base btn-hover hover:bg-cream/10 transition-colors">
              You're on Free Plan
            </Link>
          </div>
        </div>
      </section>

      <section id="mentors" className="py-24 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Browse Our Mentors</h2>
        </div>
        <AutoSlider
          items={mentors}
          direction="ltr"
          speed={40}
          renderItem={(m, i) => (
            <MentorCard key={i} {...m} buttonText="Connect" />
          )}
        />
      </section>

      <section id="communities" className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 reveal">
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">Explore Communities</h2>
        </div>
        <AutoSlider
          items={communities}
          direction="rtl"
          speed={35}
          renderItem={(c, i) => (
            <CommunityCard key={i} {...c} />
          )}
        />
      </section>

      <section className="py-24 bg-gradient-to-r from-sky to-purple-blue">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Unlock More with CC+</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get unlimited sessions, priority mentor matching, exclusive workshops, and full access to all communities.
          </p>
          <Link to="/cc-plus" className="bg-navy text-white font-semibold px-10 py-4 rounded-full text-base btn-hover hover:bg-navy-dark transition-colors inline-block">
            Explore CC+ Plans
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky to-purple-blue">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-white/80 text-base mb-10">
            Get mentorship tips, community updates and exclusive offers.
          </p>
          {subscribed ? (
            <div className="max-w-lg mx-auto bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-4 text-white font-semibold animate-bounce">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="flex-1 bg-white rounded-full px-6 py-3.5 text-navy text-sm placeholder:text-navy/40 focus:ring-2 focus:ring-navy"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="bg-navy text-white font-semibold px-8 py-3.5 rounded-full btn-hover hover:bg-navy-dark transition-colors cursor-pointer">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="contact" className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: '✉️', label: 'Email', value: 'coachcircle@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 8829813401' },
                { icon: '📍', label: 'Location', value: 'Greater Noida Uttar Pradesh India' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center text-2xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-white font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {!contactSubmitted ? (
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30" placeholder="Rahul Khan" required />
                <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30" placeholder="rahul@example.com" required />
                <textarea rows={4} name="message" value={contactForm.message} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 resize-none" placeholder="How can we help?" required />
                <button type="submit" className="w-full bg-sky text-white font-semibold py-3.5 rounded-full btn-hover hover:bg-sky-dark transition-colors cursor-pointer">Send Message</button>
              </form>
            ) : (
              <div className="w-full bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3.5 text-green-200 font-semibold text-center animate-bounce">
                ✓ Thank you! We will respond to you soon.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
