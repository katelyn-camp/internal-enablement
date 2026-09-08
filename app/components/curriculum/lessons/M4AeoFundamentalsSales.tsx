import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { CHANNEL_ORDER, type ChannelName } from "./channel-mix-data";
import { AeoLayers } from "./AeoLayers";

const OUTLINE = [
  { id: "second-buyer", label: "The Second Buyer" },
  { id: "five-layers", label: "The Five Layers of AEO Visibility" },
  { id: "how-platforms-diverge", label: "Two Ways Platforms Diverge" },
  { id: "five-channels", label: "The Five Channels Behind an AI Answer" },
  { id: "industry-channel-patterns", label: "Industry-Specific Channel Patterns" },
  { id: "surface-channel-preference", label: "Channel Preference, By AI Surface" },
  { id: "category-makers", label: "Category Makers vs. Fast Followers" },
  { id: "not-your-job-to-fix", label: "Not Your Job to Fix It Yourself" },
];

interface PlatformRow {
  platform: string;
  rendersJs: string;
  whatThatMeans: string;
}

const PLATFORM_TABLE: PlatformRow[] = [
  {
    platform: "ChatGPT",
    rendersJs: "No",
    whatThatMeans: "Reads the raw HTML response only. Content injected by client-side JavaScript after the page loads is invisible to it, full stop.",
  },
  {
    platform: "Claude",
    rendersJs: "No",
    whatThatMeans: "Same constraint as ChatGPT: a plain fetch, no rendering step.",
  },
  {
    platform: "Perplexity",
    rendersJs: "No",
    whatThatMeans: "Perplexity's own documentation describes a fetch-based crawler, not a rendering one.",
  },
  {
    platform: "Google AI Overviews / AI Mode",
    rendersJs: "Yes",
    whatThatMeans: "Rides on Googlebot's full rendering pipeline, so it usually sees what a browser sees, unlike the three above.",
  },
];

interface ChannelInfluenceRow {
  channel: ChannelName;
  shareOfCitations: string;
  whatThatMeans: string;
}

/**
 * Owned and Community are the only two rows with a clean, non-overlapping measured share:
 * Owned is measured directly, Community is measured as one specific slice of the "not owned"
 * remainder. External Content and Social & Influencer share that same remainder with Community
 * but aren't separated from it in current research, so they read "no separate figure yet"
 * rather than a fabricated split. Paid isn't a citation-share metric at all.
 */
const CHANNEL_INFLUENCE: ChannelInfluenceRow[] = [
  {
    channel: "Owned Content",
    shareOfCitations: "~15-25% of citations",
    whatThatMeans:
      "The one channel measured cleanly on its own: how much of what gets cited traces back to the brand's own domain. Has to be crawlable and well-structured to be eligible at all, that's table stakes, but it's still a minority of what actually gets quoted back to a buyer.",
  },
  {
    channel: "Community",
    shareOfCitations: "~48% of citations",
    whatThatMeans:
      "Reddit, YouTube, LinkedIn, and Wikipedia together, the one non-owned channel with its own clean, separately measured number. How much depends heavily on the platform: Perplexity leans on community sources in 90%+ of its answers, Gemini in as few as 7%.",
  },
  {
    channel: "External Content",
    shareOfCitations: "No separate figure yet",
    whatThatMeans:
      "Traditional press, analyst reports, and comparison or review content that isn't community-driven. Current research lumps this together with Social & Influencer and Community into one combined \"not owned\" figure (roughly 75-85% of citations), so there's no clean number for External Content on its own.",
  },
  {
    channel: "Social & Influencer",
    shareOfCitations: "No separate figure yet",
    whatThatMeans:
      "Same caveat as External Content: blended into that same combined \"not owned\" figure in current research, not broken out on its own. Where it's distinct in practice: a category with real analyst or influencer voices carries weight even before a forum thread exists.",
  },
  {
    channel: "Paid",
    shareOfCitations: "Not a citation channel",
    whatThatMeans:
      "Paid media isn't retrievable, indexable content, so it plays no role in what an AI system quotes. It still drives demand today, it just isn't the lever that moves AI visibility.",
  },
];

