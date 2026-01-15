"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Digital & Software Lead",
            company: "Sunflower Trip Pvt Ltd",
            period: "2025 NOV — Present",
            achievements: [
                "Architected AI CRM system",
                "Led junior developers",
                "Designed scalable APIs",
                "Deployed cloud infrastructure",
                "Integrated payments",
                "Built automation pipelines",
                "Improved system performance"
            ]
        },
         {
            role: "Full Stack Developer",
            company: "Sunflower Trip Pvt Ltd",
            period: "2025 APR — 2025 NOV",
            achievements: [
                "Built and scaled a travel booking platform with 1000+ monthly users",
                "Boosted engagement by 35% with advanced search & filters",
                "Integrated Razorpay, processing ₹10L+ monthly transactions",
                "Reduced production bugs by 30% through performance optimization",
                "Maintained 99.9% uptime on Hostinger & Railway deployments",
            ]
        }, {
            role: "Full Stack Developer",
            company: "Freelancer at Australia",
            period: "2024 APR — 2025 MAR",
            achievements: [
                "Developed POS system used by 5+ retail outlets",
                "delivered Projects 2 weeks ahead of schedule",
                "Improved UI performance by 25% (Angular optimization)",
                "Managed production database on Azure SQL Server",
                "Integrated payments and Billing",
                "Improved for handling 500+ daily transactions"
            ]
        }
    ];

    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-[#121212] bg-indigo-500 md:-left-[61px]" />

                            <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-baseline sm:gap-4">
                                <h3 className="text-3xl font-bold text-white">{exp.role}</h3>
                                <span className="text-lg text-indigo-400 font-medium">@ {exp.company}</span>
                            </div>

                            <p className="mb-6 text-sm font-mono text-gray-500">{exp.period}</p>

                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-4xl">
                                {exp.achievements.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-gray-400"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
