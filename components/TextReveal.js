"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ✅ Updated to accept 'className' for flexible styling
export default function TextReveal({
  text,
  className = "text-2xl md:text-4xl font-serif leading-tight",
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap text-[#333] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-2 relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-[#FFD700]">
        {children}
      </motion.span>
    </span>
  );
};
