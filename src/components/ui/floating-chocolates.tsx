"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Chocolate {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

const chocolateEmojis = ["🍫", "🍪", "🧁", "🎂", "🍩", "🍰"];

export function FloatingChocolates() {
  const [chocolates, setChocolates] = useState<Chocolate[]>([]);

  useEffect(() => {
    const newChocolates: Chocolate[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 16 + Math.random() * 20,
      emoji: chocolateEmojis[Math.floor(Math.random() * chocolateEmojis.length)],
    }));
    setChocolates(newChocolates);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {chocolates.map((choco) => (
        <motion.div
          key={choco.id}
          className="absolute opacity-20"
          style={{
            left: `${choco.x}%`,
            fontSize: choco.size,
          }}
          initial={{ y: "-10%", rotate: 0 }}
          animate={{
            y: "110vh",
            rotate: 360,
          }}
          transition={{
            duration: choco.duration,
            delay: choco.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {choco.emoji}
        </motion.div>
      ))}
    </div>
  );
}
