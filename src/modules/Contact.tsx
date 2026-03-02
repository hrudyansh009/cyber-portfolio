"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Github, Linkedin, Phone, TerminalSquare } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="w-full flex-col flex py-20 border-t border-white/5 relative">
            <h2 className="text-xl font-mono text-white tracking-widest uppercase mb-12 text-center">Initialization Protocols</h2>

            <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto w-full">
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-xl md:text-2xl font-light text-white">Hrudyansh Kayastha</p>
                    <p className="text-sm font-mono text-white/50 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                        Open to Security Automation, Detection Engineering, and Defensive Infrastructure Roles.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <a href="mailto:hrudyansh80@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2 h-12 px-6">
                            <Mail className="w-4 h-4" /> hrudyansh80@gmail.com
                        </Button>
                    </a>

                    <a href="tel:8999321569" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2 h-12 px-6">
                            <Phone className="w-4 h-4" /> 8999321569
                        </Button>
                    </a>

                    <a href="https://github.com/hrudyansh009" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2 h-12 px-6">
                            <Github className="w-4 h-4" /> GitHub
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/hrudyansh-kayastha-817853334/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2 h-12 px-6">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};
