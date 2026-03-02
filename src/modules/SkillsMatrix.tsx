"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Security Core",
        items: ["Threat Hunting", "CTI Analysis", "Incident Triage", "Detection Engineering"],
    },
    {
        category: "Linux & Systems",
        items: ["Linux Administration", "System Hardening", "Bash scripting", "Log auditing"],
    },
    {
        category: "Networking",
        items: ["TCP/IP fundamentals", "DNS/DHCP", "Port scanning", "Network diagnostics"],
    },
    {
        category: "Automation & Engineering",
        items: ["Python scripting", "CLI tooling", "Git workflows", "Modular architecture"],
    },
    {
        category: "AI for Security",
        items: ["Alert enrichment", "Correlation assistance", "Automation logic planning"],
    },
];

export const SkillsMatrix = () => {
    return (
        <section id="skills" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-8">Technical Matrix</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        className="border border-white/10 bg-white/[0.02] p-6 rounded relative overflow-hidden group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-sm font-mono text-white/50 mb-4">{skillGroup.category}</h3>
                        <ul className="space-y-2">
                            {skillGroup.items.map((item, i) => (
                                <li key={i} className="text-sm text-white/80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-white/30 rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
