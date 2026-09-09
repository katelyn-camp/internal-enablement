import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "why-this-comes-up", label: "Why This Comes Up in Every Deal" },
  { id: "same-journey-two-verdicts", label: "The Same Journey, Two Verdicts" },
  { id: "two-levels-of-roi", label: "Two Levels of ROI" },
  { id: "the-line-not-to-cross", label: "The Line Not to Cross" },
];

export function M7AttributionRoiSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="why-this-comes-up">
        <SectionHeading>Why This Comes Up in Every Deal</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A marketing leader&rsquo;s most uncomfortable relationship is usually with their own CFO, who controls the
          budget and asks one question above all others: &ldquo;what do I get if I give you more money?&rdquo; Paid
          media gets over-funded relative to everything else for one reason: it&rsquo;s the one channel where that
          question has a clean, provable answer. Every other channel, including AI search, is asking a CMO to trust
          a portfolio of bets they can&rsquo;t fully trace dollar for dollar.
        </p>
      </section>

      <section id="same-journey-two-verdicts">
        <SectionHeading>The Same Journey, Two Verdicts</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A client&rsquo;s own analytics can make the exact same buyer journey look decisive or completely
          invisible, depending only on which attribution model their Google Analytics property happens to run, not
          on anything that actually changed about the work.
        </p>
        <ul className="mb-4 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Last-touch</span> (the old default) gives all the credit to
            whatever happened right before conversion, usually a branded search or a direct visit, and zeroes out an
            AI-search answer someone read weeks earlier.
          </li>
          <li>
            <span className="font-medium text-ink">Data-driven</span> (GA4&rsquo;s current default) spreads
            credit algorithmically across the whole journey, which can surface real credit for that same AI-search
            touch, or very little, depending entirely on the account&rsquo;s own data.
          </li>
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          None of this needs to be computed by hand on a call. What&rsquo;s worth knowing is that a client&rsquo;s
          &ldquo;AI-search isn&rsquo;t driving anything&rdquo; conclusion is sometimes a real result and sometimes
          just a property still set to an attribution model that structurally can&rsquo;t see it. That&rsquo;s a
          one-question fix: ask which attribution model their property is running before accepting either verdict
          at face value.
        </p>
      </section>

      <section id="two-levels-of-roi">
        <SectionHeading>Two Levels of ROI</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          When a prospect asks for ROI, they&rsquo;re really asking two separate questions, and conflating them is
          where most overclaiming happens.
        </p>
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-line bg-paper-2 p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-ink px-3 py-1 text-caption font-medium tracking-wide text-paper uppercase">
              Level 1 · Action to visibility
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              Did the work move mention rate, citation rate, and share of voice? This is provable now, and
              it&rsquo;s the honest, defensible claim to lead with.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
              Level 2 · Visibility to business impact
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              Did that visibility actually turn into pipeline and revenue? Still being built out as a category, for
              AirOps and for everyone in it. Talk about the direction of the work, not a guaranteed number.
            </p>
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Selling Level 1 honestly is a strength, not a consolation prize: it&rsquo;s a claim that can actually be
          backed up in a monthly report. Promising Level 2 before the measurement exists to support it is the
          fastest way to lose credibility the moment a CFO asks to see the math.
        </p>
      </section>

      <section id="the-line-not-to-cross">
        <SectionHeading>The Line Not to Cross</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A CAC or LTV number is never the thing to lead with. A rep doesn&rsquo;t need to know an account&rsquo;s
          exact cost per lead, they need to know whether that account is close to its own target or far from it,
          since that gap is what determines how urgent an organic, non-paid channel actually looks to them.
        </p>
        <ul className="max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Ask what their CAC or payback-period target is, and how far off current performance sits from it.</li>
          <li>Ask whether paid performance is declining or getting more expensive, the single most common reason a CMO starts looking elsewhere.</li>
          <li>Never promise a specific revenue number tied to AI-search visibility. Promise the direction and the honesty of the measurement.</li>
        </ul>
      </section>
    </div>
  );
}