interface ChannelIndustryPattern {
  industry: string;
  whatMattersMost: ChannelName;
  why: string;
}

const CHANNEL_INDUSTRY_PATTERNS: ChannelIndustryPattern[] = [
  {
    industry: "B2B SaaS & developer tools",
    whatMattersMost: "Community",
    why: "Reddit threads, Hacker News, and G2 or Capterra reviews are where practitioners actually compare tools, and 88% of Reddit's AI citations already come from exactly that kind of category-level, non-branded question.",
  },
  {
    industry: "Enterprise & multi-stakeholder B2B",
    whatMattersMost: "External Content",
    why: "A purchase this large gets validated by analyst reports, press, and case studies before any single stakeholder signs off, so the brand's own site rarely closes the loop by itself.",
  },
  {
    industry: "Consumer & e-commerce",
    whatMattersMost: "Social & Influencer",
    why: "Unboxing videos, influencer reviews, and social comparison content shape how AI systems describe a consumer product more than the product page does, the same dynamic behind the brand-heavy consumer company pattern later in this module.",
  },
  {
    industry: "Local & multi-location services",
    whatMattersMost: "Community",
    why: "Google and Yelp reviews function as this category's version of a comparison page: volume and recency of reviews matter more than anything published on the business's own site.",
  },
  {
    industry: "New entrants without an existing footprint",
    whatMattersMost: "Owned Content",
    why: "With no comparison pages, reviews, or community threads mentioning the brand yet, its own site is often the only source available, the necessary starting point, not the long-term answer.",
  },
];

interface SurfaceProfile {
  surface: string;
  owned: string;
  thirdParty: string;
  communityReliance: string;
  paidStatus: string;
  profile: string;
}

/**
 * Owned/Third-Party are two sides of one measurement and sum to 100% where both are known,
 * same corpus as CHANNEL_INFLUENCE. "Third-Party" here is the same broad, not-owned definition
 * used above (includes Community and Social & Influencer, not the narrow External Content channel
 * alone). Google AI Mode's rendering advantage is a different metric (organic rank, not domain
 * ownership), so it reads "not measured the same way" rather than a number that isn't comparable.
 * Paid/ads figures are drawn from public reporting on each provider's ad program, since none of
 * AirOps' own reports cover ad mechanics. Cells read "No platform-specific data yet" rather than
 * an invented number where neither source has one.
 */
