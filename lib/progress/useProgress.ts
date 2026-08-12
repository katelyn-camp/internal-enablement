"use client";

import { useCallback, useSyncExternalStore } from "react";
import { progressStore } from "./storage";
import { KnowledgeCheckAnswer, ProgressState } from "./types";

function toggleInArray(arr: string[], id: string): string[] {
  return arr.includes(id) ? arr : [...arr, id];
}

const noopSubscribe = () => () => {};

/** True once the client has taken over from the server-rendered neutral state. */
function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * The one place components talk to progress state. Every read/write in
 * the app should go through this hook rather than touching
 * lib/progress/storage.ts directly, so the storage layer can be
 * swapped later without touching page/component code.
 *
 * `hydrated` is false on the server-rendered pass and flips true on
 * the client, so components can render a neutral state first and
 * avoid hydration mismatches.
 */
export function useProgress() {
  const state = useSyncExternalStore(
    progressStore.subscribe,
    progressStore.getSnapshot,
    progressStore.getServerSnapshot,
  );
  const hydrated = useHydrated();

  const update = useCallback((updater: (prev: ProgressState) => ProgressState) => {
    progressStore.save(updater(progressStore.getSnapshot()));
  }, []);

  const markHotspotViewed = useCallback(
    (id: string) => update((prev) => ({ ...prev, hotspotsViewed: toggleInArray(prev.hotspotsViewed, id) })),
    [update],
  );

  const markGlossaryThemeOpened = useCallback(
    (theme: string) =>
      update((prev) => ({ ...prev, glossaryThemesOpened: toggleInArray(prev.glossaryThemesOpened, theme) })),
    [update],
  );

  const markGlossaryTermExpanded = useCallback(
    (id: string) =>
      update((prev) => ({ ...prev, glossaryTermsExpanded: toggleInArray(prev.glossaryTermsExpanded, id) })),
    [update],
  );

  const markCheckYourselfCompleted = useCallback(
    () => update((prev) => ({ ...prev, llmCheckYourselfCompleted: true })),
    [update],
  );

  const markWorkflowVisited = useCallback(
    (slug: string) => update((prev) => ({ ...prev, workflowsVisited: toggleInArray(prev.workflowsVisited, slug) })),
    [update],
  );

  const markPageVisited = useCallback(
    (id: string) => update((prev) => ({ ...prev, pagesVisited: toggleInArray(prev.pagesVisited, id) })),
    [update],
  );

  const submitKnowledgeCheck = useCallback(
    (id: string, answers: KnowledgeCheckAnswer[]) =>
      update((prev) => ({
        ...prev,
        knowledgeCheckSubmissions: {
          ...prev.knowledgeCheckSubmissions,
          [id]: { submittedAt: new Date().toISOString(), answers },
        },
      })),
    [update],
  );

  const resetProgress = useCallback(() => update(() => ({ ...progressStore.getServerSnapshot() })), [update]);

  return {
    state,
    hydrated,
    markHotspotViewed,
    markGlossaryThemeOpened,
    markGlossaryTermExpanded,
    markCheckYourselfCompleted,
    markWorkflowVisited,
    markPageVisited,
    submitKnowledgeCheck,
    resetProgress,
  };
}
