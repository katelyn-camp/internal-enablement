import { SerpExplorer } from "./components/serp/SerpExplorer";
import { PageVisitTracker } from "./components/shared/PageVisitTracker";

const CONTEXT_CHIPS = ["SEO", "SERP", "Traditional Search", "Organic Channel"];

export default function SerpAnatomyPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="serp-anatomy" />
      <div className="mb-3 flex flex-wrap gap-2">
        {CONTEXT_CHIPS.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-medium text-ink/55"
          >
            {chip}
          </span>
        ))}
      </div>

      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">SERP Anatomy</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        A modern Google results page is a lot more than ten blue links. Click through the markers below to explore
        each element in this rebuilt SERP — what it is, and why it&rsquo;s worth naming out loud on a client call.
        Everything you open here is saved to your progress automatically.
      </p>

      <SerpExplorer />
    </div>
  );
}
