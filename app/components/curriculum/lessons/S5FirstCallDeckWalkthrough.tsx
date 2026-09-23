"use client";

import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { LoomSubmissionForm } from "./LoomSubmissionForm";

const DECK_ID = "1XYNPJtAX7C0OCJ0y80DXXIXLhFj-cO-Rfv8ypv5q7Xw";
const DECK_SLIDE_ID = "g3faa6d7d92e_36_90";
const DECK_URL = `https://docs.google.com/presentation/d/${DECK_ID}/edit?slide=id.${DECK_SLIDE_ID}#slide=id.${DECK_SLIDE_ID}`;
const DECK_EMBED_URL = `https://docs.google.com/presentation/d/${DECK_ID}/embed?start=false&loop=false&delayms=60000`;

const OUTLINE = [
  { id: "deck-viewer", label: "Walk the Deck" },
  { id: "submit-practice", label: "Submit a Practice Loom" },
];

export function S5FirstCallDeckWalkthrough() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="deck-viewer">
        <SectionHeading>Walk the Deck</SectionHeading>
        <a
          href={DECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-4 py-2 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
        >
          Open the editable First Call deck ↗
        </a>
        <div className="max-w-3xl overflow-hidden rounded-card border border-line">
          <iframe
            src={DECK_EMBED_URL}
            title="AirOps First Call deck"
            className="aspect-[16/9] w-full"
            allowFullScreen
          />
        </div>
        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-ink/50">
          This is the live deck, so it always reflects the latest edits. Use the arrows in the embed to move
          slide to slide, or use the button above to open and copy the real presentation.
        </p>
      </section>

      <section id="submit-practice">
        <SectionHeading>Submit a Practice Loom</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Record yourself delivering the deck out loud, then drop the Loom link below for a peer or manager to
          review before you take it live on a real call.
        </p>
        <LoomSubmissionForm />
      </section>
    </div>
  );
}
