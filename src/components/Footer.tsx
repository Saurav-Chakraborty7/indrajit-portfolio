"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="text-cyan-400">Indrajit</span>
              <span className="text-slate-500 font-light ml-1">.</span>
              <span className="text-slate-400 text-sm font-medium ml-1">SQA</span>
            </a>
            <p className="text-sm text-slate-400 mt-2 flex items-center gap-1">
              Built with <HiHeart className="w-4 h-4 text-cyan-400" /> using Next.js & Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Saurav-Chakraborty7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all" aria-label="GitHub"><FaGithub size={18} /></a>
            <a href="https://linkedin.com/in/indrajit-chakraborty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Indrajit Chakraborty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
