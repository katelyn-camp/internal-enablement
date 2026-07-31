"use client";

import { useState } from "react";

export function PaaItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-2.5 text-left text-sm text-ink/85"
      >
        {question}
        <span className={`shrink-0 text-ink/40 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          ⌄
        </span>
      </button>
      {open && <p className="pb-3 text-sm text-ink/65">{answer}</p>}
    </div>
  );
}
