import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M3_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "seo-basics", label: "What SEO Is" },
  { id: "core-vocabulary", label: "Core Vocabulary" },
  { id: "serp-anatomy", label: "Anatomy of a SERP" },
  { id: "search-intent", label: "Search Intent" },
  { id: "seo-team-workflow", label: "SEO Team & Workflow" },
  { id: "off-page-fundamentals", label: "Off-Page Fundamentals" },
  { id: "eeat", label: "E-E-A-T" },
  { id: "technical-mechanisms", label: "Technical Mechanisms" },
  { id: "diagnosing-sites", label: "Diagnosing & Tooling" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
  link?: string;
}

const CORE_VOCAB: DefinitionEntry[] = [
  {
    term: "Traditional search",
    definition:
      "Search engines like Google, Bing, and Yahoo as a channel, distinct from AI-driven answer engines. The outcome measured here is visibility and organic traffic: where a page ranks and how many clicks that ranking earns.",
  },
  {
    term: "SERP",
    definition:
      "The full results page for a query: organic listings plus paid ads, snippets, and other surfaces all competing for the same attention. Full anatomy below.",
  },
  {
    term: "Organic vs. paid",
    definition:
      "Organic results are earned through relevance and optimization. Paid results are auction-bought placements, clearly labeled. The two run on completely different mechanisms even when they sit on the same page.",
  },
  {
    term: "Keyword",
    definition:
      "The unit most SEO planning is organized around: a word or phrase a searcher types in. Diagnostic work groups keywords by intent and funnel stage, not just volume, since two keywords with identical volume can call for entirely different content.",
  },
  {
    term: "Search intent",
    definition:
      "The goal behind a query, not just its words. Four types cover most searches: informational (“what is technical SEO”, top of funnel), navigational (“AirOps login”, brand-specific), commercial investigation (“best AEO platform 2026”, mid-funnel comparison), and transactional (“AirOps pricing”, bottom of funnel). Matching content to the right intent matters more than matching it to the keyword itself. Full breakdown below.",
    link: "#search-intent",
  },
  {
    term: "Ranking factor",
    definition:
      "Any signal an algorithm weighs when ordering results, from relevance to page speed to backlink profile. Hundreds exist, but grouping them into intent, technical health, and authority is what makes them usable for diagnosis instead of trivia.",
  },
  {
    term: "Backlink",
    definition:
      "A link from another site pointing to this one. Search engines read backlinks as a trust signal, a long-established ranking input. Backlink quality shows only a weak-to-moderate correlation with AI-citation likelihood in available industry data, real but far less settled than its role in classic ranking. Either way, the quality and relevance of the linking source matters far more than raw count.",
  },
  {
    term: "Meta tag",
    definition:
      "HTML metadata, like the title tag and meta description, that describes a page to search engines and often becomes the actual text shown in its SERP listing.",
  },
  {
    term: "Crawl",
    definition:
      "How a search engine's bots discover pages by following links. A page has to be crawled before it can be indexed, and indexed before it can rank.",
  },
  {
    term: "Index",
    definition:
      "The search engine's stored, searchable copy of a crawled page. Crawled but not indexed is a common failure mode on its own, and one worth being able to name precisely when diagnosing a site.",
  },
  {
    term: "Domain authority",
    definition:
      "A third-party score approximating how much accumulated trust a domain carries, driven mostly by backlink profile quality. Not a metric any search engine or AI system actually consumes, just a human-facing stand-in for site credibility. Industry data shows only a weak-to-moderate correlation between domain-authority-type signals and AI-citation likelihood specifically, so treat that connection as suggestive, not proven.",
  },
  {
    term: "E-E-A-T",
    definition:
      "Google's quality framework for evaluating content: Experience, Expertise, Authoritativeness, Trustworthiness. Not a direct ranking factor itself, but the lens raters and algorithms both use to approximate credibility, especially on topics where bad information carries real-world consequences. Full breakdown below.",
    link: "#eeat",
  },
];

interface RankingFactorTier {
  tier: string;
  factor: string;
  whatItMeans: string;
  whyItSitsHere: string;
  link?: string;
}

