"use client";

import { useEffect } from "react";
import { useProgress } from "@/lib/progress/useProgress";

/**
 * Invisible — records a page visit for the sidebar's quiet visited
 * dots. Mounted once per page (top-level and nested), keyed by the
 * same id used in lib/nav-tree.ts / the Sidebar's resolved children
 * (e.g. "glossary", "workflows:keyword-analysis").
 */
export function PageVisitTracker({ id }: { id: string }) {
  const { markPageVisited } = useProgress();

  useEffect(() => {
    markPageVisited(id);
  }, [id, markPageVisited]);

  return null;
}
