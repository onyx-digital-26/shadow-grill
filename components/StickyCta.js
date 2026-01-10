"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-[90]"
        >
          <Link
            href="/reservation"
            className="flex items-center gap-3 bg-[#FFD700] text-black px-6 py-4 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform duration-300 group"
          >
            <span className="font-bold uppercase tracking-widest text-xs">
              Book A Table
            </span>
            <span className="bg-black text-[#FFD700] w-6 h-6 rounded-full flex items-center justify-center text-xs group-hover:rotate-45 transition-transform duration-300">
              ↗
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
