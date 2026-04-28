import CommunityLayout from './CommunityLayout';

export default function EntrepreneurshipPage() {
  return (
    <CommunityLayout
      name="Entrepreneurship"
      icon="🚀"
      tagline="Dream Big. Start Small. Scale Fast."
      subtext="The community for founders, builders, and innovators. Get mentored by people who have turned ideas into companies."
      accentColor="#ef4444"
      accentBg="rgba(239, 68, 68, 0.1)"
      sectionOrder={['stats', 'feed', 'events', 'mentors', 'resources', 'cta']}
      posts={[
        { author: 'Chris Morgan', time: '1 hour ago', excerpt: 'Raised our Series A at $15M valuation. Lessons from 47 investor meetings, 38 rejections, and the 9 that said yes. Full breakdown.', likes: 312, comments: 87 },
        { author: 'Ana Petrova', time: '8 hours ago', excerpt: 'Bootstrapped to $1M ARR without a single dollar of funding. Here is why I chose profitability over growth at all costs.', likes: 198, comments: 54 },
        { author: 'Derek Washington', time: '2 days ago', excerpt: 'Co-founder conflict nearly killed our startup. How we restructured our partnership agreement and came out stronger.', likes: 145, comments: 41 },
      ]}
      events={[
        { date: 'Apr 20', time: '7:00 PM EST', topic: 'Pitch Deck Teardown: Live Feedback Session', host: 'Chris Morgan' },
        { date: 'Apr 26', time: '6:00 PM EST', topic: 'Bootstrapping vs. VC: Finding Your Path', host: 'Ana Petrova' },
        { date: 'May 3', time: '5:00 PM EST', topic: 'Co-Founder Dynamics Workshop', host: 'Derek Washington' },
      ]}
      mentors={[
        { name: 'Chris Morgan', role: 'Startup Advisor', industry: 'Entrepreneurship', rating: 4.9, bio: 'Backed 50+ startups as an angel investor. Helping founders find product-market fit.' },
        { name: 'Ana Petrova', role: 'Founder & CEO', industry: 'Entrepreneurship', rating: 4.8, bio: 'Built and exited two SaaS companies. Advocates for sustainable, profitable growth.' },
        { name: 'Derek Washington', role: 'Venture Partner', industry: 'Entrepreneurship', rating: 4.7, bio: 'Former founder, now venture partner at a top-tier VC firm. Mentors on fundraising strategy.' },
      ]}
      resources={[
        { icon: '📖', title: 'The Lean Startup', desc: 'Eric Ries\' essential guide to building products customers actually want', type: 'Book' },
        { icon: '📊', title: 'Y Combinator Startup Library', desc: 'Free guides, essays, and talks from the world\'s top accelerator', type: 'Library' },
        { icon: '📝', title: 'Pitch Deck Templates', desc: 'Investor-ready templates based on actual funded decks', type: 'Template' },
        { icon: '🧮', title: 'Financial Modeling for Startups', desc: 'Build projections investors will take seriously', type: 'Tool' },
        { icon: '🎥', title: 'How to Start a Startup (Stanford)', desc: 'Sam Altman\'s legendary Stanford lecture series', type: 'Course' },
      ]}
      stats={[
        { val: '2,100', label: 'Members' },
        { val: '73', label: 'Active Mentors' },
        { val: '3,800+', label: 'Sessions Completed' },
      ]}
    />
  );
}
