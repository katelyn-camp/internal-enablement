import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "why-it-still-matters", label: "Why SEO Still Matters Here" },
  { id: "how-ranking-works", label: "How Ranking Works" },
  { id: "algorithm-updates", label: "Recent Algorithm Updates" },
  { id: "site-diagnostic", label: "The Light SEO Diagnostic" },
  { id: "business-signals", label: "What Might Have Caused It" },
  { id: "industry-patterns", label: "Industry-Specific Patterns" },
  { id: "vocabulary", label: "Vocabulary" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
}

interface AlgorithmUpdate {
  update: string;
  type: string;
  target: string;
  takeaway: string;
}

interface IndustryPattern {
  industry: string;
  whatMattersMost: string;
  why: string;
}

interface DiagnosticEntry {
  action: string;
  pointsTo: string;
  whyItMatters: string;
}

interface TooltipTermDef {
  match: string;
  definition: string;
  example: string;
}

const DIAGNOSTIC: DiagnosticEntry[] = [
  {
    action:
      "Search “site:theirdomain.com” on Google, skim the count, and check it against how many pages the nav suggests should exist.",
    pointsTo:
      "A low count cuts two ways. If the nav implies a much bigger site than what’s showing, that’s a crawl or indexing problem: pages exist but Google hasn’t stored them. If the nav is just as thin, the site genuinely only has a handful of pages, that’s a content-depth problem instead.",
    whyItMatters:
      "Either way, an AI answer engine treats an unindexed page and a page that was never written the same: nothing to trust, nothing to cite. Which one it is changes what Services fixes, not that there’s a foundation problem to address before any AEO conversation goes further.",
  },
  {
    action:
      "Open theirdomain.com/robots.txt. If it exists, check the disallow list for GPTBot, PerplexityBot, ClaudeBot, or Google-Extended.",
    pointsTo:
      "Most sites have this file, but not all, and a 404 here is normal: no file means no explicit disallow rules, so the default is “crawl everything.” The signal isn’t whether the file exists, it’s whether it exists and specifically names an AI bot in its disallow list.",
    whyItMatters:
      "This is the single most 2020s-specific finding on this list. A prospect can be confident in their SEO and still be invisible in ChatGPT or Perplexity because someone, often a developer, years ago, locked the door to AI crawlers with a rule written before AI search existed.",
  },
  {
    action: "Load the homepage on a fresh connection and just watch it: instant, or does it visibly crawl in?",
    pointsTo: "Page bloat: oversized images, unoptimized scripts, or unnecessary third-party tags.",
    whyItMatters:
      "A slow homepage gets crawled less thoroughly, since crawl budget is finite, and converts worse for the humans who wait it out anyway.",
  },
  {
    action: "Click through the top-level nav and a few footer links.",
    pointsTo: "Broken or dead links, a sign the site hasn’t been actively maintained.",
    whyItMatters:
      "Broken links strand crawlers mid-path and cut off the authority a link structure is supposed to pass through the site. It’s also a fast, visible tell that this prospect’s foundation hasn’t been touched in a while.",
  },
  {
    action: "Look for a blog or resource hub, and check the date on the most recent post.",
    pointsTo: "Whether there’s an active content engine, or a hub that was built once and abandoned.",
    whyItMatters:
      "AI answer engines favor sources that are current and keep publishing on a topic. A hub with a most-recent post from two years ago means there’s nothing new for an AI to find, trust, or cite, no matter how good the older content was.",
  },
  {
    action:
      "Scan the homepage’s first screen for one clear, quotable sentence answering “what does this company actually do?”",
    pointsTo: "Whether the copy is written to be extracted, or just written to sound good.",
    whyItMatters:
      "AI Overviews and chat answers work by lifting a concise, self-contained claim out of a page. Vague hero copy gives an AI nothing clean to quote, so it quotes a competitor instead.",
  },
  {
    action: "Pull the site up on your phone.",
    pointsTo: "Mobile responsiveness and layout problems that don’t show up on a laptop screen.",
    whyItMatters:
      "Google has crawled and indexed primarily off the mobile version of a site for years, a policy called mobile-first indexing. That means a fast, polished desktop site tells the algorithm almost nothing: if the mobile version is slow or broken, mobile is what gets ranked on, desktop performance doesn't offset it. Layer on top of that where real buyers actually look a company up, on their phone, in the moment, not at a desk, and a mobile-only problem is really two problems stacked on each other.",
  },
];

