"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// ✅ NEW: Import the LiveStatus component
import LiveStatus from "./LiveStatus";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Specials", href: "/specials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation Variants for Mobile Menu
  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 },
    },
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md h-[100px] flex items-center z-[50] border-b border-b-[#ffd700]/20 transition-all duration-300">
        <div className="mx-auto max-w-[1400px] w-full flex justify-between items-center px-6">
          {/* LOGO AREA */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={55}
                  height={55}
                  priority
                  className="rounded-full animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] filter drop-shadow-[0_0_5px_#ff4500,_0_0_15px_#ffd700]"
                />
                <div className="absolute inset-0 rounded-full bg-[#FFD700] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <span className="font-serif text-[1.6rem] text-[#FFD700] tracking-wider uppercase hidden sm:block">
                Shadow Grill
              </span>
            </Link>

            {/* ✅ NEW: Added LiveStatus next to the logo (hidden on very small screens) */}
            <div className="hidden md:block">
              <LiveStatus />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[40px]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-2 group py-2
                    ${
                      isActive
                        ? "text-[#FFD700]"
                        : "text-white hover:text-[#FFD700]"
                    }`}
                >
                  <span
                    className={`text-[12px] transition-all duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    •
                  </span>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FFD700] transition-all duration-300 ease-out 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* HAMBURGER (Mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Show LiveStatus on mobile too, next to hamburger */}
            <div className="md:hidden scale-75 origin-right">
              <LiveStatus />
            </div>

            <button
              className="text-white hover:text-[#FFD700] transition-colors duration-300"
              onClick={() => setOpen(true)}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-current"></span>
                <span className="block w-8 h-0.5 bg-current"></span>
                <span className="block w-8 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white p-10 z-[100] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[35px] right-[30px] text-[#FFD700] hover:text-white transition-colors duration-300"
            >
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
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-4 text-center font-serif"
            >
              {links.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-4xl uppercase tracking-wider transition-colors duration-300 
                        ${
                          pathname === link.href
                            ? "text-[#FFD700]"
                            : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              className="absolute bottom-10 text-sm text-[#FFD700] tracking-widest uppercase"
            >
              Est. 1998
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
