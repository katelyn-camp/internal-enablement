import { EMPTY_PROGRESS_STATE, ProgressState, ProgressStore } from "./types";

const STORAGE_KEY = "enablement-progress:v1";
const CHANGE_EVENT = "enablement-progress-change";

/**
 * v1 storage layer: browser localStorage only. No account, no server,
 * no cross-device sync — flagged as an open decision on the /progress
 * page. If this needs to become manager-visible or cross-device,
 * replace this class with one backed by a real API and nothing
 * outside lib/progress/ has to change.
 *
 * Shaped for React's useSyncExternalStore: getSnapshot() returns a
 * cached, referentially-stable value (a fresh object on every call
 * would make useSyncExternalStore think the store changes every
 * render), and subscribe()'s callback takes no arguments — it just
 * signals "re-read the snapshot."
 */
class LocalStorageProgressStore implements ProgressStore {
  private cache: ProgressState | null = null;

  private readFromDisk = (): ProgressState => {
    if (typeof window === "undefined") return EMPTY_PROGRESS_STATE;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return EMPTY_PROGRESS_STATE;
      return { ...EMPTY_PROGRESS_STATE, ...JSON.parse(raw) };
    } catch {
      return EMPTY_PROGRESS_STATE;
    }
  };

  getSnapshot = (): ProgressState => {
    if (!this.cache) this.cache = this.readFromDisk();
    return this.cache;
  };

  getServerSnapshot = (): ProgressState => EMPTY_PROGRESS_STATE;

  save = (state: ProgressState): void => {
    if (typeof window === "undefined") return;
    this.cache = state;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    // Deferred to a microtask so notifying other mounted useProgress()
    // instances (e.g. the nav's ProgressPill) never happens synchronously
    // from inside the update that triggered it.
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
    });
  };

  subscribe = (callback: () => void): (() => void) => {
    if (typeof window === "undefined") return () => {};

    const onChange = () => {
      this.cache = this.readFromDisk();
      callback();
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) onChange();
    };

    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  };
}

export const progressStore: ProgressStore = new LocalStorageProgressStore();