const BUSINESS_SIGNALS: DiagnosticEntry[] = [
  {
    action:
      "Check the Wayback Machine (web.archive.org) for a domain change, a redesign, or a URL structure that looks totally different a year or two ago.",
    pointsTo:
      "A migration or replatform happened around that time, and quite possibly explains a ranking or traffic drop the prospect will bring up unprompted.",
    whyItMatters:
      "Migrations lose SEO equity whenever redirects are missed, or done as a blanket redirect to the homepage instead of matching old URLs to new ones. If a crawler hits a dead end during that window, everything built up before it can vanish almost overnight, not because the content got worse, but because the address changed.",
  },
  {
    action: "Look up whether the company has been acquired, merged, or was formed by combining two brands.",
    pointsTo:
      "Two content histories and two backlink profiles, sometimes on two different domains, that were never properly consolidated into one.",
    whyItMatters:
      "A merger usually leaves one brand's site shut down, redirected, or half-abandoned. Backlinks pointing at the old domain, and mentions that already exist under the old name, don't automatically transfer. It's a real reason authority looks thinner than the company's actual market position.",
  },
  {
    action: "Check whether the company has changed its name, a rebrand, not just a redesign.",
    pointsTo: "A gap between the entity the market, and AI models, already know and the entity now trying to rank.",
    whyItMatters:
      "This is a distinctly AI-search problem more than a classic SEO one. A new domain can get re-crawled in weeks; the world's understanding of who this company is, baked into press coverage, directories, and whatever an LLM was trained on, updates far slower.",
  },
  {
    action: "Ask, or check job postings and press, whether marketing recently replatformed the site onto a new CMS.",
    pointsTo: "A CMS migration, one of the most common, quietly destructive events in SEO, right up there with a domain change.",
    whyItMatters:
      "Replatforms routinely lose metadata, flatten URL structures, or skip redirects entirely because the new platform's default export didn't preserve them. It's rarely intentional and rarely something the marketing team even notices caused a problem.",
  },
  {
    action:
      "Notice if the business has added a meaningfully new product line, or pivoted its core offer, since the site was last substantially rebuilt.",
    pointsTo: "Content still built for the old business, competing for the wrong keywords or answering questions today's buyer isn't asking.",
    whyItMatters:
      "This isn't a technical break, it's a mismatch. The site can be fast, indexed, and well-linked, and still lose, because search intent match is the biggest driver of ranking movement, and content aimed at an old product line isn't relevant to what today's buyer is searching, or asking an AI, about.",
  },
  {
    action:
      "Check whether a drop in traffic lines up with a known Google update (Search Engine Land and Google both publish algorithm update timelines).",
    pointsTo: "A broad core, helpful-content, or spam update, not something specific this business did.",
    whyItMatters:
      "Recovering from an algorithm update is a different problem than recovering from a broken migration: there's often no single fix, just a slower rebuild of the quality and relevance signals Google re-weighted.",
  },
  {
    action:
      "Check LinkedIn for a recent change in marketing leadership, or a cluster of former marketing employees now listed as open to work.",
    pointsTo: "A content calendar or SEO program that lost its owner, not a program that was never any good.",
    whyItMatters:
      "SEO has lag: a blog that went quiet or a link-building effort that stopped shows up as a ranking decline six to twelve months later, well after the person who owned it left.",
  },
  {
    action:
      "Watch for a browser security warning or a mixed-content padlock issue, or ask whether the site was ever flagged by Google Safe Browsing.",
    pointsTo:
      "A hack, or a sloppy http-to-https migration that left the old and new versions of the site competing with each other instead of one replacing the other.",
    whyItMatters:
      "A flagged site can fall out of search results almost overnight, and a duplicate http/https version splits the authority a domain built up in half.",
  },
  {
    action: "Ask whether marketing budget shifted more heavily toward paid search or paid social in the last year or two.",
    pointsTo: "Organic starved of investment in favor of a channel with faster, easier-to-report results, not a site that stopped working.",
    whyItMatters:
      "This one is a slow bleed, not a cliff: nothing breaks, content and backlink-building just stop, and rankings quietly erode as competitors keep publishing.",
  },
];

