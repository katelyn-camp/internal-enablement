import Link from "next/link";
import { Audience, ModuleEntry } from "@/lib/curriculum";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { ModuleEyebrow } from "./ModuleEyebrow";
import { lessonComponents } from "./lessons";

function depthBlurb(module: ModuleEntry, audience: Audience): string {
  const audienceContent = audience === "em-sa" ? module.emSaContent : module.salesContent;
  if (audienceContent?.learningObjectives) return audienceContent.learningObjectives;
  if (audience === "em-sa") return module.emSaDepth ?? module.objective ?? "";
  return module.salesDepth ?? module.objective ?? "";
}

export function ModuleCard({ module, audience }: { module: ModuleEntry; audience: Audience }) {
  const hasWrittenLesson = !!lessonComponents[`${audience}:${module.slug}`];

  return (
    <Link
      href={`/${audience}/${module.slug}`}
      className="flex flex-col gap-3 rounded-card border border-line bg-white p-5 transition-colors hover:border-ink/30"
    >
      <div className="flex items-start justify-between gap-2">
        <ModuleEyebrow code={module.code} />
        {!hasWrittenLesson && <ContentPendingTag />}
      </div>
      <h3 className="font-display text-h3 text-ink">{module.title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{depthBlurb(module, audience)}</p>
      <span className="mt-auto text-caption font-semibold text-forest">View module →</span>
    </Link>
  );
}
