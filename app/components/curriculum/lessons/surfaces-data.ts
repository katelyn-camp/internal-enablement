/**
 * AI Search / Answer Engine Sourcing Cheat Sheet, compiled 2026-08-12.
 * Confidence tags embedded in body text ([OFFICIAL] / [INDUSTRY] / [UNCONFIRMED])
 * are rendered as inline badges by SurfacesExplorer's TaggedText.
 */

export interface QuickFact {
  label: string;
  value: string;
}

export interface SurfaceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: { label?: string; text: string }[];
}

export interface SurfaceSource {
  label: string;
  url: string;
}

/** How people actually encounter and use a surface, distinct from where its answers are sourced. */
export interface InteractionProfile {
  whereItLives: string;
  howCitationsShow: string;
  /** Extra disambiguation context, used for Google's three surfaces. */
  note?: string;
}

export interface SurfaceProfile {
  name: string;
  interaction: InteractionProfile;
  quickFacts: QuickFact[];
  highlight?: string;
  sections: SurfaceSection[];
  sources: SurfaceSource[];
}

export const SURFACE_PROFILES: Record<string, SurfaceProfile> = {
  ChatGPT: {
    name: "ChatGPT",
    interaction: {
      whereItLives:
        'chatgpt.com, iOS/Android/desktop apps, a full OpenAI-built browser ("Atlas"), a Chrome search extension, Slack app, Apple Intelligence/Siri handoff.',
      howCitationsShow:
        'Same chat window handles everything: ChatGPT decides on its own whether to search the web based on the question, or a user can click a "Search" icon to force it. Citations appear inline in the answer text plus in a separate "Sources" panel that opens alongside the response.',
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Static pretraining and live “Search” browsing, blended" },
      { label: "Search / index provider", value: "Bing (named partner) + OpenAI's own OAI-SearchBot index" },
      { label: "Dedicated crawler", value: "GPTBot (train), OAI-SearchBot (search index), ChatGPT-User (on-demand fetch)" },
      { label: "Current flagship model cutoff", value: "GPT-5.6: Feb 16, 2026" },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          'Two separate mechanisms: static pretraining knowledge (fixed at the model’s cutoff) and a live "Search"/browse layer. OpenAI’s own Help Center states ChatGPT Search "sometimes partners with other search providers," naming Bing (Microsoft) and Shopify’s privacy policies as flowed-through partners [OFFICIAL]. Search Engine Land separately reported an OpenAI VP of Engineering statement that "we use a set of services and Bing is an important one," and that a page generally won’t appear in ChatGPT Search if it isn’t indexed by Bing [INDUSTRY].',
        ],
      },
      {
        heading: "Crawlers",
        paragraphs: ["OpenAI documents three bots, each independently controllable via robots.txt [OFFICIAL]:"],
        bullets: [
          { label: "GPTBot", text: "crawls for model training. Block it to keep future content out of training data." },
          {
            label: "OAI-SearchBot",
            text: "crawls/indexes specifically so pages can surface in ChatGPT's live search. Block it and the site won't appear in ChatGPT Search results.",
          },
          {
            label: "ChatGPT-User",
            text: "fires only when a live user action (or custom GPT) triggers a fetch of a specific page; not used for automatic crawling.",
          },
        ],
      },
      {
        heading: "Model cutoffs",
        paragraphs: [
          '[OFFICIAL] OpenAI publishes a "Knowledge cutoff" field per model. GPT-4o’s cutoff was extended from November 2023 to June 2024 (Jan 2025 update). The current flagship, GPT-5.6, has an official cutoff of February 16, 2026. Older-model dates (o1 ≈ Oct 2023, o3 ≈ June 2024) are compiled by third-party trackers rather than a single OpenAI primary page; treat as directional, not exact [UNCONFIRMED for older models].',
        ],
      },
      {
        heading: "Ranking signals",
        paragraphs: [
          'OpenAI states only that ranking is "based on a number of factors designed to help users find reliable, relevant information," with crawlability by OAI-SearchBot as the one named prerequisite; no guaranteed placement [OFFICIAL]. Specific claims about structured data weighting, referring-domain thresholds, or ideal answer length circulating in SEO blogs have no primary-source backing [UNCONFIRMED].',
        ],
      },
      {
        heading: "Lag time",
        paragraphs: [
          "No official OpenAI figure exists for how long it takes a content update to surface in ChatGPT Search. Search Engine Journal reported that average unique domains cited per response dropped from 19 to 15 (>20%) after a default-model change, showing the citation pipeline shifts with model version, not just content freshness [INDUSTRY].",
        ],
      },
    ],
    sources: [
      { label: "OpenAI crawler docs", url: "https://platform.openai.com/docs/bots" },
      { label: "ChatGPT Search Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
      { label: "OpenAI model catalog", url: "https://developers.openai.com/api/docs/models" },
      { label: "Model Release Notes", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { label: "Search Engine Land: Bing as SEO priority", url: "https://searchengineland.com/chatgpt-search-microsoft-bing-seo-448019" },
      {
        label: "Search Engine Journal: ChatGPT citing fewer sites",
        url: "https://www.searchenginejournal.com/chatgpt-search-is-citing-fewer-sites-data-shows/571219/",
      },
    ],
  },

  Claude: {
    name: "Claude",
    interaction: {
      whereItLives:
        'claude.ai, iOS/Android/desktop apps, a Chrome side-panel extension ("Claude in Chrome," paid plans only), Claude Code (developer terminal tool).',
      howCitationsShow:
        "Web search is opt-in: a toggle in the message composer, off by default, unlike ChatGPT's automatic approach. When it's on, a visible \"searching the web\" indicator appears, and citations are woven inline into the response text rather than pushed into a separate sidebar.",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Mostly static pretraining; web search tool used on a minority of prompts" },
      { label: "Search / index provider", value: "Brave Search (strongly evidenced, not officially named by Anthropic)" },
      { label: "Dedicated crawler", value: "ClaudeBot (train), Claude-SearchBot (search index), Claude-User (on-demand fetch)" },
      { label: "Current flagship model cutoff", value: "Claude Opus 5: May 2026" },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          "Primarily static pretraining. Claude's web search tool (`web_search_20250305`, launched May 2025) only activates on a minority of prompts. Search Engine Land, citing Profound data, reports Claude triggers web search on roughly 36.6% of prompts (far lower than the ~90% reported for ChatGPT), and search is heavily gated by prompt intent (recency/ranking/comparison language triggers it 51–81% of the time; “how does/what is” prompts often skip it entirely) [INDUSTRY].",
        ],
      },
      {
        heading: "The Brave Search question",
        paragraphs: [
          'This is the one place where the popular SEO narrative outruns the official record. Anthropic has never issued a statement naming its web search provider. However, the evidence pointing to Brave is substantial: Anthropic added Brave Search to its subprocessor list around March 2025, an API parameter is literally named `BraveSearchParams`, and Search Engine Land (citing Profound/Jonathan Clark testing) found Claude’s citations overlap with ChatGPT’s only ~8% of the time on identical prompts but overlap ~64% with Google’s own rankings: consistent with Claude using Brave’s largely unranked top-10 results [INDUSTRY, strongly evidenced, not Anthropic-confirmed]. Treat "Claude = Brave Search" as functionally certain in the AEO industry but explicitly unconfirmed by Anthropic when you present it.',
        ],
      },
      {
        heading: "Crawlers",
        paragraphs: ["[OFFICIAL, per Anthropic's Privacy Center]. Three bots, independently controllable:"],
        bullets: [
          { label: "ClaudeBot", text: "training data collection." },
          { label: "Claude-SearchBot", text: "indexes content to improve Claude's search result quality." },
          { label: "Claude-User", text: "fetches a page only when a live user's question requires it." },
        ],
      },
      {
        heading: "",
        paragraphs: [
          'Anthropic states it does not publish crawl-frequency numbers but commits to being "thoughtful about how quickly we crawl the same domains," and that IP-blocking is unreliable since it can also block the bot from reading robots.txt.',
        ],
      },
      {
        heading: "Model cutoffs",
        paragraphs: [
          '[OFFICIAL, Anthropic Help Center]. Anthropic publishes per-model dates and distinguishes "reliable knowledge cutoff" from the broader "training data cutoff": Claude 3.5 Sonnet: Apr 2024; Claude 3.7 Sonnet: Nov 2024; Claude 4 Sonnet/Opus: Mar 2025; Claude Haiku 4.5: Jul 2025; Claude Opus 4.7/4.8: Jan 2026; Claude Sonnet 5/Fable 5: Jan 2026; Claude Opus 5: May 2026.',
        ],
      },
      {
        heading: "Lag time",
        paragraphs: [
          'No official Anthropic figure, and no industry study offers one comparable to what exists for ChatGPT/Bing. Because search only fires on ~37% of prompts, for most answers the relevant "freshness" ceiling is the training cutoff, not an index-refresh interval [INDUSTRY].',
        ],
      },
    ],
    sources: [
      { label: "Anthropic: training data cutoffs", url: "https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data" },
      {
        label: "Anthropic Privacy Center: crawler policy",
        url: "https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
      },
      { label: "Anthropic: web search API announcement", url: "https://claude.com/blog/web-search-api" },
      { label: "Search Engine Land: Claude/Brave visibility data", url: "https://searchengineland.com/claude-visibility-brave-search-rankings-480053" },
      { label: "Profound: Claude web search explained", url: "https://www.tryprofound.com/blog/what-is-claude-web-search-explained" },
    ],
  },

  "Microsoft Copilot": {
    name: "Microsoft Copilot",
    interaction: {
      whereItLives:
        'At least five distinct surfaces under one brand: a chat panel docked in the Edge browser sidebar; a full-page "Copilot Search" experience on Bing (closer to Google\'s AI Mode than to classic search); a standalone Copilot app/website; a Windows 11 taskbar icon and dedicated keyboard key; and Microsoft 365 Copilot inside Word/Excel/Outlook/Teams as a side panel.',
      howCitationsShow:
        "Copilot Search in Bing links whole cited sentences/passages inline, plus a source list shown near the top of the answer and again at the bottom.",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Live grounding in the Bing index (Prometheus/orchestrator), layered with an LLM" },
      { label: "Search / index provider", value: "Bing index" },
      { label: "Dedicated crawler", value: "Bingbot" },
      {
        label: "Current flagship model cutoff",
        value: "Backend model mix shifting from OpenAI GPT to Microsoft's own MAI models, exact live allocation not fully disclosed",
      },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          '[OFFICIAL, via Microsoft’s own 2023 blog, reported by Search Engine Land]. Built on "Prometheus," Microsoft’s architecture combining "the fresh and comprehensive Bing index, ranking, and answers" with an LLM’s reasoning (originally OpenAI’s GPT models, increasingly Microsoft’s own in-house "MAI" models). Microsoft AI (Mustafa Suleyman’s team) officially launched seven in-house MAI models in June 2026, including flagship reasoning model MAI-Thinking-1, explicitly built "without distillation from third-party models" [OFFICIAL]. Reporting (FT, via VentureBeat) has Suleyman describing an active push to reduce OpenAI reliance, but no single Microsoft page itemizes exactly which model powers which Copilot surface at any given moment [INDUSTRY / gap flagged].',
        ],
      },
      {
        heading: "Surface differences",
        paragraphs: [
          '[OFFICIAL, Microsoft Learn]. Free consumer Copilot and Copilot in Bing/Edge are grounded purely in the web/Bing index. Microsoft 365 Copilot Chat is "grounded in the web" only. Microsoft 365 Copilot (paid license) adds Microsoft Graph grounding on top of the web, toggled via a "Work IQ" setting.',
        ],
      },
      {
        heading: "Crawler and freshness",
        paragraphs: [
          "Bing's own webmaster blog states crawl frequency isn't fixed: it scales with how often a page's content changes; high-update sites can be recrawled every few days, static ones far less often [OFFICIAL, though the primary source is from 2018; no more recent official figure was found]. Barry Schwartz (Search Engine Roundtable) documented one real-world case of a page published at 5:08pm appearing in Bing Chat by ~6:30pm the same day [INDUSTRY, single anecdote]. A page must be crawled and indexed by Bing before Copilot can cite it, which follows directly from the Prometheus architecture, not just inference.",
        ],
      },
      {
        heading: "Ranking signals",
        paragraphs: [
          'Microsoft has stated the intent behind citations (sending traffic back to sources, "one of our top Bing goals") but has not published a specific ranking-factor list for Copilot citation selection [OFFICIAL, limited]. Specific SEO-blog claims (e.g., "LinkedIn is the most influential platform," specific social-signal weightings) are not traceable to any Microsoft statement [UNCONFIRMED].',
        ],
      },
    ],
    sources: [
      {
        label: "Search Engine Land: Prometheus architecture",
        url: "https://searchengineland.com/microsoft-bing-explains-how-bing-ai-chat-leverages-chatgpt-and-bing-search-with-prometheus-393437",
      },
      { label: "Microsoft AI: seven new MAI models", url: "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/" },
      {
        label: "Microsoft Learn: which Copilot is right for you",
        url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/which-copilot-for-your-organization",
      },
      { label: "Bing Webmaster Blog: crawl frequency", url: "https://blogs.bing.com/webmaster/october-2018/bingbot-series-optimizing-crawl-frequency" },
    ],
  },

  Perplexity: {
    name: "Perplexity",
    interaction: {
      whereItLives:
        "perplexity.ai, iOS/Android/desktop apps, and Comet, a full standalone Chromium-based browser with an AI assistant built into every tab.",
      howCitationsShow:
        'Bracketed numbered citations [1][2][3] appear inline in the answer, with a sources panel alongside it and suggested follow-up questions underneath. "Quick Search" gives a fast answer; "Pro Search" runs a more deliberate multi-step research pass.',
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Live retrieval at query time against Perplexity's own index (RAG)" },
      {
        label: "Search / index provider",
        value: "Perplexity's own index + third-party crawler partners (no longer dependent on Bing API, retired Aug 2025)",
      },
      { label: "Dedicated crawler", value: "PerplexityBot" },
      {
        label: "Current flagship model cutoff",
        value: "User-selectable underlying model (Sonar 2, GPT-5.6, Gemini 3.1 Pro, Claude, Grok, etc.); retrieval layer is constant regardless of model chosen",
      },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          'Perplexity now runs its own crawler and proprietary index, described by Perplexity itself as covering "hundreds of billions of webpages," processing tens of thousands of index-update requests per second [OFFICIAL, Sep 2025 Search API launch blog]. Its Help Center confirms a hybrid model: PerplexityBot plus third-party crawler partners, all now respecting robots.txt (extended to disallowed pages showing only domain/headline/summary, not full text) [OFFICIAL]. Perplexity explicitly states it does not build foundation models, so crawled content isn’t used for pretraining. Historically (2023–2024) Perplexity leaned on the Bing Search API; Microsoft retired that API on August 11, 2025, reinforcing that Perplexity’s current stack is its own index rather than a resold Bing feed, though Perplexity hasn’t explicitly tied its build-out to that retirement [INDUSTRY inference from two confirmed facts].',
        ],
      },
      {
        heading: "Model choice vs. retrieval layer",
        paragraphs: [
          "Perplexity's Help Center confirms users on paid plans can pick the underlying reasoning model (its own Sonar 2, GPT-5.6, Gemini 3.1 Pro, Claude Sonnet 5/Opus 5, Grok 4.5, and others), but the retrieval, citation, and safety layer is Perplexity's own regardless of which model is selected: \"a model in Perplexity can behave differently from the same model in the provider's standalone product\" [OFFICIAL]. Free-tier users get an automatic model pick.",
        ],
      },
      {
        heading: "Lag time",
        paragraphs: [
          'Perplexity’s Head of Search has publicly described optimizing for "helpfulness and factuality" over click-through [INDUSTRY, Otterly.AI citing a Unite.AI interview]. A commonly repeated "24–72 hour recrawl" figure for top-cited sources could not be traced to an official Perplexity number or a named study [UNCONFIRMED]. Perplexity’s own infrastructure claims (index updates per second) support fast indexing being plausible, but no official "time to first citation" metric exists.',
        ],
      },
      {
        heading: "What earns citation",
        paragraphs: [
          'Perplexity has described building "a more compact index optimized for quality and truthfulness" focused on high-demand topics rather than exhaustive coverage [OFFICIAL/INDUSTRY, per Yarats interview]. Otterly.AI’s practical framework, covering verifiable/sourced claims, easily extractable formatting (short definitions, lists, tables), and topical authority, is Otterly’s own analysis, not a literal Perplexity ranking-factor document [INDUSTRY]. Specific numeric weightings ("content relevance ~30%, freshness ~15%," etc.) circulating in marketing blogs have no visible methodology [UNCONFIRMED].',
        ],
      },
    ],
    sources: [
      { label: "Perplexity: Search API launch", url: "https://www.perplexity.ai/hub/blog/introducing-the-perplexity-search-api" },
      {
        label: "Perplexity Help Center: robots.txt policy",
        url: "https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt",
      },
      {
        label: "Perplexity Help Center: model lineup",
        url: "https://www.perplexity.ai/help-center/en/articles/10354919-what-advanced-ai-models-are-included-in-my-subscription",
      },
      { label: "Otterly.AI: Perplexity SEO guide", url: "https://otterly.ai/blog/perplexity-seo/" },
      { label: "Microsoft Learn: Bing Search API retirement", url: "https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement" },
    ],
  },

  Grok: {
    name: "Grok",
    interaction: {
      whereItLives:
        'A dedicated icon in X\'s navigation bar (plus a per-post "explain this post" icon), the standalone Grok app (iOS/Android), and grok.com.',
      howCitationsShow:
        "Answers can draw on live X posts and the open web simultaneously, but citation display is inconsistent: some answers show visible source links, others summarize without one, and there's no single official page documenting exactly when citations appear (a real gap versus the other platforms, which all document their citation UI explicitly).",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Static pretraining, plus two separate opt-in tools: Web Search and X Search" },
      { label: "Search / index provider", value: "Web Search tool (general web) + X Search tool (X posts), run independently" },
      { label: "Dedicated crawler", value: "No official crawler name/robots.txt documentation found" },
      { label: "Current flagship model cutoff", value: "Grok 4.5: Feb 1, 2026" },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          'Base pretraining draws on "publicly available information, including raw web page data, metadata extracts, and text extracts from the Internet," quality-filtered before use [OFFICIAL, xAI FAQ]. Separately (and this is a distinction worth making explicitly, since it’s usually collapsed in SEO commentary), X’s Help Center states X may share public X post data plus users’ own Grok interactions with xAI for fine-tuning/personalization, opt-out available [OFFICIAL]. That is narrower than "Grok is trained on all of Twitter."',
        ],
      },
      {
        heading: "Live search",
        paragraphs: [
          'Two separate, independently-toggleable tools per xAI’s developer docs [OFFICIAL]: Web Search (general web, real-time) and X Search (keyword/semantic search, user search, thread fetch on X, with date-range filters). Grok’s own model docs state plainly it "has no knowledge of current events or data beyond what was present in its training data" unless one of these tools is enabled.',
        ],
      },
      {
        heading: "Crawler",
        paragraphs: [
          "No official xAI documentation names a dedicated crawler or robots.txt convention, unlike OpenAI/Anthropic/Google. Third-party crawler-directory sites list unofficial user-agent strings and repeatedly claim xAI's crawler may spoof standard browser user agents rather than self-identify: a significant claim with no xAI confirmation or denial found. Present this as [UNCONFIRMED, though widely repeated], not settled fact.",
        ],
      },
      {
        heading: "Model cutoffs",
        paragraphs: [
          "Only the current flagship has an official date: Grok 4.5 (February 1, 2026), per xAI's live docs [OFFICIAL]. xAI's documentation structure only keeps a cutoff date for the current model; older pages (Grok 3, Grok 4) now redirect rather than retain historical dates, so any Grok 2/3/4/4.1/4.3 cutoff you see is a third-party aggregator estimate, not an xAI primary source [UNCONFIRMED for retired models].",
        ],
      },
      {
        heading: "Lag time and citation factors",
        paragraphs: [
          'No credible, sourced figure exists for content-refresh lag specific to Grok. General AEO research (Ahrefs’ 75,000-brand AI Overviews study, Otterly.AI’s cross-platform citation data) shows brand mentions/search volume correlate with AI citations far more than backlinks do, but these studies are not Grok-specific and shouldn’t be presented as such [INDUSTRY, general pattern only]. Grok-specific claims about an "X firehose citation hierarchy" or large cross-platform citation-volume gaps (e.g., a widely repeated "615x" stat attributed to a firm called Superlines) are not traceable to a named, verifiable methodology [UNCONFIRMED].',
        ],
      },
    ],
    sources: [
      { label: "xAI Consumer FAQs", url: "https://x.ai/legal/faq" },
      { label: "X Help Center: About Grok", url: "https://help.x.com/en/using-x/about-grok" },
      { label: "xAI Docs: Web Search tool", url: "https://docs.x.ai/developers/tools/web-search" },
      { label: "xAI Docs: X Search tool", url: "https://docs.x.ai/developers/tools/x-search" },
      { label: "xAI Docs: Models", url: "https://docs.x.ai/developers/models" },
      { label: "Ahrefs: AI Overview brand visibility factors", url: "https://ahrefs.com/blog/ai-overview-brand-correlation/" },
    ],
  },

  "Google Overviews": {
    name: "Google AI Overviews",
    interaction: {
      whereItLives:
        "A box embedded directly inside the normal google.com results page, not a separate tab, not something a user opts into per search.",
      howCitationsShow:
        'Fully automatic: shows up "when our systems determine that generative AI can be especially helpful." As of a January 2026 update, tapping "Show more" then asking a follow-up in the "Ask anything" bar now hands the conversation off into AI Mode rather than staying in the box. It cannot be turned off; the only escape hatch is clicking "Web" after a search, which reverts to plain text links.',
      note: "This is the automatic snapshot layer of Search itself, distinct from AI Mode (the deliberate, deeper conversational layer of that same Search experience) and from Gemini (a standalone assistant app, not a part of Search at all). Google has been visibly blurring the Overviews/AI Mode line further every few months.",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Live RAG grounding in the core Google Search index: no separate ranking system" },
      { label: "Search / index provider", value: "Google Search index" },
      { label: "Dedicated crawler", value: "Googlebot (indexing)" },
      { label: "Current flagship model cutoff", value: "Powered by Gemini 3 (Jan 2025 base cutoff, largely overridden by live grounding)" },
    ],
    highlight:
      "Google AI Overviews and AI Mode are the only two surfaces where Google states outright there is no separate ranking system: a page must already be indexed and snippet-eligible in classic organic Search before it can be cited. This is the most SERP-dependent of all eight surfaces, more so than any of the LLM-native tools.",
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          'Explicitly described by Google as retrieval-augmented generation ("grounding"): the system "relies on our core Search ranking systems to retrieve relevant, up-to-date web pages from our Search index" and then generates a response from those specific pages [OFFICIAL, Google Search Central]. Critically, Google states there is no separate ranking system for AI Overviews: a page must already be indexed and eligible to show a snippet in classic organic Search to be eligible for citation, full stop. Google’s docs explicitly debunk llms.txt, "content chunking," and special schema.org markup as requirements.',
        ],
      },
      {
        heading: "Model",
        paragraphs: [
          "Gemini 3 is now the default model powering AI Overviews globally, per Google's own product blog [OFFICIAL]. Because AI Overviews are grounded live against the Search index, the model's static training cutoff (Jan 2025 for Gemini 3.x) is largely beside the point for current-events or freshness-sensitive queries.",
        ],
      },
      {
        heading: "Lag time",
        paragraphs: [
          'No official number exists for "time to first appearance in an AI Overview." Search Engine Roundtable reported that a previously observed lag (deindexed/manual-action pages continuing to show in AI Overviews for a few days after removal from the main index) appears to have closed, per one SEO practitioner’s (Glenn Gabe’s) informal testing [INDUSTRY, single practitioner observation, not Google-confirmed]. Specific percentages like "36% of new pages cited within 24 hours" trace to non-major AEO marketing blogs, not an established firm [UNCONFIRMED].',
        ],
      },
    ],
    sources: [
      { label: "Google: AI Features and Your Website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google: Optimizing for Generative AI Search", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
      {
        label: "Search Engine Journal: AI Overviews powered by Gemini 3",
        url: "https://www.searchenginejournal.com/google-ai-overviews-now-powered-by-gemini-3/565987/",
      },
      { label: "Search Engine Roundtable: AI Overview lag", url: "https://www.seroundtable.com/google-ai-overview-lag-gone-41368.html" },
    ],
  },

  "Google AI Mode": {
    name: "Google AI Mode",
    interaction: {
      whereItLives:
        'Its own tab next to "All"/"Images"/"News" on the results page, at its own URL (google.com/aimode), as an icon in the Google app, or (new as of 2026) reached by following up on an AI Overview.',
      howCitationsShow:
        'Runs "query fan-out" (many parallel sub-searches behind the scenes) and shows richer link/citation cards than an AI Overview does. Passed 1 billion monthly users about a year after launch, with usage reported as "more than doubling every quarter."',
      note: "The deliberate, deeper conversational layer of the same Search experience AI Overviews lives in: a genuine multi-turn chat interface, not a summary box. Distinct from Gemini, which is a standalone assistant app you leave Search to use.",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Same RAG grounding as AI Overviews, plus deeper “query fan-out” (more parallel sub-queries)" },
      { label: "Search / index provider", value: "Google Search index" },
      { label: "Dedicated crawler", value: "Googlebot (indexing)" },
      { label: "Current flagship model cutoff", value: "Same as AI Overviews" },
    ],
    highlight:
      "Google AI Overviews and AI Mode are the only two surfaces where Google states outright there is no separate ranking system: a page must already be indexed and snippet-eligible in classic organic Search before it can be cited. This is the most SERP-dependent of all eight surfaces, more so than any of the LLM-native tools.",
    sections: [
      {
        heading: "How it differs from AI Overviews",
        paragraphs: [
          'Same RAG grounding against the live Google Search index and the same organic-indexing prerequisite, but AI Mode is built for "queries where further exploration, reasoning, or complex comparisons are needed" and uses deeper "query fan-out" (generating a larger set of concurrent, related sub-queries to gather more supporting results before answering) [OFFICIAL, Google Search Central and Google’s own blog]. AI Overviews only appear "when our systems determine that it is additive to classic Search"; AI Mode is a more deliberate, always-reasoning surface.',
        ],
      },
      {
        heading: "Freshness",
        paragraphs: [
          "Same dynamic as AI Overviews: content becomes eligible once indexed, no separate model-training delay, though Google is explicit that it never guarantees crawl/index/serve timing for any given page [OFFICIAL].",
        ],
      },
    ],
    sources: [
      { label: "Google: AI Features and Your Website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
      {
        label: "Google blog: How AI Mode and AI Overviews help you explore the web",
        url: "https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/",
      },
      { label: "Search Engine Land: Query fan-out guide", url: "https://searchengineland.com/guide/query-fan-out" },
    ],
  },

  Gemini: {
    name: "Gemini",
    interaction: {
      whereItLives:
        "A completely separate destination from the search results page: its own app (iOS/Android), its own website (gemini.google.com), the assistant layer inside Google Workspace, and (rolling out through 2026) the default assistant on Android, replacing Google Assistant.",
      howCitationsShow:
        "Structurally a general-purpose chatbot: the same category as ChatGPT or Claude, not a search-results feature. The same family of Gemini models also powers AI Overviews and AI Mode under the hood, but using the app means deliberately leaving Search rather than staying inside it.",
      note: "Not a part of Search: a standalone assistant you go to instead of it, even though the underlying models are shared with AI Overviews and AI Mode.",
    },
    quickFacts: [
      { label: "Primary answer mechanism", value: "Static pretraining by default; live Google Search grounding is opt-in (API) or automatic (consumer app)" },
      { label: "Search / index provider", value: "Google Search index, when grounding is on" },
      { label: "Dedicated crawler", value: "Google-Extended (training/grounding permission), separate from Googlebot (Search indexing)" },
      { label: "Current flagship model cutoff", value: "Gemini 3.x: Jan 2025" },
    ],
    sections: [
      {
        heading: "How it sources answers",
        paragraphs: [
          'Static pretraining by default. Live grounding is a separate, explicit mechanism: the Gemini API’s "Grounding with Google Search" tool lets the model decide whether a query needs a live search, run it, and return inline citations, an opt-in feature for developers [OFFICIAL]. In the consumer Gemini app, the same Search-index grounding pipeline is applied automatically/server-side rather than toggled by the end user, confirmed indirectly via Google’s Google-Extended documentation.',
        ],
      },
      {
        heading: "Model cutoffs",
        paragraphs: [
          "[OFFICIAL]. Gemini 3.x family: January 2025 knowledge cutoff, per Google's own developer FAQ. Gemini 2.5 is widely reported to carry the same January 2025 cutoff, though this wasn't independently verified against a primary Vertex AI page in this research pass [INDUSTRY/aggregated for 2.5]. Google has never published an official cutoff for Gemini 1.0/1.5 [UNCONFIRMED, third-party estimates only].",
        ],
      },
      {
        heading: "Crawler distinctions",
        paragraphs: ["[OFFICIAL, Google's crawler reference page]. The most useful technical detail for AEO purposes:"],
        bullets: [
          {
            label: "Googlebot",
            text: "the Search indexing crawler. Blocking it removes a site from Search entirely, including AI Overviews and AI Mode (since those depend on the same index).",
          },
          {
            label: "Google-Extended",
            text: "not a separate crawler with its own user-agent, but a robots.txt control token governing whether content already crawled may be used for (a) training future Gemini models and (b) grounding in Gemini Apps/Vertex AI. Google states explicitly this does not affect Search rankings or inclusion.",
          },
          {
            label: "GoogleOther",
            text: "a generic, miscellaneous crawler for internal R&D, unrelated to Search ranking or Gemini training/grounding.",
          },
        ],
      },
      {
        heading: "",
        paragraphs: [
          "Practical implication: a site owner has three independent levers: stay in Google Search (Googlebot), opt in/out of Gemini training and grounding (Google-Extended), and GoogleOther is irrelevant to either.",
        ],
      },
    ],
    sources: [
      { label: "Gemini 3 Developer Guide", url: "https://ai.google.dev/gemini-api/docs/gemini-3" },
      { label: "Grounding with Google Search: Gemini API docs", url: "https://ai.google.dev/gemini-api/docs/google-search" },
      { label: "Google's common crawlers", url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" },
    ],
  },
};
