import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (hash) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border-2 border-cream relative overflow-hidden group-hover:scale-105 transition-transform">
            <span className="text-cream font-bold text-sm tracking-tight">CC</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Coach Circle</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-sky text-sm font-medium transition-colors">Home</Link>
          <button onClick={() => handleAnchor('#about')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors cursor-pointer">About Us</button>
          <Link to="/cc-plus" className="text-white/80 hover:text-sky text-sm font-medium transition-colors">CC+</Link>
          <button onClick={() => handleAnchor('#contact')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors cursor-pointer">Contact Us</button>
        </div>

        <Link to="/join" className="hidden md:block bg-sky text-white font-semibold px-6 py-2.5 rounded-full text-sm btn-hover hover:bg-navy transition-colors">
          Join
        </Link>

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

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4 navbar-glass">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-sky text-sm font-medium transition-colors">Home</Link>
          <button onClick={() => handleAnchor('#about')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">About Us</button>
          <Link to="/cc-plus" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-sky text-sm font-medium transition-colors">CC+</Link>
          <button onClick={() => handleAnchor('#contact')} className="text-white/80 hover:text-sky text-sm font-medium transition-colors text-left cursor-pointer">Contact Us</button>
          <Link to="/join" onClick={() => setMenuOpen(false)} className="bg-sky text-white font-semibold px-6 py-2.5 rounded-full text-sm text-center btn-hover hover:bg-navy transition-colors">Join</Link>
        </div>
      </div>
    </nav>
  );
}
