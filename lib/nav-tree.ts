import { Audience, Phase, getVisibleModulesForAudience, isPhaseLocked, moduleTitleForAudience } from "./curriculum";

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
  /** Phase 3: items render grayed out and unclickable; see isPhaseLocked. */
  locked?: boolean;
}

const PHASE_NAV_LABEL: Record<Phase, string> = {
  phase0: "Phase 1",
  phase1: "Phase 2",
  phase2: "Phase 3",
};

/** Gate date from the "Proposed timeline" table in the Notion doc. Descriptive bylines removed for now. */
function phaseSubtitle(phase: Phase): string {
  if (phase === "phase0") return "Overview · Due Sept 18";
  if (phase === "phase1") return "Due Sept 24";
  return "Due Sept 30";
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
    { id: "category-enablement-slides", label: "AI Search Category Enablement (slides)", href: "/slides/category-enablement" },
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
  const byPhase = getVisibleModulesForAudience(audience).reduce<Record<string, NavItemConfig[]>>((acc, m) => {
    (acc[m.phase] ??= []).push({ id: `${audience}:${m.slug}`, label: moduleTitleForAudience(m, audience), href: `${base}/${m.slug}` });
    return acc;
  }, {});

  const phaseGroups: NavGroupConfig[] = (Object.keys(PHASE_NAV_LABEL) as Phase[])
    .filter((phase) => byPhase[phase]?.length)
    .map((phase) => ({
      id: `${audience}-${phase}`,
      label: PHASE_NAV_LABEL[phase],
      subtitle: phaseSubtitle(phase),
      items: byPhase[phase],
      locked: isPhaseLocked(phase),
    }));

  // EXISTING_LIBRARY_GROUP is temporarily pulled from the sidebar (content and
  // routes are untouched) — re-add it here to restore it to navigation.
  return phaseGroups;
}
