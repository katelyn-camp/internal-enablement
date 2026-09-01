import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "why-it-still-matters", label: "Why SEO Still Matters Here" },
  { id: "the-credibility-bar", label: "The Credibility Bar" },
  { id: "reading-a-site", label: "Reading a Site Like a Rep" },
  { id: "vocabulary", label: "Vocabulary" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
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
  {
    term: "Locked CMS",
    definition:
      "The client's marketing team doesn't control publishing to their own site: a developer, a partner, or a platform owns that pipeline. A real constraint on what a services engagement can promise to deliver and how fast, worth surfacing on a first call.",
  },
];

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

        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The line that lands
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Just because you show up in Google doesn&rsquo;t mean you show up in ChatGPT.&rdquo; A prospect
            who&rsquo;s confident in their SEO program has usually never checked whether their site is even
            crawlable by the bots that feed AI answers. That gap is where this module earns its place in a
            conversation, not in the mechanics of ranking.
          </p>
        </div>
      </section>

      <section id="the-credibility-bar">
        <SectionHeading>The Credibility Bar</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The bar here isn&rsquo;t becoming an SEO. It&rsquo;s knowing enough to not get caught flat-footed when a
          CMO or a VP of Growth steers the conversation there, and to ask a question sharp enough that they take you
          seriously as a thought partner instead of someone reciting slides.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            A page has to be crawlable and indexable before anything else about it matters, technically or
            strategically.
          </li>
          <li>
            Relevance to what the buyer is actually asking beats every other factor. A fast, technically flawless
            page that answers the wrong question still loses.
          </li>
          <li>
            Authority and trust signals (backlinks, domain reputation) decide the winner only once several
            competitors already clear that relevance bar. They&rsquo;re a tiebreaker, not the whole game.
          </li>
        </ul>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          That ordering is also the ordering of the pitch: don&rsquo;t open a conversation about backlinks with a
          prospect whose site isn&rsquo;t even indexed. Fix, or at least name, the more foundational problem first.
        </p>
      </section>

      <section id="reading-a-site">
        <SectionHeading>Reading a Site Like a Rep</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          You don&rsquo;t need to run an audit to notice something&rsquo;s off. A few patterns are visible in
          minutes and reliably point at real, sellable problems: messy or inconsistent navigation, broken links, no
          real content hub or blog, a slow and bloated homepage, or a site that clearly hasn&rsquo;t been
          technically maintained in years. Spotting these is pattern recognition, noticing the smoke. Diagnosing the
          actual fire, and fixing it, is what Services does next.
        </p>

        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The question that qualifies the deal
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Who actually publishes to your site, and how long does that take?&rdquo; A locked CMS, where
            marketing doesn&rsquo;t control its own publishing pipeline, doesn&rsquo;t rule out an engagement, but it
            changes what can be promised and how fast. That&rsquo;s an expectation-setting question worth asking
            early, not a disqualifier discovered late.
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Site architecture and page speed matter for the same reason they always have: a shallow, logical structure
          gets everything crawled and lets authority flow through the site; a slow, bloated homepage gets crawled
          less and converts worse. Neither one is a story to tell in depth on a discovery call. Both are worth
          naming as evidence that the foundation needs work before any AI-visibility investment can compound.
        </p>
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
