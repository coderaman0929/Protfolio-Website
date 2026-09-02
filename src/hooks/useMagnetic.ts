"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticOptions {
  strength?: number;
  ease?: number;
}

export function useMagnetic({ strength = 0.4, ease = 0.1 }: MagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    currentPos.current.x +=
      (targetPos.current.x - currentPos.current.x) * ease;
    currentPos.current.y +=
      (targetPos.current.y - currentPos.current.y) * ease;

    setPosition({ ...currentPos.current });

    animFrameRef.current = requestAnimationFrame(animate);
  }, [ease]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetPos.current = {
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      };
    },
    [strength]
  );

  const handleMouseEnter = useCallback(() => {
    animFrameRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current);
    targetPos.current = { x: 0, y: 0 };
    // Animate back to center
    const resetAnimate = () => {
      currentPos.current.x += (0 - currentPos.current.x) * 0.1;
      currentPos.current.y += (0 - currentPos.current.y) * 0.1;
      setPosition({ ...currentPos.current });
      if (
        Math.abs(currentPos.current.x) > 0.1 ||
        Math.abs(currentPos.current.y) > 0.1
      ) {
        requestAnimationFrame(resetAnimate);
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };
    requestAnimationFrame(resetAnimate);
  }, []);

  return {
    ref,
    position,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
