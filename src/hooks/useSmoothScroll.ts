"use client";

import { useEffect, useRef } from "react";

export function useSmoothScroll() {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    // Dynamically import Lenis for smooth scroll
    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");

      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenisRef.current) {
        (lenisRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  const scrollTo = (target: string | number) => {
    if (lenisRef.current) {
      (lenisRef.current as { scrollTo: (target: string | number) => void }).scrollTo(target);
    }
  };

  return { scrollTo };
}
