"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fomoBookings } from "@/app/data"; // ✅ Data Imported

export default function FomoNotification() {
  const [currentBooking, setCurrentBooking] = useState(null);

  useEffect(() => {
    // Function to trigger a random notification
    const triggerNotification = () => {
      const randomIdx = Math.floor(Math.random() * fomoBookings.length);
      setCurrentBooking(fomoBookings[randomIdx]);

      // Hide it after 5 seconds
      setTimeout(() => {
        setCurrentBooking(null);
      }, 5000);
    };

    // Initial delay: 5 seconds after load
    const initialTimer = setTimeout(triggerNotification, 5000);

    // Then repeat every 30-60 seconds (randomized)
    const interval = setInterval(() => {
      triggerNotification();
    }, 45000); // 45 seconds loop

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {currentBooking && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="fixed bottom-6 left-6 z-[80] hidden md:flex items-center gap-4 bg-[#111] border border-[#FFD700]/30 p-4 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.8)] max-w-sm"
        >
          {/* Icon */}
          <div className="relative w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center border border-[#FFD700]">
            <span className="text-lg">🛎️</span>
            {/* Ping Animation */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD700]"></span>
            </span>
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-200 text-sm font-serif">
              <span className="text-[#FFD700] font-bold">
                {currentBooking.name}
              </span>{" "}
              just reserved a {currentBooking.party}.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {Math.floor(Math.random() * 5) + 1} minutes ago
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setCurrentBooking(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-white text-xs"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
