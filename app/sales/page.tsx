import { getModulesForAudience } from "@/lib/curriculum";
import { ModulesIndexClient } from "@/app/components/curriculum/ModulesIndexClient";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";

export default function SalesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="sales" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Sales Curriculum</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        The Sales enablement track: the same shared foundations as the Managed Services team, at a lighter,
        opportunity-spotting depth, plus the Sales-specific talk track, objection handling, and platform credibility
        modules.
      </p>
      <ModulesIndexClient modules={getModulesForAudience("sales")} audience="sales" />
    </div>
  );
}
