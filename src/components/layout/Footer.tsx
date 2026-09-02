"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo, navItems } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-space-950 py-12 px-6">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-violet to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl mb-2">
              <span className="text-gradient-violet">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-white/30">.</span>
            </p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 hover:text-violet-light transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {personalInfo.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-violet-light transition-colors duration-200"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-white/50 hover:text-cyan-electric transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/5 gap-4">
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
            <Heart size={10} className="text-violet-light fill-current" /> in{" "}
            {personalInfo.location}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors duration-200 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
