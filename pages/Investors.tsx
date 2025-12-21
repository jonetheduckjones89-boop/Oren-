import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Mail, Target, Zap, Lock, Users, LineChart } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const Investors: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactEmail = "bobidov062@gmail.com";

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-slate-950 selection:text-white relative">
      {/* Investors Specific: Structural Architectural Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:200px_200px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="fixed top-8 left-8 z-[110] group flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-6 h-6 text-slate-950 group-hover:-translate-x-1 transition-transform stroke-[1.5]" />
        </button>

        {/* Header Info */}
        <div className="pt-32 pb-12 px-6 border-b border-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Venture Capital Portal</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium italic">This page is intentionally designed for venture capital investors only.</p>
            </div>
          </div>
        </div>

        {/* Psychological Hook */}
        <section className="pt-32 md:pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="space-y-8">
                <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight text-slate-950">
                  OREN is building the <span className="text-slate-950">AI Agent Operating Layer</span> for regulated enterprises.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-800 font-normal leading-relaxed tracking-tight">
                  Human-level conversations. Enterprise-level reliability. <br className="hidden md:block" /> Infrastructure-level returns.
                </motion.p>
              </div>

              {/* Straight Black Thin Line - Darker */}
              <motion.div variants={fadeUp} className="w-full h-px bg-slate-950/20" />

              <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-8">
                <button
                  onClick={() => window.location.href = `mailto:${contactEmail}?subject=Request Deck`}
                  className="group flex items-center gap-4 px-10 py-4 bg-slate-950 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  Request Deck
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Clarity Section */}
        <section className="py-48 px-6 bg-white border-t border-slate-50 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-32"
            >
              <div className="text-center space-y-8">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-950">What OREN Actually Is</motion.h2>
                <motion.p variants={fadeUp} className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px]">Clarity &gt; Hype</motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <motion.div variants={fadeUp} className="space-y-12">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-6">OREN is not:</h3>
                  <ul className="space-y-8">
                    {["A chatbot", "A wrapper around an API", "A demo-driven AI tool"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-400 text-xl font-medium">
                        <div className="w-1.5 h-px bg-slate-200" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-12">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-slate-950 border-b border-slate-950 pb-6">OREN is:</h3>
                  <ul className="space-y-8">
                    {["An operating system for AI agents", "Designed for production, not experiments", "Built where failure is expensive"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-950 text-xl font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Worth Funding Section */}
        <section className="py-48 px-6 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="relative max-w-4xl mx-auto space-y-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-20"
            >
              <div className="space-y-8">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-semibold tracking-tighter">The Problem Worth Funding</motion.h2>
                <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                  In regulated enterprises: missed calls = lost revenue. Human agents don’t scale. Existing AI breaks under real-world constraints.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="p-12 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm space-y-10">
                <p className="text-2xl md:text-3xl font-medium tracking-tight">
                  Despite massive AI hype, <span className="text-white underline decoration-white/20 underline-offset-8">most workflows remain human-only</span>.
                </p>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                  This gap is structural — and that’s why it’s venture-scale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Moat & Strategy Grid */}
        <section className="py-56 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {[
                {
                  icon: Zap,
                  title: "The Solution",
                  desc: "Deploys agents that communicate naturally, handle millions of interactions, and integrate into existing systems. Replaces labor, not software."
                },
                {
                  icon: Lock,
                  title: "Moat Framing",
                  desc: "OREN competes on reliability and ownership. Every client increases switching costs. Every deployment strengthens the system."
                },
                {
                  icon: Users,
                  title: "Founder-Market Fit",
                  desc: "OREN exists because execution — not intelligence — is the bottleneck. Built after seeing businesses fail at handling inbound demand."
                },
                {
                  icon: Target,
                  title: "Market Opportunity",
                  desc: "Healthcare communications: $30B+. Enterprise support: $50B+. OREN enters vertically, expands horizontally. Classic playbook."
                },
                {
                  icon: LineChart,
                  title: "Business Model",
                  desc: "B2B SaaS. MRR. Usage-based scaling. Revenue grows with client success. High retention built into the infrastructure layer."
                },
                {
                  icon: LineChart,
                  title: "Capital Strategy",
                  desc: "Accelerates production hardening, compliance expansion, and GTM execution. No science projects. No distractions."
                }
              ].map((box, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:border-slate-400 hover:shadow-2xl transition-all duration-700 space-y-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all">
                    <box.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">{box.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium tracking-tight">{box.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final Ask */}
        <section className="py-64 px-6 bg-slate-50/50 border-t border-slate-200 text-center relative">
          <div className="max-w-4xl mx-auto space-y-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-semibold tracking-tighter">The Ask</motion.h2>

              <motion.div variants={fadeUp} className="p-12 md:p-20 bg-white border border-slate-200 rounded-[4rem] shadow-2xl shadow-slate-200/50">
                <p className="text-2xl md:text-4xl font-medium tracking-tight text-slate-950 leading-tight italic">
                  “Make OREN the default AI agent infrastructure for regulated enterprises.”
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-8 pt-12">
                <p className="text-slate-700 font-bold uppercase tracking-[0.2em] text-[11px]">If your fund believes:</p>
                <div className="flex flex-col items-center gap-6 text-xl md:text-2xl text-slate-950 font-medium tracking-tight">
                  <p>AI agents will replace large portions of human labor</p>
                  <p>Infrastructure creates outsized returns</p>
                  <p>Reliability beats novelty</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-16 flex flex-col items-center gap-10">
                <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Then we should talk.</h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-6 px-16 py-7 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-2xl shadow-slate-400 group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-xl font-bold tracking-tight uppercase tracking-widest">Request Deck</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-slate-400" />
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] pt-12">
                Private materials (Deck, Walkthrough, Deep Dive) available upon request.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Footer Signal */}
        <footer className="py-16 px-6 bg-white border-t border-slate-50 text-center relative">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">
            This page is not optimized for traffic. It’s optimized for conviction.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Investors;