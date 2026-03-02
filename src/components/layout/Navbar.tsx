"use client";

import React from "react";
import { TerminalSquare, EyeOff, Eye } from "lucide-react";
import { useSystemStore } from "@/system/store";

export const Navbar = () => {
    const toggleConsole = useSystemStore((state) => state.toggleConsole);
    const toggleTacticalMode = useSystemStore((state) => state.toggleTacticalMode);
    const tacticalMode = useSystemStore((state) => state.tacticalMode);

    const [activeSection, setActiveSection] = React.useState("");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "experience", "projects", "skills"];
            const scrollY = window.scrollY;

            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && el.offsetTop <= scrollY + 150) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center font-mono font-bold text-sm tracking-tighter text-white group-hover:bg-white/10 transition-colors">
                        HK
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold tracking-wide text-foreground">Hrudyansh Kayastha</span>
                        <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-mono">System Architect</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground flex-1 justify-center">
                    {["about", "experience", "projects", "skills"].map((sec) => (
                        <a
                            key={sec}
                            href={`#${sec}`}
                            className={`capitalize transition-colors ${activeSection === sec ? "text-white font-semibold" : "hover:text-white"}`}
                        >
                            {sec}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTacticalMode}
                        className={`flex items-center justify-center w-8 h-8 md:w-9 md:h-9 border border-white/10 rounded transition-all ${tacticalMode ? 'bg-white/20 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                        title="Toggle Tactical Mode"
                    >
                        {tacticalMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>

                    <button
                        onClick={toggleConsole}
                        className="flex items-center gap-2 text-xs md:text-sm font-mono border border-white/10 bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded transition-all h-8 md:h-9"
                    >
                        <TerminalSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">Console Mode</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};
