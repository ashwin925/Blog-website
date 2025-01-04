'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaRocket, FaStar } from 'react-icons/fa';
import { submitForm } from './submitForm';
import StarBackground from './StarBackground';
import FloatingEarth from './FloatingEarth';
import PulsatingPlanet from './PulsatingPlanet';

export default function SpaceContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const result = await submitForm(formData);
    setSubmitMessage(result.message);
    setIsSubmitting(false);
  };

  // The rest of the component remains the same
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <StarBackground />
      <FloatingEarth />
      <PulsatingPlanet />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-20 bg-gray-800 bg-opacity-30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-2xl mt-[30px] w-full max-w-md relative"
      >
        {/* Blob animations */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Contact
        </h2>
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4 relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-300">Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 transition-all duration-300 hover:bg-gray-600 border border-transparent hover:border-blue-500 focus:border-blue-500 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-space-glow before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
                placeholder="Your name"
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-blue-300">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 transition-all duration-300 hover:bg-gray-600 border border-transparent hover:border-blue-500 focus:border-blue-500 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-space-glow before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
                placeholder="your@email.com"
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-blue-300">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600 border border-transparent hover:border-blue-500 focus:border-blue-500 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-space-glow before:opacity-0 hover:before:opacity-100 focus:before:opacity-100 resize-none"
              placeholder="Your message to the stars..."
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
          >
            <span className="relative z-10">{isSubmitting ? 'Launching...' : 'Launch Message'}</span>
            <FaRocket className={`inline-block relative z-10 ${isSubmitting ? 'animate-pulse' : ''}`} />
            <motion.div
              className="absolute inset-0 bg-blue-400"
              initial={{ scale: 0, opacity: 0 }}
              animate={isSubmitting ? { scale: 1, opacity: 0.3 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </form>
        <AnimatePresence>
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center"
            >
              <p className="text-green-400">{submitMessage}</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaStar className="text-yellow-400 text-4xl mx-auto mt-2" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

