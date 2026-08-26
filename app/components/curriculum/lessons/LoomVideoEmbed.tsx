"use client";

import { useState } from "react";

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Loom videos as a designed poster card (icon + step + title) rather than
 * Loom's own auto-generated screen-grab thumbnail — those are all just
 * similar-looking browser/Drive screenshots and don't read as distinct at a
 * glance. The iframe only mounts once clicked, so a page with several of
 * these doesn't load several video players up front.
 *
 * `accentColor` is a real AirOps brand hex (see audit-methodology-videos.ts)
 * rather than a Tailwind token, applied via inline style like the
 * channel-mix chart elsewhere in this repo. It's only ever used as a small
 * fill (icon badge, play button), never as text-on-color — some of these
 * hexes are too dark for white text to read reliably on top of them.
 */
export function LoomVideoEmbed({
  loomId,
  title,
  step,
  durationSeconds,
  accentColor,
  icon,
}: {
  loomId: string;
  title: string;
  step: string;
  durationSeconds: number;
  accentColor: string;
  icon: React.ReactNode;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-card border border-line bg-ink">
        <iframe
          src={`https://www.loom.com/embed/${loomId}?autoplay=1`}
          className="h-full w-full"
          allow="autoplay; fullscreen"
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
      className="group relative flex aspect-video w-full flex-col overflow-hidden rounded-card border border-line bg-paper-2 p-5 text-left"
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-8"
        style={{ color: accentColor, opacity: 0.12 }}
      >
        {icon}
      </svg>

      <span
        className="flex h-11 w-11 items-center justify-center rounded-full"
        style={{ backgroundColor: accentColor }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
          {icon}
        </svg>
      </span>

      <span className="mt-4 text-caption font-semibold uppercase tracking-wide text-ink/45">{step}</span>
      <h3 className="mt-1 max-w-[80%] font-display text-lg leading-snug text-ink">{title}</h3>

      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:scale-110"
          style={{ backgroundColor: accentColor }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2 py-0.5 text-caption font-medium text-white">
        {formatDuration(durationSeconds)}
      </span>
    </button>
  );
}
