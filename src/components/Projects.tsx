"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Foodi's Web Automation Testing",
    description:
      "End-to-end automation framework for a food delivery platform covering login flows, dynamic restaurant and item selection, and product-price validation against the UI.",
    result: "Reduced manual testing effort by 60% through reusable automation flows.",
    stack: ["WebdriverIO", "Mocha", "JavaScript"],
    github: "https://github.com/Saurav-Chakraborty7/foodi-automation",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Shwapno Grocery Manual Testing",
    description:
      "Comprehensive manual testing of an e-commerce grocery platform including functional testing, UI validation, structured defect tracking, and thorough test case execution.",
    result: "Ensured 70%+ scenario coverage with structured test documentation.",
    stack: ["Manual Testing", "Test Case Design", "Defect Reporting"],
    github: "https://github.com/Saurav-Chakraborty7/Manual-Testing/tree/main/Shwapno%20Grocery%20Shopping",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "AI-Focused Test Automation with WDIO + Ollama",
    description:
      "Experimental project integrating a local AI agent with WebdriverIO to generate and execute test flows for login validation, cart operations, and product verification.",
    result:
      "Improved test creation efficiency by 40% and expanded coverage by 30%.",
    stack: ["WebdriverIO", "Ollama", "Local AI Agent"],
    github: "https://github.com/Saurav-Chakraborty7/ai-wdio-agent",
    color: "from-cyan-600 to-teal-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 section-gradient-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="QA Projects"
          subtitle="Hands-on testing and automation work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Color header bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Result badge */}
                <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3 mb-5">
                  <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wide mb-1">
                    Result
                  </p>
                  <p className="text-sm text-cyan-800">{project.result}</p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:text-cyan-600 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200"
                    >
                      <FaGithub size={14} />
                      Source Code
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-lg hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-200"
                  >
                    <HiExternalLink size={14} />
                    Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
