"use client";

import React from "react";
import { Terminal } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 mt-auto bg-black/50 backdrop-blur-sm z-10 relative">
            <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-xs text-white/40 font-mono gap-4 text-center md:text-left">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 opacity-50" />
                    <span>ALCDPX_SYSTEM // BUILD 2.0.1</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        SYS_NORMAL
                    </span>
                    <span>&copy; {new Date().getFullYear()} HRUDYANSH KAYASTHA</span>
                </div>
            </div>
        </footer>
    );
};
