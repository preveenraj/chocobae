import Image from "next/image";
import { Check } from "lucide-react";

const products = [
  {
    title: "Signature Truffles",
    description: "Handcrafted chocolate truffles with rich ganache centers.",
    image: "/main-banner.png", 
  },
  {
    title: "Decadent Cakes",
    description: "Celebration cakes that taste as good as they look.",
    image: "/main-banner.png", 
  },
  {
    title: "Artisanal Brownies",
    description: "Fudgy, rich, and absolutely irresistible.",
    image: "/main-banner.png", 
  },
  {
    title: "Premium Beverages",
    description: "Thick shakes, hot chocolate, and refreshing coolers.",
    image: "/main-banner.png", 
  },
  {
    title: "Dessert Bowls",
    description: "Layers of happiness in a bowl.",
    image: "/main-banner.png", 
  },
  {
    title: "Ice Creams",
    description: "Creamy, smooth, and packed with flavor.",
    image: "/main-banner.png", 
  },
];

const highlights = [
  "Home delivery",
  "Takeaway available", 
  "Indoor seating",
  "Vegetarian friendly"
];

export function ProductShowcase() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Curated Delights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Explore our wide range of chocolate creations, each crafted to perfection.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border shadow-sm text-sm font-medium">
                <Check className="h-4 w-4 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
