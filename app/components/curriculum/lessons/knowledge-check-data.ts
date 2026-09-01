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
      "Not mirror images, and citation isn't strictly conditional on mention, a citation can attach without the brand ever being named. High mention/low citation: the model names the brand from general knowledge but rarely retrieves and links a page, could be a content gap or just a navigational/definitional intent where citation was never likely. High citation/low mention: check whether those citations actually name the brand. Mostly yes, weak brand recognition. Mostly no, citation without attribution, a branding gap. Both need follow-up (prompt coverage, intent, tracked-set size) before prescribing a fix; the fixes aren't interchangeable.",
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
      "GA4 used to default new properties to last-click, but the platform-wide default is now data-driven attribution, an algorithmic model that estimates each touchpoint's actual contribution from the account's own conversion paths rather than applying one fixed rule. Last-click and the other named models can still be selected manually under Attribution Settings.",
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
