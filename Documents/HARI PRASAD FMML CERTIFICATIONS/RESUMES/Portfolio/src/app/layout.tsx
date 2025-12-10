import type React from "react";
import type { Metadata } from "next/types";
import { Montserrat, Dancing_Script, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeDataProvider from "@/components/theme-color-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hari Prasad Chinimilli — Portfolio",
  description: "Final-year B.Tech student in Computer Science and Data Science at KIET, aspiring Prompt Engineer and Generative AI specialist. Experienced in building MERN full-stack applications and AI/ML solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/avatar.png" />
      </head>
      <body  className={`${dancingScript.variable} ${montserrat.variable} ${roboto.variable} selection:bg-primary/20! antialiased font-montserrat h-dvh`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
            <CursorProvider>
              <CustomCursor />
            <Navbar resumeLink={(process.env.RESUME as string) ?? '/ChinimilliHariPrasad.Resume.pdf'} />
            {children}
            <Footer resumeLink={(process.env.RESUME as string) ?? '/ChinimilliHariPrasad.Resume.pdf'} />
            </CursorProvider>
          </ThemeDataProvider>
        </ThemeProvider>
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "http://localhost:3000/#person",
            "name": "Hari Prasad Chinimilli",
            "description": "Prompt Engineer & Generative AI Specialist",
            "image": "/hari-profile.jpg",
            "url": "http://localhost:3000",
            "sameAs": [
              "https://github.com/Hari-1718",
              "https://www.linkedin.com/in/haripch"
            ],
            "jobTitle": "Prompt Engineer & Generative AI Specialist",
            "knowsAbout": ["Generative AI", "Machine Learning", "MERN Stack", "Python", "NLP", "React", "Node.js"]
          }
        `}
        </Script>

        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "http://localhost:3000/#website",
            "url": "http://localhost:3000",
            "name": "Hari Prasad Chinimilli Portfolio",
            "description": "Portfolio of Hari Prasad Chinimilli — Prompt Engineer & Generative AI Specialist",
            "publisher": {
              "@id": "http://localhost:3000/#person"
            }
          }
        `}
        </Script>
      </body>
    </html>
  );
}
