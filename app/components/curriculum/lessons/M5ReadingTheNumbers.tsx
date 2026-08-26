import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M5_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "the-tool-map", label: "The Tool Map" },
  { id: "how-numbers-are-built", label: "How the Headline Number Is Actually Built" },
  { id: "reading-patterns", label: "Reading the Pattern, Not Just the Number" },
  { id: "number-to-outcome", label: "From Number to Outcome" },
  { id: "validating-a-number", label: "Validating a Suspicious Number" },
];

interface MetricPattern {
  pattern: string;
  meansThat: string;
  lookAt: string;
}

const METRIC_PATTERNS: MetricPattern[] = [
  {
    pattern: "High mention rate, low citation rate",
    meansThat:
      "Third-party content, reviews, forums, comparison sites, is carrying the brand's visibility. The brand gets talked about, but AI models aren't linking to anything it owns.",
    lookAt: "Structural citability of owned content, not more brand awareness. Awareness is already there.",
  },
  {
    pattern: "High citation rate, low mention rate",
    meansThat:
      "Owned content is authoritative but narrow, winning a handful of specific prompts and invisible across the broader landscape of questions buyers actually ask.",
    lookAt: "Prompt and topic coverage breadth, not content quality. The content that exists is already working.",
  },
  {
    pattern: "Share of voice rising, average position drifting worse",
    meansThat:
      "The brand is showing up more often but landing further down in the answer when it does, present but less prominent.",
    lookAt: "Direct-answer framing and structural citability, not volume. Being named more doesn't fix being buried.",
  },
  {
    pattern: "Citation count rising, citation rate and share flat",
    meansThat:
      "The tracked prompt set almost certainly grew. More tracked questions mechanically produces more raw citations without any change in the account's real footprint.",
    lookAt: "Whether prompts were added recently. Re-read the trend on rate or share only, the count isn't telling you anything on its own.",
  },
  {
    pattern: "GSC ranking improving, GA4 organic traffic flat or falling",
    meansThat:
      "A SERP feature (an AI Overview, a featured snippet) or a title/CTR problem is intercepting the click before it reaches the site, not a ranking failure.",
    lookAt: "Click-through rate and what's occupying the SERP above the listing, not the ranking position itself.",
  },
  {
    pattern: "GA4 traffic rising, conversion rate flat or falling",
    meansThat:
      "More visitors are arriving, but they're either lower-intent or hitting a page whose calls to action don't match what they came for. Traffic alone isn't a strategy win.",
    lookAt: "Traffic-source intent match and the page's calls to action, not the traffic number by itself.",
  },
];

interface ToolRow {
  tool: string;
  measures: string;
  cantTellYou: string;
}

