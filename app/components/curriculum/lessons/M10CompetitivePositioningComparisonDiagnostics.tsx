import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M10_COMPETITIVE_POSITIONING_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-this-discipline-exists", label: "Why This Discipline Exists" },
  { id: "what-is-a-comparison-page", label: "What Actually Makes It a Comparison Page" },
  { id: "anatomy", label: "The Anatomy of a Page That Works" },
  { id: "the-positioning-edge", label: "The Positioning Edge" },
  { id: "aeo-citability", label: "What Makes a Page AEO-Citable" },
  { id: "diagnosing-underperformance", label: "Diagnosing Why a Page Underperforms" },
  { id: "google-penalties", label: "What Google Actually Penalizes Here" },
  { id: "tracking-competitors", label: "Tracking Competitors Without Drowning in Noise" },
  { id: "industry-patterns", label: "How This Differs by Industry" },
  { id: "the-checklist", label: "Before It Ships" },
];

interface Trait {
  trait: string;
  whatItLooksLike: string;
}

const COMPARISON_TRAITS: Trait[] = [
  {
    trait: "Named pair, not a category",
    whatItLooksLike: "The title, H1, and URL name a specific pair or shortlist (\"Gusto vs. Rippling\"), not a generic category page that happens to mention a rival once in passing.",
  },
  {
    trait: "Structured side-by-side claims",
    whatItLooksLike: "A table or parallel sections that put both products' claims next to each other on the same dimensions, not prose that describes each product separately.",
  },
  {
    trait: "Resolves to a verdict",
    whatItLooksLike: "The page tells the reader who should pick what. Listing both products' features without ever answering \"so which one\" isn't a comparison, it's two data sheets stapled together.",
  },
  {
    trait: "Written for a shortlist buyer",
    whatItLooksLike: "It assumes the reader already knows the category and is choosing between named options, bottom-funnel intent, not someone still learning what the category even is.",
  },
];

interface AnatomyBlock {
  block: string;
  whatItDoes: string;
  whyItMatters: string;
}

const ANATOMY_BLOCKS: AnatomyBlock[] = [
  {
    block: "Hero / framing",
    whatItDoes: "States the exact pair being compared and who the page is for, in the first screen.",
    whyItMatters: "A reader (and a crawler) should know within one sentence whether this page answers their exact question.",
  },
  {
    block: "Differentiation block",
    whatItDoes: "Names the 2–3 dimensions that actually drive this decision, up front, before the full feature table.",
    whyItMatters: "Buries the real decision inside a 40-row table and the reader never finds the two things that actually mattered.",
  },
  {
    block: "Feature / spec table",
    whatItDoes: "Grouped, labeled sections with checkmarks over prose, built from the features that actually drive the purchase, not every feature either product has.",
    whyItMatters: "Pages with three tables earn roughly a quarter more citations at the comparison stage than pages with none.",
  },
  {
    block: "Pricing comparison",
    whatItDoes: "Real numbers, real tiers, and the gotchas, per-seat cliffs, feature gates, not \"contact sales\" for both sides.",
    whyItMatters: "Buyers can't get a clean pricing picture from either vendor's own site, so pricing carries outsized weight here; listing seven distinct price points measurably lifts citation odds further.",
  },
  {
    block: "Verdict block (\"choose X if / choose Y if\")",
    whatItDoes: "Segments the recommendation by buyer situation instead of declaring one universal winner.",
    whyItMatters: "This is also the concession mechanism covered next, the block that makes the rest of the page believable.",
  },
  {
    block: "Migration / switching section",
    whatItDoes: "Import guidance, feature-mapping notes, what breaks and what carries over when switching.",
    whyItMatters: "Answers a distinct, high-intent search (\"switching from X to Y\") that the feature table alone never covers.",
  },
  {
    block: "FAQ block",
    whatItDoes: "Long-tail, pair-specific questions: \"Can I migrate from X to Y?\", \"Does X have a free plan?\"",
    whyItMatters: "Each question is a self-contained, quotable chunk, exactly the shape an answer engine can lift whole.",
  },
  {
    block: "CTA",
    whatItDoes: "One clear next step, sized to where a shortlist buyer actually is.",
    whyItMatters: "A comparison page is bottom-funnel; the CTA should assume the reader is close to deciding, not still browsing.",
  },
];

