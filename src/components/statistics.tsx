"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./ui/animated-counter";
import { Star, Users, Coffee, Award } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: 4.4,
    suffix: "/5",
    label: "Swiggy Rating",
    description: "Based on 298+ reviews",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Happy Customers",
    description: "And counting every day",
  },
  {
    icon: Coffee,
    value: 50,
    suffix: "+",
    label: "Unique Desserts",
    description: "Crafted with love",
  },
  {
    icon: Award,
    value: 3,
    suffix: "",
    label: "Years of Excellence",
    description: "Serving Kochi since 2021",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function Statistics() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Our Sweet Success
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Numbers that reflect our passion for creating unforgettable dessert experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border/50 rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-7 w-7" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-sm font-semibold text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
