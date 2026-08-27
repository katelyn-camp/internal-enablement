import { Fragment } from "react";

interface CrawlStep {
  label: string;
  detail: string;
}

/** The generic mechanism: a bot follows a link (or a sitemap entry) to a URL, queues it, then crawls and indexes it. */
const DISCOVERY_PATH: CrawlStep[] = [
  { label: "Known page or sitemap", detail: "The bot already has this URL" },
  { label: "Follows a link", detail: "Finds a new URL to add to the queue" },
  { label: "Crawl queue", detail: "Waits its turn, prioritized by importance" },
  { label: "Crawled → indexed", detail: "Now eligible to rank" },
];

function PathCard({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="w-36 flex-shrink-0 rounded-card border border-line bg-paper-2 p-3 text-center sm:w-40">
      <div className="mb-1 text-sm font-semibold text-ink">{label}</div>
      <p className="text-xs leading-relaxed text-ink/65">{detail}</p>
    </div>
  );
}

function PathArrow() {
  return (
    <div className="flex-shrink-0 text-lg text-ink/25" aria-hidden>
      →
    </div>
  );
}

/** How Googlebot moves from a known page to a crawled, indexed one. Just the mechanism, no diagnostic branching. */
export function CrawlDiscoveryFlow() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {DISCOVERY_PATH.map((step, i) => (
          <Fragment key={step.label}>
            <PathCard label={step.label} detail={step.detail} />
            {i < DISCOVERY_PATH.length - 1 && <PathArrow />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
