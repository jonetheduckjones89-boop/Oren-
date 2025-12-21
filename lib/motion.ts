import { Variants, Transition } from 'framer-motion';

// PRECISE HIGH-END EASING: Inspired by modern luxury design systems (Apple/Vercel)
export const modelEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transition: Transition = {
  duration: 0.8,
  ease: modelEasing
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { ...transition } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: modelEasing } 
  }
};
