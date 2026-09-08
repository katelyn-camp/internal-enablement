import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "goal-first", label: "Business Goal First, Tactic Second" },
  { id: "the-talk-track", label: "Refresh vs. Net-New, as a Talk Track" },
  { id: "beyond-owned-content", label: "Owned Content Is One Piece of the Mix" },
  { id: "sizing-the-chef", label: "Sizing the Chef, Not Picking a Menu Item" },
  { id: "qualifying-questions", label: "Qualifying Questions" },
];

interface MoveRow {
  move: string;
  pitchAs: string;
}

const TALK_TRACK: MoveRow[] = [
  {
    move: "Refresh",
    pitchAs: "The faster path to proof. It uses equity the account already paid for, existing links, existing rank, existing familiarity, instead of starting at zero. Lower risk, often the first recommendation worth making.",
  },
  {
    move: "Net-new",
    pitchAs: "Only worth proposing once a real gap is confirmed, not just a page that could be better. Selling net-new before confirming the gap is the fastest way to look like you're pitching a tactic instead of solving a problem.",
  },
  {
    move: "Consolidate",
    pitchAs: "The cheapest win in the room: no new budget, no new writing, just pointing two competing pages at one. An easy, low-risk way to prove value early in an engagement.",
  },
];

export function M6ContentStrategyLifecycleSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="goal-first">
        <SectionHeading>Business Goal First, Tactic Second</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The single most common mistake in a content pitch is proposing a tactic before knowing what the business
          is actually trying to do. A rebrand, a category expansion, and a defense against a competitor eating your
          share all call for a completely different content plan, even on the exact same website.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Ask this before proposing anything
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Is the goal to be known for something new, or to win more of what you&rsquo;re already known for?&rdquo;
            A brand expanding into an adjacent category needs coverage that doesn&rsquo;t exist yet, closer to
            net-new. A brand trying to hold ground it already owns needs its existing pages sharper and better
            linked, closer to refresh.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This is also the discovery-call version of the audit Services runs later: map what a company is known
          for today, then find where the gap is between that and where they say they&rsquo;re trying to go.
        </p>
      </section>

      <section id="the-talk-track">
        <SectionHeading>Refresh vs. Net-New, as a Talk Track</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Once the goal is clear, here are the three moves, and how to pitch each one in a way a CMO can defend to
          their own leadership.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Move</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">How to pitch it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TALK_TRACK.map((row) => (
                <tr key={row.move}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.move}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.pitchAs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Refresh-first is also a proof point worth having ready: real accounts have seen traffic and AI-visibility
          gains within days of a refresh pass, with no new content published at all. That&rsquo;s a much easier
          number to promise on a first call than the results of a net-new content plan that hasn&rsquo;t started
          yet.
        </p>
      </section>

      <section id="beyond-owned-content">
        <SectionHeading>Owned Content Is One Piece of the Mix</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Refresh, net-new, and consolidate are moves for Owned Content. The same business goal also decides what
          belongs in the other four channels of the bespoke channel mix: External Content, Paid (AI ads), Social
          &amp; Influencer, and Community.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            How the goal becomes a channel mix
          </span>
          <ol className="list-outside list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/80">
            <li>Audit against the stated goal.</li>
            <li>
              If the goal is being recommended more often, the audit surfaces what the account is currently being
              recommended for, the sentiment of those recommendations, who&rsquo;s being recommended instead, and
              what those competitors are doing differently.
            </li>
            <li>
              The audit also maps every external property where the account should be mentioned and isn&rsquo;t, or
              is mentioned incorrectly.
            </li>
            <li>
              From there, the content strategy targets the properties that are already being cited, not just
              publishing more content in general.
            </li>
          </ol>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Owned Content stays part of the talk track under every goal. External Content, Paid, Social &amp;
          Influencer, and Community are what get added or dropped depending on what the audit finds.
        </p>
      </section>

      <section id="sizing-the-chef">
        <SectionHeading>Sizing the Chef, Not Picking a Menu Item</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The old platform pitch sold a menu: net-new content or a content refresh, as a SKU. Services doesn&rsquo;t
          sell a menu, it sends a chef who looks at what&rsquo;s already in the kitchen, the resources, the goals,
          the constraints, and cooks from there. That&rsquo;s the frame to carry into any content conversation:
          the size and shape of the work depends on the account, not on a fixed package.
        </p>
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          What changes that size is the same handful of signals scoping already looks at:
        </p>
        <ul className="mb-4 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>How many product lines or personas need coverage.</li>
          <li>How competitive the target space is.</li>
          <li>
            How complex the org is to work with, a single approver moves faster than a company where every page
            needs five sign-offs.
          </li>
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          None of that needs to be quoted on a discovery call. It just explains why two accounts asking for
          &ldquo;the same thing&rdquo; can turn into very different-sized engagements.
        </p>
      </section>

      <section id="qualifying-questions">
        <SectionHeading>Qualifying Questions</SectionHeading>
        <ul className="max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Is the goal to defend a category you already own, or break into one you don&rsquo;t yet?</li>
          <li>Do you already have pages that touch this topic, even loosely, or would this be starting from zero?</li>
          <li>What would you need to see in the first 90 days to call this worth continuing?</li>
        </ul>
      </section>
    </div>
  );
}
