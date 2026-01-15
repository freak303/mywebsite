"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    BrainCircuit,
    Database,
    TrendingUp,
    Server,
    Cloud,
    Code
} from "lucide-react";

const services = [
    {
        title: "AI SaaS Development",
        icon: <Cpu className="h-8 w-8" />,
        description: "Building scalable AI-powered applications from scratch."
    },
    {
        title: "Custom LLM Systems",
        icon: <BrainCircuit className="h-8 w-8" />,
        description: "Fine-tuning and deploying specialized language models."
    },
    {
        title: "CRM / ERP Platforms",
        icon: <Database className="h-8 w-8" />,
        description: "Unified systems for business intelligence and operations."
    },
    {
        title: "Growth Automation",
        icon: <TrendingUp className="h-8 w-8" />,
        description: "Automating workflows to drive business growth."
    },
    {
        title: "Backend Architecture",
        icon: <Server className="h-8 w-8" />,
        description: "Robust and scalable server-side solutions."
    },
    {
        title: "Cloud Deployment",
        icon: <Cloud className="h-8 w-8" />,
        description: "Secure and efficient cloud infrastructure setup."
    },
    {
        title: "Technical Consulting",
        icon: <Code className="h-8 w-8" />,
        description: "Strategic advice for complex engineering challenges."
    },
];

export default function WhatIDo() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">How I Help</span>
                    <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">What I Do</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)" }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-white/10"
                        >
                            <div className="mb-6 rounded-full bg-white/10 p-3 text-indigo-400 w-fit group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-colors">
                                {service.icon}
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-300">{service.description}</p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
