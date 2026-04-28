import CommunityLayout from './CommunityLayout';

export default function SoftwarePage() {
  return (
    <CommunityLayout
      name="Software Engineering"
      icon="💻"
      tagline="Build. Ship. Scale. Together."
      subtext="Join the largest engineering community on Coach Circle. From junior devs to CTOs — grow your technical career with hands-on mentorship."
      accentColor="#22c55e"
      accentBg="rgba(34, 197, 94, 0.1)"
      sectionOrder={['stats', 'mentors', 'feed', 'events', 'resources', 'cta']}
      posts={[
        { author: 'Angela Rivera', time: '2 hours ago', excerpt: 'Just finished migrating our monolith to microservices — lessons learned thread incoming. Stay tuned, it was a wild ride.', likes: 42, comments: 18 },
        { author: 'Kevin Pham', time: '5 hours ago', excerpt: 'Anyone else prepping for system design interviews? I created a study group in the #interview-prep channel. All levels welcome!', likes: 31, comments: 12 },
        { author: 'Lily Nguyen', time: '1 day ago', excerpt: 'Hot take: TypeScript is no longer optional in 2025. If your team is still resisting, here is how I convinced mine.', likes: 89, comments: 34 },
      ]}
      events={[
        { date: 'Apr 20', time: '6:00 PM EST', topic: 'Scaling Node.js Applications', host: 'Angela Rivera' },
        { date: 'Apr 25', time: '7:00 PM EST', topic: 'System Design Deep Dive: Chat Systems', host: 'Kevin Pham' },
        { date: 'May 2', time: '5:30 PM EST', topic: 'Open Source Contribution Workshop', host: 'Lily Nguyen' },
      ]}
      mentors={[
        { name: 'Angela Rivera', role: 'CTO', industry: 'Software', rating: 4.9, bio: 'Serial entrepreneur and technologist. Building better futures through tech mentorship.' },
        { name: 'Kevin Pham', role: 'Staff Engineer', industry: 'Software', rating: 4.7, bio: 'Staff engineer at Netflix. Expert in distributed systems and scalable architecture.' },
        { name: 'Sarah Chen', role: 'VP of Engineering', industry: 'Software', rating: 4.9, bio: 'Led teams at Google and Stripe. Passionate about helping engineers become leaders.' },
      ]}
      resources={[
        { icon: '📖', title: 'Designing Data-Intensive Applications', desc: 'The definitive guide to building reliable, scalable systems', type: 'Book' },
        { icon: '🔧', title: 'LeetCode Premium Study Plans', desc: 'Structured coding interview preparation paths', type: 'Tool' },
        { icon: '📝', title: 'The Pragmatic Engineer Newsletter', desc: 'Weekly insights on software engineering and big tech', type: 'Article' },
        { icon: '🎥', title: 'MIT OpenCourseWare - Algorithms', desc: 'Free world-class algorithm and data structure courses', type: 'Course' },
        { icon: '🛠️', title: 'GitHub Copilot Best Practices', desc: 'How to effectively use AI-assisted coding in production', type: 'Guide' },
      ]}
      stats={[
        { val: '2,340', label: 'Members' },
        { val: '87', label: 'Active Mentors' },
        { val: '4,200+', label: 'Sessions Completed' },
      ]}
    />
  );
}
