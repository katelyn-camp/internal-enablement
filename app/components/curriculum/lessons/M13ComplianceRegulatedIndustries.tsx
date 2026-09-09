import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M13_COMPLIANCE_REGULATED_INDUSTRIES_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-this-discipline-exists", label: "Why This Discipline Exists" },
  { id: "the-boundary", label: "The Boundary: Draft and Flag, Never Approve" },
  { id: "ymyl", label: "YMYL: The Connecting Thread" },
  { id: "what-differs-by-vertical", label: "What Actually Differs by Vertical" },
  { id: "cross-vertical-red-flags", label: "Cross-Vertical Red Flags" },
  { id: "data-handling", label: "Data Handling Is a Separate Problem" },
  { id: "planning-production-velocity", label: "Planning Production Velocity Around Review" },
  { id: "the-checklist", label: "Before Content Ships for a Regulated Account" },
];

interface VerticalRule {
  vertical: string;
  framework: string;
  whatItRequires: string;
  productionImpact: string;
}

const VERTICAL_RULES: VerticalRule[] = [
  {
    vertical: "Fintech / financial services",
    framework: "FINRA Rule 2210 (broker-dealers); SEC Marketing Rule 206(4)-1 (investment advisers)",
    whatItRequires:
      "Rule 2210 requires principal pre-approval before most retail communications go out, and prohibits false, exaggerated, or misleading claims. The SEC Marketing Rule separately restricts testimonials and endorsements unless specific disclosures are met, and imposes strict rules on how performance numbers can be presented.",
    productionImpact:
      "Retail-facing content, comparison pages, anything with a performance claim, needs compliance pre-approval before it can publish. There's no universal turnaround time industry-wide, build in a review buffer rather than assuming same-day approval.",
  },
  {
    vertical: "Healthcare / health-adjacent",
    framework: "FTC health-claim substantiation standard",
    whatItRequires:
      "The FTC requires \"competent and reliable scientific evidence\" behind any health or efficacy claim, and has repeatedly enforced this against telehealth and wellness marketers.",
    productionImpact:
      "Every specific health or efficacy claim needs a real source behind it before it ships, not just a plausible-sounding statement. HIPAA is a separate concern, covered next, don't conflate the two.",
  },
  {
    vertical: "Insurance",
    framework: "NAIC model advertising regulations, adopted (and varied) state by state",
    whatItRequires:
      "Many states require insurance advertising, especially for life and annuity products, to be pre-filed or pre-cleared with the state insurance department before use. Some states are \"file and use,\" others require approval before anything can run.",
    productionImpact:
      "The review timeline isn't one number, it depends on which states the client operates in and which product line the content covers. A national campaign can be gated by its slowest state.",
  },
];

interface RedFlag {
  flag: string;
  whyItMatters: string;
}

const RED_FLAGS: RedFlag[] = [
  {
    flag: "Guaranteed-outcome language",
    whyItMatters: "\"Guaranteed returns,\" \"guaranteed approval,\" \"cured,\" near-universal red flags across all three verticals. Removal or heavy qualification is the default expectation, not an edge case.",
  },
  {
    flag: "Testimonials and before/after claims",
    whyItMatters: "Each vertical has its own disclosure or prohibition rule (FINRA/SEC for finance, FTC endorsement guidance for health, NAIC-adopted state rules for insurance), but the pattern is the same: a testimonial or a before/after claim is never a plain drop-in without a compliance check.",
  },
  {
    flag: "Superlative claims (\"best,\" \"#1,\" \"safest\")",
    whyItMatters: "Treated as a claim requiring substantiation on file, not as ordinary marketing puffery, in any of these three verticals.",
  },
];

interface DataHandlingRow {
  trigger: string;
  whatsRequired: string;
  defaultAbsentConfirmation: string;
}

