"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 w-full border-t border-white/10 bg-[#121212] py-12 px-4 text-center md:text-left">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                    <h3 className="text-lg font-bold text-white">Md Saqib Shakil</h3>
                    <p className="text-sm text-gray-500">Building real AI systems.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/SaqibShakil303" className="group rounded-full bg-white/5 p-3 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/saqib-shakil303" className="group rounded-full bg-white/5 p-3 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:md.shakil0165@gmail.com" className="group rounded-full bg-white/5 p-3 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                        <Mail className="h-5 w-5" />
                    </a>
                </div>

                <div className="text-sm text-gray-600 md:text-right">
                    &copy; {new Date().getFullYear()} Md Saqib Shakil.
                </div>
            </div>
        </footer>
    );
}
