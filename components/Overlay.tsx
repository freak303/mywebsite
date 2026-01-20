"use client";

import React, { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
    containerRef: RefObject<HTMLDivElement>;
}

export default function Overlay({ containerRef }: OverlayProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax Transforms
    // Content moves slower or faster than the container
    // Since the overlay container is naturally scrolling up, to create "parallax" (staying longer or moving differently),
    // we can use translateY.

    // Section 1: Intro (0 - 0.2 of the 500vh)
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Section 2: "Engineering & Strategy" (0.15 - 0.45 of the 500vh)
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [100, 0, -100]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);

    // Section 3: "I don't ship demos" (0.45 - 0.75 of the 500vh)
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [100, 0, -100]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between pb-[50vh]">
            {/* SECTION 1 - Centered */}
            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="fixed top-1/2 left-0 w-full -translate-y-1/2 text-center"
            >
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm uppercase tracking-wider text-white/80 backdrop-blur-md">
                    Available for Hire
                </span>
                <h1 className="mt-6 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
                    Md Saqib Shakil
                </h1>
                <p className="mt-4 text-xl font-light text-slate-300 md:text-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
                    AI Consultant · Engineer · Content Strategist
                </p>
                <div className="mt-10 flex justify-center">
                    <div className="px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl">
                        <p className="text-sm md:text-base font-medium tracking-wide text-fuchsia-400">
                            Not just another "AI guy."<br />
                            <span className="text-white/90">I build AI systems that deliver real-world impact.</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* SECTION 2 - Left Aligned */}
            {/* We use fixed positioning + conditional opacity to show these at specific times */}
            <motion.div
                style={{ y: y2, opacity: opacity2 }}
                className="fixed top-1/2 left-8 w-full max-w-2xl -translate-y-1/2 md:left-24"
            >
                <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                    Engineering <br />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        & Strategy.
                    </span>
                </h2>
                <p className="mt-6 text-lg text-gray-300 md:text-xl">
                    From viral content systems to full-stack AI SaaS.
                    Bridging the gap between technical complexity and business growth.
                </p>
            </motion.div>

            {/* SECTION 3 - Right Aligned */}
            <motion.div
                style={{ y: y3, opacity: opacity3 }}
                className="fixed top-1/2 right-8 w-full max-w-2xl -translate-y-1/2 text-right md:right-24"
            >
                <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                    "I don’t ship <br />
                    <span className="text-indigo-400">demos.</span>"
                </h2>
                <p className="mt-6 ml-auto max-w-lg text-lg text-gray-300 md:text-xl">
                    I ship production systems that move real metrics.
                    Performance, scalability, and polish are non-negotiable.
                </p>
            </motion.div>
        </div>
    );
}
