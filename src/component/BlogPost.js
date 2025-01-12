'use client'

import { motion } from 'framer-motion'

export function BlogPost({ post, index }) {
  return (
    <motion.div 
      className="mb-16 p-8 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-4 text-blue-300"
        whileHover={{ scale: 1.05 }}
      >
        {post.title}
      </motion.h2>
      <p className="text-lg text-gray-300">{post.excerpt}</p>
      <motion.button 
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgb(59, 130, 246)' }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.button>
    </motion.div>
  )
}