const DATA_HANDLING: DataHandlingRow[] = [
  {
    trigger: "Client is a HIPAA covered entity or AirOps would become a business associate by touching PHI",
    whatsRequired: "A signed Business Associate Agreement (BAA) has to exist before any protected health information can be shared, processed, or used, this is a binding legal contract, not a checkbox, and it's negotiated by the client's legal team.",
    defaultAbsentConfirmation: "Treat any client-supplied healthcare data, real customer records, call transcripts, case-study detail, as off-limits for workflow ingestion until a BAA is confirmed in place.",
  },
  {
    trigger: "Client is a financial institution handling nonpublic personal information (NPI)",
    whatsRequired: "GLBA's Safeguards Rule imposes data-security program requirements on that information at the institution level.",
    defaultAbsentConfirmation: "Customer financial data, account details, transaction records, isn't something to ingest into a workflow without the client's data-security team confirming it's permitted.",
  },
];

interface ChecklistItem {
  check: string;
  why: string;
}

const CHECKLIST: ChecklistItem[] = [
  { check: "Content is risk-tiered before it's scheduled", why: "Evergreen, definitional content moves faster than anything making a specific claim, performance, efficacy, or a guarantee; scheduling both at the same speed is how a launch date slips." },
  { check: "Every specific claim has a source on file", why: "A claim without a backing source is the first thing a compliance reviewer, or a regulator, will flag." },
  { check: "No guaranteed-outcome, testimonial, or superlative claim ships without a compliance check", why: "These three patterns are red flags across fintech, healthcare, and insurance alike, never a plain drop-in." },
  { check: "Review buffer is built into the content calendar, not assumed away", why: "Turnaround varies by firm, by state, and by product line; a calendar built on same-day approval is a calendar that slips." },
  { check: "No client-supplied regulated data touches a workflow without confirmed authorization", why: "A BAA (healthcare) or a data-security team's sign-off (financial) has to exist first; absent that, the data stays out of the workflow entirely." },
  { check: "Nothing is represented as \"compliant\" or \"approved\" by AirOps", why: "AirOps drafts and flags; the client's legal or compliance function is the only one with the authority to approve." },
];

