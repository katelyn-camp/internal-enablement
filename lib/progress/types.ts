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
   * across every page, separate from the more granular signals above
   * (hotspots viewed, themes opened, etc.) shown on the /progress page.
   */
  pagesVisited: string[];
  /**
   * Module knowledge check submissions, keyed by module slug (e.g. "m1"). This is a POC
   * running on localStorage only; the shape is deliberately real (actual answers, not just
   * a completion flag) so a future backend swap is a storage-layer change, not a data
   * model change.
   */
  knowledgeCheckSubmissions: Record<string, KnowledgeCheckSubmission>;
}

/**
 * One question's answer, index-aligned with the question set it was submitted against.
 * A number is a selected option index (multiple-choice / true-false); a string is typed
 * free-response text.
 */
export type KnowledgeCheckAnswer = number | string;

export interface KnowledgeCheckSubmission {
  submittedAt: string;
  answers: KnowledgeCheckAnswer[];
}

export const EMPTY_PROGRESS_STATE: ProgressState = {
  hotspotsViewed: [],
  glossaryThemesOpened: [],
  glossaryTermsExpanded: [],
  llmCheckYourselfCompleted: false,
  workflowsVisited: [],
  pagesVisited: [],
  knowledgeCheckSubmissions: {},
};

/**
 * Storage abstraction for progress state. v1 ships a localStorage
 * implementation (see storage.ts). Swapping to a real backend later
 * (Postgres + auth) means writing a new class that satisfies this
 * interface; no component changes required.
 */
export interface ProgressStore {
  getSnapshot(): ProgressState;
  getServerSnapshot(): ProgressState;
  save(state: ProgressState): void;
  subscribe(callback: () => void): () => void;
}
