"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown, HiDocumentText } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-slate-900">Indrajit</span>
            <br />
            <span className="gradient-text">Chakraborty</span>
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light mt-4 mb-3"
          >
            Software Quality Assurance Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building confidence in software through structured testing,
            automation, and meticulous defect tracking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              View Projects
              <HiArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/Indrajit_Chakraborty.pdf"
              download="Indrajit_Chakraborty.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-cyan-600 bg-white border-2 border-cyan-200 rounded-full hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              <HiDocumentText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <a
              href="https://github.com/Saurav-Chakraborty7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/indrajit-chakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
