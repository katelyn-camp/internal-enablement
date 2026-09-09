"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const DECK_URL =
  "https://docs.google.com/presentation/d/1zQy9-EExELmV0TYNhVJdTozO05bKJ2TEHC8mE99DOGM/edit";

const OUTLINE = [
  { id: "how-to-use-this", label: "How to Use This Page" },
  { id: "customize-before-every-call", label: "Customize Before Every Call" },
  { id: "deck-viewer", label: "Walk the Deck" },
];

interface Slide {
  numbers: string;
  label: string;
  copy: string[];
  talkingPoints: string;
  flag?: string;
}

const SLIDES: Slide[] = [
  {
    numbers: "1–2",
    label: "Cover",
    copy: [
      "[Company] | AirOps",
      "Your partner in turning AI search into your next growth advantage.",
      "Organized for: [Client name, Client position]",
      "Prepared By: AO person name 1 / 2 / 3",
    ],
    talkingPoints:
      "Confirm every bracketed field is filled in with the right names and titles before you screen-share, a prospect who spots a leftover [Company] or [Client name] placeholder will notice. Open with the one-line thesis printed on the slide, AI search is changing how buyers decide, and this deck is a partnership built around that shift, rather than reading the slide verbatim. The second click doesn't add new content, keep talking through the same framing rather than pausing on it.",
  },
  {
    numbers: "3",
    label: "Agenda",
    copy: ["Who we are: overview of who we are and what we do.", "Why AirOps: what we offer and what a partnership looks like.", "Next steps: determine whether it makes sense to continue, and in what capacity."],
    talkingPoints:
      "Set expectations for time and outcome before diving in. Name the actual decision you're hoping to reach by the end of the call, the agenda's third bullet, so the prospect knows this isn't just an information session.",
  },
  {
    numbers: "4",
    label: "Who We Are",
    copy: [
      "World-class talent: your go-to thought leader for AI discovery.",
      "Proven leadership: founders who've scaled category leaders before.",
      "Backed by leaders: dedicated project management to ensure delivery excellence.",
    ],
    talkingPoints:
      "Anchor credibility early, but don't read all three bullets with equal weight. Pick the one credibility point most relevant to this specific prospect, thought leadership if they're still forming their point of view on AI search, founder pedigree if they're evaluating who else has actually scaled this, and lead with that one.",
  },
  {
    numbers: "5",
    label: "Trusted By",
    copy: ["Trusted by customers across every industry."],
    talkingPoints:
      "Let the logo wall do the work with a brief pause rather than narrating every name on it. If the prospect's own industry or a direct competitor is visible, call that one out specifically instead of treating the slide as a generic list.",
  },
  {
    numbers: "6–7",
    label: "The Market Shift",
    copy: ["Buyers now trust AI to decide what they buy.", "(BCG research)"],
    talkingPoints:
      "This is the thesis statement the rest of the deck rests on, don't rush past it. When the BCG citation lands on the second click, say the source out loud, that's what turns the sentence from an AirOps opinion into an external, independently-sourced data point.",
  },
  {
    numbers: "8",
    label: "The Three Engines",
    copy: ["Search and Answer Engines", "Recommendation Engine", "Selection Engine"],
    talkingPoints:
      "Naming three distinct engines prevents the prospect from mentally collapsing \"AI search\" into just ChatGPT. Ask which of the three they already think about day to day, the answer tells you where they actually are in their own understanding before you keep going.",
  },
  {
    numbers: "9",
    label: "The Fundamental Shift",
    copy: ["Traditional Search", "AI Advises, Selects, and Purchases"],
    talkingPoints:
      "This is the mechanism behind slide 6's headline, said in one sentence: a buyer used to search and click through a list of results, now an agent narrows the list, recommends an option, and sometimes completes the purchase on the buyer's behalf.",
  },
  {
    numbers: "10",
    label: "Winners and Losers",
    copy: [
      "There will be winners and losers in this shift.",
      "Borders and Barnes & Noble thought they'd recover, they had all the traditional advantages, but Amazon had the data flywheel in a new channel and reached escape velocity.",
      "Channel Advantage: 2000 → 2010 → 2025",
    ],
    talkingPoints:
      "Use a historical parallel the prospect already accepts as true, retail didn't die, one specific competitor's data flywheel in a new channel won, to make the AI-search parallel feel inevitable rather than speculative. This is the last beat of \"why now\" before the pressure statistics on the next slide.",
  },
  {
    numbers: "11–12",
    label: "The Reality Index",
    copy: [
      "The old playbook is no longer working.",
      "46.9% are seeing CAC increase across paid channels.",
      "75.4% are being given higher pipeline and revenue goals.",
      "86.6% are prioritizing AI search.",
      "40.3% have not backfilled open roles.",
      "AirOps Marketing Reality Index",
    ],
    talkingPoints:
      "Read these as things happening broadly across marketing orgs right now, not warnings aimed specifically at this prospect. Ask which of the four numbers is hitting closest to home for their team, whatever they name becomes your entry point into the rest of the call. The second click is the shorter version, same four headline stats, fewer supporting sub-bullets, use it if you're moving quickly.",
  },
  {
    numbers: "13",
    label: "The New Playbook",
    copy: [
      "Owned Content: every page on your site is something AI can point to with confidence.",
      "Influencers & Social: the creators AI listens to know your name.",
      "External Content: the sites AI already trusts are talking about your brand.",
      "AI Ads: show up in new placements running inside AI answers.",
      "Community: you know exactly which forums and Reddit threads matter, and you're already in them.",
    ],
    talkingPoints:
      "First time the five-channel model gets named. Don't explain the full model yet, that's slides 24 through 28, just plant the five names now so they aren't new later in the call.",
  },
  {
    numbers: "14",
    label: "Strategy, Channels, System",
    copy: [
      "The Strategy: identify the channels that will drive the highest impact, then build a plan that fills your marketing funnel.",
      "The Channels: execute the strategy, building evidence on your site, across high-trust third-party surfaces, and in AI ads.",
      "The System: map how your buyers actually use AI with custom data for your brand and category, then tie all of it to pipeline and revenue growth.",
    ],
    talkingPoints:
      "Bridge slide, draws the line from \"here's the problem\" to \"here's how we're structured to solve it.\" State the three parts in the order they're named, Strategy, then Channels, then System, since the next two slides walk through the System piece first.",
  },
  {
    numbers: "15–16",
    label: "Intelligence, Action, Measurement",
    copy: [
      "Intelligence: see where your brand stands with the buyers who matter, where competitors have an advantage, and which opportunities deserve investment.",
      "Action: turn those opportunities into action across channels with agents that learn from every run, review, and result.",
      "Measurement: see what shipped, how buyers and AI agents responded, and how that connects to conversions, revenue, and your next investment.",
    ],
    talkingPoints:
      "This is the System from slide 14, broken into its three stages. Frame it as a loop, not a funnel, Measurement feeds back into Intelligence for the next cycle, that's what makes it a system instead of a one-time project.",
  },
  {
    numbers: "17–19",
    label: "Category Influence Overview",
    copy: [
      "Total influenced: $52.2M ($13.7M brand, $40.5M competitors).",
      "Share of Voice by stage: Discovery 18%, Research 28%, Consideration 37%, Purchase 46%.",
      "Recommended Channel Investment: offsite mentions, Reddit, onsite content, YouTube, ChatGPT Ads.",
    ],
    talkingPoints:
      "This example is illustrative unless you've run a real pre-call audit on this account, say so explicitly rather than letting the prospect assume these are their own numbers. The share-of-voice-by-stage breakdown is the important part, point out whichever stage shows the brand furthest behind competitors, that gap is usually the single biggest opportunity in the room.",
  },
  {
    numbers: "20",
    label: "Bring on Channel Experts",
    copy: ["Put channel strategy and execution in expert hands. AirOps channel experts work alongside your team, using the AirOps platform to make their decisions and learnings part of your operating model."],
    talkingPoints:
      "Transition into the team-and-pod section. The message here is \"you get channel experts, not just a dashboard,\" set that up now so slide 21's actual pod structure lands as the proof of it.",
  },
  {
    numbers: "21–22",
    label: "The Pod",
    copy: [
      "Strategy: experts in the AI Search channels that drive the highest impact for your brand.",
      "Channel Expertise: experts in the AirOps platform and systems, turning strategy into repeatable execution.",
      "Technical: dedicated project management to ensure delivery excellence.",
      "Roles: Engagement Lead, Solutions Architect, Strategy Lead, Integrations.",
    ],
    talkingPoints:
      "Name real people on your own team by this point in the call if you can, generic role titles are far less convincing than \"here's who will actually be on your account.\" This also pre-empts a \"will this just be a tool with no support behind it\" objection before it's raised.",
  },
  {
    numbers: "23",
    label: "End-to-End Positioning",
    copy: ["AirOps is the only solution that solves AI discovery end-to-end. Rather than choosing between software or agencies, AirOps gives you the platform and expertise to figure out what works, executes across the channels that matter, and helps you stay one step ahead of the competition."],
    talkingPoints:
      "This is the platform-vs-agency positioning line. It's useful if the prospect has already floated a self-serve tool or an agency RFP, if they haven't mentioned an alternative yet, keep this brief rather than arguing against an objection nobody raised.",
  },
  {
    numbers: "24",
    label: "Owned Content",
    copy: ["Citation Rate: content refreshed in the last 90 days earns 3x more citations.", "What we offer: measurement framework, site audit + competitive gap analysis, strategic roadmap, execution, weekly impact reporting."],
    talkingPoints:
      "First of five channel-offer slides; all five follow the same shape, a stat, a one-line promise, a \"what we offer\" checklist. Use the 3x citation stat to justify why this is ongoing work rather than a one-time project.",
  },
  {
    numbers: "25",
    label: "External Content",
    copy: ["85% of AI search mentions come from external content.", "What we offer: prioritized target-site list, new placement opportunities delivered monthly, live published placements, citation tracking report."],
    talkingPoints:
      "Usually the least intuitive channel for a prospect who's used to thinking SEO happens entirely on their own site. Lead with the 85% stat to reframe it: most of what AI says about a brand doesn't come from the brand's own site at all.",
  },
  {
    numbers: "26",
    label: "AI Ads",
    copy: ["AI ads are included in over 50% of ChatGPT answers for key industries.", "What we offer: campaign setup and launch on ChatGPT and Google AI Modes, spend/performance reporting, ROI recommendations rolled into the overall AI-search investment."],
    talkingPoints:
      "The newest, least-proven channel on the list, be honest about that rather than overselling it. Frame it as an emerging, testable bet, not a guaranteed channel, consistent with the slide's own \"informed growth bet\" language.",
  },
  {
    numbers: "27",
    label: "Social and Influencer",
    copy: ["Social sources like YouTube are outgrowing all other citation sources.", "What we offer: channel and creator recommendations, investment allocation proposal, campaign content brief handed to partner for execution, performance dashboard."],
    talkingPoints:
      "Connects directly to Community, next slide. The distinction: this channel is about creators and platforms, Community is about participating in conversations that already exist.",
  },
  {
    numbers: "28",
    label: "Community",
    copy: ["AI answer engines are pulling directly from community conversations.", "What we offer: conversation/community map across forums, Reddit, and review sites, seeding recommendations, campaign brief handed to partner for execution, thread performance dashboard."],
    talkingPoints:
      "Last of the five channels. If a sharp prospect asks how this differs from Social and Influencer, the answer is ownership of the motion: Social and Influencer is investment in creators and platforms, Community is participating in conversations that already exist without a brand's involvement.",
  },
  {
    numbers: "29",
    label: "Airbnb Proof",
    copy: [
      "Airbnb grew 0% → 7% AI mention rate for target inquiries.",
      "Went from unranked to #1 cited on its Paris-experience query ranking.",
      "12.8% mention rate on Google AI Mode.",
      "“With AI, it's even more important to have a digital footprint across owned and third-party channels.” (Antoine Sochat, Business Program Operations Lead)",
    ],
    talkingPoints:
      "This slide is fully built and real, a real customer, a real name and title, a real quote. Present it as written rather than editing it live.",
  },
  {
    numbers: "30–31",
    label: "Chime and LegalZoom Proof",
    copy: ["Chime customer outcome (template).", "LegalZoom customer outcome (template)."],
    talkingPoints:
      "Confirm each one carries that customer's own real stats and quote before presenting it, not Airbnb's, before this call.",
    flag:
      "As of this template, both slides still carry Airbnb's stats (7%, the Paris-experience ranking, the 12.8% Google AI Mode figure) and Antoine Sochat's quote under the Chime and LegalZoom titles. Do not present either slide until it's been swapped for that customer's own real numbers and quote, showing Airbnb's proof under a different company's name is inaccurate.",
  },
  {
    numbers: "32–33",
    label: "Close",
    copy: ["Thank You!", "AirOps.com"],
    talkingPoints:
      "Close on the agenda's third item, next steps, before this slide, not after it. Don't let the deck's literal last slide be the last thing you say, the close is a conversation, not a slide.",
  },
  {
    numbers: "34",
    label: "Parking Lot",
    copy: ["(intentionally blank)"],
    talkingPoints:
      "A working appendix marker, not a slide you present. It's a landing spot for you to drop extra material, a competitive comparison, deeper pricing detail, a specific case study, if a particular call needs backup slides beyond the standard 33. Skip it in the numbered flow.",
  },
];

