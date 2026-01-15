"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "AI CRM + POS (Flagship)",
        description: "End-to-end AI CRM with chatbot automation, billing, analytics.",
        tech: ["Angular SSR", "NestJS", "AWS", "MySQL"],
        features: ["WhatsApp automation", "OAuth login", "Invoice system", "Lead scoring"],
        gradient: "from-blue-600 to-cyan-500",
    },
    {
        title: "Sunflower Trip Platform",
        description: "Travel booking system with payments.",
        tech: ["Angular", "Node", "Razorpay"],
        features: [],
        gradient: "from-purple-600 to-pink-500",
    },
    {
        title: "SunTrip ERP",
        description: "Internal ERP system (HRM, CRM, automation)",
        tech: ["Internal Tool"],
        features: [],
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Unity Horror Game",
        description: "Story-based demo game with immersive atmosphere.",
        tech: ["Unity", "C#"],
        features: [],
        gradient: "from-green-500 to-emerald-600",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-32 px-4 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                            <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                            <p className="mb-6 text-gray-400">{project.description}</p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.features.length > 0 && (
                                <ul className="mb-8 list-inside list-disc text-sm text-gray-500">
                                    {project.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            )}

                            <button className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400">
                                View Case Study
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
