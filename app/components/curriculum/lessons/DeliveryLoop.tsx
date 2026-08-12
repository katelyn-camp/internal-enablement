interface DeliveryStep {
  name: string;
  description: string;
}

/** In reading order: Diagnose -> Allocate -> Activate -> Optimize -> back to Diagnose. */
const DELIVERY_STEPS: DeliveryStep[] = [
  { name: "Diagnose", description: "Understand how agents discover, evaluate, cite, and recommend your brand." },
  {
    name: "Allocate",
    description: "Identify the channel mix most likely to improve your position in the agent-first buyer journey.",
  },
  {
    name: "Activate",
    description: "Put the right evidence into the surfaces agents use to discover, evaluate, and recommend brands.",
  },
  { name: "Optimize", description: "Measure performance, learn quickly, and keep investment focused on what is working." },
];

function StepCard({ step }: { step: DeliveryStep }) {
  return (
    <div className="rounded-card border border-line bg-paper-2 p-4">
      <div className="mb-1.5 text-sm font-semibold text-ink">{step.name}</div>
      <p className="text-xs leading-relaxed text-ink/65">{step.description}</p>
    </div>
  );
}

function LoopArrow({ direction }: { direction: "right" | "down" | "left" | "up" }) {
  const glyph = { right: "→", down: "↓", left: "←", up: "↑" }[direction];
  return (
    <div className="flex items-center justify-center text-lg text-ink/25" aria-hidden>
      {glyph}
    </div>
  );
}

/** Two-column, four-step diagram that loops back on itself: Diagnose -> Allocate -> Activate -> Optimize -> Diagnose. */
export function DeliveryLoop() {
  const [diagnose, allocate, activate, optimize] = DELIVERY_STEPS;
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] items-center gap-y-2">
      <StepCard step={diagnose} />
      <LoopArrow direction="right" />
      <StepCard step={allocate} />

      <LoopArrow direction="up" />
      <div />
      <LoopArrow direction="down" />

      <StepCard step={optimize} />
      <LoopArrow direction="left" />
      <StepCard step={activate} />
    </div>
  );
}
