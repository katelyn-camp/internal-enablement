import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/** Every sub-page gets one of these — with no command palette, it's the primary "where am I" cue. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-caption text-ink/55">
      {trail.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden className="text-ink/30">
              /
            </span>
          )}
          {crumb.href ? (
            <Link href={crumb.href} className="font-medium hover:text-ink hover:underline">
              {crumb.label}
            </Link>
          ) : (
            <span className="font-medium text-ink">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
