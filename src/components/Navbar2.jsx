import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clearCurrentUser, getCurrentUser, getUserInitials } from '../utils/authStorage';

export default function Navbar2({ userOverride = null }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const syncSessionUser = () => setCurrentUser(getCurrentUser());
    window.addEventListener('storage', syncSessionUser);
    return () => window.removeEventListener('storage', syncSessionUser);
  }, []);

  const handleLogout = () => {
    clearCurrentUser();
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate('/login');
  };

  const handleAnchor = (hash) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    if (location.pathname === '/home2') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/home2' + hash);
    }
  };

  const activeUser = userOverride ?? currentUser;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 navbar-glass py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/home2" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border-2 border-cream relative overflow-hidden group-hover:scale-105 transition-transform">
            <span className="text-cream font-bold text-sm tracking-tight">CC</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Coach Circle</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleAnchor('#mentors')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors cursor-pointer">Mentors</button>
          <button onClick={() => handleAnchor('#communities')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors cursor-pointer">Community</button>
          <Link to="/cc-plus" className="text-white/80 hover:text-sky text-sm font-medium transition-colors">CC+</Link>
          <button onClick={() => handleAnchor('#contact')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors cursor-pointer">Contact Us</button>
        </div>

        <div className="hidden md:block relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full bg-sky/20 border-2 border-sky flex items-center justify-center text-sky font-bold text-sm hover:bg-sky/30 transition-colors cursor-pointer overflow-hidden"
          >
            {activeUser?.avatarUrl ? (
              <img src={activeUser.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              getUserInitials(activeUser)
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 animate-fadeIn">
              <Link to="/dashboard" className="block px-4 py-2.5 text-navy hover:bg-cream/50 text-sm font-medium transition-colors" onClick={() => setDropdownOpen(false)}>Dashboard</Link>
              <button type="button" className="w-full text-left block px-4 py-2.5 text-navy hover:bg-cream/50 text-sm font-medium transition-colors cursor-pointer" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4 navbar-glass">
          <button onClick={() => handleAnchor('#mentors')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">Mentors</button>
          <button onClick={() => handleAnchor('#communities')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">Community</button>
          <Link to="/cc-plus" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-sky text-sm font-medium transition-colors">CC+</Link>
          <button onClick={() => handleAnchor('#contact')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">Contact Us</button>
          <hr className="border-white/10" />
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-sky text-sm font-medium transition-colors">Dashboard</Link>
          <button type="button" onClick={handleLogout} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">Logout</button>
        </div>
      </div>
    </nav>
  );
}
