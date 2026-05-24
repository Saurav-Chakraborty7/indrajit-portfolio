"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiBriefcase, HiCalendar, HiCheck, HiOfficeBuilding } from "react-icons/hi";

import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 section-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="Professional roles and contributions"
        />

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-200/50 to-transparent hidden sm:block timeline-glow-line" />

              <div className="flex gap-6 sm:gap-8">
                {/* Timeline dot with pulsing animation */}
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-400 items-center justify-center relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
                  <HiBriefcase className="w-5 h-5 text-cyan-400" />
                </div>

                {/* Card */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-1 glass-card rounded-2xl p-6 sm:p-8 shadow-lg shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden bg-grid-pattern group"
                >
                  {/* Decorative glowing accent inside card */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          {exp.role}
                        </h3>
                        {/* Interactive QA Badge */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm shadow-emerald-500/5 select-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          VERIFIED PASS
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 text-sm font-medium">
                        <span className="flex items-center gap-1.5 text-cyan-600 font-semibold">
                          <HiOfficeBuilding className="w-4 h-4 text-cyan-500" />
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-2 self-start md:self-auto shadow-sm">
                      <HiCalendar className="w-4 h-4 text-cyan-500" />
                      <span className="text-slate-600 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed bg-cyan-50/30 border-l-2 border-cyan-400/60 p-3 sm:p-4 rounded-r-xl">
                    <span className="text-xs font-bold text-cyan-700 block uppercase tracking-wider mb-1">Role Objective</span>
                    {exp.description}
                  </p>

                  {/* Responsibilities list formatted as passed tests */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Execution Log & Responsibilities
                    </h4>
                    <ul className="grid gap-3">
                      {exp.responsibilities.map((resp, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * j, duration: 0.3 }}
                          className="group/item flex items-start gap-3 p-2.5 rounded-lg border border-transparent hover:border-cyan-100 hover:bg-cyan-50/20 transition-all duration-200"
                        >
                          <span className="mt-0.5 flex shrink-0 w-5 h-5 rounded-md bg-cyan-50 border border-cyan-200 items-center justify-center group-hover/item:bg-cyan-500 group-hover/item:border-cyan-500 transition-all duration-200 shadow-sm shadow-cyan-500/10">
                            <HiCheck className="w-3.5 h-3.5 text-cyan-600 group-hover/item:text-white transition-colors duration-200" />
                          </span>
                          <span className="text-sm text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors">
                            {resp}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
