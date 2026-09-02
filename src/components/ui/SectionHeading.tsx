"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useScrollReveal();

  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn("flex flex-col gap-4", alignClass, className)}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-light"
        >
          <span className="w-6 h-px bg-violet-light" />
          {eyebrow}
          <span className="w-6 h-px bg-violet-light" />
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className="font-display font-bold text-display-md leading-tight"
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-violet">{titleHighlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
