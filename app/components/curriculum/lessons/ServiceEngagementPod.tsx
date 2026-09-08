const SPOKES = ["AEO Strategist", "Offsite Lead", "AI Ads Lead", "Social Partner", "Community Partner"];

function PodRoleBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card bg-forest px-4 py-3 text-center font-display text-h3 text-paper">{children}</div>
  );
}

export function ServiceEngagementPod() {
  return (
    <div className="mx-auto max-w-2xl rounded-card border border-line bg-paper-2 p-6 sm:p-8">
      <div className="mb-5 text-center text-caption font-medium tracking-wide text-ink/45 uppercase">
        How we deliver with an expert pod
      </div>

      <PodRoleBar>EM (Engagement Manager)</PodRoleBar>

      <div className="my-4 text-center text-sm font-medium tracking-wide text-forest">
        Channel Strategist + Delivery Experts
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
        {SPOKES.map((s) => (
          <div
            key={s}
            className="flex items-center justify-center rounded-card border border-line bg-white px-2 py-4 text-center text-sm font-medium text-ink"
          >
            {s}
          </div>
        ))}
      </div>

      <div className="my-4">
        <PodRoleBar>SA (Solutions Architect)</PodRoleBar>
      </div>

      <p className="text-center text-sm leading-relaxed text-ink/55 italic">
        A dedicated pod structure ensures that strategic oversight, technical integration, and channel execution
        operate in absolute sync.
      </p>
    </div>
  );
}