interface ThreeBucket {
  bucket: string;
  signs: string;
  typicalFix: string;
  whereItEnds: string;
}

const DIAGNOSTIC_BUCKETS: ThreeBucket[] = [
  {
    bucket: "Authority / trust",
    signs: "Claims nobody could independently check, no sourcing behind a single table row, a tone so one-sided it reads as an ad, or the underlying product info is so stale it's comparing a version of the competitor that no longer exists.",
    typicalFix: "If the gap is fixable, source every claim and correct the stale ones. If the page has nothing sourceable and no real basis for the comparison at all, it isn't a content problem, it's a page that shouldn't exist in this form.",
    whereItEnds: "Rewrite from sourced evidence, or cut and fold whatever's salvageable into a broader page.",
  },
  {
    bucket: "Content / positioning",
    signs: "The verdict block never actually sends anyone toward the competitor (a concession that costs nothing isn't a concession), or the dimension being claimed as \"the edge\" isn't the one this buyer actually weighs most.",
    typicalFix: "Rewrite the positioning: find the one real thing the competitor is better at for some real segment, and confirm the claimed edge matches what the target buyer actually cares about, not just what's easiest to claim.",
    whereItEnds: "Stays a standalone page, rewritten.",
  },
  {
    bucket: "Architecture / technical",
    signs: "No internal links point to the page (orphaned), wrong granularity (a three-way comparison crammed onto a two-way page, or vice versa), or basic on-page targeting is missing from the title, H1, and URL.",
    typicalFix: "Fix the plumbing: add internal links from relevant pages, split or merge to the right granularity, correct the on-page targeting.",
    whereItEnds: "Stays a standalone page, plumbing fixed, content usually untouched.",
  },
];

interface CitabilityAxis {
  axis: string;
  whatItMeans: string;
}

const CITABILITY_AXES: CitabilityAxis[] = [
  { axis: "Trust", whatItMeans: "Claims are sourceable and consistent with what's independently verifiable about both products." },
  { axis: "Completeness", whatItMeans: "The page actually answers the comparison, not just one side of it." },
  { axis: "Relevance", whatItMeans: "The dimensions covered are the ones a real buyer in this decision would ask about." },
  { axis: "Context", whatItMeans: "Each section is self-contained enough to be lifted on its own without losing meaning." },
];

interface PenaltyPattern {
  policy: string;
  whatItTargets: string;
  whatItLooksLikeHere: string;
  howToAvoidIt: string;
}

const PENALTY_PATTERNS: PenaltyPattern[] = [
  {
    policy: "Scaled content abuse",
    whatItTargets: "Many pages built mainly to manipulate rankings rather than help a reader. Google is explicit that the deciding factor is value per page, not volume, and not whether AI, automation, or a human wrote it.",
    whatItLooksLikeHere: "A batch of \"X vs. Y\" pages generated by swapping only the competitor's name across an identical template, with no real pricing, no real screenshots, no original commentary.",
    howToAvoidIt: "Every page earns its own URL with something genuinely specific to that pair: real numbers, a real verdict, real sourcing. Five thorough pages beat twenty templated ones.",
  },
  {
    policy: "Doorway abuse",
    whatItTargets: "Pages built to rank for near-identical queries with little unique value between them, including \"substantially similar\" variants of the same page.",
    whatItLooksLikeHere: "\"X vs. Y,\" \"X alternative,\" and \"Y alternative\" pages that are really the same content three times over with different headers.",
    howToAvoidIt: "Consolidate variants that don't have a genuinely different reader intent behind them instead of multiplying near-duplicates.",
  },
];

interface Cadence {
  cadence: string;
  whatYouCheck: string;
  signal: string;
}

const TRACKING_CADENCE: Cadence[] = [
  {
    cadence: "Weekly",
    whatYouCheck: "AI-citation share of voice against a fixed query set, tracked across the platforms the account actually cares about; a light scan of relevant Reddit and community threads.",
    signal: "A citation-share drop on a query that's actually tied to a purchase decision, or a new recurring complaint theme about the client, not noise on a query nobody searches.",
  },
  {
    cadence: "Monthly",
    whatYouCheck: "Review-site sentiment and velocity on G2, Capterra, or the account's relevant equivalent: new reviews, rating shifts, category-leaderboard order changes.",
    signal: "A shift in what reviewers are actually complaining about or praising, since that's the language a comparison page's verdict block should be responding to.",
  },
  {
    cadence: "Quarterly",
    whatYouCheck: "A full pass on named competitors' own comparison and alternative pages, their pricing pages, and their messaging.",
    signal: "A competitor claiming a new edge, changing pricing structure, or naming the client directly, any of which can make an existing comparison page's claims stale.",
  },
];

