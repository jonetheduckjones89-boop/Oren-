import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../lib/motion';
import { Logo } from '../components/ui/logo';
import { ArrowRight, Globe, Shield, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-950 font-sans selection:bg-slate-950 selection:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-48 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Logo className="w-20 h-20 text-slate-950" />
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-8xl font-semibold tracking-tighter text-slate-950 leading-[0.95] mb-10"
            >
              Oren.
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-2xl md:text-4xl text-slate-500 font-normal leading-tight max-w-4xl tracking-tight"
            >
              The intelligence layer for clinical excellence. <br/>
              <span className="text-slate-950 font-medium">Rebuilding medical operations from the ground up.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sitemapped Sections */}
      <section className="py-48 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Column 1: Platform */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeUp} className="space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">Platform</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950">Structural Logic.</h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  { title: "Solutions", path: "/product", desc: "Automating patient journeys with clinical-grade AI agents.", icon: Zap },
                  { title: "Operating Thesis", path: "/vision", desc: "The foundational 'Why' behind our infrastructure.", icon: Globe },
                  { title: "Team Philosophy", path: "/team-philosophy", desc: "How we build, who we hire, and why mindset matters.", icon: Shield },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    onClick={() => navigate(item.path)}
                    className="group p-8 bg-white border border-slate-200 rounded-3xl cursor-pointer hover:border-slate-400 transition-all duration-500 shadow-sm hover:shadow-xl"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                          <h3 className="text-xl font-bold tracking-tight text-slate-950">{item.title}</h3>
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed tracking-tight max-w-xs">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Company */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeUp} className="space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">Company</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950">Active Growth.</h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  { title: "Careers", path: "/careers", desc: "Building the next generation of medical infrastructure.", icon: Globe },
                  { title: "VC Portal", path: "/investors", desc: "Strategic data for Venture Capital partners.", icon: TrendingUp },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    onClick={() => navigate(item.path)}
                    className="group p-8 bg-white border border-slate-200 rounded-3xl cursor-pointer hover:border-slate-400 transition-all duration-500 shadow-sm hover:shadow-xl"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                          <h3 className="text-xl font-bold tracking-tight text-slate-950">{item.title}</h3>
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed tracking-tight max-w-xs">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* High-level Mission statement for the company block */}
              <motion.div variants={fadeUp} className="p-10 bg-slate-950 rounded-[3rem] text-white space-y-6 shadow-2xl shadow-slate-200">
                <p className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed">
                  "Our goal is not to improve the status quo, but to replace it with systems that are deterministic, scalable, and built for the long term."
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500">
                  Mission Protocol v1.0
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strategic Vision Footer */}
      <section className="py-64 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-16"
          >
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter text-slate-950">
              For Venture Capital.
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-normal leading-relaxed tracking-tight max-w-2xl mx-auto">
              Access our operational thesis, growth metrics, and investor-specific documentation in our private portal.
            </p>
            <div className="pt-8">
              <button 
                onClick={() => navigate("/investors")}
                className="group flex items-center justify-center gap-8 mx-auto px-14 py-6 rounded-full bg-slate-950 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-2xl shadow-slate-300"
              >
                Access VC Portal
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
