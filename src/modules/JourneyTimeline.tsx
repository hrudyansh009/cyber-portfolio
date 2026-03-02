"use client";

import { motion } from "framer-motion";

const phases = [
    {
        phase: "Phase 1",
        title: "Infrastructure & Systems Foundation",
        items: ["Networking fundamentals", "Windows Server", "Active Directory", "DNS/DHCP", "User migrations"],
    },
    {
        phase: "Phase 2",
        title: "Security Orientation",
        items: ["Operational exposure", "Threat analysis mindset", "Competitive hackathons"],
    },
    {
        phase: "Phase 3",
        title: "Automation Focus",
        items: ["Linux hardening", "Detection logic", "Automation scripting"],
    },
    {
        phase: "Phase 4",
        title: "Autonomous Defense Vision",
        items: ["Building ALCDPX", "Correlation systems", "SOC automation direction"],
    }
];

export const JourneyTimeline = () => {
    return (
        <section id="journey" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-12">Professional Evolution</h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-8">
                {phases.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="pl-8 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-background border-2 border-white/40 rounded-full" />
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono text-muted-foreground">{item.phase}</span>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.items.map((skill, i) => (
                                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white/70">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