interface IndustryPattern {
  segment: string;
  howItFunctions: string;
  whatsStructurallyDifferent: string;
}

const INDUSTRY_PATTERNS: IndustryPattern[] = [
  {
    segment: "High-consideration B2B SaaS",
    howItFunctions: "Core infrastructure, not a nice-to-have. This is where the highest-converting bottom-funnel content in the whole site usually lives.",
    whatsStructurallyDifferent: "Nothing structural, the standard anatomy above is built for exactly this case.",
  },
  {
    segment: "Regulated verticals (fintech, healthcare-adjacent)",
    howItFunctions: "Still essential, but the trust gap being closed is bigger than in unregulated SaaS.",
    whatsStructurallyDifferent: "Claims need to be provable and compliance-reviewable, no unverifiable superlatives, and disclaimers need to be substantive rather than generic boilerplate. Framing leans toward \"how this meets requirement X\" alongside the feature-vs-feature table, not instead of it.",
  },
  {
    segment: "Vertical marketplaces / specialized procurement",
    howItFunctions: "Buyers compare through structured quotes and spec-matching, not narrative pages.",
    whatsStructurallyDifferent: "The classic \"vs.\" page is often the wrong shape entirely; RFQ and spec-comparison content does the job a comparison page would elsewhere.",
  },
  {
    segment: "Low-differentiation commodity categories",
    howItFunctions: "The weakest fit for this content type.",
    whatsStructurallyDifferent: "With real competitive parity, there's less genuine edge to claim, and a category where every comparison page reads the same is itself a diagnostic signal: differentiate on something other than head-to-head feature claims, or don't force the page.",
  },
];

interface ChecklistItem {
  check: string;
  why: string;
}

const CHECKLIST: ChecklistItem[] = [
  { check: "Named pair (or shortlist) in the title, H1, and URL, one page per pair", why: "This is what makes it a comparison page instead of a category page, and avoids the doorway pattern of near-duplicate pages." },
  { check: "Verdict block names a real, specific case where the competitor is the better fit", why: "A concession that costs nothing isn't a concession; this is what keeps the rest of the page's claims from reading as one-sided." },
  { check: "Every table claim is sourced against the competitor's current offering", why: "A stale or unsourceable claim is the fastest way to lose a skeptical buyer the moment they spot-check one row." },
  { check: "Feature table is grouped and structured, not a wall of prose", why: "Structure, not just authority, is what makes a page easy to extract into an answer." },
  { check: "Real pricing numbers, including the gotchas", why: "Pricing carries outsized weight because buyers usually can't get a clean picture from either vendor directly." },
  { check: "Migration or switching content is present", why: "It answers a distinct, high-intent search the feature table alone doesn't cover." },
  { check: "FAQ section with pair-specific, long-tail questions", why: "Each question is a self-contained, quotable chunk, exactly what gets lifted into an answer." },
  { check: "The page is internally linked from at least one relevant live page", why: "An orphaned page doesn't get crawled or surfaced regardless of how good the content is." },
  { check: "Tone is neutral and adjudicating, not first-person superlative", why: "Covered next: promotional language is discounted by skeptical readers and by AI extraction alike." },
  { check: "Schema markup is present, but not treated as the growth lever", why: "It's hygiene for rich results. Structure and sourcing are what actually move citation, not the markup itself." },
];

