import { BLIND_SPOTS, USAGE_DOMAIN, USAGE_ENTRIES, USAGE_TICKS } from "./usage-data";

const LABEL_COL = "w-36 shrink-0 pr-3";

function logPercent(value: number): number {
  const logMin = Math.log10(USAGE_DOMAIN.min);
  const logMax = Math.log10(USAGE_DOMAIN.max);
  return ((Math.log10(value) - logMin) / (logMax - logMin)) * 100;
}

function LegendSwatch({ variant, label }: { variant: "active" | "reach"; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink/60">
      <span
        className={`h-2.5 w-2.5 rounded-[2px] ${variant === "active" ? "bg-forest" : "border border-forest/50 bg-forest/50"}`}
        aria-hidden
      />
      {label}
    </span>
  );
}

function BlindSpotCard({ entry }: { entry: (typeof BLIND_SPOTS)[number] }) {
  return (
    <div className="rounded-card border border-dashed border-line bg-paper-2 p-4">
      <div className="mb-3">
        <div className="text-sm font-semibold text-ink">{entry.name}</div>
        <div className="text-xs text-ink/50">{entry.tagline}</div>
      </div>
      <div className="mb-3 flex flex-wrap gap-4">
        {entry.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-h3 text-ink">{s.value}</div>
            <div className="text-[0.7rem] tracking-wide text-ink/45 uppercase">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-ink/55">{entry.note}</p>
    </div>
  );
}

export function UsageOpportunity() {
  const sorted = [...USAGE_ENTRIES].sort((a, b) => b.value - a.value);

  return (
    <div>
      <ul className="mb-6 grid gap-2 rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/75 sm:grid-cols-2">
        <li>
          <span className="font-semibold text-ink">Not apples-to-apples.</span> Google&rsquo;s figures are reach
          inside Search, closer to &ldquo;how many people saw one&rdquo; than &ldquo;how many chose to open an
          app,&rdquo; which is what the rest of these numbers measure.
        </li>
        <li>
          <span className="font-semibold text-ink">Google is structurally different.</span> Its scale is baked into
          Search itself: every searcher is a potential viewer by default, with no separate opt-in required.
        </li>
        <li>
          <span className="font-semibold text-ink">Grok&rsquo;s number is incidental.</span> Disclosed in
          SpaceX&rsquo;s IPO paperwork, not a Grok-specific announcement, and blended across X plus the standalone
          app.
        </li>
        <li>
          <span className="font-semibold text-ink">Claude and Perplexity aren&rsquo;t pictured.</span> Neither has a
          comparable, current usage-count figure. See the blind spots below the chart instead.
        </li>
      </ul>

      <div className="rounded-card border border-line bg-white p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-caption font-semibold tracking-wide text-ink/45 uppercase">
            Most recent officially-disclosed figure, log scale
          </span>
          <div className="flex flex-wrap gap-4">
            <LegendSwatch variant="active" label="Chose to open the product" />
            <LegendSwatch variant="reach" label="Passive reach inside Google Search" />
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 left-36">
            {USAGE_TICKS.map((t) => (
              <div key={t.value} className="absolute inset-y-0 border-l border-line" style={{ left: `${logPercent(t.value)}%` }} aria-hidden />
            ))}
          </div>

          <div className="space-y-4">
            {sorted.map((entry) => {
              const pct = logPercent(entry.value);
              return (
                <div key={entry.name} className="flex items-center">
                  <div className={`${LABEL_COL} text-right text-sm font-medium text-ink`}>
                    {entry.name}
                    {entry.flag && <sup className="ml-0.5 text-ink/50">*</sup>}
                  </div>
                  <div className="relative h-6 flex-1">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-r-[4px] ${
                        entry.category === "active" ? "bg-forest" : "border border-forest/50 bg-forest/50"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 text-xs font-semibold whitespace-nowrap text-ink"
                      style={{ left: `calc(${pct}% + 8px)` }}
                    >
                      {entry.displayValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${LABEL_COL} relative mt-2 h-4`}>
            {USAGE_TICKS.map((t) => (
              <span
                key={t.value}
                className="absolute -translate-x-1/2 text-[0.65rem] text-ink/40"
                style={{ left: `${logPercent(t.value)}%` }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink/45">
          <sup>*</sup> Blended X + standalone Grok app metric, disclosed incidentally in SpaceX&rsquo;s Form S-1
          (SpaceX acquired xAI, Feb 2026), not a Grok-specific product announcement, and xAI has never broken out the
          two.
        </p>

        <details className="mt-4 text-xs">
          <summary className="cursor-pointer font-semibold text-forest select-none">View as table</summary>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-xs">
              <thead>
                <tr className="border-b border-line text-left text-[0.7rem] tracking-wide text-ink/45 uppercase">
                  <th className="py-1.5 pr-3 font-semibold">Platform</th>
                  <th className="py-1.5 pr-3 font-semibold">Figure</th>
                  <th className="py-1.5 font-semibold">Date stated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {sorted.map((entry) => (
                  <tr key={entry.name}>
                    <td className="py-1.5 pr-3 font-medium text-ink">
                      {entry.name}
                      {entry.flag && "*"}
                    </td>
                    <td className="py-1.5 pr-3 text-ink/75">{entry.displayValue}</td>
                    <td className="py-1.5 text-ink/55">{entry.dateLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {BLIND_SPOTS.map((entry) => (
          <BlindSpotCard key={entry.name} entry={entry} />
        ))}
      </div>
    </div>
  );
}
