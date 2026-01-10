"use client";

import { useEffect, useState } from "react";

export default function LiveStatus() {
  const [status, setStatus] = useState(null); // 'open' | 'closed' | 'closing-soon'

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours(); // 0 - 23

      // Logic: Open 5pm (17) to 11pm (23)
      if (hour >= 17 && hour < 22) {
        setStatus("open");
      } else if (hour === 22) {
        setStatus("closing-soon"); // 10pm - 11pm
      } else {
        setStatus("closed");
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!status) return null; // Don't render on server (hydration fix)

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#222] rounded-full">
      {/* Pulsing Dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 
          ${
            status === "open"
              ? "bg-green-500"
              : status === "closing-soon"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 
          ${
            status === "open"
              ? "bg-green-500"
              : status === "closing-soon"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        />
      </span>

      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">
        {status === "open" && "Kitchen Open"}
        {status === "closing-soon" && "Last Call"}
        {status === "closed" && "Closed Now"}
      </span>
    </div>
  );
}
