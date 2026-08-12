import { SectionHeading, FlowArrow, FlowDivider } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "vocabulary", label: "Getting the Vocabulary Right" },
  { id: "ecosystem", label: "The Ecosystem" },
  { id: "enablement-map", label: "The Enablement Map" },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-paper-2 px-3 py-1 text-caption font-medium text-ink/55">
      {children}
    </span>
  );
}

function StatusPill({ status }: { status: "live" | "soon" }) {
  return status === "live" ? (
    <span className="inline-flex items-center rounded-full bg-forest px-2.5 py-0.5 text-caption font-semibold tracking-wide text-signal uppercase">
      Live
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border border-line bg-paper-2 px-2.5 py-0.5 text-caption font-semibold tracking-wide text-ink/45 uppercase">
      Coming soon
    </span>
  );
}

interface ChannelEntry {
  name: string;
  status: "live" | "soon";
  description: string;
  tactics: string[];
  examples: string;
  delivery: string;
}

const CHANNELS: ChannelEntry[] = [
  {
    name: "Owned",
    status: "live",
    description:
      "Formerly “Onsite AEO + SEO Content.” Builds the authoritative owned foundation AI systems can retrieve and cite.",
    tactics: ["Refresh existing content", "Create net-new content", "Optimize content for AI retrieval / citation", "Ongoing publishing"],
    examples: "e.g. product/category pages, editorial, comparison pages, FAQs",
    delivery: "AirOps delivers end-to-end",
  },
  {
    name: "Earned",
    status: "live",
    description:
      "Formerly “Offsite / Third-Party Placements.” Builds authority and visibility on sources AI systems already trust and cite.",
    tactics: ["Identify priority third-party sources", "Secure brand mentions and placements", "Coordinate with PR / affiliate efforts"],
    examples: "e.g. publishers, editorial sites, industry sources, affiliate sites",
    delivery: "AirOps delivers end-to-end",
  },
  {
    name: "Paid",
    status: "soon",
    description: "Formerly “Generative Ads Management.” Captures high-intent demand directly inside AI discovery experiences.",
    tactics: ["Launch and manage generative ad campaigns", "Optimize spend / creative", "Connect paid performance to organic AI visibility"],
    examples: "e.g. ChatGPT ads, Google AI Mode ads, future generative ad inventory · scope still firming up, waitlist only",
    delivery: "AirOps delivers end-to-end (once live)",
  },
  {
    name: "Social & Influencer",
    status: "soon",
    description: "Increases the creator / social signals that influence AI discovery and recommendation.",
    tactics: ["Identify creators / channels", "Recommend investment allocation", "Develop content briefs", "Coordinate execution"],
    examples: "e.g. YouTube, TikTok, Instagram, LinkedIn, creator content",
    delivery: "AirOps owns analytics + strategy · partner network delivers",
  },
  {
    name: "Community",
    status: "soon",
    description: "Shapes presence on highly cited sources of authentic user experience.",
    tactics: ["Map influential conversations", "Identify opportunities", "Recommend seeding / participation", "Brief execution"],
    examples: "e.g. Reddit, forums, review sites, niche communities",
    delivery: "AirOps owns analytics + strategy · partner network delivers",
  },
];

