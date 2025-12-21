import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../lib/motion';
import { Logo } from '../components/ui/logo';

const Vision: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 selection:bg-slate-950 selection:text-white">
      {/* SECTION 1 — PAGE INTRO (ABOVE THE FOLD) */}
      <section className="relative px-6 py-32 md:py-48 bg-slate-950 overflow-hidden">
        {/* Vision Specific: Deep radial glow + larger architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10rem_10rem] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/20 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            className="flex flex-col items-start z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="mb-16"
            >
              <Logo className="w-24 h-24 text-white opacity-90" />
            </motion.div>

            <div className="max-w-xl text-left">
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-500 block mb-10"
              >
                Operating Thesis
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8 leading-[1.05]"
              >
                Why we started
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-2xl md:text-3xl text-slate-400 font-normal leading-relaxed tracking-tight"
              >
                A personal problem that revealed a global one.
              </motion.p>
            </div>
          </motion.div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="w-full max-w-[90%] lg:max-w-[1200px] overflow-hidden rounded-[2rem] border border-white/5">
              <img
                src="/images/founders.jpg"
                alt="Founders at airport"
                className="w-full h-auto block object-contain grayscale-[0.2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE STORY CONTINUES */}
      <section className="px-6 py-40 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-8 text-xl md:text-2xl text-slate-800 font-medium leading-[1.6] tracking-tight">
              <p>My name is Behruz. I’ve always been interested in building things.</p>
              <p>
                When I came to Korea to study at Kangwon National University, I was far from my family.
                I especially missed my mother.
              </p>
              <p>
                She worked at a skin care clinic. Because of the constant flow of patients, she often couldn’t talk for weeks.
                She was overwhelmed by manual work — creating individual patient reports, organizing files, and keeping everything up to date.
              </p>
              <p>
                I saw how delays in reporting led to delays in care. That moment made the problem real.
                I knew this was something that had to be fixed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — COFOUNDER PERSPECTIVE */}
      <section className="px-6 pb-48 bg-white">
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="space-y-6 text-xl md:text-2xl text-slate-800 font-medium leading-[1.6] tracking-tight">
              <p>My cofounder, Asadbek, is a technical builder by nature.</p>
              <p>
                Before this, he created multiple projects — mostly games — driven by curiosity and experimentation.
                He enjoys building systems, breaking them, and rebuilding them better.
              </p>
              <p>
                When we connected, it was clear we shared the same mindset:
                build something real, useful, and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — GLOBAL VISION */}
      <section className="px-6 py-56 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400 block">The Goal</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
                Fully automate patient reporting for clinics around the world.
              </h2>
            </div>

            <div className="space-y-8 text-xl md:text-2xl text-slate-800 font-medium leading-[1.6] tracking-tight">
              <p>Clinics should not be slowed down by paperwork.</p>
              <p>Doctors should not spend time on repetitive documentation.</p>
              <p>Patients should not receive care late because systems are inefficient.</p>
              <p className="pt-8 text-slate-950 border-t border-slate-200/60">
                We are building infrastructure that allows clinics to focus on care —
                while reports, data, and workflows run automatically in the background.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — CLOSING STATEMENT */}
      <section className="px-6 py-48 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-14"
          >
            <div className="w-32 h-px bg-slate-200 mx-auto" />
            <p className="text-2xl md:text-4xl lg:text-5xl text-slate-950 font-semibold leading-[1.3] tracking-tight">
              “To bring this vision to life globally, we are preparing to raise funding.
              This will allow us to scale responsibly, work closely with clinics,
              and build a system that truly supports healthcare teams worldwide.”
            </p>
            <div className="pt-12">
              <button
                onClick={() => navigate("/investors")}
                className="text-[13px] font-bold uppercase tracking-[0.4em] text-slate-900 hover:text-slate-600 transition-colors border-b-2 border-slate-900 hover:border-slate-400 pb-2"
              >
                Become an Investor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Vision;