export function S5FirstCallDeckWalkthrough() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="how-to-use-this">
        <SectionHeading>How to Use This Page</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          This walks the AirOps First Call deck slide by slide: a condensed preview of what&rsquo;s actually on each
          slide, and talking points underneath it for what to say and what to watch for. It&rsquo;s a rehearsal aid,
          not a replacement for the deck itself, open the real, editable version alongside this page.
        </p>
        <a
          href={DECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-4 py-2 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3"
        >
          Open the editable First Call deck ↗
        </a>
      </section>

      <section id="customize-before-every-call">
        <SectionHeading>Customize Before Every Call</SectionHeading>
        <ul className="max-w-2xl list-outside list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink/80">
          <li>
            <span className="font-medium text-ink">Slide 1:</span> [Company], [Client name / Client position], and
            the AO presenter names all need to be filled in before the call starts, not clicked past live.
          </li>
          <li>
            <span className="font-medium text-ink">Slides 17–19:</span> the Category Influence Overview numbers are
            illustrative unless a real pre-call audit backs them for this specific account. Say so explicitly if
            they haven&rsquo;t been replaced with the prospect&rsquo;s own data.
          </li>
          <li>
            <span className="font-medium text-ink">Slides 30–31:</span> still carry Airbnb&rsquo;s proof points
            under the Chime and LegalZoom titles. Do not present either until it&rsquo;s been swapped for that
            customer&rsquo;s own real stats and quote.
          </li>
        </ul>
      </section>

      <section id="deck-viewer">
        <SectionHeading>Walk the Deck</SectionHeading>
        <DeckViewer />
      </section>
    </div>
  );
}

