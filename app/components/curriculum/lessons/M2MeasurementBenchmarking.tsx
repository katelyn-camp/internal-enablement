import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M2_KNOWLEDGE_CHECK } from "./knowledge-check-data";
import { MetricComparisonExplorer } from "./MetricComparisonExplorer";

/**
 * Scaffold only: sections mirror the module's objective in lib/curriculum.ts (mention
 * rate / citation rate / share of voice, benchmarking, cross-platform measurement
 * differences). Real content goes in module by module, same as M1 did.
 */
const OUTLINE = [
  { id: "the-metrics", label: "The Metrics" },
  { id: "benchmarking", label: "Benchmarking Against Competitors" },
  { id: "platform-measurement", label: "How Platforms Measure This" },
];

function ContentPending() {
  return <p className="text-sm text-ink/45 italic">Content pending.</p>;
}

export function M2MeasurementBenchmarking() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m2"
            title="Measurement & Benchmarking Literacy"
            questions={M2_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="the-metrics">
        <SectionHeading>The Metrics</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Customers and prospects often run more than one AI visibility / AEO tool side by side. When the numbers
          don&rsquo;t match, it&rsquo;s rarely because one tool is wrong, it&rsquo;s almost always a different prompt
          set, a different calculation method, or the same word meaning something different across tools. Use this
          to confirm you&rsquo;re comparing the same concept before explaining a mismatch to a customer.
        </p>
        <MetricComparisonExplorer />
      </section>

      <section id="benchmarking">
        <SectionHeading>Benchmarking Against Competitors</SectionHeading>
        <ContentPending />
      </section>

      <section id="platform-measurement">
        <SectionHeading>How Platforms Measure This</SectionHeading>
        <ContentPending />
      </section>
    </div>
  );
}
