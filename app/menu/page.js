"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuCategories } from "@/app/data"; // ✅ Data Imported

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      {/* 1. PAGE HERO */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu-bg.jpg"
            alt="Menu Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 mt-[60px]"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Our Culinary Collection
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wider uppercase">
            Savor the finest cuts and freshest ingredients.
          </p>
        </motion.div>
      </section>

      {/* 2. MENU GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header & Filter Buttons */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-serif tracking-widest uppercase mb-4">
            From the Fire
          </h2>
          <div className="h-[2px] w-[80px] bg-[#FFD700] mx-auto rounded-full mb-10" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs md:text-sm uppercase tracking-widest border transition-all duration-300 rounded-sm
                  ${
                    activeCategory === cat
                      ? "border-[#FFD700] bg-[#FFD700] text-black font-bold"
                      : "border-[#333] text-gray-400 hover:border-[#FFD700] hover:text-[#FFD700]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid (Auto Layout Animation) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedDish(item)}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden hover:border-[#FFD700] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)] hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </div>
                </div>

                {/* Price Tag */}
                <div className="absolute top-[230px] left-6 z-20 bg-[#FFD700] text-black font-bold px-4 py-2 rounded shadow-lg text-sm tracking-widest">
                  {item.price}
                </div>

                {/* Content */}
                <div className="p-8 pt-10 relative z-10 bg-[#0a0a0a]">
                  <h3 className="text-2xl text-white font-serif mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. DISH DETAIL POPUP (MODAL) */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#FFD700]/30 shadow-[0_0_50px_rgba(255,215,0,0.15)] rounded-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-50 text-white/50 hover:text-[#FFD700] text-2xl transition-colors"
              >
                ✕
              </button>

              {/* Left Side: Image */}
              <div className="relative w-full md:w-1/2 h-[300px] md:h-auto shrink-0">
                <Image
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {selectedDish.category}
                </span>

                <h2 className="text-3xl md:text-4xl text-white font-serif mb-4">
                  {selectedDish.name}
                </h2>

                <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm md:text-base">
                  {selectedDish.longDesc}
                </p>

                {/* Flavor Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedDish.flavorProfile.map((flavor, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400 uppercase tracking-wider"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>

                {/* Pairing & Price */}
                <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
                  <div>
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">
                      Perfect Pair
                    </span>
                    <span className="text-white text-sm italic">
                      {selectedDish.pairing}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl text-[#FFD700] font-bold font-serif">
                      {selectedDish.price}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-[#FFD700] text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300">
                  Add to Reservation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
