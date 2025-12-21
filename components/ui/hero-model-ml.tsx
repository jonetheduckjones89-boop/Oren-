
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export function HeroModelML() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-5xl mx-auto">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-12"
      >
        Automation, Organization,<br />and Insight
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl"
      >
        Oren connects every corner of your clinic’s digital world—patient files, medical reports, emails, appointments, and documents. It organizes, analyzes, and automates data so clinics can deliver accurate insights and care—faster and smarter than ever before.
      </motion.p>
    </section>
  );
}
