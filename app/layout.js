import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
// --- VISUAL & INTERACTIVE UTILITIES ---
import Preloader from "@/components/Preloader"; // The Cinematic Loading Screen
import CustomCursor from "@/components/CustomCursor"; // The "Spotlight" Cursor
import EmberTrail from "@/components/EmberTrail"; // The "Fire" Mouse Trail
import SecretMenu from "@/components/SecretMenu"; // The Viral "Type SHADOW" Cheat Code
import { SpeedInsights } from "@vercel/speed-insights/next";
// --- AUDIO & MARKETING ---
import AudioPlayer from "@/components/AudioPlayer"; // Background Ambience
import StickyCta from "@/components/StickyCta"; // Floating "Book Now" Button
import FomoNotification from "@/components/FomoNotification"; // "Live Booking" Popup
import Footer from "@/components/Footer";
export const metadata = {
  title: "Shadow Grill | The Symphony of Flavor",
  description:
    "A premium steakhouse experience forged in fire. Defined by darkness. Est. 1998.",
  // Note: We removed the 'icons' block because you added icon.png to the /app folder.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth cursor-none">
      {/* 'cursor-none' hides the default mouse so our CustomCursor takes over */}

      <body className="bg-[#050505] text-white antialiased selection:bg-[#FFD700] selection:text-black">
        {/* 1. THE "WOW" LAYER (Overlays) */}
        {/* These sit on top of the website to create the premium feel */}
        <Preloader />
        <CustomCursor />
        <EmberTrail />
        <SecretMenu />

        {/* 2. THE UTILITY LAYER */}
        <AudioPlayer />
        <StickyCta />
        <FomoNotification />

        {/* 3. THE WEBSITE CONTENT */}
        <Header />

        <div className="min-h-screen">{children}</div>
        <SpeedInsights />
        < Analytics />
        <Footer />
      </body>
    </html>
  );
}
