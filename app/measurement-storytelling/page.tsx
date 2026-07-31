import { LeadingLaggingChart } from "../components/measurement/LeadingLaggingChart";
import { TalkTrackList } from "../components/measurement/TalkTrackList";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";
import { PageOutline } from "../components/nav/PageOutline";

const OUTLINE = [
  { id: "leading-vs-lagging", label: "Leading vs. lagging indicators" },
  { id: "the-pattern", label: "The pattern, visualized" },
  { id: "talk-track", label: "The talk track" },
];

export default function MeasurementStorytellingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14 xl:pr-[17rem]">
      <PageVisitTracker id="measurement-storytelling" />
      <h1 className="font-display text-h1 lg:text-display mb-4 text-ink">Measurement Storytelling</h1>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        How to talk about AEO measurement honestly: correlation, not causation. Naming a pattern is useful to a
        client. Claiming a causal link the data can&rsquo;t support isn&rsquo;t — it&rsquo;s the fastest way to lose
        credibility the first time someone pushes back.
      </p>
      <PageOutline sections={OUTLINE} />

      <section id="leading-vs-lagging" className="mb-10">
        <h2 className="font-display text-h2 mb-4 text-ink">Leading vs. lagging indicators</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
          <span className="font-medium text-ink">Leading / platform indicators</span> — citation share, visibility
          rate, prompt coverage — move first, because they&rsquo;re measuring the platform layer directly.{" "}
          <span className="font-medium text-ink">Lagging / business indicators</span> — branded search volume, direct
          traffic, pipeline — move later, because they depend on real people noticing and acting on that visibility.
          The gap between the two is real and worth naming out loud, not smoothing over.
        </p>
      </section>

      <section id="the-pattern" className="mb-12">
        <h2 className="font-display text-h2 mb-4 text-ink">The pattern, visualized</h2>
        <LeadingLaggingChart />
      </section>

      <section id="talk-track">
        <h2 className="font-display text-h2 mb-2 text-ink">The talk track</h2>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-ink/70">
          Copy-to-clipboard phrasing for framing this correctly on a client call, plus what to avoid saying instead.
        </p>
        <TalkTrackList />
      </section>
    </div>
  );
}
