"use client";

import { funnelStages, FunnelStage } from "@/lib/content-funnel";
import { useHotspotSelection } from "@/lib/annotated-diagram/useHotspotSelection";
import { DefinitionPanel } from "@/app/components/annotated-diagram/DefinitionPanel";

const SEGMENT_BG: Record<string, string> = {
  awareness: "bg-paper-3",
  consideration: "bg-ink/10",
  decision: "bg-forest/15",
  "retention-expansion": "bg-signal/30",
};

function clipPathFor(topPct: number, bottomPct: number): string {
  const topLeft = (100 - topPct) / 2;
  const topRight = 100 - topLeft;
  const bottomLeft = (100 - bottomPct) / 2;
  const bottomRight = 100 - bottomLeft;
  return `polygon(${topLeft}% 0%, ${topRight}% 0%, ${bottomRight}% 100%, ${bottomLeft}% 100%)`;
}

export function FunnelDiagram() {
  const { activeItem, activeId, selectItem, viewedIds, hydrated } = useHotspotSelection(funnelStages, "funnel");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-card border border-line bg-white p-6">
        <div className="mx-auto flex max-w-md flex-col">
          {funnelStages.map((stage) => {
            const active = activeId === stage.id;
            const viewed = hydrated && viewedIds.has(stage.id);
            return (
              <div
                key={stage.id}
                role="button"
                tabIndex={0}
                onClick={() => selectItem(stage.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectItem(stage.id);
                  }
                }}
                aria-pressed={active}
                aria-label={`${stage.label} funnel stage`}
                className={`relative flex h-24 cursor-pointer items-center justify-center gap-2 border-y border-white/60 text-center outline-none transition-all hover:brightness-95 focus-visible:[outline:2px_solid_#1D1B19] ${SEGMENT_BG[stage.id]} ${
                  active ? "outline outline-2 outline-offset-[-2px] outline-ink" : ""
                }`}
                style={{ clipPath: clipPathFor(stage.topPct, stage.bottomPct) }}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    viewed ? "bg-forest text-white" : active ? "bg-ink text-signal" : "bg-signal text-ink"
                  }`}
                >
                  {viewed ? "✓" : stage.marker}
                </span>
                <span className="text-sm font-semibold text-ink">{stage.label}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-caption text-ink/45">
          Illustrative funnel model — flagged for review against AirOps&rsquo; own funnel terminology. Click any stage.
        </p>
      </div>

      <DefinitionPanel<FunnelStage>
        activeItem={activeItem}
        allItems={funnelStages}
        viewedIds={viewedIds}
        hydrated={hydrated}
        onSelect={selectItem}
        emptyTitle="Explore the funnel"
        emptyDescription="Click any stage of the funnel to see the search intent, example queries, content types, and purpose behind it."
        renderDetail={(stage) => (
          <>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Search intent</p>
            <p className="mb-4 text-sm leading-relaxed text-ink/85">{stage.searchIntent}</p>

            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Example queries</p>
            <ul className="mb-4 space-y-1">
              {stage.exampleQueries.map((q) => (
                <li key={q} className="rounded-lg bg-white px-3 py-1.5 text-sm text-ink/80">
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>

            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Content types</p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {stage.contentTypes.map((c) => (
                <span key={c} className="rounded-full border border-line bg-white px-2.5 py-0.5 text-[12px] text-ink/70">
                  {c}
                </span>
              ))}
            </div>

            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Purpose</p>
            <p className="text-sm leading-relaxed text-ink/85">{stage.purpose}</p>
          </>
        )}
      />
    </div>
  );
}
