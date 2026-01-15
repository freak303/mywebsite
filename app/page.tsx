"use client";

import { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ReactLenis root>
      <main className="bg-[#121212] min-h-screen text-white">
        {/* ScrollyTelling Section: 500vh tall */}
        {/* We use a ref on this container to map scroll progress */}
        <div ref={containerRef} className="relative h-[500vh]">
          <ScrollyCanvas containerRef={containerRef} />
          <Overlay containerRef={containerRef} />
        </div>

        {/* Rest of the content */}
        <div className="relative z-10 bg-[#121212]">
          <Projects />
          <WhatIDo />
          <Experience />
          <AboutMe />
          <TechStack />
          <Process />
          <Contact />
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
