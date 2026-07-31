"use client";

import { ReactNode } from "react";
import { AnnotatedHotspot } from "@/lib/annotated-diagram/types";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";

interface DefinitionPanelProps<T extends AnnotatedHotspot> {
  activeItem: T | null;
  allItems: T[];
  viewedIds: Set<string>;
  hydrated: boolean;
  onSelect: (id: string) => void;
  emptyTitle: string;
  emptyDescription: ReactNode;
  renderDetail: (item: T) => ReactNode;
}

/**
 * Shared right-rail panel for every annotated diagram on the site
 * (SERP Anatomy, Anatomy of Pages, Anatomy of a Content Funnel).
 * Chrome (empty state, marker list with viewed checkmarks) is shared;
 * the actual detail body is fully custom per diagram via renderDetail,
 * since a SERP hotspot, a page-wireframe zone, and a funnel stage each
 * surface different fields.
 */
export function DefinitionPanel<T extends AnnotatedHotspot>({
  activeItem,
  allItems,
  viewedIds,
  hydrated,
  onSelect,
  emptyTitle,
  emptyDescription,
  renderDetail,
}: DefinitionPanelProps<T>) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start" aria-live="polite">
      <div className="rounded-card border border-line bg-paper-2 p-5">
        {activeItem ? (
          <div>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-forest">
              Hotspot {activeItem.marker}
            </p>
            <h3 className="font-display text-h3 mb-3 text-ink">{activeItem.label}</h3>
            {activeItem.contentPending && (
              <div className="mb-3">
                <ContentPendingTag />
              </div>
            )}
            {renderDetail(activeItem)}
          </div>
        ) : (
          <div>
            <h3 className="font-display text-h3 mb-2 text-ink">{emptyTitle}</h3>
            <p className="text-sm leading-relaxed text-ink/70">{emptyDescription}</p>
          </div>
        )}
      </div>

      <nav aria-label="All hotspots" className="mt-4 rounded-card border border-line bg-white p-2">
        <ul>
          {allItems.map((item) => {
            const isViewed = hydrated && viewedIds.has(item.id);
            const isActive = activeItem?.id === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isActive ? "bg-paper-2 font-medium text-ink" : "text-ink/75 hover:bg-paper-2"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                      isViewed ? "bg-forest text-white" : "bg-paper-3 text-ink/50"
                    }`}
                  >
                    {isViewed ? "✓" : item.marker}
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