const TOOL_MAP: ToolRow[] = [
  {
    tool: "Google Search Console (GSC)",
    measures:
      "First-party ground truth for classic organic search: which queries actually trigger your pages, clicks, impressions, CTR, and average position, straight from Google, not modeled.",
    cantTellYou:
      "Nothing about any AI surface. It's also scoped to your own site, there's no native competitor view, so it can't tell you who's beating you or why.",
  },
  {
    tool: "Semrush / Ahrefs",
    measures:
      "Third-party competitive intelligence: what keywords competitors rank for, estimated search volume, keyword difficulty, backlink profiles, market-opportunity sizing.",
    cantTellYou:
      "What actually happened on any real site. Volume and difficulty are modeled estimates from a crawled panel, not measured traffic, and neither tool sees AI-answer visibility at all.",
  },
  {
    tool: "GA4",
    measures:
      "What actually happened on the site: sessions, users, engagement time and rate, conversions, revenue, segmentable by source/medium, including AI referral sources like ChatGPT and Perplexity.",
    cantTellYou:
      "Why you rank or get cited. GA4 measures downstream outcome only, and every number it reports is only as trustworthy as the event and conversion configuration behind it.",
  },
  {
    tool: "AirOps Insights (Visibility + Citations)",
    measures:
      "The AI-search layer: mention rate, share of voice, average position, citation rate, citation share, and influence score, all built from prompts run against tracked AI models.",
    cantTellYou:
      "Anything outside your tracked prompt set. It's a probabilistic sample of AI answers to the questions you chose to track, not a census of everything AI models say about the brand.",
  },
];

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
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="the-tool-map">
        <SectionHeading>The Tool Map</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A single account review can pull numbers from four different sources, and each one measures a different
          layer of reality: what Google itself says is happening, what a third-party tool estimates about the
          competitive landscape, what actually happened on the site, and what AI models say about the brand when
          asked. Confusing one for another is the single most common way a real number gets presented as the wrong
          claim.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Source</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it actually measures</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it can't tell you</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TOOL_MAP.map((row) => (
                <tr key={row.tool}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.tool}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.measures}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.cantTellYou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          None of these four replace each other, and none of them is "the real number" while the others are noise.
          A defensible read of an account almost always means checking more than one of these before presenting
          anything as a conclusion.
        </p>
      </section>

      <section id="how-numbers-are-built">
        <SectionHeading>How the Headline Number Is Actually Built</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Two of the AI-search metrics above are built in ways that aren't obvious from the dashboard tile alone.
          Both are worth knowing cold, because both are common sources of "the numbers don't match" confusion that
          isn't actually a bug.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Headline vs. daily average
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A monthly visibility or mention-rate headline is typically <span className="font-semibold text-ink">traffic-weighted</span> across
            the days in that window: a day with far more prompts run moves the headline more than a light day.
            The daily dots plotted underneath it are usually <span className="font-semibold text-ink">unweighted</span>, one rate per day,
            with no such adjustment. Averaging those daily dots yourself will not reproduce the headline number, and
            isn't supposed to. Both are real, they're just answering slightly different questions.
          </p>
        </div>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Citation share is per-platform, then averaged
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Citation share is commonly calculated per AI model or platform first, then averaged across platforms,
            not as one global citation count divided by one global total. That means a domain cited heavily but
            narrowly on a single lower-volume platform can post a higher citation share than a domain with more
            total citations spread thinly across several high-volume platforms. Citation count and citation share
            won't always sort in the same order, and that's expected, not an error to chase down.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Neither of these needs to be derived from scratch on a call. What matters is recognizing the pattern
          immediately when a client (or a teammate) reads a mismatch as a broken dashboard, and being able to say
          plainly why two correctly-calculated numbers don't have to agree.
        </p>
      </section>

      <section id="reading-patterns">
        <SectionHeading>Reading the Pattern, Not Just the Number</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          No single metric diagnoses anything by itself. The actual skill is watching two or three numbers together
          and recognizing which of a small set of recurring patterns you're looking at, then knowing which one
          points at a real lever and which one is an artifact of how the measurement works.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Pattern in the numbers</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What's actually happening</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Where to look next</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {METRIC_PATTERNS.map((row) => (
                <tr key={row.pattern}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.pattern}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.meansThat}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.lookAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Load-bearing vs. overhyped
          </span>
          <p className="mb-3 text-sm leading-relaxed text-ink/80">
            Every number above is real, but not every number can carry the weight of a strategy claim. Before a
            number goes into a recommendation, sort it into one of these two buckets.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-caption font-semibold tracking-wide text-ink/55 uppercase">Load-bearing</p>
              <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/80">
                <li>Rate or share metrics, normalized against a stable prompt or keyword set</li>
                <li>A trend confirmed across two or more comparable periods, not one snapshot</li>
                <li>A GA4 revenue or conversion number, after the underlying event is confirmed to actually fire</li>
              </ul>
            </div>
            <div>
              <p className="mb-1.5 text-caption font-semibold tracking-wide text-ink/55 uppercase">Overhyped</p>
              <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/80">
                <li>A raw count on its own, especially right after the prompt or keyword set changed size</li>
                <li>One week's mention-rate blip with no second period to confirm it</li>
                <li>Prompt volume treated as an exact figure rather than a directional estimate</li>
                <li>A headline-vs-daily mismatch misread as "the number changed" instead of "different math"</li>
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
          GSC and the AI-visibility metrics both describe <span className="font-semibold text-ink">potential</span>: whether the
          content is reachable and whether AI models are aware of it. Neither one, alone, tells you whether any of
          that reach actually mattered to the business. That's what GA4 is for, and reading the two layers together
          is what turns a metrics readout into a real diagnosis.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Combination</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it implies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  Ranks top 5 in GSC, strong citation rate, but under 100 GA4 users/month
                </td>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">
                  A technical or brand-awareness problem, not a content problem. The content is reachable and being
                  surfaced; something between surfacing and the click is broken.
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
          <span className="font-semibold text-ink">On GA4 conversion validity specifically:</span> never cite a client's conversion
          numbers without first checking whether the underlying conversion event is actually configured and firing.
          A "0% conversion rate" is sometimes a real result and sometimes a broken event that never fires; a "500%
          increase" is sometimes real growth and sometimes someone quietly fixing that same broken event. Both look
          identical in the dashboard. Only the event configuration tells you which one you're looking at.
        </p>
      </section>

      <section id="validating-a-number">
        <SectionHeading>Validating a Suspicious Number</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Before any number goes into a client-facing deck, especially one that looks like unusually good or bad
          news, it earns a quick pass through this sequence. This is the gut-check habit this module is actually
          building, not a one-time checklist.
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Isolate what changed.</span> Same prompt set or keyword set, same date
            range, same platform and segment filters as whatever you're comparing against? A metric that moved
            because its denominator changed isn't the same signal as one that moved because performance changed.
          </li>
          <li>
            <span className="font-semibold text-ink">Check headline math against daily math.</span> If a monthly headline and the
            average of the daily figures underneath it don't match, confirm which one is traffic-weighted before
            treating the mismatch as an error.
          </li>
          <li>
            <span className="font-semibold text-ink">Separate rate/share from raw count.</span> If only the raw count moved and the
            rate or share stayed flat, suspect prompt-set or keyword-set growth before crediting a real
            improvement.
          </li>
          <li>
            <span className="font-semibold text-ink">Cross-reference the adjacent layer.</span> A GSC ranking claim should show up
            somewhere close in time as GA4 organic traffic; a citation-rate claim should be checkable against real
            AI answers, not just the summary tile. If two adjacent numbers can't agree even directionally,
            something's mis-set-up, not just noisy.
          </li>
          <li>
            <span className="font-semibold text-ink">Confirm the underlying config is real.</span> For any GA4 conversion or event
            number specifically, confirm the event is actually configured and firing before citing it as a
            performance signal.
          </li>
          <li>
            <span className="font-semibold text-ink">Only then explain it.</span> State plainly what actually moved and why, real
            change or measurement artifact, rather than repeating the number as though it speaks for itself.
          </li>
        </ol>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The bar for this module
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Not memorizing every formula behind every tile, tools update their calculations without much notice.
            The bar is catching a suspicious number before it goes into a deck, knowing which of the four sources
            to check to validate it, and being able to explain in one sentence why it moved. That's what separates
            reading a dashboard from actually understanding it.
          </p>
        </div>
      </section>
    </div>
  );
}
