import { glossaryTerms } from "@/lib/glossary";
import { GlossaryClient } from "../components/glossary/GlossaryClient";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="glossary" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Glossary</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        Traditional SEO, AEO, and GEO terms in one searchable place. Every entry has a stable link — find a term,
        copy the URL, drop it in Slack.
      </p>
      <GlossaryClient terms={glossaryTerms} />
    </div>
  );
}
