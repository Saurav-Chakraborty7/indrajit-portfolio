"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiDocumentDownload, HiDownload } from "react-icons/hi";

export default function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-28 section-gradient-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
          subtitle="Download my latest resume for a detailed overview"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
              <HiDocumentDownload className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Indrajit Chakraborty
            </h3>
            <p className="text-cyan-600 font-medium mb-1">
              Software Quality Assurance Engineer
            </p>
            <p className="text-sm text-slate-400 mb-8">
              Updated May 2025 • PDF Format
            </p>

            <a
              href="/Indrajit_Chakraborty.pdf"
              download="Indrajit_Chakraborty.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
