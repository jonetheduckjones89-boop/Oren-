import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "../lib/motion";

const LeadCapture: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="lead-capture" className="flex flex-col items-center px-6 py-48 bg-white text-slate-900 overflow-hidden relative border-t border-slate-50">
      <motion.div 
        className="max-w-4xl w-full text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-10">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">Enterprise Ready</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[5rem] font-medium mb-10 tracking-[-0.04em] text-slate-900 leading-[1]">
          The intelligence layer <br/>your clinic deserves.
        </h2>
        
        <p className="text-slate-500 text-lg md:text-xl font-normal mb-16 max-w-xl mx-auto leading-relaxed tracking-tight">
          Elevate your practice with clinical-grade AI that transforms fragmented data into unified care.
        </p>
        
        <div className="flex flex-col items-center gap-14">
          <button
            onClick={() => navigate("/early-access")}
            className="group relative flex items-center gap-8 px-14 py-6 rounded-full bg-slate-950 text-white font-semibold transition-all duration-700 hover:bg-slate-800 active:scale-95 shadow-2xl shadow-slate-200"
          >
            <MessageSquare className="w-5 h-5 text-slate-400" />
            <span className="text-lg tracking-tight">Get Early Access</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 text-slate-500" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadCapture;