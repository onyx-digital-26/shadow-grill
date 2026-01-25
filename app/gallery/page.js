"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/app/data"; // ✅ Data Imported

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
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery-bg.jpg"
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Visual Experience
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
            A glimpse into the shadows.
          </p>
        </motion.div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVars}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedImage(item)}
              className="group relative h-[300px] overflow-hidden rounded-sm cursor-pointer border border-transparent hover:border-[#FFD700] transition-colors duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center 
                             opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                             transition-all duration-300 
                             transform scale-100 lg:scale-95 lg:group-hover:scale-100 
                             border border-[#FFD700]/50 m-4"
              >
                <span
                  className="text-[#FFD700] text-xs uppercase tracking-widest mb-2 
                                 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 
                                 transition-transform duration-500"
                >
                  {item.category}
                </span>

                <h3
                  className="text-2xl font-serif text-white mb-2 
                               translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 
                               transition-transform duration-500 delay-75"
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-300 text-sm font-light 
                             translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 
                             transition-transform duration-500 delay-100"
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-[#FFD700] z-[110] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              layoutId={`card-${selectedImage.id}`}
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-16 text-left"
              >
                <h2 className="text-3xl text-[#FFD700] font-serif mb-1">
                  {selectedImage.title}
                </h2>
                <p className="text-white font-light text-lg">
                  {selectedImage.desc}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
