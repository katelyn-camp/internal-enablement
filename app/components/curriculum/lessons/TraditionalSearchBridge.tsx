/**
 * Maps the traditional search metrics reps already know (Google Search Console + broader
 * SEO/marketing metrics) onto their AI Search equivalents, where a clean equivalent exists.
 * The point isn't a 1:1 rename job: some things carry over almost exactly, one (Impressions
 * vs. Mention Rate) is a cousin with a different mechanism, one (Backlinks/Domain Authority)
 * genuinely doesn't translate, one (Clicks/CTR) still happens but carries less weight as a
 * measure of influence, and one (Sentiment) is new to AI Search rather than a renamed old
 * metric.
 */

interface MetricBridgeRow {
  traditional: string;
  aiSearch: string;
  difference: string;
}

const METRIC_BRIDGE: MetricBridgeRow[] = [
  {
    traditional: "Impressions",
    aiSearch: "Mention Rate",
    difference:
      "Impressions are a raw count pulled from census-level data: Google Search Console has a record of every real query anyone typed, whether you tracked it or not. Mention Rate is a percentage computed only across the prompts you chose to track, because no AI platform hands you a log of every real conversation the way Google hands you Search Console. That's exactly why the prompt set is the foundation everything else sits on: there's no ground truth to fall back on if it's wrong.",
  },
  {
    traditional: "Average Position / Ranking",
    aiSearch: "Average Position",
    difference:
      "Carries over almost cleanly. Position in traditional search is where you land on a page; position in AI search is where you're named within an answer, relative to the other brands named in that same answer. Same underlying idea, are you first or buried, different container.",
  },
  {
    traditional: "Share of Search / Organic Share of Voice",
    aiSearch: "Share of Voice",
    difference:
      "Practically a direct carryover. Share of Search existed in traditional marketing before AI search did; AI Search's Share of Voice is the same competitive question asked of a new surface.",
  },
  {
    traditional: "Backlinks / Domain Authority",
    aiSearch: "No clean equivalent",
    difference:
      "Backlinks and Domain Authority are inputs that accumulate over time and feed a ranking algorithm from the outside. Citation Rate is an outcome, whether a specific answer cited you, decided fresh every time a prompt runs, not a standing asset that compounds. They're both third-party validation in spirit, but they don't play the same structural role, so treat this as a genuine gap rather than a renamed metric.",
  },
  {
    traditional: "Clicks / CTR",
    aiSearch: "No clean equivalent",
    difference:
      "Clicks haven't disappeared: they still happen, and where attribution/referrer data is available, they show up as AI-referred traffic. What's changed is how much weight they can carry, since AI answers are built to resolve the question on the spot, so a meaningful share of discovery and evaluation now happens before a click is ever generated. Less a clean equivalent than a metric that's lost some of its completeness.",
  },
  {
    traditional: "No traditional equivalent",
    aiSearch: "Sentiment",
    difference: "Runs the other direction: genuinely new to AI Search, not a renamed traditional metric.",
  },
];

export function TraditionalSearchBridge() {
  return (
    <div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
        Everyone selling into this space already has a mental model for traditional search metrics: impressions,
        position, share of search, backlinks, clicks. Some of that carries over directly to AI Search. Some of it is
        a cousin, same idea, different mechanism. And some of it doesn&rsquo;t translate at all. Knowing which is
        which keeps you from overstating how much has changed, or understating it.
      </p>
      <div className="overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-paper-2">
              <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                Traditional Metric
              </th>
              <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                Closest Analogue or Metric
              </th>
              <th className="w-3/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                The Real Difference
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {METRIC_BRIDGE.map((row) => (
              <tr key={row.traditional}>
                <td className="px-3 py-3 align-top font-medium text-ink">{row.traditional}</td>
                <td className="px-3 py-3 align-top font-medium text-forest">{row.aiSearch}</td>
                <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
