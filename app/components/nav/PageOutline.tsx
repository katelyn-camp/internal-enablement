"use client";

import { useEffect, useState } from "react";

export interface OutlineSection {
  id: string;
  label: string;
}

/**
 * "On this page" study aid for pages with 3+ distinct sections.
 * Quieter than the main sidebar — a sticky list in the right margin
 * on desktop, collapsed into a "Jump to" disclosure on narrow screens.
 */
export function PageOutline({ sections }: { sections: OutlineSection[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <nav aria-label="On this page" className="fixed right-6 top-28 hidden w-52 xl:block">
        <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/40">On this page</p>
        <ul className="space-y-1.5 border-l border-line pl-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block text-sm transition-colors ${
                  activeId === s.id ? "font-medium text-ink" : "text-ink/45 hover:text-ink/70"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <details className="mb-8 rounded-card border border-line bg-paper-2 p-3 xl:hidden">
        <summary className="cursor-pointer text-caption font-semibold uppercase tracking-wide text-ink/50">
          Jump to a section
        </summary>
        <ul className="mt-2 space-y-1.5">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block text-sm text-ink/70 hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
