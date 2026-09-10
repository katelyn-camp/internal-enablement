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
 * Scoped to the Services side of M3: the ranking factor hierarchy, search intent
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
 * Scoped to the Services side of M4: the mention & citation factor hierarchy,
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

/**
 * Scoped to the Services side of M5: the tool-to-source map (GSC, Semrush/Ahrefs,
 * GA4, AirOps Insights), raw-count inflation, the number-to-outcome chain (Page 360),
 * and the suspicious-number validation workflow. Every scenario here is a
 * planted-bad-data gut-check, matching the module's knowledge-check design.
 */
export const M5_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt:
      "An account has a high mention rate but a low citation rate. A different account has the opposite: high citation rate, low mention rate. What does each pattern actually indicate, and does the same fix work for both?",
    modelAnswer:
      "Not mirror images, and citation isn't strictly conditional on mention, a citation can attach without the brand ever being named. High mention/low citation: the model names the brand often but rarely also retrieves and links a page, worth investigating whether that's the model drawing on general knowledge rather than a live retrieval, versus a content gap, versus a navigational/definitional intent where citation was never likely. High citation/low mention: check whether those citations actually name the brand. Mostly yes, weak brand recognition. Mostly no, citation without attribution, a branding gap. Both need follow-up (prompt coverage, intent, tracked-set size) before prescribing a fix; the fixes aren't interchangeable.",
  },
  {
    kind: "free-response",
    prompt:
      "A rep is excited: \"Our citation count doubled this month!\" You also know the account added 40 new prompts to its tracked set that same month. What's your first question, and why?",
    modelAnswer:
      "Whether citation rate or citation share moved too, not just the raw count. Raw citation counts mechanically inflate as you track more prompts, more tracked questions means more chances to be cited, with zero change in actual content performance. The raw count alone can't tell you if anything real improved; the rate or share can.",
  },
  {
    kind: "free-response",
    prompt:
      "Before you cite a client's GA4 conversion numbers in a recs deck, what should you check first, and what real failure mode are you protecting against?",
    modelAnswer:
      "Whether the GA4 conversion event is actually configured correctly and firing. A client can show 0 conversions not because nothing converted but because the event never fires, or show a huge jump because someone just fixed a broken event, neither is a real performance signal. Citing either without checking the underlying event config risks presenting a tracking artifact as a strategy result.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: if a page ranks in the top 5 in Google Search Console and has a strong AI citation rate, you can assume it's also driving meaningful traffic and revenue.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "GSC and the AI-visibility numbers show potential reach and AI-engine awareness, not business outcome. A page can rank well and get cited often while still driving under 100 users a month, that combination usually points to a technical or brand-awareness gap, not a win. GA4 is the layer that confirms whether reach actually converted into traffic or revenue.",
  },
  {
    kind: "free-response",
    prompt:
      "Walk through, in order, how you'd validate a citation-rate number that jumped sharply before presenting it to a client as a win.",
    modelAnswer:
      "Confirm nothing about the measurement changed, same prompt set, date range, and platform filters as the prior period. Check whether the raw count and the rate/share moved together, if only the raw count moved, suspect prompt-set growth rather than a real gain. Cross-reference against an adjacent signal, e.g. whether GA4 shows any corresponding traffic movement from AI referral sources. Only once the cause is isolated, present it plainly as what actually moved and why, not just the number itself.",
  },
];

/**
 * Scoped to M6: the refresh/net-new/consolidate decision, running a cannibalization audit,
 * why net-new content dies unlinked, and setting realistic production velocity. Matches
 * the module's "quiz + refresh/net-new/consolidate scenario" knowledge-check design, mixing
 * concept-recall questions with the scenario-diagnosis format used in M3-M5.
 */
