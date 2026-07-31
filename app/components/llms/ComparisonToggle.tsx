"use client";

import { useState } from "react";
import { retrievalSurfaces } from "@/lib/llm-comparison";

const ROWS: { key: keyof (typeof retrievalSurfaces)[number]; label: string }[] = [
  { key: "dataFreshness", label: "How fresh is the information?" },
  { key: "howItDecides", label: "How does it decide what to say?" },
  { key: "citationsShown", label: "What citations does the user see?" },
  { key: "howFastYouCanShiftIt", label: "How fast can new content shift it?" },
];

export function ComparisonToggle() {
  const [activeId, setActiveId] = useState(retrievalSurfaces[0].id);
  const active = retrievalSurfaces.find((s) => s.id === activeId)!;

  return (
    <div>
      <div role="tablist" aria-label="Choose a surface to inspect" className="mb-4 flex flex-wrap gap-2">
        {retrievalSurfaces.map((surface) => (
          <button
            key={surface.id}
            type="button"
            role="tab"
            aria-selected={activeId === surface.id}
            onClick={() => setActiveId(surface.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeId === surface.id ? "bg-ink text-paper" : "border border-line bg-white text-ink/70 hover:bg-paper-2"
            }`}
          >
            {surface.label}
          </button>
        ))}
      </div>

      <div className="rounded-card border border-line bg-paper-2 p-5" aria-live="polite">
        <h3 className="font-display text-h3 mb-2 text-ink">{active.label}</h3>
        <p className="mb-5 text-sm leading-relaxed text-ink/75">{active.oneLiner}</p>

        <dl className="divide-y divide-line">
          {ROWS.map((row) => (
            <div key={String(row.key)} className="grid gap-1 py-3 sm:grid-cols-[220px_1fr] sm:gap-4">
              <dt className="text-caption font-semibold uppercase tracking-wide text-ink/50">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-ink/80">{active[row.key] as string}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-3 text-caption text-ink/45">
        Toggle between surfaces above — the underlying mechanism (memorized training data vs. live retrieval) is what
        explains almost every visibility difference you&rsquo;ll see across them.
      </p>
    </div>
  );
}
