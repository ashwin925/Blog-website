import React from 'react';
import { motion } from 'framer-motion';
import earth from '../images/earth.jpeg';

const FloatingEarth = () => {
  return (
    <motion.div
      className="absolute z-10 top-[-15px] left-[200px]" // This will position it at the top-left
      style={{
        borderRadius: '50%',
        objectFit: 'cover', 
      }}
      initial={{ x: '-100%', y: '50%', rotate: 0 }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        x: { duration: 30, repeat: Infinity, repeatType: 'reverse' },
        y: { duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
      }}
    >
      <img
        src= {earth}
        alt="Floating Astronaut"
        width={150}
        height={150}
        className="w-32 h-32 md:w-40 md:h-40 filter rounded-3xl]"
        style={{ maxWidth: '100%', height: 'auto' }} // Ensures responsive behavior
      />
    </motion.div>
  );
};

export default FloatingEarth;