function DeckViewer() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const firstNumber = parseInt(slide.numbers.split(/[–-]/)[0], 10);
  const hasImage = firstNumber <= 33;
  const atStart = index === 0;
  const atEnd = index === SLIDES.length - 1;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, SLIDES.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={atStart}
          className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Previous
        </button>
        <div className="relative w-60 sm:w-72">
          <select
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="w-full appearance-none truncate rounded-full border border-line bg-paper-2 py-1.5 pl-3 pr-8 text-xs font-medium tracking-wide text-ink"
          >
            {SLIDES.map((s, i) => (
              <option key={s.numbers} value={i}>
                Slide {s.numbers}: {s.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-ink/40"
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(i + 1, SLIDES.length - 1))}
          disabled={atEnd}
          className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-xs font-medium tracking-wide text-ink uppercase transition-colors hover:border-ink/25 hover:bg-paper-3 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next →
        </button>
      </div>
      <p className="mb-2 text-caption font-medium tracking-wide text-ink/45 uppercase">
        Slide {index + 1} of {SLIDES.length}
      </p>
      <h3 className="mb-3 text-base font-medium text-ink">
        Slide {slide.numbers}: {slide.label}
      </h3>
      {hasImage ? (
        <img
          src={`/first-call-slides/slide-${String(firstNumber).padStart(2, "0")}.png`}
          alt={`Slide ${slide.numbers}: ${slide.label}`}
          className="mb-4 aspect-[16/9] w-full rounded-card border border-line object-contain"
        />
      ) : (
        <div className="mb-4 flex aspect-[16/9] w-full items-center justify-center rounded-card border border-line bg-paper-2 text-sm text-ink/45">
          No slide image, appendix marker.
        </div>
      )}
      {slide.flag && (
        <div className="mb-4 rounded-card border border-line bg-paper-2 p-4">
          <span className="mb-2 inline-flex items-center rounded-full border border-line px-3 py-1 text-caption font-medium tracking-wide text-ink/60 uppercase">
            Needs customization
          </span>
          <p className="text-sm leading-relaxed text-ink/80">{slide.flag}</p>
        </div>
      )}
      <p className="text-sm leading-relaxed text-ink/70">
        <span className="font-medium text-ink">Talking points: </span>
        {slide.talkingPoints}
      </p>
    </div>
  );
}
