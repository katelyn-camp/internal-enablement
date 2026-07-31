import { researchEntries } from "@/lib/research-library";
import { ResearchLibraryClient } from "../components/research-library/ResearchLibraryClient";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function ResearchLibraryPage() {
  const realEntries = researchEntries.filter((e) => !e.isPlaceholderExample);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="research-library" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Research Library</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        A place to point back to internal and external research backing up what&rsquo;s taught elsewhere on this site.
      </p>

      {realEntries.length === 0 && (
        <div className="mb-10 rounded-card border border-dashed border-line bg-paper-2 p-8 text-center">
          <p className="font-display text-h3 mb-2 text-ink">Nothing real is in here yet</p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-ink/65">
            This library is genuinely empty — no internal or external research has been added. When the first real
            source is ready to cite, it goes here in the same card format shown below. Know of a study or internal
            analysis that belongs here? Add it to <code className="rounded bg-white px-1.5 py-0.5">lib/research-library.ts</code>.
          </p>
        </div>
      )}

      <p className="mb-4 text-caption font-semibold uppercase tracking-wide text-ink/45">
        Example entries — demonstrating the format, not real sources
      </p>
      <ResearchLibraryClient entries={researchEntries} />
    </div>
  );
}
