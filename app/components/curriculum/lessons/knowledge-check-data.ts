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
