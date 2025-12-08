import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              ★ 3.9/5 on Zomato (400+ Reviews)
            </div>
            <div className="inline-flex ml-2 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Avg Cost: ₹400 for two
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Indulge in <span className="text-accent">Chocobae</span>'s <br className="hidden lg:inline" /> Desserts & Beverages
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
              Handcrafted chocolate desserts that melt your heart. Experience the finest cakes, brownies, and beverages in Tripunithura, Kochi.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://www.zomato.com/kochi/chocobae-tripunithura/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full bg-[#E23744] px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#cb202d] hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Order on Zomato
            </Link>
            <Link
              href="https://www.instagram.com/thechocobaeshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full border-2 border-primary/20 bg-background px-8 text-base font-medium text-foreground shadow-sm transition-all hover:border-[#E1306C] hover:text-[#E1306C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore on Instagram
            </Link>
          </div>
        </div>
        <div className="mx-auto lg:order-last animate-in zoom-in-50 fade-in duration-1000 delay-200">
          <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[500px]">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl transform scale-110"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-background shadow-2xl ring-1 ring-black/5">
              <Image
                src="/main-banner.png"
                alt="Chocobae Artisanal Chocolates"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