export const M6_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt:
      "A client's page on your target topic already ranks #4, has a handful of backlinks, and gets steady traffic, but it's thin, references outdated numbers, and never comes up in AI answers. A junior teammate suggests writing a brand-new page instead. What do you tell them, and why?",
    modelAnswer:
      "Refresh the existing page rather than publish net-new. It already has history, some backlink equity, and an established ranking, a brand-new URL would start cold with none of that. Refreshing is also faster to prove out and lower-risk: update the facts, restructure for direct-answer framing, add what's missing, and measure against a before/after baseline rather than waiting on a new page to earn trust from scratch.",
  },
  {
    kind: "multiple-choice",
    prompt: "Which of these is the clearest sign two pages need a cannibalization review, not two separate refreshes?",
    options: [
      { label: "Both pages are more than a year old", correct: false },
      { label: "Both pages target the same query/intent, overlapping URLs competing for the same ranking or citation opportunity and fragmenting the signal between them", correct: true },
      { label: "Both pages are in the same content folder", correct: false },
      { label: "Both pages have low word counts", correct: false },
    ],
    explanation:
      "Cannibalization is specifically about two URLs competing for the same intent and the same ranking or citation opportunity, fragmenting the signal between them instead of concentrating it on one page, not simply two old or similarly-categorized pages.",
  },
  {
    kind: "free-response",
    prompt:
      "An audit finds two pages on a client's site, an old blog post and a newer resource-hub article, both targeting the exact same query, and both are showing up (weakly) in AI Overviews for it. What's the fix, and why not just leave both since they're both getting some citation credit?",
    modelAnswer:
      "301 redirect the weaker page into the stronger one and consolidate the content. Targeting the same intent across two URLs creates a fragmented citation footprint across two URLs rather than a single authoritative resource, so neither page performs as well as one consolidated page would. \"Both get some credit\" is worse than \"one page gets all of it,\" because concentrated signal is what wins the top position or the citation, not distributed partial credit.",
  },
  {
    kind: "free-response",
    prompt:
      "A strategist publishes five strong new pages on a client's site but doesn't add any internal links pointing to them from existing content. Two months later, none of the five are ranking or getting cited. What's the most likely explanation, and what should have happened at launch?",
    modelAnswer:
      "New pages start with zero internal link equity and usually zero backlinks, if nothing on the site already links to them, they're effectively orphaned: harder to discover, harder to crawl, and disconnected from whatever topical authority the rest of the site has built up. At launch, each new page should have been linked from relevant existing pages, ideally including some of the site's stronger, already-ranking pages, not left to be found on its own.",
  },
  {
    kind: "true-false",
    prompt: "True or false: a content team that's accelerating net-new publishing volume year over year is automatically in a healthy content position.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Publishing velocity alone isn't the health signal. A team can be aggressively shipping net-new pages while a large backlog of older content quietly decays unrefreshed and unlinked, that's maintenance debt building up behind a velocity number that looks great in isolation.",
  },
  {
    kind: "free-response",
    prompt:
      "A client wants to double their monthly content output. Before agreeing that's the right move, what should you check, and why might a lower net-new number with a refresh cadence built in actually be the stronger recommendation?",
    modelAnswer:
      "Check the size of the existing library and whether it already has a refresh backlog, decayed pages, stale facts, unlinked older content, since doubling net-new output on top of unmanaged decay just grows the backlog faster than anyone can address it. A realistic velocity plan usually allocates capacity to both refresh and net-new, since refresh moves are often faster to prove out and protect the existing asset base, while net-new pages compete for the same limited editorial and review capacity.",
  },
];

/**
 * Scoped to M7: the three-method valuation ladder (observed attribution, paid-comp
 * replacement cost, gross-up), building and defending an AdWords-equivalent dollar
 * estimate, and holdout design prerequisites. Matches the module's "free-response: build
 * + defend a dollar-value estimate" knowledge-check design, weighted toward scenarios
 * that require actually doing the math and then defending it against pushback.
 */
export const M7_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A buyer's journey has five touches before a $500 purchase: (1) an organic blog post, (2) a paid social retargeting ad, (3) an email nurture, (4) a click on a ChatGPT citation link, (5) a branded search click that converts. Under a pure last-touch model, how much credit does the AI-search touch (touch 4) receive?",
    options: [
      { label: "$500, it clearly influenced the final decision", correct: false },
      { label: "$100, an even one-fifth split", correct: false },
      { label: "$0, last-touch gives 100% of the credit to the final touchpoint before conversion, touch 5", correct: true },
      { label: "$200, treated as a middle touch under U-shaped rules", correct: false },
    ],
    explanation:
      "Last-touch assigns all credit to whichever touch happened immediately before conversion, here, the branded search click. Every earlier touch, including the ChatGPT citation click, gets $0 under this model regardless of how much it actually shaped the buyer's decision.",
  },
  {
    kind: "free-response",
    prompt:
      "Using that same five-touch, $500 journey, compute the dollar credit each touch receives under a time-decay model where each touch's weight roughly doubles as it gets closer to the conversion (a 1-2-4-8-16 ratio across the five touches). Show the math.",
    modelAnswer:
      "The ratio 1:2:4:8:16 sums to 31 parts. Each part is worth $500 / 31 ≈ $16.13. Touch 1 (organic) = 1 part ≈ $16.13. Touch 2 (paid social) = 2 parts ≈ $32.26. Touch 3 (email) = 4 parts ≈ $64.52. Touch 4 (AI search) = 8 parts ≈ $129.03. Touch 5 (branded search) = 16 parts ≈ $258.06. Unlike last-touch or first-touch, the AI-search touch picks up a meaningful, if partial, share of the credit here because it sits close to, but not at, the conversion.",
  },
  {
    kind: "true-false",
    prompt: "True or false: Google Analytics 4's account-wide default attribution model today is last-click.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "GA4 used to default new properties to last-click, but the platform-wide default is now data-driven attribution, an algorithmic model that estimates each touchpoint's actual contribution from the account's own conversion paths rather than applying one fixed rule. First-click, linear, time-decay, and position-based were deprecated and are no longer selectable as of November 2023; a property can currently choose between data-driven, Paid & Organic Last Click, or Google Paid Channels Last Click.",
  },
  {
    kind: "free-response",
    prompt:
      "A client asks why the conversions AirOps shows for their AI-search work look much smaller than what their SEO team is reporting for the same account. What's the first thing to check, and why?",
    modelAnswer:
      "Check which attribution model the client's own GA4 property is set to under Attribution Settings. AirOps doesn't calculate its own model, it pulls in whatever GA4 already counts as a conversion for that property. If the property is on last-click, any touch upstream of the final one, including an AI-search-driven touch, gets zero credit no matter how much it actually influenced the buyer, while another team's report could be reading from a different model or lookback window and show a bigger number for the exact same underlying journey. The gap is very likely a model or settings mismatch, not a performance problem.",
  },
  {
    kind: "free-response",
    prompt:
      "Explain, in your own words, why last-touch attribution is the model most likely to make AI-search influence invisible in a client's reporting, using the five-touch, $500 example.",
    modelAnswer:
      "A buyer influenced by an AI-search answer almost never converts on that exact touch, they read the answer, form an opinion, and come back later through a branded search or a direct visit. That means the AI-search touch is structurally very unlikely to ever be the last touch before conversion, so last-touch assigns it $0 by construction, regardless of how much it actually shaped the decision. This is why a client relying only on last-click GA numbers can look like AI search is doing nothing, even when it's the reason the buyer showed up in the first place, and why it matters to know which model a client's account is using before treating that number as the whole story.",
  },
];

