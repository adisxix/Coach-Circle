import CommunityLayout from './CommunityLayout';

export default function MarketingPage() {
  return (
    <CommunityLayout
      name="Marketing"
      icon="📣"
      tagline="Tell Better Stories. Drive Real Growth."
      subtext="Whether you are in brand, growth, content, or performance — learn from marketers who have built category-defining campaigns."
      accentColor="#f43f5e"
      accentBg="rgba(244, 63, 94, 0.1)"
      sectionOrder={['feed', 'stats', 'mentors', 'events', 'resources', 'cta']}
      posts={[
        { author: 'James Okafor', time: '1 hour ago', excerpt: 'Just analyzed 200+ landing pages. Here are the 3 elements that consistently drive 40%+ conversion rates. No gimmicks.', likes: 134, comments: 47 },
        { author: 'Megan Liu', time: '6 hours ago', excerpt: 'B2B content marketing is evolving fast. Our LinkedIn strategy generated 2M impressions last quarter. Breakdown below.', likes: 88, comments: 29 },
        { author: 'Andre Brooks', time: '1 day ago', excerpt: 'Stop obsessing over CAC in isolation. Here is our full-funnel attribution model that actually tells the real story.', likes: 61, comments: 19 },
      ]}
      events={[
        { date: 'Apr 21', time: '4:00 PM EST', topic: 'SEO in 2025: What Actually Works', host: 'James Okafor' },
        { date: 'Apr 27', time: '1:00 PM EST', topic: 'Building a Personal Brand on LinkedIn', host: 'Megan Liu' },
        { date: 'May 4', time: '5:00 PM EST', topic: 'Performance Marketing Masterclass', host: 'Andre Brooks' },
      ]}
      mentors={[
        { name: 'James Okafor', role: 'Marketing SVP', industry: 'Marketing', rating: 4.7, bio: '20+ years in brand strategy. Built marketing teams from zero to 100 at three startups.' },
        { name: 'Megan Liu', role: 'Growth Lead', industry: 'Marketing', rating: 4.8, bio: 'Scaled growth at HubSpot from $10M to $100M ARR. Data-driven and creative.' },
        { name: 'Andre Brooks', role: 'CMO', industry: 'Marketing', rating: 4.6, bio: 'Former CMO at two unicorn startups. Expert in brand building and demand generation.' },
      ]}
      resources={[
        { icon: '📖', title: 'Building a StoryBrand', desc: 'Donald Miller\'s framework for clarifying your message', type: 'Book' },
        { icon: '📊', title: 'Google Analytics 4 Guide', desc: 'Complete walkthrough of GA4 for modern marketers', type: 'Guide' },
        { icon: '🎨', title: 'Canva Pro Templates', desc: 'Marketing design templates for social and web', type: 'Tool' },
        { icon: '📧', title: 'Really Good Emails', desc: 'Curated collection of the best email campaigns', type: 'Inspiration' },
        { icon: '🎥', title: 'MasterClass: Marketing Strategy', desc: 'Learn from world-class marketers and brand builders', type: 'Course' },
      ]}
      stats={[
        { val: '1,390', label: 'Members' },
        { val: '48', label: 'Active Mentors' },
        { val: '2,500+', label: 'Sessions Completed' },
      ]}
    />
  );
}