const ALGORITHM_UPDATES: AlgorithmUpdate[] = [
  {
    update: "August 2026 Spam Update",
    type: "Spam update",
    target:
      "Enforced Google's scaled content abuse policy: large volumes of pages built mainly to rank, whoever or whatever wrote them, plus doorway pages, thin pages, and deceptive freshness signals. Not a link spam update specifically, Google names those explicitly when backlinks are the target, and this one wasn't.",
    takeaway: "Hit harder than a typical spam update, with outsized disruption across roughly 20 industries.",
  },
  {
    update: "May 2026 Core Update",
    type: "Core update",
    target:
      "A broad reassessment, not tied to one named policy the way spam updates are. Google's own guidance for core updates is that there's no single error to fix: a page's standing can shift simply because Google's holistic sense of quality and relevance was recalculated.",
    takeaway:
      "Sites with regularly updated, expert-led content and demonstrated topical authority were more likely to hold up or improve.",
  },
  {
    update: "March 2026 Core Update",
    type: "Core update",
    target:
      "Enforced that same scaled content abuse policy, at core-update scale. Google's own policy language: “Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users... no matter how it's created.”",
    takeaway:
      "AI content farms and thin affiliate sites lost the bulk of their traffic; sites with proprietary data, original research, or first-hand experience came through fine, AI-assisted or not.",
  },
];

const INDUSTRY_PATTERNS: IndustryPattern[] = [
  {
    industry: "Health, finance, legal (YMYL)",
    whatMattersMost: "E-E-A-T scrutiny goes up sharply",
    why: "Google's own Search Quality Rater Guidelines single out these categories for elevated trust standards. Author credentials, cited sources, and clear editorial oversight matter far more here than on a typical B2B blog post.",
  },
  {
    industry: "Local & multi-location (home services, healthcare practices, restaurants, retail)",
    whatMattersMost: "Ranked by a mostly separate system",
    why: "Google Business Profile completeness, name/address/phone (NAP) consistency across the web, and review volume and recency decide the local pack, the map and three-listing block that sits above organic results for local-intent searches like “plumber near me.”",
  },
  {
    industry: "E-commerce",
    whatMattersMost: "Scale creates its own technical problems",
    why: "A big store can generate thousands of near-identical pages, one for every filter combination and every size or color variant, which spreads Google's limited attention and a site's ranking credibility too thin for any one page to win. Separately, adding hidden product details (price, stock, rating) to a page is what unlocks the eye-catching search results with a photo and price built in; without it, a product only ever shows up as a plain text link.",
  },
  {
    industry: "B2B SaaS",
    whatMattersMost: "One page rarely closes the deal",
    why: "A SaaS purchase is usually a multi-week, multi-stakeholder decision, not a single-session click-to-buy, so no one landing page can capture the whole search behavior the way a single product page can for an e-commerce purchase. Content has to span the full arc instead: educational pages for someone new to the category, comparison pages for someone shortlisting vendors, and pricing or security pages for someone about to sign.",
  },
  {
    industry: "Publishers & media",
    whatMattersMost: "Speed and freshness are the whole game",
    why: "Core Web Vitals and content velocity are weighted more heavily because of Google News and Discover eligibility, both of which run on top of, and sometimes independently of, classic organic ranking.",
  },
];

