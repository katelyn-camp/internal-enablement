import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "not-the-audit", label: "This Isn't the Audit" },
  { id: "six-cs", label: "The Six Cs: Pre-Call Research" },
  { id: "is-this-a-fit", label: "Is This Even a Fit?" },
  { id: "building-a-hypothesis", label: "Building a Hypothesis, Not a Report" },
];

interface CEntry {
  c: string;
  question: string;
}

const SIX_CS: CEntry[] = [
  { c: "Customers", question: "Who buys from them, and how considered is that purchase? A high-consideration purchase (a mortgage, an ERP) is worth far more AI-search attention than an impulse buy." },
  { c: "Commercial model", question: "How do they make money, subscription, B2B pipeline, marketplace? The model changes which numbers (LTV:CAC, ACV, liquidity) they actually track." },
  { c: "Channels", question: "How do they acquire customers today: owned and organic, paid-heavy, partner-led, brand and influencer? That pattern predicts how exposed they already are to an AI-search shift." },
  { c: "Competition", question: "Is this a crowded category or one they already dominate? A near-monopoly cares about expansion; a crowded field cares about not losing more ground." },
  { c: "Catalysts", question: "What's changed recently, funding, a rebrand, a new competitor, and what happens if they do nothing about it? A catalyst with no real consequence isn't much of a catalyst." },
  { c: "Contact", question: "Who are you actually talking to, and what altitude do they think in? Match the pitch to a VP of Growth or a CMO, not a generic buyer." },
];

interface FitExample {
  company: string;
  verdict: "Fit" | "Pass";
  why: string;
}

const FIT_EXAMPLES: FitExample[] = [
  { company: "H&R Block", verdict: "Fit", why: "High-stakes, once-a-year decision with strong loyalty once won. Highly considered, worth investing to capture." },
  { company: "Liquid Death", verdict: "Pass", why: "Water is an impulse buy, not a researched purchase, no matter how good the brand's marketing is." },
  { company: "Mr. Cooper (mortgage servicing)", verdict: "Pass", why: "The end customer never chooses their servicer, it's decided between institutions. No consumer search behavior to win." },
  { company: "Carvana", verdict: "Fit", why: "Two-sided marketplace, high-consideration purchase, and multiple attachable products (financing, warranties) to build content around." },
];

export function M8ManualAuditMethodologySales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="not-the-audit">
        <SectionHeading>This Isn&rsquo;t the Audit</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Services runs a comprehensive, multi-hour manual audit before and after a sale. That&rsquo;s not this
          module. What a rep needs is a fast, directional pass that can be done before a first call, good enough to
          walk in with a real hypothesis instead of a generic pitch.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The old way of prepping for a call was a light background scan: a quick look at the blog, maybe recent
          funding news. The new bar is knowing the company and understanding the buyer well enough to have an
          actual point of view on how AI search is likely already affecting them, before they&rsquo;ve said a word
          about it.
        </p>
      </section>

      <section id="six-cs">
        <SectionHeading>The Six Cs: Pre-Call Research</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Six questions cover most of what&rsquo;s worth knowing before a call, all answerable from public sources
          in well under an hour.
        </p>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {SIX_CS.map((item) => (
            <li key={item.c} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.c}:</span> {item.question}
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          A quick, unlogged-in chat with an LLM (&ldquo;pretend you&rsquo;re a [persona] comparing X, Y, and Z, what would
          you ask and what would you be told?&rdquo;) is a fast way to color in Customers and Channels before a
          call, not authoritative data, but a reasonable first pass on a hypothesis worth pressure-testing live.
        </p>
      </section>

      <section id="is-this-a-fit">
        <SectionHeading>Is This Even a Fit?</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Not every logo is a services fit, no matter how big the brand or the budget. The single filter that
          matters most: is this a considered purchase, one where a buyer, or increasingly their agent, actually
          researches and compares before deciding? If not, there&rsquo;s rarely enough AI-search surface area to justify
          the investment, regardless of company size.
        </p>
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
          {FIT_EXAMPLES.map((item) => (
            <li key={item.company} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="font-semibold text-ink">{item.company}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold tracking-wide uppercase ${
                    item.verdict === "Fit" ? "bg-forest text-signal" : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {item.verdict}
                </span>
              </div>
              <p className="text-ink/75">{item.why}</p>
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Beyond consideration, a few other signals are worth reading together: is their marketing budget scaling
          or shrinking, are they already spending heavily on paid and feeling the pinch of rising costs, does their
          in-house team have an obvious capability gap in this space, and is there real room to expand the account
          later, or does their budget cap out at this one deal.
        </p>
      </section>

      <section id="building-a-hypothesis">
        <SectionHeading>Building a Hypothesis, Not a Report</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Experts have great answers. Sales reps have great questions. The point of doing this research isn&rsquo;t
          to walk in and prove you know their business better than they do, that lands badly and never should be the
          goal. It&rsquo;s to earn enough credibility, through outside-looking-in observations, to open up a real
          discovery conversation instead of a generic pitch.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The shape of it
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;From the outside, it looks like [specific, researched observation]. Is that something you&rsquo;re
            feeling internally too, and how are you thinking about it?&rdquo; State the hypothesis plainly, hold it
            loosely, and let their answer, not your slide, drive what comes next.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This connects directly to what comes later in the funnel: the applied project for this module is either a
          light opportunity-spotting pass on a real prospect&rsquo;s site to feed an actual discovery call, or
          annotating a prospect&rsquo;s headline visibility numbers into a talk track, not the comprehensive audit Services runs
          once a deal is underway.
        </p>
      </section>
    </div>
  );
}
