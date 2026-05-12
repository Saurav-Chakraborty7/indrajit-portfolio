"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiCheckCircle } from "react-icons/hi";

const highlights = [
  "Manual & automated testing across web and mobile platforms",
  "API validation using Postman with structured test suites",
  "WebdriverIO automation for end-to-end regression coverage",
  "Structured defect tracking and retesting workflows",
  "Browser DevTools debugging and performance analysis",
  "CI/CD integration with Jenkins and GitHub Actions",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Focused on delivering reliable software through disciplined testing"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Software Quality Assurance Engineer with hands-on experience in manual testing,
              API testing, WebdriverIO automation, defect tracking, and debugging web applications.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Skilled in regression testing, exploratory testing, API validation,
              browser DevTools analysis, and structured bug reporting. I focus on
              improving software quality through practical testing strategies and
              automation workflows that reduce manual effort and increase coverage.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Currently working at VISAThing YTM Ltd. as an SQA Engineer, where
              I contribute to testing CRM and web applications, designing test cases,
              and building automation scripts for both web and Android platforms.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <HiCheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
