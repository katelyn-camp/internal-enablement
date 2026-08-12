/**
 * AI Visibility Metrics Cheat Sheet: AirOps vs. Profound, Peec AI, Scrunch, SEMrush,
 * and Ahrefs. Transcribed from the "Metric Definitions" tab of the source Google Sheet,
 * transposed (provider as column, not row) and with each sheet's combined
 * "Calculation / Denominator" cell split into two rows per the requested layout.
 *
 * Six of the sheet's seven metric categories are built; only "Other Notable Metrics"
 * (a miscellaneous bucket, not really term-for-term comparable) is left out for now.
 */

export interface MetricProviderEntry {
  provider: string;
  termUsed: string;
  whatItMeasures: string;
  calculation: string;
  denominator: string;
  source: string;
  /**
   * How this provider's number compares to AirOps' for this metric. Omitted for AirOps
   * itself (the reference point) and for categories where AirOps has no metric to compare
   * against (Visibility / Composite Score). "same" is reserved for cases the sheet's own
   * sourcing explicitly confirms measure the identical concept; everything else defaults
   * to "different" rather than assumed comparable, since that's this cheat sheet's whole
   * point, same-sounding names usually aren't the same math.
   */
  comparability?: "same" | "different";
}

export interface MetricCategory {
  id: string;
  label: string;
  providers: MetricProviderEntry[];
}

