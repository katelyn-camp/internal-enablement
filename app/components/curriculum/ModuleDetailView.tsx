import { Audience, ModuleEntry } from "@/lib/curriculum";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { lessonComponents } from "./lessons";

export function ModuleDetailView({ module, audience }: { module: ModuleEntry; audience: Audience }) {
  const projectOptions =
    audience === "sales"
      ? module.salesAppliedProjectOptions ?? module.appliedProjectOptions
      : undefined;
  const LessonComponent = lessonComponents[`${audience}:${module.slug}`];

  return (
    <div className="space-y-10">
      {module.source && <p className="text-caption font-medium tracking-wide text-ink/40 uppercase">Source: {module.source}</p>}

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
