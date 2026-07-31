"use client";

import { useState } from "react";
import { GlossaryTerm } from "@/lib/glossary";
import { ContentPendingTag } from "@/app/components/ContentPendingTag";

interface GlossaryEntryProps {
  term: GlossaryTerm;
  highlighted: boolean;
  onExpand: (id: string) => void;
}

export function GlossaryEntry({ term, highlighted, onExpand }: GlossaryEntryProps) {
  const [open, setOpen] = useState(highlighted);

  return (
    <div
      id={term.id}
      className={`rounded-card border bg-white p-4 transition-colors ${
        highlighted ? "border-signal" : "border-line"
      }`}
    >
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="text-base font-medium text-ink">{term.term}</h3>
        {term.contentPending && <ContentPendingTag />}
      </div>
      <p className="text-sm leading-relaxed text-ink/75">{term.shortDefinition}</p>

      {term.longDefinition && (
        <div className="mt-2">
          {open ? (
            <div>
              <p className="text-sm leading-relaxed text-ink/70">{term.longDefinition}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-2 text-caption font-medium text-forest hover:underline"
              >
                Show less
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                onExpand(term.id);
              }}
              className="text-caption font-medium text-forest hover:underline"
            >
              Tell me more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
