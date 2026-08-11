import { Audience, ModuleEntry } from "@/lib/curriculum";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { lessonComponents } from "./lessons";

function depthCopy(module: ModuleEntry, audience: Audience): { label: string; text: string } | null {
  if (module.emSaDepth || module.salesDepth) {
    return audience === "em-sa"
      ? { label: "Managed Services can (comprehensive)", text: module.emSaDepth ?? "" }
      : { label: "Sales can speak to (diagnostic/lighter)", text: module.salesDepth ?? "" };
  }
  if (module.objective) {
    return { label: "You will be able to…", text: module.objective };
  }
  return null;
}

function DeliveryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-line py-3 first:border-t-0 sm:flex-row sm:items-baseline sm:gap-4">
      <dt className="w-48 shrink-0 text-caption font-semibold tracking-wide text-ink/45 uppercase">{label}</dt>
      <dd className="text-sm text-ink/80">{value}</dd>
    </div>
  );
}

export function ModuleDetailView({ module, audience }: { module: ModuleEntry; audience: Audience }) {
  const audienceContent = audience === "em-sa" ? module.emSaContent : module.salesContent;
  const depth = audienceContent?.learningObjectives
    ? { label: "Learning Objectives", text: audienceContent.learningObjectives }
    : depthCopy(module, audience);
  const showDeliveryModel = !audienceContent?.hideDeliveryModel;
  const projectOptions =
    audience === "sales" && module.salesAppliedProjectOptions ? module.salesAppliedProjectOptions : module.appliedProjectOptions;
  const LessonComponent = lessonComponents[`${audience}:${module.slug}`];

  return (
    <div className="space-y-10">
      {depth && (
        <section>
          <h2 className="mb-2 font-display text-h2 text-ink">{depth.label}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink/80">{depth.text}</p>
        </section>
      )}

      {module.source && <p className="text-caption font-medium tracking-wide text-ink/40 uppercase">Source: {module.source}</p>}

      {showDeliveryModel && (
        <section>
          <h2 className="mb-3 font-display text-h2 text-ink">How this module is assessed</h2>
          <dl>
            <DeliveryRow label="Knowledge check" value={module.knowledgeCheck} />
            <DeliveryRow label="Group session" value={module.groupSession} />
            <DeliveryRow label="Applied project" value={module.appliedProject} />
          </dl>
        </section>
      )}

      {projectOptions && projectOptions.length > 0 && (
        <section>
          <h2 className="mb-3 font-display text-h2 text-ink">Applied project options</h2>
          <ul className="space-y-2">
            {projectOptions.map((opt, i) => (
              <li key={i} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
                {opt}
              </li>
            ))}
          </ul>
        </section>
      )}

      {LessonComponent ? (
        <section>
          <LessonComponent />
        </section>
      ) : (
        <section>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="font-display text-h2 text-ink">Full write-up</h2>
            <ContentPendingTag />
          </div>
          <div className="rounded-card border border-dashed border-line bg-paper-3 p-4 text-sm text-ink/50">
            Lesson content, knowledge check, and group session materials for this module haven&rsquo;t been written
            yet.
          </div>
        </section>
      )}
    </div>
  );
}
