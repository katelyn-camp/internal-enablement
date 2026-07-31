"use client";

import { useState } from "react";
import { DiagnosticPattern } from "@/lib/diagnostic-patterns";

export function PatternCard({ pattern }: { pattern: DiagnosticPattern }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={pattern.id} className="rounded-card border border-line bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div>
          <h3 className="font-display text-h3 mb-1 text-ink">{pattern.name}</h3>
          {!open && <p className="text-sm text-ink/60">{pattern.teaser}</p>}
        </div>
        <span className={`mt-1 shrink-0 text-ink/40 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          ⌄
        </span>
      </button>

      {open && (
        <div className="space-y-5 border-t border-line px-5 pb-6 pt-5">
          <div>
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/55">Signs &amp; symptoms</p>
            <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed text-ink/80">
              {pattern.signs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/55">Root causes to evaluate</p>
            <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed text-ink/80">
              {pattern.rootCauses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/55">What this means for strategy</p>
            <p className="text-sm leading-relaxed text-ink/80">{pattern.strategyImplications}</p>
          </div>
        </div>
      )}
    </div>
  );
}
