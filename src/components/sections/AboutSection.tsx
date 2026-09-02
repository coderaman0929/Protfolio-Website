"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Code2, Cpu, Globe } from "lucide-react";
import { personalInfo, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from "@/lib/animations";

const highlights = [
  { icon: Code2, label: "Full Stack Projects", value: "3+" },
  { icon: Cpu, label: "Primary Stack", value: "MERN / Next" },
  { icon: Globe, label: "AI Integration", value: "Gemini API" },
];

export function AboutSection() {
  const { ref: leftRef, inView: leftInView } = useScrollReveal();
  const { ref: rightRef, inView: rightInView } = useScrollReveal();

  return (
    <section id="about" className="section py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="The Developer Behind"
          titleHighlight="the Code"
          description="Crafting modern full-stack platforms with clean architecture and intelligent AI features."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card with profile picture */}
          <motion.div
            ref={leftRef}
            variants={fadeInLeft}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Glowing card */}
            <div className="relative glass border border-white/10 rounded-3xl p-8 overflow-hidden">
              {/* BG glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-electric/10 rounded-full blur-3xl pointer-events-none" />

              {/* Profile Image */}
              <div className="relative w-32 h-32 mb-6 rounded-2xl overflow-hidden border-2 border-violet/40 p-1 bg-space-900 shadow-glow-violet">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={personalInfo.avatar || "/profile.jpg"}
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-space-950 shadow-sm"
                  title="Available for projects"
                />
              </div>

              <h3 className="font-display font-bold text-2xl mb-1 text-white">
                {personalInfo.name}
              </h3>
              <p className="text-violet-light text-sm font-medium mb-4">
                {personalInfo.title}
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={14} className="text-violet-light" />
                {personalInfo.location}
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/5">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon size={16} className="text-violet-light mx-auto mb-1" />
                    <p className="font-bold text-lg text-white">{value}</p>
                    <p className="text-[10px] text-white/40 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass border border-violet/30 rounded-2xl px-4 py-3 text-sm font-medium text-white shadow-glow-violet"
            >
              <span className="text-violet-light font-bold">Open</span> to Full Stack Opportunities 🚀
            </motion.div>
          </motion.div>

          {/* Right — text content & education */}
          <motion.div
            ref={rightRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={fadeInRight}>
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Full Stack & Software Engineering Journey
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Having completed my Bachelor of Computer Application (BCA) degree in 2026, I am continuing my higher technical education with a Master of Computer Applications (MCA) starting in August 2026 at Vikrant University.
              </p>
              <p className="text-white/60 leading-relaxed">
                My passion lies in designing and building scalable full-stack web applications using React, Next.js 15, Node.js, Express, MongoDB, and SQL Server. I specialize in combining robust backend APIs with responsive, high-performance user interfaces and practical AI integrations powered by the Google Gemini API.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                Education History
              </h4>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="glass border border-white/8 rounded-xl p-5 hover:border-violet/30 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-white text-base">{edu.degree}</p>
                      <p className="text-violet-light text-xs font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 glass rounded-full text-white/50 font-mono">
                      {edu.startYear} – {edu.current ? "Present" : edu.endYear}
                    </span>
                  </div>
                  {edu.gpa && (
                    <p className="text-xs text-green-400 font-mono mt-2 font-medium">
                      Score: {edu.gpa}
                    </p>
                  )}
                  {edu.achievements && (
                    <ul className="mt-3 space-y-1">
                      {edu.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs text-white/50 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-light flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Tech Values */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                Core Competencies & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js", "Next.js 15", "TypeScript", "Node.js",
                  "Express.js", "MongoDB", "SQL Server", "Tailwind CSS",
                  "Gemini API", "REST APIs", "Docker", "Git",
                ].map((val) => (
                  <span
                    key={val}
                    className="px-3 py-1.5 text-xs glass border border-white/8 rounded-full text-white/70 hover:border-violet/40 hover:text-violet-light transition-colors duration-200"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
