/**
 * Shared shape for anything rendered as a clickable hotspot marker
 * inside an annotated diagram (SERP Anatomy, Anatomy of Pages,
 * Anatomy of a Content Funnel). Each diagram's data file extends this
 * with whatever detail fields it actually needs — the shared pieces
 * only care about id/marker/label/contentPending.
 */
export interface AnnotatedHotspot {
  id: string;
  marker: string;
  label: string;
  contentPending?: boolean;
}
