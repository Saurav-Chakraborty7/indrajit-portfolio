"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { sendContactMessage } from "../actions/pageclip";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await sendContactMessage(data);
      
      if (result.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="Have a question or want to work together? Reach out below." />
        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            <a href="mailto:talkwithindrajit@gmail.com" className="flex items-center gap-4 p-4 rounded-xl glass-card hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors"><HiMail className="w-5 h-5 text-cyan-600" /></div>
              <div><p className="text-xs text-slate-400 uppercase tracking-wide">Email</p><p className="text-sm font-medium text-slate-700">talkwithindrajit@gmail.com</p></div>
            </a>
            <a href="tel:+8801705340534" className="flex items-center gap-4 p-4 rounded-xl glass-card hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors"><HiPhone className="w-5 h-5 text-cyan-600" /></div>
              <div><p className="text-xs text-slate-400 uppercase tracking-wide">Phone</p><p className="text-sm font-medium text-slate-700">+880 1705-340534</p></div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center"><HiLocationMarker className="w-5 h-5 text-cyan-600" /></div>
              <div><p className="text-xs text-slate-400 uppercase tracking-wide">Location</p><p className="text-sm font-medium text-slate-700">Bangladesh</p></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a href="https://github.com/Saurav-Chakraborty7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl glass-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-cyan-50 transition-colors"><FaGithub className="w-5 h-5 text-slate-500 group-hover:text-cyan-600 transition-colors" /></div>
                <div><p className="text-sm font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors">GitHub</p></div>
              </a>
              <a href="https://linkedin.com/in/indrajit-chakraborty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl glass-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-cyan-50 transition-colors"><FaLinkedinIn className="w-5 h-5 text-slate-500 group-hover:text-cyan-600 transition-colors" /></div>
                <div><p className="text-sm font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors">LinkedIn</p></div>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="What is this regarding?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea id="message" name="body" rows={5} required className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400" placeholder="Tell me about your project or opportunity..." />
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
                <HiPaperAirplane className={`w-4 h-4 rotate-90 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitted && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-cyan-600 font-medium">✓ Message sent! I&apos;ll get back to you soon.</motion.p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
