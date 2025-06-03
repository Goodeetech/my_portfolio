import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goodéé",
  description:
    "Goodéé is a creative developer crafting modern, responsive web and mobile experiences with JavaScript, React, and Next.js — blending code and design to solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased bg-[#030c27] text-white/95  font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
