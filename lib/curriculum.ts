/**
 * Project Upskill curriculum: single source of truth for both the EM/SA
 * and Sales module trees. Transcribed from the "Project Upskill: Category
 * Enablement" Notion doc. Shared modules (Phase 1 + Phase 2, M0–M8) exist
 * once here and render under both /em-sa and /sales with the depth column
 * appropriate to that audience; EM/SA and Sales never get separate data
 * entries for the same topic, only separate URLs and separate copy fields.
 */
export type Audience = "em-sa" | "sales";
export type ModuleAudience = "shared" | "em-sa" | "sales";
export type Phase = "phase0" | "phase1" | "phase2";

/**
 * Real, written lesson content for one audience's version of a module,
 * as opposed to the generic curriculum metadata (objective/depth/delivery
 * model) transcribed from the Notion doc. Populated module by module as
 * actual write-ups get written; audience-scoped since a shared module's
 * write-up for Managed Services doesn't have to match Sales.
 */
export interface ModuleAudienceContent {
  /** Overrides the generic objective/depth heading+text with a "Learning Objectives" section. */
  learningObjectives?: string;
  /** Hide the "How this module is assessed" block on this audience's page. */
  hideDeliveryModel?: boolean;
}

export interface ModuleEntry {
  slug: string;
  code: string;
  title: string;
  phase: Phase;
  audience: ModuleAudience;
  /** Phase 1 / Phase 3 modules: one objective, same for every role that gets the module. */
  objective?: string;
  /** Phase 2 (M3–M8) only: the EM/SA-comprehensive vs. Sales-diagnostic depth split. */
  emSaDepth?: string;
  salesDepth?: string;
  /** Where this module's Sales-track content is a reduced-depth pass of an EM/SA module. */
  source?: string;
  /** Overrides `title` on the Sales track only, for a shared module slot repurposed with different subject matter. */
  salesTitle?: string;
  knowledgeCheck: string;
  groupSession: string;
  appliedProject: string;
  appliedProjectOptions?: string[];
  /** Only set on shared modules where Sales gets different project options than EM/SA (e.g. M8). */
  salesAppliedProjectOptions?: string[];
  emSaContent?: ModuleAudienceContent;
  salesContent?: ModuleAudienceContent;
  status: "content-pending";
}

