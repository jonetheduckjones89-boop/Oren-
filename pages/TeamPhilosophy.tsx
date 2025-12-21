import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Compass, Users, ArrowLeft, Target, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fadeUp, staggerContainer } from "../lib/motion";

const TeamPhilosophy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-950 font-sans selection:bg-slate-950 selection:text-white">
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-[110]">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-6 h-6 text-slate-950 group-hover:-translate-x-1 transition-transform stroke-[1.5]" />
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">
              The Evolution
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-semibold tracking-tighter text-slate-950 leading-[0.95]">
              From Solo Work to <br/>a Real Team.
            </motion.h1>
            <motion.div variants={fadeUp} className="space-y-8 text-2xl md:text-3xl text-slate-600 font-normal leading-relaxed tracking-tight">
              <p>This project started as a one-person build. Idea, vision, design, early implementation — all done solo.</p>
              <p>That phase is ending.</p>
              <p className="text-slate-950 font-medium">To build something reliable, scalable, and worth trusting, this product now needs a small, focused team with the right skills and the right mindset.</p>
              <p>Not a big team. Not corporate. Just the right people.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section - Made Significantly Bigger and Clearer */}
      <section className="py-48 px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-32"
          >
            <motion.div variants={fadeUp} className="text-left max-w-4xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block mb-6">Positions</span>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-950">Who We’re Looking For</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Code,
                  title: "1. Software Engineer (Frontend / Full-Stack)",
                  items: [
                    "Knows modern JavaScript (React / Next.js)",
                    "Cares about clean UI and smooth interactions",
                    "Can turn product ideas into real features",
                    "Writes code that other people can understand"
                  ],
                  note: "Not just “make it work” — make it solid."
                },
                {
                  icon: Database,
                  title: "2. Backend Engineer",
                  items: [
                    "Understands APIs, databases, and deployment",
                    "Keeps things simple and reliable",
                    "Thinks about security, performance, and scale early",
                    "Knows when not to over-engineer"
                  ],
                  note: "Stability > complexity."
                },
                {
                  icon: Compass,
                  title: "3. Product-minded Builder (Optional, but powerful)",
                  items: [
                    "Thinks like a user, not just a developer",
                    "Questions bad ideas (including mine)",
                    "Understands why a feature exists, not just how to build it",
                    "Cares about long-term product quality"
                  ],
                  note: "This is about building the right thing, not just building fast."
                }
              ].map((role, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="bg-white p-14 md:p-16 rounded-[3.5rem] border border-slate-200/60 flex flex-col gap-12 shadow-sm group hover:shadow-2xl hover:border-slate-300 transition-all duration-700"
                >
                  <div className="w-20 h-20 rounded-[1.75rem] bg-slate-50 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all duration-700 border border-slate-200 shadow-sm">
                    <role.icon className="w-9 h-9 stroke-[1.5]" />
                  </div>
                  <div className="space-y-10 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 leading-tight">{role.title}</h3>
                    <ul className="space-y-6">
                      {role.items.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-slate-600 text-lg md:text-xl font-medium leading-tight">
                          <div className="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0 group-hover:bg-slate-950 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-10 border-t border-slate-100 flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                    <span className="text-[14px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                      {role.note}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="py-56 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-20"
          >
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 mb-8">The Mindset Matters <br/>More Than the Stack</h2>
              <p className="text-xl md:text-2xl text-slate-500 font-medium">Skills can be learned. Mindset can’t.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
              {[
                "Take ownership",
                "Communicate clearly",
                "Prefer progress over perfection",
                "Stay calm under uncertainty",
                "Think long-term, not just “ship and disappear”"
              ].map((point, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex items-center gap-6 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-xl md:text-2xl font-medium text-slate-800 tracking-tight">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="pt-20 flex flex-wrap gap-4 justify-center">
              {["No ego.", "No shortcuts that break later.", "No “just following tasks”."].map((text, i) => (
                <span key={i} className="px-6 py-3 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-[0.2em]">
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section - Enhanced with LARGER icons */}
      <section className="py-48 px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-24"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 text-center">How We Work</motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Users, text: "Small team" },
                { icon: ShieldCheck, text: "Clear responsibilities" },
                { icon: Target, text: "Direct communication" },
                { icon: Heart, text: "High trust" },
                { icon: Compass, text: "Real accountability" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="flex flex-col items-center gap-8 p-12 bg-white rounded-[3rem] border border-slate-200/60 text-center shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500"
                >
                  <item.icon className="w-14 h-14 text-slate-400 stroke-[1.25]" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-950 leading-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-center text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto italic">
              "Everyone understands why we’re building, not just what we’re building."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Goal Section */}
      <section className="py-64 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-semibold tracking-tighter">The Goal</motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-2xl md:text-4xl font-normal text-slate-400 tracking-tight">
              <p>Build a product that <span className="text-white font-medium">actually works</span>.</p>
              <p>Feels <span className="text-white font-medium">trustworthy</span>.</p>
              <p>Scales <span className="text-white font-medium">without breaking</span>.</p>
              <p>Is worth <span className="text-white font-medium">people’s time and money</span>.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="pt-24 space-y-6">
              <p className="text-slate-500 text-lg md:text-xl font-medium">This isn’t a side project anymore.</p>
              <p className="text-3xl md:text-5xl font-semibold text-white tracking-tight">It’s becoming a real company.</p>
              <div className="pt-12">
                <button 
                  onClick={() => navigate("/early-access")}
                  className="px-14 py-6 bg-white text-slate-950 rounded-full text-base font-semibold transition-all hover:bg-slate-200 active:scale-95 shadow-2xl"
                >
                  Join the Mission
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TeamPhilosophy;