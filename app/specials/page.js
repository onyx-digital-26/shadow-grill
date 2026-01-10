"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- SPECIALS DATA ---
const specialsData = [
  {
    id: 1,
    title: "The Golden Tomahawk",
    tag: "Signature Dish",
    desc: "A massive 40oz Wagyu Tomahawk steak, wrapped in edible 24k gold leaf and seared over white oak charcoal. Served with roasted bone marrow and truffle chimichurri.",
    price: "PKR 4999",
    pairing: "Cabernet Sauvignon 2018",
    image: "/images/special-tomahawk.jpg",
  },
  {
    id: 2,
    title: "Midnight Lobster Thermidor",
    tag: "Seafood Delicacy",
    desc: "Wild-caught Maine lobster, poached in cognac cream sauce with gruyère cheese and wild mushrooms. Finished under the broiler for a golden crust.",
    price: "PKR 9000",
    pairing: "Vintage Champagne",
    image: "/images/special-lobster.jpg",
  },
  {
    id: 3,
    title: "Shadow Beef Wellington",
    tag: "Classic Revival",
    desc: "Center-cut filet mignon coated in duxelles and prosciutto, wrapped in a puff pastry lattice. Baked to medium-rare perfection and served with a red wine reduction.",
    price: "PKR 5999",
    pairing: "Pinot Noir",
    image: "/images/special-wellington.jpg",
  },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Specials() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/specials-bg.jpg" // Ensure this image exists in public/images
            alt="Specials Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-4 pt-[60px]">
          <h1 className="text-5xl md:text-7xl font-serif text-[#FFD700] mb-6 drop-shadow-2xl tracking-wide">
            Chef&apos;s Selection
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl font-light tracking-wider uppercase">
            Exclusive dishes available for a limited time.
          </p>
        </div>
      </section>

      {/* 2. SPECIALS CONTAINER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col gap-[100px] md:gap-[150px]">
          {specialsData.map((item, index) => {
            // Determine if this is an "even" or "odd" item for the layout flip
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`flex flex-col ${
                  isReverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-20`}
              >
                {/* --- IMAGE SIDE --- */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative aspect-[4/3] w-full">
                    {/* The Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02]
                        ${
                          /* Tailwind Arbitrary Shadow for the "Gold Box" effect */ ""
                        }
                        ${
                          isReverse
                            ? "shadow-[15px_15px_0px_#FFD700]" // Shadow to right for reversed items
                            : "shadow-[-15px_15px_0px_#FFD700]" // Shadow to left for normal items
                        }
                        shadow-none md:shadow-[inherit] /* Remove shadow on mobile */
                      `}
                    />
                  </div>
                </div>

                {/* --- TEXT SIDE --- */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  {/* Tag */}
                  <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[3px] uppercase text-[#FFD700] border border-[#FFD700] bg-[#111]">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
                    {item.desc}
                  </p>

                  {/* Details (Price & Pairing) */}
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      isReverse ? "md:justify-end" : "md:justify-start"
                    } gap-6 pb-8 mb-8 border-b border-white/10`}
                  >
                    <span className="text-3xl md:text-4xl text-[#FFD700] font-serif font-bold">
                      {item.price}
                    </span>
                    <span className="text-gray-500 text-sm italic">
                      🍷 Pair with: {item.pairing}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link
                    href="/reservation"
                    className="inline-block px-8 py-3 bg-[#FFD700] text-black font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                  >
                    Reserve This Dish
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="w-full bg-black py-10 border-t border-[#ffd700]/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#555] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
            &copy; 2026 Shadow Grill. Experience the Extraordinary.
          </p>
        </div>
      </footer>
    </main>
  );
}
