import { Fragment } from "react";

interface TierStep {
  label: string;
  detail: string;
}

type Tone = "full" | "weak" | "dead";

/** Applying the crawl mechanism + link equity to one page: three tiers, strongest signal to weakest. */
const LINKED_PATH: TierStep[] = [
  { label: "Linked internally", detail: "Other pages point to it" },
  { label: "Crawl queue", detail: "High priority, frequent revisits" },
  { label: "Crawled → indexed", detail: "Full link equity flows in" },
];

const SITEMAP_ONLY_PATH: TierStep[] = [
  { label: "Listed in sitemap only", detail: "No internal links point to it" },
  { label: "Crawled → indexed", detail: "Lower priority, no link equity" },
];

const CARD_TONE = {
  full: { border: "border-line", bg: "bg-paper-2", label: "text-ink", detail: "text-ink/65" },
  weak: { border: "border-line/60", bg: "bg-paper", label: "text-ink/65", detail: "text-ink/45" },
  dead: { border: "border-dashed border-line", bg: "bg-paper", label: "text-ink/55", detail: "text-ink/40" },
} as const;

function TierCard({ label, detail, tone }: { label: string; detail: string; tone: Tone }) {
  const c = CARD_TONE[tone];
  return (
    <div className={`w-36 flex-shrink-0 rounded-card border ${c.border} ${c.bg} p-3 text-center sm:w-40`}>
      <div className={`mb-1 text-sm font-medium ${c.label}`}>{label}</div>
      <p className={`text-xs leading-relaxed ${c.detail}`}>{detail}</p>
    </div>
  );
}

function TierArrow({ tone }: { tone: Tone }) {
  const glyph = tone === "dead" ? "✕" : "→";
  const color = tone === "full" ? "text-ink/25" : tone === "weak" ? "text-ink/15" : "text-ink/30";
  return (
    <div className={`flex-shrink-0 text-lg ${color}`} aria-hidden>
      {glyph}
    </div>
  );
}

function TierRow({ steps, tone }: { steps: TierStep[]; tone: Tone }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <TierCard label={step.label} detail={step.detail} tone={tone} />
          {i < steps.length - 1 && <TierArrow tone={tone} />}
        </Fragment>
      ))}
    </div>
  );
}

interface DiagnosticRow {
  inSitemap: string;
  foundByLinkCrawl: string;
  tier: string;
}

const DIAGNOSTIC_TABLE: DiagnosticRow[] = [
  { inSitemap: "Yes", foundByLinkCrawl: "Yes", tier: "Linked internally, full signal" },
  { inSitemap: "Yes", foundByLinkCrawl: "No", tier: "Sitemap-only, weak signal" },
  { inSitemap: "No", foundByLinkCrawl: "No", tier: "Orphaned, never discovered" },
];

/** Three tiers a real page can land in, plus how to tell which one you're looking at using a crawler's two modes. */
export function PageDiscoveryTiers() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="space-y-3">
        <TierRow steps={LINKED_PATH} tone="full" />
        <TierRow steps={SITEMAP_ONLY_PATH} tone="weak" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <TierCard label="Not in sitemap, no links" detail="Nothing points to it, nowhere lists it" tone="dead" />
          <TierArrow tone="dead" />
          <TierCard label="Never discovered" detail="Outside the queue, never crawled or indexed" tone="dead" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="bg-paper-2">
              <th className="px-3 py-2 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">In sitemap?</th>
              <th className="px-3 py-2 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Found by a link crawl?</th>
              <th className="px-3 py-2 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Tier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {DIAGNOSTIC_TABLE.map((row) => (
              <tr key={row.tier}>
                <td className="px-3 py-2 align-top text-ink/75">{row.inSitemap}</td>
                <td className="px-3 py-2 align-top text-ink/75">{row.foundByLinkCrawl}</td>
                <td className="px-3 py-2 align-top font-medium text-ink">{row.tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-xs text-ink/45">
        Run a crawler like Screaming Frog twice: once in spider mode from the homepage, which only follows links the
        way a bot would, and once in list mode fed the sitemap XML. A URL that shows up in the second crawl but not
        the first is sitemap-only. A URL that shows up in neither, cross-checked against a full URL export from the
        CMS, is orphaned.
      </p>
    </div>
  );
}
