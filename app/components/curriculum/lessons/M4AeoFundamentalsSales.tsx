import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "second-buyer", label: "The Second Buyer" },
  { id: "the-line-that-lands", label: "The Line That Lands" },
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
          Different platforms don&rsquo;t just rank differently, they see and trust differently. That&rsquo;s the
          whole content of this module, and it&rsquo;s a stronger opening than any statistic about AI search
          growing: the mechanism itself is the story.
        </p>
      </section>

      <section id="the-line-that-lands">
        <SectionHeading>The Line That Lands</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Most prospects, even sophisticated ones, have never separated &ldquo;we rank in Google&rdquo; from
          &ldquo;we&rsquo;re visible to ChatGPT.&rdquo; The reason those two things can diverge is mechanical, not
          strategic, and naming it precisely is one of the fastest ways to earn credibility on a call.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Platform</th>
                <th className="w-24 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Renders JS?</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What that means for the pitch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {PLATFORM_TABLE.map((row) => (
                <tr key={row.platform}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.platform}</td>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{row.rendersJs}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{row.whatThatMeans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
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
          backlinks do. A brand can have a strong backlink profile and still lose the citation to a competitor
          who&rsquo;s simply talked about more, in more places, by more people who aren&rsquo;t the brand itself.
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
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The pattern, not the brand names
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A category-leading database company built for a self-serve, PLG signup flow can watch a newer,
            developer-friendly alternative pull ahead in agent-driven recommendations, because that alternative
            can be connected to and used directly by a coding agent, while the incumbent still expects a human to
            fill out a demo request. The agent has already picked a default in that moment of discovery, and it
            isn&rsquo;t always the market leader. Naming that dynamic, without a client having to explain it to
            you first, is what makes a rep sound like they understand the platform shift instead of just repeating
            that it exists.
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
          browser?&rdquo; Most prospects haven&rsquo;t asked that question of their own site. Being the first
          person to ask it is most of the value this module gives you.
        </p>
      </section>
    </div>
  );
}
