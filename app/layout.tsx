import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavShell } from "./components/nav/NavShell";

// Serrif VF (display) and Saans (body) are AirOps' actual licensed
// typefaces, the same font files used across the other AirOps internal
// tools, loaded locally rather than from Google Fonts.
const serrif = localFont({
  src: "./fonts/SerrifVF.ttf",
  variable: "--font-serrif",
  weight: "100 900",
  display: "swap",
});

const saans = localFont({
  src: [
    { path: "./fonts/Saans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Saans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Saans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-saans",
  display: "swap",
});

// Saans Mono: eyebrows, pills/tags, and axis labels (Brand 2.0).
const saansMono = localFont({
  src: "./fonts/SaansMono-Medium.ttf",
  variable: "--font-saans-mono",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAM/SA Enablement: SEO + AEO Reference",
  description:
    "Internal reference for AirOps Strategic Account Managers and Solution Architects: SERP anatomy, glossary, LLM retrieval mechanics, and the audit workflow library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${serrif.variable} ${saans.variable} ${saansMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <NavShell>{children}</NavShell>
      </body>
    </html>
  );
}
