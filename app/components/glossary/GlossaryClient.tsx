"use client";

import { useEffect, useMemo, useState } from "react";
import { GlossaryTerm, GlossaryTheme, glossaryThemes } from "@/lib/glossary";
import { useProgress } from "@/lib/progress/useProgress";
import { GlossaryEntry } from "./GlossaryEntry";

export function GlossaryClient({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState<GlossaryTheme | "all">("all");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const { markGlossaryThemeOpened, markGlossaryTermExpanded } = useProgress();

  useEffect(() => {
    // One-shot read of a browser global at mount to support deep links
    // (e.g. from search) — not a subscription, so this intentionally
    // isn't modeled as an external store.
    const hash = window.location.hash.replace("#", "");
    if (hash && terms.some((t) => t.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHighlightedId(hash);
      markGlossaryTermExpanded(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectTheme(theme: GlossaryTheme | "all") {
    setActiveTheme(theme);
    if (theme !== "all") markGlossaryThemeOpened(theme);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return terms.filter((t) => {
      const matchesTheme = activeTheme === "all" || t.theme === activeTheme;
      const matchesQuery =
        !q || t.term.toLowerCase().includes(q) || t.shortDefinition.toLowerCase().includes(q);
      return matchesTheme && matchesQuery;
    });
  }, [terms, query, activeTheme]);

  const groupedByTheme = glossaryThemes.map((theme) => ({
    theme,
    entries: filtered.filter((t) => t.theme === theme.id),
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => selectTheme("all")}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeTheme === "all" ? "bg-ink text-paper" : "border border-line bg-white text-ink/70 hover:bg-paper-2"
            }`}
          >
            All themes
          </button>
          {glossaryThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => selectTheme(theme.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeTheme === theme.id
                  ? "bg-ink text-paper"
                  : "border border-line bg-white text-ink/70 hover:bg-paper-2"
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 sm:w-72">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 text-ink/40">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by keyword…"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card border border-line bg-paper-2 p-6 text-sm text-ink/60">
          No terms match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-10">
          {groupedByTheme
            .filter((group) => group.entries.length > 0)
            .map((group) => (
              <section key={group.theme.id}>
                <h2 className="font-display text-h2 mb-1 text-ink">{group.theme.label}</h2>
                <p className="mb-4 max-w-2xl text-sm text-ink/60">{group.theme.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.entries.map((term) => (
                    <GlossaryEntry
                      key={term.id}
                      term={term}
                      highlighted={highlightedId === term.id}
                      onExpand={markGlossaryTermExpanded}
                    />
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}
    </div>
  );
}
