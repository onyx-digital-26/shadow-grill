"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SecretMenu() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const secretCode = "SHADOW";

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 🛑 FIX: Check if 'key' exists before using it
      if (!e.key) return;

      const char = e.key.toUpperCase();

      // Only allow letters
      if (/^[A-Z]$/.test(char)) {
        setInput((prev) => {
          const updated = prev + char;
          // Check if it matches or ends with the code
          if (updated.includes(secretCode)) {
            setUnlocked(true);
            return "";
          }
          // Keep string short
          return updated.slice(-10);
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/95 flex flex-col items-center justify-center text-center p-6"
        >
          {/* Close Button */}
          <button
            onClick={() => setUnlocked(false)}
            className="absolute top-10 right-10 text-white/50 hover:text-white text-xl"
          >
            ✕ CLOSE
          </button>

          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-full max-w-md aspect-square mb-8"
          >
            {/* Gold Icon */}
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-tr from-[#FFD700] to-[#b8860b] shadow-[0_0_100px_#FFD700] flex items-center justify-center animate-pulse">
              <span className="text-6xl">🍔</span>
            </div>
          </motion.div>

          <h1 className="text-[#FFD700] font-serif text-4xl md:text-6xl mb-4 tracking-wider">
            VIP ACCESS UNLOCKED
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            You have discovered the hidden "Billionaire Burger." Show this
            screen to your server to order it off-menu.
          </p>

          <div className="px-8 py-3 border border-[#FFD700] text-[#FFD700] font-bold tracking-[3px] uppercase">
            Code: GOLD-MEMBER
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
