"use client";

export default function Contact() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-32 px-4 md:px-12 text-center">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-5xl font-bold text-white md:text-7xl">Let’s build something powerful.</h2>
                <p className="mt-8 text-xl text-gray-400">If you’re serious about building real products — let’s talk.</p>

                <form className="mt-12 flex flex-col gap-6 text-left">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-500">Name</label>
                            <input className="rounded-lg border border-white/5 bg-white/5 p-4 text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-500">Email</label>
                            <input className="rounded-lg border border-white/5 bg-white/5 p-4 text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-500">Message</label>
                        <textarea className="h-40 rounded-lg border border-white/5 bg-white/5 p-4 text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button
                        type="button"
                        className="group relative mt-8 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-indigo-500/25 active:scale-95"
                    >
                        <span className="relative z-10">Start Collaboration</span>
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                </form>
            </div>
        </section>
    );
}
