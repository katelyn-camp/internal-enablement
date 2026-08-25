"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Audience } from "@/lib/curriculum";
import { Sidebar } from "./Sidebar";
import { AudienceSwitcher } from "./AudienceSwitcher";

/**
 * Routes rendered edge-to-edge with no sidebar, mobile header, or footer —
 * for links meant to be shared standalone (e.g. a slide deck), where anyone
 * with the URL should see only that content, with no path into the rest of
 * the site.
 */
const BARE_ROUTE_PREFIXES = ["/slides"];

export function NavShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const audience: Audience = pathname.startsWith("/sales") ? "sales" : "em-sa";

  if (BARE_ROUTE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-paper/95 px-5 py-3 backdrop-blur lg:hidden">
        <AudienceSwitcher audience={audience} />
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

      <div className="flex min-h-full flex-col lg:pl-[280px]">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line px-5 py-6 text-caption text-ink/45 lg:px-8">
          Internal reference for AirOps SAMs &amp; SAs, not a customer-facing asset.
        </footer>
      </div>
    </>
  );
}
