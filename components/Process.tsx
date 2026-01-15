"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Strategy" },
    { num: "02", title: "System Design" },
    { num: "03", title: "Rapid Build" },
    { num: "04", title: "Testing" },
    { num: "05", title: "Deployment" },
    { num: "06", title: "Scale" },
];

export default function Process() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Workflow</span>
                    <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">Process</h2>
                </motion.div>

                <div className="relative mt-20">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center bg-[#121212] lg:py-4"
                            >
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-bold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:border-indigo-500">
                                    {step.num}
                                </div>
                                <h3 className="text-lg font-medium text-gray-300">{step.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
