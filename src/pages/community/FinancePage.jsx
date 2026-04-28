import CommunityLayout from './CommunityLayout';

export default function FinancePage() {
  return (
    <CommunityLayout
      name="Finance"
      icon="💰"
      tagline="Master Your Money. Build Your Future."
      subtext="From Wall Street analysts to fintech founders — the Finance community is where numbers meet ambition."
      accentColor="#d97706"
      accentBg="rgba(217, 119, 6, 0.1)"
      sectionOrder={['mentors', 'stats', 'events', 'feed', 'resources', 'cta']}
      posts={[
        { author: 'Marcus Williams', time: '3 hours ago', excerpt: 'Q1 market recap: Three trends every finance professional should watch in 2025. Thread below with detailed analysis.', likes: 67, comments: 23 },
        { author: 'Diana Foster', time: '8 hours ago', excerpt: 'Just passed the CFA Level III exam! Here is my study strategy for anyone considering it — it took me 18 months.', likes: 128, comments: 41 },
        { author: 'Raj Kapoor', time: '1 day ago', excerpt: 'Interesting debate: Is ESG investing still relevant in today\'s regulatory climate? I would love to hear different perspectives.', likes: 45, comments: 29 },
      ]}
      events={[
        { date: 'Apr 22', time: '12:00 PM EST', topic: 'Intro to Quantitative Trading Strategies', host: 'Marcus Williams' },
        { date: 'Apr 28', time: '6:00 PM EST', topic: 'Breaking Into Investment Banking', host: 'Diana Foster' },
        { date: 'May 5', time: '1:00 PM EST', topic: 'Fintech Innovation Roundtable', host: 'Raj Kapoor' },
      ]}
      mentors={[
        { name: 'Marcus Williams', role: 'Investment Director', industry: 'Finance', rating: 4.8, bio: 'Former Goldman Sachs MD turned mentor. Specializing in career pivots into finance.' },
        { name: 'Diana Foster', role: 'Portfolio Manager', industry: 'Finance', rating: 4.9, bio: 'Managing $2B+ in assets. CFA charterholder and passionate about financial literacy.' },
        { name: 'Raj Kapoor', role: 'Fintech VP', industry: 'Finance', rating: 4.6, bio: 'Built payment infrastructure at Stripe. Now advising startups on financial technology.' },
      ]}
      resources={[
        { icon: '📊', title: 'Bloomberg Terminal Essentials', desc: 'Master the tools used by every finance professional', type: 'Guide' },
        { icon: '📖', title: 'The Intelligent Investor', desc: 'Benjamin Graham\'s timeless value investing classic', type: 'Book' },
        { icon: '🧮', title: 'CFA Institute Study Materials', desc: 'Official preparation materials for the CFA program', type: 'Course' },
        { icon: '📰', title: 'Morning Brew Finance', desc: 'Daily newsletter covering markets, deals, and fintech', type: 'Newsletter' },
        { icon: '💹', title: 'Wall Street Oasis Forums', desc: 'Community forums for finance career advice and networking', type: 'Community' },
      ]}
      stats={[
        { val: '1,820', label: 'Members' },
        { val: '64', label: 'Active Mentors' },
        { val: '3,100+', label: 'Sessions Completed' },
      ]}
    />
  );
}
