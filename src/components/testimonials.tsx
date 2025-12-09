"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Menon",
    rating: 5,
    text: "The Choco Luxe Bowl is absolutely divine! Best chocolate dessert I've ever had in Kochi. The presentation is Instagram-worthy too!",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Krishnan",
    rating: 5,
    text: "Ordered their brownies for my birthday and they were a hit! Super fudgy and rich. Will definitely order again.",
    date: "1 month ago",
  },
  {
    name: "Sneha Nair",
    rating: 4,
    text: "Love the variety of desserts here. The Pistachio Cheesebowl is a must-try. Quick delivery through Swiggy!",
    date: "3 weeks ago",
  },
  {
    name: "Arun Kumar",
    rating: 5,
    text: "Finally found a place that does crepes right! The Choco Crepe is heavenly. Great value for money.",
    date: "1 week ago",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Quote decoration */}
          <Quote className="absolute -top-4 -left-4 h-16 w-16 text-accent/10 rotate-180" />

          <div className="relative h-[280px] md:h-[220px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg h-full flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-center text-lg md:text-xl mb-6 leading-relaxed">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="text-center">
                    <p className="font-semibold text-primary">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-accent"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="p-2 rounded-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
