import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "two-altitudes", label: "The Same Number, Two Altitudes" },
  { id: "know-who-you-are-talking-to", label: "Know Who You're Talking To" },
  { id: "deal-vocabulary", label: "Deal Vocabulary" },
  { id: "not-the-dashboard", label: "You Don't Have to Be the Dashboard" },
];

interface AltitudeRow {
  teamLevel: string;
  companyLevel: string;
  whyItTranslates: string;
}

const ALTITUDE_TABLE: AltitudeRow[] = [
  {
    teamLevel: "Citations",
    companyLevel: "Trusted market visibility",
    whyItTranslates: "A CMO doesn't want to hear \"we got cited,\" they want to know the brand is being treated as a trustworthy source, not just present.",
  },
  {
    teamLevel: "Rankings",
    companyLevel: "Buyer discoverability",
    whyItTranslates: "Ranking well doesn't guarantee the right people are finding the brand. Discoverability is the outcome a ranking is supposed to produce.",
  },
  {
    teamLevel: "Organic traffic",
    companyLevel: "Qualified demand",
    whyItTranslates: "Traffic volume on its own says nothing about whether it's the right traffic. Demand is the business-relevant version of the same number.",
  },
  {
    teamLevel: "AI mentions",
    companyLevel: "Accurate brand representation",
    whyItTranslates: "Being mentioned isn't the win if the mention gets the brand wrong. Representation is what a CMO is actually protecting.",
  },
  {
    teamLevel: "Content performance",
    companyLevel: "Pipeline and revenue impact",
    whyItTranslates: "The team-level metric is an input. The company-level version is the only one a CMO can defend to their own board or CFO.",
  },
];

export function M5ReadingTheNumbersSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="two-altitudes">
        <SectionHeading>The Same Number, Two Altitudes</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Mention rate, citation rate, and share of voice were already covered as metrics in Phase 1. The skill this
          module adds isn&rsquo;t a new metric, it&rsquo;s translation: the same number means something different
          depending on whether the person across the table thinks about their business at the team level or the
          company level. Bring a team-level metric to a company-level conversation and it reads as noise, even when
          the number itself is accurate and good news.
        </p>
        <div className="mb-2 flex justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-semibold tracking-wide text-ink/45 uppercase">
            <span aria-hidden>⇄</span> Scroll for more
          </span>
        </div>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Team-level number</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Company-level version</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why it needs translating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {ALTITUDE_TABLE.map((row) => (
                <tr key={row.teamLevel}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.teamLevel}</td>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.companyLevel}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyItTranslates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This doesn&rsquo;t mean the team-level number stops mattering. It means knowing which altitude the person
          in front of you actually owns, and pitching the number that altitude, not the one that&rsquo;s easiest to
          pull up on a dashboard.
        </p>
      </section>

      <section id="know-who-you-are-talking-to">
        <SectionHeading>Know Who You&rsquo;re Talking To</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The VP of Growth or Performance and the CMO aren&rsquo;t just two seniority levels of the same role. They
          answer for different things, and knowing which one is in the room changes which numbers are worth
          leading with.
        </p>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-line bg-paper-2 p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-ink px-3 py-1 text-caption font-semibold tracking-wide text-paper uppercase">
              VP of Growth / Performance
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              Owns efficient, measurable growth: CAC, conversion rate, pipeline contribution. Has to show their
              work, not just the answer, closer to a calculus test than a math test. Bring the team-level detail
              here.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-4">
            <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
              CMO
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              Owns the whole marketing organization&rsquo;s position and impact: where budget goes across brand,
              demand, and growth, and whether marketing&rsquo;s spend is defensible to the board and the CFO. Has
              to have the answer ready cold, closer to a math test than a calculus test. Bring the company-level
              translation here.
            </p>
          </div>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          The stakes for a CMO specifically are higher than they look. It&rsquo;s one of the most frequently
          replaced executive roles, in part because marketing is easy to frame as a cost center and hard to defend
          in purely tangible terms. Numbers that connect to revenue and pipeline aren&rsquo;t just persuasive to a
          CMO, they&rsquo;re personally protective.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          One more tell worth knowing: how a CMO came up. A CMO who rose through growth and performance already
          knows the team-level numbers cold and will expect you to speak fluently at that altitude too. A CMO who
          rose through brand or product marketing will lean harder on their VP of Growth for that detail, and will
          care more about how the brand is being represented than about the mechanics behind a single metric.
          Either way, don&rsquo;t assume the gap you&rsquo;re bridging is a knowledge gap. Assume it&rsquo;s an
          attention and priority gap, and every executive still has an ego about the side of the business they
          didn&rsquo;t come up through.
        </p>
      </section>

      <section id="deal-vocabulary">
        <SectionHeading>Deal Vocabulary</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          None of this requires becoming a marketing analyst. It requires never getting caught flat-footed by a
          term that comes up in nearly every conversation with this buyer.
        </p>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          <li className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">CAC (Customer Acquisition Cost):</span> what it costs to bring
            in one new customer. There&rsquo;s no universal &ldquo;good&rdquo; number, it depends entirely on what
            that customer is worth.
          </li>
          <li className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">LTV (Lifetime Value):</span> what a customer is worth over the
            life of the relationship. The ratio of LTV to CAC, not either number alone, is what tells you whether a
            channel is worth investing in.
          </li>
          <li className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Payback period:</span> how long it takes to earn back what was
            spent acquiring a customer. Under twelve months is a common best-in-class target, though it varies with
            deal size.
          </li>
          <li className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Qualified pipeline:</span> the company-level number a VP of
            Growth or CMO ultimately answers for. A team-level metric only matters once it can be connected to this.
          </li>
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          Mention rate, citation rate, and share of voice were defined in Phase 1 and aren&rsquo;t redefined here.
          This module is about where those metrics land once they leave the dashboard, not what they mean on their
          own.
        </p>
      </section>

      <section id="not-the-dashboard">
        <SectionHeading>You Don&rsquo;t Have to Be the Dashboard</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Diagnosing whether a specific number is trustworthy, checking prompt-set size, tool configuration, or
          attribution setup, is Services&rsquo; job, not a rep&rsquo;s. The bar here is narrower and more useful on
          a call: read a client&rsquo;s headline number, say plainly where it likely comes from, and translate it to
          the altitude the person in front of you owns.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            A CMO&rsquo;s own words
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;If I&rsquo;m asked right now about our cost per lead in a paid program, I&rsquo;m not going to
            dig through the ad console myself, I&rsquo;m going to ask the person on my team who owns that number.
            But I can tell you the distribution of what&rsquo;s coming in from one channel versus another, because
            that&rsquo;s what I&rsquo;m accountable for.&rdquo; Match that: know who on the account&rsquo;s side
            owns the team-level detail, and bring the company-level story to whoever&rsquo;s actually in front of
            you.
          </p>
        </div>
      </section>
    </div>
  );
}