function ChannelCard({ channel }: { channel: ChannelEntry }) {
  return (
    <div className="flex flex-col gap-2 rounded-card border border-line bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-ink">{channel.name}</span>
        <StatusPill status={channel.status} />
      </div>
      <p className="text-xs leading-relaxed text-ink/70">{channel.description}</p>
      <details className="text-xs">
        <summary className="cursor-pointer font-semibold text-forest select-none">Tactics</summary>
        <ul className="mt-2 list-outside list-disc space-y-1 pl-4 leading-relaxed text-ink/70">
          {channel.tactics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </details>
      <p className="text-xs text-ink/45 italic">{channel.examples}</p>
      <p className="border-t border-line pt-2 text-xs text-ink/45">{channel.delivery}</p>
    </div>
  );
}

interface OrchestrationEntry {
  name: string;
  description: string;
}

const ORCHESTRATION: OrchestrationEntry[] = [
  {
    name: "Strategy & Intelligence",
    description:
      "Define the prompt universe, establish the measurement framework, audit current performance, analyze competitors & source influence, recommend the channel mix.",
  },
  {
    name: "Activate",
    description: "Execute across Owned, Earned & Paid directly. Orchestrate Social/Influencer & Community through AirOps strategy, analytics & partners.",
  },
  {
    name: "Measure & Optimize",
    description:
      "Track AI share of voice, citations, brand mentions, placements & campaign performance through to conversion. Continuously reallocate investment.",
  },
];

interface TrackEntry {
  badge: string;
  title: string;
  barLabel: string;
  barPercent?: number;
  body: string | string[];
  artifact: string;
}

const TRACKS: TrackEntry[] = [
  {
    badge: "Adjacent, separately owned",
    title: "Sales Enablement",
    barLabel: "Pitch mechanics, not category depth",
    body: "The discovery-call flow, the deck, the demo. Owned by product marketing / Nick's team, sequenced right alongside category enablement, not part of it.",
    artifact: "Rolls out the same week as Category 101, so reps get language and process together.",
  },
  {
    badge: "Know enough to ask",
    title: "Strategic Account Managers / Sales",
    barLabel: "Depth: hold a credible first call",
    barPercent: 40,
    body: [
      "Pressure-test Strategy 360 output: sanity-check, don't blind-trust it",
      "Match a customer's stated pain to the right channel + proof point",
      "Know the third rails: never promise a #1 ranking; speak in comparable outcomes",
      "Hand off credibly: “great question, let's bring in our AEO strategist”",
    ],
    artifact: "Success bar: ask the next right question, not run the account.",
  },
  {
    badge: "200-level fluency",
    title: "Solution Architects / AEO Delivery",
    barLabel: "Depth: build, diagnose, and know what “wrong” looks like",
    barPercent: 75,
    body: [
      "The 10 SEO/AEO fundamentals: on-page, technical, off-page, prompt/keyword gap, content strategy, AI/search intent, reporting tools, platform literacy, business-context research",
      "3-week ramp: Week 1 vocabulary & fluency → Week 2 manual at-risk-client audit, by hand, no AI tooling → Week 3 inference, client pitch & 90-day roadmap",
    ],
    artifact: "“Earn the right to automate”: understand it manually before trusting the AI-generated version.",
  },
];

function TrackCard({ track }: { track: TrackEntry }) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-line bg-white p-5">
      <span className="text-caption font-semibold tracking-wide text-ink/45 uppercase">{track.badge}</span>
      <h3 className="font-display text-h3 text-ink">{track.title}</h3>
      <div>
        <p className="mb-1.5 text-caption text-ink/45">{track.barLabel}</p>
        {track.barPercent !== undefined && (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-3">
            <div className="h-full rounded-full bg-forest" style={{ width: `${track.barPercent}%` }} />
          </div>
        )}
      </div>
      {Array.isArray(track.body) ? (
        <ul className="list-outside list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink/75">
          {track.body.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed text-ink/75">{track.body}</p>
      )}
      <p className="mt-auto border-t border-line pt-3 text-xs text-ink/45">{track.artifact}</p>
    </div>
  );
}

interface DefinitionEntry {
  term: string;
  definition: string;
}

const DEFINITIONS: DefinitionEntry[] = [
  {
    term: "Category",
    definition: "The overall discovery arena being contested. Not something you run, it's the environment you compete inside.",
  },
  {
    term: "Surface",
    definition:
      "Where the end consumer actually experiences the category, the specific place they look, ask, or scroll. You don't control it, you show up on it.",
  },
  {
    term: "Channel",
    definition:
      "The lever you actually pull to influence what shows up on a surface. A repeatable category of work with its own ownership model and skill set.",
  },
  {
    term: "Tactic",
    definition: "The specific, executable unit of work inside a channel, the thing a person actually does.",
  },
];

