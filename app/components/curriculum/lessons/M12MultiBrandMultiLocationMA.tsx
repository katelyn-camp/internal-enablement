import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M12_MULTI_BRAND_MA_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-this-discipline-exists", label: "Why This Discipline Exists" },
  { id: "the-shared-diagnostic", label: "The Shared Diagnostic: One Thing or Many" },
  { id: "multi-brand-architecture", label: "Multi-Brand Architecture" },
  { id: "multi-location-architecture", label: "Multi-Location Architecture" },
  { id: "ma-consolidation-mechanics", label: "M&A Consolidation Mechanics" },
  { id: "divestiture", label: "Divestiture: the Reverse Direction" },
  { id: "sequencing-a-consolidation", label: "Sequencing a Consolidation" },
  { id: "faq", label: "Edge Cases Worth Knowing" },
  { id: "the-checklist", label: "Before You Sequence a Consolidation" },
];

interface PortfolioModel {
  model: string;
  whatItIs: string;
  whenItFits: string;
  example: string;
}

const PORTFOLIO_MODELS: PortfolioModel[] = [
  {
    model: "House of brands",
    whatItIs: "Each brand stands entirely on its own; the parent company is invisible by design, and no equity is meant to transfer between brands.",
    whenItFits: "Markets or customers are genuinely unrelated, or an acquired brand's existing equity would be diluted by association with the parent or its other brands.",
    example: "Procter & Gamble runs roughly 65 brands, Tide, Gillette, Pampers, with no shared branding and no reason for a Tide customer to know Gillette is related.",
  },
  {
    model: "Branded house",
    whatItIs: "One master brand; every product or sub-line borrows that single name and its trust directly.",
    whenItFits: "Offerings are closely related enough that reinforcing one reputation benefits all of them.",
    example: "Apple's iPhone, Watch, and TV all sit under one name, each new product inherits Apple's existing trust rather than building its own from zero.",
  },
  {
    model: "Hybrid / endorsed",
    whatItIs: "Sub-brands keep their own independent identity for the parts of the experience customers care about distinctly, while a visible endorsement carries the parts worth sharing.",
    whenItFits: "Some parts of the experience benefit from a distinct identity, while others (loyalty, trust, scale) are genuinely shared.",
    example: "Marriott lets the Ritz-Carlton and W Hotels keep their own distinct identities, while \"by Marriott\" is visible where guests actually value the shared loyalty program and trust.",
  },
];

interface ContentMatrixLayer {
  layer: string;
  whoOwnsIt: string;
  whatItCovers: string;
}

const CONTENT_MATRIX: ContentMatrixLayer[] = [
  {
    layer: "Corporate core",
    whoOwnsIt: "Central marketing or SEO team",
    whatItCovers: "Reusable substantive material: category guides, FAQs, proof points, and the core brand facts (NAP data, product line, certifications) that need to stay accurate everywhere.",
  },
  {
    layer: "Local layer",
    whoOwnsIt: "Each location or franchisee, within corporate guardrails",
    whatItCovers: "Genuinely local variables: real pricing at that location, real reviews, actual staff, hours, and anything else that's true there and nowhere else.",
  },
];

interface RedirectPrinciple {
  principle: string;
  why: string;
}

const REDIRECT_PRINCIPLES: RedirectPrinciple[] = [
  { principle: "301, not 302 or 307", why: "A 301 signals a permanent move; a temporary redirect tells crawlers the old URL might come back, which can stall the transfer of ranking signal entirely." },
  { principle: "One-to-one URL mapping, not a blanket domain redirect", why: "Every old URL should map to its actual equivalent on the new domain. Done correctly, this can carry over 90–99% of link equity; a blanket redirect to a homepage carries over close to none of it." },
  { principle: "Prioritize by existing strength", why: "Map the pages with the most backlinks and ranking history first; those are the ones with the most equity at risk if the mapping is wrong." },
  { principle: "Write the redirect policy down before executing", why: "A documented, agreed mapping approach, decided before the migration starts, is repeatedly the difference between a clean migration and a scramble to patch broken mappings afterward." },
];

interface StagingStep {
  step: string;
  whatItMeans: string;
}

