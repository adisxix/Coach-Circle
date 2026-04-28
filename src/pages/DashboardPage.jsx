import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import {
  getCurrentUser,
  getUserFullName,
  getUserInitials,
  updateCurrentUserPassword,
  updateCurrentUserProfile,
} from '../utils/authStorage';

const sidebarLinks = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'sessions', label: 'My Sessions', icon: '📅' },
  { id: 'mentors', label: 'My Mentors', icon: '👤' },
  { id: 'communities', label: 'Communities', icon: '🌐' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

const upcomingSessions = [
  { mentor: 'Sarah Chen', date: 'Apr 15, 2025', time: '10:00 AM', topic: 'Career Growth Strategy', status: 'Confirmed' },
  { mentor: 'James Okafor', date: 'Apr 18, 2025', time: '2:00 PM', topic: 'Brand Positioning Workshop', status: 'Pending' },
  { mentor: 'Priya Sharma', date: 'Apr 22, 2025', time: '11:30 AM', topic: 'Portfolio Review', status: 'Confirmed' },
];

const pastSessions = [
  { mentor: 'Marcus Williams', date: 'Apr 5, 2025', time: '9:00 AM', topic: 'Financial Planning Basics', status: 'Completed' },
  { mentor: 'Angela Rivera', date: 'Apr 2, 2025', time: '3:00 PM', topic: 'Tech Leadership Fundamentals', status: 'Completed' },
];

const myMentors = [
  { name: 'Sarah Chen', role: 'VP of Engineering', industry: 'Software', rating: 4.9 },
  { name: 'Marcus Williams', role: 'Investment Director', industry: 'Finance', rating: 4.8 },
  { name: 'Priya Sharma', role: 'Design Lead', industry: 'Design', rating: 5 },
  { name: 'James Okafor', role: 'Marketing SVP', industry: 'Marketing', rating: 4.7 },
];

const joinedCommunities = [
  { name: 'Software', icon: '💻', path: '/community/software' },
  { name: 'Design', icon: '🎨', path: '/community/design' },
  { name: 'Finance', icon: '💰', path: '/community/finance' },
  { name: 'Entrepreneurship', icon: '🚀', path: '/community/entrepreneurship' },
];

const suggestedMentors = [
  { name: 'Chris Morgan', role: 'Startup Advisor', industry: 'Entrepreneurship', rating: 4.9 },
  { name: 'Robert Kim', role: 'UX Director', industry: 'Design', rating: 4.6 },
  { name: 'Fatima Al-Rashid', role: 'Healthcare Admin', industry: 'Healthcare', rating: 4.8 },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => getCurrentUser());
  const [activeTab, setActiveTab] = useState('overview');
  const [sessionTab, setSessionTab] = useState('upcoming');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login', { replace: true });
      return;
    }

    setUser(currentUser);
  }, [navigate]);

  if (!user) {
    return null;
  }

  const handleProfileSave = (profileForm) => {
    const fullName = profileForm.fullName.trim();
    const linkedIn = profileForm.linkedIn.trim();
    const bio = profileForm.bio.trim();
    const expertise = profileForm.expertise.trim();

    if (!fullName || !linkedIn || !bio || !expertise || !profileForm.avatarUrl) {
      return { ok: false, message: 'Please fill all profile fields before saving.' };
    }

    const nameParts = fullName.split(' ').filter(Boolean);
    if (nameParts.length < 2) {
      return { ok: false, message: 'Please enter full name with first and last name.' };
    }

    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const updatedUser = updateCurrentUserProfile({
      firstName,
      lastName,
      linkedIn,
      bio,
      expertise,
      avatarUrl: profileForm.avatarUrl,
    });

    if (!updatedUser) {
      return { ok: false, message: 'Unable to update profile. Please log in again.' };
    }

    setUser(updatedUser);
    return { ok: true, message: 'Profile updated successfully.' };
  };

  const handlePasswordSave = (passwordForm) => {
    const currentPassword = passwordForm.currentPassword.trim();
    const newPassword = passwordForm.newPassword.trim();

    if (!currentPassword || !newPassword) {
      return { ok: false, message: 'Please fill both password fields.' };
    }

    if (newPassword.length < 6) {
      return { ok: false, message: 'New password must be at least 6 characters.' };
    }

    const result = updateCurrentUserPassword(currentPassword, newPassword);
    if (!result.ok) {
      return { ok: false, message: result.reason };
    }

    setUser(result.user);
    return { ok: true, message: 'Password updated successfully.' };
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPanel user={user} />;
      case 'sessions':
        return <SessionsPanel sessionTab={sessionTab} setSessionTab={setSessionTab} />;
      case 'mentors':
        return <MentorsPanel />;
      case 'communities':
        return <CommunitiesPanel />;
      case 'settings':
        return <SettingsPanel user={user} onProfileSave={handleProfileSave} onPasswordSave={handlePasswordSave} />;
      default:
        return <OverviewPanel user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <Navbar2 userOverride={user} />

      <div className="flex pt-20">
        <aside className="hidden lg:flex flex-col w-72 min-h-[calc(100vh-5rem)] bg-white border-r border-navy/5 p-6 sticky top-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center mx-auto mb-3 overflow-hidden">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold text-2xl">{getUserInitials(user)}</span>
              )}
            </div>
            <h3 className="text-navy font-bold text-lg">{getUserFullName(user)}</h3>
            <span className="inline-block mt-1 bg-cream text-navy text-xs font-semibold px-3 py-1 rounded-full">{user.plan}</span>
          </div>

          <nav className="flex-1 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-sky/10 text-sky border-l-3 border-sky'
                    : 'text-navy/60 hover:bg-navy/5 hover:text-navy'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 bg-navy rounded-2xl p-5 text-center">
            <p className="text-white text-sm font-semibold mb-2">Upgrade to CC+</p>
            <p className="text-white/60 text-xs mb-4">Unlock unlimited sessions & all communities</p>
            <Link to="/cc-plus" className="block bg-sky text-white text-sm font-semibold py-2.5 rounded-full btn-hover hover:bg-sky-dark transition-colors">
              Upgrade Now
            </Link>
          </div>
        </aside>

        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-navy/10 z-40 flex justify-around py-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs font-medium cursor-pointer ${
                activeTab === link.id ? 'text-sky' : 'text-navy/40'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function OverviewPanel({ user }) {
  const [connectMessage, setConnectMessage] = useState('');

  const handleConnect = (mentorName) => {
    setConnectMessage(`Connect request sent to ${mentorName}`);
    window.setTimeout(() => setConnectMessage(''), 2500);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-navy text-2xl md:text-3xl font-bold">Good Morning, {user.firstName} 👋</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { val: '12', label: 'Sessions Completed', icon: '📅' },
          { val: '4', label: 'Mentors Connected', icon: '🤝' },
          { val: '28', label: 'Community Posts', icon: '💬' },
          { val: '18h', label: 'Hours Mentored', icon: '⏱️' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-sky/10 card-lift">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-navy font-extrabold text-2xl">{s.val}</span>
            </div>
            <p className="text-navy/50 text-xs font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/home2#mentors" className="bg-sky text-white font-semibold px-6 py-2.5 rounded-full text-sm btn-hover hover:bg-sky-dark transition-colors">Find a Mentor</Link>
        <button className="bg-navy text-white font-semibold px-6 py-2.5 rounded-full text-sm btn-hover hover:bg-navy-dark transition-colors cursor-pointer">Book a Session</button>
        <Link to="/home2#communities" className="bg-white text-navy border border-navy/15 font-semibold px-6 py-2.5 rounded-full text-sm btn-hover hover:bg-cream transition-colors">Explore Communities</Link>
      </div>

      <div>
        <h2 className="text-navy font-bold text-lg mb-4">Upcoming Sessions</h2>
        <div className="space-y-3">
          {upcomingSessions.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-navy/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {s.mentor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">{s.mentor}</p>
                  <p className="text-navy/50 text-xs">{s.topic}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-navy text-sm font-medium">{s.date}</p>
                  <p className="text-navy/50 text-xs">{s.time}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {s.status}
                </span>
                <button className="bg-sky text-white text-xs font-semibold px-4 py-2 rounded-full btn-hover cursor-pointer">Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-navy font-bold text-lg mb-4">Suggested Mentors for You</h2>
        {connectMessage && (
          <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            {connectMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestedMentors.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 flex items-center gap-4 card-lift border border-navy/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{m.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-navy font-semibold text-sm truncate">{m.name}</p>
                <p className="text-navy/50 text-xs truncate">{m.role}</p>
              </div>
              <button
                onClick={() => handleConnect(m.name)}
                className="bg-sky/10 text-sky text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-sky/20 transition-colors cursor-pointer"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SessionsPanel({ sessionTab, setSessionTab }) {
  const sessions = sessionTab === 'upcoming' ? upcomingSessions : pastSessions;

  return (
    <div className="space-y-6">
      <h1 className="text-navy text-2xl font-bold">My Sessions</h1>

      <div className="flex gap-2 bg-white rounded-xl p-1 w-fit">
        {['upcoming', 'past'].map((t) => (
          <button
            key={t}
            onClick={() => setSessionTab(t)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              sessionTab === t ? 'bg-sky text-white' : 'text-navy/50 hover:text-navy'
            }`}
          >
            {t === 'upcoming' ? 'Upcoming' : 'Past'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {sessions.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-navy/5 card-lift">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center text-white font-bold flex-shrink-0">
                {s.mentor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-navy font-semibold">{s.mentor}</p>
                <p className="text-navy/50 text-sm">{s.topic}</p>
                <p className="text-navy/40 text-xs mt-1">{s.date} at {s.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                s.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                s.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {s.status}
              </span>
              {sessionTab === 'upcoming' && (
                <button className="bg-sky text-white text-sm font-semibold px-5 py-2 rounded-full btn-hover cursor-pointer">Join</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MentorsPanel() {
  return (
    <div className="space-y-6">
      <h1 className="text-navy text-2xl font-bold">My Mentors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myMentors.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 card-lift border border-navy/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky to-purple-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">{m.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="text-navy font-semibold">{m.name}</p>
                <p className="text-navy/50 text-sm">{m.role}</p>
                <p className="text-cream-dark text-xs">{'★'.repeat(Math.floor(m.rating))} {m.rating}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-sky text-white text-sm font-semibold py-2.5 rounded-full btn-hover cursor-pointer">Schedule</button>
              <button className="flex-1 bg-navy/5 text-navy text-sm font-semibold py-2.5 rounded-full hover:bg-navy/10 transition-colors cursor-pointer">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunitiesPanel() {
  return (
    <div className="space-y-6">
      <h1 className="text-navy text-2xl font-bold">My Communities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {joinedCommunities.map((c, i) => (
          <Link key={i} to={c.path} className="bg-white rounded-2xl p-6 text-center card-lift border border-navy/5 block">
            <div className="text-4xl mb-3">{c.icon}</div>
            <p className="text-navy font-semibold text-sm">{c.name}</p>
            <span className="text-sky text-xs font-medium mt-2 inline-block">Go to Community →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel({ user, onProfileSave, onPasswordSave }) {
  const [profileForm, setProfileForm] = useState({
    fullName: getUserFullName(user),
    linkedIn: user.linkedIn ?? '',
    bio: user.bio ?? '',
    expertise: user.expertise ?? '',
    avatarUrl: user.avatarUrl ?? '',
  });
  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');

  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '' });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    setProfileForm({
      fullName: getUserFullName(user),
      linkedIn: user.linkedIn ?? '',
      bio: user.bio ?? '',
      expertise: user.expertise ?? '',
      avatarUrl: user.avatarUrl ?? '',
    });
  }, [user]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
    if (profileError) setProfileError('');
    if (profileSuccess) setProfileSuccess('');
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const result = onProfileSave(profileForm);

    if (!result.ok) {
      setProfileError(result.message);
      setProfileSuccess('');
      return;
    }

    setProfileSuccess(result.message);
    setProfileError('');
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setProfileError('Please upload an image file for profile photo.');
      setProfileSuccess('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const photo = typeof reader.result === 'string' ? reader.result : '';
      setProfileForm((prev) => ({ ...prev, avatarUrl: photo }));
      setProfileError('');
      setProfileSuccess('');
    };

    reader.readAsDataURL(file);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
    if (passwordError) setPasswordError('');
    if (passwordSuccess) setPasswordSuccess('');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const result = onPasswordSave(passwordForm);

    if (!result.ok) {
      setPasswordError(result.message);
      setPasswordSuccess('');
      return;
    }

    setPasswordSuccess(result.message);
    setPasswordError('');
    setPasswordForm({ currentPassword: '', newPassword: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-navy text-2xl font-bold">Settings</h1>

      <div className="bg-white rounded-2xl p-8 border border-navy/5">
        <h2 className="text-navy font-bold text-lg mb-6">Edit Profile</h2>
        <form className="space-y-4" onSubmit={handleProfileSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileForm.fullName}
                onChange={handleProfileChange}
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:border-sky transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">LinkedIn</label>
              <input
                type="url"
                name="linkedIn"
                value={profileForm.linkedIn}
                onChange={handleProfileChange}
                placeholder="https://linkedin.com/in/johndoe"
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-navy/70 text-sm font-medium mb-1.5 block">Bio</label>
            <textarea
              rows={3}
              name="bio"
              value={profileForm.bio}
              onChange={handleProfileChange}
              className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:border-sky transition-colors resize-none"
              required
            />
          </div>
          <div>
            <label className="text-navy/70 text-sm font-medium mb-1.5 block">Expertise</label>
            <input
              type="text"
              name="expertise"
              value={profileForm.expertise}
              onChange={handleProfileChange}
              placeholder="e.g. Product Management, UX Design"
              className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
              required
            />
          </div>
          <div>
            <label className="text-navy/70 text-sm font-medium mb-1.5 block">Profile Photo</label>
            <label className="border-2 border-dashed border-navy/15 rounded-xl p-6 text-center text-navy/40 text-sm cursor-pointer hover:border-sky/40 transition-colors block">
              <input type="file" accept="image/*" className="hidden" onChange={handleProfilePhotoChange} />
              {profileForm.avatarUrl ? (
                <div className="flex items-center justify-center gap-4">
                  <img src={profileForm.avatarUrl} alt="Profile Preview" className="w-16 h-16 rounded-full object-cover border border-sky/30" />
                  <span className="text-navy/70 text-sm font-medium">Photo selected. Click to change.</span>
                </div>
              ) : (
                'Click to upload profile photo'
              )}
            </label>
          </div>
          {profileError && <p className="text-sm font-medium text-red-600">{profileError}</p>}
          {profileSuccess && <p className="text-sm font-medium text-green-600">{profileSuccess}</p>}
          <button type="submit" className="bg-sky text-white font-semibold px-8 py-3 rounded-full btn-hover hover:bg-sky-dark transition-colors cursor-pointer">Save Changes</button>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-navy/5">
        <h2 className="text-navy font-bold text-lg mb-6">Change Password</h2>
        <form className="space-y-4 max-w-md" onSubmit={handlePasswordSubmit}>
          <div>
            <label className="text-navy/70 text-sm font-medium mb-1.5 block">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:border-sky transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="text-navy/70 text-sm font-medium mb-1.5 block">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:border-sky transition-colors"
              placeholder="••••••••"
              minLength={6}
              required
            />
          </div>
          {passwordError && <p className="text-sm font-medium text-red-600">{passwordError}</p>}
          {passwordSuccess && <p className="text-sm font-medium text-green-600">{passwordSuccess}</p>}
          <button type="submit" className="bg-navy text-white font-semibold px-8 py-3 rounded-full btn-hover hover:bg-navy-dark transition-colors cursor-pointer">Update Password</button>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-navy/5">
        <h2 className="text-navy font-bold text-lg mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new sessions', defaultChecked: true },
            { label: 'Community activity alerts', defaultChecked: true },
            { label: 'Mentor recommendations', defaultChecked: false },
            { label: 'Marketing and promotional emails', defaultChecked: false },
          ].map((n, i) => (
            <label key={i} className="flex items-center justify-between cursor-pointer group">
              <span className="text-navy/70 text-sm">{n.label}</span>
              <div className="relative">
                <input type="checkbox" defaultChecked={n.defaultChecked} className="sr-only peer" />
                <div className="w-11 h-6 bg-navy/10 rounded-full peer-checked:bg-sky transition-colors" />
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
