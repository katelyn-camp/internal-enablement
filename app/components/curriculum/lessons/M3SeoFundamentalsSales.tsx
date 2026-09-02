import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "why-it-still-matters", label: "Why SEO Still Matters Here" },
  { id: "the-credibility-bar", label: "The Credibility Bar" },
  { id: "site-diagnostic", label: "The Light SEO Diagnostic" },
  { id: "vocabulary", label: "Vocabulary" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
}

interface DiagnosticEntry {
  action: string;
  pointsTo: string;
  whyItMatters: string;
}

const DIAGNOSTIC: DiagnosticEntry[] = [
  {
    action: "Search “site:theirdomain.com” on Google and skim what comes back.",
    pointsTo:
      "If a surprisingly small number of pages return, or key pages are missing entirely, this is a crawl or indexing problem, not a ranking problem.",
    whyItMatters:
      "A page Google hasn’t indexed isn’t being crawled by AI bots either. Nothing to trust, nothing to cite. Every AEO conversation with this prospect is talking about a house with no foundation until this gets fixed.",
  },
  {
    action:
      "Open theirdomain.com/robots.txt and check the disallow list for GPTBot, PerplexityBot, ClaudeBot, or Google-Extended.",
    pointsTo:
      "A site can be actively, and often unknowingly, blocking the exact bots that feed AI answer engines while still ranking fine in classic Google search.",
    whyItMatters:
      "This is the single most 2020s-specific finding on this list. A prospect can be confident in their SEO and still be invisible in ChatGPT or Perplexity because someone, often a developer, years ago, locked the door to AI crawlers with a rule written before AI search existed. Nothing else here makes the SEO-vs-AEO distinction this concretely.",
  },
  {
    action: "Load the homepage on a fresh connection and just watch it: instant, or does it visibly crawl in?",
    pointsTo: "Page bloat: oversized images, unoptimized scripts, or unnecessary third-party tags.",
    whyItMatters:
      "A slow homepage gets crawled less thoroughly, since crawl budget is finite, and converts worse for the humans who wait it out anyway. Site speed hasn’t stopped mattering just because AI entered the picture; it’s still one of the first things a bot or a buyer bounces on.",
  },
  {
    action: "Click through the top-level nav and a few footer links.",
    pointsTo: "Broken or dead links, a sign the site hasn’t been actively maintained.",
    whyItMatters:
      "Broken links strand crawlers mid-path and cut off the authority a link structure is supposed to pass through the site. It’s also a fast, visible tell that this prospect’s foundation hasn’t been touched in a while, useful color for a discovery call.",
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
      "Google has indexed primarily off the mobile version of a site for years, and most real buyers today are looking a company up on their phone in the moment, not at a desk. A site that only works on desktop is failing on both counts at once.",
  },
];

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

      <section id="site-diagnostic">
        <SectionHeading>The Light SEO Diagnostic</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          You don&rsquo;t need to run an audit to notice something&rsquo;s off. Everything below takes under a
          minute per item, needs nothing but a browser, and reliably points at real, sellable problems. Spotting
          these is pattern recognition, noticing the smoke. Diagnosing the actual fire, and fixing it, is what
          Services does next. Open an item to see what it points to and why it still matters now that AI search is
          part of the picture.
        </p>

        <ol className="mb-6 max-w-2xl space-y-3">
          {DIAGNOSTIC.map((item, index) => (
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
                    {item.pointsTo}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/80">
                    <span className="mb-1 block text-caption font-semibold tracking-wide text-ink/45 uppercase">
                      Why it matters today
                    </span>
                    {item.whyItMatters}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ol>

        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The question that qualifies the deal
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Who actually publishes to your site, and how long does that take?&rdquo; A locked CMS, where
            marketing doesn&rsquo;t control its own publishing pipeline, doesn&rsquo;t rule out an engagement, but it
            changes what can be promised and how fast. That&rsquo;s an expectation-setting question worth asking
            early, once the diagnostic above has given you something to ask it about, not a disqualifier discovered
            late.
          </p>
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
