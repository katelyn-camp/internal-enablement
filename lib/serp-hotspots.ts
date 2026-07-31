import { AnnotatedHotspot } from "./annotated-diagram/types";

export interface SerpHotspot extends AnnotatedHotspot {
  definition: string;
  whyItMatters: string;
}

export const serpHotspots: SerpHotspot[] = [
  {
    id: "ai-overview",
    marker: "1",
    label: "AI Overview",
    definition:
      "A generated summary Google places above traditional organic results for many queries, synthesizing information from multiple sources into a single AI-written answer, with a handful of linked citations underneath it.",
    whyItMatters:
      "This is usually the first thing a prospect's buyer sees, and it can push every organic result (including a #1 ranking) below the fold. When a client says 'our traffic dropped but our rankings didn't move,' AI Overview is very often the reason. It's also a distinct optimization target from classic SEO — being cited inside the Overview is a different mechanism than ranking #1 organically, which is exactly the gap AirOps' AEO workflows are built to diagnose.",
  },
  {
    id: "organic-result",
    marker: "2",
    label: "Organic result",
    definition:
      "A standard, unpaid search listing: a clickable title, a URL/breadcrumb trail, and a meta description snippet Google generates (often rewriting the page's actual meta tag) to match the query.",
    whyItMatters:
      "Still the backbone of most sites' traffic and the baseline every AEO conversation gets compared against. When you're on a client call, this is the reference point: 'here's where you already rank organically, here's whether that's translating into AI citations too.' If a client ranks #1 organically but is never cited in AI Overviews or AI Mode, that's a real, explainable gap worth naming, not a contradiction.",
  },
  {
    id: "featured-snippet",
    marker: "3",
    label: "Featured snippet",
    definition:
      "A single organic result promoted into a highlighted answer box above the rest of the organic results, usually pulling a short passage, list, or table directly from the source page to directly answer the query.",
    whyItMatters:
      "Featured snippets are the closest existing precedent to how AI Overviews and AI Mode select and display source content — the on-page patterns that win a snippet (clear question-and-answer formatting, scannable lists, direct passages) are largely the same patterns that get a page cited by an answer engine. Pointing a client at a snippet they already own is a fast, concrete way to show them they're already doing some of the work AEO rewards.",
  },
  {
    id: "people-also-ask",
    marker: "4",
    label: "People Also Ask",
    definition:
      "An expandable set of related questions Google surfaces alongside the main results; expanding one reveals a short sourced answer and dynamically loads more related questions.",
    whyItMatters:
      "Shows the actual question variations real searchers use around a topic — useful raw material for prompt and content-gap analysis.",
    contentPending: true,
  },
  {
    id: "local-pack",
    marker: "5",
    label: "Local pack / map result",
    definition:
      "A map plus a short list of 3 local business listings shown for queries with local intent (e.g. 'near me' or a service + city), pulled from Google Business Profile data rather than the regular web index.",
    whyItMatters:
      "Relevant mostly for clients with physical locations or service areas — a separate optimization surface from both organic SEO and AEO.",
    contentPending: true,
  },
  {
    id: "paid-result",
    marker: "6",
    label: "Paid / ad result",
    definition:
      "A sponsored listing, visually similar to an organic result but labeled 'Sponsored,' bought through Google Ads and billed per click.",
    whyItMatters:
      "Useful context for separating what a client is paying for from what they're earning — and for noticing when paid spend is propping up visibility that AEO/organic work could replace.",
    contentPending: true,
  },
  {
    id: "knowledge-panel",
    marker: "7",
    label: "Knowledge panel",
    definition:
      "A structured info box, usually on the right side of desktop results, summarizing facts about an entity (a company, person, or brand) pulled from sources like Wikipedia, Google's Knowledge Graph, and the entity's own verified profiles.",
    whyItMatters:
      "A proxy for how clearly Google (and by extension AI systems that share overlapping entity data) understands who a brand is — thin or wrong knowledge panels often correlate with weaker AI citation performance.",
    contentPending: true,
  },
  {
    id: "carousel",
    marker: "8",
    label: "Image / video carousel",
    definition:
      "A horizontally scrollable row of images or videos related to the query, shown inline within the results and sourced from image search, YouTube, or other video platforms.",
    whyItMatters:
      "A reminder that 'search' now spans more than text — worth flagging when a client's content strategy is text-only and competitors are capturing this real estate.",
    contentPending: true,
  },
];
