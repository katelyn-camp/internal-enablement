"use client";

import { useEffect, useState } from "react";
import { ModuleEyebrow } from "./ModuleEyebrow";

/** Roughly where the sticky bar's own bottom edge sits. */
const THRESHOLD_PX = 110;

/**
 * Sticky module title (eyebrow badge + h1), pinned at the top of the page
 * through everything above the lesson body (learning objectives, assessment
 * info, project options), and handing off once the lesson's own first
 * section (identified by `untilAnchorId`) reaches the top of the viewport.
 * Modules without that anchor just stay visible the whole page through.
 */
export function ModuleStickyTitle({ code, title, untilAnchorId }: { code: string; title: string; untilAnchorId?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!untilAnchorId) return;
    const anchor = document.getElementById(untilAnchorId);
    if (!anchor) return;

    function onScroll() {
      setVisible(anchor!.getBoundingClientRect().top > THRESHOLD_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [untilAnchorId]);

  return (
    <div
      className={`sticky top-14 z-30 mb-8 border-b border-line bg-paper py-3 transition-opacity duration-150 lg:top-0 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mb-3">
        <ModuleEyebrow code={code} />
      </div>
      <h1 className="font-display text-h1 text-ink">{title}</h1>
    </div>
  );
}