const SURFACE_PROFILES: SurfaceProfile[] = [
  {
    surface: "ChatGPT",
    owned: "4-11%",
    thirdParty: "89-96%",
    communityReliance: "Moderate, Reddit-led",
    paidStatus: "Live: contextual targeting, CPC",
    profile:
      "Doesn't render JavaScript, so it reads whatever comes back in the raw response. Of the three platforms AirOps tested head-to-head, only 4-11% of its citations trace back to a brand's own domain, the lowest of the three, meaning it leans hardest on third-party sources. It also has the most built-out ad product of any surface here: ads are targeted to the live conversation's topic, not to a user's interests or browsing history. Advertisers set plain-language \"context hints\" at the ad-group level inside OpenAI's Ads Manager, and OpenAI states no cookies, behavioral profiles, or third-party data are used to match them. Buying is CPC and self-serve, open to any US business since Ads Manager's May 2026 launch. Third-party trackers report CPCs anywhere from roughly $3 to $18 depending on vertical, OpenAI hasn't published an official rate card.",
  },
  {
    surface: "Claude",
    owned: "13-21%",
    thirdParty: "79-87%",
    communityReliance: "No platform-specific data yet",
    paidStatus: "None, ad-free by policy",
    profile:
      "Also doesn't render JavaScript, the same fetch-based constraint as ChatGPT and Perplexity. Of the three platforms tested, it has the higher first-party mention rate at 13-21%, so its answers lean somewhat less on third-party corroboration than ChatGPT's do, though owned content is still a minority contributor even here. Anthropic has stated publicly that Claude will not carry ads and ran an ad campaign built around that contrast with ChatGPT. There's no AirOps research yet on Claude's community-platform reliance specifically.",
  },
  {
    surface: "Perplexity",
    owned: "13-21%",
    thirdParty: "79-87%",
    communityReliance: "Heaviest, 90%+ of answers",
    paidStatus: "Discontinued in 2026",
    profile:
      "Fetch-based per its own documentation, no rendering step. Like Claude, its first-party mention rate runs 13-21%, higher than ChatGPT's, but that's still a minority, most of what it cites is still someone other than the brand. It's also the most community-reliant surface AirOps has measured: Reddit, YouTube, or LinkedIn show up in over 90% of its answers, with Reddit alone its single most-cited source. Perplexity tested sponsored answers and sponsored follow-up questions starting in 2024, then discontinued the program in 2026, stating that even clearly labeled sponsored placements risked undermining the trust its answer engine depends on. It currently carries no ads.",
  },
  {
    surface: "Google AI Overviews / AI Mode",
    owned: "Not measured the same way",
    thirdParty: "Not measured the same way",
    communityReliance: "Heavy, LinkedIn-led",
    paidStatus: "Live: campaign eligibility + light personalization",
    profile:
      "The only surface here that renders a page's JavaScript the way a browser does, riding on Googlebot's full pipeline. That rendering advantage doesn't translate into owned-content dominance: 59.6% of AI Overview citations still come from URLs outside Google's own top 20 organic results. Community reliance is heavy too, and LinkedIn specifically ranks higher here than on any other surface measured. Google already runs ads in and around AI Overviews, existing Search campaigns are automatically eligible with no new setup required, personalized on a narrower signal set than classic search ads (site or app interactions, approximate location, device type). Ads are rolling out into AI Mode as well.",
  },
  {
    surface: "Gemini (chat app)",
    owned: "No platform-specific data yet",
    thirdParty: "No platform-specific data yet",
    communityReliance: "Lightest, ~7% of answers",
    paidStatus: "None in-app; Search's AI Mode is a separate product",
    profile:
      "The lightest surface here on community platforms of any measured, they show up in as little as 7% of its answers, against 90%+ for Perplexity. When community content does appear, YouTube is disproportionately represented. As of the most recent reporting, the Gemini app itself carries no ads, a distinct product from Google Search's AI Overviews and AI Mode, which do.",
  },
];

