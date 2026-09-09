import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M11_EXTERNAL_CONTENT_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-this-discipline-exists", label: "Why This Discipline Exists" },
  { id: "what-counts-as-external-content", label: "What Counts as External Content Now" },
  { id: "mentions-not-links", label: "Mentions, Not Links" },
  { id: "why-this-gets-outsourced", label: "Why This Gets Outsourced" },
  { id: "the-two-tracks", label: "The Two Tracks: Building and Correction" },
  { id: "deciding-when-to-prioritize", label: "Deciding When to Prioritize This" },
  { id: "scoping-the-work", label: "Scoping the Work: the Citation-Gap Analysis" },
  { id: "the-checklist", label: "Before You Scope a Placement" },
];

interface ScopeRow {
  category: string;
  whatItIs: string;
  inScope: boolean;
}

const SCOPE_ROWS: ScopeRow[] = [
  {
    category: "Listicles",
    whatItIs: "\"Best X for Y\" roundups naming multiple vendors side by side. The single largest source of third-party brand mentions.",
    inScope: true,
  },
  {
    category: "Third-party comparison content",
    whatItIs: "A publisher's own \"X vs. Y\" or \"X alternatives\" piece, already cited for a tracked comparison-stage prompt. Not the client's own comparison page, that's Competitive Positioning & Comparison Diagnostics.",
    inScope: true,
  },
  {
    category: "Review roundups and aggregator pages",
    whatItIs: "Editorial pages summarizing the category's options, distinct from a single user review on a review site.",
    inScope: true,
  },
  {
    category: "Community (Reddit, forums, review-site threads)",
    whatItIs: "Its own channel, with its own mechanics, participation and seeding, not placement inside an existing article.",
    inScope: false,
  },
  {
    category: "PR / press coverage",
    whatItIs: "A separate function aimed at announcements and press relationships. This work sometimes coordinates with a client's PR team, but a press hit is not the same job as a placement inside an already-cited article.",
    inScope: false,
  },
];

interface MentionFact {
  oldAssumption: string;
  whatActuallyMatters: string;
}

const MENTION_FACTS: MentionFact[] = [
  {
    oldAssumption: "The placement needs a backlink to count.",
    whatActuallyMatters: "Nofollow links are nearly as predictive of citation as dofollow links (0.509 vs. 0.504 correlation), so link \"authority\" in the classic SEO sense barely applies here. A mention with no link can carry the same weight as one with a link.",
  },
  {
    oldAssumption: "The placement needs to be on a high-domain-authority site.",
    whatActuallyMatters: "Domain authority barely moves the needle: always-cited pages average DA 53.0 vs. 55.7 for never-cited pages, essentially a wash, and 63.6% of citations go to sites in the DA 20–80 \"middle,\" not just top-tier domains.",
  },
  {
    oldAssumption: "One strong placement is the goal.",
    whatActuallyMatters: "A single mention with real supporting information matters, but a consistent, accurate message repeated across the articles already being cited for an account's tracked prompts is what actually compounds.",
  },
];

interface Track {
  name: string;
  whatTriggersIt: string;
  whatTheWorkLooksLike: string;
  example: string;
}

const TRACKS: Track[] = [
  {
    name: "Mention building",
    whatTriggersIt: "An article is already being cited for a prompt the account tracks, and the client isn't named in it at all.",
    whatTheWorkLooksLike: "Identify the article, reach out to the publisher or author, and make the case (sometimes with supplied copy, sometimes paid) for adding the client alongside whoever's already named.",
    example: "A \"Best Payroll Software for Small Business\" roundup is cited for three of the account's tracked prompts and lists four competitors, none of them the client.",
  },
  {
    name: "Mention correction",
    whatTriggersIt: "The client is already named in a cited article, but the mention is unfavorable, inaccurate, or off-message.",
    whatTheWorkLooksLike: "Identify exactly what's wrong, no feature the client actually has, an outdated claim, an unfavorable framing, and work with the publisher to correct the specific line, not to relitigate the whole piece.",
    example: "A comparison roundup states the client doesn't support single sign-on, when the client added it two quarters ago.",
  },
];

