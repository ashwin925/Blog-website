'use client';

import { FaHome, FaBlog, FaEnvelope, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Blogs from './blogs';
import SpaceContactForm from './SpaceContactForm';
import '../App.css';

export default function HomePage() {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div className="h-[1580px] bg-black text-white">
      {/* Navigation Bar */}
      <nav className="h-[65px] w-full bg-gray-800/90 backdrop-blur-lg fixed top-0 border-2 border-white p-2 rounded-lg shimmer-effect z-50">
        <div className="max-w-6xl mx-auto px-4 mt-[-10px]">
          <div className="h-16 flex items-center justify-between">
            <div className="flex ml-[190px] items-center space-x-8">
              {[
                { icon: FaHome, label: 'Home' },
                { icon: FaBlog, label: 'Blogs' },
                { icon: FaEnvelope, label: 'Contact Me' },
                { icon: FaUserPlus, label: 'Signup' },
                { icon: FaSignInAlt, label: 'Login' },
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    if (item.label === 'Signup') {
                      navigate('/signup'); // Navigate to the signup page
                    }
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: '#1f2937',
                    boxShadow: '0px 6px 20px rgba(0, 255, 255, 0.6)',
                    color: '#00FFFF',
                    textShadow: '0 0 12px rgba(0, 255, 255, 0.8)',
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: [0, 3, -3, 0],
                    transition: { duration: 0.2 },
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg 
                             hover:bg-gray-700 transition-colors text-gray-300 hover:text-white border border-transparent hover:border-cyan-500"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5"
                  >
                    <item.icon />
                  </motion.div>
                  <span className="font-medium drop-shadow-md text-cyan-300">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mt-[-10px] mx-auto px-4 pt-24">
        {/* Header Text */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold font-futuristic tracking-wide mb-2"
            style={{
              textShadow: '0 0 15px rgba(0, 255, 255, 0.6), 0 0 25px rgba(0, 255, 255, 0.4), 0 0 35px rgba(0, 255, 255, 0.2)',
              WebkitTextStroke: '1px rgba(0, 255, 255, 0.3)',
            }}
          >
            Step inside and Traverse yourself
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold font-futuristic"
            style={{
              textShadow: '0 0 15px rgba(0, 255, 255, 0.6), 0 0 25px rgba(0, 255, 255, 0.4), 0 0 35px rgba(0, 255, 255, 0.2)',
              WebkitTextStroke: '1px rgba(0, 255, 255, 0.3)',
            }}
          >
            into the Dimension of Blogs
          </motion.h2>
        </div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-white mx-auto mt-[-50px] mb-10"
        />

        {/* Bottom Containers */}
        <div className="flex justify-between h-[328px] mt-[0px] pb-[10px] px-6 border-[3px] border-violet-600 mb-[40px] rounded-lg z-10">
          <div
            className="bg-black ml-[48px] w-[354px] mt-[-7px] h-[10px] rounded-lg  absolute"
            style={{ border: '2px solid black' }}
          />
          {/* Left Side */}
          <div className="space-y-4 w-[450px] flex flex-col mt-[-25px] items-center z-30">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px 5px rgba(0, 255, 255, 0.6)',
                background: 'linear-gradient(90deg, rgba(0,255,255,0.2) 0%, rgba(0,255,255,0.6) 50%, rgba(0,255,255,0.2) 100%)',
              }}
              whileTap={{ scale: 0.95 }}
              className="w-[75%] py-3 bg-cyan-400 text-black font-futuristic font-bold rounded-lg transition-colors text-lg border-2 border-white"
              style={{ outline: '2px solid white', outlineOffset: '4px', color: 'white' }}
            >
              Explore Blogs
            </motion.button>
            <div className="h-[270px] w-full aspect-[16/10] bg-gray-800 rounded-lg border-4 border-white" />
          </div>

          {/* Right Side */}
          <div
            className="bg-black ml-[666px] w-[352px] mt-[-7px] h-[10px] rounded-lg  absolute"
            style={{ border: '2px solid black' }}
          />
          <div className="space-y-4 w-[450px] flex flex-col mt-[-25px] items-center z-30">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px 5px rgba(0, 255, 255, 0.6)',
                background: 'linear-gradient(90deg, rgba(0,255,255,0.2) 0%, rgba(0,255,255,0.6) 50%, rgba(0,255,255,0.2) 100%)',
              }}
              whileTap={{ scale: 0.95 }}
              className="w-[75%] py-3 bg-cyan-400 text-black font-futuristic font-bold rounded-lg transition-colors text-lg border-2 border-white overflow-hidden"
              style={{ outline: '2px solid white', outlineOffset: '4px', color: 'white' }}
            >
              Write Blogs
            </motion.button>
            <div className="h-[270px] w-full aspect-[16/10] bg-gray-800 rounded-lg border-4 border-white" />
          </div>
        </div>
      </div>
      <Blogs />
      <div>
        <SpaceContactForm />
      </div>
    </div>
  );
}
