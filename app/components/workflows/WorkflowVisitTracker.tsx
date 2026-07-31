"use client";

import { useEffect } from "react";
import { useProgress } from "@/lib/progress/useProgress";

/**
 * Invisible — records a workflow visit two ways on mount: the
 * granular `workflowsVisited` list shown on /progress, and the
 * generic `pagesVisited` entry the sidebar's visited dots read from
 * (namespaced to match the Sidebar's resolved child id).
 */
export function WorkflowVisitTracker({ slug }: { slug: string }) {
  const { markWorkflowVisited, markPageVisited } = useProgress();

  useEffect(() => {
    markWorkflowVisited(slug);
    markPageVisited(`workflows:${slug}`);
  }, [slug, markWorkflowVisited, markPageVisited]);

  return null;
}
