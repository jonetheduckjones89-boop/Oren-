
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Layers, Users, Lock, HandHelping, Network } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const values = [
  {
    icon: HeartPulse,
    title: "Clinical Empathy",
    description: "Our models are specifically tuned for medical context, understanding the human nuances that standard AI misses.",
    color: "text-rose-400",
    bg: "group-hover:bg-rose-500"
  },
  {
    icon: Users,
    title: "Operational Synergy",
    description: "Replace disconnected tools with a unified operating system that aligns patient journeys with human care.",
    color: "text-emerald-400",
    bg: "group-hover:bg-emerald-500"
  },
  {
    icon: HandHelping,
    title: "Human-Grade Trust",
    description: "Built on HIPAA-compliant architecture with end-to-end encryption, ensuring your data is treated with clinical dignity.",
    color: "text-indigo-400",
    bg: "group-hover:bg-indigo-500"
  }
];

export function ValueProposition() {
  return (
    <section className="py-40 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-4 block">WHY OREN</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 mb-8">Designed for the future of care</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We bridge the gap between advanced intelligence and clinical reality, providing the foundation for high-performance medical practices.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {values.map((v, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center text-center gap-8 p-6 group transition-all duration-700"
              variants={fadeUp}
            >
              <div className={`w-20 h-20 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center shadow-sm transition-all duration-700 ${v.bg} ${v.color} group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-xl`}>
                <v.icon className="w-9 h-9 stroke-[1px]" />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">{v.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
