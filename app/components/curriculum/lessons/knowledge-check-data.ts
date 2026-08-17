export type QuestionKind = "multiple-choice" | "true-false" | "free-response";

export interface ChoiceOption {
  label: string;
  correct: boolean;
}

export interface KnowledgeCheckQuestion {
  kind: QuestionKind;
  prompt: string;
  /** Multiple-choice / true-false only. */
  options?: ChoiceOption[];
  /** Shown after answering a multiple-choice / true-false question. */
  explanation?: string;
  /** Free-response only, revealed on demand rather than graded. */
  modelAnswer?: string;
}

export const M1_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "A client asks why their brand doesn't show up in ChatGPT's answers. In AI Search vocabulary, what is ChatGPT?",
    options: [
      { label: "A category", correct: false },
      { label: "A surface", correct: true },
      { label: "A channel", correct: false },
      { label: "A tactic", correct: false },
    ],
    explanation: "Surface: where the end consumer actually experiences the category. You don't control it, you show up on it.",
  },
  {
    kind: "true-false",
    prompt: '"We need a stronger AI Search channel mix that includes ChatGPT and Perplexity." Is this sentence used correctly?',
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "ChatGPT and Perplexity are surfaces. The channel mix is Owned Content, External Content, Paid, Social & Influencer, and Community.",
  },
  {
    kind: "free-response",
    prompt:
      "Two clients could have identical five-channel menus (Owned Content, External Content, Paid, Social & Influencer, Community) but end up with completely different recommended splits. In 2-3 sentences, explain why.",
    modelAnswer:
      "The mix is driven by that specific client's Strategy 360 / audit signals, what the audit reveals about their current AI-search footprint, not a fixed menu everyone gets the same slice of.",
  },
  {
    kind: "multiple-choice",
    prompt:
      'A rep tells a client: "Google AI Overviews, AI Mode, and Gemini are basically the same thing since they\'re all powered by the same Gemini models." What\'s the flaw?',
    options: [
      { label: "They're not actually powered by the same models", correct: false },
      {
        label:
          "Gemini is a standalone assistant app you have to leave Search to use; AI Overviews and AI Mode are embedded directly in Search itself",
        correct: true,
      },
      { label: "AI Mode doesn't use Gemini models at all", correct: false },
      { label: "No flaw, that's correct", correct: false },
    ],
    explanation:
      "AI Overviews and AI Mode share the same Search-index dependency and no opt-in; Gemini is a separate destination entirely, even though the underlying models overlap.",
  },
  {
    kind: "free-response",
    prompt:
      "A client's audit finds almost no existing content on their site, but their category's AI answers cite forum threads and review sites more than any other source. Which channel(s) should get the largest share of their recommended mix, and why?",
    modelAnswer:
      "Community should lead, that's a direct signal from the audit, not a guess. External Content is a reasonable second priority for the same reason. Owned Content still needs some baseline investment, but shouldn't be the largest share given there's nothing there yet to build on.",
  },
];

/**
 * Scoped to what's actually on the M2 page: the metric comparison table, the "read these
 * three together" composite framing, the prompt-tracking prerequisite, and the
 * traditional-search bridge. Deliberately skips the per-provider calculation details in the
 * comparison table itself, that's reference material to look up, not something to memorize.
 */
export const M2_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt: 'A rep says: "Our Mention Rate this month was 40%." What critical piece of context is missing before that number means anything?',
    modelAnswer:
      "Whether the prompt set being tracked actually reflects the real questions buyers ask. A high or low Mention Rate is meaningless if you're tracking the wrong prompts, you're just measuring performance against a made-up version of the market.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A brand has a healthy Mention Rate and Citation Rate, but a low Share of Voice. What does this most likely indicate?",
    options: [
      { label: "A visibility problem, the brand isn't in the conversation", correct: false },
      { label: "A credibility problem, the brand is named but not trusted enough to cite", correct: false },
      { label: "A competitive problem, competitors are being named even more often in the same conversations", correct: true },
      { label: "A content problem, the brand has nothing worth citing", correct: false },
    ],
    explanation:
      "Share of Voice is the competitive check. Being present and credible doesn't mean you're winning, competitors can simply be named more often in the same conversations.",
  },
  {
    kind: "true-false",
    prompt: "If you only track Citation Rate, you'll still catch a competitive problem where rivals are being named more often than you.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Citation Rate alone doesn't show the competitive picture, that's what Share of Voice is for. Great, frequently-cited content doesn't save you if competitors are simply named more.",
  },
  {
    kind: "multiple-choice",
    prompt: "Which traditional search metric carries over to AI Search almost cleanly, just in a different container?",
    options: [
      { label: "Clicks", correct: false },
      { label: "Backlinks", correct: false },
      { label: "Average Position", correct: true },
      { label: "Domain Authority", correct: false },
    ],
    explanation:
      "Position on a page becomes position within an answer, same underlying idea (are you first or buried), different container.",
  },
  {
    kind: "free-response",
    prompt: 'A colleague says: "Citation Rate is basically just Backlinks for AI search, same thing." What\'s wrong with that comparison?',
    modelAnswer:
      "Backlinks and Domain Authority are inputs that accumulate over time and feed a ranking algorithm from the outside, a standing asset. Citation Rate is an outcome decided fresh every time a prompt runs, not something that compounds the way link equity does. Both are third-party validation in spirit, but they're not the same mechanism.",
  },
];

