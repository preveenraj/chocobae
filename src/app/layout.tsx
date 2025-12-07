import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chocobae - Artisanal Chocolates & Desserts",
  description: "Chocobae Tripunithura, Kochi. Handcrafted chocolate desserts, cakes, brownies, and beverages. View menu, reviews, contact, and location.",
  icons: "/main-banner-with-background.png",
  openGraph: {
    title: "Chocobae - Artisanal Chocolates & Desserts",
    description: "Chocobae Tripunithura, Kochi. Handcrafted chocolate desserts, cakes, brownies, and beverages.",
    type: "website",
    url: "https://chocobae.in",
    images: "https://chocobae.in/main-banner-with-background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
