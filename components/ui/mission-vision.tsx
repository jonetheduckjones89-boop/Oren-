
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, Globe, Users, Activity } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const missionItems = [
  { 
    icon: Heart, 
    title: "Patient Care Integrity", 
    desc: "Every automation is verified to ensure human data remains sacred.",
    color: "text-rose-400",
    bg: "group-hover:bg-rose-500"
  },
  { 
    icon: Sparkles, 
    title: "Clinical Radiance", 
    desc: "Unlocking clinic potential through intelligent, elegant assistance.",
    color: "text-amber-400",
    bg: "group-hover:bg-amber-500"
  },
  { 
    icon: Users, 
    title: "Human Connection", 
    desc: "Building bridges between practitioners and their community.",
    color: "text-indigo-400",
    bg: "group-hover:bg-indigo-500"
  }
];

export function MissionVision() {
  return (
    <section className="py-56 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 mb-48">
          {/* Vision Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm">
              <Eye className="w-5 h-5 text-indigo-400 stroke-[1px]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">The Vision</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[1]">Empowering clinics <br/>on a global scale.</h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium">
              To empower clinics worldwide with seamless automation of patient data, 
              ensuring no patient suffers due to inefficiencies, and helping doctors 
              spend more time caring and less time managing paperwork.
            </p>
            <div className="flex items-center gap-6 pt-6">
               <Globe className="w-8 h-8 text-indigo-300 animate-pulse stroke-[1px]" />
               <span className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">World-Class Healthcare Infrastructure</span>
            </div>
          </motion.div>

          {/* Mission Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12"
          >
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/10">
              <Target className="w-5 h-5 stroke-[1px]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">The Mission</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[1]">Robust integration <br/>of clinical tools.</h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium">
              We aim to provide clinics of all types with a robust platform that integrates 
              patient data, communications, and clinical tools—reducing human error, 
              improving efficiency, and creating a better experience for both patients 
              and medical staff.
            </p>
          </motion.div>
        </div>

        {/* Mission Icon Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {missionItems.map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="bg-white p-16 rounded-[4rem] border border-slate-200 shadow-[0_30px_90px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(15,23,42,0.06)] transition-all duration-700 group relative overflow-hidden"
            >
              <div className={`w-24 h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-sm transition-all duration-700 ${item.bg} ${item.color} group-hover:text-white group-hover:border-transparent group-hover:scale-110 mb-12`}>
                <item.icon className="w-10 h-10 stroke-[1px]" />
              </div>
              <h3 className="text-3xl font-bold text-slate-950 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
              
              {/* Decorative accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`}>
                <item.icon className="w-full h-full -rotate-12 translate-x-8 -translate-y-8 stroke-[1px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
