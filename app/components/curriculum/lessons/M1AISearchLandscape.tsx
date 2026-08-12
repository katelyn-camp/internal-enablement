import { SectionHeading, FlowArrow } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { SurfacesExplorer } from "./SurfacesExplorer";
import { EcosystemHeader } from "./EcosystemHeader";
import { UsageOpportunity } from "./UsageOpportunity";
import { ChannelMix } from "./ChannelMix";
import { DeliveryLoop } from "./DeliveryLoop";
import { MarketOpportunity } from "./MarketOpportunity";
import { CompetitiveLandscape } from "./CompetitiveLandscape";

const OUTLINE = [
  { id: "market-opportunity", label: "The Market Opportunity" },
  { id: "vocabulary", label: "Getting the Vocabulary Right" },
  { id: "ecosystem", label: "The Ecosystem" },
  { id: "channel-mix", label: "Bespoke Channel Mix" },
  { id: "opportunity", label: "The Surface Opportunity" },
  { id: "competitive-landscape", label: "Changing Competitive Landscape" },
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
    name: "Owned Content",
    status: "live",
    description:
      "The pages and content your brand owns and publishes directly, the primary material AI systems can crawl and cite firsthand. Formerly known as “Onsite.”",
    tactics: ["Refresh existing content", "Create net-new content", "Optimize content for AI retrieval / citation", "Ongoing publishing"],
    examples: "e.g. product/category pages, editorial, comparison pages, FAQs",
    delivery: "AirOps delivers end-to-end",
  },
  {
    name: "External Content",
    status: "live",
    description:
      "Content and mentions that live on third-party sites AI systems already trust and cite, rather than on your own domain. Formerly known as “Offsite.”",
    tactics: ["Identify priority third-party sources", "Secure brand mentions and placements", "Coordinate with PR / affiliate efforts"],
    examples: "e.g. publishers, editorial sites, industry sources, affiliate sites",
    delivery: "AirOps delivers end-to-end",
  },
  {
    name: "Paid",
    status: "soon",
    description:
      "Paid placements and generative ad inventory purchased directly inside AI discovery experiences themselves. Formerly “Generative Ads Management.”",
    tactics: ["Launch and manage generative ad campaigns", "Optimize spend / creative", "Connect paid performance to organic AI visibility"],
    examples: "e.g. ChatGPT ads, Google AI Mode ads, future generative ad inventory · scope still firming up, waitlist only",
    delivery: "AirOps delivers end-to-end (once live)",
  },
  {
    name: "Social & Influencer",
    status: "soon",
    description:
      "The creator and social-platform presence (YouTube, TikTok, Instagram, LinkedIn) that shapes what AI systems surface and recommend.",
    tactics: ["Identify creators / channels", "Recommend investment allocation", "Develop content briefs", "Coordinate execution"],
    examples: "e.g. YouTube, TikTok, Instagram, LinkedIn, creator content",
    delivery: "AirOps owns analytics + strategy · partner network delivers",
  },
  {
    name: "Community",
    status: "soon",
    description: "Participation and seeding on highly-cited, authentic user-experience sources like Reddit, forums, and review sites.",
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
      <details className="text-xs" open={channel.status === "live"}>
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
  {
    level: "Channel",
    search: "Organic, Paid",
    aiSearch: "Owned Content, External Content, Paid, Social & Influencer, Community",
  },
  {
    level: "Tactic",
    search: "Fix title tags, publish content, build backlinks (Organic) · bid management, ad copy (Paid)",
    aiSearch: "Refresh content, optimize for retrieval (Owned Content) · secure placements (External Content) · generative ad campaigns (Paid)",
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

      <section id="market-opportunity">
        <SectionHeading>The Market Opportunity</SectionHeading>
        <MarketOpportunity />
      </section>

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
        <EcosystemHeader />

        <div id="ai-search-anchor" className="w-full rounded-card border border-line bg-white p-6 text-center">
          <div className="font-display text-h2 font-bold tracking-wide text-ink">AI Search</div>
          <div className="mt-3 flex justify-center">
            <Chip>The Discovery Environment</Chip>
          </div>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
            How Brands Win Visibility, Consideration, and Conversion as Discovery Shifts to AI
          </p>
        </div>
        <FlowArrow />

        <div id="surfaces-anchor" className="mx-auto max-w-2xl rounded-card border border-dashed border-line p-5 text-center">
          <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">Surfaces</div>
          <div className="mt-1 font-display text-h3 font-bold text-ink">Where Discovery Happens</div>
          <p className="mt-2 mb-4 text-xs text-ink/45">Click a surface to learn more</p>
          <SurfacesExplorer />
        </div>
        <FlowArrow />

        <div id="channels-anchor" className="mb-4 text-center">
          <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">Channels</div>
          <div className="mt-1 font-display text-h3 font-bold text-ink">How AirOps Influences the Surfaces</div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-caption font-semibold tracking-wide text-ink/40 uppercase">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              Live
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/25" aria-hidden />
              Coming soon / waitlist
            </span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {CHANNELS.filter((channel) => channel.status === "live").map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.filter((channel) => channel.status === "soon").map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </div>
        <FlowArrow />

        <div className="mb-2 text-center font-display text-h3 font-bold text-ink">How AirOps Delivers Value</div>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-ink/70">
          A continuous loop from agent insight to measurable performance, delivered through the combined strength of
          AirOps experts, the AirOps platform, and the Media Supply Chain.
        </p>
        <DeliveryLoop />
      </section>

      <section id="channel-mix">
        <SectionHeading>Bespoke Channel Mix</SectionHeading>
        <ChannelMix />
      </section>

      <section id="opportunity">
        <SectionHeading>The Surface Opportunity</SectionHeading>
        <div className="mb-6 text-center">
          <div className="text-caption font-semibold tracking-wide text-ink/45 uppercase">Usage volume</div>
          <div className="mt-1 font-display text-h3 font-bold text-ink">Company-Reported Scale, By Surface</div>
        </div>
        <UsageOpportunity />
      </section>

      <section id="competitive-landscape">
        <SectionHeading>Changing Competitive Landscape</SectionHeading>
        <CompetitiveLandscape />
      </section>
    </div>
  );
}
