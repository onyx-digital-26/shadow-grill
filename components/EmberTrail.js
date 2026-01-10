"use client";

import { useEffect, useRef } from "react";

export default function EmberTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse tracking
    const handleMouseMove = (e) => {
      // Add new particles on move
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedY: Math.random() * -1 - 0.5, // Float up
          speedX: (Math.random() - 0.5) * 2, // Drift left/right
          life: 1, // Opacity
          color: `rgba(255, ${Math.floor(Math.random() * 100) + 100}, 0,`, // Orange/Gold range
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.02; // Fade out speed
        p.size *= 0.95; // Shrink speed

        ctx.fillStyle = p.color + p.life + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life <= 0 || p.size <= 0.2) {
          particles.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  );
}
