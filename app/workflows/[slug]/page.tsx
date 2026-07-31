import { notFound } from "next/navigation";
import { workflows } from "@/lib/workflows";
import { WorkflowEntryView } from "@/app/components/workflows/WorkflowEntryView";
import { WorkflowVisitTracker } from "@/app/components/workflows/WorkflowVisitTracker";
import { Breadcrumbs } from "@/app/components/nav/Breadcrumbs";

export function generateStaticParams() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export default async function WorkflowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workflow = workflows.find((w) => w.slug === slug);
  if (!workflow) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
      <WorkflowVisitTracker slug={workflow.slug} />
      <Breadcrumbs trail={[{ label: "Workflows", href: "/workflows" }, { label: workflow.title }]} />
      <h1 className="font-display text-h1 mb-3 text-ink">{workflow.title}</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">{workflow.summary}</p>
      <WorkflowEntryView workflow={workflow} />
    </div>
  );
}
