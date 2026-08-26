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
 * GA4, AirOps Insights), mechanism-level construction of the AI-search metrics (traffic
 * weighting, per-model-averaged citation share, raw-count inflation), the number-to-outcome
 * chain (Page 360), and the suspicious-number validation workflow. Every scenario here is a
 * planted-bad-data gut-check, matching the module's knowledge-check design.
 */
export const M5_MANAGED_SERVICES_KNOWLEDGE_CHECK: KnowledgeCheckQuestion[] = [
  {
    kind: "free-response",
    prompt:
      "A client's monthly AI-visibility \"headline\" score is 42%, but when you average the daily numbers plotted underneath it, you get 37%. The client's contact says the dashboard is broken. What do you tell them?",
    modelAnswer:
      "It's not broken, the two numbers are computed differently on purpose. The headline is traffic-weighted across the days in the window, so a day with far more prompts run moves it more than a light day; the daily series is unweighted, one rate per day. Averaging the daily dots yourself will not reproduce the headline, and shouldn't be expected to.",
  },
  {
    kind: "free-response",
    prompt:
      "An account has a high mention rate but a low citation rate. A different account has the opposite: high citation rate, low mention rate. What does each pattern actually indicate, and does the same fix work for both?",
    modelAnswer:
      "High mention/low citation means third-party content, reviews, forums, comparison sites, is carrying the brand's visibility; AI models talk about the brand but aren't linking to anything it owns, so the fix is structural citability of owned content. High citation/low mention means owned content is authoritative but narrow, winning a few specific prompts while being invisible on the broader landscape, so the fix is prompt/topic coverage breadth instead. Same two metrics, opposite pattern, opposite fix, treating both as \"a visibility problem\" and prescribing the same fix would be wrong for at least one of them.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "Two domains are cited about your client's category. Domain A has more total citations, spread across several high-volume AI platforms. Domain B has fewer total citations, but nearly all of them are concentrated on one lower-volume platform. Which is more likely to show the higher citation share?",
    options: [
      { label: "Domain A, always, since it has more raw citations", correct: false },
      { label: "Domain B, potentially, if citation share is calculated per platform and then averaged", correct: true },
      { label: "They'll always be identical", correct: false },
      { label: "Citation share and citation count always sort in the same order", correct: false },
    ],
    explanation:
      "Citation share is typically calculated per AI model/platform and then averaged across platforms, not as one global count divided by one global total. A domain concentrated on a lower-volume platform can post a higher share there than a domain with more raw citations diluted across several high-volume platforms. Count and share are built differently and won't always sort together.",
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
      { label: "Both pages target the same query/intent and are splitting ranking or citation signal between them", correct: true },
      { label: "Both pages are in the same content folder", correct: false },
      { label: "Both pages have low word counts", correct: false },
    ],
    explanation:
      "Cannibalization is specifically about two URLs competing for the same intent and splitting the same signal, whether that's organic position or AI citation credit, not simply two old or similarly-categorized pages.",
  },
  {
    kind: "free-response",
    prompt:
      "An audit finds two pages on a client's site, an old blog post and a newer resource-hub article, both targeting the exact same query, and both are showing up (weakly) in AI Overviews for it. What's the fix, and why not just leave both since they're both getting some citation credit?",
    modelAnswer:
      "301 redirect the weaker page into the stronger one and consolidate the content. Splitting the same intent across two URLs splits the signal, both organic ranking strength and AI citation credit, so neither page performs as well as one consolidated page would. \"Both get some credit\" is worse than \"one page gets all of it,\" because concentrated signal is what wins the top position or the citation, not distributed partial credit.",
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
    kind: "free-response",
    prompt:
      "A client's relevant prompts get asked about 800 times a month across tracked AI platforms. AirOps' work lifted their mention rate by 3 percentage points. The comparable Google Ads CPM for this category is $50. Walk through the paid-comp math to estimate the monthly equivalent media value of that lift.",
    modelAnswer:
      "Incremental branded impressions = 800 × 3% = 24 per month (scale this up by however many engines/answer instances are being counted per prompt in the real model, the mechanics are the same). Equivalent media value = incremental impressions ÷ 1,000 × CPM = (24 / 1,000) × $50 ≈ $1.20/month for this single prompt cluster. The real number comes from running this per relevant prompt cluster and summing, one cluster in isolation looks tiny, the account-level total is what gets presented.",
  },
  {
    kind: "multiple-choice",
    prompt:
      "A dollar-value estimate has three components: observed attribution (from UTM/CRM evidence), paid-comp replacement cost (CPM proxy), and a gross-up multiplier for AI influence the observed system misses. How should these three be combined into one number?",
    options: [
      { label: "Average the three estimates for a balanced number", correct: false },
      { label: "Present the highest of the three as the headline", correct: false },
      { label: "They aren't peer estimates to average, observed attribution is the floor, and the other two are separate, clearly-labeled methods, not one blended total", correct: true },
      { label: "Only ever report the paid-comp number since it's the easiest to explain", correct: false },
    ],
    explanation:
      "The three methods form a ladder, not three votes on the same number. Observed attribution is the decision-grade floor built from real evidence. Paid-comp is a market-price proxy for the footprint. Gross-up is an explicit, bounded assumption about what the floor misses. Averaging or blending them into one figure hides which claim is actually evidence-backed.",
  },
  {
    kind: "free-response",
    prompt:
      "A client's CFO pushes back: \"This dollar number feels made up.\" What's the wrong way to respond, and what's the actual mitigation?",
    modelAnswer:
      "The wrong response is defending the size of the number or adding more decimal precision to make it look rigorous. The actual mitigation is leading with methodology, not magnitude: show exactly which inputs are real measured data (mention rate from the platform, CPM from Google Ads), which are modeled assumptions, and present a low/base/high range rather than one precise figure. A CFO can defend fuzzy math internally if the math is transparent; they can't defend a number that looks precise but can't be traced back to its inputs.",
  },
  {
    kind: "true-false",
    prompt: "True or false: because AI search rarely has clean last-click attribution, the ROI story should avoid dollar figures entirely and stick to visibility metrics.",
    options: [
      { label: "True", correct: false },
      { label: "False", correct: true },
    ],
    explanation:
      "The absence of clean last-click attribution means the story has to be causal and estimated rather than deterministic, not that it should avoid dollars altogether. Reporting an \"estimated incremental impact\" with a stated range and named assumptions is the correct response, not silence on ROI.",
  },
  {
    kind: "free-response",
    prompt:
      "A teammate wants to launch a holdout test to prove AirOps' work is causing a client's mention-rate gains, this week, on an account that only started tracking prompts a month ago. What's missing before this holdout is ready to run, and what could go wrong if it launches anyway?",
    modelAnswer:
      "A holdout needs a stable baseline first, without weeks of consistent measurement, there's no reliable \"before\" to compare the treatment group against, and the account's coverage gaps aren't understood yet either. Launching prematurely risks attributing normal measurement noise or a still-settling baseline to the treatment, producing a confident-looking result that isn't actually valid, which is worse than not running the test at all since it gets treated as proof.",
  },
  {
    kind: "free-response",
    prompt:
      "Explain, in your own words, why a brand being unable to defend a $50k/month AI-search spend \"the way they defend AdWords\" is the actual business problem this module solves, not just a nice-to-have metric.",
    modelAnswer:
      "AdWords and LinkedIn spend get renewed because a marketer can point to a click-through, cost-per-click, and a pipeline number that traces back cleanly. Without an equivalent dollar story, AI-search spend looks discretionary; the first budget cut in a tightening cycle. A defensible, if imperfect, dollar-value estimate is what lets a buyer internally justify the line item to their own finance team, converting the spend from \"an experiment we're trying\" into \"a channel we're allocating budget across,\" which is the difference between a renewal and a churn risk.",
  },
];
