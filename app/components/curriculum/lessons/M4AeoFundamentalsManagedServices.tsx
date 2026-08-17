import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M4_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "what-aeo-is", label: "What AEO Is" },
  { id: "citation-hierarchy", label: "Mention & Citation Factor Hierarchy" },
  { id: "core-vocabulary", label: "Core Vocabulary" },
  { id: "crawler-differences", label: "How AI Crawlers Parse Pages Differently" },
  { id: "query-fan-out", label: "Query Fan-Out" },
  { id: "structural-citability", label: "Structural Citability" },
  { id: "verifying-js-rendering", label: "Verifying What a Crawler Actually Sees" },
];

interface DefinitionEntry {
  term: string;
  definition: string;
  link?: string;
}

const CORE_VOCAB: DefinitionEntry[] = [
  {
    term: "Retrieval",
    definition:
      "The step where an AI system pulls candidate content, from its own index, a live crawl, or a live web-search tool call, before generating an answer. A page has to survive retrieval before anything else about it matters.",
  },
  {
    term: "Grounding",
    definition:
      "Using retrieved external content as the factual basis for a generated answer, instead of relying on whatever the model already memorized during training. Grounded answers are the ones with something to cite; retrieval-augmented generation (RAG) is the usual mechanism behind them.",
  },
  {
    term: "Query fan-out",
    definition:
      "A single prompt decomposed into several parallel sub-queries, each retrieved separately, then synthesized into one answer. The real target of a piece of content is the whole fanned-out cluster, not just the literal prompt. Full breakdown below.",
    link: "#query-fan-out",
  },
  {
    term: "Chunk",
    definition:
      "The actual unit of text a system retrieves and can cite, a paragraph, a table row, an FAQ item, not the whole page. Most structural-citability advice exists because chunks, not pages, are what gets lifted and quoted.",
  },
  {
    term: "Structural citability",
    definition:
      "Whether an answer sits in a self-contained, clearly-labeled chunk a model can lift and quote cleanly, versus one that requires reading the whole page to reconstruct. Full breakdown below.",
    link: "#structural-citability",
  },
  {
    term: "LLM crawler (three roles)",
    definition:
      "Most major AI platforms run three distinct crawlers, not one: a training crawler (builds the base model), a search-index crawler (builds a retrieval index), and an on-demand fetcher (pulls a specific page live, mid-conversation). They can behave differently, and site owners can often block them separately.",
  },
  {
    term: "JS-render blindness",
    definition:
      "Several major AI crawlers fetch raw HTML only and never execute JavaScript, so content injected client-side after page load is invisible to them even though it renders fine in a browser or for Googlebot. Full breakdown below.",
    link: "#crawler-differences",
  },
  {
    term: "llms.txt",
    definition:
      "A proposed, unofficial file (styled after robots.txt) some sites publish to hand an AI system curated context about themselves. No major AI platform has confirmed reading it in production as of this writing, so treat it as an experimental signal, not a lever to prioritize.",
  },
  {
    term: "Direct-answer format",
    definition:
      "Writing the specific answer plainly, early in a section, before caveats or framing. Reduces how much a model has to paraphrase to extract a usable claim, and reduces the odds it extracts the wrong sentence.",
  },
];

interface CitationFactorTier {
  tier: string;
  factor: string;
  whatItMeans: string;
  whyItSitsHere: string;
  link?: string;
}