interface GapAnalysisStep {
  step: string;
  whatYouDo: string;
}

const GAP_ANALYSIS_STEPS: GapAnalysisStep[] = [
  {
    step: "Start from the tracked prompt portfolio",
    whatYouDo: "Use the account's existing Topic and Prompt structure from Prompt & Taxonomy Strategy as the starting point, not a fresh brainstorm of \"places we should be mentioned.\"",
  },
  {
    step: "Pull what's actually cited for those prompts today",
    whatYouDo: "For each tracked prompt, or each cluster of related prompts, identify the specific articles currently being cited in answers.",
  },
  {
    step: "Check the client's status in each one",
    whatYouDo: "For every cited article: not mentioned, mentioned favorably and accurately, or mentioned unfavorably or inaccurately.",
  },
  {
    step: "Sort into the two tracks",
    whatYouDo: "Not mentioned becomes a mention-building target. Mentioned unfavorably or inaccurately becomes a mention-correction target.",
  },
  {
    step: "Prioritize",
    whatYouDo: "Weigh prompt volume, funnel stage, and how consistently each article keeps showing up across repeated runs, not just whether it appeared once.",
  },
];

interface ChecklistItem {
  check: string;
  why: string;
}

const CHECKLIST: ChecklistItem[] = [
  { check: "Article is already cited for a tracked prompt", why: "This is what makes it a citation-gap target instead of a general outreach wish list." },
  { check: "No backlink required", why: "A mention without a link can carry nearly the same weight as one with a link." },
  { check: "Domain authority isn't a disqualifier", why: "DA barely correlates with citation; a mid-tier site already being cited beats a high-DA site that isn't." },
  { check: "The message is specific, not a bare name-drop", why: "Real supporting information, a feature, a use case, a differentiator, is what makes a mention actually informative." },
  { check: "The message is accurate and current", why: "The whole point of mention correction is fixing exactly this kind of gap; a new placement shouldn't create one." },
  { check: "The message stays consistent with other placements", why: "A consistent message across the articles already being cited for an account is what compounds, not one strong isolated hit." },
  { check: "Track is identified: building or correction", why: "The two need different outreach and a different pitch to the publisher." },
];