/**
 * Scoped to the Sales side of M3: the four-factor ranking order, the robots.txt
 * AI-bot-block check, and why a technically broken site is a shared SEO/AEO problem.
 * One free-response question is framed as a CMO objection to rehearse turning the
 * concept into a live talk track, not just recall.
 */
export const M3_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A prospect's site is fast, has clean markup, and a strong backlink profile, but still isn't ranking for its main keyword. Per this module's ranking factor order, what has to be checked first, before backlinks are even worth discussing?",
    options: [
      { label: "Crawlability and indexability", correct: false },
      { label: "Search intent match", correct: true },
      { label: "Authority and trust", correct: false },
      { label: "Domain age", correct: false },
    ],
    explanation:
      "Speed, clean markup, and backlinks already point past the crawlability floor, so the next factor in line is whether the page actually matches what the searcher is looking for. Authority is a tiebreaker further down the order, it can't fix an intent mismatch.",
  },
  {
    kind: "true-false",
    prompt: "True or false: a 404 when checking a prospect's robots.txt file means the site is blocking all bots by default.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "No file means no explicit disallow rules, the default is crawl everything. The signal worth checking for is a file that exists and specifically names an AI bot like GPTBot in its disallow list.",
  },
  {
    kind: "free-response",
    prompt:
      "A prospect insists their organic traffic is healthy, but their blog hasn't published anything in two years. What should that make you suspicious of going forward, and why does it matter more for AI visibility than for classic ranking stability?",
    modelAnswer:
      "A content engine that was built once and abandoned. Traffic looking fine today doesn't mean it stays that way, AI answer engines specifically favor sources that are current and still publishing on a topic, so a stale hub gives an AI nothing new to find, trust, or cite going forward, even if the older content once ranked well.",
  },
  {
    kind: "free-response",
    prompt:
      "A CMO tells you: \"We already rank #1 on Google for our category, why do we need to talk about AI search at all?\" How do you respond?",
    modelAnswer:
      "Ranking well in classic Google search and being visible to ChatGPT, Claude, and Perplexity aren't the same thing, those platforms don't render JavaScript and weigh trust differently than Google does, so a #1 organic ranking doesn't guarantee AI visibility. AEO builds on top of what SEO already earned rather than replacing it, and a technically broken foundation, like content invisible to AI crawlers, is a real problem those platforms have even when Google ranking looks fine.",
  },
];

/**
 * Scoped to the Sales side of M4: the non-rendering platforms, the channel-influence
 * split (owned vs. community/third-party), and using a JS-rendering gap or a channel-mix
 * imbalance as a discovery-call hook. Includes one CMO-objection free-response.
 */
export const M4_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "Per the platform table in this module, which three platforms don't render JavaScript at all?",
    options: [
      { label: "ChatGPT, Claude, Perplexity", correct: true },
      { label: "ChatGPT, Claude, Google AI Overviews", correct: false },
      { label: "Claude, Perplexity, Gemini", correct: false },
      { label: "All five surfaces render JavaScript the same way", correct: false },
    ],
    explanation:
      "ChatGPT, Claude, and Perplexity all read the raw HTTP response only. Google AI Overviews and AI Mode are the outlier, they ride on Googlebot's full rendering pipeline.",
  },
  {
    kind: "true-false",
    prompt: "True or false: a brand's own website is the single largest source of what AI platforms say about it.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Owned content accounts for roughly 15-25% of citations. Community sources, Reddit, YouTube, LinkedIn, and similar, account for roughly 48% on their own, before External Content and Social & Influencer are even added in.",
  },
  {
    kind: "free-response",
    prompt:
      "A prospect's pricing numbers load correctly in a browser but are injected by client-side JavaScript after the page renders. What's the risk specific to AI-search visibility, and what would you tell them to check?",
    modelAnswer:
      "ChatGPT, Claude, and Perplexity don't render JavaScript, so if the pricing only exists post-render, those three would never see it, even though Google renders the page fine and shows it correctly in classic search. The prospect should check the raw HTTP response for that page against what actually shows up in a browser's rendered view to confirm whether the pricing is present before the render step or only after it.",
  },
  {
    kind: "free-response",
    prompt:
      "A CMO pushes back: \"Our content team already publishes constantly on our own site, why would this be a priority?\" How do you respond?",
    modelAnswer:
      "Publishing volume on their own domain doesn't change the fact that owned content only accounts for roughly 15-25% of what AI platforms actually cite, while community sources like Reddit, YouTube, and LinkedIn account for roughly 48% on their own. No matter how much they publish, most of what AI platforms say about the brand is being decided somewhere they don't control yet, which is exactly why external and community presence has to be part of the plan, not a replacement for the owned-content work already happening.",
  },
];

/**
 * Scoped to the Sales side of M5: translating a team-level number to the altitude
 * the person across the table owns, the CAC/LTV/payback vocabulary, and knowing what's
 * Services' job to validate versus a rep's job to translate. One CMO-facing free-response.
 */
