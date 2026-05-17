"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 py-14 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-1">
            <a href="#hero" className="text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Indrajit</span>
              <span className="text-slate-500 font-light ml-1">.</span>
              <span className="text-slate-400 text-sm font-medium ml-1">SQA</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Ensuring software excellence through precision testing and automation. Building confidence, one bug at a time.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/Saurav-Chakraborty7" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href="https://linkedin.com/in/indrajit-chakraborty" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 border-t border-slate-800/60">
          <p className="text-xs text-slate-500 mt-6 sm:mt-0">
            &copy; {new Date().getFullYear()} Indrajit Chakraborty. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
          >
            BACK TO TOP 
            <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-cyan-500/50 transition-all group-hover:-translate-y-1 shadow-md">
              <HiArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