export const modules: ModuleEntry[] = [
  // Phase 1: The New World (shared, Sept 16 milestone)
  {
    slug: "m0",
    code: "M0",
    title: "Orientation",
    phase: "phase0",
    audience: "shared",
    objective: "Explain what managed services is, why the team's role changed, and what \"good\" looks like.",
    emSaContent: {
      learningObjectives:
        "You can explain what managed services is, why the team's role changed, and where you sit within the team.",
      hideDeliveryModel: true,
    },
    knowledgeCheck: "N/A",
    groupSession: "GS1 (both cohorts)",
    appliedProject: "N/A",
    status: "content-pending",
  },
  {
    slug: "m1",
    code: "M1",
    title: "The AI Search Landscape",
    phase: "phase0",
    audience: "shared",
    objective:
      "Use Category / Surface / Channel / Tactic correctly; explain the AI-Search channel mix (Owned Content, External Content, Social & Influencer, Community, Paid) and where AirOps' offering sits, without collapsing \"channel\" and \"surface\"; identify a brand's largest opportunities and locate them within the channel mix.",
    knowledgeCheck: "Free-response: define the 4 levels + one client example + one opportunity mapped to the mix",
    groupSession: "GS1",
    appliedProject: "N/A",
    status: "content-pending",
  },
  {
    slug: "m2",
    code: "M2",
    title: "Measurement & Benchmarking Literacy",
    phase: "phase0",
    audience: "shared",
    objective:
      "State precisely what mention rate, citation rate, and share of voice each measure and why they differ; explain how different AI visibility platforms measure these numbers; and articulate why each metric matters and how it differs from a traditional search metric, enough to never misstate a number live, with no dashboard in front of you.",
    knowledgeCheck:
      "Quiz (2 multiple choice, 1 true/false) + 2 short free-response: metric definitions, reading them together, and the traditional-search bridge",
    groupSession: "GS1",
    appliedProject: "N/A",
    status: "content-pending",
  },

  // Phase 2: Core Shared Enablement (EM/SA comprehensive; Sales lighter, opportunity-spotting)
  {
    slug: "m3",
    code: "M3",
    title: "SEO Fundamentals & Technical Foundations",
    phase: "phase1",
    audience: "shared",
    emSaDepth:
      "Reason about on-page/off-page/technical mechanisms on an unfamiliar page; diagnose whether a technical or content issue is the real cause; run the keyword→content→prompt gap-analysis transfer logic.",
    salesDepth:
      "Explain why SEO fundamentals still matter inside the AI-search story, and use a site's technical foundation (or a locked CMS) as a qualifying signal on a discovery call.",
    knowledgeCheck: "Quiz + diagnose-from-symptom (Managed Services); opportunity-spotting prompt (Sales)",
    groupSession: "GS2 (Managed Services)",
    appliedProject: "Part of manual audit",
    status: "content-pending",
  },
  {
    slug: "m4",
    code: "M4",
    title: "AEO Fundamentals & Platform Differences",
    phase: "phase1",
    audience: "shared",
    emSaDepth:
      "Explain why AI crawlers parse differently (incl. JS-render blindness), query fan-out, structural citability; verify whether LLM crawlers parse a page's JS.",
    salesDepth:
      "Explain, in a CMO's language, why ChatGPT/Claude/Perplexity see and trust a site differently than Google does, and use that gap as a credibility-earning moment on a call.",
    knowledgeCheck: "Quiz",
    groupSession: "GS2 (Managed Services)",
    appliedProject: "Part of manual AEO audit",
    status: "content-pending",
  },
  {
    slug: "m5",
    code: "M5",
    title: "Reading the Numbers: Dashboards, Tools & Data",
    phase: "phase1",
    audience: "shared",
    emSaDepth:
      "Trace each dashboard number to how it's built and to the outcome it implies; say what GA4/GSC/Semrush/Ahrefs each tell you; validate a suspicious data point before presenting.",
    salesDepth:
      "Translate a client's headline numbers to the altitude the person across the table actually owns, CMO company-level vs. VP of Growth team-level, without needing to validate the tooling behind them.",
    knowledgeCheck: "Free-response: gut-check a planted-bad-data scenario",
    groupSession: "GS2 (Managed Services)",
    appliedProject: "Feeds audits + recs deck",
    status: "content-pending",
  },
  {
    slug: "m6",
    code: "M6",
    title: "Content Strategy, Lifecycle & Production",
    phase: "phase1",
    audience: "shared",
    emSaDepth: "Choose refresh vs. net-new vs. consolidate, in that order of preference; run a cannibalization audit; explain why net-new content dies unlinked without an internal-linking plan at launch.",
    salesDepth:
      "Turn refresh vs. net-new vs. consolidate into a business case tied to a stated goal, not a tactic pitched before the goal is known.",
    knowledgeCheck: "Quiz + refresh/net-new/consolidate scenario",
    groupSession: "N/A",
    appliedProject: "Part of recs deck",
    status: "content-pending",
  },
  {
    slug: "m7",
    code: "M7",
    title: "Attribution & ROI",
    phase: "phase1",
    audience: "shared",
    emSaDepth: "Compute how dollar credit splits across a multi-touch journey under the common attribution models; explain what Google Analytics defaults to and why that default can't be computed by hand; know to check which attribution model a client's GA property uses before interpreting their conversion numbers.",
    salesDepth:
      "Explain why a client's GA-reported AI-search conversions can look smaller than expected, and hold the line between the visibility impact we can already prove and the business impact we're still building measurement for.",
    knowledgeCheck: "Multiple-choice + free-response: compute attribution credit splits and explain GA defaults",
    groupSession: "N/A",
    appliedProject: "Part of recs deck",
    status: "content-pending",
  },
  {
    slug: "m8",
    code: "M8",
    title: "Manual Audit Methodology",
    salesTitle: "AirOps Research",
    phase: "phase1",
    audience: "shared",
    emSaDepth: "Run a full manual site audit end to end, from folder setup through AEO citation/gap analysis, keyword and content gap analysis, technical SEO crawl, traffic and keyword benchmarks, to generating and QA-ing the final client-ready deck.",
    salesDepth:
      "Pull a specific, sourced fact from AirOps' own research, citations, freshness, third-party signals, into a call, and know when the mechanism behind a number matters more than the number itself.",
    knowledgeCheck: "Checklist completion (submitted)",
    groupSession: "GS2 (Managed Services)",
    appliedProject: "Comprehensive audit (Managed Services) · diagnostic audit (Sales)",
    appliedProjectOptions: [
      "Comprehensive manual SEO audit of an at-risk account",
      "Comprehensive manual AEO audit of the same account, then compare",
    ],
    salesAppliedProjectOptions: [],
    salesContent: {
      hideDeliveryModel: true,
    },
    status: "content-pending",
  },

  // Phase 3: EM/SA-Advanced modules
  {
    slug: "m9",
    code: "M9",
    title: "Prompt & Taxonomy Strategy",
    phase: "phase2",
    audience: "em-sa",
    objective: "Explain why topic architecture must come from evidence and durable buyer-decision distinctions, not a desired prompt count; apply the Topic/Funnel/tag contract so a portfolio stays comparable over time; recognize the guardrails, brand-share cap, query-style mix, and account-eligibility, that keep a prompt portfolio a fair and defensible test of AI-search visibility; run a gap analysis comparing an account's actual topics against a recommended structure.",
    knowledgeCheck: "Multiple-choice + free-response: topic/tag design and portfolio guardrails",
    groupSession: "GS3 (Managed Services)",
    appliedProject: "Prompt strategy plan",
    appliedProjectOptions: [
      "Prompt set from an account's GSC queries + a call transcript",
      "Redesign an account's topic/tag structure and justify the granularity",
    ],
    status: "content-pending",
  },
  {
    slug: "m10",
    code: "M10",
    title: "Competitive Positioning & Comparison Diagnostics",
    phase: "phase2",
    audience: "em-sa",
    objective: "Diagnose why a specific comparison page underperforms (authority vs. content vs. architecture) and decide where it lives.",
    knowledgeCheck: "Free-response: diagnose an underperforming page",
    groupSession: "GS3 (Managed Services)",
    appliedProject: "Slot in recs deck",
    appliedProjectOptions: [
      "Diagnose two underperforming comparison pages",
      "Teardown of a competitor's comparison-content strategy",
    ],
    status: "content-pending",
  },
  {
    slug: "m11",
    code: "M11",
    title: "External Content & Third-Party Placement Execution",
    phase: "phase2",
    audience: "em-sa",
    objective: "Run a citation-gap analysis against tracked prompts to find already-cited third-party articles missing or misrepresenting the brand; decide between mention-building and mention-correction; scope the placement work.",
    knowledgeCheck: "Citation-gap mini-exercise",
    groupSession: "GS3 (Managed Services)",
    appliedProject: "Optional recs-deck slot",
    status: "content-pending",
  },
  {
    slug: "m12",
    code: "M12",
    title: "Multi-Brand, Multi-Location & M&A Structure",
    phase: "phase2",
    audience: "em-sa",
    objective: "Decide whether a multi-brand portfolio, a multi-location footprint, or a post-M&A entity should be tracked as one thing or kept separate; sequence any consolidation without losing visibility; protect equity through migration.",
    knowledgeCheck: "Scenario free-response",
    groupSession: "N/A",
    appliedProject: "Optional recs-deck slot",
    status: "content-pending",
  },
  {
    slug: "m13",
    code: "M13",
    title: "Compliance & Regulated Industries",
    phase: "phase2",
    audience: "em-sa",
    objective:
      "Plan content production velocity around a regulated client's compliance review cycle; know the vendor/client boundary (AirOps drafts and flags, the client's legal or compliance function approves); recognize the cross-vertical red flags in fintech, healthcare, and insurance content.",
    knowledgeCheck: "Short scenario",
    groupSession: "N/A",
    appliedProject: "N/A",
    status: "content-pending",
  },
  {
    slug: "m14",
    code: "M14",
    title: "Business & Category Context Research",
    phase: "phase2",
    audience: "em-sa",
    objective: "Get up to speed cold on a company/category: real competitors, funding/positioning signals, what a launch implies.",
    knowledgeCheck: "Submit a cold category brief",
    groupSession: "N/A",
    appliedProject: "Category research feeds recs deck",
    appliedProjectOptions: [
      "48-hr cold category brief on a real prospect",
      "\"What does this competitor's launch imply\" memo",
    ],
    status: "content-pending",
  },
  {
    slug: "m15",
    code: "M15",
    title: "First-Party Research & Trends",
    phase: "phase2",
    audience: "em-sa",
    objective: "Translate AirOps' POV + credible third-party research into channel-mix recommendations.",
    knowledgeCheck: "Recurring; light reflection prompt",
    groupSession: "N/A",
    appliedProject: "Applied in recs deck",
    status: "content-pending",
  },
  {
    slug: "m16",
    code: "M16",
    title: "Strategic Planning: Audit → Roadmap",
    phase: "phase2",
    audience: "em-sa",
    objective: "(SAM full / SA partial) Turn an audit into a prioritized roadmap (value vs. complexity, wave sequencing).",
    knowledgeCheck: "N/A",
    groupSession: "GS4 (Managed Services)",
    appliedProject: "Prioritized roadmap",
    appliedProjectOptions: [
      "Audit → first-90-days recs deck, pitched live",
      "Pre-sales vs. post-sales deck pair for one account",
    ],
    status: "content-pending",
  },
  {
    slug: "m17",
    code: "M17",
    title: "Presenting Audits & Strategic Plans",
    phase: "phase2",
    audience: "em-sa",
    objective: "(SAM full) Client narrative with altitude control; business case, competitor benchmark, economic-risk framing.",
    knowledgeCheck: "N/A",
    groupSession: "GS4 (Managed Services)",
    appliedProject: "Pre-sales + post-sales + recs decks",
    status: "content-pending",
  },
  {
    slug: "m18",
    code: "M18",
    title: "Implementation & Platform Configuration",
    phase: "phase2",
    audience: "em-sa",
    objective: "(SA full) Configure the right AirOps solution, QA, execute.",
    knowledgeCheck: "Config checklist",
    groupSession: "N/A",
    appliedProject: "Config a real account",
    appliedProjectOptions: [
      "Configure a real account end-to-end + QA",
      "Build the execution plan from a peer's roadmap",
    ],
    status: "content-pending",
  },
  {
    slug: "m19",
    code: "M19",
    title: "Interpreting Reporting for Iteration",
    phase: "phase2",
    audience: "em-sa",
    objective: "Read reporting and decide the next iteration.",
    knowledgeCheck: "Scenario free-response",
    groupSession: "GS4 (Managed Services)",
    appliedProject: "Iteration memo",
    status: "content-pending",
  },
  {
    slug: "m20",
    code: "M20",
    title: "Tool Cross-Reference Pass",
    phase: "phase2",
    audience: "em-sa",
    objective: "Repeat the M8 audit and M9 prompt set in Strategy 360; reconcile against the manual work.",
    knowledgeCheck: "Reconciliation write-up",
    groupSession: "N/A",
    appliedProject: "Redo M8/M9 in Strategy 360",
    status: "content-pending",
  },

  // Phase 3: Sales track (PMM-owned, coordinated here)
  {
    slug: "s1",
    code: "S1",
    title: "Category & Measurement Talk Track",
    phase: "phase2",
    audience: "sales",
    objective: "Pitch the AI-Search channel mix and answer \"are we at 0% mention rate?\" without misstating the metric.",
    source: "Reduced-depth M1/M2",
    knowledgeCheck: "Short quiz",
    groupSession: "GS-S1 (Sales)",
    appliedProject: "N/A",
    appliedProjectOptions: ["3-minute \"why the AI-Search channel mix matters\" pitch"],
    status: "content-pending",
  },
  {
    slug: "s2",
    code: "S2",
    title: "Scoping, Pricing & Objection Handling",
    phase: "phase2",
    audience: "sales",
    objective:
      "Scope an offering on a first call; answer pricing, \"why not guarantee #1,\" domain-authority-minimum, and authorship objections without overpromising.",
    source: "Sheet: Commercial Scope, Pricing & Service Definition",
    knowledgeCheck: "Objection-handling free-response",
    groupSession: "GS-S2 (Sales, PMM co-led)",
    appliedProject: "Mock discovery call",
    appliedProjectOptions: [
      "Mock discovery call scoping the offering",
      "Recorded objection-handling drill on pricing + \"guarantee #1\"",
    ],
    status: "content-pending",
  },
  {
    slug: "s3",
    code: "S3",
    title: "Platform & Offsite Credibility",
    phase: "phase2",
    audience: "sales",
    objective: "Speak to platform differences, crawlability, and offsite placement at prospect-facing depth.",
    source: "Reduced-depth M4/M11",
    knowledgeCheck: "Short quiz",
    groupSession: "GS-S2 (Sales)",
    appliedProject: "N/A",
    appliedProjectOptions: ["3-minute \"why the AI-Search channel mix matters\" pitch"],
    status: "content-pending",
  },
  {
    slug: "s4",
    code: "S4",
    title: "Competitive Landscape",
    phase: "phase2",
    audience: "sales",
    objective:
      "Explain the four paths a CMO is weighing when addressing AI search, hiring in-house, a traditional agency, a self-serve tool, or an AI-native services partner, and position AirOps against each with a live-ready talk track.",
    knowledgeCheck: "N/A",
    groupSession: "N/A",
    appliedProject: "N/A",
    appliedProjectOptions: ["Deliver the talk track for one path live, graded by a peer"],
    status: "content-pending",
  },
  {
    slug: "s5",
    code: "S5",
    title: "First Call",
    phase: "phase2",
    audience: "sales",
    objective:
      "Walk the AirOps First Call deck slide by slide: know what to say at each one, what to customize before a live call, and how the narrative arc, market urgency, the system, the channel-by-channel offer, customer proof, close, actually fits together.",
    knowledgeCheck: "N/A",
    groupSession: "N/A",
    appliedProject: "Deliver the deck live, graded by a peer",
    status: "content-pending",
  },
];

const PHASE_ORDER: Phase[] = ["phase0", "phase1", "phase2"];

export function getModulesForAudience(audience: Audience): ModuleEntry[] {
  return modules
    .filter((m) => m.audience === "shared" || m.audience === audience)
    .sort((a, b) => PHASE_ORDER.indexOf(a.phase) - PHASE_ORDER.indexOf(b.phase) || a.code.localeCompare(b.code, undefined, { numeric: true }));
}

export function getModuleBySlug(slug: string): ModuleEntry | undefined {
  return modules.find((m) => m.slug === slug);
}

/** A module's displayed title for one audience, honoring `salesTitle` when the Sales track repurposes a shared slot. */
export function moduleTitleForAudience(m: ModuleEntry, audience: Audience): string {
  return audience === "sales" && m.salesTitle ? m.salesTitle : m.title;
}

export const PHASE_LABELS: Record<Phase, string> = {
  phase0: "Phase 1 · The New World",
  phase1: "Phase 2 · Core Shared Enablement",
  phase2: "Phase 3 · Role Specialization",
};