export function M11ExternalContentPlacementExecution() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m11-external-content"
            title="External Content & Third-Party Placement Execution"
            questions={M11_EXTERNAL_CONTENT_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-this-discipline-exists">
        <SectionHeading>Why This Discipline Exists</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Most of what an AI platform says about a brand, it learned somewhere other than that brand&rsquo;s own
          site. 85% of brand mentions in AI answers come from third-party domains, and a brand is 6.5x more likely to
          be mentioned via a third party than via its own domain. Nearly 90% of those third-party mentions come from
          listicles, comparison pages, and reviews, and the brand is named among the first three companies in that
          content roughly 80% of the time.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Owned-content work, refreshing and optimizing what a client publishes on their own site, addresses the
          minority of what actually decides AI visibility. This module is the execution discipline for the
          majority: getting the client named, accurately, in the third-party articles AI platforms are already
          citing.
        </p>
      </section>

      <section id="what-counts-as-external-content">
        <SectionHeading>What Counts as External Content Now</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          External Content is its own channel, distinct from Owned Content, Paid, Social &amp; Influencer, and
          Community. It used to be called Offsite, and that older name covered almost anything not on the brand&rsquo;s
          own domain. The scope is narrower now.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Category</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it is</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">In scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SCOPE_ROWS.map((r) => (
                <tr key={r.category}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{r.category}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{r.whatItIs}</td>
                  <td className="px-3 py-3 align-top font-medium text-ink">{r.inScope ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The distinction matters for handoffs: a citation-gap finding that points to a Reddit thread belongs in
          Community&rsquo;s seeding motion, not here, and a citation-gap finding that points to a press announcement
          belongs with PR, not here.
        </p>
      </section>

      <section id="mentions-not-links">
        <SectionHeading>Mentions, Not Links</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Classic offsite SEO ran on two assumptions: a placement needs a backlink, and the backlink needs to come
          from a high-domain-authority site. Neither holds up for AI citation.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Old assumption</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What actually matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {MENTION_FACTS.map((m) => (
                <tr key={m.oldAssumption}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{m.oldAssumption}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{m.whatActuallyMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          What replaces both assumptions is simpler to say and harder to execute: the article has to already be one
          AI platforms are citing for the prompts this account tracks, and the client&rsquo;s mention inside it needs
          real, specific supporting information, a feature, a use case, a differentiator, not a bare name-drop.
        </p>
      </section>

      <section id="why-this-gets-outsourced">
        <SectionHeading>Why This Gets Outsourced</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          There&rsquo;s no self-serve tool that replaces this work. Finding the right article means starting from
          the account&rsquo;s tracked prompts, not a generic search. Getting a placement or a correction means
          reaching an actual publisher or author, and making a case they&rsquo;ll act on, sometimes with supplied
          copy, sometimes for a fee. None of that happens inside a client&rsquo;s own CMS, and none of it is a
          one-time project; cited articles get revised, and a correction made once can drift again.
        </p>
      </section>

      <section id="the-two-tracks">
        <SectionHeading>The Two Tracks: Building and Correction</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every citation-gap finding sorts into one of two tracks, and they call for different outreach.
        </p>
        <div className="space-y-4">
          {TRACKS.map((t) => (
            <div key={t.name} className="rounded-card border border-line bg-white p-5">
              <div className="mb-2 text-sm font-medium text-ink">{t.name}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">What triggers it: </span>
                {t.whatTriggersIt}
              </p>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">What the work looks like: </span>
                {t.whatTheWorkLooksLike}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-medium text-ink/50 uppercase tracking-wide text-[0.65rem]">Example: </span>
                {t.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="deciding-when-to-prioritize">
        <SectionHeading>Deciding When to Prioritize This</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Owned-content work is the default reflex, because it&rsquo;s the client&rsquo;s own site and it&rsquo;s
          what Google&rsquo;s ranking, and by extension Google AI Overviews, which draw directly from Google&rsquo;s
          own index, rewards most directly. But a chatbot like ChatGPT or Perplexity pulls far more heavily from
          third-party sources regardless of how well the client ranks on Google, which is exactly what the 85% figure
          above means in practice: a client can have flawless owned content and still be invisible in those answers
          if the third-party articles being cited never name them.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          These aren&rsquo;t sequential alternatives, one doesn&rsquo;t wait for the other to finish. But an account
          with a reasonably solid owned-content foundation already in place is a better candidate to prioritize
          External Content sooner. The citation-gap analysis below is what actually answers the question for a
          specific account: whether the largest remaining gap sits on the client&rsquo;s own site or in the
          third-party articles already being cited around it.
        </p>
      </section>

      <section id="scoping-the-work">
        <SectionHeading>Scoping the Work: the Citation-Gap Analysis</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Five steps turn &ldquo;we should get more mentions&rdquo; into a scoped list of specific targets.
        </p>
        <ol className="list-outside list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/80">
          {GAP_ANALYSIS_STEPS.map((s) => (
            <li key={s.step}>
              <span className="font-medium text-ink">{s.step}.</span> {s.whatYouDo}
            </li>
          ))}
        </ol>
      </section>

      <section id="the-checklist">
        <SectionHeading>Before You Scope a Placement</SectionHeading>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Check</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CHECKLIST.map((c) => (
                <tr key={c.check}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{c.check}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
