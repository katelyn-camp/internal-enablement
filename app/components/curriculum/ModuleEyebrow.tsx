/** Small eyebrow label above a module's title, e.g. "MODULE 3" or "MODULE S1", in place of an inline "M3." code prefix. */
export function ModuleEyebrow({ code }: { code: string }) {
  const label = code.startsWith("M") ? `Module ${code.slice(1)}` : `Module ${code}`;
  return (
    <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 text-caption font-semibold tracking-wide text-paper uppercase">
      {label}
    </span>
  );
}
