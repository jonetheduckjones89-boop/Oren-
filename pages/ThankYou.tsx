import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';
import { Logo } from '../components/ui/logo';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background patterns for premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.015] pointer-events-none" />
      
      {/* Top logo for brand continuity */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-12 flex items-center gap-3"
      >
        <Logo className="w-8 h-8 text-slate-950" />
        <span className="text-xl font-bold tracking-tighter text-slate-950">Oren</span>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl w-full text-center space-y-12 z-10"
      >
        <motion.div 
          variants={fadeUp} 
          className="relative inline-block"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-emerald-50 flex items-center justify-center mx-auto border border-emerald-100/50 shadow-2xl shadow-emerald-100/20">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 stroke-[1.5]" />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-400/10 rounded-full blur-xl"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.h1 
            variants={fadeUp} 
            className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-950"
          >
            Application <br/>Received.
          </motion.h1>
          <motion.div 
            variants={fadeUp}
            className="space-y-4 max-w-md mx-auto"
          >
            <p className="text-xl text-slate-500 font-normal leading-relaxed tracking-tight">
              Protocol initiated. Our clinical operations team will review your inquiry and contact you within 24 hours.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeUp} 
          className="flex flex-col items-center gap-10 pt-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Secure Transmission</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Confirmation Sent</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="group relative inline-flex items-center gap-8 px-12 py-5 rounded-full bg-slate-950 text-white font-semibold transition-all duration-500 hover:bg-slate-800 active:scale-95 shadow-2xl shadow-slate-200"
          >
            <span className="text-sm tracking-tight">Return to Home</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-slate-500 stroke-[1.5]" />
          </button>
        </motion.div>
      </motion.div>
      
      {/* Footer subtle text */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400"
      >
        Oren Clinical Infrastructure v1.0
      </motion.p>
    </div>
  );
};

export default ThankYou;