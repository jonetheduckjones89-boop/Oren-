import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './ui/logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Solutions', path: '/product' },
    { name: 'Vision', path: '/vision' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="fixed top-6 left-6 right-6 z-[100] flex items-center justify-between pointer-events-none">
      {/* Left Dock: Brand + Nav */}
      <header className="pointer-events-auto flex items-center gap-12 px-10 py-4 bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-200/10 transition-all duration-300">
        <Link to="/" className="flex items-center gap-4 group shrink-0">
          <Logo className="w-10 h-10 text-slate-950 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tighter text-slate-950">Oren</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[15px] font-semibold tracking-tight transition-all duration-200 ${
                location.pathname === link.path 
                  ? 'text-slate-950 underline decoration-slate-950/20 underline-offset-8 decoration-2' 
                  : 'text-slate-400 hover:text-slate-950'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Right Dock: Action */}
      <div className="pointer-events-auto flex items-center px-2 py-1.5 bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-200/10">
        <Link 
          to="/early-access"
          className="px-6 py-2.5 bg-slate-950 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-md"
        >
          Get Early Access
        </Link>
      </div>
    </div>
  );
};

export default Navbar;