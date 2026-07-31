import { talkTrackSnippets } from "@/lib/measurement-storytelling";
import { CopyTextBlock } from "@/app/components/shared/CopyTextBlock";

export function TalkTrackList() {
  return (
    <div className="space-y-5">
      {talkTrackSnippets.map((snippet) =>
        snippet.isAvoid ? (
          <div key={snippet.id} className="rounded-card border border-dashed border-line bg-paper-2 p-4">
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-ink/50">Avoid saying this</p>
            <p className="text-sm italic leading-relaxed text-ink/60">&ldquo;{snippet.text}&rdquo;</p>
            <p className="mt-2 text-sm text-ink/60">{snippet.note}</p>
          </div>
        ) : (
          <div key={snippet.id}>
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-forest">Correlation-safe framing</p>
            <CopyTextBlock text={snippet.text} label="Talking point" copyLabel="Copy" />
            <p className="mt-2 text-sm text-ink/60">{snippet.note}</p>
          </div>
        ),
      )}
    </div>
  );
}
