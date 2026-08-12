/**
 * The point of this diagram: the questions a marketing leader now faces about AI aren't
 * separate decisions made one at a time, they shape each other. Four nodes, all six
 * connections drawn (both edges and both diagonals), so every question visibly touches
 * every other one rather than funneling through a single center.
 */
const DECISION_VIEWBOX = { width: 420, height: 360 };
const DECISION_NODES = {
  tl: { cx: 110, cy: 90, label: "What are we doing about AI?" },
  tr: { cx: 310, cy: 90, label: "What's the right channel mix?" },
  bl: { cx: 110, cy: 270, label: "Do we need a platform?" },
  br: { cx: 310, cy: 270, label: "Which platform is best?" },
};
const NODE_R = 55;

const DECISION_EDGES = [
  { x1: 165, y1: 90, x2: 255, y2: 90 }, // tl - tr
  { x1: 165, y1: 270, x2: 255, y2: 270 }, // bl - br
  { x1: 110, y1: 145, x2: 110, y2: 215 }, // tl - bl
  { x1: 310, y1: 145, x2: 310, y2: 215 }, // tr - br
  { x1: 150.88, y1: 126.79, x2: 269.12, y2: 233.21 }, // tl - br diagonal
  { x1: 269.12, y1: 126.79, x2: 150.88, y2: 233.21 }, // tr - bl diagonal
];

const COMPETITOR_TYPES = [
  { name: "Legacy Agencies", description: "The retainer-based partners already running content, SEO, and paid media." },
  { name: "Other Platforms", description: "Point-solution AEO/AI-search tools competing for the same budget line." },
  { name: "Internal Teams", description: "In-house marketing and SEO teams deciding whether to build this themselves." },
  { name: "+ More", description: "Whoever else a CMO is weighing against doing nothing at all." },
];

function toPct(value: number, total: number): string {
  return `${(value / total) * 100}%`;
}

function DecisionWeb() {
  const { width, height } = DECISION_VIEWBOX;
  return (
    <div className="relative mx-auto mb-3 max-w-md">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="Four questions marketing leaders face about AI, all connected to each other: what are we doing about AI, what's the right channel mix, do we need a platform, and which platform is best"
      >
        {DECISION_EDGES.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#1D1B19" strokeOpacity={0.18} strokeWidth={1.5} />
        ))}
        {Object.values(DECISION_NODES).map((n) => (
          <circle key={n.label} cx={n.cx} cy={n.cy} r={NODE_R} fill="#F7F6F3" stroke="#002912" strokeOpacity={0.35} strokeWidth={1.5} />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {Object.values(DECISION_NODES).map((n) => (
          <div
            key={n.label}
            className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center text-[0.65rem] leading-snug font-medium text-ink"
            style={{ left: toPct(n.cx, width), top: toPct(n.cy, height) }}
          >
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompetitiveLandscape() {
  return (
    <div>
      <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-ink/70">
        Marketing leaders now have to decide what they&rsquo;re doing about AI, what the right channel mix is,
        whether they need a platform, and which platform is best, on top of plenty of other pain points. None of
        those get decided in isolation.
      </p>

      <div className="mb-2 text-center text-caption font-semibold tracking-wide text-ink/45 uppercase">
        The decisions marketing leaders now face
      </div>
      <DecisionWeb />
      <p className="mx-auto mb-8 max-w-md text-center text-xs text-ink/45">
        Every one of these shapes the others, plus plenty of other pain points beyond just these four.
      </p>

      <div className="mx-auto mb-8 max-w-2xl rounded-card border border-line bg-paper-2 p-4 text-center text-sm leading-relaxed text-ink/80">
        <span className="font-semibold text-ink">AirOps doesn&rsquo;t answer one of these questions, it answers all
        of them together</span>, and executes on the answer. Because these decisions shape each other, solving them
        one at a time is what slows brands down; solving them together is how they reach the outcomes they want
        faster.
      </div>

      <div className="mb-2 text-center text-caption font-semibold tracking-wide text-ink/45 uppercase">
        Who we&rsquo;re actually competing against
      </div>
      <p className="mx-auto mb-4 max-w-2xl text-center text-sm leading-relaxed text-ink/70">
        We&rsquo;re not competing against a single software category anymore.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {COMPETITOR_TYPES.map((c) => (
          <div key={c.name} className="rounded-card border border-line bg-white p-4 text-center">
            <div className="mb-1.5 text-sm font-semibold text-ink">{c.name}</div>
            <p className="text-xs leading-relaxed text-ink/65">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