/**
 * Scoped to the Managed Services side of M3: the ranking factor hierarchy, search intent
 * types, off-page fundamentals / E-E-A-T, diagnosing an unfamiliar site, and the SEO team
 * handoff model. Weighted toward free-response/scenario diagnosis over multiple-choice
 * recall, per the module's application-first knowledge-check design.
 */
export const M3_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt:
      'A client says their site is "crawlable, fast, and has plenty of backlinks, so it should be ranking for our target keyword, but it isn\'t." Using the ranking factor hierarchy, what\'s the most likely missing piece, and why would building more backlinks be the wrong next move?',
    modelAnswer:
      "Almost certainly a search intent mismatch, the highest-leverage factor. Backlinks sit at the ceiling/tie-breaker tier: they can't compensate for a page answering the wrong question, so more link building would waste effort until intent is fixed.",
  },
  {
    kind: "multiple-choice",
    prompt: "A page ranks nowhere in search at all, for any query. Where does diagnosis start?",
    options: [
      { label: "Content depth vs. competitors", correct: false },
      { label: "Crawlability and indexation", correct: true },
      { label: "Backlink profile", correct: false },
      { label: "E-E-A-T signals", correct: false },
    ],
    explanation:
      "The floor of the ranking factor hierarchy. If a page isn't crawlable and indexed, nothing else is even eligible to matter yet.",
  },
  {
    kind: "free-response",
    prompt:
      "A page targeting \"best AEO platform 2026\" isn't ranking, even though it's well-written, fast, and has a few solid backlinks. What intent type is that keyword, and what does that tell you about what the content is probably missing?",
    modelAnswer:
      "Commercial investigation intent. The content is likely missing an actual comparison/evaluation structure, since that intent expects options weighed side by side, not a single-product pitch.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: a technically flawless, fast, well-linked page that doesn't match the searcher's intent will still usually outrank a slower page that matches intent well.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Intent match is the single highest-leverage factor. Technical health and authority support relevance, they don't replace it.",
  },
  {
    kind: "free-response",
    prompt:
      'A prospective client pushes back: "We don\'t need backlinks, great content is enough, Google\'s smart enough to know we\'re the best answer." What\'s the flaw, and where does E-E-A-T fit into your response?',
    modelAnswer:
      "Quality content alone doesn't establish trust. E-E-A-T, especially authoritativeness, is precisely the framework for how a search engine corroborates that a source is credible, largely through other sites vouching for it, not through self-assessment of its own writing quality.",
  },
  {
    kind: "free-response",
    prompt:
      "An unfamiliar client's organic traffic dropped 80% overnight, sitewide, across nearly every page. Which failure type do you suspect first, which tool do you check first, and why?",
    modelAnswer:
      "Sudden and sitewide points to technical failure, an algorithm update, a broken deploy, or a robots.txt change, not content. Check Google Search Console's indexing/coverage trends first, then a full-site crawl (Screaming Frog) if that doesn't show an obvious cause. An event this abrupt almost always leaves a structural fingerprint, not a content one.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A strategist is asked to run \"a gap analysis\" and comes back with a list of individual keywords competitors rank for that the client doesn't. Which did they actually run?",
    options: [
      { label: "Keyword gap analysis", correct: true },
      { label: "Content gap analysis", correct: false },
    ],
    explanation:
      "Content gap analysis operates at the topic/content-type level, whole missing pages or content types, not individual keyword terms.",
  },
  {
    kind: "free-response",
    prompt:
      "Technical SEO fixes a crawl issue and confirms the page is now indexed, but the client is still unhappy with rankings two weeks later. Whose queue does this belong in now, and what handoff should already have happened?",
    modelAnswer:
      "Content/on-page, or off-page if the gap is authority. Technical SEO's job was to clear the floor, not produce rankings by itself; the handoff is flagging that the page is now technically healthy so content can evaluate intent match and depth next, rather than assuming the technical fix alone moves rankings.",
  },
];