export const M5_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "Per this module, which number would you lead with when the person across the table is a CMO rather than a VP of Growth?",
    options: [
      { label: "The team-level number, e.g. \"we got cited\"", correct: false },
      { label: "The company-level translation, e.g. \"trusted market visibility\"", correct: true },
      { label: "Whichever number is easiest to pull up on a dashboard", correct: false },
      { label: "Raw citation count for the month", correct: false },
    ],
    explanation:
      "A CMO owns the whole marketing organization's position and impact, not the mechanics behind a single metric. The company-level version of a number is the one they can actually defend to their own board or CFO.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: a CMO who rose through brand or product marketing typically knows team-level mechanics like CAC and payback period as fluently as a CMO who rose through growth or performance.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "A growth-background CMO already knows the team-level numbers cold. A brand or product-background CMO leans harder on their VP of Growth for that detail and cares more about how the brand is represented, that's an attention and priority gap, not a knowledge gap.",
  },
  {
    kind: "free-response",
    prompt:
      "Using the same 3:1 LTV-to-CAC logic as the ARS worked example, a prospect reports an LTV of $9,000. What target CAC would justify that same ratio, and why does the ratio matter more than either number alone?",
    modelAnswer:
      "$9,000 divided by 3 is a target CAC of $3,000. The ratio is what tells you whether a channel is worth investing in, a high LTV alone doesn't justify unlimited spend to acquire a customer, and a low CAC alone doesn't matter if that customer isn't worth much over time. The two numbers only mean something read together.",
  },
  {
    kind: "free-response",
    prompt: "A CMO asks you directly: \"What's our cost per lead going to look like with this program?\" How do you respond?",
    modelAnswer:
      "Don't invent or promise a specific number, validating a figure like that is Services' job, not something to answer live off the top of your head. The better move is the one a CMO themselves would make: know who on the account's side owns that team-level detail, and bring the company-level story, what this does for trusted visibility and qualified pipeline, to the person actually in front of you.",
  },
];

/**
 * Scoped to the Sales side of M6: goal-first framing before pitching a tactic, the
 * refresh/net-new/consolidate talk track, and sizing an engagement to the account rather
 * than a fixed package. One CMO-facing free-response tests turning a tactic request back
 * into a goal question.
 */
export const M6_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "Per the talk track in this module, which content move is described as the fastest path to proof, since it uses equity the account already paid for?",
    options: [
      { label: "Net-new", correct: false },
      { label: "Refresh", correct: true },
      { label: "Consolidate", correct: false },
      { label: "All three move at the same speed", correct: false },
    ],
    explanation:
      "Refresh uses existing links, existing rank, and existing familiarity instead of starting at zero, which makes it lower-risk and faster to prove than net-new content.",
  },
  {
    kind: "true-false",
    prompt: "True or false: net-new content should be the default recommendation whenever a prospect wants to grow visibility in a new area.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Net-new is only worth proposing once a real gap is confirmed, not just a page that could be better. Recommending it before confirming the gap reads as pitching a tactic instead of solving a problem.",
  },
  {
    kind: "free-response",
    prompt:
      "A prospect's page already ranks #4, has some backlinks, and gets steady traffic, but a junior teammate wants to pitch a brand-new page instead. What should be recommended, and why?",
    modelAnswer:
      "Refresh the existing page rather than propose net-new. It already carries links, ranking history, and familiarity that a brand-new URL would start without, which makes refresh both faster to prove and lower risk, the fix the talk track leads with by default.",
  },
  {
    kind: "free-response",
    prompt: "A CMO says: \"We want to publish twice as much content next quarter to grow our AI visibility.\" How do you respond?",
    modelAnswer:
      "Ask what business goal is actually driving the request, being known for something new versus winning more of what's already owned, since that answer decides whether refresh, net-new, or consolidate is the right move, not a fixed content quota. The frame worth using is sizing the chef, not picking a menu item: the right size and shape of the work depends on what an audit finds, not on doubling a number before anyone's confirmed a real gap.",
  },
];

/**
 * Scoped to the Sales side of M7, already covered by M7AttributionRoiSales.tsx: attribution
 * model literacy, the two levels of ROI, and the line not to cross on CAC/LTV or revenue
 * promises. Includes a CMO-facing free-response on the revenue-guarantee objection.
 */
export const M7_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "Which attribution model was Google Analytics' old default, and zeroes out an AI-search touch a buyer read weeks before converting?",
    options: [
      { label: "First-touch", correct: false },
      { label: "Last-touch", correct: true },
      { label: "U-shaped", correct: false },
      { label: "Data-driven", correct: false },
    ],
    explanation:
      "Last-touch gives all the credit to whatever happened right before conversion, usually a branded search or a direct visit, and gives none to an earlier AI-search touch no matter how much it shaped the decision.",
  },
  {
    kind: "true-false",
    prompt: "True or false: GA4's current default, data-driven attribution, always gives real credit to an AI-search touch.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Data-driven attribution is algorithmic, not a fixed rule, it estimates credit from the account's own data. That can surface real credit for an AI-search touch, or very little, entirely depending on that account.",
  },
  {
    kind: "free-response",
    prompt:
      "A client's GA4 property shows almost no conversions tied to AI search and concludes the channel isn't driving anything. What should you find out before accepting that conclusion?",
    modelAnswer:
      "Which attribution model the client's property is actually running. A model like last-touch structurally can't see an AI-search touch that happened weeks before the buyer converted through a branded search or direct visit, so the conclusion could be a real result or just a property that was never going to be able to see that credit in the first place.",
  },
  {
    kind: "free-response",
    prompt: "A CMO asks you: \"Can you guarantee this will show up as revenue in our reporting?\" How do you respond?",
    modelAnswer:
      "No, and say so directly. Level 1, whether the work moved mention rate, citation rate, and share of voice, can be measured and reported on now. Level 2, whether that visibility turns into pipeline and revenue, is still being built out as a category, for AirOps and everyone in it, so a specific revenue number isn't something to promise. Commit to reporting Level 1 honestly rather than overpromising Level 2.",
  },
];

