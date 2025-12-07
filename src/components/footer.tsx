import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
        <div className="space-y-4">
          <h3 className="text-2xl font-heading font-bold tracking-tight">Chocobae</h3>
          <p className="text-primary-foreground/80 max-w-xs text-sm leading-relaxed">
            Crafting moments of pure joy with our artisanal chocolate creations. Made with love and the finest ingredients.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold tracking-wide uppercase text-sm opacity-70">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#products" className="hover:text-accent transition-colors">Truffles</Link></li>
            <li><Link href="#products" className="hover:text-accent transition-colors">Cakes</Link></li>
            <li><Link href="#products" className="hover:text-accent transition-colors">Brownies</Link></li>
            <li><Link href="#products" className="hover:text-accent transition-colors">Gift Boxes</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold tracking-wide uppercase text-sm opacity-70">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold tracking-wide uppercase text-sm opacity-70">Connect</h4>
          <div className="space-y-3 text-sm">
             <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>Kochi, Kerala</span>
             </div>
             <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+917306307944" className="hover:text-accent transition-colors">+91 730 630 7944</a>
             </div>
             <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:chocobae50@gmail.com" className="hover:text-accent transition-colors">chocobae50@gmail.com</a>
             </div>
             <div className="flex items-center gap-2 pt-2">
                <a 
                  href="https://www.instagram.com/thechocobaeshop/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
             </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 md:px-6 border-t border-white/10 pt-8 text-center text-xs text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Chocobae. All rights reserved.</p>
      </div>
    </footer>
  );
}
