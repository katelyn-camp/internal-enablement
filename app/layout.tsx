import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NavShell } from "./components/nav/NavShell";

// Serrif VF is AirOps' actual licensed display face (same file used across
// the other AirOps internal tools). Inter remains a placeholder for the
// body face — swap for Saans once that's confirmed too.
const serrif = localFont({
  src: "./fonts/SerrifVF.ttf",
  variable: "--font-serrif",
  weight: "100 900",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${serrif.variable} ${inter.variable} h-full antialiased`}
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