/**
 * Scoped to the Sales side of M8 (AirOps Research): the volatility of AI visibility,
 * the gap between Google rank and AI citation, and using a sourced fact live on a call
 * rather than memorizing the whole digest. Includes a CMO-facing free-response on why
 * AI Overviews matter even when Google traffic still looks healthy.
 */
export const M8_SALES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt: "Per this module, what share of Google AI Overview citations come from URLs outside Google's own top 20 organic results?",
    options: [
      { label: "About 10%", correct: false },
      { label: "About 30%", correct: false },
      { label: "About 59.6%", correct: true },
      { label: "Nearly 100%", correct: false },
    ],
    explanation:
      "Ranking well organically is still a meaningful signal, 80% of cited brands rank in Google's organic top three, but 59.6% of AI Overview citations still come from outside the top 20, so a strong Google rank doesn't guarantee AI Overview citation.",
  },
  {
    kind: "true-false",
    prompt: "True or false: once a brand appears in an AI answer, it reliably reappears in the same answer to the same query going forward.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Only about 30% of brands stay visible across consecutive AI answers to the same query, and only 20% hold visibility across five consecutive runs. AI citation is volatile, not a stable ranking.",
  },
  {
    kind: "free-response",
    prompt:
      "A prospect asks how a page that already ranks #1 on Google could still not get cited by ChatGPT. Using two facts from this module, explain why.",
    modelAnswer:
      "Google rank and AI citation are correlated, not identical. A page ranking #1 in Google does get cited more often than a lower-ranked page, but 59.6% of AI Overview citations still come from outside Google's top 20, so ranking well doesn't guarantee citation. On top of that, 85% of brand mentions in AI answers come from third-party domains, not the brand's own site, so even a page ranking #1 on the brand's own domain is competing against comparison pages, reviews, and community sources for the actual citation.",
  },
  {
    kind: "free-response",
    prompt: "A CMO says: \"Google still sends us plenty of traffic, why should we care about AI Overviews eating into search clicks?\" How do you respond?",
    modelAnswer:
      "AI Overviews went from appearing in under 5% of Google results to over a quarter of them in about six months, and click-through rate drops 61% the moment one shows up on a query. The traffic isn't gone, it's landing somewhere a rank tracker can't see, and that visibility is volatile besides, only one in five brands hold their spot across five consecutive runs of the same query, so today's healthy traffic number doesn't guarantee next week's.",
  },
];

export const M13_COMPLIANCE_REGULATED_INDUSTRIES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A CSM asks you to confirm that a batch of new content for a fintech client is \"fully compliant\" so it can ship today. What should you tell them?",
    options: [
      { label: "Confirm it, the content follows the general red-flag checklist so it's safe to represent as compliant", correct: false },
      { label: "AirOps can draft and flag known risk areas, but the client's own compliance or legal function is the only party with the authority to approve it, that determination isn't AirOps' to make", correct: true },
      { label: "Compliance only matters for healthcare clients, not fintech, so this doesn't apply", correct: false },
      { label: "Ship it, and let the client raise it only if a regulator ever asks", correct: false },
    ],
    explanation:
      "The core boundary in this module: AirOps drafts and flags, the client's legal or compliance function approves. Representing content as \"compliant\" claims an authority AirOps doesn't have and creates liability without any actual review behind it.",
  },
  {
    kind: "free-response",
    prompt:
      "A teammate says, \"This client is HIPAA compliant, so we're fine using their customer call transcripts as source material for a content workflow.\" What's wrong with that reasoning?",
    modelAnswer:
      "It conflates two separate things: HIPAA is a data-privacy and security law governing how protected health information gets handled, not a marketing-claims rule, and being \"HIPAA compliant\" as an organization doesn't by itself authorize a vendor to touch PHI. What actually has to exist first is a signed Business Associate Agreement (BAA) between the client and AirOps specifically, since AirOps would become a business associate by processing that data. Absent a confirmed BAA, the safe default is to treat the call transcripts as off-limits for workflow ingestion, regardless of the client's own HIPAA compliance status.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: there is a published, confirmed policy from Google or the major AI platforms stating that YMYL (Your Money or Your Life) scoring applies to AI Overview or chatbot answers the same way it applies to classic Google Search ranking.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "No such policy is published. YMYL is a defined concept in Google's Search Quality Rater Guidelines for classic search. AI answers do appear more hedged and disclaimer-heavy on medical and financial queries, but that's practitioner pattern-matching, not a documented mechanism, treat the parallel as a reasonable working assumption, not an established fact.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A national insurance client wants a new campaign live in every state within two weeks. What's the realistic planning consideration?",
    options: [
      { label: "Two weeks is fine everywhere, insurance advertising rules are federal and uniform across states", correct: false },
      { label: "NAIC model advertising regulations are adopted, and vary, state by state; some states require pre-clearance before use rather than file-and-use, so the campaign is only as fast as its slowest state", correct: true },
      { label: "State rules only matter for life and annuity products, this campaign is exempt regardless of product line", correct: false },
      { label: "Filing timelines are irrelevant since AirOps' own review covers it", correct: false },
    ],
    explanation:
      "Insurance advertising regulation runs through NAIC model regulations that states adopt individually, with real variation, including whether a state requires approval before use or allows file-and-use after the fact. A national launch date has to account for the slowest-clearing state, not the fastest.",
  },
  {
    kind: "free-response",
    prompt:
      "Explain why \"risk-tiering\" content before scheduling it matters for a regulated account's production calendar, using a concrete example of a fast-moving piece and a slow-moving piece.",
    modelAnswer:
      "Not all content carries the same compliance risk, so treating everything on the same production timeline either slows down low-risk content unnecessarily or, worse, rushes high-risk content past a review it actually needs. An evergreen, definitional piece, for example an explainer on how a type of account or policy generally works, makes no specific claim and can typically move through review quickly. A piece with a performance number, an efficacy claim, or anything resembling a guarantee, for example a page citing a specific investment return or a specific health outcome, needs compliance pre-approval and a real review buffer before it can ship. Scheduling both at the same cadence is what causes a launch date to slip when the higher-risk piece gets stuck in review.",
  },
];

