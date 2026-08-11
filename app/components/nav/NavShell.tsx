"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Audience } from "@/lib/curriculum";
import { Sidebar } from "./Sidebar";
import { AudienceSwitcher } from "./AudienceSwitcher";

export function NavShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const audience: Audience = pathname.startsWith("/sales") ? "sales" : "em-sa";

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

      <div className="flex min-h-full flex-col lg:pl-[280px]">{children}</div>
    </>
  );
}