export function M10CompetitivePositioningComparisonDiagnostics() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m10-competitive-positioning"
            title="Competitive Positioning & Comparison Diagnostics"
            questions={M10_COMPETITIVE_POSITIONING_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-this-discipline-exists">
        <SectionHeading>Why This Discipline Exists</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Comparison content sits closer to an actual purchase decision than almost anything else a client publishes.
          Top-of-funnel &ldquo;what is&rdquo; content increasingly gets answered directly by AI platforms with no
          citation at all, but a buyer asking an AI platform to compare two named options is one step from choosing,
          and whatever gets surfaced there shapes that shortlist directly.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          That&rsquo;s also why this matters for an account whose own owned content barely shows up in AI answers
          elsewhere. Nearly 90% of third-party AI mentions come from listicles, comparison pages, and reviews, not
          from a brand&rsquo;s own site, and the brand is named among the first three companies in that content
          roughly 80% of the time. A client can be genuinely underrepresented in general category answers and still
          have a strong reason to invest here, because comparison content is the layer closest to the decision
          itself, whether it lives on the client&rsquo;s own site or someone else&rsquo;s.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The job in this module is narrower than &ldquo;build comparison content&rdquo; in general. It&rsquo;s
          diagnostic: given a specific underperforming page, decide whether the problem is authority, content, or
          architecture, and decide where that page should live once you know which one it is.
        </p>
      </section>

      <section id="what-is-a-comparison-page">
        <SectionHeading>What Actually Makes It a Comparison Page</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Not every page that names a competitor qualifies. A blog post that mentions a rival once, in passing, is
          an editorial page, not a comparison page, and shouldn&rsquo;t be diagnosed as one. Four traits actually
          define the category.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Trait</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it looks like</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COMPARISON_TRAITS.map((t) => (
                <tr key={t.trait}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{t.trait}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{t.whatItLooksLike}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This distinction matters before any diagnosis starts: a page that fails to be a comparison page at all
          isn&rsquo;t underperforming as one, it needs to become one first, or it isn&rsquo;t the right candidate for
          this diagnostic at all.
        </p>
      </section>

      <section id="anatomy">
        <SectionHeading>The Anatomy of a Page That Works</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The structure below has converged across the category for a reason: each block answers a question a
          shortlist buyer actually has, in the order they usually have it.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Block</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it does</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {ANATOMY_BLOCKS.map((b) => (
                <tr key={b.block}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{b.block}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{b.whatItDoes}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{b.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          One page per pair. A three-way comparison is a separate, lower-volume intent, and crams poorly onto a
          page built for two, give it its own page only if the search volume actually supports it.
        </p>
      </section>

      <section id="the-positioning-edge">
        <SectionHeading>The Positioning Edge</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The single highest-leverage move in this content type: name one real, specific place a competitor is the
          better fit, for some real segment of buyer, and claim the edge on the dimension that actually matters most
          to the buyer this page is written for. A page that lists only positives reads as an advertisement, and a
          skeptical reader, or an AI system extracting claims from it, has no way to check any of those claims
          against reality. A page that also names one real limitation gives the reader something they can verify,
          which changes how every other claim on the page gets treated.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The concession has to be real and specific, not decorative. &ldquo;We&rsquo;re not for everyone&rdquo;
          concedes nothing checkable. &ldquo;Team B is the stronger fit if you need same-day phone support, we
          don&rsquo;t offer that&rdquo; concedes something a reader can actually go verify, and that&rsquo;s what
          makes it do any work at all.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            All-positive vs. concede-and-claim
          </span>
          <p className="mb-3 text-sm leading-relaxed text-ink/80">
            <span className="font-medium text-ink">All-positive:</span> &ldquo;We&rsquo;re the best payroll platform
            for distributed teams, full stop.&rdquo; Nothing here is checkable, and nothing distinguishes it from any
            other vendor&rsquo;s homepage copy.
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            <span className="font-medium text-ink">Concede-and-claim:</span> &ldquo;If white-glove, phone-first
            support matters most to you, Team B is the stronger choice, they staff a 24/7 line we don&rsquo;t match.
            If what matters most is running payroll and benefits from one system without switching tools,
            that&rsquo;s where we&rsquo;re the stronger fit.&rdquo; Specific, checkable, and it tells two different
            readers two different true things.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Voice matters as much as structure here. Write in the adjudicating third person, &ldquo;the better fit if X
          matters more to you than Y&rdquo;, not first-person marketing voice, &ldquo;we&rsquo;re better
          because&rdquo;. The first reads as an assessment; the second reads as an ad, no matter how accurate the
          underlying claim is.
        </p>
      </section>

      <section id="aeo-citability">
        <SectionHeading>What Makes a Page AEO-Citable</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Citability research for generative answer engines converges on four axes, and none of them are
          &ldquo;how persuasive is this copy.&rdquo;
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Axis</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CITABILITY_AXES.map((a) => (
                <tr key={a.axis}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{a.axis}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{a.whatItMeans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Structure drives extractability more than domain authority does. Pages with a clean, sequential heading
          hierarchy carry meaningfully higher citation odds than pages without one, and an FAQ section alone
          measurably lifts the odds a page gets cited at all, because each question-and-answer pair is already
          shaped like a self-contained chunk a model can lift whole.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Schema markup is worth adding for rich-result eligibility, but treat it as hygiene, not strategy: it&rsquo;s
          not a meaningful citation lever on its own. The lift comes from structure and sourcing, not from the markup
          describing them.
        </p>
      </section>

      <section id="diagnosing-underperformance">
        <SectionHeading>Diagnosing Why a Page Underperforms</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every underperforming comparison page falls into one of three buckets, and the bucket decides the fix,
          and whether the page survives as a standalone URL at all.
        </p>
        <div className="mb-4 space-y-4">
          {DIAGNOSTIC_BUCKETS.map((b) => (
            <div key={b.bucket} className="rounded-card border border-line bg-white p-5">
              <div className="mb-2 text-sm font-medium text-ink">{b.bucket}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Signs: </span>
                {b.signs}
              </p>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Typical fix: </span>
                {b.typicalFix}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Where it ends up: </span>
                {b.whereItEnds}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          A page can show symptoms of more than one bucket at once, an orphaned page with weak sourcing has both an
          architecture and an authority problem, but there&rsquo;s usually one bucket that&rsquo;s the actual root
          cause. Fix that one first, then check whether the others still show up once it&rsquo;s addressed.
        </p>
      </section>

      <section id="google-penalties">
        <SectionHeading>What Google Actually Penalizes Here</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Two named policies apply directly to comparison content, and both turn on the same test: real, per-page
          value to the reader, not the volume of pages or how they were produced.
        </p>
        <div className="mb-4 space-y-4">
          {PENALTY_PATTERNS.map((p) => (
            <div key={p.policy} className="rounded-card border border-line bg-paper-2 p-4">
              <div className="mb-2 text-sm font-medium text-ink">{p.policy}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Targets: </span>
                {p.whatItTargets}
              </p>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Looks like here: </span>
                {p.whatItLooksLikeHere}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Avoid it by: </span>
                {p.howToAvoidIt}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Google&rsquo;s own framing is explicit that AI-assisted production isn&rsquo;t the trigger,
          &ldquo;regardless of how the pages are made, AI, automation, human writers, or a combination.&rdquo; A page
          built quickly is fine. A page built to exist rather than to help the specific reader who lands on it is the
          actual problem.
        </p>
      </section>

      <section id="tracking-competitors">
        <SectionHeading>Tracking Competitors Without Drowning in Noise</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          &ldquo;Hitting the right points&rdquo; means tracking signals tied to an actual buyer decision, a recurring
          complaint theme, a citation-share drop on a query that&rsquo;s actually about choosing between vendors, not
          vanity monitoring like review counts or follower counts that wouldn&rsquo;t change what gets built either
          way.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Cadence</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What you check</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">The signal you&rsquo;re actually watching for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TRACKING_CADENCE.map((c) => (
                <tr key={c.cadence}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{c.cadence}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.whatYouCheck}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Remember the tag guardrail from Prompt &amp; Taxonomy Strategy: competitor tracking lives in native
          competitor configuration and in prompt wording, not in a sprawling per-competitor tag vocabulary. This
          cadence is what actually feeds that configuration and this content, it&rsquo;s the ongoing input, not a
          separate system running in parallel.
        </p>
      </section>

      <section id="industry-patterns">
        <SectionHeading>How This Differs by Industry</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The anatomy above is the default. A few segments genuinely change the shape of the work, not just the
          tone of voice.
        </p>
        <div className="mb-4 space-y-4">
          {INDUSTRY_PATTERNS.map((s) => (
            <div key={s.segment} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 text-sm font-medium text-ink">{s.segment}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">How it functions: </span>
                {s.howItFunctions}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">What&rsquo;s structurally different: </span>
                {s.whatsStructurallyDifferent}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="the-checklist">
        <SectionHeading>Before It Ships</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Ten checks that pull everything above into one pass, whether you&rsquo;re building a new page or diagnosing
          an existing one.
        </p>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Check</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CHECKLIST.map((c) => (
                <tr key={c.check}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{c.check}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
