"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { HeroCanvas } from "@/components/3d/HeroCanvas";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  smoothTransition,
} from "@/lib/animations";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function HeroSection() {
  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D WebGL Background */}
      <HeroCanvas />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-space-950/50 to-space-950"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold glass border border-white/10 rounded-full text-white/70">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {personalInfo.available ? "Available for new projects" : "Currently busy"}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <p className="text-sm font-medium text-violet-light tracking-widest uppercase font-mono">
              Hi, I&apos;m {personalInfo.name.split(" ")[0]} 👋
            </p>
            <h1 className="font-display font-bold text-display-xl leading-none text-white">
              I Build{" "}
              <span className="text-gradient-aurora inline-block">
                Scalable Full Stack
              </span>
              <br />
              <span className="text-gradient-aurora inline-block">
                Web Applications
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-xl text-white/50 max-w-xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="#projects"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="outline"
              size="lg"
              icon={<Mail size={16} />}
              iconPosition="left"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {personalInfo.socials.slice(0, 3).map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-violet-light hover:border-violet/40 transition-colors duration-200"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.platform}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-4 glass border border-white/8 rounded-2xl overflow-hidden"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, delay: 0.8 + i * 0.1 }}
                className="px-6 py-4 text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <p className="font-display font-bold text-2xl text-gradient-violet">
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
