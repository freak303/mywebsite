"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Total frames in the sequence
    const frameCount = 200;

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Format: ezgif-frame-001.jpg
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Canvas rendering
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Clear and draw
        canvas.width = width;
        canvas.height = height;

        // Object-fit: cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Scroll logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll to frame index
    // We want the animation to finish a bit before the very end if needed, 
    // or use the whole scroll range. 
    // We'll use the whole 500vh container for the sequence.
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            renderFrame(Math.floor(latest));
        }
    });

    // Initial Render
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded, width, height]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
            <canvas
                ref={canvasRef}
                className="block h-full w-full object-cover"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#121212] text-white">
                    LOADING...
                </div>
            )}
        </div>
    );
}
