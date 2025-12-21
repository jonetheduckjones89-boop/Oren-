import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../lib/motion';

const Product: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-950 font-sans selection:bg-slate-950 selection:text-white">
      {/* Product Specific: Minimal Graph/Blueprint Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* SECTION 1 — PROBLEM (CLINICAL REALITY) */}
      <section className="relative pt-24 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
          >
            <div className="space-y-20">
              <motion.div variants={fadeUp} className="space-y-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">
                  Clinical Reality
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.05]">
                  Clinics are overwhelmed by patient data.
                </h1>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-12 max-w-3xl">
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  Clinics receive patient reports from many sources — labs, referrals, emails, uploads, and external systems.
                  These reports arrive unstructured, fragmented, and disconnected from clinical workflows.
                </p>
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  Staff must manually review, interpret, and transfer critical information into patient records.
                  This process is slow, error-prone, and heavily dependent on human availability.
                </p>
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  As a result, important findings are often reviewed late.
                  In clinical settings, delays in understanding patient data can directly impact treatment timing and outcomes.
                </p>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeUp}
              className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-100 group sticky top-32"
            >
              <img 
                src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=2070&auto=format&fit=crop" 
                alt="Distressed patient in a clinical setting" 
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — WHY THIS MATTERS */}
      <section className="relative py-48 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
                Delayed insight leads to delayed care.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-12 max-w-4xl">
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                When patient information is scattered across documents, inboxes, and systems,
                clinicians spend valuable time searching instead of acting.
              </p>
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                Every delay increases operational strain and clinical risk.
                The problem is not lack of data — it is lack of clarity, structure, and speed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — THE SOLUTION (OREN) */}
      <section className="relative py-56 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
          >
            <motion.div 
              variants={fadeUp}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-100 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                alt="Medical record on a digital tablet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none" />
            </motion.div>

            <div className="space-y-16">
              <motion.div variants={fadeUp} className="space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">
                  The Solution
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-tight">
                  Oren brings patient data into focus.
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-12 max-w-3xl">
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  Oren connects to the tools clinics already use and continuously processes incoming patient reports.
                </p>
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  It extracts relevant clinical information, structures it, and updates patient records automatically.
                  Reports are analyzed as they arrive, not days later.
                </p>
                <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                  Clinicians see what matters, when it matters — without changing their existing workflows.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — OUTCOME */}
      <section className="relative py-56 px-6 bg-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
                Faster understanding. Timely decisions.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-12 max-w-4xl">
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                With Oren, clinics reduce manual review, eliminate bottlenecks, and respond to patient needs sooner.
              </p>
              <p className="text-2xl md:text-3xl text-slate-600 leading-[1.4] font-normal tracking-tight">
                The result is a calmer workflow, clearer patient records, and better-timed care.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-20">
              <button 
                onClick={() => navigate("/early-access")}
                className="px-14 py-6 bg-slate-950 text-white rounded-full text-base font-semibold transition-all hover:bg-slate-800 active:scale-95 shadow-2xl shadow-slate-200"
              >
                Get Early Access
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Product;