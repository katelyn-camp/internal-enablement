import Link from "next/link";
import { Audience } from "@/lib/curriculum";

const OPTIONS: { audience: Audience; label: string; href: string }[] = [
  { audience: "em-sa", label: "Managed Services", href: "/em-sa" },
  { audience: "sales", label: "Sales", href: "/sales" },
];

/**
 * Lets anyone jump between the Managed Services and Sales curricula.
 * Pre-auth this is open to everyone; once Google sign-in routes each
 * person straight to their own side, this becomes the admin-only preview
 * control.
 */
export function AudienceSwitcher({ audience, onNavigate }: { audience: Audience; onNavigate?: () => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-paper-2 p-0.5">
      {OPTIONS.map((opt) => (
        <Link
          key={opt.audience}
          href={opt.href}
          onClick={onNavigate}
          aria-current={audience === opt.audience ? "page" : undefined}
          className={`rounded-full px-3 py-1 text-caption font-semibold tracking-wide uppercase transition-colors ${
            audience === opt.audience ? "bg-ink text-paper" : "text-ink/55 hover:text-ink"
          }`}
        >
          {opt.label}
        </Link>
      ))}
    </div>
  );
}
