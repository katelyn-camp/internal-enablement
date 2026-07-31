import { FunnelDiagram } from "../components/funnel/FunnelDiagram";
import { PageVisitTracker } from "../components/shared/PageVisitTracker";

export default function ContentFunnelPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="content-funnel" />
      <h1 className="font-display text-h1 lg:text-display mb-4 max-w-2xl text-ink">Anatomy of a Content Funnel</h1>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        There&rsquo;s no one &ldquo;right&rdquo; content strategy — the right mix depends on which stage of the funnel a company
        actually cares about growing. Click a stage to see the intent, example queries, content types, and purpose
        behind it.
      </p>
      <div className="mb-10 max-w-2xl rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/70">
        <span className="font-semibold text-ink">A company&rsquo;s goals change the emphasis: </span>
        a company focused on top-of-funnel growth will weight Awareness and Consideration content much more heavily;
        one focused on expansion/retention revenue will invest more in the bottom of the funnel instead. This page
        shows the full shape — matching a specific client&rsquo;s actual weighting to it is a strategy conversation, not a
        fixed formula.
      </div>
      <FunnelDiagram />
    </div>
  );
}
