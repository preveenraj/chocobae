import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import ContactUs from "@/components/contact-us";
import { FloatingChocolates } from "@/components/ui/floating-chocolates";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CursorSparkle } from "@/components/ui/cursor-sparkle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body selection:bg-accent selection:text-accent-foreground">
      <ScrollProgress />
      <FloatingChocolates />
      <CursorSparkle />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <ProductShowcase />
        <Testimonials />
        <section id="contact" className="bg-muted/30 border-t border-border/50">
          <ContactUs />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
