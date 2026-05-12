"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "> Initializing QA environment...",
  "> Loading test frameworks...",
  "> Compiling automated test suites...",
  "> Establishing WebdriverIO connection...",
  "> Validating API endpoints...",
  "> Running regression smoke tests...",
  "> All tests passed. 0 failures.",
  "> Launching portfolio..."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    // Reveal a new line every 300ms
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 350); // Fast typing effect

    // Call onComplete after 3.5 seconds total
    const timeout = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center hero-gradient p-4 backdrop-blur-md"
    >
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-xl border border-cyan-100 shadow-2xl shadow-cyan-500/20 overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-cyan-50/50 border-b border-cyan-100">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="text-xs text-slate-500 font-sans tracking-widest uppercase">
            terminal — bash
          </div>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 sm:p-10 min-h-[350px] flex flex-col justify-end bg-white/50">
          <div className="space-y-4">
            {terminalLines.slice(0, currentLine + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm sm:text-base md:text-lg flex flex-wrap"
              >
                {line.startsWith(">") ? (
                  <span className="text-cyan-600 mr-3 select-none">indrajit@qa-env:~$</span>
                ) : null}
                <span className={i === terminalLines.length - 1 ? "text-cyan-600 font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]" : "text-slate-600"}>
                  {line.replace("> ", "")}
                </span>
              </motion.div>
            ))}
            {/* Blinking Cursor */}
            {currentLine < terminalLines.length - 1 && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 sm:h-6 bg-cyan-500 ml-2 translate-y-1"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
