"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fadeUp } from '../../lib/motion';

export function BookADemoCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-56 px-6 text-center bg-white border-t border-slate-200/60">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col items-center gap-14"
      >
        <div className="space-y-8">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-950 leading-tight">System integration.</h3>
          <p className="text-slate-600 text-xl md:text-3xl font-normal max-w-3xl mx-auto tracking-tight leading-relaxed">
            Schedule a brief technical consultation to evaluate your clinical workflow.
          </p>
        </div>
        
        <button
          onClick={() => navigate("/early-access")}
          className="group relative flex items-center gap-10 px-16 py-7 rounded-full bg-slate-950 text-white transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] shadow-2xl shadow-slate-200"
        >
          <Sparkles className="w-6 h-6 text-slate-400 group-hover:rotate-12 transition-transform stroke-[1.25]" />
          <span className="text-xl tracking-tight font-semibold">Get Early Access</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform text-slate-500 stroke-[1.25]" />
        </button>
      </motion.div>
    </section>
  );
}