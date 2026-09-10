import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M5_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "the-tool-map", label: "The Tool Map" },
  { id: "reading-patterns", label: "Reading the Pattern, Not Just the Number" },
  { id: "number-to-outcome", label: "From Number to Outcome" },
  { id: "validating-a-number", label: "Validating a Suspicious Number" },
];

interface MetricPattern {
  pattern: string;
  meansThat: string;
  hypotheses: string[];
  lookAt: string;
}

const METRIC_PATTERNS: MetricPattern[] = [
  {
    pattern: "High mention rate, low citation rate",
    meansThat:
      "The model names the brand often, but rarely also retrieves and links a specific page when it does. Whether that's actually a problem depends on the intent behind those mentions.",
    hypotheses: [
      "The model is naming the brand from its own general knowledge rather than a live retrieval, so no page is in the loop to cite",
      "No content exists yet for the specific fanned-out sub-queries driving those mentions, a coverage gap, not a structure gap",
      "Content exists but isn't structured for extraction (self-contained chunks, direct-answer framing)",
      "The driving prompts are navigational or definitional intent, where being named is the win and a citation was never likely",
    ],
    lookAt: "Whether owned content exists at all for the specific sub-queries behind those mentions before assuming it's a structure problem, and what intent those prompts actually are.",
  },
  {
    pattern: "High citation rate, low mention rate",
    meansThat:
      "The brand is getting cited, but in a narrow subset of responses, and named infrequently even where it is. Check whether the cited answers mostly do name the brand or mostly don't before assuming either explanation.",
    hypotheses: [
      "The tracked prompt set is small or narrow, so \"rare mention\" may be a sampling artifact, not a real footprint",
      "Weak general brand recognition: the model only says the name when a live retrieval forces it to, and doesn't reliably know the brand exists outside of one",
      "Citation without attribution: the model sources claims to the brand's page but never names the brand, a framing/branding gap rather than a recognition gap",
      "Content genuinely is narrow: winning a handful of specific prompts, invisible elsewhere",
    ],
    lookAt: "The size and breadth of the tracked prompt set first, then whether the cited answers actually name the brand or just link it, before calling this a brand-recognition gap or a content-breadth gap.",
  },
  {
    pattern: "Share of voice rising, average position drifting worse",
    meansThat:
      "The brand is appearing more often but ranking lower within the answer when it does.",
    hypotheses: [
      "The tracked prompt set grew to include prompts where the brand is a weaker fit, pulling position down with no content change at all",
      "A competitor got more aggressive on the same prompts and displaced the brand, independent of anything the brand did",
      "Direct-answer framing or structural citability genuinely weakened",
    ],
    lookAt: "Whether the prompt set changed or a competitor moved before assuming the brand's own content got worse.",
  },
  {
    pattern: "Citation count rising, citation rate and share flat",
    meansThat:
      "Often indicates the tracked prompt set grew. More tracked questions mechanically produces more raw citations without any change in the account's real footprint.",
    hypotheses: [
      "New prompts were added to the tracked set (by far the most common driver)",
      "A tracked AI platform started answering more often or more verbosely for the same prompts, a platform-side change, not an account-side one",
    ],
    lookAt: "Whether prompts were added recently. Re-read the trend on rate or share only, the count isn't telling you anything on its own.",
  },
  {
    pattern: "GSC ranking improving, GA4 organic traffic flat or falling",
    meansThat:
      "A SERP feature intercepting the click before it reaches the site is the classic read, but it isn't the only one.",
    hypotheses: [
      "An AI Overview, featured snippet, or other SERP feature is intercepting the click above the listing",
      "Underlying search demand for the query dropped, fewer searches happening at all, independent of rank",
      "A GA4 tracking or consent-mode change is undercounting real traffic, a measurement break, not a real SERP effect",
    ],
    lookAt: "Click-through rate and what's occupying the SERP above the listing, but also query-level search volume and whether GA4's tracking setup changed.",
  },
  {
    pattern: "GA4 traffic rising, conversion rate flat or falling",
    meansThat:
      "More visitors are arriving, but that doesn't automatically mean something is broken. Whether it's a problem depends on what that traffic was supposed to do.",
    hypotheses: [
      "Traffic-source intent doesn't match the page's calls to action",
      "The new traffic is deliberately top-of-funnel or awareness content, a lower conversion rate here is expected, not a problem",
      "The conversion event itself is broken or misconfigured, check this before crediting or blaming the traffic",
    ],
    lookAt: "Traffic-source intent match and the page's calls to action, and whether the conversion event is actually configured and firing.",
  },
  {
    pattern: "GA4 traffic and GSC ranking healthy, but mention rate and citation rate near zero",
    meansThat:
      "Classic search and AI search are being read as if they're the same channel. Winning one doesn't automatically transfer to the other.",
    hypotheses: [
      "Content is JS-render-blind to AI crawlers even though Googlebot renders it fine, a tier-1 crawlability gap, not a demand gap",
      "robots.txt or a CDN rule blocks GPTBot, ClaudeBot, or PerplexityBot specifically while still allowing Googlebot",
      "The tracked AI-visibility prompt set doesn't actually map to the queries driving that GA4/GSC traffic, an apples-to-oranges comparison",
      "The topic space just doesn't trigger AI-search retrieval much yet, an early-stage category for AI answers specifically",
    ],
    lookAt: "Whether AI crawlers can actually reach and read the page before anything else, then whether the tracked prompt set overlaps with the queries actually driving the traffic.",
  },
  {
    pattern: "Strong classic ranking and backlink profile, but a competitor gets cited in the AI answer instead",
    meansThat:
      "Classic-SEO authority signals don't transfer directly to AI citation. A page can out-rank a competitor on Google while still losing the citation to that same competitor inside an AI answer.",
    hypotheses: [
      "The page answers the literal query well but not the broader fanned-out cluster of sub-queries the AI system decomposes it into",
      "The page ranks on backlinks and domain authority but isn't structured for extraction, losing the \"easier to lift\" contest to a cleaner competitor page",
      "The competitor's off-site presence (reviews, forums, trade press) is stronger even with a weaker on-site profile, since corroboration is judged independently of on-site ranking signals",
    ],
    lookAt: "The competitor's actual cited passage, the brand's own structural citability and prompt-cluster coverage, and the competitor's off-site footprint, not the backlink profile.",
  },
  {
    pattern: "Good rankings and healthy traffic, but sentiment is negative when the brand is mentioned",
    meansThat:
      "A dimension classic SEO tools can't see at all. Ranking and traffic measure whether the brand shows up, not how it's described when it does.",
    hypotheses: [
      "Genuinely negative context, a real product or service issue being reflected back, not a measurement error",
      "Off-site content (a bad review thread, an outdated comparison, a recurring complaint) is shaping how the model frames the brand",
      "A single loud, negative source is being over-weighted because there's little else to counterbalance it",
    ],
    lookAt: "The specific answers driving the negative sentiment, not just the score, and whether it traces to something real and fixable or to one skewed source.",
  },
];

