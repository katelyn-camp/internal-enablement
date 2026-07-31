"use client";

interface HotspotMarkerProps {
  number: string;
  label: string;
  active: boolean;
  viewed: boolean;
  onClick: () => void;
}

export function HotspotMarker({ number, label, active, viewed, onClick }: HotspotMarkerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Explore: ${label}`}
      aria-expanded={active}
      className={`absolute -left-3 -top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-xs font-semibold shadow transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
        active ? "bg-ink text-signal" : "bg-signal text-ink"
      } ${!viewed ? "hotspot-pulse" : ""}`}
    >
      {number}
    </button>
  );
}
