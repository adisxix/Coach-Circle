import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import useScrollReveal from '../hooks/useScrollReveal';
import { getCurrentUser } from '../utils/authStorage';

const plans = [
  {
    plan: 'Free',
    price: '$0',
    period: 'mo',
    features: ['Basic profile setup', 'Browse mentor directory', 'Join one community', 'Limited session requests', 'Community feed access'],
  },
  {
    plan: 'CC+ Monthly',
    price: '$29',
    period: 'mo',
    highlighted: true,
    badge: 'Most Popular',
    features: ['Unlimited 1:1 sessions', 'Priority mentor matching', 'Access all 10+ communities', 'Exclusive workshops & events', 'Advanced profile analytics', 'Direct messaging'],
  },
  {
    plan: 'CC+ Annual',
    price: '$199',
    period: 'yr',
    features: ['Everything in CC+ Monthly', 'Exclusive masterclass access', 'Early access to new features', 'Annual career review session', 'Priority customer support', 'Profile spotlight badge'],
  },
];

const testimonials = [
  { quote: 'CC+ gave me the accountability I needed. Weekly sessions with my mentor helped me launch my side project in under two months.', name: 'Tony Reeves', role: 'CC+ Member, Entrepreneur' },
  { quote: 'The workshops alone are worth the subscription. I have learned skills that would have taken me years to pick up on my own.', name: 'Lina Park', role: 'CC+ Member, Product Designer' },
  { quote: 'Upgrading to CC+ was the best investment in my career. The priority matching connected me with the perfect mentor in 48 hours.', name: 'Daniel Moss', role: 'CC+ Member, Data Scientist' },
];

const useCases = [
  { icon: '🔄', title: "You're switching careers", desc: 'Get guidance from someone who has already made the leap you are planning.' },
  { icon: '🎯', title: 'You want accountability', desc: 'Stay on track with regular check-ins and structured goal-setting sessions.' },
  { icon: '🚀', title: "You're building a startup", desc: 'Learn from founders and advisors who have scaled businesses before.' },
  { icon: '🧭', title: 'You want industry mentors on demand', desc: 'Connect immediately with seasoned professionals in your exact field.' },
  { icon: '📈', title: 'You want to accelerate promotions', desc: 'Get strategic advice on positioning yourself for the next level.' },
  { icon: '🌐', title: 'You want to expand your network', desc: 'Access exclusive communities with driven professionals who share your ambitions.' },
];

const faqs = [
  { q: 'What is included in CC+?', a: 'CC+ gives you unlimited one-on-one sessions, priority mentor matching, full community access, exclusive workshops, advanced analytics, and direct messaging with mentors.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your CC+ subscription at any time. Your access will remain active until the end of your current billing period.' },
  { q: 'How do I access communities?', a: 'Once subscribed, navigate to the Communities section from your dashboard or the homepage. CC+ members get instant access to all 10+ professional communities.' },
  { q: 'What happens to my data if I cancel?', a: 'Your profile, session history, and community posts are preserved. You can reactivate your CC+ subscription anytime to get full access again.' },
  { q: 'How does mentor matching work?', a: 'Our system analyzes your career goals, industry, and preferences to recommend mentors. CC+ members get priority placement in the matching queue.' },
  { q: 'Are there group sessions available?', a: 'Yes, CC+ includes exclusive group workshops and masterclasses led by industry-leading mentors, in addition to your 1:1 sessions.' },
  { q: 'Can I switch between monthly and annual plans?', a: 'Absolutely. You can upgrade or change your plan at any time from your account settings. Switching to annual saves you over 40%.' },
  { q: 'Is there a student discount?', a: 'We offer special pricing for students and early-career professionals. Contact our support team with a valid student email for details.' },
];

export default function CCPlusPage() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const currentUser = getCurrentUser();

  return (
    <div className="bg-cream">
      {currentUser ? <Navbar2 /> : <Navbar />}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video className="video-bg" autoPlay muted loop playsInline src="">
        </video>
        <div className="video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-purple-blue z-0" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-sky/15 text-sky px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse" />
            CC+ Premium
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Unlock Your Full<br />
            <span className="bg-gradient-to-r from-sky to-cream bg-clip-text text-transparent">Potential with CC+</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Become a CC+ Member and get the benefits that accelerate your growth.
          </p>
          <Link to="/join" className="inline-block bg-sky text-white font-semibold px-10 py-4 rounded-full text-base btn-hover hover:bg-sky-dark transition-colors">
            Get Started with CC+
          </Link>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">Choose Your Plan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-16">CC+ Is Built For You If…</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-5 card-lift border border-cream-dark/20">
                <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {u.icon}
                </div>
                <div>
                  <h3 className="text-navy font-bold text-base mb-1">{u.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-16">What CC+ Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-navy-light/50 rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                >
                  <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                  <span className="text-sky text-xl font-light flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <p className="text-white/60 text-sm leading-relaxed px-6 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
