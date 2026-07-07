import type { Metadata } from "next";
import { Inter, Playfair_Display, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Ar. Niveda Tupasundarya | Architecture Portfolio",
  description: "Dynamic 3D Architectural Portfolio of Ar. Niveda Tupasundarya. Explore luxury architectural designs, interior projects, and 3D models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${barlow.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-primary-bg text-primary-text font-sans">{children}</body>
    </html>
  );
}
