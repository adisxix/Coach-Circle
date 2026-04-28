import CommunityLayout from './CommunityLayout';

export default function LegalPage() {
  return (
    <CommunityLayout
      name="Legal"
      icon="⚖️"
      tagline="Argue Better. Advocate Stronger."
      subtext="From law students to senior partners — find mentors who understand the legal profession inside and out."
      accentColor="#8b5cf6"
      accentBg="rgba(139, 92, 246, 0.1)"
      sectionOrder={['feed', 'mentors', 'events', 'resources', 'stats', 'cta']}
      posts={[
        { author: 'Victoria Grant', time: '4 hours ago', excerpt: 'Just made partner after 9 years. The path had nothing to do with billable hours and everything to do with relationships. Thread below.', likes: 187, comments: 52 },
        { author: 'Amir Hassan', time: '1 day ago', excerpt: 'Legal tech is transforming how we practice law. AI contract review tools saved our team 200+ hours last quarter. My recommendations.', likes: 93, comments: 27 },
        { author: 'Catherine Moore', time: '2 days ago', excerpt: 'For aspiring law students: which specialization is right for you? A comprehensive breakdown of practice areas and their outlooks.', likes: 71, comments: 34 },
      ]}
      events={[
        { date: 'Apr 22', time: '6:00 PM EST', topic: 'Navigating Big Law: A Candid Conversation', host: 'Victoria Grant' },
        { date: 'Apr 28', time: '4:00 PM EST', topic: 'Legal Tech Tools Every Lawyer Should Know', host: 'Amir Hassan' },
        { date: 'May 5', time: '5:00 PM EST', topic: 'In-House vs. Firm: Choosing Your Path', host: 'Catherine Moore' },
      ]}
      mentors={[
        { name: 'Victoria Grant', role: 'Senior Partner', industry: 'Legal', rating: 4.9, bio: 'Senior partner at a top-20 law firm. Specializes in corporate M&A and mentoring young attorneys.' },
        { name: 'Amir Hassan', role: 'Legal Tech Director', industry: 'Legal', rating: 4.7, bio: 'Former litigator turned legal technologist. Transforming how law firms use AI and automation.' },
        { name: 'Catherine Moore', role: 'General Counsel', industry: 'Legal', rating: 4.8, bio: 'GC at a Fortune 500 company. Expert in compliance, governance, and building in-house teams.' },
      ]}
      resources={[
        { icon: '📖', title: 'Getting to Yes', desc: 'The classic negotiation guide used in top law schools worldwide', type: 'Book' },
        { icon: '⚖️', title: 'LexisNexis Student Hub', desc: 'Legal research tools and study resources for law students', type: 'Tool' },
        { icon: '📝', title: 'Law Review Writing Guide', desc: 'How to write articles that get published in top law reviews', type: 'Guide' },
        { icon: '🧠', title: 'Bar Exam Preparation Roadmap', desc: 'Comprehensive study schedule and strategy for the bar exam', type: 'Guide' },
        { icon: '🎥', title: 'Yale Open Courses: Constitutional Law', desc: 'Free lectures from Yale Law School on constitutional principles', type: 'Course' },
      ]}
      stats={[
        { val: '870', label: 'Members' },
        { val: '34', label: 'Active Mentors' },
        { val: '1,400+', label: 'Sessions Completed' },
      ]}
    />
  );
}
