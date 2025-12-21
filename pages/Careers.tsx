import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Globe, Users, Code, Layout, Briefcase, Sparkles, Puzzle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { fadeUp, staggerContainer } from "../lib/motion";

const jobs = [
  {
    title: "Staff Frontend Engineer",
    location: "Global / Remote",
    team: "Engineering",
    icon: Code,
    description: "Architecting the visual intelligence layer for clinical operations."
  },
  {
    title: "Senior Product Designer",
    location: "Global / Remote",
    team: "Design",
    icon: Layout,
    description: "Defining the interface for deterministic healthcare workflows."
  },
  {
    title: "AI Systems Engineer",
    location: "Global / Remote",
    team: "Intelligence",
    icon: Shield,
    description: "Building medical-grade LLM pipelines and RAG architectures."
  },
  {
    title: "Clinical Operations Manager",
    location: "Global / Remote",
    team: "Medical",
    icon: Briefcase,
    description: "Bridging the gap between software and frontline medical teams."
  },
  {
    title: "Success Architect",
    location: "Global / Remote",
    team: "Growth",
    icon: Users,
    description: "Partnering with clinics to deploy and scale autonomous operations."
  },
];

const Careers: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 selection:bg-slate-950 selection:text-white relative">
      {/* Careers Specific: Diagonal Subtle Stripe Pattern */}
      <div className="fixed inset-0 bg-[repeating-linear-gradient(45deg,#f8fafc_0,#f8fafc_1px,transparent_0,transparent_50%)] bg-[size:20px_20px] pointer-events-none opacity-60" />

      <div className="relative z-10">
        <HeroSection
          title="Infrastructure is built by people."
          subtitle="Join a team of engineers, doctors, and designers rethinking the operational backbone of healthcare. No legacy, just logic."
          primaryBtnText="Join the Team"
          primaryBtnPath="/apply"
          secondaryBtnText="Our Philosophy"
          secondaryBtnPath="/team-philosophy"
        />

        {/* Primary Hero Visual Section */}
        <section className="px-6 -mt-16 mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-100 relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Oren Collaborative Space"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12">
                <div className="bg-white px-6 py-3 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800">Core architecture roles available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="max-w-3xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-500 block mb-8">Global Openings</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight text-slate-900 leading-[0.95]">Deterministic <br />Opportunities.</h2>
                <p className="text-slate-800 text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
                  We’re looking for bold, precise thinkers who care about making healthcare reliable and human.
                </p>
              </div>
              <div className="flex flex-col items-end gap-4 text-right">
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 rounded-xl border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm bg-slate-50">
                    {jobs.length} Active Missions
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-bold tracking-tight uppercase tracking-[0.1em]">Built for a distributed, high-trust team.</p>
              </div>
            </motion.div>

            {/* Jobs List - Thinner Rounded Blocks */}
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  className="group relative px-6 py-5 md:px-10 md:py-8 bg-white border border-slate-200/60 rounded-2xl transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-100"
                  variants={fadeUp}
                >
                  <div className="flex items-start md:items-center gap-10 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 transition-all duration-300 shrink-0">
                      <job.icon className="w-6 h-6 stroke-[1.25px]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-950">
                          {job.team}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="flex items-center gap-2 text-slate-950 text-xs font-bold uppercase tracking-[0.2em]">
                          <Globe className="w-3 h-3 stroke-[2.5px]" />
                          {job.location}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight mb-1">
                        {job.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-950 font-normal max-w-2xl leading-relaxed tracking-tight">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shrink-0 w-full md:w-auto justify-end">
                    <button
                      onClick={() => navigate("/apply")}
                      className="text-slate-950 hover:text-slate-500 transition-colors p-4"
                      aria-label="Apply to role"
                    >
                      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                        <path d="M0 8H58M58 8L48 1M58 8L48 15" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Refined General Application CTA */}
            <motion.div
              className="mt-48 p-12 md:p-24 rounded-[3.5rem] bg-white border border-slate-200 text-center relative overflow-hidden group/cta shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Subtle technical background decoration */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.02] pointer-events-none" />

              <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Refined Icon Badge */}
                <motion.div
                  className="mb-10 w-24 h-24 rounded-3xl bg-white border border-slate-200 flex items-center justify-center shadow-2xl shadow-slate-200/50 group-hover/cta:scale-110 group-hover/cta:rotate-3 transition-all duration-700 ease-out"
                  whileHover={{ rotate: 12 }}
                >
                  <div className="relative">
                    <Puzzle className="w-10 h-10 text-slate-950 stroke-[1.25]" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </div>
                </motion.div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-950 mb-8 max-w-2xl">
                  Exceptional talent <br />always fits.
                </h3>

                <p className="text-slate-600 text-xl md:text-2xl mb-14 max-w-2xl font-normal leading-relaxed tracking-tight">
                  If you are an engineer, designer, or clinician building for the long term, we want to hear from you.
                </p>

                <button
                  onClick={() => navigate("/apply")}
                  className="text-slate-950 hover:text-slate-500 transition-colors p-4"
                  aria-label="General Application"
                >
                  <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                    <path d="M0 8H58M58 8L48 1M58 8L48 15" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;