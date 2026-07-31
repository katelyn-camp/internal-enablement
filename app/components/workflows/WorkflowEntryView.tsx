import { WorkflowEntry } from "@/lib/workflows";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { VideoSlot } from "./VideoSlot";
import { CopyTextBlock } from "@/app/components/shared/CopyTextBlock";

export function WorkflowEntryView({ workflow }: { workflow: WorkflowEntry }) {
  return (
    <div className="space-y-10">
      <section>
        <VideoSlot videoUrl={workflow.videoUrl} />
      </section>

      <section>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="font-display text-h2 text-ink">Why this matters</h2>
          {!workflow.whyThisMatters && <ContentPendingTag />}
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
          {workflow.whyThisMatters ?? "Write-up pending — this section will explain what this analysis diagnoses and why it matters in a client conversation."}
        </p>
      </section>

      <section>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="font-display text-h2 text-ink">Prompt to use</h2>
          {!workflow.examplePrompt && <ContentPendingTag />}
        </div>
        {workflow.examplePrompt ? (
          <CopyTextBlock text={workflow.examplePrompt} />
        ) : (
          <div className="rounded-card border border-dashed border-line bg-paper-3 p-4 text-sm text-ink/50">
            Example prompt pending.
          </div>
        )}
      </section>

      <section>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="font-display text-h2 text-ink">Template</h2>
          {!workflow.templateUrl && <ContentPendingTag />}
        </div>
        {workflow.templateUrl ? (
          <a
            href={workflow.templateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Open the template
            <span aria-hidden>→</span>
          </a>
        ) : (
          <div className="rounded-card border border-dashed border-line bg-paper-3 p-4 text-sm text-ink/50">
            Template link pending.
          </div>
        )}
      </section>
    </div>
  );
}