const CITATION_HIERARCHY: CitationFactorTier[] = [
  {
    tier: "1",
    factor: "Crawlability & retrievability",
    whatItMeans:
      "The AI system's crawler, or its live web-search tool call, has to reach the page and get back a response that actually contains the content, regardless of what that crawler does or doesn't execute once it gets there.",
    whyItSitsHere:
      "A prerequisite, same role as SEO's crawlability tier, but more brittle: several major AI crawlers don't render JavaScript at all, so content invisible in the raw HTTP response is invisible to them even when a person, or Googlebot, sees it fine.",
    link: "#crawler-differences",
  },
  {
    tier: "2",
    factor: "Query / prompt relevance",
    whatItMeans:
      "Whether the content answers the prompt, and the cluster of sub-queries a system fans that prompt out into, not just its headline phrasing.",
    whyItSitsHere:
      "The biggest lever once content is retrievable. A perfectly retrievable page still loses the citation if it only answers the literal prompt and not the angles the system actually fans it out into.",
    link: "#query-fan-out",
  },
  {
    tier: "3",
    factor: "Structural citability",
    whatItMeans:
      "Whether the answer sits in a self-contained, clearly-labeled chunk a model can lift and quote or paraphrase cleanly, rather than one that requires the whole page to make sense.",
    whyItSitsHere:
      "Decides whether a retrievable, relevant page actually gets picked as the cited source, or loses to a competitor whose answer is simply easier to extract.",
    link: "#structural-citability",
  },
  {
    tier: "4",
    factor: "Corroboration & mentions",
    whatItMeans:
      "How often other sources across the web name the brand in the same context, linked or not.",
    whyItSitsHere:
      "Plays the role authority & trust plays in SEO, but weighted differently: available industry data shows unlinked brand mentions correlating with AI-citation likelihood more strongly than backlinks do.",
  },
];

interface CrawlerRow {
  platform: string;
  crawlers: string;
  rendersJs: string;
  implication: string;
}

const CRAWLER_TABLE: CrawlerRow[] = [
  {
    platform: "OpenAI (ChatGPT)",
    crawlers: "GPTBot (train) · OAI-SearchBot (search index) · ChatGPT-User (on-demand fetch)",
    rendersJs: "No",
    implication:
      "Whatever ships in the raw HTTP response is the entire universe of content these crawlers see. Anything injected by client-side JavaScript after load doesn't exist for any of the three, no matter how it looks in a browser.",
  },
  {
    platform: "Anthropic (Claude)",
    crawlers: "ClaudeBot (train) · Claude-SearchBot (search index) · Claude-User (on-demand fetch)",
    rendersJs: "No",
    implication: "Same failure mode as OpenAI's crawlers: a plain HTTP fetch, no rendering step, so JS-injected content is invisible.",
  },
  {
    platform: "Perplexity",
    crawlers: "PerplexityBot, plus third-party crawler partners",
    rendersJs: "No",
    implication: "Perplexity's own documentation describes a fetch-based crawler, not a rendering one, so the same constraint applies again.",
  },
  {
    platform: "Google (AI Overviews / AI Mode)",
    crawlers: "Googlebot",
    rendersJs: "Yes",
    implication:
      "AI Overviews and AI Mode ride on the same Search index Googlebot builds using its full rendering pipeline, so content that only exists after JS executes is usually visible to Google even though it's invisible to the other three.",
  },
];

