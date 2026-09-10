import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M7_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-it-matters", label: "Why Model Literacy Matters" },
  { id: "common-models", label: "Common Attribution Models" },
  { id: "worked-example", label: "Worked Example: One $500 Purchase" },
  { id: "ga-defaults", label: "What Google Analytics Defaults To" },
  { id: "airops-ga-pullthrough", label: "How AirOps Pulls In GA Conversions" },
];

interface AttributionModel {
  id: string;
  name: string;
  definition: string;
  weights: number[];
  note: string;
}

const MODELS: AttributionModel[] = [
  {
    id: "first-touch",
    name: "First-touch",
    definition: "100% of the credit goes to the very first touchpoint in the journey, no matter how many touches came after it.",
    weights: [1, 0, 0, 0, 0],
    note: "Answers “what got this buyer's attention in the first place.” Blind to everything that nurtured them afterward.",
  },
  {
    id: "last-touch",
    name: "Last-touch",
    definition: "100% of the credit goes to the final touchpoint immediately before conversion.",
    weights: [0, 0, 0, 0, 1],
    note: "Answers “what closed the deal.” Blind to everything that built the interest in the first place, including an AI-search answer read weeks earlier.",
  },
  {
    id: "linear",
    name: "Linear",
    definition: "Credit is split evenly across every touchpoint in the journey, the same amount no matter its position.",
    weights: [0.2, 0.2, 0.2, 0.2, 0.2],
    note: "Simple and fair-looking, but treats a passing ad impression the same as the touch that actually moved the buyer.",
  },
  {
    id: "time-decay",
    name: "Time-decay",
    definition: "Credit grows the closer a touchpoint sits to the conversion, using a decay curve. A common simplified version doubles the weight of each touch as it gets nearer to the close.",
    weights: [1 / 31, 2 / 31, 4 / 31, 8 / 31, 16 / 31],
    note: "Favors touches near the close. A reasonable default when the sales cycle is short and recency plausibly matters most.",
  },
  {
    id: "u-shaped",
    name: "U-shaped (position-based)",
    definition: "40% of the credit goes to the first touch, 40% to the last touch, and the remaining 20% is split evenly across everything in between.",
    weights: [0.4, 0.0667, 0.0666, 0.0667, 0.4],
    note: "Rewards the touch that created the opportunity and the one that closed it, while still leaving something for the middle of the journey.",
  },
  {
    id: "data-driven",
    name: "Data-driven",
    definition: "An algorithmic model, not a fixed rule. Machine learning looks at an account's own conversion and non-conversion paths and estimates how much each touchpoint actually increased the probability of converting, then splits credit accordingly.",
    weights: [0.1, 0.15, 0.1, 0.25, 0.4],
    note: "The weighting is unique to each account and even to each conversion path. The split shown here is just one illustrative example, a different account's data would produce a different split for this same five-touch journey. This is GA4's actual default, more on that next.",
  },
];

function ModelDiagram({ weights }: { weights: number[] }) {
  const positions = [60, 180, 300, 420, 540];
  const radius = (w: number) => 4 + w * 30;
  return (
    <svg viewBox="0 0 640 100" className="h-auto w-full max-w-md">
      <line x1={40} y1={45} x2={615} y2={45} className="stroke-line" strokeWidth={2} />
      {positions.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={45} r={radius(weights[i])} className="fill-forest" />
          <text x={x} y={80} textAnchor="middle" className="fill-ink/55 text-[11px] font-medium">
            {Math.round(weights[i] * 100)}%
          </text>
        </g>
      ))}
      <g>
        <rect x={590} y={25} width={38} height={38} rx={8} className="fill-signal" />
        <text x={609} y={50} textAnchor="middle" className="fill-forest text-[15px] font-bold">
          $
        </text>
      </g>
    </svg>
  );
}

const JOURNEY_TOUCHES = [
  ["Organic Search", "(blog post)"],
  ["Paid Social", "(retargeting ad)"],
  ["Email", "(nurture)"],
  ["AI Search", "(clicked a ChatGPT citation)"],
  ["Branded Search", "(converting click)"],
];

function JourneyDiagram() {
  const positions = [60, 180, 300, 420, 540];
  return (
    <svg viewBox="0 0 640 110" className="h-auto w-full">
      <line x1={40} y1={35} x2={615} y2={35} className="stroke-line" strokeWidth={2} />
      {positions.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={35} r={13} className="fill-forest" />
          <text x={x} y={40} textAnchor="middle" className="fill-signal text-[11px] font-medium">
            {i + 1}
          </text>
          {JOURNEY_TOUCHES[i].map((line, li) => (
            <text key={li} x={x} y={68 + li * 14} textAnchor="middle" className="fill-ink/60 text-[10px]">
              {line}
            </text>
          ))}
        </g>
      ))}
      <g>
        <rect x={591} y={16} width={38} height={38} rx={8} className="fill-signal" />
        <text x={610} y={41} textAnchor="middle" className="fill-forest text-[15px] font-bold">
          $
        </text>
        <text x={610} y={68} textAnchor="middle" className="fill-ink/60 text-[10px]">
          $500
        </text>
        <text x={610} y={82} textAnchor="middle" className="fill-ink/60 text-[10px]">
          purchase
        </text>
      </g>
    </svg>
  );
}

