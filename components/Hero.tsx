'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden hero-pattern pt-20">
      {/* Animated arc decorations with orange glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="arc-decoration w-[600px] h-[600px] md:w-[800px] md:h-[800px] !border-dn-orange/30"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 0.5, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="absolute arc-decoration w-[500px] h-[500px] md:w-[700px] md:h-[700px] !border-dn-orange/20"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: 30 }}
          animate={{ scale: 1, opacity: 0.3, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="absolute arc-decoration w-[400px] h-[400px] md:w-[600px] md:h-[600px] !border-dn-orange/15"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-20">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-2"
        >
          <Image
            src="/digital-next-logo.png"
            alt="Digital Next Logo"
            width={500}
            height={500}
            className="mx-auto w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-2"
        >
          DIGITAL NEXT
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-dn-orange tracking-[0.2em] uppercase mb-4"
        >
          De digitale wereld van morgen
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Business en IT samen brengen om de toekomst van de digitale wereld te shapen
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#episodes"
            className="group flex items-center gap-3 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-8 py-4 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all duration-300 shadow-lg shadow-dn-orange/25"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Aankomende Episodes
          </a>
          <a
            href="#concept"
            className="flex items-center gap-3 border border-dn-orange/50 px-8 py-4 rounded-full font-medium hover:bg-dn-orange/10 hover:border-dn-orange transition-all duration-300 text-white"
          >
            Word Gast
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}

