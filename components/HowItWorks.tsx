import React from 'react';
import { motion } from 'framer-motion';
import { HandHelping, ArrowRight, HeartPulse, Brain, Stethoscope } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const steps = [
  {
    icon: HandHelping,
    title: "Sync Assets",
    description: "Connect your existing EMR and patient channels into a unified human care network.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950",
  },
  {
    icon: HeartPulse,
    title: "Configure Oren",
    description: "Oren learns your clinical brand voice and patient protocols to act as a true human extension.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950",
  },
  {
    icon: Brain,
    title: "Deploy Intelligence",
    description: "Your clinical assistants manage intake and scheduling with deep empathy and logic.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950",
  },
  {
    icon: Stethoscope,
    title: "Enhance Outcomes",
    description: "Gain deep insights into patient satisfaction and clinical throughput autonomously.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950",
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400 mb-6 block">IMPLEMENTATION</span>
          <h2 className="text-5xl md:text-6xl font-medium mb-8 tracking-tight leading-[1.05] text-slate-950">The path to clinical autonomy.</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed tracking-tight">Modernize your medical operations in four measured phases, from integration to autonomous care.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="relative p-10 rounded-[3rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-700 flex flex-col group h-full hover:-translate-y-1"
              variants={fadeUp}
            >
              <div className="mb-12 flex justify-between items-start">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center transition-all duration-700 ${step.bg} ${step.color} group-hover:text-white group-hover:border-transparent`}>
                  <step.icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-[9px] font-semibold text-slate-300 tracking-[0.4em] uppercase pt-2">Phase 0{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-slate-950">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-normal text-sm">{step.description}</p>
              
              <div className={`mt-auto pt-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 text-slate-400`}>
                Protocol <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;