const RANKING_HIERARCHY: RankingFactorTier[] = [
  {
    tier: "1",
    factor: "Crawlability & indexability",
    whatItMeans:
      "Google's bots have to be able to reach the page (via robots.txt, internal links, sitemap) and choose to add it to the index.",
    whyItSitsHere:
      "A prerequisite, not a competing factor. If the page isn't indexed, nothing else on this list matters at all.",
  },
  {
    tier: "2",
    factor: "Search intent match",
    whatItMeans:
      "Whether the content answers the specific goal behind the query: informational, navigational, commercial, or transactional.",
    whyItSitsHere:
      "The biggest driver of ranking movement once a page is eligible. Get this wrong and no other factor compensates.",
    link: "#search-intent",
  },
  {
    tier: "3",
    factor: "Technical health",
    whatItMeans:
      "Page speed, mobile-friendliness, clean markup and structured data, no crawl errors.",
    whyItSitsHere:
      "Necessary to let relevance come through, not a substitute for it. A fast page that misses intent still won't rank.",
  },
  {
    tier: "4",
    factor: "Authority & trust",
    whatItMeans:
      "Backlink profile quality, domain reputation, and E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness).",
    whyItSitsHere:
      "Decides the winner when multiple pages already match intent well, especially on competitive queries.",
    link: "#eeat",
  },
];

interface EeatComponent {
  component: string;
  whatItMeans: string;
  signals: string;
}

const EEAT_TABLE: EeatComponent[] = [
  {
    component: "E — Experience",
    whatItMeans: "Firsthand, lived experience with the topic, not just knowledge about it.",
    signals: "Original photos or data, first-person accounts (\"I used this for three months\"), specifics only someone who actually did the thing would know.",
  },
  {
    component: "E — Expertise",
    whatItMeans: "Depth of skill or knowledge in the subject matter.",
    signals: "Author credentials and bios, technically accurate detail, citations to primary sources.",
  },
  {
    component: "A — Authoritativeness",
    whatItMeans: "Being recognized as a go-to source on the topic, by others, not just self-claimed.",
    signals: "Being cited and linked to by other reputable sites, industry recognition, consistent coverage of a topic over time.",
  },
  {
    component: "T — Trustworthiness",
    whatItMeans: "Whether the content and the site can be relied on: accurate, transparent, and safe.",
    signals: "Secure site (HTTPS), transparent authorship and sourcing, accurate and current information, no deceptive practices.",
  },
];

interface SerpSurfaceRow {
  surface: string;
  whatItIs: string;
  competesFor: string;
}

const SERP_SURFACES: SerpSurfaceRow[] = [
  { surface: "Organic results", whatItIs: "Algorithmically ranked links.", competesFor: "Page-one real estate, mostly informational and considered clicks." },
  {
    surface: "Paid ads",
    whatItIs: "Auction-based placements shown above or beside organic results.",
    competesFor: "Top-of-page attention, weighted toward high commercial intent.",
  },
  {
    surface: "Featured snippet",
    whatItIs: "A pulled excerpt answering the query directly at the top of results.",
    competesFor: "The “position zero” click, sometimes at the expense of the ranking pages below it.",
  },
  {
    surface: "People Also Ask",
    whatItIs: "Expandable boxes of related questions, interleaved mid-page.",
    competesFor: "Additional query real estate, and a common source of content-gap opportunities.",
  },
  {
    surface: "Local pack",
    whatItIs: "A map plus a short list of local business listings.",
    competesFor: "Nearly all attention on queries with local intent.",
  },
  {
    surface: "Knowledge panel",
    whatItIs: "Google's own sourced summary panel for entities and brands, often pulled from structured data.",
    competesFor: "Brand-level visibility. It's not a clickable ranking slot competitors bid or optimize their way into directly.",
  },
  {
    surface: "AI Overviews / AI Mode",
    whatItIs: "Generative summaries synthesized from multiple sources, shown above traditional results.",
    competesFor: "Increasingly the first thing a searcher sees, with real potential to suppress clicks to organic results entirely.",
  },
];

interface RoleEntry {
  role: string;
  owns: string;
  handoff: string;
}

const SEO_ROLES: RoleEntry[] = [
  {
    role: "Technical SEO",
    owns: "Crawlability, indexation, site health, page speed, and structured data.",
    handoff: "Hands page-level fixes to whoever owns the CMS or dev backlog.",
  },
  {
    role: "Content / on-page",
    owns: "Keyword research, content briefs, on-page optimization, and the publishing calendar.",
    handoff: "Hands finished pages to technical SEO to confirm they're indexable, and to off-page for promotion.",
  },
  {
    role: "Off-page / link building",
    owns: "Outreach, backlink acquisition, and digital PR.",
    handoff: "Feeds authority signals back that make the content team's pages easier to rank and the technical foundation's trust signals stronger.",
  },
];

