
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export function EndorsementSection() {
  return (
    <section className="py-32 md:py-48 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] max-w-5xl mx-auto">
            Oren is building something remarkable with the potential to entirely transform the medical industry. By combining a simple, user-friendly interface with a powerful agentic system that integrates seamlessly across all your data sources, Oren helps you work smarter, uncover deeper insights, and significantly improve efficiency. That’s Oren.
          </h2>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-500 font-medium text-sm md:text-base">
              — Sir Noel Quinn, Group CEO at HSBC
            </p>
          </div>

          <div className="pt-8">
            <button 
              onClick={() => window.open("https://cal.com/jatin-yadav05/15min", "_blank")}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-900 hover:text-indigo-600 transition-colors border-b border-slate-900 hover:border-indigo-600 pb-1"
            >
              Speak with us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
