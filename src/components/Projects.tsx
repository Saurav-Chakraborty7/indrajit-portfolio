"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaRobot, FaBrain, FaClipboardList } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

import { projects } from "../data/projects";

const getCategoryDetails = (title: string, stack: string[]) => {
  const lowerTitle = title.toLowerCase();
  const lowerStack = stack.map(s => s.toLowerCase());
  
  if (lowerStack.includes("local ai agent") || lowerStack.includes("ollama") || lowerTitle.includes("ai")) {
    return { 
      label: "AI TEST AGENT", 
      icon: FaBrain, 
      colorClass: "bg-purple-50 text-purple-700 border-purple-200", 
      dotColor: "bg-purple-500",
      accentGlow: "shadow-purple-500/10 hover:shadow-purple-500/20"
    };
  }
  if (lowerStack.includes("manual testing") || lowerTitle.includes("manual")) {
    return { 
      label: "MANUAL QA AUDIT", 
      icon: FaClipboardList, 
      colorClass: "bg-amber-50 text-amber-700 border-amber-200", 
      dotColor: "bg-amber-500",
      accentGlow: "shadow-amber-500/10 hover:shadow-amber-500/20"
    };
  }
  return { 
    label: "TEST AUTOMATION", 
    icon: FaRobot, 
    colorClass: "bg-cyan-50 text-cyan-700 border-cyan-200", 
    dotColor: "bg-cyan-500",
    accentGlow: "shadow-cyan-500/10 hover:shadow-cyan-500/20"
  };
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 section-gradient-alt relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-teal-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="SQA Projects"
          subtitle="Hands-on testing and automation work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => {
            const cat = getCategoryDetails(project.title, project.stack);
            const IconComponent = cat.icon;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group glass-card rounded-2xl overflow-hidden shadow-lg ${cat.accentGlow} hover:border-cyan-400/40 hover:shadow-2xl transition-all duration-300 flex flex-col relative z-10 bg-grid-pattern`}
              >
                {/* Visual top border using project category gradient */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Header Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border tracking-wider select-none ${cat.colorClass}`}>
                      <IconComponent className="w-3 h-3" />
                      {cat.label}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className={`w-1 h-1 rounded-full ${cat.dotColor} animate-pulse`} />
                      STABLE RUN
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Modernized Test Run Verdict Block */}
                  <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-xl p-3.5 mb-5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-emerald-100 pb-1.5 mb-2">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                        Test Verdict
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-white border border-emerald-200 rounded px-1.5 py-0.5">
                        PASS
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-normal">
                      {project.result}
                    </p>
                  </div>

                  {/* Tech Stack capsules */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/50 rounded-md hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive CTA Buttons */}
                  <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-100">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl hover:text-cyan-600 hover:border-cyan-300 hover:bg-cyan-50/50 transition-all duration-200 shadow-sm"
                      >
                        <FaGithub className="w-4 h-4 transition-transform group-hover:scale-110" />
                        Source Code
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Manual Project (No Code)</span>
                    )}
                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-xl hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-200 shadow-sm"
                    >
                      Details
                      <HiArrowNarrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 text-cyan-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
