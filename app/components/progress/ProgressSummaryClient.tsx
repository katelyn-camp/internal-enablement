"use client";

import { useState } from "react";
import { useProgress } from "@/lib/progress/useProgress";
import { serpHotspots } from "@/lib/serp-hotspots";
import { glossaryThemes } from "@/lib/glossary";
import { workflows } from "@/lib/workflows";

function buildSummaryText(state: ReturnType<typeof useProgress>["state"]) {
  const lines: string[] = [];
  lines.push("SAM/SA SEO + AEO enablement — what I've covered");
  lines.push("");

  const serpViewed = serpHotspots.filter((h) => state.hotspotsViewed.includes(`serp:${h.id}`));
  lines.push(`SERP Anatomy hotspots explored (${serpViewed.length}/${serpHotspots.length}):`);
  if (serpViewed.length === 0) lines.push("  — none yet");
  serpViewed.forEach((h) => lines.push(`  - ${h.label}`));
  lines.push("");

  lines.push(`Glossary themes opened (${state.glossaryThemesOpened.length}/${glossaryThemes.length}):`);
  if (state.glossaryThemesOpened.length === 0) lines.push("  — none yet");
  glossaryThemes
    .filter((t) => state.glossaryThemesOpened.includes(t.id))
    .forEach((t) => lines.push(`  - ${t.label}`));
  lines.push("");

  lines.push(`LLMs & Retrieval check-yourself: ${state.llmCheckYourselfCompleted ? "completed" : "not yet completed"}`);
  lines.push("");

  lines.push(`Workflows visited (${state.workflowsVisited.length}/${workflows.length}):`);
  if (state.workflowsVisited.length === 0) lines.push("  — none yet");
  workflows.filter((w) => state.workflowsVisited.includes(w.slug)).forEach((w) => lines.push(`  - ${w.title}`));
  lines.push("");

  lines.push("(Self-reported, browser-local — not a graded or verified record.)");
  return lines.join("\n");
}

export function ProgressSummaryClient() {
  const { state, hydrated, resetProgress } = useProgress();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildSummaryText(state));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the text below is still selectable manually.
    }
  }

  if (!hydrated) {
    return <p className="text-sm text-ink/50">Loading your progress…</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            copied ? "bg-forest text-white" : "bg-signal text-ink hover:brightness-95"
          }`}
        >
          {copied ? "Copied!" : "Copy summary to paste in Slack"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Clear all local progress? This can't be undone.")) resetProgress();
          }}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink/60 hover:border-ink/30"
        >
          Clear my progress
        </button>
      </div>

      <section>
        <h2 className="font-display text-h3 mb-3 text-ink">
          SERP Anatomy hotspots explored ({serpHotspots.filter((h) => state.hotspotsViewed.includes(`serp:${h.id}`)).length}/
          {serpHotspots.length})
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {serpHotspots.map((h) => {
            const viewed = state.hotspotsViewed.includes(`serp:${h.id}`);
            return (
              <li
                key={h.id}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  viewed ? "border-line bg-white text-ink" : "border-dashed border-line text-ink/40"
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${viewed ? "bg-signal" : "bg-paper-3"}`} />
                {h.label}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-h3 mb-3 text-ink">
          Glossary themes opened ({state.glossaryThemesOpened.length}/{glossaryThemes.length})
        </h2>
        <ul className="grid gap-2 sm:grid-cols-3">
          {glossaryThemes.map((t) => {
            const opened = state.glossaryThemesOpened.includes(t.id);
            return (
              <li
                key={t.id}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  opened ? "border-line bg-white text-ink" : "border-dashed border-line text-ink/40"
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${opened ? "bg-signal" : "bg-paper-3"}`} />
                {t.label}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-h3 mb-3 text-ink">LLMs &amp; Retrieval</h2>
        <p
          className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
            state.llmCheckYourselfCompleted ? "border-line bg-white text-ink" : "border-dashed border-line text-ink/40"
          }`}
        >
          <span className={`h-2 w-2 shrink-0 rounded-full ${state.llmCheckYourselfCompleted ? "bg-signal" : "bg-paper-3"}`} />
          Check-yourself interaction {state.llmCheckYourselfCompleted ? "completed" : "not yet completed"}
        </p>
      </section>

      <section>
        <h2 className="font-display text-h3 mb-3 text-ink">
          Workflows visited ({state.workflowsVisited.length}/{workflows.length})
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {workflows.map((w) => {
            const visited = state.workflowsVisited.includes(w.slug);
            return (
              <li
                key={w.slug}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  visited ? "border-line bg-white text-ink" : "border-dashed border-line text-ink/40"
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${visited ? "bg-signal" : "bg-paper-3"}`} />
                {w.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
