"use client";

import { VennRegion, vennRegions } from "@/lib/venn";
import { useHotspotSelection } from "@/lib/annotated-diagram/useHotspotSelection";
import { DefinitionPanel } from "@/app/components/annotated-diagram/DefinitionPanel";

// Two equal circles, centers on a horizontal line — precomputed intersection points.
const R = 160;
const CX1 = 210;
const CX2 = 390;
const CY = 200;
const MID_X = (CX1 + CX2) / 2; // 300
const HALF_D = (CX2 - CX1) / 2; // 90
const H = Math.sqrt(R * R - HALF_D * HALF_D); // ~132.29
const TOP = `${MID_X},${(CY - H).toFixed(2)}`;
const BOTTOM = `${MID_X},${(CY + H).toFixed(2)}`;

const PATHS: Record<string, string> = {
  "seo-only": `M${TOP} A${R},${R} 0 1,0 ${BOTTOM} A${R},${R} 0 0,1 ${TOP} Z`,
  "aeo-only": `M${TOP} A${R},${R} 0 1,1 ${BOTTOM} A${R},${R} 0 0,0 ${TOP} Z`,
  both: `M${TOP} A${R},${R} 0 0,1 ${BOTTOM} A${R},${R} 0 0,1 ${TOP} Z`,
};

const FILL: Record<string, string> = {
  "seo-only": "#1D1B19",
  "aeo-only": "#002912",
  both: "#00FF72",
};

export function VennDiagram() {
  const { activeItem, activeId, selectItem, viewedIds, hydrated } = useHotspotSelection(vennRegions, "venn");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div className="rounded-card border border-line bg-white p-6">
        <svg viewBox="0 0 600 400" className="w-full" role="group" aria-label="SEO vs. AEO Venn diagram">
          {vennRegions.map((region) => {
            const active = activeId === region.id;
            return (
              <path
                key={region.id}
                d={PATHS[region.id]}
                fill={FILL[region.id]}
                fillOpacity={region.id === "both" ? (active ? 0.9 : 0.65) : active ? 0.16 : 0.07}
                stroke={active ? FILL[region.id] : "transparent"}
                strokeWidth={2}
                className="cursor-pointer outline-none transition-all duration-150 hover:fill-opacity-20 focus-visible:[stroke:#1D1B19] focus-visible:[stroke-width:3]"
                onClick={() => selectItem(region.id)}
                role="button"
                tabIndex={0}
                aria-pressed={active}
                aria-label={`${region.label} best practices`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectItem(region.id);
                  }
                }}
              />
            );
          })}

          {/* Outlines, always visible, so the two circles read clearly regardless of fill state */}
          <circle cx={CX1} cy={CY} r={R} fill="none" stroke="#1D1B19" strokeOpacity={0.25} strokeWidth={1.5} className="pointer-events-none" />
          <circle cx={CX2} cy={CY} r={R} fill="none" stroke="#002912" strokeOpacity={0.35} strokeWidth={1.5} className="pointer-events-none" />

          <text x={CX1 - 70} y={CY - R + 30} className="fill-ink font-display text-[28px] font-medium pointer-events-none">
            SEO
          </text>
          <text x={CX2 + 30} y={CY - R + 30} className="pointer-events-none font-display text-[28px] font-medium" fill="#002912">
            AEO
          </text>
          <text x={MID_X} y={CY + 6} textAnchor="middle" className="pointer-events-none text-[15px] font-semibold" fill="#1D1B19">
            Both
          </text>
        </svg>
        <p className="mt-2 text-caption text-ink/45">Click a region — or use the list to the right — to see what belongs there.</p>
      </div>

      <DefinitionPanel<VennRegion>
        activeItem={activeItem}
        allItems={vennRegions}
        viewedIds={viewedIds}
        hydrated={hydrated}
        onSelect={selectItem}
        emptyTitle="Explore the overlap"
        emptyDescription="Click SEO-only, AEO-only, or the overlap in the middle to see which practices belong to each bucket."
        renderDetail={(region) => (
          <ul className="space-y-3">
            {region.items.map((item) => (
              <li key={item.title} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-sm leading-relaxed text-ink/70">{item.oneLineDescription}</p>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}
