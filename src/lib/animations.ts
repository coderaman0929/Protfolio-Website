import type { Variants } from "framer-motion";

// ==========================================
// Core Transitions
// ==========================================
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const slowTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

// ==========================================
// Fade Variants
// ==========================================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// ==========================================
// Scale Variants
// ==========================================
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition, stiffness: 400 },
  },
};

// ==========================================
// Stagger Container
// ==========================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

// ==========================================
// Slide Variants
// ==========================================
export const slideInFromBottom: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: smoothTransition,
  },
};

// ==========================================
// Page Transition
// ==========================================
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

// ==========================================
// Card Hover
// ==========================================
export const cardHover = {
  rest: { scale: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 60px rgba(124, 58, 237, 0.3)",
    transition: springTransition,
  },
};

// ==========================================
// Text Reveal (Character by character)
// ==========================================
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const textRevealChar: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ==========================================
// Draw (SVG)
// ==========================================
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
