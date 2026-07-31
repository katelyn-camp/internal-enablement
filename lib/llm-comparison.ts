export interface RetrievalSurface {
  id: "chatbot" | "ai-overview" | "ai-mode";
  label: string;
  oneLiner: string;
  dataFreshness: string;
  howItDecides: string;
  citationsShown: string;
  howFastYouCanShiftIt: string;
}

export const retrievalSurfaces: RetrievalSurface[] = [
  {
    id: "chatbot",
    label: "Chatbot (no retrieval)",
    oneLiner: "A general-purpose chatbot answering purely from what it learned during training — no live web access.",
    dataFreshness: "Frozen at the model's training cutoff. It can be months old and has no idea what happened after.",
    howItDecides:
      "Pattern-completes from memorized training data. It isn't looking anything up at answer time — it's recalling.",
    citationsShown: "Usually none. It can't point to a live source because it isn't retrieving one.",
    howFastYouCanShiftIt:
      "You basically can't, short of the next model retrain. No amount of publishing today changes today's answer.",
  },
  {
    id: "ai-overview",
    label: "AI Overview",
    oneLiner: "Google's retrieval-augmented summary box above organic results, generated fresh per query.",
    dataFreshness: "As fresh as Google's index — can reflect a page that was published hours ago.",
    howItDecides:
      "Retrieves a handful of currently-ranking pages for the exact query, then synthesizes an answer grounded in them.",
    citationsShown: "A small set of linked source chips shown beneath the generated summary.",
    howFastYouCanShiftIt:
      "Can change within days of a content or ranking change — visibility here tracks closely with organic performance.",
  },
  {
    id: "ai-mode",
    label: "AI Mode",
    oneLiner:
      "Google's more conversational search experience — plans a research approach, runs multiple retrievals, and can follow up across a session.",
    dataFreshness:
      "Live retrieval like AI Overview, but often broader — may pull from more sources across several sub-queries per turn.",
    howItDecides:
      "Breaks a complex prompt into sub-questions, retrieves for each one, then reasons across the combined results before answering.",
    citationsShown:
      "Often more numerous than AI Overview's, since one answer can span several retrieval passes across sub-questions.",
    howFastYouCanShiftIt:
      "Similarly fast to AI Overview since it's retrieval-based — but less predictable, since you're competing for citation across question variations, not just the literal query typed in.",
  },
];

export interface CheckYourselfScenario {
  id: string;
  prompt: string;
  options: {
    id: string;
    label: string;
    feedback: string;
  }[];
}

export const checkYourselfScenarios: CheckYourselfScenario[] = [
  {
    id: "rank-vs-citation",
    prompt:
      "A client says: “We rank #1 organically for our main keyword, so why aren't we showing up when I ask ChatGPT about our category?”",
    options: [
      {
        id: "should-guarantee",
        label: "That is strange — ranking #1 should guarantee AI visibility too.",
        feedback:
          "Worth gently pushing back on this one. Organic rank and AI citation come from different underlying systems — an index-and-rank algorithm versus a retrieval-and-generation pipeline. A page can dominate one and be invisible in the other. That gap is exactly what prompt/citation analysis is built to diagnose.",
      },
      {
        id: "separate-mechanisms",
        label: "That's expected — organic ranking and AI citation are separate mechanisms with different signals.",
        feedback:
          "Right instinct. Organic rank and AI citation are genuinely separate mechanisms. The next useful step is running a prompt/citation analysis to see specifically where the gap is and why — see the Workflows library.",
      },
    ],
  },
  {
    id: "overview-drop",
    prompt:
      "A client's AI Overview visibility dropped sharply this week, but their organic rankings haven't moved at all. What's the most likely explanation?",
    options: [
      {
        id: "penalized",
        label: "Their site probably got penalized.",
        feedback:
          "Unlikely to be a penalty if organic rankings are untouched — a penalty would usually hit organic first. AI Overview retrieves a fresh set of sources per query, so a competitor's new page (or a tweak to how the Overview itself is generated) can bump a client out without anything changing on their own site.",
      },
      {
        id: "fresh-retrieval",
        label:
          "AI Overview retrieves fresh sources per query — a competitor's page or a generation change can bump them out with nothing wrong on their end.",
        feedback:
          "Exactly right, and worth saying out loud to the client: nothing being 'broken' on their site is the normal explanation here, not the exception. That's the core behavioral difference between a ranking system and a retrieval system.",
      },
    ],
  },
  {
    id: "outdated-chatbot",
    prompt:
      "A client asks why a general chatbot (no browsing enabled) still describes their company using information that's two years out of date.",
    options: [
      {
        id: "broken",
        label: "The chatbot is broken and needs to be fixed on their end.",
        feedback:
          "There's nothing to 'fix' here — a non-retrieval chatbot only knows what was true as of its training cutoff. It has no mechanism to notice anything published since, including the client's own updates. A retrieval-enabled surface (AI Overview, AI Mode, browsing-enabled chat) would already reflect the current information.",
      },
      {
        id: "training-cutoff",
        label: "That's expected — it only knows what was true as of its training cutoff.",
        feedback:
          "Correct, and worth naming precisely: 'training cutoff' vs. 'retrieval' is the single most useful distinction to have ready in a client conversation about why visibility differs by surface.",
      },
    ],
  },
  {
    id: "citation-selection",
    prompt: "A client wants to know exactly how a specific page gets chosen as a citation in AI Mode.",
    options: [
      {
        id: "fixed-ranking",
        label: "There's a single fixed ranking, just like organic search.",
        feedback:
          "Not quite — there isn't one static list to climb. Selection is recomputed per query (and per sub-query, in AI Mode's case) from a mix of semantic relevance, trust/authority signals, and how cleanly the content can be extracted.",
      },
      {
        id: "recomputed-mix",
        label:
          "It's a mix of semantic relevance, authority signals, and extractability, recomputed per query rather than a fixed list.",
        feedback:
          "That's the honest answer, and it's also why AEO work looks different from classic rank-tracking — you're optimizing conditions that get re-evaluated live, not a position you hold.",
      },
    ],
  },
];
