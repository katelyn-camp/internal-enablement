import { getModulesForAudience } from "@/lib/curriculum";
import { ModulesIndexClient } from "@/app/components/curriculum/ModulesIndexClient";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";

export default function EmSaIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="em-sa" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Managed Services Team Curriculum</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        The full enablement track for Engagement Managers and Solution Architects: shared foundations through
        advanced, account-facing specialization. Managed Services modules go to comprehensive depth: you&rsquo;re
        expected to execute, not just speak to, each topic.
      </p>
      <ModulesIndexClient modules={getModulesForAudience("em-sa")} audience="em-sa" />
    </div>
  );
}
