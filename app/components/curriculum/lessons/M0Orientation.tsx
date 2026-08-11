import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "why-now", label: "Why Now" },
  { id: "today-vs-headed", label: "Today vs. Headed" },
  { id: "role-by-role", label: "Role by Role" },
];

interface CompareRow {
  dimension: string;
  today: string;
  headed: string;
}

const TODAY_VS_HEADED: CompareRow[] = [
  {
    dimension: "What we sell",
    today: "Platform access: tasks, seats, usage-based subscription",
    headed: "An outcome program: AirOps owns the AEO/SEO strategy and the execution, delivered on our own platform",
  },
  {
    dimension: "Who buys it",
    today: "Marketing teams who want to run their own AEO/SEO/content operation, using our tool",
    headed:
      "“Own the outcome” buyers (hypergrowth startups building from scratch, and enterprises replacing agency spend) willing to pay for results, not tooling",
  },
  {
    dimension: "What we're paid for",
    today: "Access to the platform, regardless of what the customer does with it",
    headed:
      "Citations, share of voice, and, over time, revenue attribution. Platform access is the delivery mechanism, not the product",
  },
  {
    dimension: "Who owns the outcome",
    today: "The customer. We enable; they execute and are accountable for results",
    headed: "We do. Success and renewal are tied to whether the customer's visibility actually improves",
  },
  {
    dimension: "How the org is shaped",
    today:
      "Siloed by function: content/SEO, offsite, analytics, community each sit separately, often with no single owner of “AEO” inside the customer's org or inside ours",
    headed:
      "Moving toward a single-threaded delivery pod per engagement: one team owns strategy, execution, and reporting together instead of the work being split across silos",
  },
  {
    dimension: "Customer-facing roles",
    today: "AE sells the platform; Solutions Architect / Strategic AM help the customer get value from the tool they bought",
    headed: "A pod: Engagement Manager (relationship/cadence), AEO/SEO Strategist (strategy/QA), Solutions Architect (build), Offsite Lead (placements)",
  },
  {
    dimension: "How we measure success",
    today: "Platform adoption, task/seat expansion, net revenue retention",
    headed: "Mention rate, citation rate, share of voice, and eventually revenue lift, tracked monthly against a defined baseline",
  },
  {
    dimension: "Cost structure",
    today: "Low variable cost: software margins, delivery effort is the customer's problem",
    headed:
      "Real delivery cost (~39% of revenue across the pod); margin is protected by productizing the playbook and automating manual delivery work, not by keeping headcount flat",
  },
];

interface RoleRow {
  label: string;
  today: string;
  headed: string;
}

const AE_ROWS: RoleRow[] = [
  {
    label: "Sells",
    today: "Platform subscription, end-to-end",
    headed: "Pre-qualifies and routes managed-services leads to a specialist team. Sells a productized services offer.",
  },
  {
    label: "Owns",
    today: "The full platform deal cycle",
    headed: "The full services motion",
  },
  {
    label: "New skill needed",
    today: "N/A",
    headed: "Qualifying “Us x Them” fit, positioning services inside the AirOps narrative, running a three-part strategy readout instead of a standard demo",
  },
];

const SA_ROWS: RoleRow[] = [
  {
    label: "Faces",
    today: "The customer directly: helps them build in the platform",
    headed: "Mostly internal-facing: builds and executes for the client as part of a delivery pod",
  },
  {
    label: "Owns",
    today: "Enablement of the customer's own team",
    headed: "Campaign build, analytics setup, and performance reporting inside a specific paid engagement",
  },
  {
    label: "Works with",
    today: "Whoever on the customer side is using the tool",
    headed: "A fixed pairing with an Engagement Manager and AEO Strategist on each account",
  },
];

const SAM_ROWS: RoleRow[] = [
  {
    label: "Owns",
    today: "A bit of everything for the account: relationship, some strategy, renewal, escalation",
    headed: "Client cadence, delivery timelines, and the reporting narrative: the primary day-to-day owner of a managed account",
  },
  {
    label: "Works with",
    today: "The client, largely on their own, without a fixed internal pairing",
    headed: "A fixed pairing with an AEO Strategist and Solutions Architect on each account, alongside the client relationship",
  },
];

