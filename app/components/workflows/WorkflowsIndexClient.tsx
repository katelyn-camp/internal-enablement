"use client";

import { useMemo, useState } from "react";
import { WorkflowEntry } from "@/lib/workflows";
import { WorkflowCard } from "./WorkflowCard";

export function WorkflowsIndexClient({ workflows }: { workflows: WorkflowEntry[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return workflows;
    return workflows.filter(
      (w) => w.title.toLowerCase().includes(q) || w.summary.toLowerCase().includes(q),
    );
  }, [workflows, query]);

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 sm:w-80">
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 text-ink/40">
          <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter workflows…"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card border border-line bg-paper-2 p-6 text-sm text-ink/60">
          No workflows match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <WorkflowCard key={w.slug} workflow={w} />
          ))}
        </div>
      )}
    </div>
  );
}
