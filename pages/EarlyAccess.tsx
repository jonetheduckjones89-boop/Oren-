import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, Stethoscope, Mail, MessageSquareText, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../lib/motion';
import { apiClient } from '../services/apiClient';

type FormState = {
  clinicName: string;
  website: string;
  clinicType: string;
  email: string;
  message: string;
};

const EarlyAccess: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>({
    clinicName: '',
    website: '',
    clinicType: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = (Object.values(formData) as string[]).every(val => val.trim().length > 0);
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xpqarrzg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        console.error('Formspree Validation Error:', errorData);
        // Fallback: still navigate or show error. 
        // Given previous logic was "silently fail to thank you", we keep expectation unless critical.
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Submission network error:', error);
      navigate('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: 'clinicName', label: 'Clinic Name', icon: Building2, placeholder: 'What is your clinic called?' },
    { id: 'website', label: 'Website', icon: Globe, placeholder: 'https://yourclinic.com' },
    { id: 'clinicType', label: 'Clinic Type', icon: Stethoscope, placeholder: 'e.g. Dental, Aesthetics, Pediatrics' },
    { id: 'email', label: 'Work Email', icon: Mail, placeholder: 'you@yourclinic.com', type: 'email' },
    { id: 'message', label: 'Primary Pain Point', icon: MessageSquareText, placeholder: 'Tell us about your biggest automation challenge...', isTextArea: true },
  ];

  const isFormValid = (Object.values(formData) as string[]).every(val => val.trim().length > 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col md:flex-row">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="fixed top-8 left-8 z-[110] group flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 shadow-2xl transition-all hover:scale-105 active:scale-95"
      >
        <ArrowLeft className="w-6 h-6 text-slate-950 group-hover:-translate-x-1 transition-transform stroke-[1.5]" />
      </Link>

      {/* 33% Image Section */}
      <section className="w-full md:w-1/3 h-64 md:h-screen md:sticky md:top-0 overflow-hidden bg-slate-100">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
          alt="Modern clinical interior"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
      </section>

      {/* 66% Question Section */}
      <section className="w-full md:w-2/3 min-h-screen flex items-center justify-center p-8 md:p-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)] opacity-[0.015] pointer-events-none" />

        <div className="w-full max-w-2xl z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            <div className="text-left mb-4">
              <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400 block mb-6">Inquiry</motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 leading-tight">
                Onboarding Request.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl text-slate-500 font-medium tracking-tight">
                Provide your clinic details below to join our exclusive waitlist and begin the evaluation process.
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                {fields.slice(0, 4).map((field) => (
                  <motion.div key={field.id} variants={fadeUp} className="flex flex-col gap-4">
                    <label htmlFor={field.id} className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      <field.icon className="w-3.5 h-3.5 stroke-[2]" />
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof FormState]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full bg-white border-b-2 border-slate-100 py-3 text-lg md:text-xl text-slate-950 placeholder:text-slate-200 focus:outline-none focus:border-slate-950 transition-all rounded-none"
                      required
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <label htmlFor="message" className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  <MessageSquareText className="w-3.5 h-3.5 stroke-[2]" />
                  Primary Pain Point
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your biggest automation challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border-b-2 border-slate-100 py-3 text-lg md:text-xl text-slate-950 placeholder:text-slate-200 focus:outline-none focus:border-slate-950 transition-all min-h-[100px] resize-none rounded-none"
                  required
                />
              </motion.div>

              <motion.div variants={fadeUp} className="pt-8">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group inline-flex items-center gap-10 px-14 py-6 rounded-full bg-slate-950 text-white font-semibold transition-all duration-300 hover:bg-slate-800 disabled:opacity-20 active:scale-95 shadow-2xl shadow-slate-200"
                >
                  <span className="text-lg tracking-tight">Apply for Access</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500 text-slate-500 stroke-[1.5]" />
                </button>
                {isSubmitting && (
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 animate-pulse">Sending to Network...</p>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;