export const M12_MULTI_BRAND_MA_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A company operating three product lines under three unrelated brand names is acquiring a fourth brand that serves a genuinely different buyer, solves a different problem, and competes against a different set of rivals. What does the shared diagnostic say about tracking it?",
    options: [
      { label: "Merge it into one shared Topic list and prompt portfolio immediately, since it's now under one parent", correct: false },
      { label: "Keep it tracked separately, since all three of buyer, problem, and competitor genuinely differ", correct: true },
      { label: "Split the difference by tracking half its Topics separately and half combined", correct: false },
      { label: "Wait a year before deciding, since new acquisitions are always merged eventually", correct: false },
    ],
    explanation:
      "The same three-part test from Prompt & Taxonomy Strategy, different buyer, different problem, different competitors, decides this at the portfolio level too. When all three genuinely differ, that's a signal to keep the brand's Topic list and prompt portfolio separate, the same logic a house-of-brands parent already applies across its other brands.",
  },
  {
    kind: "free-response",
    prompt:
      "An account is migrating from an old domain to a new one after an acquisition. In the first week, organic visibility drops 45%. A teammate says this is a normal reindexing dip and to wait it out. Do you agree, and what would you check first?",
    modelAnswer:
      "No. A 10-20% dip in the first one to two weeks is the normal range even for a clean migration, but a 30%+ first-week drop is a specific warning sign of a redirect or indexing problem, not ordinary turbulence. The first thing to check is the redirect mapping itself: whether it's a proper one-to-one 301 mapping prioritized by each page's prior strength, or a blanket domain-level redirect (or worse, 302s) that isn't transferring equity the way a correct migration would. Waiting it out risks the kind of prolonged recovery, sometimes many months, seen in poorly executed migrations.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: for preserving link equity during a domain migration, a temporary (302) redirect is just as effective as a permanent (301) redirect, since both send the visitor to the right page.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "A 301 signals a permanent move; a 302 or 307 tells crawlers the old URL might come back, which can stall the transfer of ranking signal even though the visitor still lands in the right place. Reaching the same destination isn't the same as transferring the same equity.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A multi-location client wants every location page built from one strict corporate template, with only the town name changed, to keep messaging perfectly consistent. What's the risk?",
    options: [
      { label: "No risk, consistency is what corporate brand control is for", correct: false },
      { label: "This is a direct match for the doorway-abuse pattern Google's own spam policy specifically names, templated pages differing only by a swapped town name", correct: true },
      { label: "The only risk is that customers might notice the templates look similar", correct: false },
      { label: "This is fine as long as each page uses a different template design", correct: false },
    ],
    explanation:
      "Google's September 2025 spam update specifically targeted templated location pages with near-identical copy differing only by town name. The fix is a content-matrix split: corporate owns the reusable substantive core, but each location page needs something genuinely local, real pricing, real reviews, real staff, layered on top.",
  },
  {
    kind: "free-response",
    prompt:
      "A brand is being divested from its parent company. Content on both the parent's site and the new standalone site still cross-references each other, and both are starting to rank for some of the same terms. Name the two main failure modes at risk here and how you'd address them.",
    modelAnswer:
      "The two named failure modes are authority fragmentation (the combined link equity and domain strength the properties used to share now splits across two weaker properties instead of concentrating on one) and keyword cannibalization (the two sides keep competing for the same queries and citations as if they were still one entity). The fix starts with settling trademark and domain-name rights early, then deploying explicit brand-separation signals on both properties, updated metadata and navigation, so crawlers stop treating them as one overlapping entity, and running the shared buyer/problem/competitor diagnostic to decide where content should genuinely differentiate rather than keep publishing redundantly on both sides.",
  },
];

