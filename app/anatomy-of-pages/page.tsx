import { pageTypes } from "@/lib/page-anatomy";
import { PageTypeCard } from "../components/anatomy-of-pages/PageTypeCard";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function AnatomyOfPagesHub() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="anatomy-of-pages" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Anatomy of Pages</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        Every common page type, broken into its real zones — what each one is for, and what &ldquo;good&rdquo; looks
        like there for SEO and AEO.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pageTypes.map((pt) => (
          <PageTypeCard key={pt.slug} pageType={pt} />
        ))}
      </div>
    </div>
  );
}
