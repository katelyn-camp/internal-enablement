/**
 * Usage volume, company-reported only. Every figure here was stated by the
 * company itself (blog post, earnings call, keynote, SEC filing); nothing is a
 * Similarweb/Sensor Tower/Apptopia-style estimate.
 */

export type UsageCategory = "active" | "reach";

export interface UsageEntry {
  name: string;
  /** Raw value used only to position the bar on the log scale. */
  value: number;
  /** How the figure should read on the bar itself. */
  displayValue: string;
  dateLabel: string;
  category: UsageCategory;
  /** Set when the figure needs a footnote (e.g. a blended/incidental disclosure). */
  flag?: string;
}

export const USAGE_ENTRIES: UsageEntry[] = [
  {
    name: "Google AI Overviews",
    value: 2_500_000_000,
    displayValue: "2.5B",
    dateLabel: "May 19, 2026 (Google I/O)",
    category: "reach",
  },
  {
    name: "Google AI Mode",
    value: 1_000_000_000,
    displayValue: "1B+",
    dateLabel: "May 19, 2026, reaffirmed Jul 22, 2026",
    category: "reach",
  },
  {
    name: "Gemini (app)",
    value: 1_000_000_000,
    displayValue: "1B+",
    dateLabel: "Aug 11, 2026",
    category: "active",
  },
  {
    name: "ChatGPT",
    value: 900_000_000,
    displayValue: "900M WAU",
    dateLabel: "Feb 27, 2026",
    category: "active",
  },
  {
    name: "Microsoft Copilot",
    value: 150_000_000,
    displayValue: "150M MAU",
    dateLabel: "Jan 29, 2026",
    category: "active",
  },
  {
    name: "Grok",
    value: 117_000_000,
    displayValue: "~117M MAU",
    dateLabel: "As of Mar 31, 2026, filed May 20, 2026",
    category: "active",
    flag: "grok-blended",
  },
];

/** Log-scale domain and reference ticks for the bar chart. */
export const USAGE_DOMAIN = { min: 100_000_000, max: 3_000_000_000 };
export const USAGE_TICKS = [
  { value: 100_000_000, label: "100M" },
  { value: 300_000_000, label: "300M" },
  { value: 1_000_000_000, label: "1B" },
  { value: 3_000_000_000, label: "3B" },
];

export interface BlindSpotEntry {
  name: string;
  tagline: string;
  stats: { label: string; value: string }[];
  note: string;
}

export const BLIND_SPOTS: BlindSpotEntry[] = [
  {
    name: "Claude",
    tagline: "No consumer number ever disclosed",
    stats: [
      { label: "Business customers", value: "300,000+" },
      { label: "Customers spending $1M+/yr", value: "500+" },
      { label: "Run-rate revenue", value: "$47B" },
    ],
    note: "Anthropic has only ever disclosed business/revenue metrics (Series G/H, Oct 2025–May 2026) rather than a consumer user or download count, in nearly four years of Claude.ai.",
  },
  {
    name: "Perplexity",
    tagline: "Usage disclosed, but not as users",
    stats: [
      { label: "Queries per month", value: "780M" },
      { label: "Queries per day", value: "30M" },
    ],
    note: "No MAU or download figure has ever been disclosed. This number is also 13+ months stale (Jun 5, 2025, TechCrunch); no fresher official figure exists, despite Perplexity's public “~20%+ month-over-month” growth claims.",
  },
];
