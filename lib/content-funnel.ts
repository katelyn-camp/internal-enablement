import { AnnotatedHotspot } from "./annotated-diagram/types";

/**
 * Illustrative funnel model (Awareness → Consideration → Decision →
 * Retention/Expansion) — flagged as inferred rather than confirmed
 * against AirOps' own internal funnel terminology. Swap stage names
 * or add/remove stages here if the real model differs.
 */
export interface FunnelStage extends AnnotatedHotspot {
  topPct: number; // trapezoid width at the top of this band, 0-100
  bottomPct: number; // trapezoid width at the bottom of this band, 0-100
  searchIntent: string;
  exampleQueries: string[];
  contentTypes: string[];
  purpose: string;
}

export const funnelStages: FunnelStage[] = [
  {
    id: "awareness",
    marker: "1",
    label: "Awareness",
    topPct: 100,
    bottomPct: 74,
    searchIntent:
      "Informational — broad, problem-aware queries from people who don't yet know a solution category exists or haven't picked one.",
    exampleQueries: [
      "why is my team missing deadlines",
      "how to improve remote team communication",
      "what is [problem] and how do I fix it",
    ],
    contentTypes: ["Educational blog posts", "Guides & explainers", "Original research / data reports"],
    purpose: "Get found by people who don't know your product yet, and start building trust before they're ready to evaluate anyone.",
  },
  {
    id: "consideration",
    marker: "2",
    label: "Consideration",
    topPct: 74,
    bottomPct: 50,
    searchIntent: "Comparative — actively evaluating options, often comparing named categories or specific competitors.",
    exampleQueries: ["best project management software for remote teams", "[Competitor A] vs [Competitor B]", "top tools for X use case"],
    contentTypes: ["Comparison pages", "Buyer's guides", "Category roundups", "Case studies"],
    purpose: "Shape the evaluation criteria in your favor and get included in the shortlist before a final decision is made.",
  },
  {
    id: "decision",
    marker: "3",
    label: "Decision",
    topPct: 50,
    bottomPct: 28,
    searchIntent: "Transactional — ready to buy or commit, often researching a specific named product.",
    exampleQueries: ["[Product] pricing", "[Product] reviews", "[Product] free trial", "is [Product] worth it"],
    contentTypes: ["Pricing pages", "Product pages", "Reviews & testimonials", "Demo / trial CTAs"],
    purpose: "Remove the last friction before purchase — answer the specific objections and logistics questions a near-ready buyer still has.",
  },
  {
    id: "retention-expansion",
    marker: "4",
    label: "Retention / Expansion",
    topPct: 28,
    bottomPct: 62,
    searchIntent: "Support and growth-oriented — existing customers looking to get more value, solve a problem, or expand usage.",
    exampleQueries: ["how to set up [feature] in [Product]", "[Product] integrations", "[Product] advanced use cases"],
    contentTypes: ["Help center / documentation", "Onboarding guides", "Advanced use-case content", "Community & customer stories"],
    purpose:
      "Keep customers succeeding with what they bought, and surface expansion paths once they're already succeeding with the core product.",
  },
];
