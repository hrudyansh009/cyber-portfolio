"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="w-full flex flex-col md:flex-row gap-12 py-12 border-t border-white/5 pt-20">
            <div className="w-full md:w-1/3">
                <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-4">About System</h2>
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-8 text-sm text-foreground/80">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-mono tracking-widest uppercase text-xs border-b border-white/10 pb-2">Current Focus</h3>
                        <p className="leading-relaxed">Building repeatable defensive infrastructure and automating threat detection workflows.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-mono tracking-widest uppercase text-xs border-b border-white/10 pb-2">Technical Direction</h3>
                        <p className="leading-relaxed">Integrating AI-assisted analysis with cybersecurity automation to accelerate incident response and alert triage.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-mono tracking-widest uppercase text-xs border-b border-white/10 pb-2">Execution Mindset</h3>
                        <p className="leading-relaxed">Engineering real, operational defensive systems with a focus on log pipeline architecture and automated correlation.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-mono tracking-widest uppercase text-xs border-b border-white/10 pb-2">Long-term Mission</h3>
                        <p className="leading-relaxed">Developing offensive-informed defense mechanisms and scalable automation to neutralize threats at machine speed.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
