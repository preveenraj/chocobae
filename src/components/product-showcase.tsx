"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { HeartButton } from "./ui/heart-button";

const products = [
  {
    title: "Choco Crepe",
    description:
      "Heavenly chocolate-filled crepe that will leave you craving for more.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/3a0/2c51eee3a10ff8870ed008581e5d03a0.jpg",
  },
  {
    title: "Choco Luxe Bowl",
    description:
      "Decadent fusion of rich chocolate cake, velvety cream and three varieties of chocolate.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/8b4/32882cda39047b1ca16c86b566eb08b4.jpg",
  },
  {
    title: "Creme de la Creme",
    description: "A rich, creamy pour of luscious goodness.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/66c/74a275696729672129f874bacd0f166c.jpeg",
  },
  {
    title: "Choco Brownie Bites",
    description: "Brownie bites with chocolate dip.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/de6/c7d74f270012c247b44f1527f5236de6.jpeg",
  },
  {
    title: "Pistachio Cheesebowl",
    description:
      "Luxuriously creamy dessert with a velvety smooth cheesecake base infused with pistachios.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/dac/fe599e4f5094dbdaf1f115414f263dac.png",
  },
  {
    title: "Vancho Luxe Bowl",
    description:
      "A perfect harmony of premium vanilla and rich chocolate flavors in a decadent bowl.",
    image:
      "https://b.zmtcdn.com/data/dish_photos/b9a/ecf4dd5ba3425bd1b14b7f0bb4cc6b9a.jpg",
  },
];

const highlights = [
  "Home delivery",
  "Takeaway available",
  "Indoor seating",
  "Vegetarian friendly",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Curated Delights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Explore our wide range of chocolate creations, each crafted to
              perfection.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border shadow-sm text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="h-4 w-4 text-accent" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Heart button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HeartButton />
              </div>

              <div className="aspect-4/3 overflow-hidden bg-muted relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
