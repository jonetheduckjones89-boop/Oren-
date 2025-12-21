import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './ui/logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16 px-6 border-t border-slate-200/60 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="col-span-1 md:col-span-6 space-y-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <Logo className="w-6 h-6 text-slate-950" />
              <span className="text-xl font-medium tracking-tight text-slate-950">Oren</span>
            </Link>
            <p className="text-[13px] text-slate-500 font-normal leading-relaxed max-w-sm">
              The intelligence layer for clinical excellence. Rebuilding medical operations from the ground up.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-950 hover:border-slate-300 transition-all">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-950 hover:border-slate-300 transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-950 mb-8">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/product" className="text-[13px] text-slate-500 hover:text-slate-950 transition-colors">Solutions</Link></li>
              <li><Link to="/vision" className="text-[13px] text-slate-500 hover:text-slate-950 transition-colors">Operating Thesis</Link></li>
              <li><Link to="/team-philosophy" className="text-[13px] text-slate-500 hover:text-slate-950 transition-colors">Team Philosophy</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-950 mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[13px] text-slate-500 hover:text-slate-950 transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-[13px] text-slate-500 hover:text-slate-950 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-100 gap-8">
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.2em]">© 2025 OREN AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.2em]">BUILT FOR PATIENTS</span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.2em]">LOVED BY DOCTORS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;