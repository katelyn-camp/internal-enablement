"use client";

import { useState } from "react";
import { ProcessStep } from "@/lib/content-process";

export function ProcessStepCard({ step }: { step: ProcessStep }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={step.id} className="rounded-card border border-line bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-3 font-display text-sm font-medium text-ink">
          {step.order}
        </span>
        <span className="flex-1">
          <h3 className="font-display text-h3 text-ink">{step.title}</h3>
          {!open && <p className="mt-0.5 text-sm text-ink/60">{step.whatHappens}</p>}
        </span>
        <span className={`shrink-0 text-ink/40 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          ⌄
        </span>
      </button>

      {open && (
        <div className="space-y-5 border-t border-line px-5 pb-6 pt-5 pl-[4.25rem]">
          <div>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">What happens at this step</p>
            <p className="text-sm leading-relaxed text-ink/80">{step.whatHappens}</p>
          </div>
          <div>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Why it matters</p>
            <p className="text-sm leading-relaxed text-ink/80">{step.whyItMatters}</p>
          </div>
          <div>
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/55">Factors &amp; considerations</p>
            <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed text-ink/80">
              {step.factors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          {step.agentHandles && (
            <div className="rounded-lg bg-forest px-4 py-3 text-sm leading-relaxed text-white">
              <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-signal">Where an AirOps agent typically handles this today</p>
              {step.agentHandles}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
