import type { Metadata } from "next";
// Fraunces (display) + Inter (body) are buildable placeholders for
// AirOps' actual licensed display/body faces — swap once design confirms.
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { NavShell } from "./components/nav/NavShell";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
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
