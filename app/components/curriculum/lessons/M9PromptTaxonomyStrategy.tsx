import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { KnowledgeCheckButton } from "@/app/components/curriculum/KnowledgeCheck";
import { M9_PROMPT_TAXONOMY_KNOWLEDGE_CHECK } from "./knowledge-check-data";

const OUTLINE = [
  { id: "why-this-discipline-exists", label: "Why This Discipline Exists" },
  { id: "topics-and-prompts", label: "What a Topic Is, What a Prompt Is" },
  { id: "what-makes-a-topic", label: "What Makes a Topic Durable" },
  { id: "topic-coverage-in-practice", label: "How Much Coverage Is Enough" },
  { id: "the-tag-contract", label: "What Gets Tagged, and Why" },
  { id: "building-from-intent", label: "Building From Intent, Not Combinations" },
  { id: "honesty-guardrails", label: "The Guardrails That Keep a Portfolio Honest" },
  { id: "evidence-and-fail-closed", label: "Evidence-Bound and Fail-Closed" },
  { id: "three-workflows", label: "How It Actually Comes Together" },
];

interface Workflow {
  name: string;
  whatItIs: string;
  how: string[];
}

const WORKFLOWS: Workflow[] = [
  {
    name: "1. Topic Setting",
    whatItIs: "This is where you decide the small set of big topics a company's AI-search visibility should be organized around.",
    how: [
      "Do real research first: the company's own pages, real buyer language from search queries and reviews, and how competitors talk about the space. Every topic idea has to come from something real, not a guess.",
      "Pick one way to divide the business, like product line, customer type, or geography, and build topic ideas around that one thing. Don't mix different ways of dividing it in the same list, it makes the topics impossible to compare later.",
      "Test each topic idea against the five checks covered earlier, and compare it to every other topic on the list. Only keep the ones that are truly different from each other.",
      "Decide the tags: every future prompt gets one funnel-stage tag, plus a few extra tags only when they're actually useful. Also note which audiences and markets are already covered, and which aren't.",
      "Decide how much of the future prompt set each topic deserves, as a percentage, with a reason. Don't just split it evenly.",
      "Hand it all off to Prompt Building: the approved topics, the percentages, and a short guide with real buyer language, buyer questions, and anything that's off-limits.",
    ],
  },
  {
    name: "2. Prompt Building",
    whatItIs: "The process that turns an approved topic structure into an actual portfolio of prompts, sized, scored, and deduplicated.",
    how: [
      "Start from Topic Setting's output, the approved topics, weighting, and Prompt Building Guide, plus whatever the account already has: existing prompts, supplied documents, and any further evidence a specific gap needs.",
      "Build an intent-coverage map: for each topic, decide which of the six buyer-intent families (covered earlier) actually have evidence behind them. A family only belongs in a topic when there's a real reason for it.",
      "Size the portfolio from the account's live settings, platforms, regions, personas, cadence, and budget, never from a historical default or an assumption about what a typical account looks like.",
      "Present the proposed topic allocation, brand-related share, and keyword/developed mix as one checkpoint, and get it approved before drafting a single prompt.",
      "Score every candidate, existing and net-new alike, against one quality bar: real demand, a clear intent, neutral wording, and a fair path for the account to actually appear in the answer (covered under the guardrails earlier).",
      "Deduplicate across the whole portfolio, not just inside one topic, since a reworded duplicate can land in a completely different topic.",
      "Draft net-new prompts only against whatever gap survives scoring and deduplication, each one tagged with its topic, exactly one Funnel stage, and only the confirmed optional tags.",
      "Assemble the deliverable: the prompt library itself, a summary broken out by topic, funnel, prompt type, and query style, and, for an existing account, a record of what was kept, revised, or removed and why.",
    ],
  },
  {
    name: "3. Prompt Audit",
    whatItIs: "An evidence-based health check on an account's existing topic and prompt structure, without touching it.",
    how: [
      "Resolve the account and pull the complete current inventory, topics, prompts, tags, personas, regions, platforms, and whatever performance data (prompt volume, mention rate, citation rate) the connected data actually returns. Record what was requested versus what came back before calculating anything.",
      "Build the same kind of outside-in reference Topic Setting would produce, so the account has something real to be measured against, not just its own internal consistency.",
      "Calculate coverage: prompts per topic, missing or duplicate Funnel tags, orphan or one-off tag values, and topics with no prompts at all.",
      "Run the same duplicate-detection pass used in Prompt Building across the account's live prompt set.",
      "Compare the account's actual topics against the outside-in reference, topic by topic: covered, partially covered inside something broader, or missing entirely.",
      "Write two deliverables: a full internal audit with the calculations and evidence behind every finding, and a short client-ready summary, without turning either one into a redrafted prompt set.",
    ],
  },
];