export function M4AeoFundamentalsManagedServices() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m4-managed-services"
            title="AEO Fundamentals & Platform Differences"
            questions={M4_MANAGED_SERVICES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="what-aeo-is">
        <SectionHeading>What AEO Is</SectionHeading>

        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          AEO (Answer Engine Optimization) is the practice of shaping content so an AI system, a chatbot, an
          AI-powered search feature, an assistant, surfaces it inside a generated answer. Where SEO earns a ranking
          position on a results page, AEO earns a place inside the answer itself: sometimes a named mention with no
          click at all, sometimes a citation with a link back to the source.
        </p>
        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Before any of that can happen, three baseline conditions have to hold:
        </p>
        <ul className="mb-4 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>The specific content has to be retrievable by whatever the AI system actually fetches or indexes, which only counts if it&rsquo;s present in that response, not just visible in a browser.</li>
          <li>The content has to contain an answer, a claim worded clearly enough to be picked out.</li>
          <li>The source needs enough credibility signal elsewhere on the web for the model to prefer citing it over an alternative.</li>
        </ul>
        <p className="mb-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Clearing that bar only makes a page eligible. Actually winning the citation takes more:
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>Structured for extraction, not just written well.</li>
          <li>Covers the surrounding cluster of questions a prompt fans out into, not just the target phrase.</li>
          <li>Corroborated by other sources in the same context.</li>
        </ul>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          The floor is more brittle here than it is in classic SEO. Google renders JavaScript broadly, so
          crawlability has meant roughly one thing for years. Several of the AI platforms that matter most for
          citation don&rsquo;t render JavaScript at all, which means a page can be fully crawlable and ranking in
          Google while being functionally invisible to the crawler deciding whether ChatGPT or Claude ever cites it.
          That distinction is the throughline of this module.
        </p>
      </section>

      <section id="citation-hierarchy">
        <SectionHeading>Mention &amp; Citation Factor Hierarchy</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Put another way, the factors deciding whether content gets mentioned or cited stack similarly to SEO&rsquo;s
          ranking hierarchy, in order:
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
              {CITATION_HIERARCHY.map((row) => (
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
          Same rule as SEO&rsquo;s hierarchy: a page can only move up this list in order. Fix retrievability before
          worrying about prompt coverage, fix prompt coverage before worrying about structure, and don&rsquo;t expect
          more third-party mentions to rescue a page a JS-blind crawler can&rsquo;t see in the first place.
        </p>
      </section>

      <section id="core-vocabulary">
        <SectionHeading>Core Vocabulary</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          Mention Rate, Citation Rate, and Share of Voice, the metrics used to measure AEO performance, are covered in
          full in an earlier module. The terms below are the mechanics behind how content actually gets found and
          cited, not the metrics used to score it afterward.
        </p>
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

      <section id="crawler-differences">
        <SectionHeading>How AI Crawlers Parse Pages Differently</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          This is the single most consequential platform difference for AEO work, and the one most likely to get
          missed on an audit that only checks &ldquo;is this page indexed&rdquo; the traditional-SEO way.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Platform</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Crawler(s)</th>
                <th className="w-24 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Renders JS?</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What that means for AEO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CRAWLER_TABLE.map((row) => (
                <tr key={row.platform}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.platform}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.crawlers}</td>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.rendersJs}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          A page can be fully indexed and ranking in classic Google Search, meaning Googlebot rendered it fine, while
          the exact same page is functionally blank to GPTBot, ClaudeBot, and PerplexityBot if its content loads via
          client-side JavaScript. &ldquo;Crawlable&rdquo; and &ldquo;AEO-crawlable&rdquo; are not the same claim, and
          treating them as interchangeable is the most common mistake this creates.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          Crawler behavior is publicly documented but not contractually fixed, and platforms update their crawlers
          without much notice. Treat this table as a snapshot worth re-verifying per account, not a permanent fact to
          memorize and stop checking. The verification workflow below is how you check it directly instead of relying
          on a table going stale.
        </p>
      </section>

      <section id="query-fan-out">
        <SectionHeading>Query Fan-Out</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Several AI systems, most visibly Google&rsquo;s AI Mode, don&rsquo;t answer a prompt from a single retrieval
          pass. They decompose one prompt into several parallel sub-queries, retrieve separately for each, then
          synthesize one answer from the combined result set.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Why this changes the target
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            The real target of a piece of content isn&rsquo;t the literal string a user typed. It&rsquo;s the whole
            cluster of sub-queries the system might fan that prompt out into. A page written narrowly to one exact
            phrasing can be retrievable and relevant to the literal prompt and still lose every fanned-out sub-query
            that asks the same thing from an angle a competitor&rsquo;s page happens to cover instead.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50 italic">
          This is the AEO-specific extension of the keyword-clustering logic from SEO&rsquo;s content and keyword gap
          analysis. Turning this into an actual prompt set, built from real buyer language instead of guessed angles,
          is covered step by step in a later module, not here.
        </p>
      </section>

      <section id="structural-citability">
        <SectionHeading>Structural Citability</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A retrievable, relevant page can still lose the citation to a competitor whose answer is simply easier to
          lift. Structural citability is what closes that gap.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Self-contained chunks:</span> each paragraph or section answers
            on its own, without depending on context from earlier paragraphs to make sense. Models frequently
            retrieve and quote a chunk, not the whole page; a claim that only makes sense three paragraphs into
            context gets mangled or dropped when lifted alone.
          </li>
          <li>
            <span className="font-semibold text-ink">Direct-answer framing:</span> the specific answer stated
            plainly, early in a section, before caveats or marketing framing. Reduces how much paraphrasing a model
            has to do, and reduces the odds it extracts the wrong sentence.
          </li>
          <li>
            <span className="font-semibold text-ink">Descriptive headers matching real questions:</span> headers
            phrased the way a person would actually ask, not just a keyword phrase. Headers are one of the strongest
            structural cues a retrieval system uses to match a chunk to a query.
          </li>
          <li>
            <span className="font-semibold text-ink">Structured data / schema markup:</span> FAQ, Article, and
            Product schema implemented and valid (full mechanics covered in an earlier module). Gives a
            machine-readable signal about what a chunk actually is, on top of whatever the prose already implies.
          </li>
          <li>
            <span className="font-semibold text-ink">Tables and lists for scannable facts:</span> comparable facts,
            specs, pricing tiers, pros and cons, presented as a table or list rather than buried in prose. Easier for
            a model to parse cleanly and cite accurately, and less likely to introduce a paraphrasing error.
          </li>
        </ul>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          <span className="font-semibold text-ink">On llms.txt:</span> some sites now publish an llms.txt file, a
          proposed, unofficial analog to robots.txt meant to hand an AI system curated context about the site. No
          major AI platform has confirmed reading it in production as of this writing, so treat it as an experimental
          signal worth watching, not a lever to prioritize over the mechanisms above.
        </p>
      </section>

      <section id="verifying-js-rendering">
        <SectionHeading>Verifying What a Crawler Actually Sees</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Don&rsquo;t take the crawler-differences table on faith for a real account. A specific claim can be
          verified directly, and it&rsquo;s cheap to check before assuming a JS-rendering gap exists, or assuming it
          doesn&rsquo;t.
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Pull the raw HTTP response, not the rendered page.</span> Fetch
            the URL the way a non-rendering crawler would, e.g. <code className="rounded bg-paper-3 px-1.5 py-0.5 text-xs">curl -A &quot;GPTBot&quot; &lt;url&gt;</code>,
            or a browser&rsquo;s &ldquo;View Page Source&rdquo; (not &ldquo;Inspect,&rdquo; which shows the post-render DOM).
          </li>
          <li>
            <span className="font-semibold text-ink">Compare it against the rendered DOM.</span> Open the same URL in
            a browser, open dev tools, and inspect the live DOM after JavaScript has executed.
          </li>
          <li>
            <span className="font-semibold text-ink">Isolate the specific claim.</span> Diff the two: is the exact
            sentence or data point the account wants cited present verbatim in the raw response, or does it only
            appear after JavaScript runs?
          </li>
          <li>
            <span className="font-semibold text-ink">Cross-check against Google&rsquo;s own view.</span> Use Search
            Console&rsquo;s URL Inspection &rarr; View Crawled Page &rarr; rendered HTML to see what Googlebot&rsquo;s
            rendering pipeline captured. If Google&rsquo;s rendered version has the content but the raw HTTP response
            doesn&rsquo;t, that gap is exactly the difference between visible-to-Google and visible-to-GPTBot/ClaudeBot/PerplexityBot.
          </li>
          <li>
            <span className="font-semibold text-ink">Flag it, don&rsquo;t just note it.</span> If the content
            genuinely only exists after JavaScript executes, it needs server-side rendering, static generation, or a
            dynamic-rendering fallback that serves crawlers a pre-rendered version. That&rsquo;s a dev/engineering
            fix, not a copy fix, route it accordingly instead of sending it to a content queue.
          </li>
        </ol>

        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Where this goes next
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            This page gives you the mechanisms and the reasoning framework, not the full manual AEO audit checklist,
            and not the prompt-set-building workflow that operationalizes query fan-out into an actual prompt list.
            Both are covered step by step in later modules. Treat this as the conceptual foundation you bring into
            that work, not a substitute for it.
          </p>
        </div>
      </section>
    </div>
  );
}
