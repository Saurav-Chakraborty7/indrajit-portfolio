"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { navLinks } from "../data/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile: boolean = false) => {
    e.preventDefault();
    if (isMobile) {
      setMobileOpen(false);
    }
    
    setTimeout(() => {
      const targetId = href.includes("?section=") 
        ? href.split("?section=")[1] 
        : href === "/" ? "hero" : href.replace("#", "");
        
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }, isMobile ? 100 : 0);
  };



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-cyan-100"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/", false)}
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            <span className="gradient-text">Indrajit</span>
            <span className="text-slate-400 font-light ml-1">.</span>
            <span className="text-slate-600 text-sm font-medium ml-1">
              SQA
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Indrajit_Chakraborty.pdf"
              download="Indrajit_Chakraborty.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-cyan-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, true)}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Indrajit_Chakraborty.pdf"
                download="Indrajit_Chakraborty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 rounded-lg"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
