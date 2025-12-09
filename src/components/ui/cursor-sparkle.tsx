"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

const sparkleColors = ["#f59e0b", "#ec4899", "#8b5cf6", "#ef4444", "#10b981"];

export function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  const createSparkle = useCallback((x: number, y: number) => {
    const sparkle: Sparkle = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      size: 4 + Math.random() * 8,
    };
    return sparkle;
  }, []);

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');

      setIsHovering(!!isInteractive);

      if (isInteractive) {
        const sparkle = createSparkle(e.clientX, e.clientY);
        setSparkles((prev) => [...prev.slice(-15), sparkle]);
      }

      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [createSparkle]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setSparkles((prev) => prev.slice(-10));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 ${sparkle.size}px ${sparkle.color}`,
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: 0,
              opacity: 0,
              y: -20 + Math.random() * 40,
              x: -20 + Math.random() * 40,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
