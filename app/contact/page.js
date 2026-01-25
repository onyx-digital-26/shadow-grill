"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions"; // ✅ Import the new Action

// --- ANIMATION VARIANTS ---
const heroVars = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const staggerList = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.target);
    const result = await submitContactForm(formData);

    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("idle");
      alert("Error: " + result.message);
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <motion.div
          variants={heroVars}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
            We are waiting to serve you.
          </p>
        </motion.div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* LEFT SIDE: INFO */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Visit Us
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light">
            Experience the shadows in person. Reservations are highly
            recommended for weekend dining.
          </p>

          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location */}
            <motion.div variants={listItem} className="flex gap-6 group">
              <span className="text-2xl pt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                📍
              </span>
              <div>
                <h3 className="text-xl text-white font-serif mb-1 group-hover:text-[#FFD700] transition-colors">
                  Location
                </h3>
                <p className="text-gray-500 text-sm leading-6">
                  123 Culinary Ave, Food District
                  <br />
                  Shadow City, SC 90210
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={listItem} className="flex gap-6 group">
              <span className="text-2xl pt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                ✉️
              </span>
              <div>
                <h3 className="text-xl text-white font-serif mb-1 group-hover:text-[#FFD700] transition-colors">
                  Email
                </h3>
                <p className="text-[#FFD700] text-sm font-medium cursor-pointer hover:underline">
                  contact@shadowgrill.com
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={listItem} className="flex gap-6 group">
              <span className="text-2xl pt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                📞
              </span>
              <div>
                <h3 className="text-xl text-white font-serif mb-1 group-hover:text-[#FFD700] transition-colors">
                  Phone
                </h3>
                <p className="text-gray-500 text-sm">(555) 123-4567</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={listItem} className="flex gap-6 group">
              <span className="text-2xl pt-1 grayscale group-hover:grayscale-0 transition-all duration-300">
                ⏰
              </span>
              <div>
                <h3 className="text-xl text-white font-serif mb-1 group-hover:text-[#FFD700] transition-colors">
                  Hours
                </h3>
                <p className="text-gray-500 text-sm mb-1">
                  Mon-Sun: 5:00 PM - 11:00 PM
                </p>
                <p className="text-[#FFD700]/80 text-xs uppercase tracking-wider font-bold">
                  Happy Hour: 5:00 PM - 7:00 PM
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="bg-[#111] p-8 md:p-12 rounded-sm border border-[#222] relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {formStatus !== "success" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-[#FFD700] mb-8">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Input */}
                    <div className="group relative">
                      <input
                        type="text"
                        name="name" // ✅ Added name
                        required
                        className="peer w-full bg-transparent border-b-2 border-[#333] py-3 text-white outline-none focus:border-[#FFD700] transition-colors duration-300 placeholder-transparent"
                        placeholder="Your Name"
                        id="name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-xs text-[#FFD700] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FFD700] peer-focus:text-xs uppercase tracking-widest"
                      >
                        Name
                      </label>
                    </div>

                    {/* Email Input */}
                    <div className="group relative">
                      <input
                        type="email"
                        name="email" // ✅ Added name
                        required
                        className="peer w-full bg-transparent border-b-2 border-[#333] py-3 text-white outline-none focus:border-[#FFD700] transition-colors duration-300 placeholder-transparent"
                        placeholder="Your Email"
                        id="email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-xs text-[#FFD700] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FFD700] peer-focus:text-xs uppercase tracking-widest"
                      >
                        Email
                      </label>
                    </div>

                    {/* Subject Input */}
                    <div className="group relative">
                      <input
                        type="text"
                        name="subject" // ✅ Added name
                        className="peer w-full bg-transparent border-b-2 border-[#333] py-3 text-white outline-none focus:border-[#FFD700] transition-colors duration-300 placeholder-transparent"
                        placeholder="Subject"
                        id="subject"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 -top-3.5 text-xs text-[#FFD700] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FFD700] peer-focus:text-xs uppercase tracking-widest"
                      >
                        Subject
                      </label>
                    </div>

                    {/* Message Input */}
                    <div className="group relative">
                      <textarea
                        rows="4"
                        name="message" // ✅ Added name
                        required
                        className="peer w-full bg-transparent border-b-2 border-[#333] py-3 text-white outline-none focus:border-[#FFD700] transition-colors duration-300 placeholder-transparent resize-none"
                        placeholder="Message"
                        id="message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-0 -top-3.5 text-xs text-[#FFD700] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FFD700] peer-focus:text-xs uppercase tracking-widest"
                      >
                        Message
                      </label>
                    </div>

                    <button
                      disabled={formStatus === "loading"}
                      className="w-full py-4 bg-[#FFD700] text-black font-bold uppercase tracking-[3px] hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 60 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="black"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-[#FFD700] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. Our concierge team will respond
                    shortly.
                  </p>

                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-xs uppercase tracking-widest text-[#FFD700] hover:text-white border-b border-[#FFD700] pb-1 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
