export interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  /** Resolved to live sub-items at render time from lib/workflows.ts or lib/page-anatomy.ts. */
  childrenSource?: "workflows" | "pageAnatomy";
}

export interface NavGroupConfig {
  id: string;
  label: string;
  items: NavItemConfig[];
}

export const navGroups: NavGroupConfig[] = [
  {
    id: "foundations",
    label: "Foundations",
    items: [
      { id: "serp-anatomy", label: "SERP Anatomy", href: "/" },
      { id: "glossary", label: "Glossary", href: "/glossary" },
      { id: "llms-retrieval", label: "LLMs & Retrieval", href: "/llms-retrieval" },
      { id: "seo-vs-aeo", label: "SEO vs. AEO Venn", href: "/seo-vs-aeo" },
      { id: "anatomy-of-pages", label: "Anatomy of Pages", href: "/anatomy-of-pages", childrenSource: "pageAnatomy" },
      { id: "content-funnel", label: "Anatomy of a Content Funnel", href: "/content-funnel" },
    ],
  },
  {
    id: "applied",
    label: "Applied / Strategy",
    items: [
      { id: "workflows", label: "Workflows", href: "/workflows", childrenSource: "workflows" },
      { id: "diagnostic-patterns", label: "Diagnostic Patterns", href: "/diagnostic-patterns" },
      { id: "content-process", label: "Content Creation Process", href: "/content-process" },
      { id: "measurement-storytelling", label: "Measurement Storytelling", href: "/measurement-storytelling" },
      { id: "research-library", label: "Research Library", href: "/research-library" },
    ],
  },
];
