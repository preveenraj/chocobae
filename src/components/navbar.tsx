import Link from "next/link";
import Image from "next/image";
import ChocoBar from "../icons/choco-bar.svg";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-90" 
          href="/"
        >
          <Image src={ChocoBar} alt="Chocobae Logo" width={32} height={32} className="h-8 w-8" />
          <span>Chocobae</span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
          <Link 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent" 
            href="#about"
          >
            About
          </Link>
          <Link 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent" 
            href="#products"
          >
            Products
          </Link>
          <Link 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent" 
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
