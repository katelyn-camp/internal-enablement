"use client";

import { PageType, PageZone } from "@/lib/page-anatomy";
import { useHotspotSelection } from "@/lib/annotated-diagram/useHotspotSelection";
import { HotspotMarker } from "@/app/components/annotated-diagram/HotspotMarker";
import { DefinitionPanel } from "@/app/components/annotated-diagram/DefinitionPanel";

export function PageAnatomyExplorer({ pageType }: { pageType: PageType }) {
  const { activeItem, activeId, selectItem, viewedIds, hydrated } = useHotspotSelection(
    pageType.zones,
    `pages:${pageType.slug}`,
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      {/* Schematic wireframe — boxes and labels, not a literal mockup, so it stays fast to scan and easy to update. */}
      <div className="space-y-4">
        {pageType.zones.map((zone, i) => (
          <div
            key={zone.id}
            id={zone.id}
            className="relative flex items-center justify-center rounded-card border border-dashed border-line bg-paper-3 px-5 py-8 text-center"
            style={{ minHeight: i === 0 ? 140 : 90 }}
          >
            <HotspotMarker
              number={zone.marker}
              label={zone.label}
              active={activeId === zone.id}
              viewed={hydrated && viewedIds.has(zone.id)}
              onClick={() => selectItem(zone.id)}
            />
            <p className="text-sm font-medium text-ink/60">{zone.label}</p>
          </div>
        ))}
      </div>

      <DefinitionPanel<PageZone>
        activeItem={activeItem}
        allItems={pageType.zones}
        viewedIds={viewedIds}
        hydrated={hydrated}
        onSelect={selectItem}
        emptyTitle="Explore this page type"
        emptyDescription={
          <>
            Click any <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-signal align-middle" /> marker on
            the wireframe to see what that zone is for and what &ldquo;good&rdquo; looks like there.
          </>
        }
        renderDetail={(zone) => (
          <>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">What it is</p>
            <p className="mb-4 text-sm leading-relaxed text-ink/85">{zone.whatItIs}</p>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">Why it matters for SEO/AEO</p>
            <p className="mb-4 text-sm leading-relaxed text-ink/85">{zone.whySeoAeo}</p>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">What good looks like</p>
            <p className="text-sm leading-relaxed text-ink/85">{zone.whatGoodLooksLike}</p>
          </>
        )}
      />
    </div>
  );
}
