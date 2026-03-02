"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Terminal, Shield, Cpu, ArrowRight } from "lucide-react";
import { useSystemStore } from "@/system/store";

// Import Content Modules
import { AboutSection } from "@/modules/AboutSection";
import { Experience } from "@/modules/Experience";
import { ProjectsGrid } from "@/modules/ProjectsGrid";
import { SkillsMatrix } from "@/modules/SkillsMatrix";
import { Achievements } from "@/modules/Achievements";
import { Roadmap } from "@/modules/Roadmap";
import { Contact } from "@/modules/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const toggleConsole = useSystemStore((state) => state.toggleConsole);

  return (
    <div className="w-full max-w-5xl px-4 flex flex-col gap-24 py-12 selection:bg-white/20">

      {/* HERO SECTION */}
      <section className="flex flex-col gap-6 pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">System Online</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            HRUDYANSH KAYASTHA
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight">
            AI-Driven Cybersecurity Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
        >
          Engineering structured, automation-driven defensive systems for modern cybersecurity operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <Button variant="default" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View ALCDPX <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <Button variant="terminal" className="gap-2" onClick={toggleConsole}>
            <Terminal className="w-4 h-4" /> Enter Console Mode
          </Button>
        </motion.div>
      </section>

      {/* CAPABILITY BLOCKS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Shield, title: "Threat Hunting & Intelligence", desc: "Proactive intelligence gathering and indicator analysis to detect advanced persistent threats." },
          { icon: Terminal, title: "Linux Defense Automation", desc: "Hardening systems and scripting autonomous responses to neutralize attacks at machine speed." },
          { icon: Cpu, title: "AI-Assisted Correlation & Response", desc: "Leveraging ML models to enrich logs, correlate events, and automate SOC triage workflows." }
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <Card className="h-full bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors group">
              <CardHeader>
                <block.icon className="w-6 h-6 text-white/50 mb-2 group-hover:text-white transition-colors" />
                <CardTitle className="text-lg text-white font-medium">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="flex flex-col gap-6">
        <h3 className="text-sm font-mono uppercase tracking-widest text-white/30 border-b border-white/5 pb-2">Operational Record</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-transparent border-white/5 pointer-events-none">
            <CardContent className="p-4 flex flex-col gap-1">
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Active Duty</span>
              <span className="text-sm font-semibold text-white">Nashik Cyber Police</span>
              <span className="text-xs text-white/50">Cyber Operations Support</span>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-white/5 pointer-events-none">
            <CardContent className="p-4 flex flex-col gap-1">
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Special Ops</span>
              <span className="text-sm font-semibold text-white">Kumbh Mela (2027)</span>
              <span className="text-xs text-white/50">Tech Security Contribution</span>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-white/5 pointer-events-none">
            <CardContent className="p-4 flex flex-col gap-1">
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Background</span>
              <span className="text-sm font-semibold text-white">IT & Networking</span>
              <span className="text-xs text-white/50">InternsElite / Bits & Bytes</span>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-white/5 pointer-events-none">
            <CardContent className="p-4 flex flex-col gap-1">
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Academia & Certs</span>
              <span className="text-sm font-semibold text-white">AS Cyber Security</span>
              <span className="text-xs text-white/50">4x Hackathon Winner / AoC</span>
            </CardContent>
          </Card>
        </div>
      </section>

      <AboutSection />
      <Experience />
      <ProjectsGrid />
      <SkillsMatrix />
      <Achievements />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}
