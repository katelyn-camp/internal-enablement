"use client";

import { useState } from "react";

const LOOM_URL_PATTERN = /^https:\/\/(www\.)?loom\.com\/share\/[A-Za-z0-9]+/;

export function LoomSubmissionForm() {
  const [loomUrl, setLoomUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loomValid = LOOM_URL_PATTERN.test(loomUrl.trim());
  const canSubmit = loomValid && !submitting;

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/loom-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loomUrl: loomUrl.trim() }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to save submission");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save submission");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl rounded-card border border-line bg-paper-2 p-4">
        <p className="text-sm font-medium text-forest">Submitted. Your Loom is queued for review.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-3 rounded-card border border-line bg-paper-2 p-4">
      <div>
        <label htmlFor="loom-url" className="mb-1 block text-caption font-medium tracking-wide text-ink/45 uppercase">
          Loom link
        </label>
        <input
          id="loom-url"
          type="url"
          value={loomUrl}
          onChange={(e) => setLoomUrl(e.target.value)}
          placeholder="https://www.loom.com/share/..."
          className="w-full rounded-card border border-line bg-paper p-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-forest focus:outline-none"
        />
      </div>
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="w-full rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-signal transition-opacity disabled:opacity-40"
      >
        {submitting ? "Submitting…" : "Submit for review"}
      </button>
    </div>
  );
}
