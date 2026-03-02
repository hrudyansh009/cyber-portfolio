"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

export const Experience = () => {
    return (
        <section id="experience" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-12">Operational Experience</h2>

            <div className="flex flex-col gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-colors">
                        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className="md:w-1/3 flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-white">Nashik Cyber Police / Cyber Cell</h3>
                                <span className="text-sm text-muted-foreground font-mono">Current Role</span>
                            </div>
                            <div className="md:w-2/3 flex flex-col gap-3 text-sm text-white/80">
                                <p className="font-medium text-white">Cybersecurity Support</p>
                                <p>Operational exposure to cyber investigations, active monitoring, and providing technical assistance for security incidents.</p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <Card className="bg-transparent border-white/5 hover:border-white/10 transition-colors">
                        <CardContent className="p-6 flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className="md:w-1/3 flex flex-col gap-1">
                                <h3 className="text-lg font-medium text-white/90">Kumbh Mela (Current Year)</h3>
                                <span className="text-sm text-muted-foreground font-mono">Special Operation</span>
                            </div>
                            <div className="md:w-2/3 flex flex-col gap-2 text-sm text-white/70">
                                <p>Provided technical and security support during high-scale public event operations, assisting in securing network communications and monitoring infrastructure.</p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <Card className="h-full bg-transparent border-white/5 hover:border-white/10 transition-colors">
                            <CardContent className="p-6 flex flex-col gap-2">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Former</span>
                                <h3 className="text-base font-medium text-white/80">InternsElite</h3>
                                <p className="text-sm text-white/60">Student Intern</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <Card className="h-full bg-transparent border-white/5 hover:border-white/10 transition-colors">
                            <CardContent className="p-6 flex flex-col gap-2">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Former</span>
                                <h3 className="text-base font-medium text-white/80">Bits and Bytes Services</h3>
                                <p className="text-sm text-white/60">Technical Support Specialist & Student Intern</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
