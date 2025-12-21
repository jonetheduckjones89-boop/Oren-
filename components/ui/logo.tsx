
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Top Bar - Positioned towards the right */}
      <rect x="33" y="19" width="44" height="4" fill="currentColor" />
      
      {/* Right Bar - Positioned towards the bottom */}
      <rect x="74" y="32" width="4" height="44" fill="currentColor" />
      
      {/* Bottom Bar - Positioned towards the left */}
      <rect x="23" y="74.5" width="44" height="4" fill="currentColor" />
      
      {/* Left Bar - Positioned towards the top */}
      <rect x="19.5" y="24" width="4" height="44" fill="currentColor" />
      
      {/* Diagonal Bar - Slanted top-right to bottom-left */}
      <rect 
        x="48" 
        y="30" 
        width="4" 
        height="40" 
        transform="rotate(25 50 50)" 
        fill="currentColor" 
      />
    </svg>
  );
};