/**
 * Scoped to the Managed Services side of M4: the mention & citation factor hierarchy,
 * the crawler-differences table (JS-render blindness), query fan-out, structural
 * citability, and the JS-rendering verification workflow. Weighted toward
 * free-response/scenario diagnosis, same design as M3's knowledge check.
 */
export const M4_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt:
      "A client's page ranks well in classic Google Search and shows up in AI Overviews, but the exact same page never gets cited by ChatGPT or Claude for the same topic. Using the crawler-differences table, what's the most likely explanation, and what would you check first?",
    modelAnswer:
      "Most likely the content that answers the query is injected by client-side JavaScript. Googlebot renders JS, and AI Overviews/AI Mode ride on the same index, so Google sees it; GPTBot and ClaudeBot don't render JS, so if the answer only exists post-render, they never see it. Check the raw HTTP response for that URL against the rendered DOM before looking anywhere else.",
  },
  {
    kind: "multiple-choice",
    prompt: "Which tier of the mention & citation factor hierarchy is more brittle than its SEO equivalent, and why?",
    options: [
      { label: "Crawlability & retrievability", correct: true },
      { label: "Query / prompt relevance", correct: false },
      { label: "Structural citability", correct: false },
      { label: "Corroboration & mentions", correct: false },
    ],
    explanation:
      "Several major AI crawlers don't render JavaScript at all, so a page can clear classic SEO crawlability (Googlebot renders it fine) while still being functionally invisible to GPTBot, ClaudeBot, and PerplexityBot, a failure mode that essentially doesn't exist in classic SEO's version of this tier.",
  },
  {
    kind: "true-false",
    prompt: "True or false: confirming a page is indexed in Google Search Console is sufficient to confirm it's also visible to GPTBot and ClaudeBot.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Search Console confirms Googlebot's rendered view. GPTBot and ClaudeBot don't render JS, so they can miss content Googlebot sees fine. The two have to be checked separately.",
  },
  {
    kind: "free-response",
    prompt:
      "A content brief targets one exact prompt: \"best AEO platform 2026.\" Using query fan-out, explain why that alone might not be enough to get cited even on a highly relevant, well-structured page.",
    modelAnswer:
      "Systems like AI Mode fan a single prompt into several parallel sub-queries before answering. The real target isn't the literal phrase, it's the whole cluster of angles (pricing, comparisons to specific competitors, use-case fit, and so on) the system might fan that prompt into. A page that only answers the headline phrasing can lose every fanned-out sub-query a competitor's page happens to cover instead.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A paragraph reads clearly on the page, but only makes sense if the reader has already read the two paragraphs above it. What structural-citability problem does this create?",
    options: [
      { label: "If a model retrieves just that chunk, the lifted claim can be incomplete or wrong out of context", correct: true },
      { label: "No real problem, schema markup fixes this automatically", correct: false },
      { label: "It only affects Google, not the other platforms", correct: false },
      { label: "It's a query fan-out problem, not a structural one", correct: false },
    ],
    explanation:
      "Models frequently retrieve and quote a chunk, not the whole page. A claim that depends on earlier context to make sense gets mangled or dropped when lifted alone, which is exactly what self-contained chunking is meant to prevent.",
  },
  {
    kind: "free-response",
    prompt: "Why isn't it safe to treat \"this page is crawlable\" and \"this page is AEO-crawlable\" as the same claim?",
    modelAnswer:
      "\"Crawlable\" in the classic SEO sense usually just means Googlebot can reach and render it. \"AEO-crawlable\" additionally has to hold for crawlers that don't render JavaScript at all (GPTBot, ClaudeBot, PerplexityBot). A page can be fully crawlable and ranking in Google while being functionally blank to those three if its key content is JS-injected.",
  },
  {
    kind: "free-response",
    prompt: "Walk through, in order, how you'd verify whether a specific claim on a page is visible to a non-rendering LLM crawler.",
    modelAnswer:
      "Pull the raw HTTP response the way a non-rendering crawler would (e.g. curl with the crawler's user agent, or view page source, not the rendered DOM); separately open the rendered DOM in a browser's dev tools; diff the two for the specific claim in question; optionally cross-check Search Console's rendered-HTML view of what Googlebot captured to see the size of the gap. If the claim only exists post-render, it needs a server-side rendering or dynamic-rendering fix, not a copy fix.",
  },
];
