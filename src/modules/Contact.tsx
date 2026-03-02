"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Contact = () => {
    return (
        <section id="contact" className="w-full flex-col flex py-24 border-t border-white/5 mt-12 mb-20 text-center items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl flex flex-col items-center"
            >
                <span className="p-2 border border-white/10 bg-white/5 rounded-full mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 hover:text-white transition-colors">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Initialize Contact Protocol</h2>
                <p className="text-muted-foreground mb-8">
                    Available for technical discussions regarding system automation, threat hunting infrastructure, and defensive engineering.
                </p>

                <div className="flex flex-col gap-4 font-mono text-sm w-full">
                    <a href="mailto:hrudyansh80@gmail.com" className="p-4 border border-white/10 bg-black/50 hover:bg-white/5 transition-colors text-white/80 rounded flex justify-between items-center group">
                        <span>EMAIL</span>
                        <span className="group-hover:text-white transition-colors">hrudyansh80@gmail.com</span>
                    </a>
                    <a href="tel:+918999321569" className="p-4 border border-white/10 bg-black/50 hover:bg-white/5 transition-colors text-white/80 rounded flex justify-between items-center group">
                        <span>PHONE</span>
                        <span className="group-hover:text-white transition-colors">+91 8999321569</span>
                    </a>
                    <a href="https://linkedin.com/in/hrudyansh-kayastha-817853334" target="_blank" rel="noreferrer" className="p-4 border border-white/10 bg-black/50 hover:bg-white/5 transition-colors text-white/80 rounded flex justify-between items-center group">
                        <span>LINKEDIN</span>
                        <span className="group-hover:text-white transition-colors">View Profile &rarr;</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
