import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../../lib/motion';

const tools = [
  { 
    name: "Google Drive", 
    src: "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg" 
  },
  { 
    name: "Notion", 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
  },
  { 
    name: "Zoom", 
    src: "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" 
  },
  { 
    name: "Slack", 
    src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" 
  },
  { 
    name: "OpenAI", 
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
  },
  { 
    name: "Supabase", 
    src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" 
  },
];

export function FounderEndorsement() {
  const navigate = useNavigate();

  const handleAction = () => {
    navigate("/early-access");
  };

  return (
    <section className="py-56 px-6 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-16"
        >
          <div className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight max-w-5xl mx-auto">
              Oren provides the infrastructure for clinical efficiency.
            </h2>
            <p className="text-2xl md:text-4xl text-slate-950 font-normal leading-relaxed max-w-5xl mx-auto tracking-tight">
              "By consolidating patient records, appointments, and documentation into a single system, we allow practitioners to focus on care rather than administrative overhead."
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-3 pt-8">
            <p className="text-slate-950 font-semibold text-xl md:text-2xl tracking-tight">
              Behruz Obidov
            </p>
            <p className="text-slate-400 text-[12px] font-bold uppercase tracking-[0.5em]">Founder, Oren</p>
          </div>

          <div className="pt-12 flex flex-col items-center gap-12">
            <button
              onClick={handleAction}
              className="group inline-flex items-center gap-8 px-14 py-6 rounded-full bg-slate-950 text-white transition-all duration-300 ease-out hover:bg-slate-800 active:scale-95 shadow-xl shadow-slate-200"
            >
              <Sparkles className="w-5 h-5 text-slate-400 stroke-[1.25]" />
              <span className="text-lg tracking-tight font-semibold">Get Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-slate-500 stroke-[1.25]" />
            </button>
          </div>

          {/* Tools Integration Grid */}
          <div className="pt-40">
            <motion.p 
              variants={fadeUp}
              className="text-[14px] md:text-base font-bold uppercase tracking-[0.4em] text-slate-400 mb-20"
            >
              Integrated with your stack
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-20 justify-items-center"
            >
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center gap-8 group w-full max-w-[180px]"
                >
                  <div className="w-full h-32 rounded-[2.5rem] bg-white border border-slate-200 flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-200/50 group-hover:border-slate-300 px-8">
                    <img 
                      src={tool.src} 
                      alt={tool.name} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-slate-950 transition-colors duration-300 group-hover:text-slate-900">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}