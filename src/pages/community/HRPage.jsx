import CommunityLayout from './CommunityLayout';

export default function HRPage() {
  return (
    <CommunityLayout
      name="Human Resources"
      icon="👥"
      tagline="People First. Always."
      subtext="For HR professionals, people ops leaders, and anyone passionate about building workplaces where humans thrive."
      accentColor="#06b6d4"
      accentBg="rgba(6, 182, 212, 0.1)"
      sectionOrder={['mentors', 'events', 'stats', 'feed', 'resources', 'cta']}
      posts={[
        { author: 'Rachel Owens', time: '3 hours ago', excerpt: 'Redesigned our entire performance review process. Ditched annual reviews for continuous feedback — here is the framework we use.', likes: 94, comments: 28 },
        { author: 'Michael Torres', time: '1 day ago', excerpt: 'Employee retention is not about perks. After analyzing 5 years of exit interviews, here are the 3 real reasons people leave.', likes: 167, comments: 45 },
        { author: 'Emily Chang', time: '2 days ago', excerpt: 'Built a DEI program from scratch at a 500-person company. What worked, what didn not, and what I would do differently.', likes: 121, comments: 37 },
      ]}
      events={[
        { date: 'Apr 23', time: '1:00 PM EST', topic: 'Modern Performance Management Systems', host: 'Rachel Owens' },
        { date: 'Apr 29', time: '3:00 PM EST', topic: 'Building a Retention Strategy That Works', host: 'Michael Torres' },
        { date: 'May 6', time: '12:00 PM EST', topic: 'DEI Program Design Workshop', host: 'Emily Chang' },
      ]}
      mentors={[
        { name: 'Rachel Owens', role: 'VP of People', industry: 'Human Resources', rating: 4.8, bio: 'VP of People at a fast-growing fintech. Expert in scaling culture from startup to enterprise.' },
        { name: 'Michael Torres', role: 'CHRO', industry: 'Human Resources', rating: 4.9, bio: 'Chief HR Officer with 20+ years experience. Transforms organizations through people strategy.' },
        { name: 'Emily Chang', role: 'DEI Director', industry: 'Human Resources', rating: 4.7, bio: 'Built inclusive workplaces at three Fortune 100 companies. Passionate about equity in action.' },
      ]}
      resources={[
        { icon: '📖', title: 'Work Rules! by Laszlo Bock', desc: 'Insights from Google\'s SVP of People Operations', type: 'Book' },
        { icon: '📊', title: 'SHRM Certification Prep', desc: 'Study materials for SHRM-CP and SHRM-SCP certifications', type: 'Course' },
        { icon: '📋', title: 'Employee Engagement Survey Templates', desc: 'Research-backed survey templates for measuring engagement', type: 'Template' },
        { icon: '🧠', title: 'People Analytics Guide', desc: 'Using data to make better talent decisions', type: 'Guide' },
        { icon: '🎥', title: 'HR Leaders Podcast', desc: 'Weekly conversations with CHROs from top global companies', type: 'Podcast' },
      ]}
      stats={[
        { val: '940', label: 'Members' },
        { val: '36', label: 'Active Mentors' },
        { val: '1,500+', label: 'Sessions Completed' },
      ]}
    />
  );
}
