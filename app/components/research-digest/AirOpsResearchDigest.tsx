import { SectionHeading } from "@/app/components/curriculum/lessons/shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M8_SALES_KNOWLEDGE_CHECK } from "@/app/components/curriculum/lessons/knowledge-check-data";

const OUTLINE = [
  { id: "market-context", label: "Where AI Search Stands Today" },
  { id: "volatile", label: "Visibility Is Volatile" },
  { id: "third-party", label: "Third-Party Sources Decide" },
  { id: "citation-recipe", label: "What Earns a Citation" },
  { id: "freshness", label: "Freshness Is a Ranking Factor" },
  { id: "google-rank", label: "Google Rank Isn't Enough" },
  { id: "buyer-journey", label: "The Buyer's Stage Changes the Recipe" },
  { id: "long-tail", label: "The Long Tail" },
  { id: "proof-points", label: "Customer Proof Points" },
  { id: "content-teams", label: "What Prospects' Content Teams Are Dealing With" },
  { id: "sources", label: "Sources" },
];

interface Fact {
  stat: string;
  source: string;
}

function FactList({ facts }: { facts: Fact[] }) {
  return (
    <ul className="mb-4 space-y-2.5">
      {facts.map((f, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
          <span>
            {f.stat} <span className="text-caption text-ink/40">&middot; {f.source}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function SayItLikeThis({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-card border border-line bg-white p-5">
      <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
        Using the data
      </span>
      <p className="text-sm leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}

interface Report {
  title: string;
  url: string;
}

const REPORTS: Report[] = [
  { title: "The GEO Strategy Playbook for Marketers and Organic Growth Teams", url: "https://www.airops.com/report/geo-strategy-playbook" },
  { title: "Why Enterprise Teams Can't Afford to Ignore Answer Engine Optimization", url: "https://www.airops.com/report/enterprise-aeo-guide" },
  { title: "The Fan-Out Effect: What Happens Between a Query and a Citation", url: "https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation" },
  { title: "From Retrieved to Cited: How Commercial Content Earns Citations in AI Search", url: "https://www.airops.com/report/from-retrieved-to-cited-how-commercial-content-earns-citations-in-ai-search" },
  { title: "The Long Tail: Where Visibility in AI Search is Won", url: "https://www.airops.com/report/the-long-tail-where-visibility-in-ai-search-is-won" },
  { title: "The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations", url: "https://www.airops.com/report/influence-of-retrieval-fanout-and-google-serps-in-chatgpt" },
  { title: "The 2026 State of AI Search: How Modern Brands Stay Visible", url: "https://www.airops.com/report/the-2026-state-of-ai-search" },
  { title: "The Community Flywheel: How Reddit, YouTube, and LinkedIn Decide Who Wins in AI Search", url: "https://www.airops.com/report/the-impact-of-ugc-and-community-in-ai-search" },
  { title: "Third-Party Sources Drive 85% of Brand Discovery", url: "https://www.airops.com/report/the-influence-of-offsite-signals-in-ai-search" },
  { title: "Staying Seen In AI Search: How Citations & Mentions Impact Brand Visibility", url: "https://www.airops.com/report/how-citations-mentions-impact-visibility-in-ai-search" },
  { title: "From Query to Citation: How Snippet Signals Influence AI Search", url: "https://www.airops.com/report/how-snippet-signals-influence-ai-search" },
  { title: "The Silent Pipeline Killer: How Stale Content Costs You AI Citations (and Customers)", url: "https://www.airops.com/report/the-impact-of-stale-content-on-ai-visibility" },
  { title: "Brand Visibility Is the North Star for AI Search", url: "https://www.airops.com/report/north-star-metric-ai-search" },
  { title: "Why Ranking on Page One Isn't Enough", url: "https://www.airops.com/report/structuring-content-for-llms" },
  { title: "LLMs Are Picking Favorites: Find Out Who's Winning (and Why)", url: "https://www.airops.com/report/aeo-scorecard-report" },
  { title: "The State of Content Teams in 2025", url: "https://www.airops.com/report/state-of-content-teams" },
];

export function AirOpsResearchDigest() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m8-sales"
            title="AirOps Research"
            questions={M8_SALES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="market-context">
        <SectionHeading>Where AI Search Stands Today</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The numbers behind a prospect's own buying behavior, and where their budget is already headed.
        </p>
        <FactList
          facts={[
            { stat: "94% of B2B buyers now use generative AI at some point during a purchase.", source: "GEO Strategy Playbook" },
            { stat: "98% of enterprise marketing leaders already optimize for AI search, or plan to within 12 months.", source: "GEO Strategy Playbook" },
            { stat: "65% of enterprises will commit 25%+ of their 2026 marketing budget to AI search.", source: "GEO Strategy Playbook" },
            { stat: "AI Overviews appeared in under 5% of Google results in January 2025; by July 2025 that was over 25%. Roughly half of all U.S. Google queries now return an AI summary, and 60% of U.S. queries are influenced by AI in some way.", source: "Brand Visibility Is the North Star" },
            { stat: "OpenAI alone fields roughly one query per American per day.", source: "Brand Visibility Is the North Star" },
            { stat: "Organic click-through rate dropped 61% on queries where Google AI Overviews appear.", source: "Enterprise AEO Guide (Seer Interactive)" },
            { stat: "Zero-click search activity rose 2.5x after AI Overviews launched.", source: "The 2026 State of AI Search" },
          ]}
        />
        <SayItLikeThis>
          &ldquo;Google still processes over 13 billion searches a day, so nobody&rsquo;s saying abandon SEO. But AI
          Overviews went from under 5% of results to over a quarter of them in six months, and click-through rate
          drops 61% the moment one shows up. The traffic isn&rsquo;t disappearing, it&rsquo;s just landing somewhere
          you can&rsquo;t see with a rank tracker.&rdquo;
        </SayItLikeThis>
      </section>

      <section id="volatile">
        <SectionHeading>Visibility Is Volatile, Not a Ranking</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A Google #3 spot is stable until something changes it. AI citation isn&rsquo;t like that, the same brand can
          appear and vanish across identical, back-to-back queries. That instability is itself the pitch for ongoing
          management rather than a one-time optimization project.
        </p>
        <FactList
          facts={[
            { stat: "Only 30% of brands stay visible across consecutive AI answers to the same query; only 20% hold visibility across five consecutive runs.", source: "GEO Strategy Playbook; Staying Seen In AI Search; The 2026 State of AI Search" },
            { stat: "About half of brands that drop out of an answer resurface within two later runs, so disappearance usually isn't permanent, but it isn't guaranteed either.", source: "Staying Seen In AI Search; The 2026 State of AI Search" },
            { stat: "Brands earning both a citation and a mention in the same answer are 40% more likely to resurface in future runs, but only 28% of answers include a brand with both signals present.", source: "Staying Seen In AI Search; The 2026 State of AI Search" },
            { stat: "Brands are 3x more likely to be cited-only than to be cited and mentioned together, meaning most brands are leaving that compounding advantage on the table.", source: "Staying Seen In AI Search" },
          ]}
        />
        <SayItLikeThis>
          &ldquo;This isn&rsquo;t a rank you check once a quarter. Only one in five brands hold visibility across five
          back-to-back runs of the exact same query, so a good result today tells you almost nothing about next
          week. That&rsquo;s why this has to be monitored and maintained, not audited once and left alone.&rdquo;
        </SayItLikeThis>
      </section>

      <section id="third-party">
        <SectionHeading>Third-Party Sources Decide Who Gets Cited</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The brand&rsquo;s own website is a minority contributor to its own AI visibility. Most of what an AI
          platform says about a brand, it learned somewhere else.
        </p>
        <FactList
          facts={[
            { stat: "85% of brand mentions in AI answers come from third-party domains, not the brand's own site; brands are 6.5x more likely to be mentioned via a third party than via their own domain.", source: "Third-Party Sources Drive 85% of Brand Discovery; GEO Strategy Playbook; The 2026 State of AI Search" },
            { stat: "Nearly 90% of those third-party mentions come from listicles, comparison pages, and reviews, and 80% of the time the brand is named among the first three companies in that content.", source: "Third-Party Sources Drive 85% of Brand Discovery; GEO Strategy Playbook" },
            { stat: "68% of brands appeared on only one AI platform, not several, so visibility earned on ChatGPT doesn't transfer to Claude or Perplexity by default.", source: "Third-Party Sources Drive 85% of Brand Discovery" },
            { stat: "UGC and community platforms (Reddit, YouTube, LinkedIn, Wikipedia) drive roughly 48% of all citations.", source: "The Community Flywheel; The 2026 State of AI Search" },
            { stat: "Reddit alone appears in about 22% of AI-generated answers, ranking #1 in Perplexity and Google AI Mode and #2 in ChatGPT. 88% of its citations come from category-level questions, not brand-specific ones.", source: "The Community Flywheel" },
            { stat: "LinkedIn functions as the primary \"expert validation\" layer, ranking #2 in Google AI Mode. YouTube ranks #2 in Gemini and Perplexity.", source: "The Community Flywheel" },
            { stat: "Which community platform matters depends entirely on the AI platform: Perplexity references community sources in 90%+ of its answers, Gemini in as few as 7%.", source: "The 2026 State of AI Search; The Community Flywheel" },
          ]}
        />
        <SayItLikeThis>
          &ldquo;Fixing your own site is necessary but it&rsquo;s not most of the work. 85% of the mentions AI
          platforms make about a brand come from somewhere other than that brand's own website, mostly comparison
          content and community platforms like Reddit. If nobody's talking about you in those places, your own
          content can be flawless and you still won't show up.&rdquo;
        </SayItLikeThis>
      </section>

      <section id="citation-recipe">
        <SectionHeading>What Actually Earns a Citation</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Across multiple independent studies, the same structural signals keep separating cited pages from
          retrieved-but-ignored pages. Domain authority, notably, is not one of them.
        </p>
        <FactList
          facts={[
            { stat: "Only 15% of retrieved pages actually earn a citation, structure and format decide most of the remaining gap.", source: "From Retrieved to Cited; The Long Tail" },
            { stat: "61% of ChatGPT-cited pages use rich schema markup vs. 25% of Google's page-one URLs; using 3+ schema types lifts citation odds 13%.", source: "Why Ranking on Page One Isn't Enough; GEO Strategy Playbook" },
            { stat: "68.7% of ChatGPT-cited pages follow a sequential heading hierarchy vs. 23.9% of Google's top results, nearly a 3x gap, and it's worth 2.8x higher citation odds on its own. 87% of cited pages use a single H1 vs. 64% of Google's top results.", source: "Why Ranking on Page One Isn't Enough; Staying Seen In AI Search" },
            { stat: "ChatGPT-cited pages average 13.75 list sections per page, over 17x the Google SERP average, and nearly 80% of cited pages include at least one list vs. 28.6% of Google's top results.", source: "Why Ranking on Page One Isn't Enough; The 2026 State of AI Search" },
            { stat: "FAQ schema is more than twice as common on ChatGPT-cited pages (10.5% vs. 5.4%), and pages with an FAQ section are 40% more likely to be cited at all.", source: "Why Ranking on Page One Isn't Enough; GEO Strategy Playbook" },
            { stat: "Domain authority barely moves the needle: always-cited pages average DA 53.0 vs. 55.7 for never-cited pages, essentially a wash. 63.6% of citations go to sites in the DA 20-80 \"middle,\" not just top-tier domains.", source: "The Fan-Out Effect; The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
            { stat: "Nofollow links are nearly as predictive of citation as dofollow links (0.509 vs. 0.504 correlation), so link \"authority\" in the classic SEO sense barely applies here.", source: "The 2026 State of AI Search" },
            { stat: "Sweet spot length is 500 to 2,000 words; pages over 5,000 words underperform.", source: "The Fan-Out Effect" },
          ]}
        />
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          One genuine tension in the research worth knowing before a call: the Fan-Out Effect report found denser,
          more technical writing (Flesch-Kincaid grade 16&ndash;17) got cited more often, while a separate AirOps study
          of retrieval and fan-out found the opposite, simpler, clearer writing (higher Flesch Reading Ease)
          correlated with more citations. Don't present readability as a settled, one-directional lever, structure
          and specificity are the consistent signals; sentence-level simplicity isn't.
        </p>
      </section>

      <section id="freshness">
        <SectionHeading>Freshness Is a Ranking Factor Now</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Google will happily keep ranking a five-year-old page. AI citation punishes staleness far more directly,
          which is a strong argument for retainer-based content work over one-time projects.
        </p>
        <FactList
          facts={[
            { stat: "Pages updated in the last 3 months are 3x more likely to be cited than older pages.", source: "GEO Strategy Playbook; The 2026 State of AI Search" },
            { stat: "Once a page passes 12 months without an update, it's more than 2x as likely to lose its citation entirely, crossing that mark costs a page over half its chance of being cited at all.", source: "The Silent Pipeline Killer" },
            { stat: "For commercial queries specifically, 83% of citations come from content updated within the past year; only 20% come from content older than 12 months.", source: "The Silent Pipeline Killer; Enterprise AEO Guide" },
            { stat: "The freshness sweet spot is actually 30-89 days old, which outperforms content updated less than 30 days ago, so a page needs a little time to be recognized as current, not a same-day edit.", source: "The Fan-Out Effect" },
            { stat: "The top-scoring brand in a 50-brand AEO benchmark updates 72% of its content quarterly, earning a 90/100 freshness score against a 56/100 median across all companies studied.", source: "LLMs Are Picking Favorites" },
          ]}
        />
      </section>

      <section id="google-rank">
        <SectionHeading>Google Rank Still Matters, Just Not Enough</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          This is the nuance most prospects miss entirely: Google rank and AI citation are correlated, not the same
          thing, and the gap between them is where the opportunity (and the risk) lives.
        </p>
        <FactList
          facts={[
            { stat: "80% of cited brands rank in Google's organic top three, so ranking well is still a meaningful signal.", source: "GEO Strategy Playbook" },
            { stat: "A page ranking #1 in Google gets cited 43.2% of the time vs. 12.3% for a page outside Google's top 20, a 3.5x advantage.", source: "The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
            { stat: "But 59.6% of AI Overview citations come from URLs outside Google's top 20 organic results, meaning ranking well organically doesn't guarantee, or even reliably predict, AI Overview citation.", source: "The 2026 State of AI Search" },
            { stat: "Within retrieval itself, position is decisive: the #1 retrieved page gets cited 58.4% of the time vs. 14.2% at position #10, a 4x gap.", source: "The Fan-Out Effect" },
          ]}
        />
      </section>

      <section id="buyer-journey">
        <SectionHeading>The Buyer&rsquo;s Stage Changes the Recipe</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A single "best practices" checklist undersells this. The content format that earns a citation shifts
          depending on where the buyer is in their decision, which is a strong hook for why a generic content audit
          isn't the same thing as an AEO strategy.
        </p>
        <FactList
          facts={[
            { stat: "Awareness stage: content with 5-7 supporting statistics gets a 20.3% higher citation likelihood; ideal length is 1,301-1,500 words.", source: "From Retrieved to Cited" },
            { stat: "Research/shortlist stage: sentences averaging 10 words or fewer earn 18.8% more citations; pages with around 10 images earn 16.4% more; ideal length is 1,501-1,800 words.", source: "From Retrieved to Cited" },
            { stat: "Comparison stage: pages with 3 tables earn 25.7% more citations; listing 7 distinct price points earns 15.7% more.", source: "From Retrieved to Cited" },
            { stat: "Validation stage: content with 8 list sections earns up to 26.9% more citations; showing 15+ price points adds another 11.0%.", source: "From Retrieved to Cited" },
          ]}
        />
      </section>

      <section id="long-tail">
        <SectionHeading>The Long Tail: Where Visibility Is Actually Won</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Most brands track a handful of head-term prompts. Most of what actually drives citations happens in query
          variations those brands never see, which is precisely the blind spot a prospect's current tooling has.
        </p>
        <FactList
          facts={[
            { stat: "89.6% of searches expand into two or more \"fan-out\" sub-queries the original question never mentioned, and a brand's own prompt tracking typically never sees these.", source: "The Long Tail; The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
            { stat: "95% of those fan-out queries have zero monthly search volume in traditional keyword tools, they're invisible to classic SEO tracking entirely.", source: "The Long Tail; The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
            { stat: "32.9% of cited pages were discovered only through a fan-out query, never through the original question a brand thinks it's being asked.", source: "The Long Tail; The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
            { stat: "Brands typically monitor prompts peaking at 6-7 words, while real AI search prompts commonly run 10+ words.", source: "The Long Tail" },
            { stat: "Citation is fragmented, not concentrated: the single largest citation domain, reddit.com, accounts for only 2.36% of all citations, and 84% of citations come from beyond the top 100 domains.", source: "The Long Tail" },
            { stat: "ChatGPT leaves 85% of the pages it retrieves uncited overall.", source: "The Influence of Retrieval, Fan-out, and Google SERPs on ChatGPT Citations" },
          ]}
        />
      </section>

      <section id="proof-points">
        <SectionHeading>Customer Proof Points</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          When a prospect asks how fast and how much, these are the real, named outcomes to point to.
        </p>
        <FactList
          facts={[
            { stat: "Carta hit a 75% citation rate on new AEO-optimized pages, with citations appearing within a single day of publishing.", source: "Enterprise AEO Guide" },
            { stat: "Webflow saw a 40% traffic uplift, and AI-sourced signups grew from 2% to 10% of total signups.", source: "Enterprise AEO Guide" },
            { stat: "Angi's longtail AEO content converts 79% better than its traditional organic content.", source: "Enterprise AEO Guide" },
            { stat: "Descript raised its AEO score from 61 to 78 in 30 days (+28%), which drove +35% organic traffic growth and a +123% visit spike following a Google AI Overviews rollout.", source: "LLMs Are Picking Favorites" },
            { stat: "AEO improvements are measurable in 60-90 days, against 6-12 months for traditional SEO, a useful answer to \"how long until we see results.\"", source: "Enterprise AEO Guide" },
            { stat: "Top AEO performers earn up to 4.8x more AI citations than their peers in the same benchmark.", source: "LLMs Are Picking Favorites" },
          ]}
        />
      </section>

      <section id="content-teams">
        <SectionHeading>What Prospects&rsquo; Content Teams Are Dealing With</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Useful discovery-call context: most prospects are mid-transition, not AI-native and not AI-resistant,
          which shapes how to position the ask.
        </p>
        <FactList
          facts={[
            { stat: "Only 17% of content/SEO teams report full AI integration; 32% are still experimental/pilot stage and 9% have implemented no AI at all.", source: "The State of Content Teams in 2025" },
            { stat: "72% plan to increase AI investment over the next year.", source: "The State of Content Teams in 2025" },
            { stat: "82% name quality control as their top AI implementation challenge, ahead of team upskilling (51%) and budget (27%).", source: "The State of Content Teams in 2025" },
            { stat: "65% name research and ideation as their single biggest content bottleneck.", source: "The State of Content Teams in 2025" },
          ]}
        />
      </section>

      <section id="sources">
        <SectionHeading>Sources</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          All 16 AirOps research reports synthesized above, in case you need to pull an exact figure, check
          methodology, or send a link to a prospect.
        </p>
        <ol className="space-y-2">
          {REPORTS.map((r) => (
            <li key={r.url} className="text-sm leading-relaxed">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-ink/80 underline decoration-line hover:text-ink">
                {r.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
