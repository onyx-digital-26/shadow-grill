"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/app/data"; // ✅ Data Imported

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/faq-bg.jpg"
            alt="FAQ Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Questions
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-[0.2em] uppercase">
            Everything you need to know.
          </p>
        </motion.div>
      </section>

      {/* 2. FAQ CONTENT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="mb-10 relative">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111] border border-[#333] p-4 pl-12 text-white outline-none focus:border-[#FFD700] transition-colors rounded-sm text-sm"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={itemVars}
                  layout
                  className={`border transition-all duration-300 rounded-sm overflow-hidden
                    ${
                      isOpen
                        ? "border-[#FFD700] bg-[#111]"
                        : "border-[#222] bg-[#0a0a0a] hover:border-[#444]"
                    }
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span
                      className={`text-lg font-medium transition-colors ${
                        isOpen ? "text-[#FFD700]" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl text-[#FFD700] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 text-sm leading-7 border-t border-[#222] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No answers found for your search.
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
