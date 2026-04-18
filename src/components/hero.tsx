"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ConfettiButton } from "./ui/confetti-button";

// Decorative floating shapes
const FloatingShape = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -12, 0],
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-8 md:py-24 lg:py-32 xl:py-40">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto grid gap-8 md:gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="flex flex-col justify-center space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <div className="space-y-4">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground"
                whileHover={{ scale: 1.05 }}
              >
                ★ 4.8/5 on Google
              </motion.div>
              <motion.div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Avg Cost: ₹250 for two
              </motion.div>
            </motion.div>
            <motion.h1
              className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Indulge in{" "}
              <motion.span
                className="text-accent inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Chocobae
              </motion.span>
              &apos;s <br className="hidden lg:inline" /> Desserts & Beverages
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Handcrafted chocolate desserts that melt your heart. Experience
              the finest cakes, brownies, and beverages in Tripunithura, Kochi.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ConfettiButton
              onClick={() =>
                window.open(
                  "https://wa.me/917306307944?text=Hi%20Chocobae!%20I'd%20like%20to%20place%20an%20order%20%F0%9F%8D%AB",
                  "_blank",
                )
              }
              className="inline-flex w-full sm:w-auto h-11 sm:h-12 items-center justify-center rounded-full bg-[#25D366] px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1ebe5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              💬 Order on WhatsApp
            </ConfettiButton>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://www.instagram.com/thechocobaeshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto h-11 sm:h-12 items-center justify-center rounded-full border-2 border-primary/20 bg-background px-6 sm:px-8 text-sm sm:text-base font-medium text-foreground shadow-sm transition-all hover:border-[#E1306C] hover:text-[#E1306C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore on Instagram
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          className="mx-auto lg:order-last w-full mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
        >
          {/* Extra padding container to prevent overflow issues on mobile */}
          <div className="px-6 sm:px-8 md:px-0">
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] mx-auto">
              {/* Decorative background circles - hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute -inset-6 rounded-full border-2 border-dashed border-[#8D6E63]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="hidden md:block absolute -inset-12 rounded-full border border-[#A1887F]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing glow - warm chocolate tones */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D7CCC8]/40 via-[#BCAAA4]/30 to-[#A1887F]/40 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 sm:border-8 border-background shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/main-banner.png"
                  alt="Chocobae Artisanal Chocolates"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating decorative elements - Hidden on very small screens */}
              {/* Cream/Vanilla - Top right */}
              <FloatingShape
                delay={0}
                className="hidden sm:flex absolute -top-6 -right-2 sm:-top-10 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-[#FFF8E7] to-[#F5E6D3] shadow-lg shadow-[#D7CCC8]/30 items-center justify-center border border-[#E8DDD4]"
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl">🍫</span>
              </FloatingShape>

              {/* Light Caramel - Bottom left */}
              <FloatingShape
                delay={1}
                className="hidden sm:flex absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br from-[#FAE5D3] to-[#EDCEB4] shadow-lg shadow-[#D7CCC8]/30 items-center justify-center border border-[#E8DDD4]"
              >
                <span className="text-xl sm:text-3xl lg:text-4xl">🧁</span>
              </FloatingShape>

              {/* Light Cocoa - Right middle */}
              <FloatingShape
                delay={2}
                className="hidden md:flex absolute top-1/2 -right-8 lg:-right-12 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br from-[#EFEBE9] to-[#D7CCC8] shadow-lg shadow-[#BCAAA4]/30 items-center justify-center border border-[#D7CCC8]"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl">🍪</span>
              </FloatingShape>

              {/* Small decorative dots - Hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute top-10 -left-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5E6D3] shadow-md shadow-[#D7CCC8]/40 border border-[#E8DDD4]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="hidden sm:block absolute bottom-16 -right-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#EFEBE9] shadow-md shadow-[#BCAAA4]/40 border border-[#D7CCC8]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
              />
              <motion.div
                className="hidden md:block absolute top-1/4 -left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FAE5D3] shadow-md shadow-[#D7CCC8]/40 border border-[#EDCEB4]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
