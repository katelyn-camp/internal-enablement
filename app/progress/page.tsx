import { ProgressSummaryClient } from "../components/progress/ProgressSummaryClient";

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
      <h1 className="font-display text-h1 lg:text-display mb-4 text-ink">Your progress</h1>
      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        An honest record of what you&rsquo;ve been through, not a score. Useful to skim before a client call, or to
        paste into Slack as light evidence you&rsquo;ve gone through the material.
      </p>
      <div className="mb-10 rounded-card border border-line bg-paper-2 p-4 text-caption leading-relaxed text-ink/60">
        This is stored only in this browser (no login, no account). It won&rsquo;t follow you to another device or
        browser, and there&rsquo;s no way for a manager to see it centrally. If cross-device tracking or
        manager-visible completion ever becomes a real requirement, that needs a proper backend and a lightweight
        auth layer — worth a conversation before building, not something to add silently.
      </div>
      <ProgressSummaryClient />
    </div>
  );
}
