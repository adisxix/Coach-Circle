import CommunityLayout from './CommunityLayout';

export default function HealthcarePage() {
  return (
    <CommunityLayout
      name="Healthcare"
      icon="🏥"
      tagline="Heal. Lead. Transform Healthcare."
      subtext="Connect with healthcare leaders, clinicians, and administrators who are shaping the future of patient care and health innovation."
      accentColor="#14b8a6"
      accentBg="rgba(20, 184, 166, 0.1)"
      sectionOrder={['events', 'stats', 'feed', 'mentors', 'resources', 'cta']}
      posts={[
        { author: 'Fatima Al-Rashid', time: '3 hours ago', excerpt: 'Implemented a new patient flow system that reduced wait times by 40%. Happy to share the playbook with anyone managing clinical ops.', likes: 78, comments: 21 },
        { author: 'Dr. Nathan Wells', time: '10 hours ago', excerpt: 'Transitioning from clinical practice to healthcare administration was the hardest pivot of my career. Here is what I wish I knew.', likes: 112, comments: 35 },
        { author: 'Sophie Laurent', time: '2 days ago', excerpt: 'Digital health startups are booming but most fail at regulatory compliance. Sharing a checklist for HIPAA-ready product development.', likes: 64, comments: 18 },
      ]}
      events={[
        { date: 'Apr 24', time: '12:00 PM EST', topic: 'Healthcare Leadership in a Post-Pandemic World', host: 'Fatima Al-Rashid' },
        { date: 'Apr 30', time: '2:00 PM EST', topic: 'From Doctor to Executive: Career Transitions', host: 'Dr. Nathan Wells' },
        { date: 'May 7', time: '11:00 AM EST', topic: 'Digital Health Product Development', host: 'Sophie Laurent' },
      ]}
      mentors={[
        { name: 'Fatima Al-Rashid', role: 'Hospital Administrator', industry: 'Healthcare', rating: 4.8, bio: 'Hospital administrator with 15 years experience. Guides healthcare professionals in leadership.' },
        { name: 'Dr. Nathan Wells', role: 'Chief Medical Officer', industry: 'Healthcare', rating: 4.9, bio: 'CMO at a major health system. Bridges clinical excellence with strategic leadership.' },
        { name: 'Sophie Laurent', role: 'Health Tech VP', industry: 'Healthcare', rating: 4.7, bio: 'Led digital transformation at three hospital networks. Expert in healthtech innovation.' },
      ]}
      resources={[
        { icon: '📖', title: 'Being Mortal by Atul Gawande', desc: 'Essential reading on medicine, mortality, and what matters most', type: 'Book' },
        { icon: '🏛️', title: 'WHO Health Systems Framework', desc: 'Building blocks of a robust health system', type: 'Framework' },
        { icon: '📊', title: 'Healthcare MBA Programs Guide', desc: 'Top programs for clinicians transitioning to administration', type: 'Guide' },
        { icon: '💊', title: 'HIPAA Compliance Toolkit', desc: 'Templates and checklists for healthcare data privacy', type: 'Tool' },
      ]}
      stats={[
        { val: '980', label: 'Members' },
        { val: '38', label: 'Active Mentors' },
        { val: '1,600+', label: 'Sessions Completed' },
      ]}
    />
  );
}