interface GapAnalysisType {
  name: string;
  workflow: string[];
  tools: string;
  outcome: string;
}

const GAP_ANALYSIS_TYPES: GapAnalysisType[] = [
  {
    name: "Keyword Gap Analysis",
    workflow: [
      "Build the competitive set: pick 3–5 real or aspirational competitors to benchmark against.",
      "Pull each competitor's ranking keywords, plus the client's own, from a competitor-research tool, since Search Console only shows the client's own data.",
      "Diff the two lists to isolate terms competitors rank for that the client doesn't rank for at all, or ranks weakly for.",
      "Filter and prioritize by relevance to intent and ranking difficulty, not raw search volume alone.",
      "Package the result as a prioritized keyword list and hand it to whoever owns content briefs.",
    ],
    tools: "Ahrefs, Semrush, or Moz for competitor keyword data; Google Search Console for the client's own current rankings; a shared spreadsheet for the diff and prioritization pass.",
    outcome:
      "A prioritized list of concrete keyword opportunities, ready to route straight into content briefs instead of starting from a blank page.",
  },
  {
    name: "Content Gap Analysis",
    workflow: [
      "Start from the same competitive set used for the keyword gap analysis.",
      "Inventory each competitor's site: crawl or manually map the topics, subtopics, and content types they cover (comparison pages, use-case pages, FAQ coverage, and so on).",
      "Inventory the client's own site the same way.",
      "Diff the two inventories at the topic and content-type level, not the keyword level: what does a competitor cover that doesn't exist anywhere on the client's site.",
      "Prioritize by funnel stage and business relevance, then hand off as a list of pages or content types that need to be built.",
    ],
    tools: "Screaming Frog or a similar crawler for the site inventory; Ahrefs/Semrush content-gap tooling as a shortcut, though it still needs a manual sanity check; a shared spreadsheet for the diff and prioritization pass.",
    outcome:
      "A map of entire missing topics or content types, not just missing keywords: what pages need to exist, not only what an existing page should target.",
  },
];

interface IntentRow {
  intent: string;
  definition: string;
  example: string;
  funnelStage: string;
  outcome: string;
}

const INTENT_TABLE: IntentRow[] = [
  {
    intent: "Informational",
    definition: "The searcher wants to learn something or get a question answered, with no immediate intent to buy.",
    example: "“what is technical SEO”",
    funnelStage: "Top of funnel, awareness",
    outcome: "Builds trust and top-of-funnel traffic. Rarely converts directly.",
  },
  {
    intent: "Navigational",
    definition: "The searcher already knows the destination and is using search as a shortcut to get there.",
    example: "“AirOps login”",
    funnelStage: "Any stage, brand-specific",
    outcome: "Protects and serves existing brand demand.",
  },
  {
    intent: "Commercial investigation",
    definition: "The searcher is comparing options before deciding, weighing alternatives against each other.",
    example: "“best AEO platform 2026”",
    funnelStage: "Middle of funnel, consideration",
    outcome: "Where comparison and evaluation content wins or loses a deal.",
  },
  {
    intent: "Transactional",
    definition: "The searcher is ready to act now: buy, sign up, or contact sales.",
    example: "“AirOps pricing”",
    funnelStage: "Bottom of funnel, decision",
    outcome: "Directly tied to conversion and revenue.",
  },
];

interface MechanismRow {
  mechanism: string;
  goodLooksLike: string;
  whyItMatters: string;
}