const TOOLTIP_TERMS: TooltipTermDef[] = [
  {
    match: "YMYL",
    definition:
      "“Your Money or Your Life.” Google's own Search Quality Rater Guidelines use this label for topics where inaccurate information could cause real-world harm to a person's health, financial stability, safety, or well-being, and hold pages on those topics to a higher trust bar.",
    example:
      "A page giving medication dosage advice or explaining how to file your own taxes counts as YMYL; a blog post ranking the best hiking boots generally doesn't.",
  },
  {
    match: "doorway pages",
    definition:
      "Sites or pages built to rank for a cluster of near-identical search queries, then funnel every visitor to the same destination. Google's spam policies name this explicitly: each result ends up taking the user to essentially the same place.",
    example:
      "A plumbing company publishes 200 nearly identical pages, one per city name (“Plumbing in Austin,” “Plumbing in Dallas”...), each with the same boilerplate text and phone number.",
  },
  {
    match: "thin pages",
    definition:
      "Pages with little to no unique or valuable content, often auto-generated, scraped, or padded around ads and affiliate links. Google's guidance calls out thin affiliate pages by name.",
    example:
      "An affiliate site republishes a manufacturer's product description with an affiliate link attached, no original testing, no added insight.",
  },
  {
    match: "deceptive freshness signals",
    definition:
      "Making a page look more recently updated than it actually is, without meaningfully updating its substance, to exploit Google's preference for freshness on time-sensitive queries.",
    example:
      "A post's visible date, or the year in its title (“Best CRMs for 2026”), gets bumped forward every January while the content underneath stays untouched.",
  },
  {
    match: "topical authority",
    definition:
      "How comprehensively a site demonstrates ongoing expertise on a specific subject, built through the breadth and depth of related content over time rather than any single strong page.",
    example:
      "A site with 40 well-maintained, interlinked articles covering every angle of email deliverability outranks a competitor with one excellent article and nothing else nearby.",
  },
  {
    match: "Discover eligibility",
    definition:
      "Whether a page qualifies to appear in Google Discover, the personalized feed in the Google app and mobile browser. Discover runs on its own separate content policies, on top of the ones governing classic search, including a specific ban on clickbait and exaggerated headlines.",
    example:
      "A publisher's article ranks #1 in classic Google search results but never shows up in Discover, because Discover has its own image-quality and headline requirements the article doesn't clear.",
  },
  {
    match: "manipulative links",
    definition:
      "Links acquired, exchanged, or placed mainly to inflate a page's ranking rather than to help users find genuinely relevant information. Covered under Google's link spam policies: paid links without proper tagging, excessive link exchanges, low-quality guest-post links, private blog networks.",
    example:
      "A company pays a network of unrelated blogs to insert a link back to its site inside old, unrelated articles, with no genuine editorial reason to reference it.",
  },
];

function DefinedTerm({ label, definition, example }: { label: string; definition: string; example: string }) {
  return (
    <span className="group relative inline-block">
      <button type="button" className="cursor-help border-b border-dotted border-ink/40 font-medium text-ink">
        {label}
      </button>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-72 -translate-x-1/2 rounded-card border border-line bg-white p-3 text-left text-xs leading-relaxed text-ink/70 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="mb-1.5 block">{definition}</span>
        <span className="block text-ink/50">
          <span className="font-semibold text-ink/60">Example: </span>
          {example}
        </span>
      </span>
    </span>
  );
}

