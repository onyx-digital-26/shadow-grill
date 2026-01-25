"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/TextReveal"; // Component we cleaned up
import { chefData } from "@/app/data"; // ✅ Data Imported

export default function About() {
  const ref = useRef(null);

  // Parallax Logic for Hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main
      className="bg-[#050505] min-h-screen text-white overflow-hidden"
      ref={ref}
    >
      {/* 1. PARALLAX HERO SECTION */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/about-bg.jpg"
            alt="About Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 pt-[60px]"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4 drop-shadow-lg tracking-wide">
            Our Legacy
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
            Forged in fire, defined by darkness.
          </p>
        </motion.div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-[#FFD700] mb-8"
          >
            The Shadow Story
          </motion.h2>

          <div className="space-y-6">
            <TextReveal
              text="Founded in 1998, Shadow Grill was born from a simple desire: to bring the primal art of fire cooking into the modern age of luxury dining."
              className="text-lg md:text-xl font-light leading-relaxed"
            />
            <TextReveal
              text="We believed that true flavor hides in the shadows—in the char of the wood, the smoke of the grill, and the dim ambiance where guests can truly focus on the food."
              className="text-lg md:text-xl font-light leading-relaxed"
            />
            <TextReveal
              text="What started as a small underground steakhouse has evolved into the city's premier destination for meat lovers, offering an atmosphere that is as bold as our flavors."
              className="text-lg md:text-xl font-light leading-relaxed"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 font-serif text-2xl text-[#FFD700] italic"
          >
            — Chef Antonio
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-lg mx-auto"
        >
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl group">
            <Image
              src="/images/story-image.jpg"
              alt="Chef Cooking"
              width={600}
              height={800}
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </div>
          <div className="absolute top-6 left-6 w-full h-full border-2 border-[#FFD700] z-0" />
        </motion.div>
      </section>

      {/* 3. PHILOSOPHY GRID */}
      <section className="bg-[#0f0f0f] py-24 border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="group p-8 border border-transparent hover:border-[#FFD700]/30 transition-colors duration-500 rounded-sm bg-[#0a0a0a]"
            >
              <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
                01. The Fire
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                We cook exclusively with White Oak charcoal. No gas, no
                shortcuts. Just the honest heat of an open flame.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="group p-8 border border-transparent hover:border-[#FFD700]/30 transition-colors duration-500 rounded-sm bg-[#0a0a0a]"
            >
              <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
                02. The Ingredient
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                We source USDA Prime and A5 Wagyu beef from sustainable farms.
                Respect for the animal is our first priority.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="group p-8 border border-transparent hover:border-[#FFD700]/30 transition-colors duration-500 rounded-sm bg-[#0a0a0a]"
            >
              <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
                03. The Experience
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                We strip away the distractions. In the dark, your senses are
                heightened, making every bite unforgettable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. MEET THE MASTERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif text-white mb-16"
        >
          Meet the Masters
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {chefData.map((chef, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={chef.img}
                alt={chef.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-left transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-[2px] bg-[#FFD700] mb-4 transition-all duration-500 delay-100 w-[40px] lg:w-[0px] lg:group-hover:w-[40px]" />
                <h3 className="text-2xl text-[#FFD700] font-serif">
                  {chef.name}
                </h3>
                <p className="text-white text-xs uppercase tracking-widest mt-1 opacity-100 lg:opacity-70 lg:group-hover:opacity-100 transition-opacity">
                  {chef.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20"
        >
          <Link
            href="/contact"
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] uppercase tracking-widest text-sm hover:bg-[#FFD700] hover:text-black transition-all duration-300"
          >
            Join Our Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
