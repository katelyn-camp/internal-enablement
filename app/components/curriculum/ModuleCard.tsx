import { Audience, ModuleEntry, moduleTitleForAudience } from "@/lib/curriculum";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { ModuleEyebrow } from "./ModuleEyebrow";
import { lessonComponents } from "./lessons";

function depthBlurb(module: ModuleEntry, audience: Audience): string {
  const audienceContent = audience === "em-sa" ? module.emSaContent : module.salesContent;
  if (audienceContent?.learningObjectives) return audienceContent.learningObjectives;
  if (audience === "em-sa") return module.emSaDepth ?? module.objective ?? "";
  return module.salesDepth ?? module.objective ?? "";
}

// Modules are temporarily locked (not yet open to click into); see the
// `internal-enablement-locked-pages` note for the direct URLs while writing content.
export function ModuleCard({ module, audience }: { module: ModuleEntry; audience: Audience }) {
  const hasWrittenLesson = !!lessonComponents[`${audience}:${module.slug}`];

  return (
    <div
      aria-disabled="true"
      title="Not yet open"
      className="flex cursor-not-allowed flex-col gap-3 rounded-card border border-line bg-white p-5 opacity-45"
    >
      <div className="flex items-start justify-between gap-2">
        <ModuleEyebrow code={module.code} />
        {!hasWrittenLesson && <ContentPendingTag />}
      </div>
      <h3 className="font-display text-h3 text-ink">{moduleTitleForAudience(module, audience)}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{depthBlurb(module, audience)}</p>
    </div>
  );
}
