"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviewsData } from "@/app/data"; // ✅ Data Imported

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVars = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export default function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonials-bg.jpg"
            alt="Reviews Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Voices from the Shadows
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
            What our guests say about the experience.
          </p>
        </motion.div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-[#FFD700] text-3xl font-bold mr-2">5.0</span>
            <span className="text-gray-400 uppercase tracking-widest text-sm">
              Average Rating
            </span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 md:mt-0 px-6 py-2 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest"
          >
            Write a Review
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviewsData.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVars}
              className="group relative bg-[#111] p-8 rounded border border-[#222] hover:border-[#FFD700] transition-colors duration-300"
            >
              <div className="absolute top-4 right-6 text-6xl font-serif text-[#222] group-hover:text-[#FFD700]/10 transition-colors duration-300 pointer-events-none select-none">
                “
              </div>
              <div className="text-[#FFD700] text-lg tracking-widest mb-6">
                {"★".repeat(review.rating)}
                <span className="text-gray-700">
                  {"★".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-7 italic mb-8 relative z-10">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-[#333] pt-6 mt-auto">
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">
                    {review.name}
                  </h4>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="bg-[#0a0a0a] py-20 border-t border-[#222] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
            Experience it for yourself
          </h2>
          <Link
            href="/reservation"
            className="inline-block px-10 py-4 bg-[#FFD700] text-black font-bold tracking-[3px] uppercase hover:bg-white transition-all duration-300"
          >
            Book a Table
          </Link>
        </motion.div>
      </section>

      {/* 4. REVIEW MODAL (Simple Form) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111] border border-[#FFD700]/30 p-8 rounded-lg max-w-lg w-full relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#FFD700]"
              >
                ✕
              </button>
              <h3 className="text-2xl font-serif text-[#FFD700] mb-6 text-center">
                Share Your Experience
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#050505] border border-[#333] p-3 text-white focus:border-[#FFD700] outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Rating
                  </label>
                  <select className="w-full bg-[#050505] border border-[#333] p-3 text-white focus:border-[#FFD700] outline-none">
                    <option>5 Stars - Exceptional</option>
                    <option>4 Stars - Great</option>
                    <option>3 Stars - Good</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Review
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#050505] border border-[#333] p-3 text-white focus:border-[#FFD700] outline-none transition-colors"
                    placeholder="Tell us about your meal..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 bg-[#FFD700] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
