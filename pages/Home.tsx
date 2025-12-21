import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';
import { LetsWorkTogether } from '../components/ui/lets-work-section';
import { FeatureBlocks } from '../components/ui/feature-blocks';
import { FounderEndorsement } from '../components/ui/founder-endorsement';
import { SecurityBlocks } from '../components/ui/security-blocks';
import { BookADemoCTA } from '../components/ui/book-a-demo-cta';
import { UnifiedDesignGrid } from '../components/ui/unified-design-grid';

const Home: React.FC = () => {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <LetsWorkTogether />

      {/* Infrastructure Section Header */}
      <div className="bg-white pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
             variants={fadeUp}
             className="flex flex-col items-center gap-6 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 block">
              Infrastructure
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100/50">
              <span className="text-[10px] font-bold tracking-tight">🩺 MEDICAL-SAFE VARIANT</span>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="mt-12 text-3xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight max-w-4xl mx-auto">
              We connect, reason, and deliver — <span>across the tools you already rely on.</span>
            </h2>
            
            <p className="mt-10 text-2xl md:text-4xl text-slate-950 font-normal max-w-4xl mx-auto tracking-tight leading-relaxed">
              Rebuilding the clinical data layer with deterministic intelligence. No migration required.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Practical Examples (Feature Blocks) */}
      <FeatureBlocks />

      {/* Founder Quote placed BELOW Infrastructure section */}
      <FounderEndorsement />

      {/* Technical Capabilities Grid with "Everything you do — faster" */}
      <UnifiedDesignGrid />

      {/* Security section (Compliance / Privacy by design) */}
      <SecurityBlocks />

      <BookADemoCTA />
    </main>
  );
};

export default Home;