"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const FILTERS: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Fullstack", value: "fullstack" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const { ref, inView } = useScrollReveal();

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="section py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="My Work"
          title="Selected"
          titleHighlight="Projects"
          description="Handpicked projects that showcase my capabilities — from idea to production."
          className="mb-12"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter.value
                  ? "bg-violet text-white shadow-glow-violet"
                  : "glass border border-white/10 text-white/50 hover:text-white/80 hover:border-white/20"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={scaleIn}
                exit={{ opacity: 0, scale: 0.8 }}
                className={cn(
                  "group relative glass border border-white/8 rounded-2xl overflow-hidden",
                  "hover:border-violet/30 transition-colors duration-300"
                )}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet/0 to-violet/0 group-hover:from-violet/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center">
                        <span className="text-sm">
                          {project.category === "fullstack" ? "⚡"
                            : project.category === "frontend" ? "🎨"
                            : project.category === "mobile" ? "📱"
                            : project.category === "ai-ml" ? "🤖"
                            : project.category === "open-source" ? "⭐"
                            : "🔧"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
                          {project.category}
                        </span>
                        <p className="text-[10px] text-white/20">{project.year}</p>
                      </div>
                    </div>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-yellow-400/70 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-2 py-0.5">
                        <Star size={8} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex gap-4 px-6 mt-4">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div key={m.label}>
                        <p className="text-sm font-bold text-violet-light">{m.value}</p>
                        <p className="text-[10px] text-white/30">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 px-6 mt-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 bg-space-700 border border-white/5 rounded-full text-white/40 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 text-white/20">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 px-6 py-5 mt-4 border-t border-white/5">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-light hover:text-violet-glow transition-colors ml-auto"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.socials.find((s) => s.platform === "GitHub")?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors group"
          >
            <Github size={16} />
            View all projects on GitHub
            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
