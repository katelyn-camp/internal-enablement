"use client";

import { useMemo, useState } from "react";
import { ResearchEntry } from "@/lib/research-library";
import { glossaryThemes, GlossaryTheme } from "@/lib/glossary";
import { ResearchEntryCard } from "./ResearchEntryCard";

type TypeFilter = "all" | "internal" | "external";

export function ResearchLibraryClient({ entries }: { entries: ResearchEntry[] }) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [topicFilter, setTopicFilter] = useState<GlossaryTheme | "all">("all");

  const filtered = useMemo(
    () =>
      entries.filter((e) => {
        const matchesType = typeFilter === "all" || e.type === typeFilter;
        const matchesTopic = topicFilter === "all" || e.topicTag === topicFilter;
        return matchesType && matchesTopic;
      }),
    [entries, typeFilter, topicFilter],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", "internal", "external"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTypeFilter(t)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium capitalize transition-colors ${
              typeFilter === t ? "bg-ink text-paper" : "border border-line bg-white text-ink/70 hover:bg-paper-2"
            }`}
          >
            {t}
          </button>
        ))}
        <span className="mx-1 self-center text-ink/25">|</span>
        <button
          type="button"
          onClick={() => setTopicFilter("all")}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
            topicFilter === "all" ? "bg-ink text-paper" : "border border-line bg-white text-ink/70 hover:bg-paper-2"
          }`}
        >
          All topics
        </button>
        {glossaryThemes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => setTopicFilter(theme.id)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              topicFilter === theme.id ? "bg-ink text-paper" : "border border-line bg-white text-ink/70 hover:bg-paper-2"
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card border border-line bg-paper-2 p-6 text-sm text-ink/60">
          No examples match this filter combination.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <ResearchEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
