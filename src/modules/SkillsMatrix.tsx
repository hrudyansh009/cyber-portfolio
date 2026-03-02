"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const skills = [
    {
        category: "Defensive Engineering",
        items: [
            { name: "Linux Hardening", desc: "Automated baseline configuration to reduce exposed services and enforce secure defaults." },
            { name: "Log Analysis", desc: "Structured parsing and normalization of telemetry for high-fidelity alerting." },
            { name: "Threat Modeling", desc: "Identifying system vulnerabilities and designing proactive mitigation strategies." },
            { name: "MITRE ATT&CK Mapping", desc: "Aligning detection rules with known adversary tactics to ensure coverage." }
        ]
    },
    {
        category: "Security Automation",
        items: [
            { name: "Python Automation", desc: "Developing custom scripts for log correlation and API-driven orchestration." },
            { name: "Bash Scripting", desc: "Automating system audits, configuration deployment, and routine SOC tasks." },
            { name: "AI-Assisted Log Correlation", desc: "Utilizing ML models to enrich security events and reduce false positives." },
            { name: "Alert Reduction Workflows", desc: "Building logic to filter noise and prioritize high-risk indicators." }
        ]
    },
    {
        category: "Systems & Infrastructure",
        items: [
            { name: "Kali Linux", desc: "Executing controlled threat simulations to validate defensive posture." },
            { name: "Ubuntu Server", desc: "Architecting and securing stable Linux environments for defensive platforms." },
            { name: "Git/GitHub CI Workflows", desc: "Version-controlling detection rules and automating testing pipelines." },
            { name: "Deploy & Test Environments", desc: "Provisioning isolated labs for safe malware analysis and rule validation." }
        ]
    }
];

export const SkillsMatrix = () => {
    return (
        <section id="skills" className="w-full flex-col flex py-12 border-t border-white/5 pt-20">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-8">Capabilities Matrix</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((group, idx) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-semibold text-white/80 border-b border-white/5 pb-2">{group.category}</h3>
                        <div className="flex flex-col gap-4">
                            {group.items.map(skill => (
                                <div key={skill.name} className="flex flex-col gap-1 border border-white/5 p-4 rounded bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                                    <span className="text-sm font-medium text-white">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