const ONPAGE_MECHANISMS: MechanismRow[] = [
  {
    mechanism: "Crawlability",
    goodLooksLike: "No accidental blocks in robots.txt, no orphaned pages, a logical link structure a bot can traverse.",
    whyItMatters: "If a bot can't reach a page, nothing else about that page matters.",
  },
  {
    mechanism: "Robots.txt",
    goodLooksLike: "Blocks only what should genuinely stay out of the index, like admin routes or duplicate parameter URLs, and never accidentally blocks priority pages.",
    whyItMatters: "A misconfigured robots.txt is one of the most common one-line causes of a page, or an entire site, silently disappearing from search.",
  },
  {
    mechanism: "Crawl budget",
    goodLooksLike: "No bloat: no infinite parameter-generated URLs, thin duplicate pages, or dead ends burning through the crawler's allotted time on the site.",
    whyItMatters: "A search engine only crawls a finite amount of a site in a given window. Wasting it on low-value pages means priority pages get crawled, and refreshed, less often.",
  },
  {
    mechanism: "Internal linking",
    goodLooksLike: "Pages link to related content using descriptive anchor text, and the pages that matter most receive more internal links pointing at them.",
    whyItMatters: "Internal links are how authority and crawl priority flow around a site, and how a crawler learns which pages matter most relative to the rest.",
  },
  {
    mechanism: "Sitemap",
    goodLooksLike: "An accurate, up-to-date XML sitemap, submitted through Search Console, listing canonical URLs only.",
    whyItMatters: "Helps a crawler find pages that internal linking alone might miss, especially on large or newer sites.",
  },
  {
    mechanism: "Indexation",
    goodLooksLike: "Pages return clean 200s, canonical tags point at the right URL, no unintentional noindex tags.",
    whyItMatters: "A crawled page still has to be indexed before it's even eligible to rank.",
  },
  {
    mechanism: "Site architecture",
    goodLooksLike: "A shallow hierarchy, ideally a few clicks or fewer from the homepage to any page, with clear categories and consistent URL patterns.",
    whyItMatters: "Determines both what gets crawled and how link authority flows through the site.",
  },
  {
    mechanism: "Structured data / schema markup",
    goodLooksLike: "JSON-LD marking up entities, products, FAQs, and articles.",
    whyItMatters: "Helps search engines and AI systems parse what a page is actually about, and is a prerequisite for many rich SERP features.",
  },
  {
    mechanism: "Canonicalization",
    goodLooksLike: "One clear canonical URL per piece of unique content, with duplicates properly pointed at it.",
    whyItMatters: "Prevents duplicate or near-duplicate pages from splitting ranking signal or confusing which version should rank.",
  },
  {
    mechanism: "Page speed / Core Web Vitals",
    goodLooksLike: "Fast load, minimal layout shift, quick interactivity.",
    whyItMatters: "A direct ranking factor and a crawl-efficiency factor, and the first thing a user notices.",
  },
];

const OFFPAGE_MECHANISMS: MechanismRow[] = [
  {
    mechanism: "Backlink acquisition",
    goodLooksLike: "Links earned from relevant, reputable domains through outreach, digital PR, or content worth citing on its own merits.",
    whyItMatters: "Quality and relevance of the linking domain matter far more than raw link count. It's a well-established, direct signal for classic search ranking; for AI-citation likelihood specifically, available industry data shows only a weak-to-moderate correlation, real but far less settled.",
  },
  {
    mechanism: "Anchor text",
    goodLooksLike: "Natural, varied anchor text that reflects the destination page's topic, not exact-match keyword stuffing.",
    whyItMatters: "Unnatural, over-optimized anchor text patterns are a common spam signal that can suppress rankings instead of helping them.",
  },
  {
    mechanism: "Link diversity",
    goodLooksLike: "Links from a wide range of distinct domains, rather than a large volume repeated from just one or two sources.",
    whyItMatters: "A concentrated link profile from a handful of domains reads as manipulated and carries far less trust than the same link count spread across many reputable sources.",
  },
  {
    mechanism: "Nofollow / sponsored / UGC attributes",
    goodLooksLike: "Paid placements and user-generated links correctly tagged rel=\"sponsored\" or rel=\"ugc\" rather than passed as organic.",
    whyItMatters: "Mislabeling paid links as organic is a policy violation that can trigger a manual action; correct tagging keeps genuine editorial links carrying full signal.",
  },
  {
    mechanism: "Toxic link disavowal",
    goodLooksLike: "Periodic backlink audits that identify spammy or irrelevant links pointing at the site, disavowed through Search Console.",
    whyItMatters: "A toxic link profile can suppress rankings sitewide, and disavowing is the main lever available to recover from it.",
  },
  {
    mechanism: "Unlinked brand mentions",
    goodLooksLike: "Consistent, credible mentions of the brand across the web, even where no hyperlink is included.",
    whyItMatters: "In available industry data, brand mentions elsewhere on the web, linked or not, correlate more strongly with AI-citation likelihood than backlinks do. Still a correlation, not a confirmed mechanism, but the stronger of the two signals studied so far.",
  },
];

