import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M6_MANAGED_SERVICES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "the-three-moves", label: "The Three Moves" },
  { id: "cannibalization-audit", label: "Running a Cannibalization Audit" },
  { id: "dies-unlinked", label: "Why Net-New Content Dies Unlinked" },
  { id: "making-the-call", label: "Making the Call" },
];

interface MoveRow {
  move: string;
  useWhen: string;
  risk: string;
}

const THREE_MOVES: MoveRow[] = [
  {
    move: "Refresh",
    useWhen:
      "A URL already has value, some rank, some links, some traffic, but is stale, thin, misaligned with current intent, or missing structure AI engines can extract.",
    risk:
      "Treating it as a cosmetic polish pass instead of a relevance reset. Updating a date without fixing the actual gap doesn't move anything.",
  },
  {
    move: "Net-new",
    useWhen:
      "A genuine intent or topic gap exists, no existing page covers it, even loosely, and the opportunity is large enough to justify starting from zero.",
    risk:
      "Publishing it without a distribution and internal-linking plan. A new URL has no history, no backlinks, and no internal equity by default.",
  },
  {
    move: "Consolidate",
    useWhen:
      "Two or more existing pages target the same intent and are splitting the same signal, organic ranking strength or AI citation credit, between them.",
    risk:
      "Leaving both live because each gets \"some\" credit. Split signal usually loses to a competitor's single, consolidated page even when the combined content is stronger.",
  },
];

export function M6ContentStrategyLifecycle() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m6-managed-services"
            title="Content Strategy, Lifecycle & Production"
            questions={M6_MANAGED_SERVICES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="the-three-moves">
        <SectionHeading>The Three Moves</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every content decision on a managed account reduces to one of three moves: refresh something that exists,
          create something that doesn't, or consolidate two things fighting each other. The default assumption
          should lean toward refresh, not net-new. An existing URL may already carry links, ranking history,
          internal equity, and customer familiarity, letting it decay and starting over from zero is wasteful when
          the fix is cheaper and faster to prove.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Move</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Use when</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Common mistake</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {THREE_MOVES.map((row) => (
                <tr key={row.move}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.move}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.useWhen}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Case proof: refresh beats net-new
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Two real refresh-first results: one team scaled its refresh cadence roughly 5x and saw traffic gains
            within days of publishing the updates, no new URLs involved. Another team focused specifically on
            refresh workflows over net-new production and posted double-digit percentage lifts in organic traffic,
            signups, and AI visibility in the same period.
          </p>
        </div>
      </section>

      <section id="cannibalization-audit">
        <SectionHeading>Running a Cannibalization Audit</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Cannibalization is two or more URLs targeting the same intent closely enough that they split, rather than
          combine, the same signal. It shows up in both layers now: two pages splitting organic ranking strength,
          or two pages both weakly cited for the same AI answer instead of one page cited strongly.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            A real example
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            An account's decade-old blog post and its newer core resource article both targeted the identical
            "payroll deductions" intent. Both showed up in AI Overviews for the same query, splitting citation
            credit across two URLs instead of concentrating it on one. The fix wasn't new content: a 301 redirect
            from the weaker page into the stronger one, done. No writing, no approvals, just subtraction. A
            separate account found the same pattern in reverse, two comparable pages competing for "cover letter
            for a manager"-type intent, resolved by merging the stronger sections of both into one consolidated
            guide and redirecting the weaker page.
          </p>
        </div>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Map every page to its primary target intent.</span> Pull the top
            queries each page ranks for (GSC) and the prompts each page gets cited for, not just its assigned
            keyword.
          </li>
          <li>
            <span className="font-medium text-ink">Flag pages sharing a primary intent.</span> Two pages ranking or
            getting cited for the same core question, within a similar position range, are candidates, not two
            pages that merely live in the same folder or share a topic tag.
          </li>
          <li>
            <span className="font-medium text-ink">Decide merge vs. differentiate.</span> If both pages genuinely
            answer the same question the same way, merge and redirect. If they can be repositioned to answer
            distinct sub-intents (e.g. one commercial, one educational), differentiate instead of merging, that's a
            content-strategy call, not an automatic redirect.
          </li>
          <li>
            <span className="font-medium text-ink">Consolidate signal, don't just delete.</span> A 301 redirect from
            the weaker URL to the stronger one preserves whatever link equity the weaker page had, rather than
            losing it outright.
          </li>
        </ol>
      </section>

      <section id="dies-unlinked">
        <SectionHeading>Why Net-New Content Dies Unlinked</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A brand-new URL starts with nothing: no backlinks, no ranking history, and critically, no internal links
          pointing to it from anywhere else on the site. Left alone, a new page is effectively orphaned, harder for
          crawlers to discover, disconnected from whatever topical authority the rest of the site has already
          earned, and invisible to the internal signals that would otherwise vouch for it.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The practice this implies
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Before building anything net-new, audit the existing content library for pages that already touch the
            new topic, even loosely, and link to them. One real engagement's first move on a 578-page library
            wasn't a single new page: it was scanning the existing catalog for content adjacent to the target gap
            and adding those as internal links to the hub while the formal new page was still being built. Every
            new page should launch with links already pointing to it from relevant existing pages, ideally
            including some of the site's stronger, already-ranking pages, not left to be discovered on its own.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This is also why a strong keyword and a well-written page aren't sufficient on their own. A page can be
          exactly what a query needs and still underperform for months if it sits at the end of zero internal
          links, waiting to be found.
        </p>
      </section>

      <section id="making-the-call">
        <SectionHeading>Making the Call</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Faced with a real content decision on an account, work the call in this order rather than defaulting to
          "write something new."
        </p>
        <ol className="mb-6 max-w-2xl list-outside list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Check for cannibalization first.</span> If two existing pages are
            already splitting the same intent, resolve that before anything else, it's usually the fastest, lowest-
            risk win available and it's pure subtraction.
          </li>
          <li>
            <span className="font-medium text-ink">Check whether an existing page can be refreshed.</span> If a page
            already ranks, is cited, or has any real history against the target intent, refresh before creating,
            it starts from a head start net-new can't match.
          </li>
          <li>
            <span className="font-medium text-ink">Confirm it's a genuine gap before creating.</span> Net-new is
            justified only when no existing page covers the intent even loosely, not merely when no page covers it
            perfectly.
          </li>
          <li>
            <span className="font-medium text-ink">Plan the internal links before publishing.</span> Identify which
            existing pages, especially strong, already-ranking ones, will link to the new page at launch. If that
            list is empty, the page isn't ready to publish yet.
          </li>
        </ol>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The bar for this module
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Given any real content situation, refresh, net-new, or consolidate, be able to name which move it is and
            defend why, run a cannibalization check without being told to, and catch a net-new plan that has no
            internal-linking plan attached to it before it ships.
          </p>
        </div>
      </section>
    </div>
  );
}
