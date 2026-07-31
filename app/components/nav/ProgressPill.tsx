"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress/useProgress";
import { serpHotspots } from "@/lib/serp-hotspots";
import { glossaryThemes } from "@/lib/glossary";
import { workflows } from "@/lib/workflows";

const TOTAL_TRACKABLE =
  serpHotspots.length + glossaryThemes.length + workflows.length + 1; // +1 for the LLM check-yourself

export function ProgressPill() {
  const { state, hydrated } = useProgress();

  const covered =
    state.hotspotsViewed.length +
    state.glossaryThemesOpened.length +
    state.workflowsVisited.length +
    (state.llmCheckYourselfCompleted ? 1 : 0);

  return (
    <Link
      href="/progress"
      className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-paper-2 px-3 py-1.5 text-caption font-medium text-ink/70 transition-colors hover:border-ink/30"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
      {hydrated ? `${covered} / ${TOTAL_TRACKABLE} covered` : "Your progress"}
    </Link>
  );
}
