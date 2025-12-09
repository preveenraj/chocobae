"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const confettiColors = [
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#8b5cf6",
  "#3b82f6",
  "#10b981",
];

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
}

export function ConfettiButton({
  children,
  className = "",
  onClick,
}: ConfettiButtonProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const handleClick = () => {
    // Generate confetti
    const newConfetti: Confetti[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      delay: Math.random() * 0.1,
    }));

    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 1000);

    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-visible ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-sm pointer-events-none"
            style={{ backgroundColor: piece.color }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: piece.x,
              y: -100 - Math.random() * 50,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 0.8,
              delay: piece.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
}
