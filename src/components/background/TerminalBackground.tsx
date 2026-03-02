"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSystemStore } from "@/system/store";

export const TerminalBackground = () => {
    const [lines, setLines] = useState<string[]>([]);
    const tacticalMode = useSystemStore((state) => state.tacticalMode);

    useEffect(() => {
        const logs = [
            "monitoring network events...",
            "correlation engine running...",
            "threat pattern analysis active...",
            "automation module standby...",
            "incident queue synced...",
            "Validating host identity: HRUDYANSH_KAYASTHA",
            "[sys] mounting volume: /var/log/secure",
            "Network analysis daemon started.",
            "Syncing external threat intelligence feeds...",
            "Establishing encrypted heartbeat...",
            "[ok] identity verified.",
        ];

        let intervalSpeed = tacticalMode ? 800 : 2500;

        const interval = setInterval(() => {
            setLines((prev) => {
                const newLines = [...prev, logs[Math.floor(Math.random() * logs.length)]];
                if (newLines.length > (tacticalMode ? 50 : 25)) {
                    return newLines.slice(newLines.length - (tacticalMode ? 50 : 25));
                }
                return newLines;
            });
        }, intervalSpeed);

        return () => clearInterval(interval);
    }, [tacticalMode]);

    return (
        <>
            <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none transition-opacity duration-1000 ${tacticalMode ? 'opacity-[0.08]' : 'opacity-[0.03]'}`}>
                <div className="absolute inset-0 bg-background mix-blend-multiply" />
                <div className="w-full h-full p-8 font-mono text-[10px] md:text-xs text-white/60 space-y-1">
                    {lines.map((line, i) => (
                        <motion.div
                            key={`${i}-${line}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {`>_ ${line}`}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tactical Mode Scanline Overlay */}
            {tacticalMode && (
                <div className="fixed inset-0 z-[40] pointer-events-none mix-blend-overlay opacity-20"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)', backgroundSize: '100% 4px' }} />
            )}
        </>
    );
};
