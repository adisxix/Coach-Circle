import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getCurrentUser, loginUser } from '../utils/authStorage';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(form.email, form.password);
    if (!user) {
      setError('Invalid email or password. Please try again.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(9,146,194,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center border-2 border-cream mx-auto mb-4">
              <span className="text-cream font-bold text-lg">CC</span>
            </div>
            <h1 className="text-navy text-2xl font-bold">Welcome Back</h1>
            <p className="text-navy/50 text-sm mt-2">Log in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                placeholder="you@example.com" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-navy/70 text-sm font-medium">Password</label>
                <button type="button" className="text-sky text-xs font-medium hover:text-sky-dark transition-colors cursor-pointer">Forgot password?</button>
              </div>
              <input name="password" type="password" value={form.password} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-sky text-white font-semibold py-3.5 rounded-full btn-hover hover:bg-sky-dark transition-colors mt-4 cursor-pointer">
              Login
            </button>

            {error && (
              <p className="text-sm text-red-600 font-medium" role="alert">
                {error}
              </p>
            )}
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-navy/10" />
            <span className="text-navy/40 text-xs">New here?</span>
            <div className="flex-1 h-px bg-navy/10" />
          </div>

          <Link to="/join" className="block text-center text-sky font-semibold text-sm hover:text-sky-dark transition-colors">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
