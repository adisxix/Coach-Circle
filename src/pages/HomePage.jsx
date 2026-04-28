import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MentorCard from '../components/MentorCard';
import TestimonialCard from '../components/TestimonialCard';
import useScrollReveal from '../hooks/useScrollReveal';

const mentors = [
  { name: 'Sarah Chen', role: 'VP of Engineering', industry: 'Software', rating: 4.9, bio: 'Led teams at Google and Stripe. Passionate about helping engineers become leaders.' },
  { name: 'Marcus Williams', role: 'Investment Director', industry: 'Finance', rating: 4.8, bio: 'Former Goldman Sachs MD turned mentor. Specializing in career pivots into finance.' },
  { name: 'Priya Sharma', role: 'Design Lead', industry: 'Design', rating: 5, bio: 'Award-winning product designer at Figma. Loves mentoring aspiring UX designers.' },
  { name: 'James Okafor', role: 'Marketing SVP', industry: 'Marketing', rating: 4.7, bio: '20+ years in brand strategy. Built marketing teams from zero to 100 at three startups.' },
];

const testimonials = [
  { quote: 'Coach Circle completely transformed my career trajectory. My mentor helped me prepare for a role I never thought I was ready for — I got the offer within three months.', name: 'Elena Rodriguez', role: 'Product Manager at Shopify' },
  { quote: 'The community aspect is what sets this apart. It is not just about one-on-one mentoring — you are surrounded by people who genuinely want to see you succeed.', name: 'David Kim', role: 'Senior Developer at Stripe' },
  { quote: 'I was stuck in my career for years. My CC+ mentor gave me the clarity and accountability I needed. Worth every penny.', name: 'Amara Johnson', role: 'UX Lead at Adobe' },
];

export default function HomePage() {
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
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  return (
    <div className="bg-cream">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video className="video-bg" autoPlay muted loop playsInline src="">
        </video>
        <div className="video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-purple-blue z-0" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Where Growth Meets<br />
            <span className="bg-gradient-to-r from-sky to-purple-blue bg-clip-text text-transparent">Guidance</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with world-class mentors who've been where you want to go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/join" className="bg-sky text-white font-semibold px-8 py-3.5 rounded-full text-base btn-hover hover:bg-sky-dark transition-colors">
              Find a Mentor
            </Link>
            <Link to="/join" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full text-base btn-hover hover:bg-white/10 transition-colors">
              Become a Mentor
            </Link>
          </div>

          <div className="mt-16 bounce-arrow">
            <svg className="w-8 h-8 text-white/50 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-16">How Coach Circle Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-sky/30" />

            {[
              { icon: '🔍', title: 'Find Your Mentor', desc: 'Browse curated profiles across 10+ industries and find someone who truly aligns with your goals.' },
              { icon: '📅', title: 'Book a Session', desc: 'Schedule one-on-one sessions at times that work for you — no waiting, no hassle.' },
              { icon: '🚀', title: 'Grow Together', desc: 'Build skills, gain confidence, and accelerate your career with personalized guidance.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-sky/10 flex items-center justify-center text-3xl mb-6 border-2 border-sky/20">
                  {step.icon}
                </div>
                <span className="text-sky font-bold text-xs uppercase tracking-widest mb-2">Step {i + 1}</span>
                <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Top Mentors</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((m, i) => (
              <MentorCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-16">What Our Members Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky rounded-full" />
              <div className="pl-8">
                <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">About Coach Circle</h2>
                <p className="text-navy/70 leading-relaxed mb-6">
                  Coach Circle was born from a simple belief: everyone deserves access to a great mentor. We connect ambitious professionals with experienced leaders across every major industry — creating meaningful relationships that drive real career growth.
                </p>
                <p className="text-navy/70 leading-relaxed mb-8">
                  Our platform is more than just a matching tool. It is a living ecosystem of communities, workshops, and resources designed to help you grow at every stage of your professional journey.
                </p>

                <div className="flex flex-wrap gap-6">
                  {[
                    { val: '500+', label: 'Mentors' },
                    { val: '12', label: 'Communities' },
                    { val: '10,000+', label: 'Members' },
                  ].map((s, i) => (
                    <div key={i} className="bg-cream/60 rounded-xl px-5 py-3">
                      <p className="text-navy font-extrabold text-xl">{s.val}</p>
                      <p className="text-navy/50 text-xs font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-sky/20 to-purple-blue/20 rounded-3xl" />
              <div className="absolute top-8 left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-sky to-purple-blue opacity-60 rotate-12" />
              <div className="absolute bottom-12 right-12 w-40 h-40 rounded-full bg-gradient-to-br from-cream to-sky/30 opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-xl bg-navy/20 -rotate-6" />
              <div className="absolute bottom-8 left-16 w-20 h-20 rounded-full border-4 border-sky/30" />
              <div className="absolute top-12 right-16 w-16 h-16 rounded-lg bg-cream/60 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>, label: 'Email', value: 'coachcircle@gmail.com' },
                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, label: 'Phone', value: '+91 8829813401' },
                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, label: 'Location', value: 'Greater Noida Uttar Pradesh India' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center text-sky flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-white font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {!contactSubmitted ? (
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div>
                  <label className="text-white/70 text-sm mb-1.5 block">Name</label>
                  <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-sky transition-colors" placeholder="Rahul Khan" required />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1.5 block">Email</label>
                  <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-sky transition-colors" placeholder="rahul@example.com" required />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1.5 block">Message</label>
                  <textarea rows={4} name="message" value={contactForm.message} onChange={handleContactChange} className="w-full bg-transparent border border-cream/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-sky transition-colors resize-none" placeholder="How can we help?" required />
                </div>
                <button type="submit" className="w-full bg-sky text-white font-semibold py-3.5 rounded-full btn-hover hover:bg-sky-dark transition-colors cursor-pointer">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="w-full bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3.5 text-green-200 font-semibold text-center animate-bounce">
                ✓ Thank you! We will respond to you soon.
              </div>
            )}
          </div>
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

      <Footer />
    </div>
  );
}