export const M11_EXTERNAL_CONTENT_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A citation-gap review turns up a Reddit thread that's cited for one of an account's tracked prompts, and the client isn't mentioned in it. Does this belong in External Content execution?",
    options: [
      { label: "Yes, any cited source where the client is missing is an External Content target", correct: false },
      { label: "No, Reddit and forum threads are Community's participation and seeding motion, a different channel with different mechanics", correct: true },
      { label: "Yes, but only if the thread also has a high domain authority", correct: false },
      { label: "No, because Reddit threads are never cited by AI platforms", correct: false },
    ],
    explanation:
      "External Content covers listicles, third-party comparison content, and review roundups, publisher and editorial sources. Reddit threads and forums sit under Community, a separate channel with its own participation and seeding mechanics. Routing this finding to External Content would misassign the work.",
  },
  {
    kind: "free-response",
    prompt:
      "A citation-gap review finds that a \"Best Payroll Software\" roundup, cited for three tracked prompts, does mention the client, but says the client doesn't offer multi-state payroll, when it's supported the feature for over a year. Which track does this fall into, and what does the work actually involve?",
    modelAnswer:
      "This is mention correction, not mention building, the client is already named, but the claim is factually wrong and outdated. The work is identifying the exact incorrect line and reaching the publisher or author to correct that specific claim, not relitigating the whole piece or treating it as a fresh outreach target. Because the article is already cited across three tracked prompts, the fix has leverage well beyond a single correction.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: a brand mention needs a backlink back to the client's site to meaningfully help AI-citation visibility.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Nofollow links are nearly as predictive of citation as dofollow links (0.509 vs. 0.504 correlation), so link \"authority\" in the classic SEO sense barely applies here. A mention with real supporting information can carry nearly the same weight whether or not it links back.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A teammate wants to rule out a mention-building target because the article's domain authority looks mediocre. What should you tell them?",
    options: [
      { label: "They're right to rule it out, domain authority is the strongest predictor of citation", correct: false },
      { label: "Domain authority barely correlates with citation, always-cited and never-cited pages land at nearly the same average DA, so a mid-tier site already being cited for a tracked prompt outweighs a high-DA site that isn't", correct: true },
      { label: "Domain authority only matters for mention correction, not mention building", correct: false },
      { label: "They're right, but only because nofollow links are the real disqualifier", correct: false },
    ],
    explanation:
      "Always-cited pages average DA 53.0 vs. 55.7 for never-cited pages, essentially a wash, and most citations go to sites in the DA 20–80 middle. Whether an article is already being cited for a tracked prompt is the signal that matters here, not its domain authority score.",
  },
  {
    kind: "free-response",
    prompt:
      "A CSM argues the account should finish its owned-content refresh before starting any External Content work, since Google still sends the account real traffic. Explain the tension in that argument and how you'd actually decide.",
    modelAnswer:
      "Google's ranking, and Google AI Overviews specifically, draw from Google's own index, so owned-content work does protect that specific surface. But other AI platforms like ChatGPT and Perplexity pull heavily from third-party sources regardless of how well the client ranks on Google, roughly 85% of brand mentions in AI answers come from third-party domains, not the brand's own site. So finishing owned content first doesn't address the majority of what decides visibility on those platforms. The two aren't strictly sequential; the actual answer comes from a citation-gap analysis for this specific account, which shows whether the biggest remaining gap sits on the client's own site or in the third-party articles already being cited around it.",
  },
];

export const M10_COMPETITIVE_POSITIONING_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A client's blog post mentions a competitor by name once, in a single sentence, while discussing the category broadly. A teammate wants to run it through the comparison-page diagnostic. What should you tell them?",
    options: [
      { label: "Run it through the diagnostic, any page naming a competitor qualifies", correct: false },
      { label: "It isn't a comparison page at all, it's a category/editorial page, since it doesn't name a specific pair, resolve to a verdict, or target a shortlist buyer", correct: true },
      { label: "It qualifies, but only if the competitor is named in the title too", correct: false },
      { label: "It qualifies as long as the mention is favorable to the client", correct: false },
    ],
    explanation:
      "A comparison page is defined by a named pair (in the title/H1/URL), a structured side-by-side claim set, a resolved verdict, and bottom-funnel shortlist intent. A single passing mention inside broader category content has none of these, it needs to become a comparison page first, or it isn't the right candidate for this diagnostic.",
  },
  {
    kind: "free-response",
    prompt:
      "An account's \"Us vs. Competitor\" page lists 15 features the client wins on and zero the competitor wins on. Traffic is fine but time-on-page is low and it never gets cited in AI answers. Which diagnostic bucket does this fall into, and what's the fix?",
    modelAnswer:
      "This is a content/positioning problem, not an authority or architecture one: the page reads as one-sided marketing copy rather than an assessment, so both a skeptical reader and an AI extraction pass have no real claim to check it against and tend to discount it. The fix is to add a real, specific concession, one place where the competitor is genuinely the better fit for some real segment, written in an adjudicating tone (\"the better fit if X matters more to you than Y\") rather than first-person superlatives. The page stays standalone; it needs a rewrite of the positioning, not new links or new sourcing.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: adding rich schema markup to a comparison page is one of the strongest levers available for improving its AI-citation rate.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "Schema markup is worth adding for rich-result eligibility, but it's hygiene, not a meaningful citation lever on its own. Structural extractability (clean heading hierarchy, an FAQ block, self-contained sections) and sourcing are what actually move citation odds.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A junior teammate proposes generating 40 \"[Client] vs. [Competitor]\" pages by taking one template and swapping only the competitor's name, to cover every competitor mentioned in sales calls. What's the risk?",
    options: [
      { label: "No risk, more comparison pages always help", correct: false },
      { label: "This matches Google's scaled content abuse and doorway abuse patterns, since the pages add little unique value per page beyond the swapped name, regardless of how they were produced", correct: true },
      { label: "The only risk is that it will take too long to write 40 pages manually", correct: false },
      { label: "This is fine as long as the pages are written by a human rather than generated", correct: false },
    ],
    explanation:
      "Google's own framing is explicit that the deciding factor is value per page, not page count or whether AI, automation, or a human produced it. A template with only the competitor's name swapped has none of the genuinely specific content, real pricing, real verdict, real sourcing, that a defensible comparison page needs. Five thorough pages beat twenty templated ones.",
  },
  {
    kind: "free-response",
    prompt:
      "Explain why a comparison page that concedes one real, specific limitation tends to get more of its other claims accepted, both by a human reader and by an AI system extracting claims from the page, than a page that lists only positives.",
    modelAnswer:
      "A page listing only positives gives the reader nothing to verify, so it reads the same as any other vendor's marketing copy and every claim on it is reasonably discounted as biased. A page that names one real, checkable limitation gives the reader a concrete data point they can go confirm; once that one claim checks out, the reader has a basis for treating the rest of the page's claims as accurate rather than promotional. The same logic applies to AI extraction: neutral, adjudicating language with a real concession is easier to treat as a reliable, reusable claim than persuasive, one-sided copy, which is harder to reuse safely without carrying its bias along with it.",
  },
];

