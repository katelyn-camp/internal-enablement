import { workflows } from "@/lib/workflows";
import { WorkflowsIndexClient } from "../components/workflows/WorkflowsIndexClient";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function WorkflowsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="workflows" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">AirOps Workflows</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        The audit-mechanism reference library — how we actually do each piece of the process. This is the section
        that grows fastest; new entries get added here as data, not new page designs.
      </p>
      <WorkflowsIndexClient workflows={workflows} />
    </div>
  );
}
