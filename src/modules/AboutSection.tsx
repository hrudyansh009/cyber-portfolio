"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="w-full flex justify-between gap-12 py-12 border-t border-white/5 pt-20">
            <div className="w-full md:w-1/3">
                <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-4">About System</h2>
                <div className="text-xs text-muted-foreground font-mono leading-relaxed space-y-2">
                    <p>STATUS: ONLINE</p>
                    <p>LOC: NASHIK, IN</p>
                    <p>ROLE: SYS_ARCHITECT</p>
                </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-6">
                <motion.p
                    className="text-lg md:text-2xl text-white font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Cybersecurity engineer focused on building repeatable defensive systems that reduce manual operational load through structured detection engineering and automation.
                </motion.p>

                <div className="grid grid-cols-2 gap-4 text-sm text-foreground/80 mt-4">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> Cyber Threat Hunting (CTH)</li>
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> Cyber Threat Intelligence (CTI)</li>
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> Detection Engineering</li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> Linux Hardening</li>
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> Security Automation Architecture</li>
                        <li className="flex items-center gap-2"><span className="text-white/30">{">"}</span> AI-Assisted Alert Enrichment</li>
                    </ul>
                </div>

                <div className="mt-8 p-6 border border-white/10 bg-white/[0.02] rounded-lg">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Operating Philosophy</span>
                    <p className="text-lg font-mono text-white">Automate everything repeatable.</p>
                </div>
            </div>
        </section>
    );
};
