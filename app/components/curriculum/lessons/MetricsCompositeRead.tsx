/**
 * Reading mention rate, citation rate, and share of voice as a unit, rather than three
 * calculations in isolation. Not a data-source transcription: this is AirOps' own
 * explanatory copy, marketing-reviewed before it goes live. Pending sign-off from the
 * head of SEO/AEO.
 *
 * Deliberately NOT framed as a maturity ladder (mention -> citation -> share of voice
 * isn't a sequence a brand progresses through) or as a query-intent split (informational
 * vs. commercial): the story here is that each metric catches a different blind spot the
 * other two can't see, which is why they sit next to each other rather than one replacing
 * the others.
 */

const WHAT_EACH_ANSWERS = [
  {
    term: "Mention Rate",
    lead: "Are you even part of the conversation?",
    body: "The most basic gate. If this is low, nothing else matters yet, you're not being outcompeted, you're not present to compete.",
  },
  {
    term: "Citation Rate",
    lead: "Is there something backing you up?",
    body: "The credibility check. Are you a name-drop, or a substantiated pick the model trusts enough to point to as evidence?",
  },
  {
    term: "Share of Voice",
    lead: "Are you actually winning?",
    body: "The competitive check. Even if you're present and credible, is your presence outpacing the other options a buyer is actually being shown?",
  },
];

const BLIND_SPOTS = [
  {
    ifYouOnlyTrack: "Share of Voice",
    youMightMiss:
      "your overall presence is thin. You could be winning against one or two competitors while barely showing up in the conversation at all.",
  },
  {
    ifYouOnlyTrack: "Mention Rate",
    youMightMiss: "you're being named without ever being trusted enough to cite. That's a credibility problem, not a visibility problem.",
  },
  {
    ifYouOnlyTrack: "Citation Rate",
    youMightMiss:
      "the competitive picture entirely. You could have great content that gets cited constantly, in a category where three other brands are still named twice as often.",
  },
];

export function MetricsCompositeRead() {
  return (
    <div>
      <div className="mb-2 text-center text-caption font-semibold tracking-wide text-ink/45 uppercase">
        Reading these three together
      </div>
      <h3 className="mb-6 text-center font-display text-h3 text-ink">
        What Mention Rate, Citation Rate, and Share of Voice Are Really Telling You
      </h3>

      <div className="mx-auto mb-8 max-w-2xl rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
        <span className="font-semibold text-ink">None of these three numbers mean anything if you&rsquo;re tracking
        the wrong prompts.</span> Mention rate, citation rate, and share of voice are only as good as the prompt set
        behind them. Track the prompts real buyers actually ask, and these metrics tell you the truth about your
        position. Track the wrong prompts, and you&rsquo;re optimizing for a version of the market that doesn&rsquo;t
        exist. Getting the prompt set right isn&rsquo;t step one of the analysis, it&rsquo;s the thing the entire
        analysis depends on.
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {WHAT_EACH_ANSWERS.map((item) => (
          <div key={item.term} className="rounded-card border border-line bg-white p-4">
            <div className="mb-1 text-sm font-semibold text-ink">{item.term}</div>
            <div className="mb-2 text-xs font-semibold tracking-wide text-forest uppercase">{item.lead}</div>
            <p className="text-xs leading-relaxed text-ink/70">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl rounded-card border border-line bg-paper-2 p-4">
        <div className="mb-1 text-sm font-semibold text-ink">Why look at all three together?</div>
        <p className="mb-3 text-xs leading-relaxed text-ink/70">
          Each one catches a different blind spot the other two can&rsquo;t see. Track only one, and you&rsquo;ll
          miss a real problem the others would have caught.
        </p>
        <ul className="space-y-2">
          {BLIND_SPOTS.map((item) => (
            <li key={item.ifYouOnlyTrack} className="rounded-card border border-line bg-white p-3 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">Track only {item.ifYouOnlyTrack}</span>
              <span className="text-ink/60"> and you might not notice </span>
              {item.youMightMiss}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
