'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in:', userCredential.user);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();  // Instantiate the GoogleAuthProvider here
    
    try {
      const result = await signInWithPopup(auth, provider);  // Pass the instantiated provider
      console.log('Google sign-in successful:', result.user);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };
  

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 overflow-hidden">
      {/* Moving Nebula Effect (background) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-900 opacity-80 animate-gradient-background" />
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000011" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 6 }, // Increase quantity when clicked
              repulse: { distance: 70, duration: 0.8 }, // Stronger repulse effect
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#ff4cff", "#3e00ff"], // Gradient color effect for variety
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
              animation: {
                enable: true,
                speed: 1,
              },
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 3,
              straight: false,
              attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000,
              },
              path: {
                enable: true,
                clamp: true,
                delay: 0.1,
                options: {
                  type: "circle", // Particles follow a circular path
                  radius: 30,
                  animation: {
                    speed: 5,
                  },
                },
              },
            },
            number: {
              density: { enable: true, area: 800 },
              value: 150, // Increase particle count for a denser effect
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.4,
              },
            },
            shape: {
              type: ["circle", "polygon", "triangle"], // Multiple particle shapes for diversity
              polygon: {
                sides: 5, // Pentagon shape
              },
            },
            size: {
              value: { min: 3, max: 8 },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 3,
              },
            },
            roll: {
              darken: { enable: true, value: 20 },
              enable: true,
              speed: 15,
            },
            life: { enable: false }, // Ensure particles are permanent
            trail: {
              enable: true, // Enable trails for a more fluid movement
              length: 10,
              fillColor: "#ffffff",
            },
            // Adding more visual variety with custom animations
            zIndex: {
              value: 10,
            },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full backdrop-filter backdrop-blur-sm border-4 border-purple-600 glow-border"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-purple-400 mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Cosmic Login
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['email', 'password'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'password' ? 'password' : 'email'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder={field === 'email' ? 'stargazer@galaxy.com' : '••••••••'}
              />
            </motion.div>
          ))}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-2"
            >
              {error}
            </motion.p>
          )}
          <motion.button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
            whileTap={{ scale: 0.95 }}
          >
            Launch into Space
          </motion.button>
        </form>
        <motion.button
          onClick={handleGoogleSignIn}
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
          whileTap={{ scale: 0.95 }}
        >
          Sign in with Google
        </motion.button>
      </motion.div>

      {/* Transparent Buttons */}
      <div className="absolute top-1/2 mr-[740px] transform -translate-y-1/2 bg-transparent border-2 border-white text-purple-600 py-2 px-4 font-semibold rounded-md cursor-pointer">
        Click Me
      </div>
      <div className="absolute top-1/2 ml-[750px] transform -translate-y-1/2 bg-transparent border-2 border-white text-purple-600 py-2 px-4 font-semibold rounded-md cursor-pointer">
        Click Me
      </div>
    </div>
  );
};

export default Login;
// import cube1 from "../images/cube1.jpeg";
// import cube2 from "../images/cube2.jpeg";
// import cube3 from "../images/cube3.jpeg";
// import circel1 from "../images/circel1.jpeg";
// import combo1 from "../images/combo1.jpeg";
// import combo2 from "../images/combo2.jpeg";
// import diamond1 from "../images/diamond1.jpeg";
// import triangle1 from "../images/triangle1.jpeg";
// import blog1 from "../images/blog1.jpeg";