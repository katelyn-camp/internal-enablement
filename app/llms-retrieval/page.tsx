import { ComparisonToggle } from "../components/llms/ComparisonToggle";
import { CheckYourself } from "../components/llms/CheckYourself";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";
import { PageOutline } from "../components/nav/PageOutline";

const OUTLINE = [
  { id: "memory-vs-retrieval", label: "Memory vs. retrieval" },
  { id: "compare-surfaces", label: "Compare the surfaces" },
  { id: "citation-selection", label: "How citations get selected" },
  { id: "check-yourself", label: "Check yourself" },
];

export default function LlmsRetrievalPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14 xl:pr-[17rem]">
      <PageVisitTracker id="llms-retrieval" />
      <h1 className="font-display text-h1 lg:text-display mb-4 text-ink">LLMs &amp; Retrieval Mechanisms</h1>
      <p className="mb-6 text-sm leading-relaxed text-ink/70 lg:text-base">
        The single most useful mental model for an AEO conversation: some AI surfaces answer from memory, and some
        answer by looking things up live. Almost every &ldquo;why is our visibility inconsistent&rdquo; question
        traces back to which kind of surface you&rsquo;re looking at.
      </p>
      <PageOutline sections={OUTLINE} />

      <section id="memory-vs-retrieval" className="mb-12">
        <h2 className="font-display text-h2 mb-3 text-ink">Memory vs. retrieval</h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/80">
          A plain chatbot with no browsing enabled answers purely from patterns it learned during training — it has a
          knowledge cutoff date and no way to know about anything after it. An AI surface with retrieval enabled
          (Google&rsquo;s AI Overview, AI Mode, or a browsing-enabled chatbot) instead looks up current sources at the
          moment you ask, then generates an answer grounded in what it just retrieved.
        </p>
        <p className="text-sm leading-relaxed text-ink/80">
          This is why visibility can behave so differently across surfaces: a retrieval-based surface can reflect a
          page published an hour ago, while a memory-only chatbot won&rsquo;t reflect it until its next training run —
          which could be months away, and isn&rsquo;t something any amount of client-side optimization can speed up.
        </p>
      </section>

      <section id="compare-surfaces" className="mb-12">
        <h2 className="font-display text-h2 mb-4 text-ink">Compare the surfaces</h2>
        <ComparisonToggle />
      </section>

      <section id="citation-selection" className="mb-12">
        <h2 className="font-display text-h2 mb-3 text-ink">How citations actually get selected</h2>
        <p className="mb-3 text-sm leading-relaxed text-ink/80">
          There&rsquo;s no single fixed ranking a page climbs, the way there is in classic organic search. For any given
          prompt, a retrieval-based surface re-evaluates candidate sources on roughly the same handful of factors
          every time:
        </p>
        <ul className="ml-5 list-disc space-y-1.5 text-sm text-ink/80">
          <li>
            <span className="font-medium text-ink">Semantic relevance</span> — how closely the passage&rsquo;s meaning
            matches the query (or sub-query), not just keyword overlap.
          </li>
          <li>
            <span className="font-medium text-ink">Authority &amp; trust signals</span> — consistency across the web,
            being cited elsewhere, clear authorship.
          </li>
          <li>
            <span className="font-medium text-ink">Extractability</span> — whether the answer is stated as a clean,
            self-contained passage a model can lift confidently, versus buried in dense, cross-referential prose.
          </li>
          <li>
            <span className="font-medium text-ink">Freshness</span> — more or less important depending on the query;
            highly time-sensitive topics weight this more heavily.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          Because this is recomputed per query rather than held as a fixed position, the same page can be cited for
          one prompt phrasing and skipped for a very similar one — which is exactly why prompt tracking matters more
          in AEO than single-keyword rank tracking ever did.
        </p>
      </section>

      <section id="check-yourself">
        <h2 className="font-display text-h2 mb-2 text-ink">Check yourself</h2>
        <p className="mb-5 text-sm leading-relaxed text-ink/70">
          Four realistic client moments. Pick the response you&rsquo;d actually give — there&rsquo;s no score, just
          the reasoning either way.
        </p>
        <CheckYourself />
      </section>
    </div>
  );
}
