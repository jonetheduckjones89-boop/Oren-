
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export function StorySection() {
  return (
    <section className="py-56 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="relative bg-white border border-slate-200 rounded-[4rem] p-16 md:p-24 shadow-2xl shadow-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Subtle accent decoration */}
          <div className="absolute top-0 right-32 w-px h-32 bg-gradient-to-b from-indigo-500/40 to-transparent" />
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-xl">
            <span className="text-indigo-600 font-bold text-3xl">“</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-[0.6em] text-indigo-600 mb-8 block">OUR STORY</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
                A solution born <br/>from care.
              </h2>
            </div>
            
            <div className="md:w-2/3 space-y-10 text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
              <p>
                My name is <span className="text-slate-900 font-bold">Behruz</span>. From a young age, I was passionate about building things and helping people. 
                While studying abroad in Korea at Kangwon National University, I often missed my parents, 
                especially my mom.
              </p>
              <p>
                She worked tirelessly in her skin care clinic, struggling to manage the flood of patient data. 
                I realized the challenges clinics face in analyzing and delivering patient reports efficiently. 
                That’s when I decided to build a solution to help clinics automate and streamline their 
                patient workflows.
              </p>
              <div className="pt-12 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg bg-slate-100">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Behruz" alt="Behruz" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-2xl">Behruz Obidov</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mt-2">Founder, Oren AI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}