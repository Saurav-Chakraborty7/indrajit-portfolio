"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiBriefcase } from "react-icons/hi";

import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional roles and contributions"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-cyan-300 to-transparent hidden sm:block" />

              <div className="flex gap-4 sm:gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 items-center justify-center shadow-lg shadow-cyan-500/25 z-10">
                  <HiBriefcase className="w-5 h-5 text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 sm:p-8 shadow-lg shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 relative z-10 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * j, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
