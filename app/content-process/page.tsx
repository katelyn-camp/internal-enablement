import { contentProcessSteps } from "@/lib/content-process";
import { ProcessStepCard } from "../components/content-process/ProcessStepCard";
import { ContentPendingTag } from "../components/ContentPendingTag";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";
import { PageOutline } from "../components/nav/PageOutline";

export default function ContentProcessPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14 xl:pr-[17rem]">
      <PageVisitTracker id="content-process" />
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-h1 lg:text-display text-ink">Content Creation Process &amp; Strategy</h1>
        <ContentPendingTag />
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        Most SAMs/SAs have never manually built a content brief — they work alongside agents that do this
        automatically. This walks through the process a human would run end to end, and calls out exactly where an
        AirOps agent typically takes over today. Step order and naming are illustrative, flagged for review against
        AirOps&rsquo; actual process.
      </p>
      <PageOutline sections={contentProcessSteps.map((s) => ({ id: s.id, label: `${s.order}. ${s.title}` }))} />
      <div className="space-y-3">
        {contentProcessSteps.map((step) => (
          <ProcessStepCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
}