const TOUCH_COLUMN_LABELS = ["Organic", "Paid Social", "Email", "AI Search", "Branded Search"];

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
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-it-matters">
        <SectionHeading>Why Model Literacy Matters</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every conversion number a client shows you, whether it's in Google Analytics, a board deck, or a number
          AirOps surfaces, is the output of an{" "}
          <span className="font-medium text-ink">attribution model</span>, a rule for splitting credit for a
          conversion across the touchpoints that led to it. The same buyer journey can look completely different
          depending on which rule is applied: a channel that closed the deal can look either decisive or invisible
          purely because of how credit got sliced, not because of anything that actually changed about its
          performance.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          A buyer influenced by an AI-search answer almost never converts on that exact touch, they research, then
          come back later through a branded search or a direct visit. The model a client's analytics setup uses
          determines whether that earlier AI-search touch gets any credit at all. Before this module goes further,
          you need to know these models yourself.
        </p>
      </section>

      <section id="common-models">
        <SectionHeading>Common Attribution Models</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Each diagram below shows the same five-touch journey. Circle size is the share of credit that touch
          receives; the badge at the end is the conversion. The first five are conceptual models, fixed rules you
          can compute by hand, worth knowing because they show how differently a journey gets credited depending on
          the rule; the last, data-driven, is the algorithmic model most real GA4 accounts actually run on today.
          More on which of these GA4 still lets you actually select below.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {MODELS.map((model) => (
            <div key={model.id} className="rounded-card border border-line bg-white p-5">
              <h3 className="mb-1.5 text-base font-medium text-ink">{model.name}</h3>
              <p className="mb-3 text-sm leading-relaxed text-ink/70">{model.definition}</p>
              <ModelDiagram weights={model.weights} />
              <p className="mt-3 text-xs leading-relaxed text-ink/50 italic">{model.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="worked-example">
        <SectionHeading>Worked Example: One $500 Purchase, Five Ways</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Same buyer, same five touches, same $500 purchase. Only the attribution model changes, watch what happens
          to the AI-search touch (touch 4) across the row.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Touch 4 only exists in GA at all because the buyer clicked a citation link inside the ChatGPT answer,
          landing on the site through a referred session GA could log. Being mentioned or cited with no click leaves
          no session, no referrer, nothing for any GA-based attribution model, including data-driven, to work with.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <JourneyDiagram />
        </div>
        <div className="mb-3 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                  Model
                </th>
                {TOUCH_COLUMN_LABELS.map((label) => (
                  <th key={label} className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                    {label}
                  </th>
                ))}
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {MODELS.map((model) => {
                const dollars = model.weights.map((w) => w * 500);
                const total = dollars.reduce((sum, d) => sum + d, 0);
                return (
                  <tr key={model.id}>
                    <td className="px-3 py-3 align-top font-medium text-ink">{model.name}</td>
                    {dollars.map((d, i) => (
                      <td
                        key={i}
                        className={`px-3 py-3 align-top text-ink/75 ${i === 3 ? "font-medium text-ink" : ""}`}
                      >
                        ${d.toFixed(2)}
                      </td>
                    ))}
                    <td className="px-3 py-3 align-top text-ink/75">${total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section id="ga-defaults">
        <SectionHeading>What Google Analytics Defaults To</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The six models above are worth knowing conceptually, since they show how differently the same journey can
          get credited, but GA4&rsquo;s actual current options are narrower. <span className="font-medium text-ink">
          Data-driven</span> is the platform-wide default and the model most real GA4 accounts run on. First-click,
          linear, time-decay, and position-based (U-shaped) were deprecated by Google and are no longer selectable
          in GA4 as of November 2023, they&rsquo;re still useful mental models, just not switches you&rsquo;ll
          actually find in a client&rsquo;s Attribution Settings anymore. What a property can currently choose
          between is data-driven, Paid &amp; Organic Last Click, or Google Paid Channels Last Click.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The practical takeaway
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A GA4 "conversions" number is only meaningful once you know which model produced it. Data-driven
            attribution can quietly give real credit to an upper-funnel AI-search touch that last-click would have
            zeroed out entirely, or it can give that same touch almost nothing, depending on what the account's own
            data shows. There's no way to know which without checking the property's Attribution Settings.
          </p>
        </div>
      </section>

      <section id="airops-ga-pullthrough">
        <SectionHeading>How AirOps Pulls In GA Conversions</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          AirOps does not calculate its own attribution model. It pulls in whatever a client's Google Analytics
          instance already counts as a conversion, and that count is downstream of whichever attribution model the
          client has chosen for their own property. AirOps surfaces this at the page level, conversions by page, not
          by channel, so there is no "branded search" or "AI search" label in the view itself. The attribution model
          still decides which session gets the credit, it just shows up as credit on a page instead of a named
          channel.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          If a client is on GA4's data-driven default, the conversions AirOps surfaces already reflect that
          account-specific credit split spread across whichever pages those sessions touched. If a client has
          switched their property to last-click, the same $500 purchase from the worked example above would show up
          in AirOps entirely on whatever page hosted that final branded-search session, e.g. the product page the
          buyer landed on, and $0 on the blog post, the retargeting landing page, the email's linked page, or the
          page the AI-search citation sent the buyer to, even though nothing in the AirOps view names last-click as
          the reason.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The takeaway
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            The same buyer journey can make an AI-search investment look decisive or invisible in a client's own
            AirOps numbers, purely because of which attribution model their GA property happens to be set to, not
            because anything about the work changed. Before interpreting or presenting a client's GA-based
            conversion numbers, find out which attribution model their property is running.
          </p>
        </div>
      </section>

    </div>
  );
}
