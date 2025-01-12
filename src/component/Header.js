'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="text-3xl font-bold text-white hover:text-blue-300 transition-colors">
          Space Blog
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 8px rgb(59, 130, 246)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
        </Link>
      </motion.div>
    </header>
  )
}

