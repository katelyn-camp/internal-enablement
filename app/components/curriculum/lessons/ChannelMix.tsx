import { CHANNEL_COLORS, CHANNEL_MIX_EXAMPLES, CHANNEL_ORDER, ChannelName } from "./channel-mix-data";

function Swatch({ channel }: { channel: ChannelName }) {
  return (
    <span
      className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px] border border-ink/15"
      style={{ backgroundColor: CHANNEL_COLORS[channel] }}
      aria-hidden
    />
  );
}

function MixLegend() {
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
      {CHANNEL_ORDER.map((channel) => (
        <span key={channel} className="inline-flex items-center gap-1.5 text-xs text-ink/60">
          <Swatch channel={channel} />
          {channel}
        </span>
      ))}
    </div>
  );
}

function MixBar({ example }: { example: (typeof CHANNEL_MIX_EXAMPLES)[number] }) {
  return (
    <div className="flex h-6 w-full gap-[2px] overflow-hidden rounded-card">
      {CHANNEL_ORDER.map((channel, i) => {
        const pct = example.allocations[channel];
        if (pct <= 0) return null;
        return (
          <div
            key={channel}
            className={`h-full border border-ink/15 ${i === 0 ? "rounded-l-[4px]" : ""} ${i === CHANNEL_ORDER.length - 1 ? "rounded-r-[4px]" : ""}`}
            style={{ width: `${pct}%`, backgroundColor: CHANNEL_COLORS[channel] }}
            title={`${channel}: ${pct}%`}
          />
        );
      })}
    </div>
  );
}

function MixCard({ example }: { example: (typeof CHANNEL_MIX_EXAMPLES)[number] }) {
  return (
    <div className="rounded-card border border-line bg-white p-5">
      <div className="mb-3 font-display text-h3 text-ink">{example.name}</div>
      <MixBar example={example} />
      <div className="mt-3 mb-4 flex flex-col gap-1 text-right">
        {CHANNEL_ORDER.map((channel) => (
          <span key={channel} className="inline-flex items-center justify-end gap-1.5 text-xs text-ink/60">
            {channel} {example.allocations[channel]}%
            <Swatch channel={channel} />
          </span>
        ))}
      </div>
      <div className="space-y-3 border-t border-line pt-3 text-right text-sm leading-relaxed">
        <div>
          <div className="font-semibold text-ink">What the audit found</div>
          <div className="text-ink/70">{example.auditFinding}</div>
        </div>
        <div>
          <div className="font-semibold text-ink">Why this mix</div>
          <div className="text-ink/70">{example.rationale}</div>
        </div>
      </div>
    </div>
  );
}

export function ChannelMix() {
  return (
    <div>
      <div className="mx-auto mb-6 max-w-2xl rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
        <span className="font-semibold text-ink">Bespoke channel mix:</span> Managed Services provides a bespoke
        channel mix, the specific investment split across Owned Content, External Content, Paid, Social &amp;
        Influencer, and Community that AirOps recommends for a given client, built from what the Strategy 360
        diagnostic and pre-sales audit reveal about that client&rsquo;s current AI-search footprint, not a fixed set
        of features.
      </div>
      <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-ink/70">
        You&rsquo;re not selling &ldquo;content refresh&rdquo; or &ldquo;net-new content.&rdquo; You&rsquo;re
        pitching a bespoke channel mix, and the three examples below show how different audit signals lead to
        different recommendations.
      </p>
      <p className="mb-8 text-center text-caption font-semibold tracking-wide text-ink/40 uppercase">
        Illustrative example, not real client data
      </p>

      <MixLegend />

      <div className="grid gap-4 lg:grid-cols-3">
        {CHANNEL_MIX_EXAMPLES.map((example) => (
          <MixCard key={example.name} example={example} />
        ))}
      </div>

      <details className="mt-6 text-xs">
        <summary className="cursor-pointer font-semibold text-forest select-none">View as table</summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-xs">
            <thead>
              <tr className="border-b border-line text-left text-[0.7rem] tracking-wide text-ink/45 uppercase">
                <th className="py-1.5 pr-3 font-semibold">Mix</th>
                {CHANNEL_ORDER.map((channel) => (
                  <th key={channel} className="py-1.5 pr-3 font-semibold">
                    {channel}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CHANNEL_MIX_EXAMPLES.map((example) => (
                <tr key={example.name}>
                  <td className="py-1.5 pr-3 font-medium text-ink">{example.name}</td>
                  {CHANNEL_ORDER.map((channel) => (
                    <td key={channel} className="py-1.5 pr-3 text-ink/75">
                      {example.allocations[channel]}%
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