interface CoverageQuestion {
  question: string;
  answer: string;
}

const COVERAGE_QUESTIONS: CoverageQuestion[] = [
  {
    question: "Does the client just pick one product line and one ICP?",
    answer:
      "No. You pick one way to divide the business (the lens), then you build topics across the whole business using that one lens, not just one slice of it. If a company sells Payroll, Benefits, and Hiring, all three become topics, you don't ask the client to pick one and stop there. The client's priorities still matter, just not for deciding which topics exist, they matter later, for deciding how much of the prompt budget each topic gets.",
  },
  {
    question: "Should every topic cover the whole funnel?",
    answer:
      "Yes. Funnel stage isn't something you pick per topic, every topic needs all three: Awareness, Consideration, and Decision. That's what lets you actually find the gap. If a topic only had comparison-stage prompts, you'd never notice the brand disappears in early buyer questions, because you never looked there.",
  },
  {
    question: "How many topics is the right number?",
    answer:
      "There's no fixed number, no minimum and no maximum, for how many topics to have. Use the fewest topics that still capture the real differences in the business. Too few, and everything gets flattened into one vague bucket like \"Our Products,\" hiding exactly the kind of stage-specific weakness full-funnel coverage is supposed to surface. Too many, and topics stop passing the sibling test, if two topics only differ in one of buyer, problem, or competitors (not all three), that's a sign to merge them back into one topic and move the difference into a tag instead. The real ceiling is how many genuinely different buyer decisions the evidence actually supports, not a target picked in advance.\n\nHow many prompts sit inside each topic is a separate question, and the math there is a lot less forgiving. A topic with only 7 prompts means each one carries about 1/7, roughly 14%, of that topic's reported average, so a single prompt having a bad day can swing the whole topic's number on its own, no matter how strategically sound the topic is. There's still no fixed minimum prompt count, but \"can this topic actually support the decisions being analyzed\" is really asking whether there are enough prompts for that average to mean anything.",
  },
];

interface TopicTest {
  test: string;
  question: string;
}

const TOPIC_TESTS: TopicTest[] = [
  { test: "Strategic", question: "Would leadership care about this topic's visibility separately from the others?" },
  { test: "Durable", question: "Will this still be meaningful beyond one campaign or one page?" },
  { test: "Distinct", question: "Does it have a meaningfully different buyer, problem, or competitive context?" },
  { test: "Evidence-backed", question: "Does at least one source support that it exists, and ideally a second that it matters?" },
  { test: "Usable", question: "Could someone assign a prompt to it without relying on internal intuition?" },
];

interface Lens {
  name: string;
  dividesBy: string;
  whenItFits: string;
}

const LENSES: Lens[] = [
  {
    name: "Product line",
    dividesBy: "What the company actually sells.",
    whenItFits: "The products themselves are the real strategic units, like Payroll, Benefits, and Hiring for Gusto.",
  },
  {
    name: "Customer segment",
    dividesBy: "Who's buying.",
    whenItFits: "Different buyers make fundamentally different decisions, not just prefer different messaging, small business owner vs. enterprise HR director.",
  },
  {
    name: "Geography",
    dividesBy: "Where the buyer is.",
    whenItFits: "The competitors, regulations, or language genuinely differ by region, not just the currency symbol.",
  },
  {
    name: "Buyer decision",
    dividesBy: "The specific decision being made.",
    whenItFits: "The same product serves clearly different moments, choosing a provider for the first time vs. switching away from one.",
  },
  {
    name: "Market or regulated use case",
    dividesBy: "A specific, specialized use case with its own rules.",
    whenItFits: "That use case has different competitors or compliance requirements than the general case, payroll for healthcare workers vs. payroll in general.",
  },
  {
    name: "Operating or financial segment",
    dividesBy: "How the company itself is organized internally.",
    whenItFits: "The company's own business units or P&L are the most defensible way to slice it.",
  },
  {
    name: "Go-to-market motion",
    dividesBy: "How the product gets sold.",
    whenItFits: "The sales motion itself changes who's buying and who else they're considering, self-serve signup vs. an enterprise sales team.",
  },
  {
    name: "Business model",
    dividesBy: "How the company makes money on it.",
    whenItFits: "The revenue mechanic is a distinct strategic bet, subscription vs. usage-based vs. a marketplace, not just a pricing detail.",
  },
];

interface LensExample {
  lens: string;
  company: string;
  explanation: string;
}

