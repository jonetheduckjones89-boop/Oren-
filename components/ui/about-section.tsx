"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../lib/motion"

export function AboutSection() {
  return (
    <section className="relative flex items-center px-6 py-32 bg-slate-50 text-slate-950 border-b border-slate-200">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="space-y-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">The Platform</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-950">
            Clinical intelligence.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-normal">
            We provide infrastructure that automates patient management and operational workflows. Our objective is to bridge the gap between clinical expertise and technical capacity.
          </p>
          <ul className="space-y-5">
            {[
              "Deterministic lead tracking and synchronization",
              "Scalable workflows for clinical team alignment",
              "Automated patient communication protocols"
            ].map((text, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 text-slate-600 font-medium tracking-tight text-base"
              >
                <div className="w-1.5 h-1.5 bg-slate-950 rounded-full shrink-0" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm group bg-white p-4"
        >
          <img
            src="https://images.unsplash.com/photo-1581092580493-7e8a17b73b0e?w=900&auto=format&fit=crop&q=60"
            alt="Clinical interface"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2rem] grayscale opacity-70"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}