const TOOLTIP_PATTERN = new RegExp(
  `(${TOOLTIP_TERMS.slice()
    .sort((a, b) => b.match.length - a.match.length)
    .map((t) => t.match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi",
);

/** Splits plain prose on any known jargon term and wraps each match in a hover/focus definition tooltip. */
function withDefinedTerms(text: string): React.ReactNode {
  return text.split(TOOLTIP_PATTERN).map((part, i) => {
    const term = TOOLTIP_TERMS.find((t) => t.match.toLowerCase() === part.toLowerCase());
    return term ? (
      <DefinedTerm key={i} label={part} definition={term.definition} example={term.example} />
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

const VOCAB: DefinitionEntry[] = [
  {
    term: "SERP",
    definition:
      "The results page for a query. A mix of organic listings, ads, and increasingly AI Overviews, all competing for the same attention, not a plain list of links.",
  },
  {
    term: "Organic vs. paid",
    definition: "Organic is earned through relevance, free to appear in. Paid is an auction-bought placement, labeled as such.",
  },
  {
    term: "Keyword",
    definition: "The word or phrase a searcher types. Still the unit most of a client's existing SEO reporting is organized around, even once the conversation moves to AI search.",
  },
  {
    term: "Backlink",
    definition:
      "A link from another site pointing to this one, read as a vote of confidence. Quality and relevance of the source matter far more than raw count, and its role in AI citation specifically is a real but far less settled signal than it is in classic ranking.",
  },
  {
    term: "Crawl / index",
    definition:
      "Crawl is how a bot discovers a page by following links. Index is whether that page then gets stored and made eligible to appear at all. A page can be crawled and still not indexed.",
  },
  {
    term: "Domain authority",
    definition:
      "A third-party score approximating how much trust a domain has built up, mostly from its backlink profile. Not a metric Google or any AI platform actually consumes, just a useful shorthand for site credibility in a conversation.",
  },
];

function DiagnosticAccordion({ items }: { items: DiagnosticEntry[] }) {
  return (
    <ol className="mb-6 max-w-2xl space-y-3">
      {items.map((item, index) => (
        <li key={item.action}>
          <details className="group rounded-card border border-line bg-white p-4 open:bg-paper-2">
            <summary className="flex cursor-pointer list-none items-start gap-3 text-sm leading-relaxed font-medium text-ink select-none">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[0.7rem] font-semibold text-signal">
                {index + 1}
              </span>
              <span className="flex-1">{item.action}</span>
              <span className="mt-0.5 shrink-0 text-ink/40 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-3 space-y-3 border-t border-line pt-3 pl-8">
              <p className="text-sm leading-relaxed text-ink/80">
                <span className="mb-1 block text-caption font-semibold tracking-wide text-ink/45 uppercase">
                  What it might point to
                </span>
                {withDefinedTerms(item.pointsTo)}
              </p>
              <p className="text-sm leading-relaxed text-ink/80">
                <span className="mb-1 block text-caption font-semibold tracking-wide text-ink/45 uppercase">
                  Why it matters today
                </span>
                {withDefinedTerms(item.whyItMatters)}
              </p>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

export function M3SeoFundamentalsSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="why-it-still-matters">
        <SectionHeading>Why SEO Still Matters Here</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          For years, SEO had a clear owner and a clear channel. AI search doesn&rsquo;t work that way: it&rsquo;s a
          category, fed by five different channels (owned content, external content, AI ads, social/influencer, and
          community), and it doesn&rsquo;t have one obvious owner inside a prospect&rsquo;s org. SEO fundamentals are
          one input into that owned-content channel, not the whole story, and not a separate thing you&rsquo;re
          selling instead of AI search.
        </p>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          That&rsquo;s also why the fundamentals below still matter even in a pitch that&rsquo;s entirely about AI
          visibility. AEO expands where a brand can get discovered, it doesn&rsquo;t erase what SEO already earned.
          A prospect with a technically broken site has the same problem in both worlds: nothing to crawl,
          nothing to trust, nothing to cite.
        </p>
      </section>

      <section id="how-ranking-works">
        <SectionHeading>How Ranking Works</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Google blends hundreds of signals into a ranking, and its own engineers have said publicly there&rsquo;s no
          fixed checklist, just weighted signals that shift per query. In practice, they stack in a clear order:
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Crawlability &amp; indexability.</span> Can a bot reach the
            page and choose to store it at all. A prerequisite, not a competing factor, nothing else here matters
            until this clears.
          </li>
          <li>
            <span className="font-semibold text-ink">Search intent match.</span> Does the page answer the specific
            goal behind the query. The single biggest driver of movement once a page is eligible to rank at all.
          </li>
          <li>
            <span className="font-semibold text-ink">Technical health.</span> Page speed, mobile-friendliness, clean
            markup, no crawl errors. Necessary to let relevance come through, not a substitute for it.
          </li>
          <li>
            <span className="font-semibold text-ink">Authority &amp; trust.</span> Backlink quality, domain
            reputation, E-E-A-T signals. Decides the winner only once competing pages already match intent well.
          </li>
        </ol>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          That ordering carries into a pitch, too: an indexing problem is foundational, a backlink profile is a
          tiebreaker, and the two aren&rsquo;t interchangeable talking points.
        </p>

        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Google doesn&rsquo;t publish click data, but third-party click-tracking studies consistently show that even
          a small slip in position has an outsized, measurable cost in visibility:
        </p>

        <div className="mb-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-card border border-line bg-white p-5">
            <p className="font-display text-h3 text-ink">18.7% → 10.2%</p>
            <p className="mt-1 text-sm font-semibold text-ink">Position 2 to Position 3</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">
              Slipping a single spot on page one costs almost half the clicks a result was getting.
              <span className="mt-1 block text-ink/40">— SE Ranking, 2025</span>
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-5">
            <p className="font-display text-h3 text-ink">0.63%</p>
            <p className="mt-1 text-sm font-semibold text-ink">Of all clicks land on page 2</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">
              Falling off page one isn&rsquo;t a gradual decline, it&rsquo;s a cliff, effectively the same as not
              ranking at all.
              <span className="mt-1 block text-ink/40">— Backlinko, analysis of 4M search results</span>
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-5">
            <p className="font-display text-h3 text-ink">15% → 8%</p>
            <p className="mt-1 text-sm font-semibold text-ink">Click-through when an AI Overview appears</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">
              Even a page-one result gets clicked roughly half as often once Google adds an AI summary above it.
              <span className="mt-1 block text-ink/40">— Pew Research Center, 2025</span>
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-ink/45">
          Exact percentages vary by study, device, and query type, and have been trending down as AI Overviews
          absorb a growing share of clicks, so treat any single number as directional. The shape is what holds
          across every study: clicks drop off sharply within page one, then fall off a cliff past it.
        </p>
      </section>

      <section id="algorithm-updates">
        <SectionHeading>Recent Algorithm Updates</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Google has shipped roughly six named updates since the start of 2026, most with more relevance to
          large-scale publishers than to any single prospect. The pattern across them matters more than any
          individual name, and checking a traffic-drop date against a public update timeline is one of the actual
          diagnostic steps in &ldquo;What Might Have Caused It&rdquo; below.
        </p>

        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            What Google actually says about AI content
          </span>
          <p className="mb-2 text-sm leading-relaxed text-ink/80">
            Straight from Google&rsquo;s own Search Central documentation, not an SEO blog&rsquo;s interpretation of
            it: &ldquo;Our focus on the quality of content, rather than how content is produced, is a useful guiding
            principle,&rdquo; and &ldquo;appropriate use of AI or automation is not against our guidelines.&rdquo;
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            The policy AI content most often runs into is scaled content abuse, defined as pages &ldquo;generated for
            the primary purpose of manipulating search rankings and not helping users&hellip; no matter how it&rsquo;s
            created.&rdquo; The trigger is the purpose and quality of the page, not whether an AI touched it, a
            description that fits plenty of human-written content too.
          </p>
        </div>

        <div className="mb-6 max-w-2xl space-y-3">
          {ALGORITHM_UPDATES.map((row) => (
            <div key={row.update} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-ink">{row.update}</span>
                <span className="rounded-full border border-line bg-paper-2 px-2 py-0.5 text-caption font-semibold tracking-wide text-ink/50 uppercase">
                  {row.type}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-ink/80">
                  <span className="mb-1 block text-caption font-semibold tracking-wide text-ink/45 uppercase">
                    What it actually targeted
                  </span>
                  {withDefinedTerms(row.target)}
                </p>
                <p className="text-sm leading-relaxed text-ink/80">
                  <span className="mb-1 block text-caption font-semibold tracking-wide text-ink/45 uppercase">
                    Why it matters for the pitch
                  </span>
                  {withDefinedTerms(row.takeaway)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          {withDefinedTerms(
            "The pattern across all of them is the same ordering already covered in How Ranking Works above, just enforced more aggressively update over update: genuine expertise, original value, and content that's actually maintained keep winning; scaled low-value content, manipulative links, and staleness keep losing. Google and Search Engine Land both publish a running, dated log of every confirmed update, the primary source for checking against a traffic-drop date.",
          )}
        </p>
      </section>

      <section id="site-diagnostic">
        <SectionHeading>The Light SEO Diagnostic</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          You don&rsquo;t need to run an audit to notice something&rsquo;s off. Everything below takes under a
          minute per item, needs nothing but a browser, and reliably points at real, sellable problems. Spotting
          these is pattern recognition; diagnosing and fixing the underlying cause is what Services does next. Open
          an item to see what it points to and why it still matters now that AI search is part of the picture.
        </p>

        <DiagnosticAccordion items={DIAGNOSTIC} />
      </section>

      <section id="business-signals">
        <SectionHeading>What Might Have Caused It</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          The diagnostic above tells you something&rsquo;s wrong. It doesn&rsquo;t tell you why. These are business
          events, not site checks, but they leave clues you can often spot before you ever ask a question out loud.
        </p>

        <DiagnosticAccordion items={BUSINESS_SIGNALS} />
      </section>

      <section id="industry-patterns">
        <SectionHeading>Industry-Specific Patterns</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Everything above applies regardless of industry. But which factor matters most, and how much a slip
          actually costs, shifts in well-documented ways depending on what the prospect&rsquo;s business is.
        </p>

        <div className="mb-6 max-w-2xl space-y-3">
          {INDUSTRY_PATTERNS.map((row) => (
            <div key={row.industry} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-ink">{withDefinedTerms(row.industry)}</span>
                <span className="rounded-full border border-line bg-paper-2 px-2 py-0.5 text-caption font-semibold tracking-wide text-ink/50 uppercase">
                  {row.whatMattersMost}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{withDefinedTerms(row.why)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vocabulary">
        <SectionHeading>Vocabulary</SectionHeading>
        <ul className="grid gap-2 sm:grid-cols-2">
          {VOCAB.map((item) => (
            <li key={item.term} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.term}:</span> {item.definition}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