const LENS_EXAMPLES: LensExample[] = [
  {
    lens: "Product line",
    company: "Adobe",
    explanation:
      "Adobe's real strategic units are its individual tools: Photoshop, Premiere Pro, Acrobat, Illustrator. Each has its own buyer, its own competitors (Photoshop competes with Affinity Photo, Acrobat competes with DocuSign), and its own reason to exist. Customer segment doesn't cut cleanly here, the same photographer might use Photoshop, Lightroom, and Illustrator, so dividing by \"who's buying\" would just recreate the product list with extra steps. Geography fits even worse: Adobe's tools work the same way and compete against the same rivals worldwide.",
  },
  {
    lens: "Customer segment",
    company: "Airbnb",
    explanation:
      "Airbnb runs one platform, but it serves two completely different people: guests booking a place to stay, and hosts listing a property. Their questions and decisions don't overlap, a guest asks whether Airbnb is safer than a hotel; a host asks how to price a listing or become a Superhost. Product line doesn't fit, Airbnb has one core marketplace, not a portfolio of different tools. Buyer decision gets close, but it would collapse two fundamentally different people into a single axis when the more useful, durable split is which side of the marketplace someone is on.",
  },
  {
    lens: "Geography",
    company: "McDonald's",
    explanation:
      "McDonald's serves a broadly similar customer everywhere, someone who wants a fast, affordable meal, but the menu, the regulations, and the competitors change dramatically by country. McDonald's in India has no beef on the menu for religious and dietary reasons; McDonald's in France operates under different food and labor regulations and faces different local competitors than it does in the US. Product line doesn't capture this, a Big Mac isn't a different strategic unit from a McChicken. Customer segment doesn't either, the underlying need (quick, cheap food) doesn't change by income or company size the way it does for a B2B seller, it changes by which country someone is standing in.",
  },
  {
    lens: "Buyer decision",
    company: "CarMax",
    explanation:
      "CarMax is a single brand with a single core experience, but it serves two fundamentally different decisions: \"I want to buy a used car\" and \"I want to sell my car.\" The same person can even be both, trading in an old car to buy a newer one, so this isn't really a customer-segment split, it's not a different type of person, it's a different decision with a different competitive set. A buyer compares CarMax to a dealership or Carvana; a seller compares CarMax's offer to Carvana's, a private sale, or a trade-in. Product line doesn't fit, CarMax doesn't sell different products, it applies one service to two directions of the same transaction.",
  },
  {
    lens: "Market or regulated use case",
    company: "DocuSign",
    explanation:
      "DocuSign sells e-signature software generally, but real estate transactions and life-sciences documents carry their own state-specific legal requirements and compliance rules a general buyer never has to think about, which is exactly why DocuSign builds and markets dedicated pages for real estate and life sciences. The competitive landscape genuinely changes too: real estate competes with tools like dotloop, life sciences requires validated systems most e-signature buyers never encounter. Customer segment is close but not quite right, the buyer in both cases can be a similarly sized business; what actually differs is the regulatory environment the document has to satisfy, not who's buying.",
  },
  {
    lens: "Operating or financial segment",
    company: "Alphabet",
    explanation:
      "Alphabet doesn't report its business as a list of products, it reports Google Services, Google Cloud, and Other Bets, because that's the level at which leadership actually manages the company and talks about strategy. Google Services alone bundles Search, YouTube, Gmail, Maps, and Android into one segment, so a strict product-line lens, treating YouTube and Search as separate Topics, wouldn't match how the business is actually organized, even though it sounds like a reasonable alternative. Customer segment fits even worse: Google Cloud and Search have almost entirely different buyers, but they aren't organized around buyer type, they're organized around how they get built and funded internally.",
  },
  {
    lens: "Go-to-market motion",
    company: "Atlassian",
    explanation:
      "Atlassian sells one family of products (Jira, Confluence, Trello) but reaches customers two very different ways: a huge base of teams sign up and pay for themselves online with no salesperson involved, while large enterprises go through a sales-assisted process with security review and custom contracts. That difference in how the sale happens changes what content and questions matter far more than the product itself does. Customer segment gets close, small team vs. large company, but the more useful cut for Atlassian is specifically self-serve vs. sales-assisted, because that's literally how their own go-to-market org is structured.",
  },
  {
    lens: "Business model",
    company: "Amazon",
    explanation:
      "Amazon runs the same brand across genuinely different revenue mechanics: retail (thin margin on selling and shipping goods), AWS (usage-based cloud infrastructure billing), Prime (a flat annual subscription), and advertising (an auction-based ad marketplace). These aren't different products the way Adobe's tools are, and they don't map to customer segments either, plenty of the same customers use all four. What's genuinely different is how Amazon makes money on each one, and that difference changes the competitive set enough to earn its own lens: AWS competes with Azure, Prime competes with Costco membership, Ads competes with Google and Meta.",
  },
];

