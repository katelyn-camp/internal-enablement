/**
 * Placeholder video slot. To wire in a real embed, replace the
 * placeholder branch below with the provider's embed (e.g. a Loom or
 * Vimeo <iframe src={videoUrl} ... />) — everything else about the
 * layout stays the same.
 */
export function VideoSlot({ videoUrl }: { videoUrl: string | null }) {
  if (videoUrl) {
    return (
      <div className="aspect-video overflow-hidden rounded-card border border-line bg-ink">
        <iframe src={videoUrl} className="h-full w-full" allow="autoplay; fullscreen" title="Workflow walkthrough" />
      </div>
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line bg-paper-3 text-ink/40">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 4h11a2 2 0 012 2v3.2l4-2.3v10.2l-4-2.3V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span className="text-caption font-medium uppercase tracking-wide">Video coming</span>
    </div>
  );
}
