"use client";

import { useEffect, useRef, useState } from "react";

// The deck's own CSS fills 100% of its real viewport height/width and
// centers content responsively, which is exactly why it looks right in true
// full screen. It only breaks down when squeezed into a small embedded box:
// its fixed-pixel padding/font-sizes assume roughly this much room, so it
// clips/overflows at small sizes. Rendering the iframe at this native size
// and scaling the whole thing down with a CSS transform (embedded view only
// — never in full screen) keeps every proportion identical to the full-screen
// view instead of letting the deck's own layout reflow and clip.
const DECK_WIDTH = 1280;
const DECK_HEIGHT = 720;

/**
 * Embeds the standalone "AI Search Category Enablement" slide deck HTML
 * (public/slides/category-enablement-orientation.html) via iframe rather
 * than porting its markup/CSS/JS into React: the deck owns its own global
 * script (slide state, keyboard nav, step reveals) that would collide with
 * page-level JS/CSS if inlined, so isolation keeps 100% of its behavior intact.
 */
export function CategoryEnablementSlideDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    }
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setScale(Math.min(width / DECK_WIDTH, height / DECK_HEIGHT));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  function toggleFullscreen() {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-ink"
          : "relative aspect-video w-full overflow-hidden rounded-card border border-line bg-ink"
      }
    >
      <div
        style={
          isFullscreen
            ? { position: "absolute", inset: 0 }
            : {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: DECK_WIDTH,
                height: DECK_HEIGHT,
                transform: `translate(-50%, -50%) scale(${scale})`,
              }
        }
      >
        <iframe
          src="/slides/category-enablement-orientation.html"
          title="AI Search Category Enablement slide deck"
          style={isFullscreen ? { width: "100%", height: "100%", border: 0 } : { width: DECK_WIDTH, height: DECK_HEIGHT, border: 0 }}
        />
      </div>
      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-caption font-semibold tracking-wide text-white uppercase backdrop-blur transition-colors hover:bg-black/80"
      >
        {isFullscreen ? "Exit full screen" : "Full screen"}
      </button>
    </div>
  );
}
