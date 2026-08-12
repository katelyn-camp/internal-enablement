"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useProgress } from "@/lib/progress/useProgress";
import { KnowledgeCheckQuestion } from "./lessons/knowledge-check-data";

const subscribeNever = () => () => {};

/** True once hydrated on the client; false during SSR, without a setState-in-effect. */
function useMounted(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}

function ChoiceQuestion({
  question,
  index,
  revealed,
  selected,
  onSelect,
}: {
  question: KnowledgeCheckQuestion;
  index: number;
  revealed: boolean;
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink">
        {index}. {question.prompt}
      </p>
      <div className="space-y-1.5">
        {question.options!.map((opt, i) => {
          const isSelected = selected === i;
          let stateClasses = isSelected ? "border-ink bg-paper-2" : "border-line hover:border-ink/30";
          if (revealed && opt.correct) stateClasses = "border-forest bg-forest/5";
          else if (revealed && isSelected) stateClasses = "border-line bg-paper-2 opacity-70";
          else if (revealed) stateClasses = "border-line opacity-50";

          return (
            <button
              key={opt.label}
              type="button"
              disabled={revealed}
              onClick={() => onSelect(i)}
              className={`flex w-full items-center justify-between gap-3 rounded-card border px-3 py-2 text-left text-sm text-ink transition-colors ${stateClasses}`}
            >
              <span>{opt.label}</span>
              {revealed && opt.correct && (
                <span className="shrink-0 rounded-full bg-forest px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-signal uppercase">
                  Correct
                </span>
              )}
              {revealed && isSelected && !opt.correct && (
                <span className="shrink-0 text-[0.65rem] font-semibold tracking-wide text-ink/40 uppercase">Not quite</span>
              )}
            </button>
          );
        })}
      </div>
      {revealed && question.explanation && <p className="mt-2 text-xs leading-relaxed text-ink/60">{question.explanation}</p>}
    </div>
  );
}

function FreeResponseQuestion({
  question,
  index,
  revealed,
  value,
  onChange,
}: {
  question: KnowledgeCheckQuestion;
  index: number;
  revealed: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink">
        {index}. {question.prompt}
      </p>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={revealed}
        placeholder="Type your answer..."
        className="w-full rounded-card border border-line bg-paper-2 p-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-forest focus:outline-none disabled:opacity-70"
      />
      {revealed && (
        <div className="mt-2 rounded-card border border-line bg-paper-2 p-3">
          <div className="mb-1 text-[0.65rem] font-semibold tracking-wide text-ink/45 uppercase">Model answer</div>
          <p className="text-xs leading-relaxed text-ink/70">{question.modelAnswer}</p>
        </div>
      )}
    </div>
  );
}

function KnowledgeCheckModal({
  id,
  title,
  questions,
  open,
  onClose,
}: {
  id: string;
  title: string;
  questions: KnowledgeCheckQuestion[];
  open: boolean;
  onClose: () => void;
}) {
  const mounted = useMounted();
  const { submitKnowledgeCheck } = useProgress();
  const [submitted, setSubmitted] = useState(false);
  const [choiceAnswers, setChoiceAnswers] = useState<Record<number, number>>({});
  const [freeTextAnswers, setFreeTextAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const allAnswered = questions.every((q, i) =>
    q.kind === "free-response" ? freeTextAnswers[i]?.trim() : choiceAnswers[i] !== undefined,
  );

  function handleSubmit() {
    const answers = questions.map((q, i) => (q.kind === "free-response" ? (freeTextAnswers[i] ?? "") : (choiceAnswers[i] ?? -1)));
    setSubmitted(true);
    submitKnowledgeCheck(id, answers);
  }

  // Rendered into document.body directly: a sticky/fixed ancestor (the module title bar,
  // section headings) would otherwise cap this modal's z-index inside its own stacking
  // context, no matter how high z-50 looks on paper.
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 transition-opacity duration-200 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Knowledge check"
        className={`flex max-h-[85vh] w-full max-w-2xl flex-col rounded-card border border-line bg-white text-left shadow-2xl transition-transform duration-200 ${
          open ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-5">
          <div>
            <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">Knowledge check</div>
            <h3 className="mt-1 font-display text-h3 text-ink">{title}</h3>
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

        <div className="flex-1 space-y-6 overflow-y-auto p-5">
          {questions.map((q, i) =>
            q.kind === "free-response" ? (
              <FreeResponseQuestion
                key={i}
                question={q}
                index={i + 1}
                revealed={submitted}
                value={freeTextAnswers[i] ?? ""}
                onChange={(value) => setFreeTextAnswers((prev) => ({ ...prev, [i]: value }))}
              />
            ) : (
              <ChoiceQuestion
                key={i}
                question={q}
                index={i + 1}
                revealed={submitted}
                selected={choiceAnswers[i] ?? null}
                onSelect={(choiceIndex) => setChoiceAnswers((prev) => ({ ...prev, [i]: choiceIndex }))}
              />
            ),
          )}
        </div>

        <div className="border-t border-line p-5">
          {submitted ? (
            <p className="text-center text-sm font-semibold text-forest">Submitted. Answers are marked above.</p>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="w-full rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-signal transition-opacity disabled:opacity-40"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

const DEFAULT_TRIGGER_CLASSES =
  "inline-flex shrink-0 items-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3";

export function KnowledgeCheckButton({
  id,
  title,
  questions,
  className,
}: {
  /** Stable id for progress tracking, e.g. the module slug "m1". */
  id: string;
  title: string;
  questions: KnowledgeCheckQuestion[];
  /** Overrides the default pill styling/positioning, e.g. to fix it above the "On this page" nav. */
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className ?? DEFAULT_TRIGGER_CLASSES}>
        Knowledge Check
      </button>
      <KnowledgeCheckModal id={id} title={title} questions={questions} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
