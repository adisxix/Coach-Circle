import CommunityLayout from './CommunityLayout';

export default function ManagementPage() {
  return (
    <CommunityLayout
      name="Management"
      icon="📊"
      tagline="Lead with Purpose. Manage with Impact."
      subtext="Level up your leadership skills with mentors who have managed teams at the world's most respected organizations."
      accentColor="#6366f1"
      accentBg="rgba(99, 102, 241, 0.1)"
      sectionOrder={['events', 'mentors', 'feed', 'stats', 'resources', 'cta']}
      posts={[
        { author: 'Lisa Thompson', time: '4 hours ago', excerpt: 'Just wrapped up a leadership offsite — here are 5 frameworks that fundamentally changed how I run my team. Sharing freely.', likes: 92, comments: 31 },
        { author: 'Carlos Mendez', time: '12 hours ago', excerpt: 'New managers: stop trying to have all the answers. The best thing you can do is ask better questions. Here is my list.', likes: 76, comments: 22 },
        { author: 'Naomi Sato', time: '2 days ago', excerpt: 'Managing remote teams across 4 time zones — it is not about tools, it is about trust. Here is our team charter template.', likes: 54, comments: 17 },
      ]}
      events={[
        { date: 'Apr 19', time: '11:00 AM EST', topic: 'First 90 Days as a New Manager', host: 'Lisa Thompson' },
        { date: 'Apr 26', time: '3:00 PM EST', topic: 'Conflict Resolution for Leaders', host: 'Carlos Mendez' },
        { date: 'May 3', time: '10:00 AM EST', topic: 'OKRs That Actually Work', host: 'Naomi Sato' },
      ]}
      mentors={[
        { name: 'Lisa Thompson', role: 'VP of Operations', industry: 'Management', rating: 4.9, bio: 'Built ops teams at Amazon and Uber. Expert in scaling organizations from 10 to 1000.' },
        { name: 'Carlos Mendez', role: 'Chief of Staff', industry: 'Management', rating: 4.7, bio: 'Former McKinsey consultant. Coaches executives on strategy execution and team dynamics.' },
        { name: 'Naomi Sato', role: 'Engineering Manager', industry: 'Management', rating: 4.8, bio: 'Managing distributed teams at Microsoft. Advocates for inclusive leadership practices.' },
      ]}
      resources={[
        { icon: '📖', title: 'The Manager\'s Path', desc: 'Camille Fournier\'s guide from tech lead to CTO', type: 'Book' },
        { icon: '🎯', title: 'Radical Candor Resources', desc: 'Kim Scott\'s framework for caring personally and challenging directly', type: 'Framework' },
        { icon: '📋', title: 'One-on-One Meeting Templates', desc: 'Structured templates for effective 1:1 conversations', type: 'Template' },
        { icon: '🎥', title: 'TED: How Great Leaders Inspire Action', desc: 'Simon Sinek\'s iconic talk on leadership and purpose', type: 'Video' },
      ]}
      stats={[
        { val: '1,560', label: 'Members' },
        { val: '52', label: 'Active Mentors' },
        { val: '2,800+', label: 'Sessions Completed' },
      ]}
    />
  );
}
