"use client";

import { useMemo, useState } from "react";
import { Audience, ModuleEntry, PHASE_LABELS, Phase } from "@/lib/curriculum";
import { ModuleCard } from "./ModuleCard";

const PHASE_ORDER: Phase[] = ["phase0", "phase1", "phase2"];

export function ModulesIndexClient({ modules, audience }: { modules: ModuleEntry[]; audience: Audience }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter((m) => m.title.toLowerCase().includes(q) || m.code.toLowerCase().includes(q));
  }, [modules, query]);

  const byPhase = useMemo(() => {
    const map = new Map<Phase, ModuleEntry[]>();
    for (const phase of PHASE_ORDER) map.set(phase, []);
    for (const m of filtered) map.get(m.phase)?.push(m);
    return map;
  }, [filtered]);

  return (
    <div>
      <div className="mb-8 flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 sm:w-80">
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 text-ink/40">
          <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter modules…"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card border border-line bg-paper-2 p-6 text-sm text-ink/60">
          No modules match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-10">
          {PHASE_ORDER.filter((phase) => (byPhase.get(phase)?.length ?? 0) > 0).map((phase) => (
            <section key={phase}>
              <h2 className="mb-4 font-display text-h3 text-ink">{PHASE_LABELS[phase]}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {byPhase.get(phase)!.map((m) => (
                  <ModuleCard key={m.slug} module={m} audience={audience} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
