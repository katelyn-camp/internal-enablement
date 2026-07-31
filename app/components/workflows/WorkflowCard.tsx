import Link from "next/link";
import { WorkflowEntry } from "@/lib/workflows";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";

export function WorkflowCard({ workflow }: { workflow: WorkflowEntry }) {
  return (
    <Link
      href={`/workflows/${workflow.slug}`}
      className="flex flex-col gap-3 rounded-card border border-line bg-white p-5 transition-colors hover:border-ink/30"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-h3 text-ink">{workflow.title}</h3>
        {workflow.status === "stub" && <ContentPendingTag />}
      </div>
      <p className="text-sm leading-relaxed text-ink/70">{workflow.summary}</p>
      <span className="mt-auto text-caption font-semibold text-forest">View workflow →</span>
    </Link>
  );
}
