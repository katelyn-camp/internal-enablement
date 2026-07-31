"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useProgress } from "@/lib/progress/useProgress";
import { AnnotatedHotspot } from "./types";

/**
 * Selection + progress-tracking + hash-deep-link logic shared by every
 * annotated diagram on the site (SERP Anatomy, Anatomy of Pages,
 * Anatomy of a Content Funnel). `namespace` keeps each diagram's
 * hotspot ids from colliding in the shared progress store (e.g.
 * "serp:ai-overview" vs. "pages:blog-post:hero").
 */
export function useHotspotSelection<T extends AnnotatedHotspot>(items: T[], namespace: string) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { state, hydrated, markHotspotViewed } = useProgress();

  const prefix = `${namespace}:`;
  const viewedIds = useMemo(
    () =>
      new Set(
        state.hotspotsViewed.filter((v) => v.startsWith(prefix)).map((v) => v.slice(prefix.length)),
      ),
    [state.hotspotsViewed, prefix],
  );

  const selectItem = useCallback(
    (id: string) => {
      setActiveId(id);
      markHotspotViewed(`${namespace}:${id}`);
      window.history.replaceState(null, "", `#${id}`);
    },
    [markHotspotViewed, namespace],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && items.some((i) => i.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      selectItem(hash);
    }
    // Only run once on mount — deep-link handoff from search/nav; a
    // one-shot read of window.location.hash, not a subscription.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeItem = items.find((i) => i.id === activeId) ?? null;

  return { activeItem, activeId, selectItem, viewedIds, hydrated };
}
