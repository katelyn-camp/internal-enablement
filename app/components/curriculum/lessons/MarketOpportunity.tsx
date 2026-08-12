/** Written in leadership's own voice (first person), not as third-party notes about what leadership said. */

const CORE_OPPORTUNITY = [
  "The old framing (an AI search/AEO tool) caps us at roughly **$400M ARR** across the whole category.",
  "Managed services moves us into **marketing program spend**, a far bigger budget pool than software. In consumer financial services alone: **$110B in annual spend**, with an estimated **$20–21B** we could influence.",
];

const WHY_MANAGED_SERVICES_MATTERS = [
  "Customers want a partner that can **own outcomes through platform, people, and data**, not just hand over a tool.",
  "This **fully managed services strategy for AI search** is the right direction, and the board agrees.",
  "Marketers now need help serving **both the human buyer and the AI agent**. We want to be that partner.",
];

const WHAT_CHANGES_COMMERCIALLY = [
  "We stop being evaluated like **one tool in a marketer's stack** and become a **strategic growth advisor to the CMO**.",
  "That earns us **bigger budgets**: services and strategic programs simply command more than software.",
  "This moves us from a product an IC buys to a relationship **senior marketing leadership owns**.",
];

const WHAT_CHANGES_IN_THE_OFFERING = [
  "We now cover more of the ecosystem: **analytics, strategy, onsite, offsite earned media, generative ads**, plus partner-led channels like influencer, social, and community.",
  "Owning more channels means better **retention and expansion**: spend can shift between channels as the market moves, instead of leaving with it.",
];

/**
 * Proportional-area circles: radius scales with sqrt(value) so the circle's AREA, not its
 * radius, represents the dollar figure. $20-21B is drawn nested inside $110B since it's
 * literally described as a slice of that pool; $400M is a separate, unrelated ceiling from
 * the old framing, so it's drawn apart rather than nested.
 */
const OPPORTUNITY_VIEWBOX = { width: 520, height: 340 };
const TOTAL_SPEND_CIRCLE = { cx: 170, cy: 170, r: 140 }; // $110B
const ADDRESSABLE_CIRCLE = { cx: 170, cy: 170, r: 60.44 }; // $20.5B midpoint of $20-21B
const OLD_CEILING_CIRCLE = { cx: 430, cy: 290, r: 8.44 }; // $400M

/** Renders `**bold**` markers inline, since the source bullets carry their own emphasis. */
function BoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Converts a viewBox coordinate to a CSS percentage, so HTML labels line up with the scaled SVG. */
function toPct(value: number, total: number): string {
  return `${(value / total) * 100}%`;
}

function OpportunityCircles() {
  const { width, height } = OPPORTUNITY_VIEWBOX;
  return (
    <div className="relative mx-auto mb-8 max-w-xl">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Old $400M ceiling compared against the $110B marketing-spend opportunity and its $20 to 21 billion addressable slice, sized by area">
        <circle
          cx={TOTAL_SPEND_CIRCLE.cx}
          cy={TOTAL_SPEND_CIRCLE.cy}
          r={TOTAL_SPEND_CIRCLE.r}
          fill="#002912"
          fillOpacity={0.07}
          stroke="#002912"
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
        <circle cx={ADDRESSABLE_CIRCLE.cx} cy={ADDRESSABLE_CIRCLE.cy} r={ADDRESSABLE_CIRCLE.r} fill="#002912" fillOpacity={0.9} />
        <circle cx={OLD_CEILING_CIRCLE.cx} cy={OLD_CEILING_CIRCLE.cy} r={OLD_CEILING_CIRCLE.r} fill="#1D1B19" fillOpacity={0.55} />
        <line
          x1={OLD_CEILING_CIRCLE.cx}
          y1={OLD_CEILING_CIRCLE.cy - OLD_CEILING_CIRCLE.r - 26}
          x2={OLD_CEILING_CIRCLE.cx}
          y2={OLD_CEILING_CIRCLE.cy - OLD_CEILING_CIRCLE.r}
          stroke="#1D1B19"
          strokeOpacity={0.3}
          strokeWidth={1}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute w-36 -translate-x-1/2 text-center"
          style={{ left: toPct(TOTAL_SPEND_CIRCLE.cx, width), top: toPct(32, height) }}
        >
          <div className="font-display text-h3 text-ink">$110B</div>
          <div className="mt-0.5 text-[0.65rem] leading-snug text-ink/60">
            Annual marketing spend, consumer financial services alone
          </div>
        </div>

        <div
          className="absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: toPct(ADDRESSABLE_CIRCLE.cx, width), top: toPct(ADDRESSABLE_CIRCLE.cy, height) }}
        >
          <div className="font-display text-h3 text-signal">$20–21B</div>
          <div className="mt-0.5 text-[0.65rem] leading-snug text-paper/85">Market Opportunity for Managed Services</div>
        </div>

        <div
          className="absolute w-36 -translate-x-1/2 text-center"
          style={{ left: toPct(OLD_CEILING_CIRCLE.cx, width), top: toPct(OLD_CEILING_CIRCLE.cy - OLD_CEILING_CIRCLE.r - 78, height) }}
        >
          <div className="font-display text-h3 text-ink">$400M ARR</div>
          <div className="mt-0.5 text-[0.65rem] leading-snug text-ink/60">Old ceiling: an AI search / AEO tool</div>
        </div>
      </div>

      <p className="mt-2 text-center text-[0.65rem] text-ink/40">
        Circle area is proportional to dollar value, not radius, so the size difference above reflects the real
        scale gap.
      </p>
    </div>
  );
}

function OpportunitySection({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-card border border-line bg-paper-2 p-4">
      <div className="mb-2 text-sm font-semibold text-ink">{title}</div>
      <ul className="list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed text-ink/75">
        {bullets.map((b, i) => (
          <li key={i}>
            <BoldText text={b} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketOpportunity() {
  return (
    <div>
      <OpportunityCircles />

      <div className="grid gap-4 sm:grid-cols-2">
        <OpportunitySection title="Core Opportunity" bullets={CORE_OPPORTUNITY} />
        <OpportunitySection title="Why Managed Services Matters" bullets={WHY_MANAGED_SERVICES_MATTERS} />
        <OpportunitySection title="What Changes Commercially" bullets={WHAT_CHANGES_COMMERCIALLY} />
        <OpportunitySection title="What Changes in the Offering" bullets={WHAT_CHANGES_IN_THE_OFFERING} />
      </div>
    </div>
  );
}
