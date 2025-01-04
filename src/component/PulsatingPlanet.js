import React from 'react';
import space1 from '../images/space1.jpeg';
import space2 from '../images/space2.jpeg';
import { motion } from 'framer-motion';

const PulsatingPlanet = () => {
  // Generate a random path for x and y using arrays
  const getRandomPath = (steps = 5) => {
    const path = [];
    for (let i = 0; i < steps; i++) {
      path.push(`${Math.floor(Math.random() * 101) - 50}%`); // Random positions between -50% and 50%
    }
    return path;
  };

  return (
    <>
      {/* First Image with random movement effect */}
      <motion.div
        className="absolute z-10 top-20 right-20"
        animate={{
          x: getRandomPath(10), // Create random movement path for x
          y: getRandomPath(10), // Create random movement path for y
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop', // Continuous loop of random movement
          ease: "easeInOut",
        }}
      >
        <img
          src={space1}
          alt="Pulsating Planet"
          width={100}
          height={100}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full filter brightness-110 drop-shadow-[0_0_15px_rgba(0,0,255,0.7)]"
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </motion.div>

      {/* Second Image with independent random movement effect */}
      <motion.div
        className="absolute z-10"
        style={{
          bottom: '100px', // Adjusted bottom position
          left: '50px', // Adjusted left position
        }}
        animate={{
          x: getRandomPath(10), // Create random movement path for x
          y: getRandomPath(10), // Create random movement path for y
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop', // Continuous loop of random movement
          ease: "easeInOut",
        }}
      >
        <img
          src={space2}
          alt="Pulsating Planet"
          width={100}
          height={100}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full filter brightness-110 drop-shadow-[0_0_15px_rgba(0,0,255,0.7)]"
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </motion.div>
    </>
  );
};

export default PulsatingPlanet;
