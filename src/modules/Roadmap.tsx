"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

const roadmap = [
    { phase: "Phase 1", title: "Telemetry & Hardening", status: "Completed" },
    { phase: "Phase 2", title: "Detection + Correlation", status: "Active" },
    { phase: "Phase 3", title: "Response Automation", status: "Planned 2026" },
    { phase: "Phase 4", title: "Semi-Autonomous SOC Agent", status: "Planned Q3 2026" },
    { phase: "Phase 5", title: "Adaptive Defense Prototype", status: "Vision 2027+" },
];

export const Roadmap = () => {
    return (
        <section id="roadmap" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-8">18-Month Deployment Plan</h2>

            <div className="flex flex-col gap-4">
                {roadmap.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className={`border-white/5 bg-transparent ${item.status === 'Active' ? 'border-l-4 border-l-white/60 bg-white/[0.02]' : ''}`}>
                            <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-mono w-16 text-white/40">{item.phase}</span>
                                    <span className="text-base text-white font-medium">{item.title}</span>
                                </div>
                                <span className={`text-xs font-mono tracking-widest px-2 py-1 rounded border ${item.status === 'Active' ? 'border-white/30 text-white bg-white/10' :
                                        item.status === 'Completed' ? 'border-transparent text-white/30' :
                                            'border-white/10 text-white/50 bg-black'
                                    }`}>
                                    {item.status}
                                </span>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
