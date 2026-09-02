"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

const CATEGORIES: { label: string; value: SkillCategory | "all"; emoji: string }[] = [
  { label: "All", value: "all", emoji: "✨" },
  { label: "Frontend", value: "frontend", emoji: "🎨" },
  { label: "Backend", value: "backend", emoji: "⚙️" },
  { label: "Database", value: "database", emoji: "🗄️" },
  { label: "AI Integration", value: "ai-ml", emoji: "⚡" },
  { label: "DevOps", value: "devops", emoji: "🚀" },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const { ref, inView } = useScrollReveal();

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="section py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-electric/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="My Technical"
          titleHighlight="Arsenal"
          description="Technologies and tools I use to bring ideas to life."
          className="mb-12"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              suppressHydrationWarning 
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.value
                  ? "bg-cyan-electric/20 text-cyan-electric border border-cyan-electric/40"
                  : "glass border border-white/10 text-white/50 hover:text-white/80"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              className="glass border border-white/8 rounded-xl p-5 hover:border-white/15 transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Color dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: skill.color ?? "#7C3AED", boxShadow: `0 0 8px ${skill.color ?? "#7C3AED"}60` }}
                  />
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-white/30">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color ?? "#7C3AED"}, ${skill.color ? skill.color + "99" : "#A855F7"})`,
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {skill.yearsOfExp && (
                <p className="text-[10px] text-white/20 mt-2 font-mono">
                  {skill.yearsOfExp}y exp
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs text-white/20 mt-10 font-mono"
        >
          + Always learning new things every day 🚀
        </motion.p>
      </div>
    </section>
  );
}
