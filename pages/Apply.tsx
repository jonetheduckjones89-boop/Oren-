import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, ArrowRight, ArrowLeft, MessageSquareText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../lib/motion';
import { apiClient } from '../services/apiClient';

const Apply: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', about: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.about) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xpqarrzg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        navigate('/thank-you'); // Fallback
      }
    } catch (error) {
      console.error('Submission error:', error);
      navigate('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.includes('@') &&
    formData.about.trim().length > 10;

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate('/careers')}
        className="fixed top-8 left-8 z-[110] group flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 shadow-2xl transition-all hover:scale-105 active:scale-95"
        aria-label="Back to Careers"
      >
        <ArrowLeft className="w-6 h-6 text-slate-950 group-hover:-translate-x-1 transition-transform stroke-[1.5]" />
      </button>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.015] pointer-events-none" />

      <div className="w-full max-w-xl z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">
              Join the Mission
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-950">
              Begin Application.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 font-medium tracking-tight max-w-md mx-auto">
              Provide your core details to start the conversation with our engineering and product teams.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <motion.div variants={fadeUp} className="space-y-10">
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  <User className="w-3.5 h-3.5 stroke-[2]" />
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-b-2 border-slate-100 py-4 text-2xl text-slate-950 placeholder:text-slate-100 focus:outline-none focus:border-slate-950 transition-all rounded-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  <Mail className="w-3.5 h-3.5 stroke-[2]" />
                  Personal Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-b-2 border-slate-100 py-4 text-2xl text-slate-950 placeholder:text-slate-100 focus:outline-none focus:border-slate-950 transition-all rounded-none"
                  required
                />
              </div>



              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  <MessageSquareText className="w-3.5 h-3.5 stroke-[2]" />
                  Talk about yourself
                </label>
                <textarea
                  name="about"
                  placeholder="Your experience, your mindset, and why you want to build Oren..."
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="w-full bg-white border-b-2 border-slate-100 py-4 text-xl text-slate-950 placeholder:text-slate-100 focus:outline-none focus:border-slate-950 transition-all rounded-none min-h-[120px] resize-none"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="group relative flex items-center justify-center gap-10 px-16 py-6 rounded-full bg-slate-950 text-white font-semibold transition-all duration-300 hover:bg-slate-800 disabled:opacity-20 active:scale-95 shadow-2xl shadow-slate-200"
              >
                <span className="text-lg tracking-tight">Submit Application</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-slate-500" />
              </button>
              {isSubmitting && (
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 animate-pulse">Processing Profile...</p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Apply;