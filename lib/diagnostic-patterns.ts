/**
 * Diagnostic pattern library — data-driven so new patterns can be
 * added without touching the page or card layout.
 */
export interface DiagnosticPattern {
  id: string;
  name: string;
  teaser: string;
  signs: string[];
  rootCauses: string[];
  strategyImplications: string;
}

export const diagnosticPatterns: DiagnosticPattern[] = [
  {
    id: "citation-up-traffic-flat",
    name: "Citation share is up, but traffic is flat",
    teaser: "AI visibility is climbing and the traffic chart hasn't moved. Before assuming AEO doesn't work, check whether it's actually being given the chance to.",
    signs: [
      "Prompt/citation tracking shows a clear upward trend in citation share over the last 4–8 weeks.",
      "Organic traffic and referral traffic from AI surfaces are both flat or barely moved.",
      "No corresponding change in branded search volume either.",
    ],
    rootCauses: [
      "Check whether citations are landing on pages without a clear next step — no CTA, no internal links deeper into the site.",
      "Check if the cited surface itself sends little to no click-through by nature (an AI Overview can answer a question so completely the user never needs to click).",
      "Confirm citation share is measured on high-intent prompts, not just high-volume ones — a citation on a low-intent prompt was never going to convert regardless.",
    ],
    strategyImplications:
      "This is usually a signal to stop treating citation share as a stand-in for traffic and start treating it as its own KPI — brand visibility and consideration, not a guaranteed click. If the client's actual goal is traffic, the fix is upstream: get cited on more clickable formats (comparison content, not single-fact answers) rather than assuming more citations alone will move the needle.",
  },
  {
    id: "impressions-up-citations-flat",
    name: "Impressions are up, but citations aren't following",
    teaser: "The brand is showing up more in search, but AI answer engines still aren't picking it up. That gap is diagnostic, not just bad luck.",
    signs: [
      "Search Console (or equivalent) shows a rise in impressions for target queries.",
      "Prompt tracking for the same topic area shows flat or declining citation rate.",
      "Competitors are being cited on the same or adjacent prompts.",
    ],
    rootCauses: [
      "Check content structure — impressions can rise from ranking on a page that's still written as dense prose, not extractable, answer-shaped passages.",
      "Check whether competitors' cited content is simply more current or more directly phrased for the exact prompt wording being tracked.",
      "Confirm the pages driving impressions are even eligible for retrieval — not blocked, not thin, not missing structured data.",
    ],
    strategyImplications:
      "This usually means the content is being found but not trusted or extracted by the retrieval layer. The fix is almost always structural — reformatting existing content into clearer, self-contained answer passages — rather than needing net-new content. Good moment to run a Page Gap Analysis alongside a Prompt Analysis to see exactly where the extraction is failing.",
  },
  {
    id: "rankings-dropping-citations-rising",
    name: "Rankings are dropping, but citations are rising",
    teaser: "Organic position is sliding while AI citation climbs — a pattern that used to be a contradiction and now just isn't.",
    signs: [
      "Rank tracking shows a downward trend on the client's priority keywords.",
      "Prompt/citation tracking for the same topic shows stable or improving citation share.",
      "Overall organic traffic may be down even as AI-driven visibility holds steady or grows.",
    ],
    rootCauses: [
      "Check if AI Overview or AI Mode now appears on those same queries, pushing organic results down the page regardless of the client's own ranking quality.",
      "Confirm whether the ranking drop correlates with a broader SERP layout change — more SERP features competing for the same space — rather than a content-quality regression.",
      "Rule out an actual content or technical regression on the client's side before attributing this entirely to SERP shifts.",
    ],
    strategyImplications:
      "One of the clearest 'the game changed, not the team' stories available, and it's worth naming directly: the query is still winnable, but winning it now means being visible in the AI answer, not just the blue links below it. Reframes the conversation from 'why did we drop' to 'here's the new place to compete.'",
  },
  {
    id: "traffic-up-conversions-flat",
    name: "Traffic is up, but conversions haven't moved",
    teaser: "More people are landing on the site and the pipeline number hasn't budged. Not every traffic source is created equal.",
    signs: [
      "Overall sessions/traffic trending up over the reporting period.",
      "Conversion rate on that traffic is flat or declining even as volume grows.",
      "Lead or pipeline numbers from marketing-sourced traffic are flat.",
    ],
    rootCauses: [
      "Segment the new traffic by source and landing page — check whether growth is concentrated in top-of-funnel, informational content that was never going to convert on its own.",
      "Check whether AI-referred traffic in particular behaves differently (different intent, different landing experience) than classic organic traffic.",
      "Confirm the CTA and next-step experience on the specific pages receiving the new traffic — a traffic increase on pages with weak or missing CTAs won't move conversions no matter the source.",
    ],
    strategyImplications:
      "Traffic growth and pipeline growth are different jobs, and this pattern is the clearest evidence of that. The conversation shifts from 'let's get more traffic' to 'let's get the traffic we're already earning to do something' — often a smaller, faster win than another round of content production.",
  },
];
