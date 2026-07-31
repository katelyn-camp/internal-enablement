export interface ProgressState {
  hotspotsViewed: string[];
  glossaryThemesOpened: string[];
  glossaryTermsExpanded: string[];
  llmCheckYourselfCompleted: boolean;
  workflowsVisited: string[];
  /**
   * Generic page-visited tracking, keyed by nav item id (top-level:
   * "diagnostic-patterns"; nested: "workflows:keyword-analysis"). This
   * is what drives the quiet visited dots in the sidebar, uniformly
   * across every page — separate from the more granular signals above
   * (hotspots viewed, themes opened, etc.) shown on the /progress page.
   */
  pagesVisited: string[];
}

export const EMPTY_PROGRESS_STATE: ProgressState = {
  hotspotsViewed: [],
  glossaryThemesOpened: [],
  glossaryTermsExpanded: [],
  llmCheckYourselfCompleted: false,
  workflowsVisited: [],
  pagesVisited: [],
};

/**
 * Storage abstraction for progress state. v1 ships a localStorage
 * implementation (see storage.ts). Swapping to a real backend later
 * (Postgres + auth) means writing a new class that satisfies this
 * interface — no component changes required.
 */
export interface ProgressStore {
  getSnapshot(): ProgressState;
  getServerSnapshot(): ProgressState;
  save(state: ProgressState): void;
  subscribe(callback: () => void): () => void;
}
