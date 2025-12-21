
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const testimonials = [
  {
    quote: "Oren didn't just automate our scheduling—it understood our patient's needs. We've seen a 35% increase in throughput in just two months.",
    author: "Dr. Elena Vance",
    role: "Chief of Staff, North Hills Wellness",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=60"
  },
  {
    quote: "The deep EMR integration is what sets Oren apart. It's not just a wrapper; it's a real clinical tool that respects our existing data flow.",
    author: "Marcus Thorne",
    role: "COO, MedCore Systems",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=400&auto=format&fit=crop&q=60"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-4 block">TRUSTED BY CLINICIANS</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Proven clinical performance</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col group"
              variants={fadeUp}
            >
              <div className="mb-8">
                <Quote className="w-10 h-10 text-indigo-100 mb-6" />
                <p className="text-2xl leading-relaxed text-slate-800 font-medium tracking-tight italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-slate-50">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover grayscale brightness-90 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{t.author}</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
