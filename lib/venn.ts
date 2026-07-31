import { AnnotatedHotspot } from "./annotated-diagram/types";

export interface VennItem {
  title: string;
  oneLineDescription: string;
}

export interface VennRegion extends AnnotatedHotspot {
  items: VennItem[];
}

export const vennRegions: VennRegion[] = [
  {
    id: "seo-only",
    marker: "S",
    label: "SEO only",
    items: [
      {
        title: "Backlink authority",
        oneLineDescription: "Earning links from reputable, topically relevant domains — still one of the strongest classical ranking signals.",
      },
      {
        title: "Crawl budget management",
        oneLineDescription: "Making sure search engine crawlers can efficiently reach and re-crawl the pages that matter most.",
      },
      {
        title: "XML sitemaps & robots.txt hygiene",
        oneLineDescription: "Explicit crawl and index directives that classic search engines rely on directly.",
      },
      {
        title: "URL structure & canonicalization",
        oneLineDescription: "Clean, consistent URLs and resolving duplicate-content signals across near-identical pages.",
      },
      {
        title: "Core Web Vitals / page speed",
        oneLineDescription: "A confirmed, if modest, ranking factor tied to load speed, interactivity, and visual stability.",
      },
      {
        title: "Keyword-targeted meta tags",
        oneLineDescription: "Title tags and meta descriptions written to match the exact phrasing of target search queries.",
      },
      {
        title: "Accumulated domain authority",
        oneLineDescription: "Trust signals that build slowly over years of consistent publishing and linking history.",
      },
    ],
  },
  {
    id: "aeo-only",
    marker: "A",
    label: "AEO only",
    items: [
      {
        title: "Prompt & citation tracking",
        oneLineDescription: "Monitoring how specific AI answer engines respond to a representative set of real prompts over time.",
      },
      {
        title: "Answer-format optimization",
        oneLineDescription: "Structuring content as direct, self-contained answers a model can lift cleanly into a generated response.",
      },
      {
        title: "Multi-surface visibility monitoring",
        oneLineDescription: "Tracking presence separately across AI Overview, AI Mode, ChatGPT, and Perplexity, since each behaves differently.",
      },
      {
        title: "Semantic / embedding relevance",
        oneLineDescription: "Matching a query's underlying meaning rather than its literal keyword phrasing.",
      },
      {
        title: "Content chunking for retrieval",
        oneLineDescription: "Structuring passages so a retrieval system can extract them independently and accurately.",
      },
      {
        title: "Entity clarity & disambiguation",
        oneLineDescription: "Making sure a model can correctly identify your brand without confusing it with something similarly named.",
      },
      {
        title: "Optimizing for citation without a click",
        oneLineDescription: "Getting real value from being referenced in an answer even when it doesn't produce a referral visit.",
      },
    ],
  },
  {
    id: "both",
    marker: "+",
    label: "Both",
    items: [
      {
        title: "Content quality & depth",
        oneLineDescription: "Genuinely useful, accurate, well-researched content that both ranking algorithms and generative models reward.",
      },
      {
        title: "Clear page structure & heading hierarchy",
        oneLineDescription: "Helps classic crawlers parse a page and helps a model extract clean, well-scoped passages.",
      },
      {
        title: "Credibility & authorship signals",
        oneLineDescription: "Real named authors, clear sourcing, and consistency across the web.",
      },
      {
        title: "Structured data / schema markup",
        oneLineDescription: "Machine-readable facts useful to both a traditional search index and a retrieval system.",
      },
      {
        title: "Freshness & regular updates",
        oneLineDescription: "A ranking factor in classic search and a freshness signal retrieval-based surfaces weight directly.",
      },
      {
        title: "Mobile-friendliness & accessibility",
        oneLineDescription: "Baseline usability that both systems — and the crawlers/agents behind them — reward.",
      },
      {
        title: "Topical authority & content clusters",
        oneLineDescription: "Comprehensive coverage of a subject strengthens both organic rankings and citation odds across many related prompts.",
      },
    ],
  },
];