export const METRIC_CATEGORIES: MetricCategory[] = [
  {
    id: "visibility",
    label: "Visibility / Composite Score",
    providers: [
      {
        provider: "AirOps",
        termUsed: "No single composite score",
        whatItMeasures:
          "AirOps does not publish one blended 0-100 “Visibility Score.” Visibility is represented by three separate metrics: Mention Rate, Share of Voice, and Average Position.",
        calculation: "N/A, no blended score published.",
        denominator: "N/A. See the Mention Rate, Share of Voice, and Average Position rows instead.",
        source: "docs.airops.com/insights/analytics/overview",
      },
      {
        provider: "Profound",
        termUsed: "Visibility Score",
        whatItMeasures: "% of tracked responses in which the brand appears (brand named, regardless of citation).",
        calculation: "(# responses that include your brand) / (# responses that include at least one brand mentioned)",
        denominator:
          "# responses that include at least one brand mentioned. Counted per response: a prompt run on multiple models/days counts each execution separately.",
        source: "help.tryprofound.com/articles/3443229936; tryprofound.com/blog/how-to-track-your-visibility-in-ai-search",
      },
      {
        provider: "Peec AI",
        termUsed: "Visibility Score",
        whatItMeasures:
          "% of AI responses (“chats”) that mention the brand by name. Explicitly distinguished from “source visibility” (domain cited without brand named).",
        calculation: "(Responses mentioning brand) / (Total responses) x 100",
        denominator: "ALL tracked chats, not just chats with any brand mention.",
        source: "docs.peec.ai/metrics/brand-metrics/visibility",
      },
      {
        provider: "Scrunch",
        termUsed: "No single composite score",
        whatItMeasures:
          "Scrunch does not publish one blended “AI Visibility Score.” It shows component metrics (Brand Presence, Competitive Presence, Placement, Citations, Sentiment) side by side on the dashboard.",
        calculation: "N/A, no blended score published.",
        denominator: "N/A. See the Brand Presence, Competitive Presence, and Placement rows instead.",
        source: "scrunch.com/blog/ai-search-metrics-aeo",
      },
      {
        provider: "SEMrush",
        termUsed: "AI Visibility Score",
        whatItMeasures: "Benchmark score (0-100) of how often and how prominently a brand appears in AI answers vs. competitors.",
        calculation:
          "Blend of Topic Coverage (# distinct topics brand appears in vs. all domains) and Mention Consistency (how often brand is mentioned within those topics). Exact weighting not publicly disclosed.",
        denominator:
          "Sourced from Semrush's 289M+ prompt database; covers Google AI Overviews, AI Mode, Gemini, ChatGPT (search mode). Refreshed daily.",
        source: "semrush.com/kb/1607-semrush-ai-visibility-data; semrush.com/kb/1596-visibility-overview-report",
      },
      {
        provider: "Ahrefs",
        termUsed: "AI Visibility (AI Share of Voice)",
        whatItMeasures:
          "Brand's percentage share of Impressions vs. other tracked brands in the same entity set. Framed explicitly as “potential visibility, not actual audience reach.”",
        calculation:
          "Impressions = sum of Google search volume of prompts where the brand appears in an AI answer (uses the highest-volume keyword whose SERP shows that prompt as a “People Also Ask” question, a modeled proxy, not measured AI query volume).",
        denominator: "When aggregating across platforms, SOV is a weighted average (higher-impression platforms count more).",
        source: "help.ahrefs.com/en/articles/15501968-ai-visibility-metrics; ahrefs.com/blog/brand-radar-methodology",
      },
    ],
  },
  {
    id: "share-of-voice",
    label: "Share of Voice",
    providers: [
      {
        provider: "AirOps",
        termUsed: "Share of Voice (SOV)",
        whatItMeasures: "Your brand's share of the conversation relative to configured competitors (not relative to all tracked answers).",
        calculation: "(Answers mentioning your brand) / (Answers mentioning your brand OR any tracked competitor) x 100",
        denominator: "Excludes answers where neither you nor a competitor appears. Requires competitors configured (up to 10).",
        source: "docs.airops.com/insights/analytics/overview; /competition",
      },
      {
        provider: "Profound",
        termUsed: "Share of Voice",
        whatItMeasures: "Frequency of your brand's mentions relative to competitors' mentions.",
        calculation: "(# responses mentioning your brand) / (total brand mentions across all responses, yours + competitors')",
        denominator: "Total brand mentions across all responses (yours + competitors'). Also produces a “Share of Voice Rank.”",
        source: "help.tryprofound.com/articles/3443229936",
        comparability: "different",
      },
      {
        provider: "Peec AI",
        termUsed: "Share of Voice (SOV)",
        whatItMeasures:
          "Your brand's mentions as a % of total mention volume across all tracked brands (competitive share, not share of total chats).",
        calculation: "(Your brand mentions) / (Total mentions across all tracked brands, incl. yours) x 100",
        denominator: "Total mentions across all tracked brands, including yours. Different denominator than Visibility Score (which divides by total chats).",
        source: "docs.peec.ai/metrics/brand-metrics/share-of-voice",
        comparability: "different",
      },
      {
        provider: "Scrunch",
        termUsed: "Competitive Presence (= Share of Voice)",
        whatItMeasures: "% of AI responses that mention your brand compared to competitors across tracked prompts and a time window.",
        calculation: "Binary presence per response, aggregated across tracked prompts over a window.",
        denominator:
          "Dashboard defaults to a trailing 12-week view with a 90-day smoothing rollup. Covers 8 platforms: ChatGPT, Claude, Gemini, Perplexity, Google AI Mode, Google AI Overviews, Microsoft Copilot, Meta AI.",
        source: "scrunch.com/how-tos/how-to-measure-ai-share-of-voice",
        comparability: "different",
      },
      {
        provider: "SEMrush",
        termUsed: "Share of Voice",
        whatItMeasures:
          "% of mentions a brand receives vs. named competitors in the same topic set. Lives in a separate “Brand Performance” report/database from the AI Visibility Score.",
        calculation: "% of mentions vs. a configured competitor set (up to 9); full formula not fully disclosed.",
        denominator:
          "Filterable by platform (Google AI Mode, ChatGPT, Perplexity, Gemini); updated weekly (vs. daily for AI Visibility Score), a common source of numbers not matching within Semrush itself.",
        source: "semrush.com/kb/1595-brand-performance-reports",
        comparability: "different",
      },
      {
        provider: "Ahrefs",
        termUsed: "AI Share of Voice",
        whatItMeasures: "See the Visibility row above: Ahrefs uses “AI Share of Voice” as its primary visibility metric rather than a separate SOV metric.",
        calculation: "See Visibility / Composite Score row.",
        denominator: "See Visibility / Composite Score row.",
        source: "help.ahrefs.com/en/articles/15501968-ai-visibility-metrics",
        comparability: "different",
      },
    ],
  },
  {
    id: "citation-rate",
    label: "Citation Rate / Citation Share",
    providers: [
      {
        provider: "AirOps",
        termUsed: "Citation Rate & Citation Share",
        whatItMeasures: "How often your domain is cited as a source. Citation Rate = answer-level; Citation Share = instance-level.",
        calculation:
          "Citation Rate = (answers citing your domain) / (total answers with >=1 citation) x 100. Citation Share = (times your domain is cited) / (total citation instances).",
        denominator:
          "Citation Rate's denominator excludes answers with zero citations. Multiple URLs from the same domain in one answer count once for Citation Rate.",
        source: "docs.airops.com/insights/analytics/citations",
      },
      {
        provider: "Profound",
        termUsed: "Citations / Citation Share / Citation Rank",
        whatItMeasures:
          "How often the brand's domain/URL is referenced as a source link (distinct from being merely named). Also shows Top Citation Domains/Pages.",
        calculation: "Citation Share = your citations vs. total citations tracked. Citation Rank = standing vs. competitors.",
        denominator: "Exact numeric formula/denominator not fully published (less precisely documented than Visibility Score/SOV).",
        source: "help.tryprofound.com/articles/3443229936",
        comparability: "different",
      },
      {
        provider: "Peec AI",
        termUsed: "Citation Rate (+ Retrieval Rate, Retrieved)",
        whatItMeasures:
          "Avg. times a domain/URL was explicitly referenced in-line in response text, when used as a source. “Retrieved” = % of chats where domain appeared as a source at all (broader than citation).",
        calculation:
          "Sources = all URLs the model accessed (shown in sidebar). Citations = the subset explicitly referenced in-line in the response text.",
        denominator: "Every citation is a source, but not every source is a citation; this distinction is a common mismatch point.",
        source: "docs.peec.ai/metrics-overview; docs.peec.ai/understanding-chats",
        comparability: "different",
      },
      {
        provider: "Scrunch",
        termUsed: "Citations / Citation Share",
        whatItMeasures:
          "External sources an AI model references to generate its answer, pulled from the actual “link pill” citations shown by the AI platform. Broken out by Citations by Owner (you/competitor/third-party) and Top Domains Cited.",
        calculation: "Counted at the citation level, distinct from brand mention.",
        denominator: "Related derived metric “Influence Score” = (% of responses citing a source) x (# of unique prompts it influences).",
        source: "scrunch.com/blog/ai-search-metrics-aeo",
        comparability: "different",
      },
      {
        provider: "SEMrush",
        termUsed: "Citations",
        whatItMeasures: "Number of AI responses that cite your domain as a source. Distinct from Mentions (brand named in text).",
        calculation: "Reported as a raw count, not a normalized rate; no standardized “Citation Rate %” is published.",
        denominator: "N/A, raw count. Also shows Cited Pages (which of your pages) and Top Cited Domains (competitors' citation counts).",
        source: "semrush.com/kb/1594-ai-seo-metrics; semrush.com/kb/1595-brand-performance-reports",
        comparability: "different",
      },
      {
        provider: "Ahrefs",
        termUsed: "Citations & “Found in”",
        whatItMeasures:
          "Citation = a page appears at least once as an in-line cited source in an AI response. “Found in” = pages the AI retrieved/used in the background but did NOT cite inline (e.g. ChatGPT's “More” sources vs. “Sources”), does not count as a citation.",
        calculation:
          "Counted per response, capped at 1 per response regardless of repeats (e.g. 3 citations of one domain in one answer = 1 citation for that domain).",
        denominator: "No normalized “Citation Rate %” published; raw counts + AI Share of Voice only.",
        source: "help.ahrefs.com/en/articles/15501968-ai-visibility-metrics",
        comparability: "different",
      },
    ],
  },
  {
    id: "mention-rate",
    label: "Mention Rate",
    providers: [
      {
        provider: "AirOps",
        termUsed: "Mention Rate",
        whatItMeasures: "Brand named in the AI-generated answer text, independent of whether it's cited as a source.",
        calculation: "(Answers mentioning your brand) / (total tracked answers) x 100",
        denominator: "ALL tracked answers, the broadest denominator of AirOps' core metrics (vs. SOV's narrower brand-or-competitor denominator).",
        source: "docs.airops.com/insights/analytics/overview",
      },
      {
        provider: "Profound",
        termUsed: "No separate “Mention Rate” term",
        whatItMeasures:
          "Profound's Visibility Score IS its mention-rate concept (brand named, whether or not cited). Citations are tracked as a distinct, stricter metric.",
        calculation: "See Visibility / Composite Score row.",
        denominator: "See Visibility / Composite Score row.",
        source: "help.tryprofound.com/articles/3443229936",
        comparability: "same",
      },
      {
        provider: "Peec AI",
        termUsed: "Visibility (functions as Mention Rate)",
        whatItMeasures:
          "Peec's “Visibility” = brand named in response text, regardless of citation/sourcing, functionally what other tools call Mention Rate.",
        calculation: "See Visibility / Composite Score row.",
        denominator: "Total chats. See Visibility / Composite Score row.",
        source: "docs.peec.ai/metrics/brand-metrics/visibility",
        comparability: "same",
      },
      {
        provider: "Scrunch",
        termUsed: "Brand Presence (= Mention Rate)",
        whatItMeasures:
          "How often the brand/product is mentioned within tracked prompts. Explicit binary signal: brand name literally appears in the answer text.",
        calculation:
          "% of tracked prompts/responses where the brand name appears, detected via pattern matching on actual collected responses (not estimated).",
        denominator: "Explicitly does not count citation-only mentions as presence; the mention must be in the answer text itself.",
        source: "scrunch.com/blog/ai-search-metrics-aeo; scrunch.com/faqs/how-accurate-is-scrunch-at-tracking-brand-presence",
        comparability: "same",
      },
      {
        provider: "SEMrush",
        termUsed: "Mentions",
        whatItMeasures:
          "Total number of prompts in which a brand is included in AI responses. “Each mention represents visibility in a unique AI query.”",
        calculation: "Raw count per prompt/response, not a %.",
        denominator:
          "Tracked in two separate underlying datasets (Visibility Overview's prompt database vs. Brand Performance's weekly dataset); these can disagree with each other inside Semrush itself.",
        source: "semrush.com/kb/1594-ai-seo-metrics",
        comparability: "different",
      },
      {
        provider: "Ahrefs",
        termUsed: "Mentions",
        whatItMeasures: "Brand name appears at least once in an AI-generated response.",
        calculation:
          "Counted per response, capped at 1 per response even if the brand is named multiple times within that answer (e.g. 3 name-drops = 1 mention).",
        denominator: "No normalized “Mention Rate %” published.",
        source: "help.ahrefs.com/en/articles/15501968-ai-visibility-metrics",
        comparability: "different",
      },
    ],
  },
  {
    id: "position-ranking",
    label: "Position / Ranking",
    providers: [
      {
        provider: "AirOps",
        termUsed: "Average Position",
        whatItMeasures:
          "Where in the AI response your brand is mentioned relative to other brands named (1 = first mention). Lower = more prominent.",
        calculation: "Average of per-answer mention order across tracked answers.",
        denominator:
          "A related per-prompt “Visibility %” = % of tracked responses in which the brand appears at all, shown on prompt-level leaderboards.",
        source: "docs.airops.com/insights/prompts/your-prompts",
      },
      {
        provider: "Profound",
        termUsed: "Average Position / Positioning",
        whatItMeasures:
          "Where the brand's mention/citation falls within a response relative to others mentioned; aggregates indicators like Share of Voice into a ranked score. Lower = better.",
        calculation: "No fully disclosed numeric formula; reported as an average position value (e.g. “5.1”).",
        denominator: "Not publicly disclosed.",
        source: "help.tryprofound.com/articles/3443229936",
        comparability: "different",
      },
      {
        provider: "Peec AI",
        termUsed: "Position",
        whatItMeasures:
          "Average ranking based on mention order within a response, calculated across ALL brands detected in that response, not just your configured competitor list.",
        calculation: "Lower = better (1 = mentioned first).",
        denominator: "Because it includes untracked brands that happen to appear, your position can be pushed down by a brand you never configured as a competitor.",
        source: "docs.peec.ai/metrics/brand-metrics/position",
        comparability: "different",
      },
      {
        provider: "Scrunch",
        termUsed: "Placement",
        whatItMeasures: "Where a brand mention falls within the response, bucketed rather than an exact numeric rank.",
        calculation: "Top (top 25% of response) / Middle (middle 50%) / Bottom (bottom 25%).",
        denominator: "Viewable in aggregate or filtered by prompt/variant/platform.",
        source: "scrunch.com/faqs/does-scrunch-track-placement-in-ai-responses",
        comparability: "different",
      },
      {
        provider: "SEMrush",
        termUsed: "Average Position (Brand Performance) / “Visibility” (Prompt Tracking)",
        whatItMeasures:
          "Average Position = where your domain's citation typically ranks among citations in AI answers over time. Prompt Tracking's “Visibility” = % of tracked prompts where your domain holds the TOP citation.",
        calculation:
          "Prompt Tracking runs daily automated queries against a custom prompt list via Semrush's Position Tracking infrastructure.",
        denominator: "A different sampling method than the passive prompt-database metrics above, and another likely source of internal mismatch.",
        source: "semrush.com/kb/1594-ai-seo-metrics; semrush.com/kb/1607-semrush-ai-visibility-data",
        comparability: "different",
      },
      {
        provider: "Ahrefs",
        termUsed: "Not a discrete published metric",
        whatItMeasures:
          "No published “average position” methodology equivalent to traditional rank tracking. Brand Radar offers a “Relevance” sort (more mentions = ranks higher) but this is a UI sort, not a scored metric.",
        calculation: "N/A, not publicly defined.",
        denominator: "N/A. Flag to customers that Ahrefs doesn't offer a direct position/ranking analog.",
        source: "help.ahrefs.com/en/articles/11064852-what-is-brand-radar-and-how-to-use-it",
        comparability: "different",
      },
    ],
  },
  {
    id: "sentiment",
    label: "Sentiment",
    providers: [
      {
        provider: "AirOps",
        termUsed: "Sentiment Score",
        whatItMeasures:
          "Tone of brand mentions across answers, bucketed Positive/Neutral/Negative, plus AI-extracted “Themes” (2-3 word descriptors).",
        calculation: "(Positive mentions + 0.5 x Neutral mentions) / (total brand mentions) x 100, scaled 0-100.",
        denominator: "Total brand mentions. Buckets: 60-100 Positive, 40-59 Neutral, 0-39 Negative.",
        source: "docs.airops.com/insights/analytics/sentiment",
      },
      {
        provider: "Profound",
        termUsed: "Sentiment Analysis + Themes",
        whatItMeasures:
          "Evaluation of tone/portrayal of the brand in AI-generated responses (positive/negative), with a “Themes” breakdown counting recurring descriptive themes (e.g. “high cost,” “proven results”).",
        calculation: "No numeric formula publicly disclosed; appears to be qualitative/theme-based classification rather than a weighted 0-100 score.",
        denominator: "Not publicly disclosed.",
        source: "help.tryprofound.com/articles/3443229936",
        comparability: "different",
      },
      {
        provider: "Peec AI",
        termUsed: "Sentiment",
        whatItMeasures: "Tone/language classification around brand mentions across responses (0-100 scale). Most brands score 65-85.",
        calculation: "Based on “language and context used around your brand mentions” (e.g. “trusted,” “leading” vs. critical language).",
        denominator: "Exact model/algorithm not publicly disclosed.",
        source: "docs.peec.ai/metrics/brand-metrics/sentiment",
        comparability: "different",
      },
      {
        provider: "Scrunch",
        termUsed: "Sentiment (3-way)",
        whatItMeasures: "Positive / Mixed / Negative classification of tone/positioning per response, with Sentiment Trends over time.",
        calculation: "ML model trained on AI responses classifies each response's tone.",
        denominator:
          "3 categories (Positive/Mixed/Negative), not a numeric 0-100 score. Breakdowns available by platform, persona, funnel stage, region, and topic.",
        source: "scrunch.com/faqs/does-scrunch-track-sentiment-about-my-brand-in-ai-responses",
        comparability: "different",
      },
      {
        provider: "SEMrush",
        termUsed: "Overall Sentiment / Favorable Sentiment",
        whatItMeasures: "Balance of “favorable” vs. “general” (neutral) sentiment in brand mentions.",
        calculation: "Reported as % favorable.",
        denominator:
          "Important caveat: SEMrush explicitly restricts sentiment scoring to non-branded queries only (“to ensure a more accurate view... in broader AI search and discovery scenarios”), a key denominator difference vs. tools that score sentiment across all queries.",
        source: "semrush.com/kb/1595-brand-performance-reports",
        comparability: "different",
      },
      {
        provider: "Ahrefs",
        termUsed: "Not offered",
        whatItMeasures: "No sentiment metric found anywhere in Ahrefs' public Brand Radar documentation.",
        calculation: "N/A, not offered.",
        denominator: "N/A. Flag to customers directly rather than guessing at an equivalent.",
        source: "help.ahrefs.com/en/articles/15501968-ai-visibility-metrics",
        comparability: "different",
      },
    ],
  },
];
