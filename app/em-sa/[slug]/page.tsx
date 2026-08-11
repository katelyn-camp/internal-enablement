import { notFound } from "next/navigation";
import { getModuleBySlug, getModulesForAudience } from "@/lib/curriculum";
import { ModuleDetailView } from "@/app/components/curriculum/ModuleDetailView";
import { ModuleEyebrow } from "@/app/components/curriculum/ModuleEyebrow";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";
import { Breadcrumbs } from "@/app/components/nav/Breadcrumbs";

export function generateStaticParams() {
  return getModulesForAudience("em-sa").map((m) => ({ slug: m.slug }));
}

export default async function EmSaModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const curriculumModule = getModuleBySlug(slug);
  if (!curriculumModule || (curriculumModule.audience !== "shared" && curriculumModule.audience !== "em-sa")) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id={`em-sa:${curriculumModule.slug}`} />
      <Breadcrumbs trail={[{ label: "Managed Services Team Curriculum", href: "/em-sa" }, { label: curriculumModule.title }]} />
      <div className="mb-3">
        <ModuleEyebrow code={curriculumModule.code} />
      </div>
      <h1 className="font-display text-h1 mb-3 text-ink">{curriculumModule.title}</h1>
      <ModuleDetailView module={curriculumModule} audience="em-sa" />
    </div>
  );
}