export function M4AeoFundamentalsSales() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="second-buyer">
        <SectionHeading>The Second Buyer</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A CMO used to think about one buyer: the human who reads a page and decides. Now there are two. AI
          platforms sit as intermediaries between the brand and that human, and increasingly as end deciders in
          their own right: recommending, comparing, and in some cases using a product on the buyer&rsquo;s behalf
          without the buyer ever visiting the site. That shift, not any single ranking factor, is why platform
          differences are worth a CMO&rsquo;s attention in the first place.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Different platforms don&rsquo;t just rank differently, they see and trust differently.
        </p>
      </section>

      <section id="five-layers">
        <SectionHeading>The Five Layers of AEO Visibility</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          There are five layers to getting a brand recommended by AI. Build them in order, starting at the top.
          Everything else in this module is really just a closer look at one of these five layers.
        </p>
        <AeoLayers />
      </section>

      <section id="how-platforms-diverge">
        <SectionHeading>Two Ways Platforms Diverge</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Most prospects, even sophisticated ones, have never separated &ldquo;we rank in Google&rdquo; from
          &ldquo;we&rsquo;re visible to ChatGPT.&rdquo; The reason those two things can diverge is mechanical, not
          strategic.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Platform</th>
                <th className="w-24 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Renders JS?</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What that means for the pitch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {PLATFORM_TABLE.map((row) => (
                <tr key={row.platform}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.platform}</td>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.rendersJs}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatThatMeans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Say it like this
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Google renders your whole site before deciding how to rank it. ChatGPT, Claude, and Perplexity
            mostly don&rsquo;t, they read whatever comes back in the raw response. If your pricing or product
            content loads in after the page renders, it can be fully indexed in Google and completely invisible to
            the tools your buyers are increasingly asking instead.&rdquo;
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Beyond crawlability, AI systems also weigh trust differently than Google does. Corroboration, other
          sources naming the brand in the same context, matters more here than it does in classic search, and
          available industry data shows unlinked mentions correlating with citation likelihood even more than
          backlinks do.
        </p>
      </section>

      <section id="five-channels">
        <SectionHeading>The Five Channels Behind an AI Answer</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every AI answer about a brand is assembled from the same five channels Phase 1 already introduced: Owned
          Content, External Content, Paid, Social &amp; Influencer, and Community. These are channels, categories of
          where content lives and who created it, not the names of AirOps&rsquo; own service lines: a single
          service like Offsite touches External, Community, and Social &amp; Influencer content in the same
          engagement. All five matter, but not equally.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Owned is the brand&rsquo;s own domain. External Content is third-party editorial, press, analyst reports,
          and comparison or review sites that aren&rsquo;t community-driven. Community is user-generated discussion,
          Reddit, Quora, forums, YouTube comments, G2 or Capterra reviews. Social &amp; Influencer is organic brand
          social and influencer-created content. The research below measures Owned cleanly on its own, and
          separately measures Community, but doesn&rsquo;t yet separate External Content from Social &amp;
          Influencer, both currently sit inside one combined &ldquo;not owned&rdquo; figure alongside Community.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Channel</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                  What it actually drives
                </th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">What that means for the pitch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {CHANNEL_INFLUENCE.map((row) => (
                <tr key={row.channel}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.channel}</td>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.shareOfCitations}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatThatMeans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-relaxed text-ink/45">
          {CHANNEL_ORDER.join(", ")}, in that order, is how Phase 1 first laid out these five for investment
          planning; the figures above measure something different, and only Owned and Community currently have
          their own clean numbers.
        </p>
        <div className="mt-6 mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            Say it like this
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            &ldquo;Most of what an AI system says about you isn&rsquo;t anything you wrote, it&rsquo;s a comparison
            page, a Reddit thread, a review site. Your own site still has to be structured right, that&rsquo;s table
            stakes, but the bulk of the actual visibility work happens off of it.&rdquo;
          </p>
        </div>
      </section>

      <section id="industry-channel-patterns">
        <SectionHeading>Industry-Specific Channel Patterns</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The ranking above holds on average. Which channel actually matters most for a given prospect shifts in
          fairly predictable ways once you know what kind of business they run.
        </p>
        <div className="mb-4 max-w-2xl space-y-3">
          {CHANNEL_INDUSTRY_PATTERNS.map((row) => (
            <div key={row.industry} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-ink">{row.industry}</span>
                <span className="rounded-full border border-line bg-paper-2 px-2 py-0.5 text-caption font-medium tracking-wide text-ink/50 uppercase">
                  {row.whatMattersMost}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{row.why}</p>
            </div>
          ))}
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The two examples in the next section, a developer-favored challenger and a brand built on influencer
          reach, are this same industry-channel dynamic playing out at the level of an entire market.
        </p>
      </section>

      <section id="surface-channel-preference">
        <SectionHeading>Channel Preference, By AI Surface</SectionHeading>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            How Services uses this
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A services engagement doesn&rsquo;t have to cover every surface equally. Which surfaces to prioritize is
            a strategic choice, made from what&rsquo;s known about that surface&rsquo;s channel preferences and a
            client&rsquo;s actual citation mix today. A client whose category gets decided on Reddit needs a
            different plan than one whose category gets decided in Google AI Overviews.
          </p>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The five-channel figures above hold as an average across all surfaces. Broken out by surface, the same
          channels carry very different weight, and one channel, Paid, isn&rsquo;t even available the same way on
          every surface. Owned and Third-Party below are two sides of one measurement and sum to 100% where both
          are known; Third-Party uses the same broad, not-owned definition from above, it includes Community and
          Social &amp; Influencer, not just the narrow External Content channel by itself. Social &amp; Influencer
          isn&rsquo;t broken out separately below for the same reason it wasn&rsquo;t above: no research yet
          distinguishes it from Community on a per-surface basis, so it&rsquo;s folded into the Community column.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Surface</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Owned</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Third-Party (Not Owned)</th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">
                  Community Reliance
                </th>
                <th className="px-3 py-2.5 text-left text-caption font-medium tracking-wide text-ink/50 uppercase">Paid / Ads Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SURFACE_PROFILES.map((row) => (
                <tr key={row.surface}>
                  <td className="px-3 py-3 align-top font-medium text-ink">{row.surface}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.owned}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.thirdParty}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.communityReliance}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.paidStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4 space-y-3">
          {SURFACE_PROFILES.map((row) => (
            <div key={row.surface} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 font-medium text-ink">{row.surface}</div>
              <p className="text-sm leading-relaxed text-ink/80">{row.profile}</p>
            </div>
          ))}
        </div>

        <p className="text-xs leading-relaxed text-ink/45">
          Paid/ads facts above come from public reporting on each provider&rsquo;s own ad program, not from
          AirOps&rsquo; own research corpus:{" "}
          <a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            OpenAI, Ads in ChatGPT
          </a>
          ,{" "}
          <a href="https://openai.com/index/our-approach-to-advertising-and-expanding-access/" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            OpenAI, Our approach to advertising
          </a>
          ,{" "}
          <a href="https://www.perplexity.ai/hub/blog/why-we-re-experimenting-with-advertising" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            Perplexity, on experimenting with advertising
          </a>
          ,{" "}
          <a href="https://searchengineland.com/perplexity-stops-testing-advertising-469452" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            Search Engine Land, on Perplexity discontinuing ads
          </a>
          ,{" "}
          <a href="https://www.theregister.com/2026/02/04/anthropic_no_advertising_in_claude/" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            The Register, on Anthropic&rsquo;s no-ads stance
          </a>
          , and{" "}
          <a href="https://blog.google/products/ads-commerce/google-marketing-live-search-ads/" target="_blank" rel="noopener noreferrer" className="underline decoration-line hover:text-ink/70">
            Google, on ads in AI Overviews and AI Mode
          </a>
          . Ad products change quickly, confirm current terms before quoting specifics to a client.
        </p>
      </section>

      <section id="category-makers">
        <SectionHeading>Category Makers vs. Fast Followers</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Platform differences aren&rsquo;t just a technical curiosity, they explain real market share shifts a
          CMO already feels but may not have named. A legacy player with a fully capable, well-documented product
          can lose ground fast to a newer entrant that&rsquo;s simply easier for an agent to use or recommend, even
          when nothing is wrong with the legacy product itself.
        </p>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-paper-3 px-3 py-1 text-caption font-mono font-medium tracking-wide text-ink-muted uppercase">
            The pattern, not the brand names
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A category-leading database company built for a self-serve, PLG signup flow can watch a newer,
            developer-friendly alternative pull ahead in agent-driven recommendations, because that alternative
            can be connected to and used directly by a coding agent, while the incumbent still expects a human to
            fill out a demo request.
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          The same logic runs in reverse for a brand-heavy consumer company expanding into a new product category:
          if it built its audience on influencer reach rather than search, it may show up strongly for its own
          name and nowhere for the generic need the category serves. Neither company did anything wrong. The
          platforms simply reward different things than the ones each company was originally built around.
        </p>
      </section>

      <section id="not-your-job-to-fix">
        <SectionHeading>Not Your Job to Fix It Yourself</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The bar for this module is spotting the gap and explaining why it&rsquo;s urgent, not diagnosing the exact
          engineering fix. A rendering gap is an engineering ticket (server-side rendering or a dynamic-rendering
          workaround), not a copy fix, and definitely not something to promise a timeline on in a first call.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          What is worth carrying into a discovery call is the question itself: &ldquo;have you checked whether the
          content you care about most is actually present in the raw page response, not just how it looks in a
          browser?&rdquo; Most prospects haven&rsquo;t asked that question of their own site.
        </p>
      </section>
    </div>
  );
}