interface ToolRow {
  tool: string;
  whatItsFor: string;
  question: string;
}

const TOOLS: ToolRow[] = [
  {
    tool: "PageSpeed Insights",
    whatItsFor: "Measures Core Web Vitals and page-speed diagnostics for a specific URL.",
    question: "Is this page fast enough, and what's slowing it down?",
  },
  {
    tool: "Google Search Console",
    whatItsFor: "Shows how Google actually crawls, indexes, and ranks the site, plus real query-level performance.",
    question: "Is this page indexed, what's it ranking for, and is anything broken from Google's point of view?",
  },
  {
    tool: "GA4",
    whatItsFor: "Measures what happens after a visitor lands: behavior, engagement, and conversions.",
    question: "Once someone arrives from search, what do they actually do?",
  },
  {
    tool: "Screaming Frog (or a similar crawler)",
    whatItsFor: "Crawls a whole site the way a bot would, surfacing broken links, redirect chains, robots.txt blocks, and duplicate content at scale.",
    question: "Is this a one-page problem, or something structural affecting the whole site?",
  },
  {
    tool: "Ahrefs / Semrush",
    whatItsFor: "Competitive keyword and content data: what rivals rank for and cover that the client doesn't.",
    question: "Is this page thin or missing coverage relative to what's actually winning the query?",
  },
  {
    tool: "Rich Results Test / Schema Markup Validator",
    whatItsFor: "Checks whether a page's structured data is valid and eligible for rich SERP features.",
    question: "Is my structured data actually implemented correctly, and will it qualify for rich results?",
  },
];

interface DiagnosticCheck {
  check: string;
  whereToLook: string;
  whyHere: string;
}

const TECHNICAL_FAILURE_CHECKS: DiagnosticCheck[] = [
  {
    check: "Crawl & index status",
    whereToLook: "Google Search Console (Page Indexing / URL Inspection).",
    whyHere: "It's the only source that shows the page from Google's own point of view: whether it was crawled, indexed, or excluded, and the specific reason if not.",
  },
  {
    check: "Page speed & Core Web Vitals",
    whereToLook: "PageSpeed Insights, or the Core Web Vitals report inside Search Console.",
    whyHere: "Gives a direct pass/fail read for a specific URL. Speed and interactivity are the two most common reasons a technically-healthy-looking page still underperforms.",
  },
  {
    check: "Sitewide crawl health",
    whereToLook: "A full-site crawler like Screaming Frog.",
    whyHere: "Search Console reports one URL or aggregate trends; a crawler is what actually surfaces a broken deploy, a bad robots.txt rule, or a redirect loop across the whole site, which is what a sudden, sitewide drop usually means.",
  },
];

const CONTENT_FAILURE_CHECKS: DiagnosticCheck[] = [
  {
    check: "Intent match against current top results",
    whereToLook: "Manually read the pages currently ranking above it, cross-referenced with Search Console's query report for what the page currently ranks for.",
    whyHere: "No automated tool makes this judgment call for you. It requires directly comparing the page against whatever is actually winning the query right now.",
  },
  {
    check: "Content depth vs. competitors",
    whereToLook: "Ahrefs or Semrush's content and keyword gap tooling.",
    whyHere: "The same competitive-diffing skill from keyword and content gap analysis, applied diagnostically: is this page thin or shallow relative to what's outranking it.",
  },
  {
    check: "Freshness & engagement trend",
    whereToLook: "GA4 engagement trends over time, cross-checked against the page's last-updated date.",
    whyHere: "GA4 is the only tool here that shows what happens after a visitor lands, so a slow decline in engagement is the signal content has gone stale, even before rankings visibly collapse.",
  },
];

