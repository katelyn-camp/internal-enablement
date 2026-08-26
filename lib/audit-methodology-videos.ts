/**
 * M8 "Manual Audit Methodology" video series — an 8-part walkthrough of one
 * full manual audit end to end, recorded on a real (anonymized) account.
 * Videos are hosted on Loom and embedded directly (via LoomVideoEmbed), not
 * linked out to. Order matters: each step builds on files/folders the
 * previous one produced.
 *
 * `durationSeconds` comes from Loom's public oEmbed endpoint
 * (`loom.com/v1/oembed?url=.../share/{loomId}`). Poster art is bespoke (see
 * LoomVideoEmbed + audit-methodology-icons.tsx), not a Loom screen-grab —
 * those all look like near-identical browser/Drive screenshots.
 *
 * `accentColor` cycles through the real AirOps brand hex codes already used
 * for the channel-mix chart elsewhere in this repo (see channel-mix-data.ts:
 * External Content, Paid, Social & Influencer) rather than this site's own
 * quieter ink/paper/forest/signal tokens.
 */
export interface AuditMethodologyVideo {
  /** Also the section id used for anchor links and the page outline nav. */
  slug: string;
  /** Short step label, shown in the "On this page" nav. */
  step: string;
  /** Full descriptive title, shown as the section heading alongside `step`. */
  title: string;
  synopsis: string;
  loomId: string;
  durationSeconds: number;
  accentColor: string;
  /** Optional folder-hierarchy visual, rendered as a tree beneath the synopsis. */
  folderStructure?: { root: string; children: string[] };
}

export const auditMethodologyVideos: AuditMethodologyVideo[] = [
  {
    slug: "step-1",
    step: "Step 1",
    title: "Setting Up the Audit Folder Structure",
    synopsis:
      "Before pulling any data, create a consistent folder hierarchy so every audit artifact has an obvious home from the start:",
    loomId: "a2e4532eb43447978293fb09fcdd6237",
    durationSeconds: 85,
    accentColor: "#3d365e",
    folderStructure: {
      root: "[Company Name] Site Audit",
      children: [
        "AEO Analysis",
        "Content Gap Analysis",
        "Keyword Gap Analysis",
        "Technical SEO Analysis",
        "Traffic & Keyword Benchmarks",
      ],
    },
  },
  {
    slug: "step-2a",
    step: "Step 2a",
    title: "AEO Analysis — Citations & Mentions",
    synopsis:
      "Kick off the AEO side of the audit using Strategy 360 to pull the client's citations and mentions: which prompts cite the client's own domain vs. third-party domains, and where those citations come from.",
    loomId: "2a52aaba4f064241bcd5acc90ba365c4",
    durationSeconds: 173,
    accentColor: "#ff6337",
  },
  {
    slug: "step-2b",
    step: "Step 2b",
    title: "AEO Gap Analysis & Outreach Targets",
    synopsis:
      "Turn the citations/mentions export into a full AEO gap analysis — prompt gaps, citation gaps, and prioritized outreach targets — then edit out AI-sounding phrasing before it goes near a client deliverable.",
    loomId: "80f7abb7fd454dd8b3f09fad006ea669",
    durationSeconds: 234,
    accentColor: "#5b254f",
  },
  {
    slug: "step-3",
    step: "Step 3",
    title: "Keyword Gap Analysis",
    synopsis:
      "Run a keyword gap analysis in Semrush against real competitors (swapping out any with too little overlap to be useful), export the untapped-keyword set, and pair it with 12 months of Search Console query data for a Claude-run gap analysis.",
    loomId: "0028cac2a8484adea1bbccace7036421",
    durationSeconds: 307,
    accentColor: "#3d365e",
  },
  {
    slug: "step-4",
    step: "Step 4",
    title: "Content Gap Analysis",
    synopsis:
      "Add page-level Search Console traffic data to the keyword gap output and have Claude turn the combination into a prioritized content gap analysis — content strategy, not just a keyword list.",
    loomId: "7cfcf6b043fe472a882e81bc726414d8",
    durationSeconds: 256,
    accentColor: "#ff6337",
  },
  {
    slug: "step-5",
    step: "Step 5",
    title: "Technical SEO Analysis",
    synopsis:
      "Pull Core Web Vitals and PageSpeed Insights, then run a full Screaming Frog crawl connected to Search Console and Ahrefs; export only the crawl sections relevant to this client and route the issues into the technical SEO folder.",
    loomId: "fd03e7b686824447bbf409a2913dba6f",
    durationSeconds: 536,
    accentColor: "#5b254f",
  },
  {
    slug: "step-6",
    step: "Step 6",
    title: "Traffic & Keyword Benchmarks",
    synopsis:
      "Fill out traffic and keyword benchmarks: total ranking keywords, striking-distance keywords (rank 4–20), and indexed-but-not-ranking pages — then sanity-check the audit's depth against a prior account before building the final deck.",
    loomId: "12db8d128ea4449c9c0adcce5cd0a669",
    durationSeconds: 448,
    accentColor: "#3d365e",
  },
  {
    slug: "step-7",
    step: "Step 7",
    title: "Generating & QA-ing the Final Site Audit",
    synopsis:
      "Feed every folder into Claude via the site-audit template skill to generate the client-ready deck, then do the real work: strip AI-sounding phrasing, verify every number traces to its source, check charts render correctly, and route to the EM before it goes to the client.",
    loomId: "b0d644ec47ff46b4a2f92a974d1cda92",
    durationSeconds: 398,
    accentColor: "#ff6337",
  },
];
