import { diagnosticPatterns } from "@/lib/diagnostic-patterns";
import { PatternCard } from "../components/diagnostic-patterns/PatternCard";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function DiagnosticPatternsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="diagnostic-patterns" />
      <h1 className="font-display text-h1 lg:text-display mb-4 text-ink">Diagnostic Patterns</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        The pattern-recognition muscle to build before escalating to an SME: here&rsquo;s what you&rsquo;re seeing, here&rsquo;s
        what it probably means. Click a pattern to expand it.
      </p>
      <div className="space-y-4">
        {diagnosticPatterns.map((p) => (
          <PatternCard key={p.id} pattern={p} />
        ))}
      </div>
    </div>
  );
}
