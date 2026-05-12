"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
        {title}
      </h2>
      <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
    </motion.div>
  );
}
