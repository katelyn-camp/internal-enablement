import { GlossaryTheme } from "./glossary";

export interface ResearchEntry {
  id: string;
  title: string;
  source: string;
  type: "internal" | "external";
  oneLineTakeaway: string;
  link: string;
  dateAdded: string;
  topicTag?: GlossaryTheme;
  /** True for the demo entries shipped with v1 — no real research has been added yet. */
  isPlaceholderExample: boolean;
}

export const researchEntries: ResearchEntry[] = [
  {
    id: "example-citation-selection-study",
    title: "Example: How Generative Engines Select and Rank Sources",
    source: "Illustrative external study",
    type: "external",
    oneLineTakeaway: "A representative example of the kind of research this library will host — a study on retrieval and citation selection.",
    link: "#",
    dateAdded: "2026-01-01",
    topicTag: "aeo",
    isPlaceholderExample: true,
  },
  {
    id: "example-prompt-tracking-pilot",
    title: "Example: Internal Prompt Tracking Pilot Results",
    source: "Illustrative internal analysis",
    type: "internal",
    oneLineTakeaway: "Placeholder for internal AirOps research — e.g. a pilot study on prompt tracking methodology.",
    link: "#",
    dateAdded: "2026-01-01",
    topicTag: "aeo",
    isPlaceholderExample: true,
  },
  {
    id: "example-serp-behavior-report",
    title: "Example: Search Engine Behavior Report",
    source: "Illustrative external report",
    type: "external",
    oneLineTakeaway: "Placeholder for a third-party report on evolving SERP behavior and layout trends.",
    link: "#",
    dateAdded: "2026-01-01",
    topicTag: "seo",
    isPlaceholderExample: true,
  },
];