interface LensCheck {
  check: string;
  question: string;
  example: string;
}

const LENS_CHECKS: LensCheck[] = [
  {
    check: "Does it split?",
    question: "Can you name at least two genuinely different values along this lens for this business?",
    example: "Airbnb has one core product, so \"product line\" fails instantly, there's nothing to divide.",
  },
  {
    check: "Does it overlap?",
    question: "Within one interaction, would the same buyer land under more than one value at once?",
    example: "This is why Airbnb's guest/host split is a segment, the two roles never blend in one interaction, while CarMax's buy/sell split is a decision instead, the same visit can be both.",
  },
  {
    check: "Does it change the strategy?",
    question: "Moving from one value to the next, do the buyer, the problem, and the competitors actually change, not just the label?",
    example: "McDonald's menu differs by country, but the buyer and their basic need don't, so \"product line\" and \"customer segment\" both lose to geography.",
  },
  {
    check: "Does it match how the business already thinks of itself?",
    question: "When two lenses are close, does one line up with the company's own org chart, P&L, or go-to-market structure?",
    example: "Atlassian's own org is split by self-serve vs. sales-assisted, not by company size, so go-to-market motion beats the plausible-sounding customer segment.",
  },
  {
    check: "Will it still make sense next year?",
    question: "Is this a lasting way to view the business, or is it tied to one campaign, season, or trend?",
    example: "A one-time \"Q1 tax season\" division would fail this even though it recurs, covered earlier.",
  },
];

interface TagCheck {
  check: string;
  question: string;
  why: string;
}

const TAG_CHECKS: TagCheck[] = [
  {
    check: "Is it confirmed, not just convenient?",
    question: "Has the client or CSM actually agreed this tag should exist, rather than it getting added on the fly?",
    why: "A tag added silently while building prompts is exactly what turns into an unreviewed mess months later.",
  },
  {
    check: "Does it change the analysis?",
    question: "Would having this tag actually change which prompts get pulled, compared, or reported separately?",
    why: "If no one would ever filter or split a report by this value, it's decoration, not a tag.",
  },
  {
    check: "Can an existing field already do this?",
    question: "Could Topic, Funnel, Product, ICP, Persona, or Region already capture this same distinction?",
    why: "A new tag for something an existing field already expresses just fragments the same information two ways.",
  },
  {
    check: "Is the reason written down?",
    question: "Is there a documented reason this tag exists, so it doesn't quietly become permanent scope creep?",
    why: "An undocumented tag is the one nobody remembers the purpose of a year later.",
  },
];

interface IntentFamily {
  name: string;
  funnel: string;
}

const INTENT_FAMILIES: IntentFamily[] = [
  { name: "Problem discovery", funnel: "Awareness" },
  { name: "Category education", funnel: "Awareness" },
  { name: "Solution discovery", funnel: "Consideration" },
  { name: "Comparison & alternatives", funnel: "Consideration" },
  { name: "Validation & trust", funnel: "Consideration" },
  { name: "Purchase & implementation", funnel: "Decision" },
];

const FUNNEL_STAGES = ["Awareness", "Consideration", "Decision"];

const FANOUT_TOPICS = ["Payroll", "Benefits", "Hiring & Onboarding"];
const FANOUT_TOPIC_X = [150, 450, 750];
const FANOUT_STAGE_OFFSET = [-78, 0, 78];

