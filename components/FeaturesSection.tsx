import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, CheckCircle, Shield, ClipboardList, Globe } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const features = [
  {
    icon: Users,
    title: "Deterministic Agents",
    description: "Agents trained for medical accuracy, managing triage and data flows with clinical precision.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  },
  {
    icon: MessageSquare,
    title: "Unified Interaction",
    description: "Consolidate SMS, email, and portal communications into a single intelligence layer.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  },
  {
    icon: CheckCircle,
    title: "EMR Integration",
    description: "Native synchronization with industry EMR standards to ensure data continuity.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  },
  {
    icon: Shield,
    title: "Medical Privacy",
    description: "Encryption protocols designed specifically for HIPAA and SOC2 compliance standards.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  },
  {
    icon: ClipboardList,
    title: "Automated Documentation",
    description: "System-generated summaries that reduce documentation latency for medical teams.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  },
  {
    icon: Globe,
    title: "Multi-Language Flow",
    description: "High-accuracy clinical processing in 50+ languages for diverse patient populations.",
    color: "text-slate-950",
    bg: "group-hover:bg-slate-950"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="p-12 rounded-[2.5rem] bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-700 group flex flex-col"
              variants={fadeUp}
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-10 transition-all duration-700 ${feature.bg} ${feature.color} group-hover:text-white group-hover:border-transparent group-hover:scale-105 shadow-sm`}>
                <feature.icon className="w-5 h-5 stroke-[1.75px]" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-tight text-slate-950">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-normal tracking-tight">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;