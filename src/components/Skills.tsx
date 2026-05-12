"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiCode, HiOutlineTerminal } from "react-icons/hi";

const categories = {
  testing: [
    "Manual Testing", "API Testing", "Regression Testing", 
    "Smoke Testing", "Exploratory Testing", "Automation"
  ],
  automation: [
    "WebdriverIO", "Selenium", "Appium", "Mocha"
  ],
  programming: [
    "JavaScript", "Python", "Java", "C++"
  ],
  tools: [
    "Postman", "JMeter", "TestRail", "ClickUp", 
    "Jenkins", "GitHub Actions", "Git", "DevTools"
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  // Format as a JSON-like string for the "code" view
  const renderCodeView = () => {
    return (
      <div className="font-mono text-sm sm:text-base leading-relaxed">
        <span className="text-cyan-600 font-semibold">const</span> <span className="text-slate-800">qaSkills</span> <span className="text-cyan-500">=</span> <span className="text-slate-600">{`{`}</span>
        <div className="pl-4 sm:pl-8 py-2">
          {Object.entries(categories).map(([key, items], index, arr) => (
            <div key={key} className={`transition-opacity duration-300 ${activeTab === key || activeTab === 'all' ? 'opacity-100' : 'opacity-30'}`}>
              <span className="text-cyan-700">"{key}"</span><span className="text-slate-500">:</span> <span className="text-slate-600">[</span>
              <div className="pl-4 sm:pl-8 flex flex-wrap gap-2 py-2">
                {items.map((item, i) => (
                  <span key={item} className="text-cyan-600 hover:text-cyan-500 transition-colors cursor-default">
                    "{item}"{i < items.length - 1 ? <span className="text-slate-400">,</span> : ""}
                  </span>
                ))}
              </div>
              <span className="text-slate-600">]</span>{index < arr.length - 1 ? <span className="text-slate-400">,</span> : ""}
            </div>
          ))}
        </div>
        <span className="text-slate-600">{`}`}</span><span className="text-slate-400">;</span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 sm:py-28 section-gradient-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Toolkit"
          subtitle="A modern stack for robust quality assurance"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden glass-card shadow-xl shadow-cyan-500/10"
        >
          {/* Editor Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/60 border-b border-cyan-100 px-4 py-3 gap-4">
            <div className="flex items-center gap-2">
               <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex gap-1 overflow-x-auto hide-scrollbar">
                  {['all', ...Object.keys(categories)].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-md whitespace-nowrap transition-colors ${
                        activeTab === tab 
                        ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-sm' 
                        : 'text-slate-500 hover:text-cyan-600 hover:bg-white/50'
                      }`}
                    >
                      {tab === 'all' ? 'skills.json' : `${tab}.ts`}
                    </button>
                  ))}
                </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-slate-500">
               <HiOutlineTerminal size={18} className="hover:text-cyan-600 transition-colors cursor-pointer" />
               <HiCode size={18} className="hover:text-cyan-600 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Editor Body */}
          <div className="p-6 sm:p-8 overflow-x-auto bg-white/40">
             <div className="flex min-w-max">
                {/* Line numbers */}
                <div className="hidden sm:flex flex-col text-slate-400 font-mono text-right pr-6 select-none border-r border-cyan-100 mr-6">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span key={i} className="leading-relaxed">{i + 1}</span>
                  ))}
                </div>
                
                {/* Code Content */}
                {renderCodeView()}
             </div>
          </div>
          
          {/* Editor Footer */}
          <div className="flex items-center justify-between bg-white/60 border-t border-cyan-100 px-4 py-2 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-4">
              <span className="hover:text-cyan-600 cursor-pointer transition-colors">UTF-8</span>
              <span className="hover:text-cyan-600 cursor-pointer transition-colors">TypeScript React</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-600">
               <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
               Prettier: ✓
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
