import CommunityLayout from './CommunityLayout';

export default function EducationPage() {
  return (
    <CommunityLayout
      name="Education"
      icon="🎓"
      tagline="Teach. Inspire. Shape the Future."
      subtext="For educators, edtech builders, and lifelong learners — connect with mentors who are redefining how the world learns."
      accentColor="#f59e0b"
      accentBg="rgba(245, 158, 11, 0.1)"
      sectionOrder={['resources', 'feed', 'stats', 'mentors', 'events', 'cta']}
      posts={[
        { author: 'Dr. Maya Robinson', time: '5 hours ago', excerpt: 'Published my research on AI-powered personalized learning. Results show a 28% improvement in student outcomes. Full paper is open-access.', likes: 143, comments: 39 },
        { author: 'Tom Bradley', time: '1 day ago', excerpt: 'After 15 years in K-12 education, I transitioned to edtech. Here is how I made the leap without losing my passion for teaching.', likes: 87, comments: 24 },
        { author: 'Yuki Tanaka', time: '2 days ago', excerpt: 'Created a free curriculum for teaching computational thinking to elementary students. 200+ schools have adopted it so far!', likes: 215, comments: 61 },
      ]}
      events={[
        { date: 'Apr 21', time: '3:00 PM EST', topic: 'AI in Education: Opportunities and Ethics', host: 'Dr. Maya Robinson' },
        { date: 'Apr 27', time: '5:00 PM EST', topic: 'Breaking Into EdTech from the Classroom', host: 'Tom Bradley' },
        { date: 'May 4', time: '2:00 PM EST', topic: 'Curriculum Design Workshop', host: 'Yuki Tanaka' },
      ]}
      mentors={[
        { name: 'Dr. Maya Robinson', role: 'EdTech Researcher', industry: 'Education', rating: 4.9, bio: 'Professor of learning sciences at Stanford. Pioneer in adaptive learning technologies.' },
        { name: 'Tom Bradley', role: 'Head of Product, EdTech', industry: 'Education', rating: 4.7, bio: 'Former high school teacher, now leading product at a top edtech company.' },
        { name: 'Yuki Tanaka', role: 'Curriculum Director', industry: 'Education', rating: 4.8, bio: 'Designed award-winning STEM curricula adopted by 500+ schools globally.' },
      ]}
      resources={[
        { icon: '📖', title: 'Make It Stick', desc: 'The science of successful learning — evidence-based strategies', type: 'Book' },
        { icon: '🧪', title: 'Khan Academy Educator Tools', desc: 'Free tools for creating and tracking student assignments', type: 'Tool' },
        { icon: '🎓', title: 'Coursera for Campus', desc: 'How institutions are integrating online learning at scale', type: 'Guide' },
        { icon: '📋', title: 'UDL Framework Guidelines', desc: 'Universal Design for Learning — creating inclusive curricula', type: 'Framework' },
        { icon: '🎥', title: 'TED-Ed: Lessons Worth Sharing', desc: 'Platform for creating and sharing animated educational content', type: 'Inspiration' },
      ]}
      stats={[
        { val: '1,120', label: 'Members' },
        { val: '42', label: 'Active Mentors' },
        { val: '1,900+', label: 'Sessions Completed' },
      ]}
    />
  );
}
