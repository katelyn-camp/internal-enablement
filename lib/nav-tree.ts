import { Audience, Phase, getModulesForAudience } from "./curriculum";

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
  /** Second line under the label in the sidebar: descriptive name + gate date. Phase groups only. */
  subtitle?: string;
  items: NavItemConfig[];
  /** Existing-library group starts collapsed; see useNavUiState's DEFAULT_STATE. */
  collapsedByDefault?: boolean;
}

const PHASE_NAV_LABEL: Record<Phase, string> = {
  phase0: "Phase 0",
  phase1: "Phase 1",
  phase2: "Phase 2",
};

/** Descriptive name + gate date from the "Proposed timeline" table in the Notion doc, per audience. */
function phaseSubtitle(phase: Phase, audience: Audience): string {
  if (phase === "phase0") return "The New World · Sept 1";
  if (phase === "phase1") return "The Shared Enablement · Sept 11";
  return audience === "sales" ? "The Sales Team · Sept 25" : "The Engagement Managers and the Solution Architects · Sept 25";
}

/**
 * Everything built before the Project Upskill curriculum existed. Kept at
 * its original URLs under both audiences' sidebars, collapsed by default,
 * so it isn't lost; individual entries get manually re-slotted into a
 * specific module's page as that write-up happens.
 */
const EXISTING_LIBRARY_GROUP: NavGroupConfig = {
  id: "existing-library",
  label: "Existing Reference Library",
  collapsedByDefault: true,
  items: [
    { id: "serp-anatomy", label: "SERP Anatomy", href: "/" },
    { id: "glossary", label: "Glossary", href: "/glossary" },
    { id: "llms-retrieval", label: "LLMs & Retrieval", href: "/llms-retrieval" },
    { id: "seo-vs-aeo", label: "SEO vs. AEO Venn", href: "/seo-vs-aeo" },
    { id: "anatomy-of-pages", label: "Anatomy of Pages", href: "/anatomy-of-pages", childrenSource: "pageAnatomy" },
    { id: "content-funnel", label: "Anatomy of a Content Funnel", href: "/content-funnel" },
    { id: "workflows", label: "Workflows", href: "/workflows", childrenSource: "workflows" },
    { id: "diagnostic-patterns", label: "Diagnostic Patterns", href: "/diagnostic-patterns" },
    { id: "content-process", label: "Content Creation Process", href: "/content-process" },
    { id: "measurement-storytelling", label: "Measurement Storytelling", href: "/measurement-storytelling" },
    { id: "research-library", label: "Research Library", href: "/research-library" },
  ],
};

/**
 * Curriculum nav groups, phase by phase, for one audience. Module hrefs
 * live under /em-sa/ or /sales/ per audience; shared modules (M0–M8)
 * point at two different URLs for the same underlying data, per audience.
 */
export function getNavGroups(audience: Audience): NavGroupConfig[] {
  const base = audience === "em-sa" ? "/em-sa" : "/sales";
  const byPhase = getModulesForAudience(audience).reduce<Record<string, NavItemConfig[]>>((acc, m) => {
    (acc[m.phase] ??= []).push({ id: `${audience}:${m.slug}`, label: m.title, href: `${base}/${m.slug}` });
    return acc;
  }, {});

  const phaseGroups: NavGroupConfig[] = (Object.keys(PHASE_NAV_LABEL) as Phase[])
    .filter((phase) => byPhase[phase]?.length)
    .map((phase) => ({
      id: `${audience}-${phase}`,
      label: PHASE_NAV_LABEL[phase],
      subtitle: phaseSubtitle(phase, audience),
      items: byPhase[phase],
    }));

  return [...phaseGroups, EXISTING_LIBRARY_GROUP];
}
