import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M7_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-its-hard", label: "Why Attribution Is Hard Here" },
  { id: "the-valuation-ladder", label: "The Valuation Ladder" },
  { id: "building-the-estimate", label: "Building the Dollar-Value Estimate" },
  { id: "defending-the-number", label: "Defending the Number" },
  { id: "designing-a-holdout", label: "Designing a Holdout" },
  { id: "making-the-call", label: "The Bar for This Module" },
];

interface LadderRung {
  method: string;
  question: string;
  formula: string;
}

const LADDER: LadderRung[] = [
  {
    method: "1. Observed attribution (the floor)",
    question: "What pipeline or revenue can we directly trace to AI-originated visits or explicit AI research?",
    formula: "Deduplicated opportunity value with qualifying AI UTM/referrer evidence or explicit “how did you hear about us” evidence.",
  },
  {
    method: "2. Paid-comp replacement cost",
    question: "What would it cost to buy this same visibility footprint through paid ads instead?",
    formula: "Σ (prompt-volume estimate × mention rate × comparable paid CPM ÷ 1,000), summed per prompt cluster.",
  },
  {
    method: "3. Gross-up multiplier",
    question: "How much additional AI-influenced value likely sits above what's directly observed?",
    formula: "Observed attribution × a named, bounded, vertical-specific multiplier, never a universal one.",
  },
];

