import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { registerUser } from '../utils/authStorage';

export default function JoinPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', email: '', phone: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(form);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(9,146,194,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center border-2 border-cream mx-auto mb-4">
              <span className="text-cream font-bold text-lg">CC</span>
            </div>
            <h1 className="text-navy text-2xl font-bold">Join Coach Circle</h1>
            <p className="text-navy/50 text-sm mt-2">Start your mentorship journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-navy/70 text-sm font-medium mb-1.5 block">First Name</label>
                <input name="firstName" type="text" value={form.firstName} onChange={handleChange} required
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                  placeholder="Rahul" />
              </div>
              <div>
                <label className="text-navy/70 text-sm font-medium mb-1.5 block">Last Name</label>
                <input name="lastName" type="text" value={form.lastName} onChange={handleChange} required
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                  placeholder="Khan" />
              </div>
            </div>

            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Date of Birth</label>
              <input name="dob" type="date" value={form.dob} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors" />
            </div>

            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                placeholder="you@example.com" />
            </div>

            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                placeholder="+91 9876543210" />
            </div>

            <div>
              <label className="text-navy/70 text-sm font-medium mb-1.5 block">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required
                className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:border-sky transition-colors"
                placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-sky text-white font-semibold py-3.5 rounded-full btn-hover hover:bg-sky-dark transition-colors mt-4 cursor-pointer">
              Create My Account
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-navy/10" />
            <span className="text-navy/40 text-xs">Already a member?</span>
            <div className="flex-1 h-px bg-navy/10" />
          </div>

          <Link to="/login" className="block text-center text-sky font-semibold text-sm hover:text-sky-dark transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
