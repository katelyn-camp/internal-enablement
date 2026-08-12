import { notFound } from "next/navigation";
import { getModuleBySlug, getModulesForAudience } from "@/lib/curriculum";
import { ModuleDetailView } from "@/app/components/curriculum/ModuleDetailView";
import { ModuleStickyTitle } from "@/app/components/curriculum/ModuleStickyTitle";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { knowledgeChecks } from "@/app/components/curriculum/knowledge-checks";
import { moduleStickyAnchors } from "@/app/components/curriculum/module-sticky-anchors";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";
import { Breadcrumbs } from "@/app/components/nav/Breadcrumbs";

export function generateStaticParams() {
  return getModulesForAudience("em-sa").map((m) => ({ slug: m.slug }));
}

export default async function EmSaModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const curriculumModule = getModuleBySlug(slug);
  if (!curriculumModule || (curriculumModule.audience !== "shared" && curriculumModule.audience !== "em-sa")) notFound();

  const questions = knowledgeChecks[`em-sa:${curriculumModule.slug}`];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14 xl:pr-[17rem]">
      <PageVisitTracker id={`em-sa:${curriculumModule.slug}`} />
      <Breadcrumbs trail={[{ label: "Managed Services Team Curriculum", href: "/em-sa" }, { label: curriculumModule.title }]} />
      <ModuleStickyTitle
        code={curriculumModule.code}
        title={curriculumModule.title}
        untilAnchorId={moduleStickyAnchors[`em-sa:${curriculumModule.slug}`]}
        action={
          questions && (
            <KnowledgeCheckButton
              id={curriculumModule.slug}
              title={curriculumModule.title}
              questions={questions}
              className="inline-flex shrink-0 items-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3 xl:hidden"
            />
          )
        }
      />
      <ModuleDetailView module={curriculumModule} audience="em-sa" />
    </div>
  );
}
