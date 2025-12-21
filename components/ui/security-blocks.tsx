import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Shield,
  Fingerprint
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const SecurityMockup = ({ type }: { type: string }) => {
  if (type === 'hipaa') {
    return (
      <div className="w-full h-full bg-slate-50 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center justify-center gap-4 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-white transition-transform duration-700 group-hover:scale-105 shadow-xl shadow-slate-200">
            <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
          </div>
          <div className="space-y-2">
            <div className="text-[12px] font-bold text-slate-950 uppercase tracking-[0.3em]">HIPAA Certified</div>
            <div className="text-[10px] text-slate-900 font-bold opacity-40 uppercase tracking-widest">SOC2 Type II Ready</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-50 p-6 flex flex-col gap-3">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-200/60 p-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <Lock className="w-3.5 h-3.5 text-slate-950 stroke-[2]" />
            <div className="h-1.5 w-32 bg-slate-100 rounded-full" />
          </div>
          <div className="flex items-center gap-2">
             <div className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Encrypted</div>
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      ))}
      <div className="mt-auto p-4 bg-slate-950 rounded-xl flex items-center justify-between">
         <div className="flex items-center gap-3">
            <Fingerprint className="w-4 h-4 text-white/50" />
            <span className="text-[10px] text-white font-bold uppercase tracking-widest opacity-80">Active Integrity Protocol</span>
         </div>
         <div className="w-8 h-4 bg-white/10 rounded-full" />
      </div>
    </div>
  );
};

const trustBlocks = [
  {
    icon: Shield,
    title: "Regulatory Compliance.",
    description: "Data governance protocols built to meet HIPAA and SOC2 Type II standards.",
    mockup: "hipaa",
    badge: "REGULATION",
  },
  {
    icon: Lock,
    title: "Data Integrity.",
    description: "End-to-end encryption for all clinical data flows and internal communications.",
    mockup: "encryption",
    badge: "SECURITY",
  }
];

export function SecurityBlocks() {
  return (
    <section className="py-24 px-6 border-t border-slate-200/60 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">
            Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight">
            Privacy by design.
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {trustBlocks.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative flex flex-col rounded-[2.5rem] bg-white border border-slate-200/60 overflow-hidden transition-all duration-500 hover:border-slate-400 shadow-sm hover:shadow-xl hover:shadow-slate-100"
            >
              <div className="p-10 pb-0">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-950 bg-slate-50 border border-slate-200 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950">
                    <b.icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-slate-200 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-colors">
                    {b.badge}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight text-slate-950 leading-tight">{b.title}</h3>
                <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed max-w-lg mb-8 tracking-tight">
                  {b.description}
                </p>
              </div>

              <div className="relative mt-auto px-8 pb-8">
                <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden bg-white border border-slate-200/60 transition-all duration-500 group-hover:-translate-y-2 shadow-sm">
                   <SecurityMockup type={b.mockup} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
