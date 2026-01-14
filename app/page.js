"use client";

import Image from "next/image";
import Link from "next/link";
import { homeGridItems } from "@/app/data"; // ✅ Data Imported

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen flex flex-col">
      {/* 1. HERO SECTION (Video Background) */}
      <section className="relative h-[100vh] w-full overflow-hidden border-b-[1px] border-b-[#ffd700]/20">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/smoke.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#050505]" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-[80px]">
          <span className="block text-sm md:text-base tracking-[0.3em] mb-4 text-[#FFD700] font-semibold uppercase animate-fade-in-up">
            EST. 1998
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl leading-tight">
            The Symphony <br className="md:hidden" /> of Flavor
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide max-w-2xl">
            Where culinary art meets the soul.
          </p>

          <Link
            href="/menu"
            className="group relative px-8 py-3 text-sm font-bold tracking-[2px] text-[#0a0a0a] bg-[#ffd700] border-2 border-[#ffd700] overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-[#ffd700]"
          >
            <span className="relative z-10">EXPLORE MENU</span>
          </Link>
        </div>
      </section>

      {/* 2. AESTHETIC GRID SECTION */}
      <section className="w-full py-20 px-4 md:px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[#FFD700] tracking-widest uppercase text-xs md:text-sm mb-3">
              Experience
            </h3>
            <h2 className="text-white text-3xl md:text-4xl font-serif">
              Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeGridItems.map((item, i) => (
              <div
                key={i}
                className="relative group w-full max-w-[500px] md:max-w-none mx-auto h-[300px] md:h-[500px] overflow-hidden border border-white/10 rounded-sm hover:border-[#ffd700] transition-colors duration-500"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 lg:bg-black/70 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-white text-2xl md:text-3xl font-serif tracking-widest mb-2 border-b-2 border-[#ffd700] pb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 font-light tracking-wide text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY SECTION */}
      <section className="relative w-full py-24 px-6 bg-[#0a0a0a] border-t border-[#ffd700]/10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-[1px] h-[40px] bg-[#ffd700] mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FFD700] mb-8 tracking-wide">
            Our Philosophy
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light font-serif italic">
            &quot;Dining is not just about sustenance; it is a ritual. At Shadow
            Grill, we strip away the noise to focus on the essential: the heat
            of the fire and the purity of the ingredients.&quot;
          </p>
          <Link
            href="/about"
            className="text-white text-sm tracking-[3px] uppercase border-b border-[#ffd700] pb-2 hover:text-[#ffd700] transition-colors duration-300"
          >
            Read Our Story &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
