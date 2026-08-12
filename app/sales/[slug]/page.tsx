import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModuleBySlug, getModulesForAudience } from "@/lib/curriculum";
import { ModuleDetailView } from "@/app/components/curriculum/ModuleDetailView";
import { ModuleEyebrow } from "@/app/components/curriculum/ModuleEyebrow";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";
import { Breadcrumbs } from "@/app/components/nav/Breadcrumbs";

export function generateStaticParams() {
  return getModulesForAudience("sales").map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const curriculumModule = getModuleBySlug(slug);
  if (!curriculumModule) return {};
  return { title: `Category Enablement: ${curriculumModule.title}` };
}

export default async function SalesModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const curriculumModule = getModuleBySlug(slug);
  if (!curriculumModule || (curriculumModule.audience !== "shared" && curriculumModule.audience !== "sales")) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14 xl:pr-[17rem]">
      <PageVisitTracker id={`sales:${curriculumModule.slug}`} />
      <Breadcrumbs trail={[{ label: "Sales Curriculum", href: "/sales" }, { label: curriculumModule.title }]} />
      <div className="mb-3">
        <ModuleEyebrow code={curriculumModule.code} />
      </div>
      <h1 className="font-display text-h1 mb-8 text-ink">{curriculumModule.title}</h1>
      <ModuleDetailView module={curriculumModule} audience="sales" />
    </div>
  );
}
