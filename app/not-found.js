"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden text-center px-4">
      {/* 1. BACKGROUND ATMOSPHERE */}
      {/* We reuse an existing dark image but fade it out heavily to create texture */}
      <div className="absolute inset-0 bg-[url('/images/hero-dark.jpg')] bg-cover bg-center opacity-20 grayscale pointer-events-none" />
      {/* Gradient Vignette to darken edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-90" />

      {/* 2. CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* FLICKERING 404 TEXT */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0.8, 1, 0.3, 1, 0.9, 1] }} // Random flicker opacities
          transition={{
            duration: 2, // Speed of one flicker cycle
            times: [0, 0.1, 0.2, 0.25, 0.3, 0.8, 1], // Timing of flickers
            repeat: Infinity,
            repeatDelay: 5, // Wait 5 seconds before flickering again
          }}
          className="text-[8rem] md:text-[12rem] font-serif text-[#FFD700] leading-none select-none drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl text-white font-serif mb-4 tracking-wide">
            Lost in the Shadows?
          </h2>

          <p className="text-gray-400 mb-10 font-light tracking-widest uppercase text-sm md:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for has vanished into the darkness.
          </p>

          <Link
            href="/"
            className="group relative inline-block px-10 py-4 bg-transparent border border-[#FFD700] text-[#FFD700] uppercase tracking-[3px] font-bold text-xs md:text-sm overflow-hidden transition-all duration-300 hover:text-black"
          >
            {/* Hover Fill Effect */}
            <span className="absolute inset-0 w-full h-full bg-[#FFD700] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">Return to Light</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
