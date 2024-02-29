import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02] py-10">
      <Spotlight/>
       <Navbar/>
     <HeroSection/>
    </main>
  );
}
