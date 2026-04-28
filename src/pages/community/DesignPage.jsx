import CommunityLayout from './CommunityLayout';

export default function DesignPage() {
  return (
    <CommunityLayout
      name="Design"
      icon="🎨"
      tagline="Design with Intention. Create with Impact."
      subtext="From product design to brand identity — collaborate with designers who shape how millions experience the digital world."
      accentColor="#ec4899"
      accentBg="rgba(236, 72, 153, 0.1)"
      sectionOrder={['mentors', 'feed', 'resources', 'events', 'stats', 'cta']}
      posts={[
        { author: 'Priya Sharma', time: '2 hours ago', excerpt: 'Redesigned our entire onboarding flow and saw a 35% increase in activation. Here is the before/after case study.', likes: 156, comments: 43 },
        { author: 'Robert Kim', time: '7 hours ago', excerpt: 'Unpopular opinion: design systems are only as good as the team culture behind them. Documentation alone is not enough.', likes: 97, comments: 38 },
        { author: 'Zara Ahmed', time: '1 day ago', excerpt: 'My portfolio got me interviews at Apple, Airbnb, and Figma. Breaking down the structure and what made it stand out.', likes: 203, comments: 56 },
      ]}
      events={[
        { date: 'Apr 23', time: '5:00 PM EST', topic: 'Portfolio Review Workshop', host: 'Priya Sharma' },
        { date: 'Apr 29', time: '6:30 PM EST', topic: 'Design Systems That Scale', host: 'Robert Kim' },
        { date: 'May 6', time: '4:00 PM EST', topic: 'UX Research Methods Crash Course', host: 'Zara Ahmed' },
      ]}
      mentors={[
        { name: 'Priya Sharma', role: 'Design Lead', industry: 'Design', rating: 5, bio: 'Award-winning product designer at Figma. Loves mentoring aspiring UX designers.' },
        { name: 'Robert Kim', role: 'UX Director', industry: 'Design', rating: 4.6, bio: 'Formerly at Apple and Airbnb. Advocates for design-led thinking in every organization.' },
        { name: 'Zara Ahmed', role: 'Brand Designer', industry: 'Design', rating: 4.8, bio: 'Built brand identities for 30+ startups. Teaches visual storytelling at SVA.' },
      ]}
      resources={[
        { icon: '🎨', title: 'Figma Community Files', desc: 'Free design systems, wireframes, and UI kits from top designers', type: 'Tool' },
        { icon: '📖', title: 'Don\'t Make Me Think', desc: 'Steve Krug\'s classic on intuitive web usability', type: 'Book' },
        { icon: '🖼️', title: 'Dribbble Pro Resources', desc: 'Curated design inspiration and case studies', type: 'Inspiration' },
        { icon: '📐', title: 'Laws of UX', desc: 'Collection of maxims that designers can use to build better products', type: 'Guide' },
        { icon: '🎥', title: 'Google UX Design Certificate', desc: 'Professional certificate program for aspiring UX designers', type: 'Course' },
      ]}
      stats={[
        { val: '1,750', label: 'Members' },
        { val: '61', label: 'Active Mentors' },
        { val: '3,400+', label: 'Sessions Completed' },
      ]}
    />
  );
}