interface ToolRow {
  tool: string;
  measures: string;
  measuresLead?: string;
  cantTellYou: string;
  cantTellYouLead?: string;
}

const TOOL_MAP: ToolRow[] = [
  {
    tool: "Google Search Console (GSC)",
    measures:
      "Authoritative first-party Google search data for classic organic search: which queries actually trigger your pages, clicks, impressions, CTR, and average position, straight from Google, not modeled.",
    measuresLead: "Authoritative first-party Google search data",
    cantTellYou:
      "Scoped only to the domain connected to this property, and can't tell an impression from being cited in an AI Overview apart from an impression from a normal listing, both count the same. It also has real limitations of its own: row limits on exports, privacy filtering that omits low-volume queries, and a roughly two-day data-freshness lag.",
  },
  {
    tool: "Semrush / Ahrefs",
    measures:
      "Third-party competitive intelligence: what keywords competitors rank for, estimated search volume, keyword difficulty, backlink profiles, market-opportunity sizing.",
    measuresLead: "Third-party competitive intelligence",
    cantTellYou:
      "What actually happened on any real site. Volume and difficulty are modeled estimates from a crawled panel, not measured traffic. Both now offer AI-visibility features too, but as third-party, modeled datasets with their own prompt sets, platform coverage, and methodology, not necessarily measuring the same prompt universe as AirOps Insights.",
    cantTellYouLead: "What actually happened on any real site",
  },
  {
    tool: "GA4",
    measures:
      "What actually happened on the site: sessions, users, engagement time and rate, conversions, revenue, segmentable by source/medium, including AI referral sources like ChatGPT and Perplexity.",
    measuresLead: "What actually happened on the site",
    cantTellYou:
      "Why you rank or get cited. GA4 measures downstream outcome only, and every number it reports is only as trustworthy as the event and conversion configuration behind it.",
    cantTellYouLead: "Why you rank or get cited",
  },
  {
    tool: "AirOps Insights (Visibility + Citations)",
    measures:
      "The AI-search layer: mention rate, share of voice, average position, citation rate, citation share, and influence score, all built from prompts run against tracked AI models.",
    measuresLead: "The AI-search layer",
    cantTellYou:
      "Anything outside your tracked prompt set. It's a probabilistic sample of AI answers to the questions you chose to track, not a census of everything AI models say about the brand.",
    cantTellYouLead: "Anything outside your tracked prompt set",
  },
];

