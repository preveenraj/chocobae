import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Footer } from "@/components/footer";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <section id="contact" className="bg-muted/30 border-t border-border/50">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
