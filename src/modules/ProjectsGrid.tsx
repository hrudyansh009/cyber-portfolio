"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const projects = [
    {
        title: "ALCDPX",
        subtitle: "Autonomous Linux Cyber Defense Platform",
        goal: "Automated Linux defense workflow: collect → detect → correlate → respond.",
        arch: "Collectors → Normalizer → Rule Engine → Correlator → Response Runner → Dashboard",
        capabilities: ["Real-time log monitoring", "Detection rules", "Event correlation", "Controlled responses", "Modular architecture"],
        status: "In Progress",
        flagship: true,
        categories: ["Defensive Automation", "AI Systems"]
    },
    {
        title: "Security Telemetry Pipeline",
        goal: "Log ingestion, parsing and normalization, structured storage, query interface.",
        purpose: "Foundation layer for detection engineering.",
        status: "In Progress",
        categories: ["Defensive Automation"]
    },
    {
        title: "Detection Rules Pack + Test Harness",
        goal: "Custom rule schema, log replay testing, false-positive tuning, reproducible validation.",
        status: "In Progress",
        categories: ["Detection Engineering"]
    },
    {
        title: "Incident Response Automation CLI",
        goal: "Playbook execution engine, safe action runner, audit logging, dry-run mode, rollback safeguards.",
        status: "Planned",
        categories: ["Defensive Automation"]
    },
    {
        title: "AI Alert Enrichment Assistant",
        goal: "Alert summarization, context enrichment, incident case drafting, suggested human next steps.",
        status: "Prototype",
        categories: ["AI Systems"]
    },
    {
        title: "Autonomous SOC Agent",
        goal: "Incident grouping, automated investigation notes, playbook recommendations.",
        status: "Roadmap",
        categories: ["Roadmap", "AI Systems"]
    },
];

const filters = ["All", "Defensive Automation", "Detection Engineering", "Recon Tools", "AI Systems", "Roadmap"];

export const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = projects.filter(p =>
        activeFilter === "All" ? true : p.categories.includes(activeFilter)
    );

    return (
        <section id="projects" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-xl font-mono text-white tracking-widest uppercase">System Projects</h2>
                <div className="flex flex-wrap gap-2">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`text-xs px-3 py-1 border rounded-full transition-colors ${activeFilter === f ? "border-white/40 bg-white/10 text-white" : "border-white/10 text-white/50 hover:text-white"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                    {filtered.map((proj, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            key={proj.title}
                            className={proj.flagship ? "md:col-span-2" : "col-span-1"}
                        >
                            <Card className={`h-full group transition-all duration-300 ${proj.flagship ? "border-white/20 bg-white/[0.03] hover:border-white/40" : "border-white/5 bg-transparent hover:border-white/20 hover:bg-white/[0.01]"}`}>
                                <CardHeader className="pb-4 relative">
                                    {/* Subtle hover bracket effect */}
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/0 group-hover:border-white/30 transition-all rounded-tr-lg m-2"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/0 group-hover:border-white/30 transition-all rounded-bl-lg m-2"></div>

                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <CardTitle className="text-xl flex items-center gap-3 text-white group-hover:text-white transition-colors">
                                                {proj.title}
                                                {proj.flagship && <span className="text-[10px] px-2 py-0.5 border border-white/20 bg-white/10 rounded font-mono uppercase tracking-widest text-white/80 shrink-0">Flagship</span>}
                                            </CardTitle>
                                            {proj.subtitle && <p className="text-sm text-muted-foreground mt-1 font-mono tracking-tight">{proj.subtitle}</p>}
                                        </div>
                                        <Badge variant={proj.status === "In Progress" ? "default" : proj.status === "Prototype" ? "secondary" : "outline"} className="shrink-0">
                                            {proj.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-white/70">
                                    <p><strong className="text-white">Goal:</strong> {proj.goal}</p>

                                    {proj.arch && (
                                        <p><strong className="text-white">Arch:</strong> <span className="font-mono text-xs bg-white/5 px-1">{proj.arch}</span></p>
                                    )}
                                    {proj.capabilities && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {proj.capabilities.map(c => (
                                                <span key={c} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded bg-black/50">{c}</span>
                                            ))}
                                        </div>
                                    )}
                                    {proj.purpose && <p><strong className="text-white">Purpose:</strong> {proj.purpose}</p>}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