function withBoldLead({ text, lead }: { text: string; lead?: string }) {
  if (!lead || !text.startsWith(lead)) return text;
  return (
    <>
      <span className="font-medium text-ink">{lead}</span>
      {text.slice(lead.length)}
    </>
  );
}

export function M5ReadingTheNumbers() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m5-managed-services"
            title="Reading the Numbers: Dashboards, Tools & Data"
            questions={M5_MANAGED_SERVICES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="the-tool-map">
        <SectionHeading>The Tool Map</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A single account review can pull numbers from four different sources, and each one measures a different
          layer of reality: what Google itself says is happening, what a third-party tool estimates about the
          competitive landscape, what actually happened on the site, and what AI models say about the brand when
          asked.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Source</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it actually measures</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it can't tell you</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TOOL_MAP.map((row) => (
                <tr key={row.tool}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.tool}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                    {withBoldLead({ text: row.measures, lead: row.measuresLead })}
                  </td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                    {withBoldLead({ text: row.cantTellYou, lead: row.cantTellYouLead })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Reading all four together
          </span>
          <p className="mb-3 text-sm leading-relaxed text-ink/80">
            Each of the four contributes something the others don&rsquo;t:
          </p>
          <ul className="mb-3 list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/80">
            <li>
              <span className="font-medium text-ink">GSC + GA4:</span> pre-click versus post-click, what Google
              shows against what actually happens once someone lands.
            </li>
            <li>
              <span className="font-medium text-ink">Semrush / Ahrefs:</span> the competitive frame neither GSC
              nor GA4 has on its own, whether an opportunity is even sized right, or a competitor is already
              winning it.
            </li>
            <li>
              <span className="font-medium text-ink">AirOps Insights:</span> the layer none of the other three
              fully reach, what AI models say about the brand in generated answers, including mentions that never
              produce a GSC impression or a GA4 session at all.
            </li>
          </ul>
        </div>
      </section>

      <section id="reading-patterns">
        <SectionHeading>Reading the Pattern, Not Just the Number</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          No single metric diagnoses anything by itself. The actual skill is watching two or three numbers together
          and recognizing which of a small set of recurring patterns you're looking at, then knowing which one
          points at a real lever and which one is an artifact of how the measurement works.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            &ldquo;High&rdquo; and &ldquo;low&rdquo; are relative, not benchmarked
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            The patterns below compare two of an account&rsquo;s own numbers against each other, they&rsquo;re not
            measured against some universal &ldquo;good&rdquo; threshold. There&rsquo;s no industry-standard
            citation rate that counts as healthy, and a mention rate of 10% isn&rsquo;t inherently strong or weak
            on its own. A number that looks low can just as easily mean a narrow tracked prompt set, a short
            tracking window, or an early-stage category with little AI-answer volume yet, not a real performance
            problem. Sanity-check the prompt set and tracking history before reading either side of a pattern as a
            real signal.
          </p>
        </div>
        <div className="mb-2 flex justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-medium tracking-wide text-ink/45 uppercase">
            <span aria-hidden>⇄</span> Scroll for more
          </span>
        </div>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[1040px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="sticky left-0 z-20 w-1/6 border-r border-line bg-paper-2 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Pattern in the numbers</th>
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What&rsquo;s actually happening</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Potential hypotheses to check</th>
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Where to look next</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {METRIC_PATTERNS.map((row) => (
                <tr key={row.pattern}>
                  <td className="sticky left-0 z-10 border-r border-line bg-paper px-3 py-3 align-top font-medium text-ink">
                    {row.pattern}
                  </td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.meansThat}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                    <ul className="list-outside list-disc space-y-1 pl-4">
                      {row.hypotheses.map((hypothesis) => (
                        <li key={hypothesis}>{hypothesis}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.lookAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Validated vs. unvalidated
          </span>
          <p className="mb-3 text-sm leading-relaxed text-ink/80">
            Every number above is real, but not every number can carry the weight of a strategy claim. Before a
            number goes into a recommendation, sort it into one of these two buckets.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-caption font-medium tracking-wide text-ink/55 uppercase">Validated</p>
              <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/80">
                <li>Rate or share metrics, normalized against a stable prompt or keyword set</li>
                <li>A trend confirmed across two or more comparable periods, not one snapshot</li>
                <li>A GA4 revenue or conversion number, after the underlying event is confirmed to actually fire</li>
              </ul>
            </div>
            <div>
              <p className="mb-1.5 text-caption font-medium tracking-wide text-ink/55 uppercase">Unvalidated</p>
              <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/80">
                <li>A raw count on its own, especially right after the prompt or keyword set changed size</li>
                <li>One week's mention-rate blip with no second period to confirm it</li>
                <li>Prompt volume treated as an exact figure rather than a directional estimate</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          Third-party keyword/volume estimates (Semrush, Ahrefs) fall into a similar trap: they're modeled from a
          crawled panel, useful for sizing opportunity and comparing competitors on equal footing, but they will
          disagree with GSC's first-party numbers for your own site. When they conflict, GSC wins for your own
          site; the third-party tool wins for anything you don't have first-party access to.
        </p>
      </section>

      <section id="number-to-outcome">
        <SectionHeading>From Number to Outcome</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          GSC and the AI-visibility metrics both describe <span className="font-medium text-ink">potential</span>: whether the
          content is reachable and whether AI models are aware of it. Neither one, alone, tells you whether any of
          that reach actually mattered to the business. That's what GA4 is for, and reading the two layers together
          is what turns a metrics readout into a real diagnosis.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Combination</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it implies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  Ranks top 5 in GSC, strong citation rate, but under 100 GA4 users/month
                </td>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  Depends on query intent. If it's informational, this can just be expected: the AI answer or SERP
                  feature satisfies the visitor and a click was never likely, not a problem. If it's transactional,
                  the content is reachable and being surfaced but something between surfacing and the click is
                  broken, check technical blockers and brand trust/CTR before assuming content is the issue.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  Engagement time over 3 minutes, conversion rate under 1%
                </td>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  Strong content with weak calls to action, or an intent mismatch between what the visitor wanted
                  and what the page asks them to do next.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  High-converting page shows a declining citation rate over time
                </td>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  A real revenue driver that's actively at risk. This should outrank a low-traffic page's citation
                  problem every time, even if the low-traffic page's numbers look worse in isolation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          <span className="font-medium text-ink">On GA4 conversion validity specifically:</span> never cite a client's conversion
          numbers without first checking whether the underlying conversion event is actually configured and firing.
          A "0% conversion rate" is sometimes a real result and sometimes a broken event that never fires; a "500%
          increase" is sometimes real growth and sometimes someone fixing that same broken event. Both look
          identical in the dashboard. Only the event configuration tells you which one you're looking at.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Conversion events also need to be reviewed with the client directly, since what counts as a "conversion" is
          defined per account and isn't something you can infer from the dashboard alone.
        </p>
      </section>

      <section id="validating-a-number">
        <SectionHeading>Validating a Suspicious Number</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Before any number goes into a client-facing deck, especially one that looks like unusually good or bad
          news, run it through this sequence. Treat it as a habit, not a one-time checklist.
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Isolate what changed.</span> Same prompt set or keyword set, same date
            range, same platform and segment filters as whatever you're comparing against? A metric that moved
            because its denominator changed isn't the same signal as one that moved because performance changed.
          </li>
          <li>
            <span className="font-medium text-ink">Separate rate/share from raw count.</span> If only the raw count moved and the
            rate or share stayed flat, suspect prompt-set or keyword-set growth before crediting a real
            improvement.
          </li>
          <li>
            <span className="font-medium text-ink">Cross-reference the adjacent layer.</span> A GSC ranking claim should show up
            somewhere close in time as GA4 organic traffic; a citation-rate claim should be checkable against real
            AI answers, not just the summary tile. If two adjacent numbers can't agree even directionally,
            something's mis-set-up, not just noisy.
          </li>
          <li>
            <span className="font-medium text-ink">Confirm the underlying config is real.</span> For any GA4 conversion or event
            number specifically, confirm the event is actually configured and firing before citing it as a
            performance signal.
          </li>
          <li>
            <span className="font-medium text-ink">Only then explain it.</span> State plainly what actually moved and why, real
            change or measurement artifact, rather than repeating the number as though it speaks for itself.
          </li>
        </ol>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The bar for this module
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Not memorizing every formula behind every tile, tools update their calculations without much notice.
            The bar is catching a suspicious number before it goes into a deck, knowing which of the four sources
            to check to validate it, and being able to explain in one sentence why it moved.
          </p>
        </div>
      </section>
    </div>
  );
}
