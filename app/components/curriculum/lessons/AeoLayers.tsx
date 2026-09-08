import { FlowArrow } from "./shared";

interface AeoLayer {
  layer: number;
  title: string;
  description: string;
  tags: string[];
}

interface TagDefinition {
  definition: string;
  example: string;
}

/** Only tags worth a hover definition get an entry here; the rest render as plain pills. */
const TAG_DEFINITIONS: Record<string, TagDefinition> = {
  Crawlability: {
    definition: "Whether a crawler can fetch and read a page's content, as opposed to whether a person can see it in a browser.",
    example: "A pricing table that only appears after a button click is invisible to a crawler, since crawlers don't click buttons.",
  },
  Indexation: {
    definition:
      "Applies to any platform that retrieves live pages to answer a question: Google, and ChatGPT or Perplexity when their search features are on. A page has to be indexed to ever get cited there. A model's trained knowledge works differently, a page baked into training doesn't need to be indexed, it's remembered rather than looked up.",
    example:
      "A page marked \"noindex,\" or one buried so deep that nothing links to it, gets crawled but never indexed, so a live search answer can't cite it, even though the same page could still shape what the base model knows if it was scraped during training.",
  },
  "Structured Data": {
    definition:
      "Also called schema. Hidden code added to a page that spells out what the content means, not just how it looks on screen.",
    example: "Tagging a page so a bot knows \"4.8 stars, 212 reviews\" is a product rating, not just floating numbers on the page.",
  },
  "Site Architecture": {
    definition: "How a site's pages are organized and linked together, the overall map a crawler follows to find everything on it.",
    example: "A site where every product is one click from the homepage gets found and understood far faster than one buried five folders deep.",
  },
  "Internal Linking": {
    definition:
      "Links from one page on a site to another page on that same site. Beyond helping a crawler find pages, the pattern of internal links also signals which pages and topics a site treats as most important, since a link acts like a vote of relevance.",
    example: "A blog post links to a relevant product page, giving a crawler a path to reach that page and a signal that the page is worth treating as important.",
  },
  "Commercial Pages": {
    definition: "Pages built to support a purchase decision, rather than to educate. Pricing, product, and comparison pages fall here.",
    example: "A \"[Product] Pricing\" or \"[Product] vs. [Competitor]\" page, the kind a buyer reads right before deciding.",
  },
  "Category Pages": {
    definition: "Pages that group a set of related products, topics, or use cases under one umbrella, rather than covering one thing in depth.",
    example: "An online shoe store's \"Running Shoes\" page, which lists and links to every individual running shoe it sells.",
  },
};

/** In build order: each layer has to be in place before the next one has anything to work with. */
const AEO_LAYERS: AeoLayer[] = [
  {
    layer: 1,
    title: "Build the Foundation",
    description: "Make sure AI tools can actually read your site. If a page hides its content from them, none of the rest of this matters.",
    tags: ["Crawlability", "Indexation", "Structured Data", "Site Architecture", "Internal Linking", "Performance"],
  },
  {
    layer: 2,
    title: "Map the Answer Space",
    description: "Figure out what buyers are really asking ChatGPT and Claude, not just what they type into Google.",
    tags: ["Google Queries", "AI Prompts", "Categories", "Competitors", "Pain Points", "Recommendations"],
  },
  {
    layer: 3,
    title: "Build the Best Owned Presence",
    description: "Write the pages that answer those questions clearly, on the brand's own site.",
    tags: ["Commercial Pages", "Helpful Content", "Category Pages", "Comparisons", "Use Cases", "Docs / Help Centre"],
  },
  {
    layer: 4,
    title: "Build Third-Party Authority",
    description: "Get other people talking about the brand. Most of what an AI repeats about a company comes from somewhere other than that company's own site.",
    tags: ["Reddit", "Reviews", "Publications", "YouTube", "LinkedIn", "Directories"],
  },
  {
    layer: 5,
    title: "Get Recommended",
    description: "The payoff: AI tools find the brand, quote it, and recommend it by name.",
    tags: ["Google", "ChatGPT", "AI Overviews", "Claude", "Gemini", "Perplexity"],
  },
];

/** Plain pill, or a hover/focus pill with a definition + example popup when one is defined for this tag. */
function TagPill({ tag }: { tag: string }) {
  const def = TAG_DEFINITIONS[tag];
  if (!def) {
    return (
      <span className="rounded-full border border-line bg-paper-2 px-2 py-0.5 text-[11px] font-medium tracking-wide text-ink/50">
        {tag}
      </span>
    );
  }
  return (
    <span className="group relative inline-block">
      <button
        type="button"
        className="cursor-help rounded-full border border-dotted border-ink/40 bg-paper-2 px-2 py-0.5 text-[11px] font-medium tracking-wide text-ink/50"
      >
        {tag}
      </button>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-card border border-line bg-white p-3 text-left text-xs leading-relaxed text-ink/70 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="mb-1.5 block">{def.definition}</span>
        <span className="block text-ink/50">
          <span className="font-semibold text-ink/60">Example: </span>
          {def.example}
        </span>
      </span>
    </span>
  );
}

function LayerCard({ layer }: { layer: AeoLayer }) {
  const insetPercent = (AEO_LAYERS.length - layer.layer) * 6;
  return (
    <div style={{ marginInline: `${insetPercent}%` }} className="rounded-card border border-line bg-white p-4">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-caption font-semibold text-signal">
          {layer.layer}
        </span>
        <span className="font-semibold text-ink">{layer.title}</span>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-ink/65">{layer.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {layer.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}

/** Five stacked layers, narrowest (Layer 1, the foundation) at top widening to full width (Layer 5, the outcome) at bottom. */
export function AeoLayers() {
  return (
    <div className="mx-auto max-w-2xl">
      {AEO_LAYERS.map((layer, i) => (
        <div key={layer.layer}>
          <LayerCard layer={layer} />
          {i < AEO_LAYERS.length - 1 && <FlowArrow />}
        </div>
      ))}
    </div>
  );
}
