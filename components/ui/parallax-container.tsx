import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  offset = 50, 
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};
