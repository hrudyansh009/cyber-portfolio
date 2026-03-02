"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSystemStore } from "@/system/store";

interface LogEntry {
    id: string;
    type: "input" | "output" | "system";
    content: React.ReactNode;
}

const COMMAND_MAP: Record<string, React.ReactNode> = {
    about: (
        <div className="text-white/80 space-y-2 mt-2 break-words">
            <p>HRUDYANSH KAYASTHA | System Architect</p>
            <p>Engineer focused on designing repeatable defensive systems that reduce manual security operations work.</p>
            <p>Core Focus: CTH | CTI | Linux Hardening | Automation | AI-assisted enrichment</p>
            <p>OP_PRINCIPLE: Automate everything repeatable.</p>
        </div>
    ),
    projects: (
        <div className="text-white/80 space-y-2 mt-2">
            <p className="text-white">Active Projects Index:</p>
            <p>[1] ALCDPX (Flagship, In Progress) - Autonomous Linux Cyber Defense Platform</p>
            <p>[2] Security Telemetry Pipeline (In Progress)</p>
            <p>[3] Detection Rules Pack + Test Harness (In Progress)</p>
            <p>[4] Incident Response Automation CLI (Planned)</p>
            <p>[5] AI Alert Enrichment Assistant (Prototype)</p>
            <p>[6] Autonomous SOC Agent (Roadmap)</p>
        </div>
    ),
    roadmap: (
        <div className="text-white/80 space-y-1 mt-2 font-mono">
            <p>Phase 1: Telemetry & Hardening [Completed]</p>
            <p>Phase 2: Detection + Correlation [Active]</p>
            <p>Phase 3: Response Automation [Planned]</p>
            <p>Phase 4: Semi-Autonomous SOC Agent [Planned Q3]</p>
            <p>Phase 5: Adaptive Defense Prototype [Vision 2027+]</p>
        </div>
    ),
    skills: (
        <div className="text-white/80 grid grid-cols-2 gap-4 mt-2">
            <div>
                <p className="text-white">Security Core:</p>
                <p>Threat Hunting, CTI, Triage, Detection</p>
            </div>
            <div>
                <p className="text-white">Linux & Systems:</p>
                <p>Administration, Hardening, Bash, Auditing</p>
            </div>
        </div>
    ),
    status: (
        <div className="text-white/80 space-y-1 mt-2">
            <p>SYSTEM STATUS: ONLINE</p>
            <p>UPTIME: {Math.floor(Math.random() * 90000)}s</p>
            <p>LOAD: [|||||-----] 42%</p>
            <p>ACTIVE DAEMONS: 12</p>
            <p>LAST DEPLOY: SUCCESS</p>
        </div>
    ),
    help: (
        <div className="text-white/80 space-y-1 mt-2 font-mono grid grid-cols-2 gap-2 max-w-sm">
            <p className="text-white">help</p><p>- Show this message</p>
            <p className="text-white">about</p><p>- Identity matrix</p>
            <p className="text-white">projects</p><p>- System architecture</p>
            <p className="text-white">roadmap</p><p>- 18-month plan</p>
            <p className="text-white">skills</p><p>- Tech domains</p>
            <p className="text-white">status</p><p>- System metrics</p>
            <p className="text-white">clear</p><p>- Clear buffer</p>
            <p className="text-white">exit</p><p>- Close console</p>
        </div>
    )
};

export const ConsoleOverlay = () => {
    const { consoleOpen, toggleConsole } = useSystemStore();
    const [logs, setLogs] = useState<LogEntry[]>([{ id: "init", type: "system", content: "ALCDPX Console [Version 2.0.1]\nType 'help' for available commands." }]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (consoleOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [consoleOpen]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        const newLogs: LogEntry[] = [...logs, { id: Date.now().toString(), type: "input", content: `visitor@alcdpx:~$ ${cmd}` }];

        if (cmd === "clear") {
            setLogs([{ id: Date.now().toString(), type: "system", content: "Buffer cleared." }]);
        } else if (cmd === "exit") {
            setLogs(newLogs);
            setTimeout(() => {
                toggleConsole();
                setLogs([{ id: Date.now().toString(), type: "system", content: "ALCDPX Console [Version 2.0.1]\nType 'help' for available commands." }]);
            }, 500);
        } else if (COMMAND_MAP[cmd]) {
            newLogs.push({ id: (Date.now() + 1).toString(), type: "output", content: COMMAND_MAP[cmd] });
            setLogs(newLogs);
        } else {
            newLogs.push({ id: (Date.now() + 1).toString(), type: "output", content: `Command not found: ${cmd}. Type 'help' for available commands.` });
            setLogs(newLogs);
        }

        setHistory((prev) => [cmd, ...prev]);
        setHistoryIndex(-1);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const nextIdx = historyIndex + 1;
                setHistoryIndex(nextIdx);
                setInput(history[nextIdx]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const prevIdx = historyIndex - 1;
                setHistoryIndex(prevIdx);
                setInput(history[prevIdx]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        }
    };

    return (
        <AnimatePresence>
            {consoleOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-center p-4 md:p-8"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="w-full max-w-4xl h-full max-h-[800px] border border-white/10 bg-[#050505] rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden relative">

                        <div className="h-8 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
                            <span className="text-white/50 text-xs">alcdpx-terminal-session</span>
                            <button onClick={toggleConsole} className="text-white/50 hover:text-white">&times;</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {logs.map((log) => (
                                <div key={log.id} className={log.type === "input" ? "text-white" : "text-white/70 whitespace-pre-wrap"}>
                                    {log.content}
                                </div>
                            ))}

                            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
                                <span className="text-green-500">visitor@alcdpx:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 shadow-none min-w-[200px]"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </form>
                            <div ref={endRef} />
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
