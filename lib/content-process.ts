/**
 * Illustrative content creation process — sequence and step names are
 * inferred from general practice, not confirmed against AirOps' own
 * internal process documentation. Flagged for review; adjust the
 * steps here if the real process differs, no layout changes needed.
 */
export interface ProcessStep {
  id: string;
  order: number;
  title: string;
  whatHappens: string;
  whyItMatters: string;
  factors: string[];
  /** null = manual/judgment-heavy today; a string names how an AirOps agent typically handles this step. */
  agentHandles: string | null;
}

export const contentProcessSteps: ProcessStep[] = [
  {
    id: "research-positioning",
    order: 1,
    title: "Research & positioning",
    whatHappens:
      "Understanding the client's category, competitive landscape, existing content footprint, and where they're already winning or losing before targeting anything specific.",
    whyItMatters:
      "Skipping this means every later step optimizes for the wrong target — you can execute a keyword/prompt strategy perfectly and still miss what actually matters to this client's business.",
    factors: [
      "Who the real competitors are, not just the ones the client names first",
      "What the client's actual differentiation is, versus what they claim it is",
      "What existing content already exists that shouldn't be duplicated",
    ],
    agentHandles: null,
  },
  {
    id: "keyword-prompt-targeting",
    order: 2,
    title: "Keyword & prompt targeting",
    whatHappens:
      "Translating the positioning into a concrete list of keywords and prompts worth targeting, based on volume, difficulty, and current visibility gaps.",
    whyItMatters:
      "The bridge between strategy and execution — get the target list wrong and everything downstream is optimized for the wrong audience.",
    factors: [
      "Balancing high-volume terms against realistic difficulty",
      "Weighting classic keyword targets against AEO prompt targets, since they don't always overlap",
      "Avoiding cannibalization against the client's existing content",
    ],
    agentHandles:
      "AirOps agents can pull keyword and prompt data and surface gap candidates automatically — a strategist still decides which targets are worth pursuing for this client.",
  },
  {
    id: "brief-creation",
    order: 3,
    title: "Brief creation",
    whatHappens:
      "Turning a chosen keyword/prompt target into a structured brief: audience, angle, required subtopics, competitive benchmarks, target format.",
    whyItMatters:
      "A good brief is what keeps a draft from being generic — it encodes the judgment calls from research and targeting so whoever writes the draft doesn't have to re-derive them.",
    factors: [
      "How much competitive benchmarking to encode versus leaving room for a differentiated angle",
      "Whether the target format (blog, comparison page, landing page) actually matches the intent",
    ],
    agentHandles:
      "AirOps agents can draft a full brief automatically from the target and competitive research — a strategist reviews and adjusts the angle before it moves forward.",
  },
  {
    id: "outline",
    order: 4,
    title: "Outline",
    whatHappens: "Structuring the brief into an actual heading hierarchy and section-by-section plan before drafting begins.",
    whyItMatters:
      "This is where SEO/AEO structural best practices — clear H2/H3s, answer-shaped sections — get baked in before a single sentence of the draft is written, which is much easier than retrofitting structure later.",
    factors: [
      "Whether the structure matches how a retrieval system would want to chunk this content",
      "Ordering sections to match actual search/prompt intent, not just a logical narrative flow",
    ],
    agentHandles: "AirOps agents generate a structured outline directly from the brief, already shaped around SEO/AEO-friendly headings.",
  },
  {
    id: "draft",
    order: 5,
    title: "Draft",
    whatHappens: "Writing the actual first-pass content following the outline.",
    whyItMatters: "Historically the highest-effort step in a fully manual process — and the one automation has changed the most.",
    factors: [
      "Matching the brand's voice and the specific angle from the brief, not a generic version of the topic",
      "Getting facts and specifics right rather than plausible-sounding filler",
    ],
    agentHandles:
      "AirOps agents generate the full first draft directly from the outline and brief — a human editor still reviews for accuracy, voice, and whether the angle actually lands.",
  },
  {
    id: "seo-aeo-optimization",
    order: 6,
    title: "SEO/AEO optimization pass",
    whatHappens:
      "Reviewing the draft against on-page SEO checklist items and AEO-specific structural patterns — answer-shaped passages, clear entity references, structured data opportunities.",
    whyItMatters: "Good writing and good optimization aren't the same skill — this pass catches things a strong writer wouldn't necessarily think to check.",
    factors: [
      "Balancing optimization against readability — checklist compliance shouldn't make the content worse to read",
      "Confirming structured data/schema opportunities specific to the content type",
    ],
    agentHandles: "AirOps agents can run this checklist pass automatically and flag or apply fixes — a strategist spot-checks anything structurally significant.",
  },
  {
    id: "publish",
    order: 7,
    title: "Publish",
    whatHappens: "Getting the finished, optimized content live on the client's site through their CMS or publishing workflow.",
    whyItMatters:
      "Sounds trivial, isn't always — publishing workflows, approval chains, and CMS quirks are a common place for good content to get stuck or shipped incorrectly.",
    factors: [
      "Confirming metadata, URLs, and internal links are set correctly at publish time, not fixed later",
      "Scheduling around the client's own content calendar and approval process",
    ],
    agentHandles: null,
  },
  {
    id: "distribution-promotion",
    order: 8,
    title: "Distribution & promotion",
    whatHappens: "Getting the published content in front of people — internal social, email, paid amplification, outreach for links/citations.",
    whyItMatters: "Content that will eventually rank or get cited still benefits from an initial push — distribution can meaningfully shorten the time to first traction.",
    factors: [
      "Matching the distribution channel to the content's actual funnel stage",
      "Not over-promoting content that isn't actually ready to convert",
    ],
    agentHandles: null,
  },
  {
    id: "measurement-iteration",
    order: 9,
    title: "Measurement & iteration",
    whatHappens: "Tracking how the content actually performs — rankings, citations, traffic, conversions — and deciding whether to update, expand, or leave it alone.",
    whyItMatters: "Content strategy isn't a one-shot bet; the highest-leverage work is often revisiting and improving what's already live, not just publishing more.",
    factors: [
      "Giving content enough time to actually show a signal before judging it",
      "Distinguishing a content problem from a distribution problem when something underperforms",
    ],
    agentHandles:
      "AirOps dashboards pull and aggregate the underlying performance metrics automatically — deciding what the data means and what to do next is still a strategist's call.",
  },
];