const STAGING_STEPS: StagingStep[] = [
  { step: "Separate the domain change from the redesign", whatItMeans: "Moving to a new domain and changing the site's design or URL structure are two different risks. Doing both at once makes it impossible to tell which change caused a drop, if one happens." },
  { step: "Separate the redesign from any URL restructuring", whatItMeans: "The same logic applies one layer down: a new look and a new URL structure are two separate variables. Change one, confirm it's stable, then change the other." },
  { step: "Treat the first 1–2 weeks as a normal dip, not a failure", whatItMeans: "A 10–20% visibility dip in the first one to two weeks is typical even for a clean migration, while crawlers and AI retrieval catch up to the new URLs." },
  { step: "Treat a 30%+ first-week drop as a real signal", whatItMeans: "A drop that size, that fast, points to a redirect or indexing problem specifically, not normal migration turbulence, and is worth investigating immediately rather than waiting it out." },
];

interface RecoveryBenchmark {
  scenario: string;
  typicalRecovery: string;
}

const RECOVERY_BENCHMARKS: RecoveryBenchmark[] = [
  { scenario: "Well-executed migration", typicalRecovery: "Recovers within 2–4 weeks, sometimes as long as 30–60 days, and can end up 10% ahead of the pre-migration baseline." },
  { scenario: "Flawed but functional migration", typicalRecovery: "Commonly settles roughly 30% below the pre-migration baseline, without a specific fix." },
  { scenario: "Poorly executed migration", typicalRecovery: "Can lose roughly half its prior visibility, and recovery timelines vary enormously; one large study of 892 migrations found an average recovery time of 523 days, with 17% of sites never recovering." },
];

interface FailureMode {
  mode: string;
  whatItLooksLike: string;
  mitigation: string;
}

const DIVESTITURE_FAILURE_MODES: FailureMode[] = [
  {
    mode: "Authority fragmentation",
    whatItLooksLike: "Link equity and domain strength that used to sit on one property now split across two, and neither ends up as strong as the original combined property was.",
    mitigation: "Decide early which property is the primary heir of the shared history, and route redirects and internal links to concentrate strength there rather than splitting evenly by default.",
  },
  {
    mode: "Keyword cannibalization between the two",
    whatItLooksLike: "The parent and the newly separated entity keep competing for the same queries and the same AI-answer citations, now as two unrelated properties instead of one.",
    mitigation: "Apply the same shared diagnostic from earlier: if the two sides genuinely serve a different buyer, problem, and competitive set post-separation, differentiate the content deliberately instead of letting both sides keep publishing as if nothing changed.",
  },
];

interface SequencingStep {
  step: string;
  whatYouDo: string;
}

const SEQUENCING_STEPS: SequencingStep[] = [
  {
    step: "Baseline both sides before touching anything",
    whatYouDo: "Capture current rankings, backlinks, and AI mention/citation rates for every property involved, so a later drop can be measured against a real starting point, not a guess.",
  },
  {
    step: "Decide the target architecture with the shared diagnostic",
    whatYouDo: "Run the buyer/problem/competitor test to decide the end state: fully merged, kept fully separate, or an endorsed hybrid. Decide this before planning a single redirect.",
  },
  {
    step: "Write the redirect and content-mapping policy",
    whatYouDo: "Map every URL that's moving, prioritized by existing strength, and get sign-off on the mapping before execution starts.",
  },
  {
    step: "Stage the technical changes",
    whatYouDo: "Domain change, redesign, and URL restructuring move in separate stages, each one confirmed stable before the next starts.",
  },
  {
    step: "Migrate the prompt and topic portfolio last",
    whatYouDo: "Only once the content and redirects have stabilized does the tracked prompt portfolio from Prompt & Taxonomy Strategy get consolidated or re-pointed at the new structure, not before.",
  },
  {
    step: "Monitor against the benchmarks through the transition",
    whatYouDo: "Watch for the normal 10–20% dip versus a 30%+ warning sign, and be ready to pause and investigate rather than waiting for a scheduled check-in.",
  },
  {
    step: "Sunset the old property deliberately",
    whatYouDo: "Once the new structure is stable, retire the old domain or brand cleanly rather than leaving it live and competing with what replaced it.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Two merging brands serve overlapping but not identical buyers. Merge or keep separate?",
    answer:
      "Run the full three-part test rather than stopping at the first overlap. Overlapping buyers alone doesn't decide it, the question is whether the buyer, the problem being solved, and the competitive set are all the same. If the problem or the competitors still genuinely differ even with a shared buyer, an endorsed hybrid usually fits better than a full merge: keep the distinct identity where it matters, share the parts (trust, loyalty, proof points) that are genuinely common.",
  },
  {
    question: "Does an AI answer engine \"remember\" who owns a brand across a domain migration the way Google's index does?",
    answer:
      "This is genuinely under-researched, so treat it as a reasonable inference, not an established fact. A model carries brand facts frozen as of its training cutoff, separate from whatever it retrieves live from the web at query time. A model trained before a merger or rebrand may keep citing the old name regardless of what the new site now says, and correcting that likely takes the same signal-diversity work as any brand-fact correction, updated third-party references (encyclopedic sources, press coverage, consistent external mentions of the new identity), not just an on-site change. Build in extra patience and extra External Content work around a rebrand specifically because of this.",
  },
  {
    question: "A location-page network already looks like it might trip Google's scaled-content or doorway-abuse policies. What's the fix?",
    answer:
      "This is the same diagnostic from Competitive Positioning & Comparison Diagnostics, applied to location pages instead of comparison pages: real, per-page value is what separates a legitimate location page from a doorway page. The fix is the content-matrix split, keep the substantive, reusable material centralized, and make sure every individual location page carries something genuinely local (real pricing, real reviews, real staff), not a template with the town name swapped.",
  },
];