function TopicFanoutDiagram() {
  return (
    <svg viewBox="0 0 900 180" className="h-auto w-full">
      {/* Company */}
      <rect x={370} y={8} width={160} height={34} rx={8} className="fill-forest" />
      <text x={450} y={30} textAnchor="middle" className="fill-signal text-[12px] font-semibold">
        Gusto
      </text>

      {/* Trunk + bus down to topics */}
      <line x1={450} y1={42} x2={450} y2={58} className="stroke-line" strokeWidth={2} />
      <line x1={150} y1={58} x2={750} y2={58} className="stroke-line" strokeWidth={2} />

      {FANOUT_TOPIC_X.map((cx, i) => (
        <g key={FANOUT_TOPICS[i]}>
          {/* branch down from bus to topic */}
          <line x1={cx} y1={58} x2={cx} y2={74} className="stroke-line" strokeWidth={2} />
          {/* topic box */}
          <rect x={cx - 95} y={74} width={190} height={34} rx={8} className="fill-white stroke-line" />
          <text x={cx} y={96} textAnchor="middle" className="fill-ink text-[11px] font-semibold">
            {FANOUT_TOPICS[i]}
          </text>

          {/* mini trunk + bus down to stages */}
          <line x1={cx} y1={108} x2={cx} y2={122} className="stroke-line" strokeWidth={2} />
          <line x1={cx - 78} y1={122} x2={cx + 78} y2={122} className="stroke-line" strokeWidth={2} />

          {FANOUT_STAGE_OFFSET.map((offset, j) => {
            const sx = cx + offset;
            return (
              <g key={FUNNEL_STAGES[j]}>
                <line x1={sx} y1={122} x2={sx} y2={136} className="stroke-line" strokeWidth={2} />
                <rect x={sx - 37} y={136} width={74} height={30} rx={6} className="fill-paper-2 stroke-line" />
                <text x={sx} y={155} textAnchor="middle" className="fill-ink/70 text-[9px] font-medium">
                  {FUNNEL_STAGES[j]}
                </text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export function M9PromptTaxonomyStrategy() {
  return (
    <div className="space-y-12">
      <PageOutline
        sections={OUTLINE}
        footer={
          <KnowledgeCheckButton
            id="m9-prompt-taxonomy"
            title="Prompt & Taxonomy Strategy"
            questions={M9_PROMPT_TAXONOMY_KNOWLEDGE_CHECK}
            className="flex w-full items-center justify-center rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
          />
        }
      />

      <section id="why-this-discipline-exists">
        <SectionHeading>Why This Discipline Exists</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every number a client sees, mention rate, citation rate, the dollar-value story from Attribution &amp; ROI,
          is a downstream calculation over one thing: the account's prompt portfolio. If the topics are incoherent,
          the tags are a mess, or the prompt set is stacked toward questions the client was always going to
          win, every metric built on top of it inherits that distortion, no matter how carefully it's calculated
          later.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          <code className="rounded bg-paper-2 px-1.5 py-0.5 text-xs">sb-prompt-tool</code> is the internal Claude
          skill that designs, audits, and builds these portfolios. You
          won't necessarily run it yourself, but you will present its output to clients, judge whether an account's
          existing topic structure is sound, and explain to a skeptical stakeholder why a portfolio was built the way
          it was.
        </p>
      </section>

      <section id="topics-and-prompts">
        <SectionHeading>What a Topic Is, What a Prompt Is</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A <span className="font-semibold text-ink">Topic</span> is a durable strategic question family, a big,
          lasting area of the business that AI-search visibility gets organized and reported on. Payroll is a Topic.
          Benefits is a Topic. A Topic is not a page type, a funnel stage, a named competitor, a one-off campaign, or
          a bucket sized to hit some prompt count.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A <span className="font-semibold text-ink">Prompt</span> is one specific, tracked question, written the
          way a real buyer would actually ask it, that gets sent to an AI answer engine like ChatGPT to see whether
          and how a brand shows up in the answer. Every Prompt belongs to exactly one Topic, sits at one stage of the
          buyer's decision, and gets scored and reviewed before it's tracked.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Topic vs. Prompt, in one line
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            A Topic is the big question the business needs answered: "how visible are we in Payroll?" A Prompt is
            one small, real question that helps answer it: "What is payroll software, and does a small business
            actually need one?"
          </p>
        </div>
      </section>

      <section id="what-makes-a-topic">
        <SectionHeading>What Makes a Topic Durable</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Not every candidate topic idea earns a place in the structure. Every candidate has to clear five tests
          first.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Test</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">The question it answers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TOPIC_TESTS.map((t) => (
                <tr key={t.test}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{t.test}</td>
                  <td className="px-3 py-3 align-top leading-relaxed text-ink/75">{t.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-6 rounded-card border border-line bg-white p-5">
          <p className="mb-4 text-caption font-semibold tracking-wide text-ink/45 uppercase">
            Does this deserve its own Topic for Gusto?
          </p>
          <div className="mb-5">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-lg font-semibold text-ink">"Payroll"</span>
              <span className="inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
                True
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink/80">
              It's a real, ongoing part of the business. Leadership cares about it separately from Benefits, and
              it'll still be the same strategic question a year from now.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-lg font-semibold text-ink">"Q1 Payroll Tax Season Prep"</span>
              <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-caption font-semibold tracking-wide text-ink/60 uppercase">
                False
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink/80">
              This one recurs every year, so "recurring" isn't the problem, it fails the Distinct test instead. The
              buyer, the problem (running payroll and filing taxes correctly), and the competitors being compared
              are all identical to "Payroll" in general, only the calendar timing changes. It's a marketing push
              wrapped around Payroll content, not a separate buyer decision, so the questions underneath it (how do
              I file payroll taxes, how do I switch providers before a deadline) still belong inside the "Payroll"
              Topic year-round.
            </p>
          </div>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          There's one more rule: every Topic on the list has to be divided up the same way. We call that dividing
          line the <span className="font-semibold text-ink">lens</span>. Before locking one in, it's worth knowing
          the full menu, several different lenses can make strategic sense, and the right one depends on the
          business.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Lens</th>
                <th className="w-1/4 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Divides the business by</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">When it's the right choice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {LENSES.map((lens) => (
                <tr key={lens.name}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{lens.name}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{lens.dividesBy}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{lens.whenItFits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Each one is the right call for some real company, and usually a couple of the other lenses could plausibly
          fit too, they're just weaker choices. Here's what that looks like for eight well-known companies.
        </p>
        <div className="mb-6 max-w-2xl space-y-3">
          {LENS_EXAMPLES.map((ex) => (
            <details key={ex.lens} className="group rounded-card border border-line bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>
                  {ex.lens} <span className="text-ink/40">·</span> {ex.company}
                </span>
                <span className="shrink-0 text-lg leading-none text-ink/40 transition-transform duration-150 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{ex.explanation}</p>
            </details>
          ))}
        </div>
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          The actual guidance here is one sentence: choose the lens that gives the cleanest, non-overlapping view of
          the business. That's not much to work with on its own, so here's that sentence broken into five concrete
          checks, run every plausible lens through them before locking one in.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/6 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Check</th>
                <th className="w-1/3 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Ask this</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">What failing it looks like</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {LENS_CHECKS.map((c) => (
                <tr key={c.check}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{c.check}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.question}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{c.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Usually two or three lenses look plausible for a given business, and running them through these five
          checks is what narrows it down to one. Once a lens passes all five and gets picked, that's the one used
          for the whole list, covered next.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          For Gusto, product line is the one that fits: Payroll, Benefits, and Hiring are the real strategic units
          of the business. Once that's the pick, every Topic on the list has to itself be a product line. You can't
          switch partway through and add a Topic that's actually a customer type or a region instead, even if that
          also feels like a real, important area.
        </p>
        <div className="mb-4 rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            A mixed-lens mistake
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            "Payroll," "Benefits," and "Hiring &amp; Onboarding" are all product lines, so they're all valid Topics
            on this list. "Small Businesses" is not a product line, it's a type of customer, so it can't be a fourth
            Topic here, even though small businesses really are an important, distinct group. Add it in anyway and
            three Topics now measure a product while one measures a customer type: a small business asking about
            payroll would show up under both "Payroll" and "Small Businesses," so the numbers overlap and stop being
            a clean comparison. "Small Businesses" still matters, it just belongs somewhere else, as a tag you can
            filter by, not as a Topic of its own.
          </p>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A different question comes up once the list exists: when do two related ideas deserve to be two separate
          Topics, instead of one Topic with a tag for the difference? Only split them apart when all three of these
          are true: a different buyer, a different problem, and different competitors. If even one of the three is
          actually the same, keep it as one Topic.
        </p>
        <div className="mb-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Comparison</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Different buyer?</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Different problem?</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Different competitors?</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-3 py-3 align-top font-semibold text-ink">"Payroll" vs. "Benefits"</td>
                <td className="px-3 py-3 align-top text-ink/75">Yes, whoever runs payroll vs. whoever manages health insurance</td>
                <td className="px-3 py-3 align-top text-ink/75">Yes, paying wages vs. providing benefits</td>
                <td className="px-3 py-3 align-top text-ink/75">Yes, payroll vendors vs. benefits providers</td>
                <td className="px-3 py-3 align-top font-semibold text-ink">Two separate Topics</td>
              </tr>
              <tr>
                <td className="px-3 py-3 align-top font-semibold text-ink">"Payroll for small businesses" vs. "Payroll for enterprises"</td>
                <td className="px-3 py-3 align-top text-ink/75">Yes, a small business owner vs. an HR director</td>
                <td className="px-3 py-3 align-top text-ink/75">No, both are "pay employees correctly and on time"</td>
                <td className="px-3 py-3 align-top text-ink/75">Mostly the same</td>
                <td className="px-3 py-3 align-top font-semibold text-ink">One Topic ("Payroll"), with a company-size tag</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          Splitting on a thinner distinction than that just multiplies Topics without multiplying real strategic
          clarity.
        </p>
      </section>

      <section id="topic-coverage-in-practice">
        <SectionHeading>How Much Coverage Is Enough</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          These are the practical questions that come up the first time you actually try to do this.
        </p>
        <div className="mb-6 max-w-2xl space-y-3">
          {COVERAGE_QUESTIONS.map((q) => (
            <details key={q.question} className="group rounded-card border border-line bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {q.question}
                <span className="shrink-0 text-lg leading-none text-ink/40 transition-transform duration-150 group-open:rotate-45">
                  +
                </span>
              </summary>
              {q.answer.split("\n\n").map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-ink/80">
                  {para}
                </p>
              ))}
            </details>
          ))}
        </div>
      </section>

      <section id="the-tag-contract">
        <SectionHeading>What Gets Tagged, and Why</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Two parts of this are non-negotiable. Every prompt gets exactly one primary Topic, and exactly one
          required Funnel tag: <span className="font-semibold text-ink">Awareness</span>,{" "}
          <span className="font-semibold text-ink">Consideration</span>, or{" "}
          <span className="font-semibold text-ink">Decision</span>. Notice that's the same three-stage vocabulary
          used for marketing attribution in Attribution &amp; ROI, a prompt's Funnel tag reflects the same
          buyer-decision maturity you'd use to read a client's GA conversions.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Beyond that, most of what someone's instinct is to tag is already handled by native AirOps settings:
          Prompt Type, Persona, Region, Platform, Competitor. Three more come up often enough to have standard
          names, Product, ICP, and Market, but there isn't actually a fixed, closed list. There are plenty of real
          reasons to want a tag beyond these, a specific quarterly push, a new region launch, a competitive
          campaign, and any of those can earn a place. What decides it isn't a list, it's four checks.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2">
                <th className="w-1/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Check</th>
                <th className="w-2/5 px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Ask this</th>
                <th className="px-3 py-2.5 text-left text-caption font-semibold tracking-wide text-ink/50 uppercase">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {TAG_CHECKS.map((t) => (
                <tr key={t.check}>
                  <td className="px-3 py-3 align-top font-semibold text-ink">{t.check}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{t.question}</td>
                  <td className="px-3 py-3 align-top text-ink/75">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A temporary tag can pass all four just as easily as a permanent one, an evidence-backed quarterly push
          that genuinely changes how that period's results should be read earns its place the same way Product or
          ICP does. What's different is what happens when the initiative ends: that tag gets retired the same way
          any tag does once it stops earning its place, if it stops appearing on any prompts, or becomes so common
          inside a Topic that it's no longer filtering anything, it comes out.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            The competitor-tag anti-pattern
          </span>
          <p className="mb-3 text-sm leading-relaxed text-ink/80">
            A surprisingly common instinct is to tag every comparison prompt with the specific competitor it names:{" "}
            <code className="rounded bg-paper-2 px-1 py-0.5 text-xs">Competitor: Workday</code>,{" "}
            <code className="rounded bg-paper-2 px-1 py-0.5 text-xs">Competitor: UKG</code>,{" "}
            <code className="rounded bg-paper-2 px-1 py-0.5 text-xs">Competition</code>. This fails the same checks
            above, native competitor configuration already does this job, so there is exactly one standalone{" "}
            <code className="rounded bg-paper-2 px-1 py-0.5 text-xs">Competitor</code> tag, no value, no company
            name attached.
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            Named competitors still matter, they live in native competitor configuration and in the prompt text
            itself. But a tag vocabulary that grows one value per competitor stops being comparable across accounts,
            balloons with every new competitor a client mentions, and duplicates a job native settings already do.
          </p>
        </div>
      </section>

      <section id="building-from-intent">
        <SectionHeading>Building From Intent, Not Combinations</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Prompts get built against six recurring buyer-intent families, each one only included in a Topic when
          evidence actually supports it there. Every family maps to a starting Funnel stage, though the real
          decision maturity of a specific prompt can override that default.
        </p>
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FUNNEL_STAGES.map((stage) => (
            <div key={stage} className="rounded-card border border-line bg-white p-4">
              <span className="mb-3 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
                {stage}
              </span>
              <ul className="space-y-1.5 text-sm leading-relaxed text-ink/75">
                {INTENT_FAMILIES.filter((f) => f.funnel === stage).map((f) => (
                  <li key={f.name}>{f.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Here's what that fan-out actually looks like once it's built: three of Gusto's real Topics, each one
          carrying its own full spread of Awareness, Consideration, and Decision prompts underneath it.
        </p>
        <div className="mb-6 overflow-x-auto rounded-card border border-line bg-white p-5">
          <TopicFanoutDiagram />
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
          What the contract explicitly forbids is crossing every Topic with every tag, persona, region, platform,
          and intent family to produce a full combinatorial grid. A portfolio sized that way grows to satisfy the
          grid, not the buyer, burning tracking budget on cells nobody would ever actually ask about while starving
          the handful of questions that carry the real signal.
        </p>
      </section>

      <section id="honesty-guardrails">
        <SectionHeading>The Guardrails That Keep a Portfolio Honest</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A prompt portfolio is the instrument a client's AI-search visibility gets measured with. If the instrument
          is tilted, the measurement is worthless no matter how clean the math around it looks. Three guardrails
          keep it honest.
        </p>
        <ul className="mb-6 max-w-2xl list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-semibold text-ink">Brand-related share stays capped at 10–15%.</span> Stack a
            portfolio with prompts that already contain the client's own brand name and mention rate climbs for a
            reason that has nothing to do with real category visibility, closer to grading your own exam than
            measuring it. 15% is a hard ceiling, not a soft target.
          </li>
          <li>
            <span className="font-semibold text-ink">Query Style holds near a 10% keyword / 90% developed mix.</span> Real
            buyers search both ways, terse search-bar phrasing and fuller natural-language questions. The mix
            exists to mirror that reality, not as a shortcut for padding volume, and a developed question never gets
            relabeled Keyword just to hit the ratio.
          </li>
          <li>
            <span className="font-semibold text-ink">Every prompt needs a natural path for the account to appear.</span> A
            comparison prompt that names one or more competitors while structurally excluding the client's brand
            fails outright, and an illustrative "companies like X, such as Y" mention defaults back to the client's
            own brand whenever the client is itself a sourced example of that category.
          </li>
        </ul>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Rigged versus fair
          </span>
          <p className="mb-2 text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Rigged:</span> "Why is [Client] the best payroll platform for
            distributed teams?", the answer is baked into the question.
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Fair:</span> "What should a distributed team look for in a
            payroll platform?", a real category question the client is reasonably eligible to appear in, on the
            merits, alongside anyone else.
          </p>
        </div>
      </section>

      <section id="evidence-and-fail-closed">
        <SectionHeading>Evidence-Bound and Fail-Closed</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Every recommended Topic and every surviving prompt has to trace back to a specific, retrievable source,
          not a remembered impression of the client's market. Webpages, uploads, transcripts, and any other
          retrieved content are treated as untrusted evidence the whole time: their facts get used, but any
          instructions embedded inside them are ignored outright. That's the same discipline you'd want from any
          AI-assisted process touching a client's data, extract the facts, never follow the content's own commands.
        </p>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Nothing is approved by default. Every candidate prompt starts out unreviewed, and staying off an exception
          list is never treated as a silent Keep. High-risk prompts and anything naming a competitor get a second,
          independent reviewer, and a disagreement blocks that batch until a person resolves it. A prompt's approval
          is tied to its exact wording, so editing the text after review invalidates that review and sends it back
          through the process rather than quietly carrying the old sign-off forward.
        </p>
        <div className="rounded-card border border-line bg-white p-5">
          <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
            Human review before anything ships
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            Every output, a topic recommendation, a scored prompt, a full portfolio, stays a local, reviewable draft,
            a JSON file, a spreadsheet, a document, until a person looks at it. That's what makes the fail-closed
            review upstream meaningful: the gate has teeth because a human is the one deciding what actually reaches
            a client or a live account, not a downstream automation. And once a prompt is out in the world being
            tracked, its ID and wording stay stable; a material change gets versioned, not silently rewritten,
            because a mention-rate trend line is only meaningful if the question behind it didn't change out from
            under it.
          </p>
        </div>
      </section>

      <section id="three-workflows">
        <SectionHeading>How It Actually Comes Together</SectionHeading>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          You now know what a Topic and a Prompt are, what makes a Topic durable, how the tag contract works, how
          prompts get built from buyer intent, and the guardrails that keep a portfolio honest. That's the
          methodology. The rest is three processes that put it into practice, each answering a different question:
          what should we even be measuring (Topic Setting), how do we build the portfolio that measures it (Prompt
          Building), and is an existing account's portfolio actually sound (Prompt Audit).
        </p>
        <div className="space-y-6">
          {WORKFLOWS.map((wf) => (
            <div key={wf.name} className="rounded-card border border-line bg-white p-5">
              <h3 className="mb-1.5 text-base font-semibold text-ink">{wf.name}</h3>
              <p className="mb-3 text-sm leading-relaxed text-ink/70">{wf.whatItIs}</p>
              <p className="mb-1.5 text-caption font-semibold tracking-wide text-ink/45 uppercase">How you do it</p>
              <ol className="list-outside list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-ink/80">
                {wf.how.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Notice the sequence: Topic Setting's evidence-and-five-test process is what makes a durable structure
          possible in the first place, and Prompt Building only starts filling it in once that structure and its tag
          contract are approved. Reverse that order, size the portfolio before the topics exist, and the topic list
          ends up shaped by whatever number was picked, not by the business underneath it.
        </p>
      </section>
    </div>
  );
}