const AEO_STRATEGIST_ROWS: RoleRow[] = [
  {
    label: "Owns",
    today: "--",
    headed: "Strategy, measurement framework, QA sign-off, and the “point of view” the customer is paying for",
  },
  {
    label: "Works with",
    today: "--",
    headed: "A fixed pairing with a Solutions Architect and an Engagement Manager on each account",
  },
];

function TodayHeadedTable() {
  return (
    <div className="overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-paper-2">
            <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Dimension</th>
            <th className="w-[37.5%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Today</th>
            <th className="w-[37.5%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Headed</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {TODAY_VS_HEADED.map((row) => (
            <tr key={row.dimension}>
              <td className="px-3 py-3 align-top font-semibold text-ink">{row.dimension}</td>
              <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.today}</td>
              <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.headed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoleTable({ rows }: { rows: RoleRow[] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="bg-paper-2">
            <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase"></th>
            <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Today</th>
            <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Headed</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-3 py-3 align-top font-semibold text-ink">{row.label}</td>
              <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.today}</td>
              <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.headed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const WHY_NOW = [
  {
    lead: "The buyer changed.",
    rest: "Our market has split into three groups: “AI-native” builders who'll never buy services (not our ICP), the “needs tools” segment we've always served, and a growing “own the outcome” segment (hypergrowth startups and enterprises replacing legacy agency spend) who want to pay someone to own the result, not just license a tool.",
  },
  {
    lead: "The economics are materially better.",
    rest: "Managed engagements are showing 4–6x ACV expansion over platform-only deals.",
  },
  {
    lead: "The guardrail:",
    rest: "leadership has been explicit that this must stay a platform business, not a staffing agency: margin depends on productizing delivery, not hiring linearly with deals. That constraint shapes almost every role decision below.",
  },
];

export function M0Orientation() {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="mb-2 font-display text-h2 text-ink">AirOps Today vs. Where We&rsquo;re Headed</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/60 italic">
          A framework for understanding the managed services shift, and what it means for your role.
        </p>
      </header>

      <section>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-line bg-paper-2 p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-ink px-3 py-1 text-caption font-semibold tracking-wide text-paper uppercase">
              Today
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              We sell a platform. Customers use it to run their own AEO/SEO engine.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
              Headed
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              We sell outcomes. We run the AEO/SEO engine <em>for</em> the customer, on our own platform, and get paid
              for the result, not just the seat.
            </p>
          </div>
        </div>
        <p className="text-sm text-ink/50 italic">Everything below is a compare/contrast on that one shift.</p>
      </section>

      <PageOutline sections={OUTLINE} />

      <section id="why-now">
        <SectionHeading>Why now</SectionHeading>
        <ul className="space-y-2">
          {WHY_NOW.map((item) => (
            <li key={item.lead} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.lead}</span> {item.rest}
            </li>
          ))}
        </ul>
      </section>

      <section id="today-vs-headed">
        <SectionHeading>What We Are Today → Where We&rsquo;re Headed</SectionHeading>
        <TodayHeadedTable />
      </section>

      <section id="role-by-role">
        <SectionHeading>Side-by-Side, Role by Role</SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="mb-2 font-display text-h3 text-ink">Account Executive (AE)</h3>
            <RoleTable rows={AE_ROWS} />
          </div>
          <div>
            <h3 className="mb-2 font-display text-h3 text-ink">Solutions Architect (SA)</h3>
            <RoleTable rows={SA_ROWS} />
          </div>
          <div>
            <h3 className="mb-2 font-display text-h3 text-ink">Engagement Manager</h3>
            <RoleTable rows={SAM_ROWS} />
          </div>
          <div>
            <h3 className="mb-2 font-display text-h3 text-ink">AEO/SEO Strategist</h3>
            <RoleTable rows={AEO_STRATEGIST_ROWS} />
          </div>
        </div>
      </section>

      <p className="border-l-2 border-line pl-4 text-sm text-ink/50 italic">
        Use this doc as the spine; the role-by-role table above is the piece most people will actually read closely,
        so it&rsquo;s worth the most polish when this goes into slides.
      </p>
    </div>
  );
}