interface ChecklistItem {
  check: string;
  why: string;
}

const CHECKLIST: ChecklistItem[] = [
  { check: "Shared diagnostic run before any technical work starts", why: "Buyer, problem, and competitor overlap decides merge vs. keep-separate vs. endorsed hybrid; deciding this after redirects are already live means redoing them." },
  { check: "Both sides baselined", why: "Rankings, backlinks, and AI mention/citation rates captured before anything moves, so a later drop has something real to be measured against." },
  { check: "Redirect policy documented and signed off", why: "A written, agreed URL mapping is what prevents a scramble to patch broken redirects mid-migration." },
  { check: "301s only, mapped one-to-one", why: "Temporary redirects and blanket domain-level redirects both leak far more equity than a proper one-to-one 301 mapping." },
  { check: "Domain, redesign, and URL changes staged separately", why: "Combining all three at once makes it impossible to isolate what caused a visibility drop, if one happens." },
  { check: "Prompt and topic portfolio migrated last", why: "Consolidating tracked prompts before the content and redirects have stabilized measures a structure that's still moving underneath it." },
  { check: "Reindexing benchmarks agreed in advance", why: "Knowing that 10–20% is a normal first-week dip, and 30%+ is a real warning sign, is what keeps the team from either panicking early or waiting too long to react." },
  { check: "Location pages checked against the doorway-abuse risk", why: "Applies whenever the structure includes multiple physical locations; templated pages with no real local content are a named, current Google enforcement target." },
];

