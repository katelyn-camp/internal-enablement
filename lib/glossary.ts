/**
 * Glossary content lives here as structured data, not in component
 * code, so non-engineers can add/edit terms without touching the UI.
 * Each term needs: id (used for the deep-linkable anchor), theme,
 * a one-line definition, and an optional expanded explanation.
 */
export type GlossaryTheme = "seo" | "aeo" | "geo";

export interface GlossaryTerm {
  id: string;
  term: string;
  theme: GlossaryTheme;
  shortDefinition: string;
  longDefinition?: string;
  contentPending?: boolean;
}

export const glossaryThemes: { id: GlossaryTheme; label: string; description: string }[] = [
  {
    id: "seo",
    label: "Traditional SEO",
    description: "On-page, technical, and off-page fundamentals of ranking in classic organic search.",
  },
  {
    id: "aeo",
    label: "AEO",
    description: "Answer Engine Optimization — getting cited by AI answer surfaces like AI Overviews and AI Mode.",
  },
  {
    id: "geo",
    label: "GEO",
    description: "Generative Engine Optimization — shaping content so generative models can parse and reuse it.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  // --- Traditional SEO ---
  {
    id: "on-page-seo",
    term: "On-page SEO",
    theme: "seo",
    shortDefinition: "Optimizing elements on a page itself — titles, headings, content, internal links — to rank for target queries.",
    longDefinition:
      "Covers everything a site owner directly controls on a given page: title tags, meta descriptions, heading structure, keyword placement, internal linking, and content quality. It's the layer clients have the most direct control over, which makes it the easiest starting point in most audits.",
  },
  {
    id: "technical-seo",
    term: "Technical SEO",
    theme: "seo",
    shortDefinition: "The crawlability, indexability, and site-health layer — site speed, mobile-friendliness, structured data, crawl errors.",
    longDefinition:
      "If technical SEO is broken, nothing else matters — a page with perfect content can't rank if it isn't being crawled or indexed. Common audit items: robots.txt issues, broken redirects, duplicate content/canonicalization problems, Core Web Vitals, and structured data implementation.",
  },
  {
    id: "off-page-seo",
    term: "Off-page SEO / Backlinks",
    theme: "seo",
    shortDefinition: "Ranking signals earned outside your own site — mainly backlinks from other reputable domains.",
    longDefinition:
      "Search engines treat a link from another site as a vote of confidence. Quality and relevance of the linking domain matter far more than raw link count. This is also the SEO concept most directly analogous to AEO citations — both are about earning trust signals from outside your own domain.",
  },
  {
    id: "keyword-gap-analysis",
    term: "Keyword Gap Analysis",
    theme: "seo",
    shortDefinition: "Comparing a client's keyword rankings against competitors to find terms competitors rank for that the client doesn't.",
    longDefinition:
      "Surfaces concrete, prioritized content opportunities rather than starting from scratch — 'here are 40 terms your top 3 competitors rank on page 1 for, and you don't rank at all.' Forms the backbone of the Keyword Analysis workflow.",
  },
  {
    id: "content-gap-analysis",
    term: "Content Gap Analysis",
    theme: "seo",
    shortDefinition: "Identifying topics or subtopics competitors cover that a client's site doesn't address at all.",
    longDefinition:
      "Broader than a keyword gap — this looks at entire topic clusters and content types (comparison pages, use-case pages, FAQ coverage) that are missing, not just individual search terms.",
  },
  {
    id: "crawl-budget",
    term: "Crawl Budget",
    theme: "seo",
    shortDefinition: "The finite number of pages a search engine will crawl on a site within a given time window.",
    longDefinition:
      "Matters most for very large sites — if crawl budget is wasted on low-value pages (thin filters, duplicate parameters), important pages may get crawled less often or missed entirely after changes.",
  },
  {
    id: "core-web-vitals",
    term: "Core Web Vitals",
    theme: "seo",
    shortDefinition: "Google's page-experience metrics: loading speed, interactivity, and visual stability.",
    longDefinition:
      "A confirmed (if modest) ranking factor, and a real user-experience issue regardless — slow, jumpy pages lose conversions even when they rank fine.",
  },

  // --- AEO ---
  {
    id: "aeo",
    term: "Answer Engine Optimization (AEO)",
    theme: "aeo",
    shortDefinition: "The practice of optimizing content to be selected and cited by AI answer engines — AI Overviews, AI Mode, ChatGPT, Perplexity, etc.",
    longDefinition:
      "Distinct from classic SEO because the goal isn't a blue link ranking — it's being pulled into a generated answer as a cited (or uncited) source. A page can win at one and lose at the other. AEO is the umbrella most AirOps audit workflows sit under.",
  },
  {
    id: "citation",
    term: "Citation",
    theme: "aeo",
    shortDefinition: "A link back to a source that an AI answer engine references or quotes when generating a response.",
    longDefinition:
      "The AEO equivalent of a ranking position — being cited means the model treated your content as trustworthy enough to attribute. Citation rate and citation share (see Share of Voice) are the core metrics AirOps prompt/citation analysis tracks.",
  },
  {
    id: "prompt-tracking",
    term: "Prompt Tracking",
    theme: "aeo",
    shortDefinition: "Monitoring a fixed, representative set of real user prompts over time to see how AI answer engines respond and who they cite.",
    longDefinition:
      "Analogous to rank tracking in classic SEO, but tracking prompts/answers instead of keyword positions. Because answer engines regenerate responses dynamically, tracked prompts need to be re-run regularly to catch drift.",
  },
  {
    id: "visibility-rate",
    term: "Visibility Rate",
    theme: "aeo",
    shortDefinition: "The percentage of tracked prompts in which a brand appears anywhere in the AI-generated answer, cited or not.",
    longDefinition:
      "A broader metric than citation rate — a brand can be mentioned by name inside generated text without a formal citation link attached, which still carries brand-awareness value even without the referral traffic.",
  },
  {
    id: "share-of-voice-ai",
    term: "Share of Voice (AI)",
    theme: "aeo",
    shortDefinition: "A brand's citation/visibility share relative to named competitors across the same set of tracked prompts.",
    longDefinition:
      "Reframes 'are we visible' into 'are we visible relative to whoever the client actually competes with' — usually the more persuasive number in a client conversation.",
  },
  {
    id: "rag",
    term: "Retrieval-Augmented Generation (RAG)",
    theme: "aeo",
    shortDefinition: "An architecture where an AI model retrieves relevant documents at answer-time and grounds its response in them, instead of relying only on what it learned during training.",
    longDefinition:
      "This is the mechanism behind AI Overviews, AI Mode, and any 'browsing-enabled' chatbot — see the LLMs & Retrieval page for the full breakdown of why this matters for how fast visibility can change.",
  },
  {
    id: "structured-data-for-ai",
    term: "Structured Data for AI",
    theme: "aeo",
    shortDefinition: "Schema markup and clean semantic HTML that make a page's facts easy for a model to parse and extract accurately.",
    longDefinition:
      "The AEO analogue of technical SEO — content can be excellent and still get paraphrased incorrectly (or skipped) by a model if the underlying markup is messy or ambiguous.",
  },

  // --- GEO ---
  {
    id: "geo",
    term: "Generative Engine Optimization (GEO)",
    theme: "geo",
    shortDefinition: "Optimizing content structure and language specifically for how generative models parse, weight, and reuse text — a close cousin of AEO, treated as its own theme here since teams use the terms slightly differently.",
    longDefinition:
      "Where AEO is often used to describe the goal (getting cited by answer engines), GEO is more often used to describe the method (how you shape content — passage length, directness, semantic clarity — to be more 'model-legible'). In practice, most real work spans both; this glossary keeps them separate because clients will use both terms and expect you to know the distinction.",
  },
  {
    id: "content-chunking",
    term: "Content Chunking",
    theme: "geo",
    shortDefinition: "Structuring a page into clearly bounded, self-contained passages (short paragraphs, labeled sections) that a model can extract independently.",
    longDefinition:
      "Models tend to retrieve and cite passage-sized chunks, not whole pages — a page that answers five questions in one dense, cross-referential paragraph is harder to extract cleanly than the same content split into five distinct labeled chunks.",
  },
  {
    id: "semantic-relevance",
    term: "Semantic Relevance",
    theme: "geo",
    shortDefinition: "How closely the meaning of a passage matches a query's intent, judged by embeddings/meaning rather than exact keyword overlap.",
    longDefinition:
      "Generative retrieval systems match on meaning, not just keyword strings, so content can be semantically relevant to a prompt even without repeating its exact wording — and can fail to match even with the right keywords if the surrounding context is unclear.",
  },
  {
    id: "entity-recognition",
    term: "Entity Recognition",
    theme: "geo",
    shortDefinition: "A model's ability to correctly identify and disambiguate named things (a company, product, person) mentioned in content.",
    longDefinition:
      "Weak entity recognition — an ambiguous or inconsistently named brand — is a common, fixable reason a company gets underrepresented in generated answers even when its content is otherwise strong.",
    contentPending: true,
  },
  {
    id: "passage-ranking",
    term: "Passage Ranking",
    theme: "geo",
    shortDefinition: "The step where a retrieval system scores and orders candidate passages before handing the top ones to the model to generate an answer from.",
    contentPending: true,
  },
  {
    id: "machine-readable-content",
    term: "Machine-Readable Content",
    theme: "geo",
    shortDefinition: "Content written and marked up in a way that's unambiguous to parse programmatically — clear headers, direct sentences, consistent terminology.",
    contentPending: true,
  },
  {
    id: "authority-signals-llm",
    term: "Authority Signals (for LLMs)",
    theme: "geo",
    shortDefinition: "The cues — beyond backlinks — that lead a generative model to treat a source as trustworthy: consistency across the web, citation by other trusted sources, clear authorship.",
    contentPending: true,
  },
];
