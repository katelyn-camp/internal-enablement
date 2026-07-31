import { notFound } from "next/navigation";
import { pageTypes } from "@/lib/page-anatomy";
import { PageAnatomyExplorer } from "@/app/components/anatomy-of-pages/PageAnatomyExplorer";
import { Breadcrumbs } from "@/app/components/nav/Breadcrumbs";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";
import { PageVisitTracker } from "@/app/components/shared/PageVisitTracker";

export function generateStaticParams() {
  return pageTypes.map((pt) => ({ slug: pt.slug }));
}

export default async function PageTypeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageType = pageTypes.find((pt) => pt.slug === slug);
  if (!pageType) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id={`anatomy-of-pages:${pageType.slug}`} />
      <Breadcrumbs
        trail={[
          { label: "Anatomy of Pages", href: "/anatomy-of-pages" },
          { label: pageType.title },
        ]}
      />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-h1 text-ink">{pageType.title}</h1>
        {pageType.status === "stub" && <ContentPendingTag />}
      </div>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">{pageType.summary}</p>

      {pageType.status === "full" ? (
        <PageAnatomyExplorer pageType={pageType} />
      ) : (
        <div className="rounded-card border border-dashed border-line bg-paper-3 p-8 text-sm text-ink/50">
          Annotated wireframe pending for this page type.
        </div>
      )}
    </div>
  );
}