function BrandArchitectureDiagram() {
  return (
    <svg viewBox="0 0 900 220" className="h-auto w-full">
      <text x={150} y={24} textAnchor="middle" className="fill-ink/50 text-[10px] font-medium uppercase tracking-wide">
        House of brands
      </text>
      <rect x={95} y={40} width={110} height={30} rx={8} className="fill-paper-2 stroke-line" />
      <text x={150} y={59} textAnchor="middle" className="fill-ink/40 text-[9px]">
        Parent (invisible)
      </text>
      {[40, 150, 260].map((cx, i) => (
        <g key={`hob-${i}`}>
          <line x1={150} y1={70} x2={cx} y2={100} className="stroke-line" strokeWidth={1.5} />
          <rect x={cx - 40} y={100} width={80} height={30} rx={8} className="fill-forest" />
          <text x={cx} y={119} textAnchor="middle" className="fill-signal text-[9px] font-medium">
            Brand {i + 1}
          </text>
        </g>
      ))}

      <line x1={300} y1={20} x2={300} y2={200} className="stroke-line" strokeWidth={1} strokeDasharray="3,3" />

      <text x={450} y={24} textAnchor="middle" className="fill-ink/50 text-[10px] font-medium uppercase tracking-wide">
        Branded house
      </text>
      <rect x={395} y={40} width={110} height={30} rx={8} className="fill-forest" />
      <text x={450} y={59} textAnchor="middle" className="fill-signal text-[9px] font-medium">
        Master brand
      </text>
      {[340, 450, 560].map((cx, i) => (
        <g key={`bh-${i}`}>
          <line x1={450} y1={70} x2={cx} y2={100} className="stroke-line" strokeWidth={1.5} />
          <rect x={cx - 40} y={100} width={80} height={30} rx={8} className="fill-white stroke-line" />
          <text x={cx} y={119} textAnchor="middle" className="fill-ink text-[9px] font-medium">
            Product {i + 1}
          </text>
        </g>
      ))}

      <line x1={600} y1={20} x2={600} y2={200} className="stroke-line" strokeWidth={1} strokeDasharray="3,3" />

      <text x={750} y={24} textAnchor="middle" className="fill-ink/50 text-[10px] font-medium uppercase tracking-wide">
        Hybrid / endorsed
      </text>
      <rect x={695} y={40} width={110} height={30} rx={8} className="fill-paper-2 stroke-line" />
      <text x={750} y={59} textAnchor="middle" className="fill-ink/40 text-[9px]">
        Endorsing parent
      </text>
      {[640, 750, 860].map((cx, i) => (
        <g key={`hy-${i}`}>
          <line x1={750} y1={70} x2={cx} y2={100} className="stroke-line" strokeWidth={1.5} />
          <rect x={cx - 40} y={100} width={80} height={30} rx={8} className="fill-forest" />
          <text x={cx} y={116} textAnchor="middle" className="fill-signal text-[9px] font-medium">
            Sub-brand {i + 1}
          </text>
          <text x={cx} y={126} textAnchor="middle" className="fill-signal/70 text-[7px]">
            &ldquo;by {"{parent}"}&rdquo;
          </text>
        </g>
      ))}
    </svg>
  );
}

