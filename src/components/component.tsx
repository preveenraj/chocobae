import Image from "next/image"
import Link from "next/link"

import ContactUs from "./contact-us"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CandyIcon className="h-6 w-6" />
          <span className="sr-only">Chocobae</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/main-banner.png"
              width="550"
              height="550"
              alt="Chocolate products"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {`Indulge in Chocobae's Artisanal Chocolates`}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the finest, ethically-sourced chocolate creations that will delight your senses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Chocolate Varieties</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From rich dark chocolate to creamy milk chocolate, we offer a wide selection of delectable treats to
                  satisfy every craving.
                </p>
              </div>
            </div>
            {/* <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Dark Chocolate"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Dark Chocolate</h3>
                  <p className="text-muted-foreground">
                    Indulge in our rich, smooth dark chocolate made with premium cacao.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Milk Chocolate"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Milk Chocolate</h3>
                  <p className="text-muted-foreground">
                    Savor our creamy, indulgent milk chocolate with a touch of sweetness.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="White Chocolate"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">White Chocolate</h3>
                  <p className="text-muted-foreground">
                    Delight in our silky smooth white chocolate with a delicate flavor.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <ContactUs />
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Chocobae</h3>
            <Link href="#" prefetch={false}>
              Our Story
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Crème de la crème
            </Link>
            <Link href="#" prefetch={false}>
              Crepe
            </Link>
            <Link href="#" prefetch={false}>
              Choco Luxe Bowl
            </Link>
            <Link href="#" prefetch={false}>
              Brownies
            </Link>
            <Link href="#" prefetch={false}>
              Cakes
            </Link>
            <Link href="#" prefetch={false}>
              Ice Cream
            </Link>
            <Link href="#" prefetch={false}>
              Beverages
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Refund Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Email
            </Link>
            <Link href="#" prefetch={false}>
              Phone
            </Link>
            <Link href="https://www.instagram.com/thechocobaeshop/"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}>
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CandyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" />
      <path d="M14 6.5v10" />
      <path d="M10 7.5v10" />
      <path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" />
      <path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" />
    </svg>
  )
}