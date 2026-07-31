"use client";

import { useEffect, useState } from "react";
import { checkYourselfScenarios } from "@/lib/llm-comparison";
import { useProgress } from "@/lib/progress/useProgress";

export function CheckYourself() {
  const [answered, setAnswered] = useState<Record<string, string>>({});
  const { markCheckYourselfCompleted } = useProgress();

  useEffect(() => {
    if (Object.keys(answered).length === checkYourselfScenarios.length) {
      markCheckYourselfCompleted();
    }
  }, [answered, markCheckYourselfCompleted]);

  return (
    <div className="space-y-6">
      {checkYourselfScenarios.map((scenario, i) => {
        const pickedId = answered[scenario.id];
        const picked = scenario.options.find((o) => o.id === pickedId);
        return (
          <div key={scenario.id} className="rounded-card border border-line bg-white p-5">
            <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-ink/45">Scenario {i + 1}</p>
            <p className="mb-4 text-sm leading-relaxed text-ink/85">{scenario.prompt}</p>
            <div className="flex flex-col gap-2">
              {scenario.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setAnswered((prev) => ({ ...prev, [scenario.id]: option.id }))}
                  className={`rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                    pickedId === option.id
                      ? "border-ink bg-paper-2 font-medium text-ink"
                      : "border-line text-ink/75 hover:bg-paper-2"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {picked && (
              <div className="mt-3 rounded-lg bg-forest/[0.06] p-4 text-sm leading-relaxed text-ink/80">
                {picked.feedback}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
