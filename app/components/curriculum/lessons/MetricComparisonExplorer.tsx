"use client";

import { useState } from "react";
import { METRIC_CATEGORIES, MetricCategory, MetricProviderEntry } from "./metric-comparison-data";

const ROWS: { key: keyof MetricProviderEntry; label: string }[] = [
  { key: "termUsed", label: "Term used" },
  { key: "whatItMeasures", label: "What it measures" },
  { key: "calculation", label: "Calculation" },
  { key: "denominator", label: "Denominator" },
];

const LABEL_COL_CLASSES = "sticky left-0 z-10 w-40 min-w-[10rem] px-3 py-3 align-top";

function ComparabilityBadge({ comparability }: { comparability: MetricProviderEntry["comparability"] }) {
  if (!comparability) return null;
  const isSame = comparability === "same";
  return (
    <span
      className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide normal-case ${
        isSame ? "bg-forest text-signal" : "border border-dashed border-line text-ink/45"
      }`}
    >
      {isSame ? "Same as AirOps" : "Different basis"}
    </span>
  );
}

function AirOpsDefinition({ airOps }: { airOps: MetricProviderEntry }) {
  return (
    <div className="mb-4 rounded-card border border-line bg-paper-2 p-4">
      <div className="mb-1 text-caption font-semibold tracking-wide text-ink/45 uppercase">AirOps&rsquo; definition</div>
      <p className="text-sm leading-relaxed text-ink/80">
        <span className="font-semibold text-ink">{airOps.termUsed}: </span>
        {airOps.whatItMeasures}
      </p>
    </div>
  );
}

function CategoryTable({ category }: { category: MetricCategory }) {
  const airOps = category.providers.find((p) => p.provider === "AirOps");
  const hasComparability = category.providers.some((p) => p.comparability);

  return (
    <div>
      {airOps && <AirOpsDefinition airOps={airOps} />}

      {hasComparability && (
        <div className="mb-2 flex flex-wrap justify-end gap-x-4 gap-y-1 text-[0.65rem] text-ink/45">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            Same as AirOps
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full border border-dashed border-ink/40" aria-hidden />
            Different basis
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-card border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className={`${LABEL_COL_CLASSES} bg-paper-2 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase`} />
              {category.providers.map((p) => (
                <th
                  key={p.provider}
                  className={`min-w-[220px] px-3 py-2.5 text-left align-top text-caption font-semibold tracking-wide uppercase ${
                    p.provider === "AirOps" ? "bg-forest text-signal" : "bg-paper-2 text-ink/50"
                  }`}
                >
                  <div className="flex flex-col items-start gap-1">
                    {p.provider}
                    <ComparabilityBadge comparability={p.comparability} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ROWS.map((row) => (
              <tr key={row.key}>
                <td className={`${LABEL_COL_CLASSES} bg-paper font-semibold text-ink`}>{row.label}</td>
                {category.providers.map((p) => (
                  <td
                    key={p.provider}
                    className={`min-w-[220px] px-3 py-3 align-top leading-relaxed text-ink/75 ${
                      p.provider === "AirOps" ? "bg-forest/[0.04]" : ""
                    }`}
                  >
                    {p[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-line">
              <td className={`${LABEL_COL_CLASSES} bg-paper-2 py-2.5 text-[0.7rem] font-semibold tracking-wide text-ink/45 uppercase`}>Source</td>
              {category.providers.map((p) => (
                <td key={p.provider} className="min-w-[220px] px-3 py-2.5 text-xs text-ink/45">
                  {p.source}
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export function MetricComparisonExplorer() {
  const [activeId, setActiveId] = useState(METRIC_CATEGORIES[0].id);
  const active = METRIC_CATEGORIES.find((c) => c.id === activeId) ?? METRIC_CATEGORIES[0];

  return (
    <div>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {METRIC_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors ${
              c.id === activeId ? "border-forest bg-forest text-signal" : "border-line bg-paper-2 text-ink/60 hover:border-ink/25"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <CategoryTable category={active} />
    </div>
  );
}
