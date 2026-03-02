"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Trophy } from "lucide-react";

const achievements = [
    { rank: "1st Rank", title: "72-Hour Fork That NYC", detail: "NEAR Protocol Global Hackathon" },
    { rank: "2nd Rank", title: "One Trillion Agents Hackathon", detail: "Multi-Agent AI Systems Challenge" },
    { rank: "4th Rank", title: "Davidson College Hackathon", detail: "Cybersecurity & Automation Track" },
    { rank: "Winner", title: "International Overnight Hackathon", detail: "Nepal Cross-Border Tech Competition" },
];

export const Achievements = () => {
    return (
        <section id="achievements" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-8">Competitive Record</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((acc, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-transparent border-white/10 hover:border-white/20 transition-colors">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                    <Trophy className="w-5 h-5 text-white/70" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest">{acc.rank}</span>
                                    <span className="text-lg font-semibold text-white mt-1">{acc.title}</span>
                                    <span className="text-sm text-muted-foreground">{acc.detail}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
