"use client";

import { useEffect, useState } from "react";
import { SURFACE_PROFILES, SurfaceProfile, SurfaceSection } from "./surfaces-data";

const SURFACE_KEYS = ["ChatGPT", "Google AI Mode", "Google Overviews", "Gemini", "Perplexity", "Claude", "Grok", "Microsoft Copilot"];

function SurfaceChip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex cursor-pointer items-center rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-medium text-ink/55 transition-colors hover:border-ink/25 hover:bg-paper-3 hover:text-ink"
    >
      {label}
    </button>
  );
}

function TooltipChip({ label, tooltip }: { label: string; tooltip: string }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        className="inline-flex cursor-help items-center rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-medium text-ink/55"
      >
        {label}
      </button>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-card border border-line bg-white p-3 text-left text-xs leading-relaxed text-ink/70 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="mb-1 block text-caption font-semibold tracking-wide text-ink uppercase">{label}</span>
        {tooltip}
      </span>
    </span>
  );
}

const TAG_PATTERN_SOURCE = String.raw`\[(OFFICIAL\/INDUSTRY|OFFICIAL|INDUSTRY|UNCONFIRMED)([^\]]*)\]`;

const TAG_STYLES: Record<string, string> = {
  OFFICIAL: "bg-forest text-signal",
  INDUSTRY: "border border-line bg-paper-2 text-ink/60",
  UNCONFIRMED: "border border-dashed border-line text-ink/45",
  "OFFICIAL/INDUSTRY": "border border-line bg-paper-2 text-ink/60",
};

/** Renders inline [OFFICIAL] / [INDUSTRY] / [UNCONFIRMED] confidence tags from the cheat sheet as small badges. */
function TaggedText({ text }: { text: string }) {
  if (!text) return null;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  const pattern = new RegExp(TAG_PATTERN_SOURCE, "g");
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const tier = match[1];
    const detail = match[2].replace(/^[,\s-]+/, "").trim();
    nodes.push(
      <span key={key++} className="inline-flex flex-wrap items-baseline gap-1 align-baseline">
        <span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide uppercase ${TAG_STYLES[tier] ?? TAG_STYLES.INDUSTRY}`}>
          {tier}
        </span>
        {detail && <span className="text-xs text-ink/45 italic">{detail}</span>}
      </span>,
    );
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}

function ProfileSection({ section }: { section: SurfaceSection }) {
  return (
    <div className="space-y-2">
      {section.heading && <h4 className="text-sm font-semibold text-ink">{section.heading}</h4>}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-ink/75">
          <TaggedText text={p} />
        </p>
      ))}
      {section.bullets && (
        <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/75">
          {section.bullets.map((b, i) => (
            <li key={i}>
              {b.label && <span className="font-semibold text-ink">{b.label}</span>}
              {b.label ? ": " : ""}
              <TaggedText text={b.text} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SurfacePanel({ activeKey, onClose }: { activeKey: string | null; onClose: () => void }) {
  const open = activeKey !== null;
  // Keeps showing the last-opened surface's content while the panel animates closed,
  // instead of the content vanishing the instant activeKey clears.
  const [profile, setProfile] = useState<SurfaceProfile | null>(null);
  const [syncedKey, setSyncedKey] = useState<string | null>(null);
  if (activeKey !== syncedKey) {
    setSyncedKey(activeKey);
    if (activeKey) setProfile(SURFACE_PROFILES[activeKey] ?? null);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={profile ? `${profile.name} sourcing details` : "Surface sourcing details"}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-lg transform flex-col border-l border-line bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {profile && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-line p-6">
              <div>
                <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">Surface sourcing</div>
                <h3 className="mt-1 font-display text-h2 text-ink">{profile.name}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink/50 transition-colors hover:border-ink/25 hover:bg-paper-2 hover:text-ink"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6 rounded-card border border-line bg-paper-2 p-4">
                <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">How people interact</div>
                <p className="mt-1 mb-3 text-xs leading-relaxed text-ink/45">
                  Where someone encounters this surface, distinct from where its answers are sourced, below. UIs
                  change roughly monthly for the bigger players; treat this as accurate for August 2026, not
                  permanent.
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-ink/75">
                  <div>
                    <span className="font-semibold text-ink">Where it lives: </span>
                    {profile.interaction.whereItLives}
                  </div>
                  <div>
                    <span className="font-semibold text-ink">Search &amp; citations: </span>
                    {profile.interaction.howCitationsShow}
                  </div>
                  {profile.interaction.note && (
                    <div className="border-t border-line pt-3 text-ink/60 italic">{profile.interaction.note}</div>
                  )}
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                {profile.quickFacts.map((f) => (
                  <div key={f.label} className="rounded-card border border-line bg-paper-2 p-3">
                    <div className="text-[0.7rem] font-semibold tracking-wide text-ink/40 uppercase">{f.label}</div>
                    <div className="mt-1 text-xs leading-snug text-ink/75">{f.value}</div>
                  </div>
                ))}
              </div>

              {profile.highlight && (
                <div className="mb-6 rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/75">{profile.highlight}</div>
              )}

              <div className="space-y-6">
                {profile.sections.map((section, i) => (
                  <ProfileSection key={i} section={section} />
                ))}
              </div>

              <div className="mt-8 border-t border-line pt-4">
                <div className="mb-2 text-caption font-semibold tracking-wide text-ink/40 uppercase">Sources</div>
                <ul className="space-y-1 text-xs text-ink/55">
                  {profile.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-2 hover:text-ink"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export function SurfacesExplorer() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {SURFACE_KEYS.map((key) => (
          <SurfaceChip key={key} label={key} onClick={() => setActiveKey(key)} />
        ))}
        <TooltipChip
          label="+ Emerging Embedded AI Experiences"
          tooltip="Things like The Terminal. AI Search shows up anywhere an LLM is being used under the hood, not just in a dedicated chat surface, and there are plenty of other places beyond this list."
        />
      </div>

      <SurfacePanel activeKey={activeKey} onClose={() => setActiveKey(null)} />
    </>
  );
}
