import { ResearchEntry } from "@/lib/research-library";
import { glossaryThemes } from "@/lib/glossary";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";

export function ResearchEntryCard({ entry }: { entry: ResearchEntry }) {
  const topic = glossaryThemes.find((t) => t.id === entry.topicTag);

  return (
    <a
      href={entry.link}
      className="flex flex-col gap-3 rounded-card border border-line bg-white p-5 transition-colors hover:border-ink/30"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-caption font-semibold uppercase tracking-wide ${
            entry.type === "internal" ? "bg-forest text-white" : "border border-line bg-paper-2 text-ink/60"
          }`}
        >
          {entry.type}
        </span>
        {topic && (
          <span className="rounded-full border border-line bg-paper-2 px-2.5 py-0.5 text-caption text-ink/55">{topic.label}</span>
        )}
        {entry.isPlaceholderExample && <ContentPendingTag />}
      </div>
      <h3 className="font-display text-h3 text-ink">{entry.title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{entry.oneLineTakeaway}</p>
      <div className="mt-auto flex items-center justify-between text-caption text-ink/45">
        <span>{entry.source}</span>
        <span>{entry.dateAdded}</span>
      </div>
    </a>
  );
}
