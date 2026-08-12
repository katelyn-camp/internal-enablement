/**
 * Illustrative example channel mixes, showing how a Strategy 360 / pre-sales
 * audit's signals translate into a bespoke investment split across the five
 * channels, rather than a fixed product. Entirely hypothetical, not real
 * client data.
 */

export const CHANNEL_ORDER = ["Owned Content", "External Content", "Paid", "Social & Influencer", "Community"] as const;

export type ChannelName = (typeof CHANNEL_ORDER)[number];

/** AirOps brand hex codes, used exactly as given for the channel-mix chart. */
export const CHANNEL_COLORS: Record<ChannelName, string> = {
  "Owned Content": "#002910",
  "External Content": "#3d365e",
  Paid: "#ff6337",
  "Social & Influencer": "#5b254f",
  Community: "#d0d4cc",
};

export interface ChannelMixExample {
  name: string;
  allocations: Record<ChannelName, number>;
  auditFinding: string;
  rationale: string;
}

export const CHANNEL_MIX_EXAMPLES: ChannelMixExample[] = [
  {
    name: "Content-Rich, Under-Cited",
    allocations: {
      "Owned Content": 20,
      "External Content": 45,
      Paid: 10,
      "Social & Influencer": 15,
      Community: 10,
    },
    auditFinding: "Deep existing content library, but almost no third-party citations feeding AI answers.",
    rationale:
      "Lean into External Content to build the citation footprint AI systems already trust. Owned Content gets lighter ongoing refresh, since the foundation is already strong.",
  },
  {
    name: "Thin Content, High-Intent Category",
    allocations: {
      "Owned Content": 50,
      "External Content": 20,
      Paid: 20,
      "Social & Influencer": 5,
      Community: 5,
    },
    auditFinding: "Thin, outdated content on high-value branded terms, with competitors gaining visibility in AI Overviews and AI Mode.",
    rationale:
      "Front-load Owned Content to build the retrievable foundation, backed by early Paid investment to capture demand while that foundation builds.",
  },
  {
    name: "Community-Driven Category",
    allocations: {
      "Owned Content": 25,
      "External Content": 20,
      Paid: 5,
      "Social & Influencer": 20,
      Community: 30,
    },
    auditFinding: "AI answers in this category cite Reddit threads, forums, and reviews far more than any brand-owned or press source.",
    rationale:
      "Shift the largest share into Community, with Social & Influencer next, since that's where this category's AI answers actually pull from.",
  },
];