interface VocabularyRow {
  level: string;
  search: string;
  aiSearch: string;
}

const VOCABULARY_TABLE: VocabularyRow[] = [
  { level: "Category", search: "Search", aiSearch: "AI Search" },
  {
    level: "Surface",
    search: "Google, Bing, Yahoo",
    aiSearch: "ChatGPT, Gemini, Perplexity, Claude, Google AI Mode / Overviews",
  },
  { level: "Channel", search: "Organic, Paid", aiSearch: "Owned, Earned, Paid, Social & Influencer, Community" },
  {
    level: "Tactic",
    search: "Fix title tags, publish content, build backlinks (Organic) · bid management, ad copy (Paid)",
    aiSearch: "Refresh content, optimize for retrieval (Owned) · secure placements (Earned) · generative ad campaigns (Paid)",
  },
  {
    level: "Goal",
    search: "Rank on page one of Google, drive traffic to your site, and convert once they land.",
    aiSearch:
      "Appear as the recommendation or citation, and influence conversion directly. Traffic is no longer a reliable signal of success, since evaluation increasingly happens inside the AI answer itself, not on your website, the way it always had to in traditional search.",
  },
];

export function M1AISearchLandscape() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="vocabulary">
        <SectionHeading>Getting the Vocabulary Right</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          These four words get used loosely in conversation, but they sit at four different levels, and mixing them
          up is the fastest way to lose credibility on a call. Here&rsquo;s what each one actually means, and how it
          maps to the Search vocabulary our clients already know.
        </p>

        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {DEFINITIONS.map((item) => (
            <li key={item.term} className="rounded-card border border-line bg-paper-2 p-4 text-sm leading-relaxed text-ink/80">
              <span className="font-semibold text-ink">{item.term}:</span> {item.definition}
            </li>
          ))}
        </ul>

        <h3 className="mb-2 font-display text-h3 text-ink">Comparing Categories</h3>
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase"></th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">
                  Search (what you already know)
                </th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">
                  AI Search (the new category)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {VOCABULARY_TABLE.map((row) => (
                <tr key={row.level}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.level}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.search}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.aiSearch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            What changed
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            AI Search used to be a channel. Internally, people talked about it sitting right next to Organic and
            Paid, as if it were just another lever inside the single category of Search. That&rsquo;s not just a
            rename, it&rsquo;s a category promotion: AI Search now has its own surfaces and its own channels
            underneath it, the same way Search always did.
          </p>
        </div>
      </section>

      <section id="ecosystem">
        <SectionHeading>The Ecosystem</SectionHeading>

        <div className="mx-auto max-w-xl rounded-card border border-line bg-white p-6 text-center">
          <div className="font-display text-h3 font-bold tracking-wide text-ink">AI Search</div>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            The discovery environment: how brands win visibility, consideration, and conversion as discovery shifts
            to AI.
          </p>
        </div>
        <FlowArrow />

        <div className="mx-auto max-w-2xl rounded-card border border-dashed border-line p-5 text-center">
          <div className="mb-3 text-caption font-semibold tracking-wide text-ink/45 uppercase">
            Surfaces: where discovery happens
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Chip>ChatGPT</Chip>
            <Chip>Google AI Mode / Overviews</Chip>
            <Chip>Gemini</Chip>
            <Chip>Perplexity</Chip>
            <Chip>Claude</Chip>
            <Chip>+ emerging embedded AI experiences</Chip>
          </div>
        </div>
        <FlowArrow />

        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-caption font-semibold tracking-wide text-ink/45 uppercase">
          <span>Channels: how AirOps influences the surfaces</span>
          <span className="flex items-center gap-3 text-ink/40 normal-case">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              Live
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/25" aria-hidden />
              Coming soon / waitlist
            </span>
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </div>
        <FlowArrow />

        <p className="mb-4 text-center text-caption font-semibold tracking-wide text-ink/45 uppercase">
          AirOps orchestration layer
        </p>
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {ORCHESTRATION.map((item) => (
            <div key={item.name} className="rounded-card border border-line bg-paper-2 p-4 text-center">
              <div className="mb-1.5 text-sm font-semibold text-ink">{item.name}</div>
              <p className="text-xs leading-relaxed text-ink/65">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-line bg-white p-4">
            <div className="mb-2 text-caption font-semibold tracking-wide text-ink/45 uppercase">AirOps owns</div>
            <ul className="list-outside list-disc space-y-1 pl-4 text-sm text-ink/75">
              <li>Strategy</li>
              <li>Content / production &amp; QA</li>
              <li>AI-search optimization</li>
              <li>Measurement</li>
            </ul>
          </div>
          <div className="rounded-card border border-line bg-white p-4">
            <div className="mb-2 text-caption font-semibold tracking-wide text-ink/45 uppercase">Client owns</div>
            <ul className="list-outside list-disc space-y-1 pl-4 text-sm text-ink/75">
              <li>Subject-matter / product truth</li>
              <li>Compliance &amp; brand approval</li>
              <li>Final publishing decisions</li>
            </ul>
          </div>
        </div>

        <div className="rounded-full border border-line bg-paper-2 px-5 py-3 text-center text-sm text-ink/70">
          Delivery pod: <span className="font-semibold text-ink">Engagement Manager</span> ·{" "}
          <span className="font-semibold text-ink">AEO Expert</span> ·{" "}
          <span className="font-semibold text-ink">Solutions Architect</span> ·{" "}
          <span className="font-semibold text-ink">Integrations Engineer</span>
        </div>
      </section>

      <FlowDivider>Same backbone, mapped to enablement</FlowDivider>

      <section id="enablement-map">
        <SectionHeading>The Enablement Map</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Category enablement isn&rsquo;t a training deck bolted on top; it&rsquo;s the same category/surfaces/channels
          backbone, taught at a different depth to each customer-facing audience.
        </p>

        <div className="mx-auto mb-6 max-w-xl rounded-card border border-line bg-paper-2 p-5 text-center">
          <div className="mb-2 text-sm font-semibold text-ink">Category 101: baseline for every customer-facing person</div>
          <div className="mb-3 flex flex-wrap justify-center gap-2">
            <Chip>AI Search</Chip>
            <Chip>Surfaces</Chip>
            <Chip>Channels</Chip>
            <Chip>Media mix</Chip>
          </div>
          <p className="text-xs leading-relaxed text-ink/60">
            Shared vocabulary before anyone&rsquo;s first customer call: the landscape, why now, and how AirOps is
            positioned inside it.
          </p>
        </div>
        <FlowArrow />

        <div className="grid gap-4 lg:grid-cols-3">
          {TRACKS.map((track) => (
            <TrackCard key={track.title} track={track} />
          ))}
        </div>

        <div className="mt-6 rounded-card border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink/70">
          <p>
            <span className="font-semibold text-ink">Category enablement ≠ sales enablement.</span> Category
            enablement is the language and mental model above; it applies to everyone customer-facing (EM, AEO
            Expert, SA, sales), and Katelyn owns it. Sales enablement is the pitch, the call flow, the deck; Nick&rsquo;s
            team owns it. They&rsquo;re sequenced together in the same rollout window, but accountable to different
            owners.
          </p>
          <hr className="my-3 border-line" />
          <p>
            <span className="font-semibold text-ink">Depth follows launch status, for now.</span> Owned and Earned
            are live; invest the deepest enablement there first. Paid, Social &amp; Influencer, and Community are
            waitlisted; teach the &ldquo;what it is and why it matters&rdquo; layer now, and go deeper as each channel
            actually ships.
          </p>
        </div>
      </section>
    </div>
  );
}
