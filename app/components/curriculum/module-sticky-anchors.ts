/**
 * The section id each module's sticky title bar hands off to once scrolled past, keyed
 * by "audience:slug". Modules without an entry just stay sticky/visible the whole page
 * through (ModuleStickyTitle's own fallback), rather than erroring.
 */
export const moduleStickyAnchors: Record<string, string> = {
  "em-sa:m0": "market-opportunity",
  "sales:m0": "market-opportunity",
  "em-sa:m1": "vocabulary",
  "sales:m1": "vocabulary",
  "em-sa:m2": "the-metrics",
  "sales:m2": "the-metrics",
};
