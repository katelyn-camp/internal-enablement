import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "seo-fundamentals", label: "SEO Fundamentals" },
  { id: "technical-foundations", label: "Technical Foundations" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
}

const SEO_VOCAB: DefinitionEntry[] = [
  {
    term: "SERP",
    definition:
      "Search Engine Results Page, the page a search engine shows for a query. It mixes organic listings with ads and other elements, not just a plain list of links.",
  },
  {
    term: "Organic vs. paid",
    definition:
      "Organic results are earned through relevance and optimization, free to appear in. Paid results are ads bought through platforms like Google Ads, and labeled as such.",
  },
  {
    term: "Keyword",
    definition: "A word or phrase a searcher types in, and the unit SEO work is usually organized around: which keywords a page targets and ranks for.",
  },
  {
    term: "Ranking factor",
    definition:
      "Any signal a search engine weighs when deciding where to place a page in results, from relevance to page speed to backlinks. There are hundreds of these.",
  },
  {
    term: "Backlink",
    definition: "A link from another website pointing to yours. Search engines treat backlinks as votes of confidence, especially from reputable, relevant sites.",
  },
  {
    term: "Meta tag",
    definition: "HTML snippets, like the title tag and meta description, that describe a page to search engines and often appear directly in its SERP listing.",
  },
  {
    term: "Crawl",
    definition: "The process by which a search engine's bots discover and read pages by following links across the web.",
  },
  {
    term: "Index",
    definition: "The search engine's stored copy of a crawled page. A page has to be indexed, not just crawled, before it's eligible to rank for anything.",
  },
  {
    term: "Domain authority",
    definition:
      "A third-party score estimating how likely a domain is to rank, based largely on the size and quality of its backlink profile. Not a Google metric, but a useful shorthand for site credibility.",
  },
];

const TECHNICAL_VOCAB: DefinitionEntry[] = [
  {
    term: "Crawl budget",
    definition: "The finite number of pages a search engine will crawl on a given site within a given window of time.",
  },
  {
    term: "Internal linking",
    definition: "Links from one page on a site to another. They tell crawlers what exists and which pages matter most.",
  },
  {
    term: "Core Web Vitals",
    definition: "Google's page-experience metrics: how fast a page loads, how quickly it responds to input, and how visually stable it is while loading.",
  },
  {
    term: "Site architecture",
    definition: "How a site's pages are organized and connected: navigation, categories, and URL structure.",
  },
  {
    term: "Sitemap",
    definition: "An XML file listing a site's pages, submitted to search engines to help them find everything, including pages that are hard to reach by links alone.",
  },
  {
    term: "Robots.txt",
    definition: "A file at a site's root that tells crawlers which parts of the site they're allowed to crawl.",
  },
];

export function M3SeoFundamentalsSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="seo-fundamentals">
        <SectionHeading>SEO Fundamentals</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          SEO (Search Engine Optimization) is the practice of shaping a site so it performs better in search. That
          covers three overlapping kinds of visibility: organic traffic to the site, brand visibility across the
          results page itself, and, increasingly, whether a brand gets surfaced or cited inside AI-generated answers
          like AI Overviews and AI Mode. All three run on the same underlying signals, which is why the fundamentals
          below still matter even as more discovery moves into AI answers.
        </p>

        <h3 className="mb-2 font-display text-h3 text-ink">What Has to Be True Before a Page Can Rank at All</h3>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>It has to be crawlable and indexable, findable by search engines and added to their index.</li>
          <li>Its content has to match search intent, actually answering what the searcher is looking for.</li>
          <li>The domain or page needs enough trust signals (backlinks, reputation) to be considered credible for that query.</li>
        </ul>

        <h3 className="mb-2 font-display text-h3 text-ink">What Has to Be True to Actually Win the Spot</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Meeting the baseline gets a page into consideration. Winning position against everything else competing for
          the same query takes more: the page has to be findable, understandable to both crawlers and readers, and
          better matched to the query than whatever&rsquo;s currently outranking it.
        </p>

        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The top lever
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Relevance to search intent is the single highest-leverage factor in SEO. Technical health and authority
            are necessary, but they support relevance, they don&rsquo;t replace it. A technically flawless page that
            doesn&rsquo;t answer the query won&rsquo;t rank; a slightly slower page that nails the intent often will.
          </p>
        </div>

        <h3 className="mb-2 font-display text-h3 text-ink">Best Practices, at a Glance</h3>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Content tightly aligned to search intent</li>
          <li>Clean, logical site structure</li>
          <li>Fast-loading pages</li>
          <li>Credible, well-sourced content</li>
          <li>Consistent publishing cadence</li>
        </ul>

        <h3 className="mb-2 font-display text-h3 text-ink">Vocabulary</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {SEO_VOCAB.map((item) => (
            <li key={item.term} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.term}:</span> {item.definition}
            </li>
          ))}
        </ul>
      </section>

      <section id="technical-foundations">
        <SectionHeading>Technical Foundations</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Technical foundations are the plumbing underneath everything else in SEO. Fundamentals determine whether a
          page has the right content; technical foundations determine whether it&rsquo;s even reachable and readable
          in the first place.
        </p>

        <h3 className="mb-2 font-display text-h3 text-ink">Why Site Architecture Matters</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Navigation, internal linking, and URL structure are how crawlers find pages and understand how they relate
          to each other. A shallow, logical structure gets everything crawled and passes authority around the site
          efficiently. A messy one buries pages so deep that crawlers rarely reach them.
        </p>

        <h3 className="mb-2 font-display text-h3 text-ink">Why Page Speed Matters</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Core Web Vitals, Google&rsquo;s page-experience metrics, are a direct ranking factor. Slow sites also get
          crawled less efficiently, since crawlers budget a limited amount of time and requests per site. On top of
          the ranking impact, slow pages simply convert worse.
        </p>

        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Spotting an opportunity, not diagnosing one
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            On a prospect&rsquo;s site, you don&rsquo;t need to run an audit to notice something&rsquo;s off. A few
            patterns are visible in minutes and reliably point at deeper technical debt: messy or inconsistent
            navigation, broken links, no real content hub or blog, a slow and bloated homepage, or a site that
            clearly hasn&rsquo;t been technically maintained in years. Flagging these is pattern recognition, spotting
            the smoke. Diagnosing the actual fire is what Managed Services does next.
          </p>
        </div>

        <h3 className="mb-2 font-display text-h3 text-ink">Vocabulary</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {TECHNICAL_VOCAB.map((item) => (
            <li key={item.term} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.term}:</span> {item.definition}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
