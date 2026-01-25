"use client";

import { useState, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.3; // Low volume for background
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      {/* Hidden Audio Element */}
      {/* You need a file at public/sounds/ambiance.mp3 */}
      <audio ref={audioRef} loop src="/sounds/ambiance.mp3" />

      <button
        onClick={toggleAudio}
        className="flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors group"
      >
        {/* Animated Bars */}
        <div className="flex items-end gap-[2px] h-4">
          <div
            className={`w-[2px] bg-current transition-all duration-500 ${
              isPlaying ? "h-4 animate-[bounce_1s_infinite]" : "h-1"
            }`}
          ></div>
          <div
            className={`w-[2px] bg-current transition-all duration-500 delay-100 ${
              isPlaying ? "h-3 animate-[bounce_1.2s_infinite]" : "h-1"
            }`}
          ></div>
          <div
            className={`w-[2px] bg-current transition-all duration-500 delay-75 ${
              isPlaying ? "h-4 animate-[bounce_0.8s_infinite]" : "h-1"
            }`}
          ></div>
        </div>

        <span className="text-xs uppercase tracking-widest font-bold group-hover:underline decoration-[#FFD700]">
          {isPlaying ? "Sound On" : "Sound Off"}
        </span>
      </button>
    </div>
  );
}
