/** Shared building blocks for lesson bodies in this directory. */

/**
 * Sticks to the top of the viewport while its section is being scrolled
 * through, so the reader always knows which part of a long lesson
 * they're in. `top-14` clears the mobile nav header; there's nothing to
 * clear on desktop, hence `lg:top-0`.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="sticky top-14 z-20 mb-3 border-b border-line bg-paper py-3 font-display text-h2 text-ink lg:top-0">{children}</h2>;
}

/** A labeled break between two major parts of a lesson, e.g. "same backbone, mapped to enablement". */
export function FlowDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-caption font-semibold tracking-wide text-ink/45 uppercase">
      <span className="h-px flex-1 bg-line" />
      {children}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

/** A centered "↓" connector between stacked flow nodes. */
export function FlowArrow() {
  return (
    <div className="py-1 text-center text-lg text-ink/25" aria-hidden>
      ↓
    </div>
  );
}
