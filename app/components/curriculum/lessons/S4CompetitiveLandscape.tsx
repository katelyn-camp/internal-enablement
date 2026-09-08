import { SectionHeading } from "./shared";
import { PageOutline } from "@/app/components/nav/PageOutline";

const OUTLINE = [
  { id: "four-paths", label: "The Four Paths a CMO Is Weighing" },
  { id: "positioning", label: "Positioning AirOps Against Each" },
  { id: "talk-tracks", label: "Talk Tracks by Path" },
];

interface PathEntry {
  name: string;
  whatItIs: string;
  whyConsidered: string;
}

const PATHS: PathEntry[] = [
  {
    name: "Hire In-House",
    whatItIs: "A dedicated AEO/AI-search hire, or an existing SEO hire whose scope gets expanded to cover it.",
    whyConsidered: "Feels like control and lower marginal cost, and keeps institutional knowledge inside the company.",
  },
  {
    name: "Traditional Agency",
    whatItIs: "The existing retainer-based partner already running SEO, content, or paid media.",
    whyConsidered: "An existing relationship, a familiar process, and a partner already trusted with budget.",
  },
  {
    name: "A Tool",
    whatItIs: "A self-serve AI-visibility platform that reports mention rate, citations, and share of voice.",
    whyConsidered: "A lower price point and a dashboard live fast, without committing to a services relationship.",
  },
  {
    name: "AI-Native Services (AirOps)",
    whatItIs: "A platform paired with a dedicated delivery team that owns AI-search outcomes end to end.",
    whyConsidered: "Covers strategy, execution, and measurement together instead of leaving the CMO to connect them.",
  },
];

interface PositioningRow {
  path: string;
  realLimitation: string;
  howAirOpsPositions: string;
}

const POSITIONING: PositioningRow[] = [
  {
    path: "Hire In-House",
    realLimitation:
      "One person has to be the strategist, the technical SEO expert, the content producer, and the media buyer at once, in a category that shifts monthly. Ramp time before they're productive, and a single point of failure if they leave.",
    howAirOpsPositions:
      "AirOps delivers the pod that hire would take a year and several more headcount to assemble: an EM, an SA, and channel specialists across content, offsite, paid, and social, backed by a platform already tracking the category day over day.",
  },
  {
    path: "Traditional Agency",
    realLimitation:
      "Most legacy agencies scale by adding hours, not by building AI-native measurement or execution. An \"AI search\" line item bolted onto an existing SEO retainer usually isn't backed by real mention-rate, citation-rate, or share-of-voice data, and it rarely covers channels like AI ads or community seeding at all.",
    howAirOpsPositions:
      "AirOps isn't asking a CMO to rip out a relationship, only to compare what's actually being delivered against it. Productized delivery on top of AirOps' own platform, not linear headcount, is what lets the same budget cover ground a headcount-scaled agency can't touch.",
  },
  {
    path: "A Tool",
    realLimitation:
      "A dashboard reports where a brand stands. It doesn't decide what to do about a content gap or a crawlability issue, and it doesn't execute the fix across five different channels. The tool is the measurement layer, not the operating model.",
    howAirOpsPositions:
      "Customers want a partner that owns outcomes through platform, people, and data, not just a tool handed over. AirOps includes that same visibility layer as one piece of a fully operated engagement, paired with the team executing against what it finds.",
  },
  {
    path: "AI-Native Services (AirOps)",
    realLimitation:
      "Against a true AI-native competitor, the real question isn't the dashboard, most look similar on the surface, it's whether there's an actual delivery team and platform behind it, or a thin wrapper on the same underlying data everyone else has.",
    howAirOpsPositions:
      "AirOps stays a platform business by design, not a staffing agency: margin comes from productizing delivery, not hiring linearly with deals. That's what lets the same rigor scale across accounts instead of diluting into pure headcount growth.",
  },
];

interface TalkTrack {
  path: string;
  quote: string;
}

const TALK_TRACKS: TalkTrack[] = [
  {
    path: "Hire In-House",
    quote:
      "A single hire has to be the strategist, the technical SEO person, the content producer, and the media buyer all at once, and stay current on a category that's changing monthly. We give you that whole team, plus the platform doing the measurement work no single person can do by hand, starting week one instead of after a hiring cycle.",
  },
  {
    path: "Traditional Agency",
    quote:
      "Compare what you're being billed for against what you're actually getting. Is your agency reporting mention rate, citation rate, and share of voice with real measurement behind it, or is it the same traffic-and-rankings report with an AI section bolted on? We built the measurement and the execution model for this category from scratch, not as an add-on to a legacy retainer.",
  },
  {
    path: "A Tool",
    quote:
      "A dashboard tells you your mention rate dropped. It doesn't tell you why, and it doesn't fix it. We include that same visibility layer, paired with the team and the platform that acts on what it finds, so you're not stuck reading a report with no one to execute the fix.",
  },
  {
    path: "AI-Native Services (AirOps)",
    quote:
      "Anyone can put a dashboard in front of you and call it AI-native. The real question is whether there's a real team and a real platform behind it, or a wrapper on the same data everyone else has. Ask what their delivery model actually is. Ours is a dedicated pod on our own platform, not a headcount-scaled service dressed up as software.",
  },
];

export function S4CompetitiveLandscape() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <section id="four-paths">
        <SectionHeading>The Four Paths a CMO Is Weighing</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A CMO addressing AI search isn&rsquo;t choosing between AirOps and one other option. They&rsquo;re
          weighing four fundamentally different paths, and most have already ruled some out before a call even
          starts.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHS.map((p) => (
            <div key={p.name} className="rounded-card border border-line bg-white p-4">
              <div className="mb-2 text-sm font-semibold text-ink">{p.name}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-semibold text-ink/50 uppercase tracking-wide text-[0.65rem]">What it is: </span>
                {p.whatItIs}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-semibold text-ink/50 uppercase tracking-wide text-[0.65rem]">Why it&rsquo;s considered: </span>
                {p.whyConsidered}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="positioning">
        <SectionHeading>Positioning AirOps Against Each</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Each path has a real strength, that&rsquo;s why it&rsquo;s still on the table, and a real limitation
          worth naming plainly rather than dismissing.
        </p>
        <div className="space-y-4">
          {POSITIONING.map((row) => (
            <div key={row.path} className="rounded-card border border-line bg-paper-2 p-4">
              <div className="mb-2 text-sm font-semibold text-ink">{row.path}</div>
              <p className="mb-2 text-xs leading-relaxed text-ink/70">
                <span className="font-semibold text-ink/50 uppercase tracking-wide text-[0.65rem]">The real limitation: </span>
                {row.realLimitation}
              </p>
              <p className="text-xs leading-relaxed text-ink/70">
                <span className="font-semibold text-ink/50 uppercase tracking-wide text-[0.65rem]">How AirOps positions: </span>
                {row.howAirOpsPositions}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="talk-tracks">
        <SectionHeading>Talk Tracks by Path</SectionHeading>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          A starting point for each conversation, not a script to read verbatim. Adjust to the account, but keep
          the underlying comparison intact.
        </p>
        <div className="space-y-4">
          {TALK_TRACKS.map((t) => (
            <div key={t.path} className="rounded-card border border-line bg-white p-5">
              <span className="mb-2 inline-flex items-center rounded-full bg-forest px-3 py-1 text-caption font-semibold tracking-wide text-signal uppercase">
                {t.path}
              </span>
              <p className="text-sm leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
