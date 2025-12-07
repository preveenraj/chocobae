import Image from "next/image";
import { Check } from "lucide-react";

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

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Curated Delights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Explore our wide range of chocolate creations, each crafted to
              perfection.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border shadow-sm text-sm font-medium"
              >
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
              <div className="aspect-4/3 overflow-hidden bg-muted relative">
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
        {/* 
        <div className="mt-20 flex flex-col items-center">
          <h3 className="font-heading text-2xl font-bold tracking-tighter text-primary mb-8">
            View Our Menu
          </h3>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
            <Image
              src="https://b.zmtcdn.com/data/menus/173/21419173/6704dfbe5de27eedc7417e2f14af5620.jpg"
              alt="Chocobae Menu"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            * Menu items and prices subject to change.
          </p>
        </div> */}
      </div>
    </section>
  );
}
