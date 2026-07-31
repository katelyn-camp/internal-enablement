"use client";

import { useState } from "react";

interface CopyTextBlockProps {
  text: string;
  label?: string;
  copyLabel?: string;
}

/**
 * The one copy-to-clipboard block used everywhere on the site —
 * Workflows' "prompt to use" and Measurement Storytelling's talk
 * track both render through this, so the interaction only needs to
 * be built (and fixed) once.
 */
export function CopyTextBlock({ text, label = "Example prompt", copyLabel = "Copy prompt" }: CopyTextBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently, text is still selectable.
    }
  }

  return (
    <div className="rounded-card border border-line bg-paper-3">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="text-caption font-medium uppercase tracking-wide text-ink/50">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`rounded-full px-3 py-1 text-caption font-semibold transition-colors ${
            copied ? "bg-forest text-white" : "bg-signal text-ink hover:brightness-95"
          }`}
        >
          {copied ? "Copied!" : copyLabel}
        </button>
      </div>
      <pre className="whitespace-pre-wrap px-4 py-3 font-sans text-sm leading-relaxed text-ink/85">{text}</pre>
    </div>
  );
}
