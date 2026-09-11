"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "submitting" | "sent" | "error";

export function QuestionButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function close() {
    setOpen(false);
    setStatus("idle");
    setQuestion("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          pageUrl: typeof window !== "undefined" ? window.location.href : pathname,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask an anonymous question"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-forest text-white shadow-lg transition hover:opacity-90"
      >
        <span className="font-mono text-body">?</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 sm:items-center">
          <div className="w-full max-w-md rounded-[var(--radius-card)] border border-line bg-paper p-5 shadow-xl">
            {status === "sent" ? (
              <div className="space-y-4">
                <p className="text-body text-ink">Thanks — your question was submitted anonymously.</p>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-[var(--radius-card)] border border-line px-4 py-2 text-caption font-medium text-ink"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-h3 font-display text-ink">Ask a question</h2>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="text-ink-muted hover:text-ink"
                  >
                    ✕
                  </button>
                </div>
                <textarea
                  autoFocus
                  required
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What's your question about this material?"
                  className="w-full resize-none rounded-[var(--radius-card)] border border-line bg-paper-2 p-3 text-body text-ink outline-none focus:border-forest"
                />
                {status === "error" && (
                  <p className="text-caption text-ink-muted">
                    Something went wrong sending your question. Please try again.
                  </p>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-[var(--radius-card)] px-4 py-2 text-caption font-medium text-ink-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "submitting" || !question.trim()}
                    className="rounded-[var(--radius-card)] bg-forest px-4 py-2 text-caption font-medium text-white disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
