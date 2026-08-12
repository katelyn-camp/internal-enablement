"use client";

import { useEffect, useState } from "react";

/** ids of the subsection anchors this header tracks, in scroll order */
const SUBSECTIONS = [
  { id: "ai-search-anchor", label: "AI Search" },
  { id: "surfaces-anchor", label: "Surfaces" },
  { id: "channels-anchor", label: "Channels" },
];

/** Roughly the sticky bar's own rendered height, i.e. where its bottom edge sits. */
const THRESHOLD_PX = 110;

/**
 * Sticky "The Ecosystem" header for the ecosystem section, with a second line
 * beneath it tracking which part (AI Search / Surfaces / Channels) is currently
 * scrolled to the top of the viewport, so that context survives even once the
 * relevant container itself has scrolled out from under the sticky bar.
 */
export function EcosystemHeader() {
  const [activeLabel, setActiveLabel] = useState(SUBSECTIONS[0].label);

  useEffect(() => {
    const anchors = SUBSECTIONS.map((s) => ({ ...s, el: document.getElementById(s.id) })).filter((s) => s.el);
    if (anchors.length === 0) return;

    function onScroll() {
      let current = anchors[0].label;
      for (const a of anchors) {
        if (a.el!.getBoundingClientRect().top <= THRESHOLD_PX) current = a.label;
      }
      setActiveLabel(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-14 z-20 mb-3 border-b border-line bg-paper lg:top-0">
      <h2 className="pt-3 font-display text-h2 text-ink">The Ecosystem</h2>
      <p className="pb-3 pt-1 text-caption font-semibold tracking-wide text-ink/50 uppercase">{activeLabel}</p>
    </div>
  );
}
