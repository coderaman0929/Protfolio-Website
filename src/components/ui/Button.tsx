"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-violet text-white hover:bg-violet-light shadow-glow-violet hover:shadow-glow-violet",
  secondary:
    "bg-space-700 text-white/90 hover:bg-space-600 border border-white/10",
  ghost: "text-white/70 hover:text-white hover:bg-white/5",
  outline:
    "border border-violet/50 text-violet-light hover:border-violet hover:bg-violet/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  disabled,
  onClick,
  type = "button",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 select-none",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
}
