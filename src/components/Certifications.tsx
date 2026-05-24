"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiAcademicCap, HiExternalLink, HiStar } from "react-icons/hi";

import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional training and credentials"
        />

        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 shadow-lg shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 relative z-10 group animate-pulse-glow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 shrink-0">
                  <HiAcademicCap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-600 font-semibold">{cert.issuer}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500">{cert.batch}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-sm text-slate-500">
                        Instructor: {cert.instructor}
                      </span>
                    </div>
                    {cert.view && (
                      <a
                        href={cert.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-lg hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-200 shrink-0"
                      >
                        <HiExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-cyan-100 pt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Key Topics Covered
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {cert.highlights.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * j, duration: 0.3 }}
                      className="flex items-center gap-2 text-sm text-slate-600 py-1"
                    >
                      <HiStar className="w-4 h-4 text-cyan-400 shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
