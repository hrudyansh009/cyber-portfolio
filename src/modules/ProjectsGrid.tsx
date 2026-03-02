"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const projects = [
    {
        title: "ALCDPX",
        subtitle: "Advanced Linux Cyber Defense Platform X",
        goal: "Automate Linux defense workflows to reduce manual log triage and accelerate incident response.",
        stack: "Linux, Python, Bash, AI Log Enrichment, Systemd, Rsyslog",
        arch: "Log Ingestion → Normalizer → Rule Engine → Correlator → Response Runner → Dashboard",
        role: "Designed, implemented, tested, automated, and documented the entire pipeline.",
        outcome: "Reduced manual log triage, automated correlation logic, simulated attacker behavior, and established a structured multi-phase defensive pipeline.",
        status: "Phase 7 implemented: Event correlation engine active",
        flagship: true,
        categories: ["Defensive Automation", "Detection Engineering"]
    },
    {
        title: "Security Telemetry Pipeline",
        goal: "Centralize and normalize security logs for efficient querying and detection engineering.",
        stack: "Linux, Logstash, Elasticsearch, Python",
        arch: "Distributed Log Shippers → Parsing & Normalization → Structured Storage → Query Interface",
        role: "Architected parser configurations, deployed storage nodes, and tested data ingestion rates.",
        outcome: "Standardized log formats from disparate sources, enabling rapid keyword searching and automated rule matching.",
        status: "Fully operational foundation layer for detection engineering",
        categories: ["Systems & Infrastructure", "Detection Engineering"]
    },
    {
        title: "Detection Rules Pack + Test Harness",
        goal: "Create and validate high-fidelity detection rules with automated regression testing.",
        stack: "Sigma, Python, Bash, CI/CD",
        arch: "Custom Rule Schema → Log Replay Engine → False-Positive Tuner → Validation Output",
        role: "Authored rules mapped to MITRE ATT&CK, built replay harness, and automated CI tests.",
        outcome: "Ensured reproducible validation of detection logic and systematically tuned out false positives before deployment.",
        status: "Beta testing active with continuous rule integration",
        categories: ["Detection Engineering"]
    },
    {
        title: "Incident Response Automation CLI",
        goal: "Execute standardized, safe response actions during active security incidents.",
        stack: "Python, Bash, API Integrations",
        arch: "Playbook Execution Engine → Safe Action Runner → Audit Logging → Dry-Run Mode → Rollback Safeguards",
        role: "Designed the core execution engine, integrated safeguards, and developed initial playbooks.",
        outcome: "Reduced mean time to respond (MTTR) for routine alerts while enforcing strictly audited and reversible actions.",
        status: "Prototype complete, expanding playbook library",
        categories: ["Defensive Automation"]
    },
];

const filters = ["All", "Defensive Automation", "Detection Engineering", "Systems & Infrastructure"];

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

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
                            <Card className={`h-full group transition-all duration-300 relative ${proj.flagship ? "border-white/20 bg-white/[0.03] hover:border-white/40" : "border-white/5 bg-transparent hover:border-white/20 hover:bg-white/[0.01]"}`}>
                                {/* Subtle hover bracket effect */}
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/0 group-hover:border-white/30 transition-all rounded-tr-lg m-2 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/0 group-hover:border-white/30 transition-all rounded-bl-lg m-2 pointer-events-none"></div>

                                <CardHeader className="pb-4 relative border-b border-white/5">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <CardTitle className="text-xl flex flex-wrap items-center gap-3 text-white group-hover:text-white transition-colors">
                                                {proj.title}
                                                {proj.flagship && <span className="text-[10px] px-2 py-0.5 border border-white/20 bg-white/10 rounded font-mono uppercase tracking-widest text-white/80 shrink-0">Flagship</span>}
                                            </CardTitle>
                                            {proj.subtitle && <p className="text-sm text-muted-foreground mt-1 font-mono tracking-tight">{proj.subtitle}</p>}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-white/80 pt-4">
                                    <p><strong className="text-white">Objective:</strong> {proj.goal}</p>
                                    <p><strong className="text-white">Tech Stack:</strong> <span className="text-white/70">{proj.stack}</span></p>
                                    <p><strong className="text-white">Architecture:</strong> <span className="font-mono text-xs bg-white/5 px-1 py-0.5 rounded text-white/60">{proj.arch}</span></p>
                                    <p><strong className="text-white">My Role:</strong> {proj.role}</p>
                                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded">
                                        <p className="mb-1"><strong className="text-white text-xs uppercase tracking-widest font-mono">Real Outcome</strong></p>
                                        <p className="text-white/70">{proj.outcome}</p>
                                    </div>
                                    <p className="px-3 py-1.5 bg-black/50 border border-white/10 text-xs text-white/60 rounded font-mono uppercase">
                                        <span className="text-white">Status:</span> {proj.status}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
