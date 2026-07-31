import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavShell } from "./components/nav/NavShell";

// Serrif VF (display) and Saans (body) are AirOps' actual licensed
// typefaces — the same font files used across the other AirOps internal
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

export const metadata: Metadata = {
  title: "SAM/SA Enablement — SEO + AEO Reference",
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
      className={`${serrif.variable} ${saans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <NavShell>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-line px-5 py-6 text-caption text-ink/45 lg:px-8">
            Internal reference for AirOps SAMs &amp; SAs — not a customer-facing asset.
          </footer>
        </NavShell>
      </body>
    </html>
  );
}
