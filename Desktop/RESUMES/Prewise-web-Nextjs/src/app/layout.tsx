import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import PrewiseLogo from "@/assets/PrewiseLogo.png";
import ScrollManager from "@/components/ScrollManager";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Prewise Consulting",
  description: "DeepTech and Product Management consulting by Prewise.",
  icons: {
    icon: PrewiseLogo.src,
    shortcut: PrewiseLogo.src,
    apple: PrewiseLogo.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols for icon glyphs used across headers, hero chips, and feature lists */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap"
        />
      </head>
      <body className="bg-[#101622] text-white" suppressHydrationWarning>
        <Suspense fallback={null}>
          <ScrollManager />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
