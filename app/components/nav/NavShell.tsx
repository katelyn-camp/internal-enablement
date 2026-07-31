"use client";

import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function NavShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-paper/95 px-5 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="font-display text-lg font-medium text-ink">
          SAM/SA Enablement
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-full border border-line px-3 py-1.5 text-caption font-medium"
        >
          Menu
        </button>
      </header>

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex min-h-full flex-col lg:pl-[280px]">{children}</div>
    </>
  );
}
