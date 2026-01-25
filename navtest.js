"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "SPECIALS", href: "/specials" },
    { name: "GALLERY", href: "/gallery" },
    { name: "REVIEWS", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-[#222]">
      {" "}
      <div className="w-full px-6">
        {" "}
        <div className="flex justify-between items-center h-24">
          {" "}
          {/* LOGO SECTION - With Glow */}{" "}
          <Link href="/" className="flex items-center gap-4 group">
            {" "}
            <div className="relative w-14 h-14 rounded-full bg-black border border-[#333] flex items-center justify-center logo-glow overflow-hidden">
              {" "}
              {/* Ensure you have public/logo.png, or this will be a placeholder */}{" "}
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />{" "}
            </div>{" "}
            <span className="font-luxury text-3xl text-gold tracking-wide">
              {" "}
              Shadow Grill{" "}
            </span>{" "}
          </Link>{" "}
          {/* DESKTOP NAV - Bullet Points Style */}{" "}
          <div className="hidden xl:flex items-center gap-4">
            {" "}
            {links.map((link, index) => (
              <div key={link.name} className="flex items-center gap-4">
                {" "}
                <Link
                  href={link.href}
                  className="text-xs font-bold tracking-[0.15em] text-white hover:text-gold transition-colors uppercase"
                >
                  {" "}
                  {link.name}{" "}
                </Link>{" "}
                {/* Add bullet point unless it's the last item */}{" "}
                {index !== links.length - 1 && (
                  <span className="text-gray-600 text-[10px]">•</span>
                )}{" "}
              </div>
            ))}{" "}
          </div>{" "}
          {/* MOBILE MENU BUTTON */}{" "}
          <button
            className="xl:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8 text-gold" />
            )}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* MOBILE DROPDOWN */}{" "}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="xl:hidden bg-black border-t border-[#333]"
        >
          {" "}
          <div className="flex flex-col p-6 space-y-4 items-center">
            {" "}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gold text-sm tracking-widest font-bold uppercase"
              >
                {" "}
                {link.name}{" "}
              </Link>
            ))}{" "}
          </div>{" "}
        </motion.div>
      )}{" "}
    </nav>
  );
}