export function M3SeoFundamentalsManagedServices() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m3-managed-services"
            title="SEO Fundamentals & Technical Foundations"
            questions={M3_MANAGED_SERVICES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="seo-basics">
        <SectionHeading>What SEO Is</SectionHeading>

        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          SEO (Search Engine Optimization) is the practice of shaping a site so it performs better in search: more
          organic traffic, stronger brand visibility across the results page, and, increasingly, a better chance of
          being surfaced or cited inside AI-generated answers like AI Overviews and AI Mode. The same core
          fundamentals, crawlability, relevance, and credibility, shape both, though exactly how much each one is
          weighted for AI citation is still an open, fast-moving question, not a settled mirror of classic ranking.
        </p>
        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Before a page can rank for anything, three baseline conditions have to hold:
        </p>
        <ul className="mb-4 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>It has to be crawlable and indexable.</li>
          <li>Its content has to match search intent.</li>
          <li>The domain or page needs enough trust signals (backlinks, reputation) to be considered credible for that query.</li>
        </ul>
        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Clearing that bar only makes a page eligible. Actually winning the position takes more:
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Findable.</li>
          <li>Understandable to both crawlers and readers.</li>
          <li>Better matched to the query than whatever is currently outranking it.</li>
        </ul>
        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Of all of this, relevance to search intent is the single highest-leverage factor. Technical health and
          authority are necessary, but they support relevance rather than replace it: a technically flawless page
          that doesn&rsquo;t answer the query won&rsquo;t rank, while a slightly slower page that nails the intent
          often will. Best-practice execution follows directly from that ordering:
        </p>
        <ul className="mb-4 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Content tightly aligned to intent, first.</li>
          <li>Then a clean site structure.</li>
          <li>Fast pages.</li>
          <li>Credible sourcing.</li>
          <li>A consistent publishing cadence.</li>
        </ul>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Managed Services needs all of that, but has to be able to reason about why each piece is true well enough to
          diagnose problems and coordinate with an SEO team, not just recognize the pattern on sight.
        </p>

        <h3 className="mb-2 font-display text-h3 text-ink">Ranking Factor Hierarchy</h3>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Put another way, Google&rsquo;s algorithm doesn&rsquo;t weigh these factors equally. They stack, in order:
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-12 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Tier</th>
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Factor</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it means</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why it sits here</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {RANKING_HIERARCHY.map((row) => (
                <tr key={row.tier}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.tier}</td>
                  <td className="px-3 py-3 align-top font-semibold text-ink">
                    {row.link ? (
                      <a href={row.link} className="underline decoration-line underline-offset-2 hover:text-forest">
                        {row.factor}
                      </a>
                    ) : (
                      row.factor
                    )}
                  </td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatItMeans}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyItSitsHere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          A page can only move up this hierarchy in order: fix crawlability before worrying about intent, fix intent
          before worrying about page speed, and don&rsquo;t expect a backlink campaign to rescue a page that&rsquo;s
          answering the wrong question.
        </p>
      </section>

      <section id="core-vocabulary">
        <SectionHeading>Core Vocabulary</SectionHeading>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {CORE_VOCAB.map((item) => (
            <li key={item.term} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <div className="font-semibold text-ink">
                {item.link ? (
                  <a href={item.link} className="underline decoration-line underline-offset-2 hover:text-forest">
                    {item.term}
                  </a>
                ) : (
                  item.term
                )}
              </div>
              <div className="my-2 border-t border-line" />
              <div>{item.definition}</div>
            </li>
          ))}
        </ul>
      </section>

      <section id="serp-anatomy">
        <SectionHeading>Anatomy of a SERP</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A single results page is really several surfaces stacked on top of each other, each competing for the
          searcher&rsquo;s attention in a different way.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Surface</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it is</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it competes for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SERP_SURFACES.map((row) => (
                <tr key={row.surface}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.surface}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatItIs}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.competesFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          AI Overviews and AI Mode increasingly sit above everything else on the page, which is why citation inside
          them (AEO) and classic ranking (SEO) are becoming two goals pursued from the same site and the same content.
          Whether they run on the same trust signals is less settled: early industry data shows some overlap but also
          real differences in what each system weighs, so treat AEO and SEO as related, not identical.
        </p>
      </section>

      <section id="search-intent">
        <SectionHeading>Search Intent</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Search intent is the goal behind a query, not just its words. It&rsquo;s the single highest-leverage factor
          in whether a page ranks: a technically flawless, well-linked page that answers the wrong question still
          won&rsquo;t rank, while a page that nails the intent often will even with a few gaps elsewhere. Mapping a
          keyword to its intent tells you what kind of content should exist there in the first place.
        </p>

        <h3 className="mb-2 font-display text-h3 text-ink">The Four Intent Types</h3>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-[12%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Intent</th>
                <th className="w-[28%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Definition</th>
                <th className="w-[15%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Example</th>
                <th className="w-[18%] px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Funnel stage</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Business outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {INTENT_TABLE.map((row) => (
                <tr key={row.intent}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.intent}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.definition}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.example}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.funnelStage}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Mismatched intent is one of the most common reasons a page fails to rank even when it&rsquo;s technically
          sound and well written: it&rsquo;s answering a different question than the one being asked. This applies to
          AI-generated answers just as much as classic rankings, since the same intent categories determine whether a
          page gets surfaced or cited inside AI Overviews and AI Mode.
        </p>
      </section>

      <section id="seo-team-workflow">
        <SectionHeading>SEO Team &amp; Workflow</SectionHeading>

        <h3 className="mb-2 font-display text-h3 text-ink">How Traditional SEO Teams Are Structured</h3>
        <ul className="mb-6 grid gap-2 sm:grid-cols-3">
          {SEO_ROLES.map((role) => (
            <li key={role.role} className="flex flex-col rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <p className="mb-2 font-semibold text-ink">{role.role}</p>
              <p className="mb-2 text-ink/75">{role.owns}</p>
              <p className="mt-auto border-t border-line pt-2 text-xs text-ink/50">{role.handoff}</p>
            </li>
          ))}
        </ul>

        <h3 className="mb-2 font-display text-h3 text-ink">What a Content Marketer Does Day to Day</h3>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Keyword and topic research: mapping what a target audience actually searches for, and how much volume and competition each term carries.</li>
          <li>Content briefs: turning a keyword or topic into a spec a writer can execute against, covering intent, structure, and competing pages.</li>
          <li>On-page optimization: titles, headings, internal links, and content structure once a draft exists.</li>
          <li>Content calendars: sequencing publishing against priority and available capacity.</li>
          <li>Performance measurement: tying published content back to rankings, traffic, and ultimately business outcomes, not just volume shipped.</li>
        </ul>

        <h3 className="mb-2 font-display text-h3 text-ink">Content and Keyword Gap Analysis</h3>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Conceptually, both come down to the same move: build the competitive set, inventory what exists on each
          side, and diff the two. They just operate at different altitudes.
        </p>
        <ul className="mb-4 grid gap-4 sm:grid-cols-2">
          {GAP_ANALYSIS_TYPES.map((item) => (
            <li key={item.name} className="flex flex-col rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <p className="mb-2 font-semibold text-ink">{item.name}</p>
              <p className="mb-1 text-caption font-semibold tracking-wide text-ink/50 uppercase">Workflow</p>
              <ol className="mb-3 list-outside list-decimal space-y-1 pl-4 text-ink/75">
                {item.workflow.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <p className="mb-1 text-caption font-semibold tracking-wide text-ink/50 uppercase">Typical tools</p>
              <p className="mb-3 text-ink/75">{item.tools}</p>
              <div className="mt-auto border-t border-line pt-3">
                <p className="mb-1 text-caption font-semibold tracking-wide text-ink/50 uppercase">Outcome</p>
                <p className="text-ink/75">{item.outcome}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          This is the same underlying skill used later for AEO prompt and content gap analysis: the same diffing
          logic, applied to prompts and AI answers instead of keywords and pages. That transfer is covered in a later
          module, not here.
        </p>
      </section>

      <section id="off-page-fundamentals">
        <SectionHeading>Off-Page Fundamentals</SectionHeading>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Off-page SEO is mostly about backlinks, links from other sites pointing back to the client&rsquo;s. Search engines
          read a backlink as a vote of confidence, but the quality and relevance of the linking domain matter far more
          than raw count: one link from a trusted, topically relevant site outweighs dozens from low-quality or
          unrelated ones. Domain authority is a third-party score that approximates that accumulated trust; it
          isn&rsquo;t a metric any search engine or AI system actually consumes, just a useful human-facing stand-in for how
          credible a site looks. Backlinks themselves are a long-established classical SEO ranking input. Whether AI
          systems weigh them the same way when deciding what to cite is a reasonable hypothesis, not a confirmed
          mechanism, so treat that connection as directional rather than settled.
        </p>
      </section>

      <section id="eeat">
        <SectionHeading>E-E-A-T</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          E-E-A-T isn&rsquo;t a ranking factor Google plugs directly into an equation. It&rsquo;s the quality framework
          human search raters use to evaluate results, and the algorithm approximates it through measurable proxies,
          many of which are already covered above: backlink quality, domain reputation, and content depth.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Component</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it means</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Signals that demonstrate it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {EEAT_TABLE.map((row) => (
                <tr key={row.component}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.component}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatItMeans}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.signals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          It matters most on topics where bad information carries real consequences, health, finance, and safety
          content, sometimes called YMYL (Your Money or Your Life). Whether AI citation systems weigh the same
          signals the same way is still an open question, not a confirmed mechanism, but it&rsquo;s a reasonable
          framework to bring into AEO work until better data says otherwise.
        </p>
      </section>

      <section id="technical-mechanisms">
        <SectionHeading>Technical Mechanisms</SectionHeading>

        <h3 className="mb-2 font-display text-h3 text-ink">On-Page Technical Mechanisms</h3>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Mechanism</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What good looks like</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {ONPAGE_MECHANISMS.map((row) => (
                <tr key={row.mechanism}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.mechanism}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.goodLooksLike}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-2 font-display text-h3 text-ink">Off-Page Technical Mechanisms</h3>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Mechanism</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What good looks like</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {OFFPAGE_MECHANISMS.map((row) => (
                <tr key={row.mechanism}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.mechanism}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.goodLooksLike}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="diagnosing-sites">
        <SectionHeading>Diagnosing &amp; Tooling</SectionHeading>

        <h3 className="mb-2 font-display text-h3 text-ink">Diagnosing an Unfamiliar Site</h3>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          When a site is underperforming and you don&rsquo;t have history with it, the useful first question isn&rsquo;t
          &ldquo;what&rsquo;s broken,&rdquo; it&rsquo;s &ldquo;which half of the problem is this.&rdquo; Two failure modes look
          similar from the outside but call for completely different work.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Technical failure:</span> the page can&rsquo;t be found, can&rsquo;t be
            indexed, or is too slow or broken to be usable. Start here whenever a page ranks nowhere at all, or
            performance dropped suddenly and sitewide, since that rules out a one-off content problem.
          </li>
          <li>
            <span className="font-semibold text-ink">Content failure:</span> the page is crawled and indexed fine,
            but doesn&rsquo;t rank, or ranks and doesn&rsquo;t convert, because it doesn&rsquo;t match intent, isn&rsquo;t deep enough, or is
            stale relative to what&rsquo;s now ranking.
          </li>
        </ul>

        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Always rule out technical failure first: it&rsquo;s cheaper to check, and content quality isn&rsquo;t worth
          evaluating on a page that isn&rsquo;t even indexed. Within technical failure, three checks cover most cases:
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Check</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Where to look</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why here, not somewhere else</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TECHNICAL_FAILURE_CHECKS.map((row) => (
                <tr key={row.check}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.check}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whereToLook}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyHere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          If crawl, index, and speed all come back clean and the page still underperforms, move to content failure.
          Three checks cover most cases there too:
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Check</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Where to look</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why here, not somewhere else</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CONTENT_FAILURE_CHECKS.map((row) => (
                <tr key={row.check}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.check}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whereToLook}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whyHere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The pattern of the drop is itself a diagnostic clue: a sudden, sitewide drop points at something
          structural, like an algorithm update, a broken deploy, or a robots.txt change, which is technical-failure
          territory. A gradual, page-by-page decline more often points at content: intent mismatch, thin coverage, or
          a competitor that&rsquo;s simply more current and complete now.
        </p>

        <h3 className="mt-6 mb-2 font-display text-h3 text-ink">Tooling Fluency, Conceptually</h3>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Tool</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What it&rsquo;s for</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Question it answers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TOOLS.map((row) => (
                <tr key={row.tool}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.tool}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatItsFor}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Where this goes next
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            This page gives you the mechanisms and the reasoning framework, not the full manual audit methodology,
            and not the keyword-to-prompt-gap-analysis transfer logic that connects this to AEO work. Both are
            covered step by step in a later module. Treat this as the conceptual foundation you bring into that
            module, not a substitute for it.
          </p>
        </div>
      </section>
    </div>
  );
}