export function M13ComplianceRegulatedIndustries() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m13-compliance-regulated-industries"
            title="Compliance & Regulated Industries"
            questions={M13_COMPLIANCE_REGULATED_INDUSTRIES_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-this-discipline-exists">
        <SectionHeading>Why This Discipline Exists</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Fintech, healthcare, and insurance accounts run content production through a gate none of the other
          modules in this curriculum assume: the client&rsquo;s own legal or compliance function. This module is scoped
          to those three verticals specifically, not regulated industries in general, and it&rsquo;s general
          operating awareness, not legal advice. It exists so you can plan a realistic production timeline and spot
          the recurring red flags, not so you can make a compliance determination yourself.
        </p>
      </section>

      <section id="the-boundary">
        <SectionHeading>The Boundary: Draft and Flag, Never Approve</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          One principle sits underneath everything else in this module: AirOps drafts content and flags known risk
          areas. The client&rsquo;s internal legal or compliance function is the only party with the authority to
          approve it. Never represent a piece of content as &ldquo;compliant&rdquo; or &ldquo;pre-cleared&rdquo;,
          that determination isn&rsquo;t AirOps&rsquo; to make, and claiming otherwise creates real liability with
          no actual authority behind it.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          This mirrors the fail-closed evidence discipline from Prompt &amp; Taxonomy Strategy: nothing is approved
          by default there either, a human with the actual authority to approve has to sign off before something
          ships. Here, that human sits inside the client&rsquo;s organization, not AirOps&rsquo;.
        </p>
      </section>

      <section id="ymyl">
        <SectionHeading>YMYL: The Connecting Thread</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Google&rsquo;s Search Quality Rater Guidelines define &ldquo;Your Money or Your Life&rdquo; (YMYL) content
          as anything that could affect a person&rsquo;s health, financial stability, or safety, financial topics
          like investing and loans, medical topics, and other high-stakes decisions. YMYL content gets the
          strictest E-E-A-T (Experience, Expertise, Authoritativeness, Trust) standard Google&rsquo;s raters apply,
          because inaccurate content in these categories can cause real harm.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            How confident is the AI-citation parallel
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Genuinely thin. Nobody has published a YMYL-specific policy for AI Overviews or chatbot answers. What
            exists is indirect: AI Overviews reportedly build on Google&rsquo;s core quality systems, and AI answers
            do appear more cautious, more hedged, more disclaimer-heavy, on medical and financial queries. But
            that&rsquo;s practitioner pattern-matching, not a documented mechanism. Treat it as a reasonable working
            assumption
            for content strategy, the same categories face heightened scrutiny across both classic search and AI
            answers, not as an established fact.
          </p>
        </div>
      </section>

      <section id="what-differs-by-vertical">
        <SectionHeading>What Actually Differs by Vertical</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Three named frameworks apply to the three verticals this module covers, and each changes production
          timelines differently.
        </p>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Vertical</th>
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Framework</th>
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What it requires</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Production impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {VERTICAL_RULES.map((v) => (
                <tr key={v.vertical}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{v.vertical}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{v.framework}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{v.whatItRequires}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{v.productionImpact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-card border border-line bg-paper-2 p-4">
          <span className="mb-2 inline-flex items-center rounded-full border border-line px-3 py-1 text-caption font-medium tracking-wide text-ink/60 uppercase">
            A common conflation, worth separating out
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            HIPAA does not regulate marketing claims or ad copy. It&rsquo;s a data-privacy and security law governing
            protected health information (PHI). The FTC&rsquo;s health-claim substantiation standard is what governs
            whether a health or efficacy claim in content is defensible. These are two separate concerns, one
            about what a claim says, one about how data gets handled, covered next, and treating them as the same
            thing is a mistake worth catching early.
          </p>
        </div>
      </section>

      <section id="cross-vertical-red-flags">
        <SectionHeading>Cross-Vertical Red Flags</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Three patterns recur across all three verticals regardless of which specific framework applies.
        </p>
        <div className="space-y-4">
          {RED_FLAGS.map((r) => (
            <div key={r.flag} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 text-sm font-medium text-ink">{r.flag}</div>
              <p className="text-sm leading-relaxed text-ink/80">{r.whyItMatters}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="data-handling">
        <SectionHeading>Data Handling Is a Separate Problem</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Whether a claim is defensible and whether AirOps is even allowed to touch a piece of client data are two
          different questions. The second one has its own gate.
        </p>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[780px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Trigger</th>
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What&rsquo;s required</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Default absent confirmation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {DATA_HANDLING.map((d) => (
                <tr key={d.trigger}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{d.trigger}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{d.whatsRequired}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{d.defaultAbsentConfirmation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Neither of these is something a delivery team self-certifies. The pattern in both cases is the same:
          confirm the agreement or authorization exists before the data touches a workflow, the same fail-closed
          principle that governs evidence handling elsewhere in this curriculum, applied here to data access
          instead of content approval.
        </p>
      </section>

      <section id="planning-production-velocity">
        <SectionHeading>Planning Production Velocity Around Review</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Two practices keep a regulated account&rsquo;s content calendar realistic instead of aspirational.
        </p>
        <ul className="list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Risk-tier the content before scheduling it.</span> Evergreen,
            definitional content, the kind that makes no specific claim, moves through review faster than anything
            with a performance number, an efficacy claim, or a guarantee. Scheduling both at the same speed is what
            makes a launch date slip.
          </li>
          <li>
            <span className="font-medium text-ink">Build a review buffer in, don&rsquo;t assume it away.</span>
            There&rsquo;s no universal turnaround time. It depends on the firm&rsquo;s internal compliance queue, which states a
            product runs in, and whether a state requires pre-clearance before use or allows file-and-use after the
            fact. A national campaign is only as fast as its slowest state.
          </li>
        </ul>
      </section>

      <section id="the-checklist">
        <SectionHeading>Before Content Ships for a Regulated Account</SectionHeading>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Check</th>
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
