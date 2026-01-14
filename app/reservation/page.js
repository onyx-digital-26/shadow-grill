"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitReservation } from "@/app/actions"; // ✅ Make sure this import is here

// --- ANIMATION VARIANTS ---
const heroVars = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const formContainerVars = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
};
const inputGroupVars = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
};
const containerStagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

export default function Reservation() {
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const result = await submitReservation(formData);

    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("idle");
      setErrorMessage(result.message);
      alert("Booking Failed: " + result.message);
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/reservation-bg.jpg"
            alt="Reservation Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
        </div>

        <motion.div
          variants={heroVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Secure Your Seat
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-[0.2em] uppercase">
            Join us for an evening of elegance.
          </p>
        </motion.div>
      </section>

      {/* 2. BOOKING SECTION */}
      <section className="relative w-full py-20 px-6 flex justify-center items-center">
        <AnimatePresence mode="wait">
          {formStatus !== "success" ? (
            <motion.div
              key="form"
              variants={formContainerVars}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-2xl bg-[#111] border border-[#222] border-t-4 border-t-[#FFD700] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm relative"
            >
              {/* Corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-[#FFD700]/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-[#FFD700]/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-[#FFD700]/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-[#FFD700]/30" />

              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-white mb-4">
                  Table Reservation
                </h2>
                <div className="h-[1px] w-[80px] bg-[#FFD700] mx-auto mb-4" />
                <p className="text-[#888] text-sm italic">
                  Please book at least 24 hours in advance.
                </p>
              </div>

              {/* ✅ FORM START */}
              <motion.form
                variants={containerStagger}
                initial="hidden"
                animate="visible"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Row 1: Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm"
                    />
                  </motion.div>
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Time
                    </label>
                    <input
                      name="time"
                      type="time"
                      required
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm"
                    />
                  </motion.div>
                </div>

                {/* Row 2: Guests & Occasion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ (Large Party)</option>
                    </select>
                  </motion.div>
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Occasion (Optional)
                    </label>
                    <select
                      name="occasion"
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm appearance-none"
                    >
                      <option value="">Select Occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Meal</option>
                      <option value="date">Date Night</option>
                    </select>
                  </motion.div>
                </div>

                {/* ✅ Row 3: Name & Email (THIS IS THE IMPORTANT PART) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm placeholder:text-gray-600"
                    />
                  </motion.div>

                  {/* 👇 THIS IS THE EMAIL FIELD 👇 */}
                  <motion.div
                    variants={inputGroupVars}
                    className="flex flex-col"
                  >
                    <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm placeholder:text-gray-600"
                    />
                  </motion.div>
                </div>

                {/* Row 4: Phone */}
                <motion.div variants={inputGroupVars} className="flex flex-col">
                  <label className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    required
                    className="bg-[#0a0a0a] border border-[#333] p-4 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm placeholder:text-gray-600"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={inputGroupVars}
                  disabled={formStatus === "loading"}
                  className="w-full py-4 mt-4 bg-[#FFD700] text-black font-bold uppercase tracking-[3px] hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading"
                    ? "Confirming..."
                    : "Confirm Booking"}
                </motion.button>
              </motion.form>
            </motion.div>
          ) : (
            /* --- SUCCESS TICKET --- */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="w-full max-w-lg bg-[#0a0a0a] border-2 border-[#FFD700] p-10 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FFD700]/5" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFD700] blur-[100px] opacity-20" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 bg-[#FFD700] text-black rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </motion.div>

              <h2 className="text-3xl font-serif text-[#FFD700] mb-2">
                Reservation Confirmed
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                We look forward to hosting you.
              </p>

              <div className="border-t border-b border-[#333] py-6 mb-8 space-y-2">
                <p className="text-white uppercase tracking-widest text-xs">
                  A confirmation email has been sent.
                </p>
                <p className="text-[#888] text-xs italic">
                  Please arrive 10 minutes prior to your seating.
                </p>
              </div>

              <button
                onClick={() => setFormStatus("idle")}
                className="text-[#FFD700] hover:text-white uppercase tracking-widest text-xs border-b border-[#FFD700] pb-1 transition-colors"
              >
                Make Another Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
