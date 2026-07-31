import { VennDiagram } from "../components/venn/VennDiagram";
import { ContentPendingTag } from "../components/ContentPendingTag";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function SeoVsAeoPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="seo-vs-aeo" />
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-h1 lg:text-display text-ink">SEO vs. AEO</h1>
        <ContentPendingTag />
      </div>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        Some best practices only help classic organic ranking. Some only help AI citation. Most of the highest-leverage
        work sits in the overlap. This bucket list is a first pass — flagged for SME review, not final doctrine.
      </p>
      <VennDiagram />
    </div>
  );
}
