"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  FileSearch, 
  MessageSquare, 
  Calendar, 
  Eye, 
  Link as LinkIcon 
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const technicalBlocks = [
  {
    icon: Cpu,
    title: "Patient Data Automation",
    description: "Automatically process medical documents and update patient records with structured, reliable data."
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description: "Ingest files from Drive, Dropbox, and Box, and organize them with clinical-grade structure."
  },
  {
    icon: MessageSquare,
    title: "Communication Sync",
    description: "Bring emails, messages, and conversations into one continuous clinical timeline."
  },
  {
    icon: Calendar,
    title: "Scheduling & Coordination",
    description: "Unify calendars, appointments, and reminders across teams and systems."
  },
  {
    icon: Eye,
    title: "Operational Visibility",
    description: "Turn fragmented workflows into clear, auditable operational insight."
  },
  {
    icon: LinkIcon,
    title: "System Connectivity",
    description: "Connect modern clinical tools without changing how your team works."
  }
];

export function UnifiedDesignGrid() {
  return (
    <section className="py-48 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-950 leading-tight">
              Everything you do — <span className="italic opacity-80">faster.</span>
            </h3>
            <p className="text-lg md:text-2xl text-slate-950 font-normal tracking-tight max-w-3xl mx-auto leading-relaxed">
              Here are a few practical examples using real workflows.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {technicalBlocks.map((block, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-50 p-14 flex flex-col gap-8 transition-colors duration-500 hover:bg-slate-100/50 group"
            >
              <div className="text-slate-950 transition-transform duration-500 group-hover:scale-110">
                <block.icon className="w-8 h-8 stroke-[2.25]" />
              </div>
              <div className="space-y-5">
                <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950">
                  {block.title}
                </h4>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal tracking-tight">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}