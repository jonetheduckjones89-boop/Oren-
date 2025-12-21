import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "../lib/motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  isSolutions?: boolean;
  primaryBtnText?: string;
  primaryBtnPath?: string;
  secondaryBtnText?: string;
  secondaryBtnPath?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Infrastructure for modern medicine.", 
  subtitle = "Oren connects clinic operations into a unified system, automating administrative flows so you can focus on care.",
  isSolutions = false,
  primaryBtnText = "Get Early Access",
  primaryBtnPath = "/early-access",
  secondaryBtnText = "Learn More",
  secondaryBtnPath
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center px-6 bg-slate-50 py-32">
      <div className="max-w-6xl w-full flex flex-col items-center z-10 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-10 text-slate-950 leading-[1.05]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl max-w-4xl text-slate-500 leading-relaxed font-medium tracking-tight mb-14"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-6"
        >
          <button 
            onClick={() => navigate(primaryBtnPath)}
            className="px-10 py-4 bg-slate-950 text-white rounded-full text-base font-semibold transition-all duration-200 ease-out hover:bg-slate-800 active:scale-95"
          >
            {primaryBtnText}
          </button>
          {!isSolutions && secondaryBtnPath && (
            <button 
              onClick={() => navigate(secondaryBtnPath)}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full text-base font-semibold transition-all duration-200 ease-out hover:border-slate-400 active:scale-95"
            >
              {secondaryBtnText}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;