export function M12MultiBrandMultiLocationMA() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m12-multi-brand-ma"
            title="Multi-Brand, Multi-Location & M&A Structure"
            questions={M12_MULTI_BRAND_MA_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-this-discipline-exists">
        <SectionHeading>Why This Discipline Exists</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Everything covered so far in this curriculum assumes a single brand on a single domain. Enterprise accounts
          break that assumption constantly, in three specific ways: a parent company running several distinct
          brands, a single brand operating across many physical locations or franchisees, and a merger, acquisition,
          or divestiture that changes the structure entirely partway through an engagement.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Each of these looks like a different problem on the surface, but all three reduce to the same underlying
          question: should this be tracked, measured, and built as one thing, or as several separate things? Get that
          call wrong and every downstream decision, the Topic list, the prompt portfolio, the redirect map, inherits
          the mistake.
        </p>
      </section>

      <section id="the-shared-diagnostic">
        <SectionHeading>The Shared Diagnostic: One Thing or Many</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Prompt &amp; Taxonomy Strategy already established a three-part test for splitting one Topic into two:
          a different buyer, a different problem, and different competitors. That same test decides this question
          one level up, at the level of brands, locations, or post-merger entities, not just topics.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Applying the test up a level
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Two brands, two locations, or two newly merged companies get tracked and built separately only if all
            three are genuinely true: a different buyer, a different problem being solved, and a different
            competitive set. If even one of the three is actually the same, that&rsquo;s a signal toward unifying,
            not a reason to keep them apart by default.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This mirrors what Content Strategy &amp; Lifecycle already does at the page level: decide merge vs.
          differentiate, then consolidate signal with a redirect rather than just deleting one side. The rest of
          this module is that same logic, scaled up to brands, locations, and whole companies.
        </p>
      </section>

      <section id="multi-brand-architecture">
        <SectionHeading>Multi-Brand Architecture</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A real, established framework already exists for how a parent company structures multiple brands. Where
          an account sits on it decides whether its AI-visibility tracking should be unified across brands or kept
          fully separate per brand.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Model</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it is</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">When it fits</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {PORTFOLIO_MODELS.map((m) => (
                <tr key={m.model}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{m.model}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{m.whatItIs}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{m.whenItFits}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{m.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-4 overflow-x-auto rounded-card border border-line bg-white p-5">
          <BrandArchitectureDiagram />
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The framework itself doesn&rsquo;t come with a built-in answer for AI-visibility tracking, that part is an
          extension worth being explicit about. A house-of-brands portfolio gets a fully separate Topic list and
          prompt portfolio per brand, run through Prompt &amp; Taxonomy Strategy independently, since the shared
          diagnostic says they&rsquo;re genuinely different on all three counts. A branded house consolidates into
          one shared portfolio. A hybrid keeps separate Topics for what&rsquo;s genuinely distinct per sub-brand,
          while tracking the shared elements, trust, loyalty, proof points, once at the parent level.
        </p>
      </section>

      <section id="multi-location-architecture">
        <SectionHeading>Multi-Location Architecture</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A multi-location or franchise account has to answer the same one-thing-or-many question at the level of
          individual location pages, and Google has made the wrong answer an active, current enforcement target.
          Its September 2025 spam update specifically named templated location pages, real estate with only the
          town name swapped, as a doorway-abuse pattern. This is the same diagnostic already covered in Competitive
          Positioning &amp; Comparison Diagnostics, applied here instead of to comparison pages.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The practical fix is a content matrix that splits ownership deliberately, instead of defaulting to either
          extreme: a single corporate template stamped out everywhere, or fully autonomous franchisee pages with no
          shared foundation at all.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Layer</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Who owns it</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it covers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CONTENT_MATRIX.map((c) => (
                <tr key={c.layer}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{c.layer}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.whoOwnsIt}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.whatItCovers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          A real location page and a doorway page can be structurally identical at the template level; what separates
          them is whether that local layer actually got filled in with something true and specific, or left as a
          find-and-replace on the town name.
        </p>
      </section>

      <section id="ma-consolidation-mechanics">
        <SectionHeading>M&amp;A Consolidation Mechanics</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A merger or acquisition usually forces a domain or brand consolidation on a deadline. Four principles
          decide whether that consolidation preserves the visibility both sides had, or loses most of it.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Principle</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {REDIRECT_PRINCIPLES.map((r) => (
                <tr key={r.principle}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{r.principle}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{r.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The single most common cause of a catastrophic migration isn&rsquo;t a bad redirect map, it&rsquo;s
          combining every change into one simultaneous event.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          {STAGING_STEPS.map((s) => (
            <li key={s.step}>
              <span className="font-medium text-ink">{s.step}.</span> {s.whatItMeans}
            </li>
          ))}
        </ul>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Recovery timelines vary enormously depending on how the migration was actually executed.
        </p>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Scenario</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Typical recovery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {RECOVERY_BENCHMARKS.map((r) => (
                <tr key={r.scenario}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{r.scenario}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{r.typicalRecovery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="divestiture">
        <SectionHeading>Divestiture: the Reverse Direction</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Splitting a brand out of a parent company is its own discipline, not just a consolidation run backward.
          Trademark and domain-name rights usually need settling first, can the departing entity keep any version
          of the parent&rsquo;s name at all, before any content or technical work starts. During the transition,
          real separations commonly deploy explicit brand-separation signals on both properties, updated metadata,
          rewritten navigation, so crawlers stop treating the two as one entity with overlapping content.
        </p>
        <div className="space-y-4">
          {DIVESTITURE_FAILURE_MODES.map((f) => (
            <div key={f.mode} className="rounded-card border border-line bg-paper-2 p-4">
              <div className="mb-2 text-sm font-medium text-ink">{f.mode}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Looks like: </span>
                {f.whatItLooksLike}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Mitigation: </span>
                {f.mitigation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="sequencing-a-consolidation">
        <SectionHeading>Sequencing a Consolidation</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Seven steps turn the principles above into an actual sequence for a specific account, whether the trigger
          is a brand-portfolio decision, a location-network cleanup, or a live M&amp;A event.
        </p>
        <ol className="list-outside list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/80">
          {SEQUENCING_STEPS.map((s) => (
            <li key={s.step}>
              <span className="font-medium text-ink">{s.step}.</span> {s.whatYouDo}
            </li>
          ))}
        </ol>
      </section>

      <section id="faq">
        <SectionHeading>Edge Cases Worth Knowing</SectionHeading>
        <div className="max-w-2xl space-y-3">
          {FAQ_ITEMS.map((f) => (
            <details key={f.question} className="group rounded-card border border-line bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="shrink-0 text-lg leading-none text-ink/40 transition-transform duration-150 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="the-checklist">
        <SectionHeading>Before You Sequence a Consolidation</SectionHeading>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Check</th>
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
