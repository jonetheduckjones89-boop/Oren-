"use client"

import type React from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { fadeUp } from "../../lib/motion"

export function LetsWorkTogether() {
  const navigate = useNavigate();

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate("/early-access")
  }

  return (
    <section className="flex min-h-[95vh] items-center justify-center px-6 py-24 bg-white relative overflow-hidden">
      {/* Home Specific: Mesh Gradient + Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_800px_at_100%_200px,#f8fafc,transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_800px_at_0%_800px,#f1f5f9,transparent)]" />
      
      <div className="relative flex flex-col items-center gap-14 w-full max-w-7xl z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">
              Clinical Platform Architecture
            </span>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-slate-950 leading-[1.1] max-w-5xl mx-auto"
          >
            <span className="block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 bg-clip-text text-transparent pb-2">
              AI for clinical operations.
            </span>
            <span className="block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 bg-clip-text text-transparent pb-2">
              Designed to reduce delays, errors, and manual reporting.
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <button
            onClick={handleAction}
            className="group flex items-center gap-8 px-12 py-5 rounded-full bg-slate-950 text-white transition-all duration-500 ease-out hover:bg-slate-800 active:scale-95 shadow-2xl shadow-slate-300"
          >
            <Calendar className="w-4 h-4 text-slate-500 stroke-[1.5]" />
            <span className="text-sm tracking-tight font-semibold">Get Early Access</span>
            <span className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-slate-500">
              <ArrowUpRight className="w-full h-full stroke-[1.5]" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}