"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "enablement-nav-ui:v2";
const CHANGE_EVENT = "enablement-nav-ui-change";

interface NavUiState {
  expandedIds: string[];
}

// Only Phase 0 starts open, for both audiences; Phase 1 and Phase 2 stay
// collapsed until someone clicks into them. Once a group is toggled, the
// persisted state (below) takes over. The "Existing Reference Library"
// group (and its own expandable parents, Workflows / Anatomy of Pages) is
// deliberately left out here too, so it starts collapsed; see lib/nav-tree.ts.
const DEFAULT_STATE: NavUiState = {
  expandedIds: [
    "em-sa-phase0",
    "sales-phase0",
    "workflows",
    "anatomy-of-pages",
  ],
};

/**
 * Sidebar expand/collapse state, separate from progress tracking on
 * purpose. This is a UI preference (what's open), not a record of
 * what content has been covered, so it gets its own localStorage key
 * even though the storage pattern mirrors lib/progress/storage.ts.
 */
class NavUiStore {
  private cache: NavUiState | null = null;

  private readFromDisk = (): NavUiState => {
    if (typeof window === "undefined") return DEFAULT_STATE;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_STATE;
      return { ...DEFAULT_STATE, ...JSON.parse(raw) };
    } catch {
      return DEFAULT_STATE;
    }
  };

  getSnapshot = (): NavUiState => {
    if (!this.cache) this.cache = this.readFromDisk();
    return this.cache;
  };

  getServerSnapshot = (): NavUiState => DEFAULT_STATE;

  save = (state: NavUiState): void => {
    if (typeof window === "undefined") return;
    this.cache = state;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    queueMicrotask(() => window.dispatchEvent(new CustomEvent(CHANGE_EVENT)));
  };

  subscribe = (callback: () => void): (() => void) => {
    if (typeof window === "undefined") return () => {};
    window.addEventListener(CHANGE_EVENT, callback);
    return () => window.removeEventListener(CHANGE_EVENT, callback);
  };
}

const navUiStore = new NavUiStore();

export function useNavUiState() {
  const state = useSyncExternalStore(navUiStore.subscribe, navUiStore.getSnapshot, navUiStore.getServerSnapshot);

  const toggle = useCallback((id: string) => {
    const current = navUiStore.getSnapshot();
    const expandedIds = current.expandedIds.includes(id)
      ? current.expandedIds.filter((x) => x !== id)
      : [...current.expandedIds, id];
    navUiStore.save({ expandedIds });
  }, []);

  const isExpanded = useCallback((id: string) => state.expandedIds.includes(id), [state.expandedIds]);

  return { isExpanded, toggle };
}
