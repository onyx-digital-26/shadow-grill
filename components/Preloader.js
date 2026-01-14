"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// ✅ NEW: Import ScrambleText
import ScrambleText from "@/components/ScrambleText";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          {/* LEFT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0a0a] border-r border-[#FFD700]/20"
          />

          {/* RIGHT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0a0a] border-l border-[#FFD700]/20"
          />

          {/* CENTER LOGO & TEXT */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
            className="relative z-50 flex flex-col items-center justify-center"
          >
            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-[#FFD700] shadow-[0_0_30px_#FFD700]">
              <Image
                src="/images/logo.png"
                alt="Loading"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-[#FFD700] font-serif text-2xl tracking-[0.3em] uppercase">
              Shadow Grill
            </h1>

            {/* ✅ UPDATED: Use ScrambleText here for a cool tech effect */}
            <div className="text-gray-500 text-xs mt-2 tracking-widest">
              <ScrambleText text="LOADING EXPERIENCE..." />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