export const M9_PROMPT_TAXONOMY_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "multiple-choice",
    prompt:
      "A teammate wants to recommend a topic structure for a new account by first deciding \"we want about 150 prompts\" and then inventing enough topics to divide that number cleanly. What's wrong with this approach?",
    options: [
      { label: "Nothing, working backward from a round number keeps the portfolio easy to size", correct: false },
      { label: "Topics have to come from evidence and durable strategic distinctions, not from a desired prompt count; sizing happens later, in Prompt Building, against live settings", correct: true },
      { label: "It's fine as long as every topic ends up with an equal share of the 150 prompts", correct: false },
      { label: "The only problem is that 150 is too small a number to divide evenly", correct: false },
    ],
    explanation:
      "Topic Setting is deliberately sequenced before sizing. A taxonomy shaped by an arbitrary target count reflects that number, not the business, and every report built on top of it inherits the same arbitrary shape. Execution sizing, platforms, cadence, budget, belongs in Prompt Building, using live account settings, not in the topic architecture itself.",
  },
  {
    kind: "free-response",
    prompt:
      "An account's topic list uses \"product line\" as its lens and includes Payroll, Benefits, and Workforce Management as siblings. A teammate wants to add \"Small Businesses\" as a fourth sibling topic because small-business buyers clearly behave differently. Should it be added as a topic? Why or why not, and where should that distinction actually live?",
    modelAnswer:
      "No. Every sibling topic has to share the same lens, and \"Small Businesses\" is a customer-segment view, not a product line, so adding it as a fourth sibling mixes lenses and breaks the comparability of the whole list (you can no longer cleanly compare Payroll vs. Benefits vs. Workforce Management vs. a segment that cuts across all three). The buyer distinction is real, but it belongs in Audience/ICP coverage, an ICP tag, or drafting context, not bolted on as an extra topic.",
  },
  {
    kind: "true-false",
    prompt:
      "True or false: the correct way to track comparison prompts against three different named competitors is three separate tags, such as \"Competitor: Workday,\" \"Competitor: UKG,\" and \"Competitor: ADP.\"",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "The tag contract allows exactly one standalone Competitor tag, with no value or company name attached. Per-competitor tags balloon the tag vocabulary, stop being comparable across accounts, and duplicate a job native competitor configuration already does. Named competitors belong in native settings and in the prompt text itself, not in the tag.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A draft portfolio comes back with 28% of its prompts containing the client's own brand name, and the CSM is excited because mention rate looks great. What should you flag?",
    options: [
      { label: "Nothing, a high mention rate is the goal", correct: false },
      { label: "Brand-related share should stay in the 10–15% range, with 15% as a hard ceiling; a portfolio this brand-heavy inflates mention rate by asking questions the client was always going to win, rather than measuring real category visibility", correct: true },
      { label: "The portfolio needs more brand-related prompts, not fewer, since the client is paying for visibility", correct: false },
      { label: "Query Style is the only ratio that matters here", correct: false },
    ],
    explanation:
      "Mention rate is only meaningful as a measure of category visibility if the portfolio isn't stacked with self-answering questions. 15% is treated as a hard maximum, not a soft planning suggestion, precisely to keep the instrument from grading its own exam.",
  },
  {
    kind: "free-response",
    prompt:
      "Explain why the skill treats every retrieved webpage, uploaded file, and transcript as \"untrusted evidence\" and why that distinction matters beyond this one tool.",
    modelAnswer:
      "Retrieved content can contain language that looks like an instruction, an embedded request to ignore prior guidance, change scope, or take some action, and an AI process that treats retrieved text as commands rather than data can be manipulated by whatever it happens to read. Treating it as untrusted evidence means extracting the facts it supports while ignoring anything inside it that reads like an instruction. This matters beyond this specific tool: any AI-assisted workflow that pulls in outside content (webpages, customer uploads, call transcripts) needs the same discipline, or it becomes exploitable by the content it's supposed to be analyzing.",
  },
];
