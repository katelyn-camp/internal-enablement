/**
 * Workflow library entries — the "how we actually do each piece of the
 * audit process" reference. This is data on purpose: new entries get
 * added constantly as the audit process grows, and should never
 * require touching app/workflows/[slug]/page.tsx or the template
 * component. Add an object to this array and it's live.
 */
export interface WorkflowEntry {
  slug: string;
  title: string;
  summary: string;
  /** null = full entry not written yet; index/card renders a stub state. */
  whyThisMatters: string | null;
  examplePrompt: string | null;
  templateUrl: string | null;
  videoUrl: string | null;
  status: "full" | "stub";
}

export const workflows: WorkflowEntry[] = [
  {
    slug: "keyword-analysis",
    title: "Keyword Analysis",
    summary: "Find where a client is losing organic ground to competitors on specific search terms.",
    status: "full",
    whyThisMatters:
      "Keyword analysis is the fastest way to turn 'our traffic is flat' into a prioritized, defensible list of actions. It compares the client's ranking keywords against 2–3 named competitors and surfaces terms where competitors rank on page 1 and the client doesn't rank at all, or ranks well below the fold. The output isn't just a list — it's a triage: which gaps are high-volume and low-difficulty (quick wins), which are already close (page 2, needs a push), and which are long-shots not worth the effort right now. On a client call, this is usually the single most concrete artifact you can point to, because it's framed in terms of competitors they already know by name.",
    examplePrompt:
      "Compare the ranking keywords for [client domain] against [competitor domain 1] and [competitor domain 2] for the last 90 days. Return only keywords where at least one competitor ranks in the top 10 and [client domain] ranks outside the top 20 or not at all. Group results by topic cluster, and flag search volume and estimated difficulty for each keyword. Prioritize the list by (volume × inverse difficulty) and call out the top 10 as 'quick win' candidates.",
    templateUrl: "https://airops.com/templates/keyword-gap-analysis",
    videoUrl: null,
  },
  {
    slug: "prompt-analysis",
    title: "Prompt (Citation / AEO) Analysis",
    summary: "See whether a client actually gets cited when real buyers ask AI answer engines about their category.",
    status: "full",
    whyThisMatters:
      "This is the AEO-native counterpart to keyword analysis. Instead of tracking rankings, it runs a representative set of real buyer prompts against AI Overviews, AI Mode, and general-purpose chatbots, and records who gets cited, how often, and in what context. It's diagnostic in a way classic SEO reporting isn't: a client can be the #1 organic result for a term and still be invisible — or actively excluded in favor of a competitor — inside the generated answer for the equivalent prompt. Running this analysis early in an engagement is usually what makes AEO feel real and urgent to a client rather than theoretical.",
    examplePrompt:
      "Using this list of 25 buyer-intent prompts for [category], run each prompt against AI Overview, AI Mode, and [chatbot]. For each response, record: (1) whether [client] is cited, mentioned without citation, or absent, (2) which competitors are cited instead, (3) the exact source URL cited for [client] if present. Summarize as a visibility rate and share-of-voice table against [competitor 1] and [competitor 2], and flag any prompt where [client] was previously cited but has since dropped out.",
    templateUrl: "https://airops.com/templates/prompt-citation-analysis",
    videoUrl: null,
  },
  {
    slug: "page-gap-analysis",
    title: "Page / On-Page Gap Analysis",
    summary: "Audit an individual page's on-page fundamentals against what's actually winning for its target query.",
    status: "stub",
    whyThisMatters: null,
    examplePrompt: null,
    templateUrl: null,
    videoUrl: null,
  },
  {
    slug: "content-gap-analysis",
    title: "Content Gap Analysis",
    summary: "Find entire topics and content types competitors cover that a client's site doesn't address at all.",
    status: "stub",
    whyThisMatters: null,
    examplePrompt: null,
    templateUrl: null,
    videoUrl: null,
  },
];
