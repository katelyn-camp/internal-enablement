import Link from "next/link";
import { PageType } from "@/lib/page-anatomy";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";

export function PageTypeCard({ pageType }: { pageType: PageType }) {
  return (
    <Link
      href={`/anatomy-of-pages/${pageType.slug}`}
      className="flex flex-col gap-3 rounded-card border border-line bg-white p-5 transition-colors hover:border-ink/30"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-h3 text-ink">{pageType.title}</h3>
        {pageType.status === "stub" && <ContentPendingTag />}
      </div>
      <p className="text-sm leading-relaxed text-ink/70">{pageType.summary}</p>
      <span className="mt-auto text-caption font-semibold text-forest">
        {pageType.status === "full" ? `Explore ${pageType.zones.length} zones →` : "View →"}
      </span>
    </Link>
  );
}
