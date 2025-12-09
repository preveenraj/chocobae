"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartButtonProps {
  onLike?: () => void;
}

export function HeartButton({ onLike }: HeartButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isLiked) {
      // Create particles for burst effect
      setParticles(Array.from({ length: 6 }, (_, i) => i));
      setTimeout(() => setParticles([]), 700);
    }
    
    setIsLiked(!isLiked);
    onLike?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
      whileTap={{ scale: 0.9 }}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          className={`h-5 w-5 transition-colors duration-300 ${
            isLiked
              ? "fill-red-500 text-red-500"
              : "fill-transparent text-gray-600"
          }`}
        />
      </motion.div>
      
      {/* Burst particles */}
      <AnimatePresence>
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-red-400"
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: Math.cos((i * Math.PI * 2) / 6) * 30,
              y: Math.sin((i * Math.PI * 2) / 6) * 30,
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
}
