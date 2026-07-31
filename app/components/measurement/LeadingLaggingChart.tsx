import { leadingIndicator, laggingIndicator, lagWindowWeeks } from "@/lib/measurement-storytelling";
import { MiniTimelineChart } from "./MiniTimelineChart";

export function LeadingLaggingChart() {
  return (
    <div className="rounded-card border border-line bg-white p-6">
      <div className="space-y-6">
        <MiniTimelineChart
          label={`Leading indicator — ${leadingIndicator.label}`}
          data={leadingIndicator.data}
          color="#00FF72"
          markWeekIndex={3}
          markLabel="starts climbing"
        />
        <MiniTimelineChart
          label={`Lagging indicator — ${laggingIndicator.label}`}
          data={laggingIndicator.data}
          color="#002912"
          markWeekIndex={6}
          markLabel="follows ~3 weeks later"
        />
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-paper-2 px-4 py-2 text-caption font-medium text-ink/60">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
        Typical lag window: ~{lagWindowWeeks} weeks between platform movement and business-metric movement
      </div>
      <p className="mt-3 text-caption text-ink/40">
        Illustrative, fabricated data — for demonstrating the pattern shape only, not a real client&rsquo;s numbers.
      </p>
    </div>
  );
}