export function M7AttributionRoi() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m7-managed-services"
            title="Attribution & ROI"
            questions={M7_MANAGED_SERVICES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-its-hard">
        <SectionHeading>Why Attribution Is Hard Here</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A marketer can defend an AdWords line item to their own CFO because the chain is short: spend, click,
          landing page, tracked conversion. AI search rarely offers that chain. A buyer can be influenced by an
          answer they read in ChatGPT, form an opinion, and later arrive at the site through a branded search or a
          direct visit with no trackable link back to the AI answer at all. That's not a measurement bug to fix,
          it's the actual shape of how people research through AI systems.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The consequence: a brand can be spending real budget on AI-search visibility and have no equivalent of a
          cost-per-click number to point to when the spend gets questioned. Without a defensible dollar story,
          that line item reads as discretionary, exactly the kind of spend that gets cut first when budgets
          tighten, regardless of whether it's actually working.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The reframe this module teaches
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Because clean last-click attribution doesn't exist here, the ROI story has to be{" "}
            <span className="font-semibold text-ink">causal and estimated, not deterministic</span>. That's not a
            weaker story than AdWords' story, it's a different kind of story, one built from named assumptions,
            visible methodology, and a stated range instead of false precision. The goal isn't to manufacture a
            clean number, it's to make a defensible one.
          </p>
        </div>
      </section>

      <section id="the-valuation-ladder">
        <SectionHeading>The Valuation Ladder</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A dollar-value estimate is built from three methods, and the most common mistake is treating them as
          three competing guesses to average together. They aren't peers, they're a ladder: each one answers a
          different question, and only the first is built entirely from real evidence.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Method</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Question it answers</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">How it's built</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {LADDER.map((row) => (
                <tr key={row.method}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.method}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.question}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          Never add these three together into one blended total, and never average them. Present each with its own
          label so it's clear which part of the number is measured evidence, which is a market-price proxy, and
          which is a named, bounded assumption about what the floor misses.
        </p>
      </section>

      <section id="building-the-estimate">
        <SectionHeading>Building the Dollar-Value Estimate</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The paid-comp method (rung 2 on the ladder) is the one you'll build by hand most often, it's the
          AdWords-equivalent estimate: what would this visibility cost to buy as ads instead of earn. Here's the
          full worked chain for a single prompt cluster.
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Start with relevant prompt volume.</span> How often the
            underlying questions get asked in AI search, e.g. 500 relevant prompts/month for a cluster.
          </li>
          <li>
            <span className="font-semibold text-ink">Convert to answer events.</span> Multiply by days in the month
            and by however many AI platforms/engines are being tracked, e.g. 500 × 30 × ~8 engines ≈ 120,000 answer
            events/month.
          </li>
          <li>
            <span className="font-semibold text-ink">Apply the mention-rate lift.</span> The measured percentage-point
            increase in mention rate attributable to the work done, e.g. a +2 point lift.
          </li>
          <li>
            <span className="font-semibold text-ink">Calculate incremental branded impressions.</span> Answer events ×
            mention-rate lift, e.g. 120,000 × 2% = 2,400 incremental branded impressions/month.
          </li>
          <li>
            <span className="font-semibold text-ink">Convert to equivalent media value.</span> Incremental impressions
            ÷ 1,000 × comparable Google Ads CPM for the category, e.g. (2,400 / 1,000) × $60 ≈ $144/month for that
            one cluster.
          </li>
          <li>
            <span className="font-semibold text-ink">Scale across every relevant cluster.</span> One cluster in
            isolation looks small. Summed across an account's full relevant prompt set, this is what turns into a
            mid-five to low-six-figure monthly figure worth presenting.
          </li>
        </ol>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            What this number actually is
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A market-price proxy for the footprint, not proof of causation. A mention-rate lift changes this
            number mechanically, but on its own it doesn't prove the lift caused any business outcome. That claim
            requires the observed-attribution floor and, eventually, a holdout, not this calculation alone.
          </p>
        </div>
      </section>

      <section id="defending-the-number">
        <SectionHeading>Defending the Number</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every version of this estimate draws the same objection, in some form: <span className="italic">"this feels made up."</span> The
          instinct to defend the size of the number is the wrong response. The actual mitigation is structural.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Lead with methodology, not magnitude.</span> Show the formula
            and the inputs before the headline number. A stakeholder who can see prompt volume, mention rate, and
            CPM laid out separately can trace and defend the math to their own finance team; a single bolded
            dollar figure with no visible inputs cannot be defended by anyone.
          </li>
          <li>
            <span className="font-semibold text-ink">Source every input.</span> Mention rate comes from the platform.
            CPM comes from Google Ads. Say so explicitly, and be equally explicit about which inputs are measured
            versus modeled.
          </li>
          <li>
            <span className="font-semibold text-ink">Present a range, never one precise number.</span> A low/base/high
            estimate signals honest uncertainty; a single decimal-precise figure signals false confidence and
            invites exactly the scrutiny it can't survive.
          </li>
          <li>
            <span className="font-semibold text-ink">Don't add overlapping estimates together.</span> Different
            valuation methods, or different funnel-stage estimates, can genuinely overlap (the same buyer using AI
            at multiple stages of their decision). Stacking them into one bigger total double-counts the same
            value and is the fastest way to lose credibility once a sharp stakeholder notices.
          </li>
        </ul>
      </section>

      <section id="designing-a-holdout">
        <SectionHeading>Designing a Holdout</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A holdout is the only way to move from "here's a plausible dollar estimate" to "this specific
          intervention caused this specific outcome." It works by comparing a treatment group against a
          comparable, untouched control: optimized vs. non-optimized prompts, pages, topics, customer segments, or
          geographies, then reading whether the treatment group moved differently than the control.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Prerequisites before running one
          </span>
          <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/80">
            <li>A stable, established baseline, weeks of consistent measurement, not a freshly-onboarded account.</li>
            <li>Known coverage gaps in what's being measured, so a result isn't misread against a blind spot.</li>
            <li>Genuine confidence that the planned intervention can move the number at all, established through prior research, not hope.</li>
            <li>Treatment and control groups defined in advance, on a basis that's actually comparable (similar topic, similar segment, similar starting position).</li>
          </ul>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Launching before these hold isn't a harmless early attempt, it's actively worse than not testing at all.
          A holdout run against an unstable baseline can attribute ordinary measurement noise to the treatment,
          producing a confident-looking result that gets treated as proof when it isn't one. Wait for the
          prerequisites, or say plainly that the account isn't ready for a holdout yet.
        </p>
      </section>

      <section id="making-the-call">
        <SectionHeading>The Bar for This Module</SectionHeading>
        <div className="rounded-card border border-line bg-white p-5">
          <p className="text-sm leading-relaxed text-ink/80">
            Given an account's mention-rate lift and a comparable CPM, build the paid-comp dollar estimate by hand.
            Explain which rung of the valuation ladder any given number came from, and why it can't be added to the
            others. Field a "this feels made up" objection by pointing at methodology and a stated range, not by
            defending the size of the figure. And recognize when an account isn't ready for a holdout, rather than
            running one just because leadership wants a causal claim this quarter.
          </p>
        </div>
      </section>
    </div>
  );
}
