"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const isHoveringRef = useRef(false);
  const scaleSpring = useSpring(1, springConfig);
  const opacitySpring = useSpring(1, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-cursor-hover]")
      ) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          scaleSpring.set(1.8);
          opacitySpring.set(0.6);
        }
      } else {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          scaleSpring.set(1);
          opacitySpring.set(1);
        }
      }
    };

    const handleMouseLeave = () => {
      opacitySpring.set(0);
    };

    const handleMouseEnter = () => {
      opacitySpring.set(1);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, opacitySpring, scaleSpring]);

  return (
    <>
      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet/70 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          scale: scaleSpring,
          opacity: opacitySpring,
        }}
      />
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-violet pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          opacity: opacitySpring,
        }}
      />
    </>
  );
}
