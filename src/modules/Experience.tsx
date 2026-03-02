"use client";

import { motion } from "framer-motion";

export const Experience = () => {
    return (
        <section id="experience" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-8">Operations & Development</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="border-l border-white/10 pl-4 py-1 relative">
                        <div className="absolute w-2 h-2 bg-white/50 rounded-full -left-[4.5px] top-2"></div>
                        <h3 className="text-base font-semibold text-white">Hands-on Lab Development</h3>
                        <p className="text-sm text-white/60 mt-2 leading-relaxed">Built and maintained isolated virtual environments for replicating advanced persistent threats and testing detection rules.</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <div className="border-l border-white/10 pl-4 py-1 relative">
                        <div className="absolute w-2 h-2 bg-white/50 rounded-full -left-[4.5px] top-2"></div>
                        <h3 className="text-base font-semibold text-white">Self-Built Red vs Blue Simulations</h3>
                        <p className="text-sm text-white/60 mt-2 leading-relaxed">Executed offensive campaigns using Kali Linux against custom defensive infrastructure to validate monitoring capabilities and refine alert fidelity.</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <div className="border-l border-white/10 pl-4 py-1 relative">
                        <div className="absolute w-2 h-2 bg-white/50 rounded-full -left-[4.5px] top-2"></div>
                        <h3 className="text-base font-semibold text-white">Security Tooling Optimization</h3>
                        <p className="text-sm text-white/60 mt-2 leading-relaxed">Continuously profiled and tuned custom defensive platforms to reduce latency in log processing and improve correlation accuracy.</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    <div className="border-l border-white/10 pl-4 py-1 relative">
                        <div className="absolute w-2 h-2 bg-white/50 rounded-full -left-[4.5px] top-2"></div>
                        <h3 className="text-base font-semibold text-white">Continuous Defensive System Improvement</h3>
                        <p className="text-sm text-white/60 mt-2 leading-relaxed">Actively refactored automation codebases to improve resilience, scalability, and integration with emerging AI analysis tools.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
