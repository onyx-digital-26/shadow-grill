"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed! (Connect this to an API)");
    setEmail("");
  };

  return (
    <footer className="bg-[#050505] border-t border-[#FFD700]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* BRAND COLUMN */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif text-[#FFD700] mb-6">
            Shadow Grill
          </h2>
          <p className="text-gray-400 text-sm leading-7 mb-6">
            An immersive dining experience forged in fire and defined by
            darkness. Est. 1998.
          </p>
          <div className="flex gap-4">
            {/* Social Icons (Placeholders) */}
            <div className="w-8 h-8 rounded-full bg-[#111] border border-[#333] hover:border-[#FFD700] cursor-pointer transition-colors"></div>
            <div className="w-8 h-8 rounded-full bg-[#111] border border-[#333] hover:border-[#FFD700] cursor-pointer transition-colors"></div>
            <div className="w-8 h-8 rounded-full bg-[#111] border border-[#333] hover:border-[#FFD700] cursor-pointer transition-colors"></div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="col-span-1">
          <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link
                href="/menu"
                className="hover:text-[#FFD700] transition-colors"
              >
                Our Menu
              </Link>
            </li>
            <li>
              <Link
                href="/reservation"
                className="hover:text-[#FFD700] transition-colors"
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                href="/specials"
                className="hover:text-[#FFD700] transition-colors"
              >
                Chef Specials
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-[#FFD700] transition-colors"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* HOURS & LOCATION */}
        <div className="col-span-1">
          <h3 className="text-white font-serif text-lg mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <span className="block text-white mb-1">Location</span>
              123 Culinary Ave, Shadow City
            </li>
            <li>
              <span className="block text-white mb-1">Opening Hours</span>
              Mon - Sun: 5pm - 11pm
            </li>
            <li>
              <span className="block text-white mb-1">Contact</span>
              (555) 123-4567
            </li>
          </ul>
        </div>

        {/* NEWSLETTER (The Lead Magnet) */}
        <div className="col-span-1">
          <h3 className="text-white font-serif text-lg mb-6">
            Join the Inner Circle
          </h3>
          <p className="text-gray-400 text-xs mb-4">
            Subscribe for exclusive menu updates and a complimentary dessert on
            your birthday.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#111] border border-[#333] p-3 text-white text-sm outline-none focus:border-[#FFD700] transition-colors"
              required
            />
            <button className="bg-[#FFD700] text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#222] pt-8 text-center">
        <p className="text-[#555] text-xs tracking-[0.2em] uppercase font-medium">
          &copy; 2026 Shadow Grill. Designed for Elegance.
        </p>
      </div>
    </footer>
  );
}
