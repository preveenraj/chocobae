import Image from "next/image";

const products = [
  {
    title: "Crème de la crème",
    description: "Our signature collection of premium chocolate truffles.",
    image: "/main-banner.png", // Using main banner as placeholder for now
  },
  {
    title: "Choco Luxe Bowl",
    description: "Decadent bowls filled with layers of chocolate goodness.",
    image: "/main-banner.png", 
  },
  {
    title: "Artisanal Brownies",
    description: "Fudgy, rich, and absolutely irresistible.",
    image: "/main-banner.png", 
  },
  {
    title: "Signature Cakes",
    description: "Celebration cakes that taste as good as they look.",
    image: "/main-banner.png", 
  },
  {
    title: "Premium Ice Cream",
    description: "Creamy, smooth, and packed with flavor.",
    image: "/main-banner.png", 
  },
  {
    title: "Hot & Cold Beverages",
    description: "From hot cocoa to chilled chocolate shakes.",
    image: "/main-banner.png", 
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Curated Delights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Explore our wide range of chocolate creations, each crafted to perfection.
            </p>
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
