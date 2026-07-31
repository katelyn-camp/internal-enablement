import { AnnotatedHotspot } from "./annotated-diagram/types";

export interface PageZone extends AnnotatedHotspot {
  whatItIs: string;
  whySeoAeo: string;
  whatGoodLooksLike: string;
}

export interface PageType {
  slug: string;
  title: string;
  status: "full" | "stub";
  summary: string;
  zones: PageZone[];
}

export const pageTypes: PageType[] = [
  {
    slug: "blog-post",
    title: "Blog Post",
    status: "full",
    summary: "Editorial content built around a single topic or question — the highest-volume page type on most sites.",
    zones: [
      {
        id: "hero-title",
        marker: "1",
        label: "Hero / title block",
        whatItIs: "The H1 headline, hero image, and immediate visual framing at the top of the post.",
        whySeoAeo:
          "The H1 is one of the strongest on-page relevance signals for both classic ranking and AI retrieval — often the clearest statement of what the page is about that a model leans on.",
        whatGoodLooksLike: "A specific, query-matching H1 (not a clever pun) that states the topic plainly.",
      },
      {
        id: "byline-meta",
        marker: "2",
        label: "Byline / metadata",
        whatItIs: "Author name, publish/update date, and often reading time or category tag below the title.",
        whySeoAeo:
          "Authorship and freshness are authority/trust signals both classic SEO and AI answer engines weigh — a missing author or stale-looking date quietly undercuts credibility.",
        whatGoodLooksLike: "A real named author with a bio, and a visible last-updated date that's actually kept current.",
      },
      {
        id: "body-content",
        marker: "3",
        label: "Body content",
        whatItIs: "The substance of the post — headings, paragraphs, lists, images, embedded examples.",
        whySeoAeo:
          "This is what gets chunked and retrieved. Clear H2/H3 structure and self-contained passages let a retrieval system extract a clean answer instead of skipping the page.",
        whatGoodLooksLike: "Descriptive subheadings that could stand alone as answers, short paragraphs, one idea per section.",
      },
      {
        id: "in-content-ctas",
        marker: "4",
        label: "In-content CTAs",
        whatItIs: "Calls to action embedded partway through the post — 'try it free,' related-product callouts.",
        whySeoAeo:
          "Doesn't affect AI citation directly, but determines whether ranking/citation visibility actually converts into pipeline once someone lands on the page.",
        whatGoodLooksLike: "Contextual, not intrusive — placed where a reader has just been convinced of something.",
      },
      {
        id: "related-content",
        marker: "5",
        label: "Related content module",
        whatItIs: "A module, usually near the bottom, linking to other posts or resources on related topics.",
        whySeoAeo:
          "Strengthens internal linking and topic-cluster signals, helping crawlers and retrieval systems understand how a page fits into a broader topic authority story.",
        whatGoodLooksLike: "Genuinely related posts, not just 'most recent,' with descriptive link text instead of 'read more.'",
      },
      {
        id: "comments-social-proof",
        marker: "6",
        label: "Comments / social proof",
        whatItIs: "Comments, share counts, or testimonials showing real people engaged with the content.",
        whySeoAeo:
          "A soft trust/engagement signal — thin on its own, but part of the broader pattern of 'does this look like a page people actually find useful.'",
        whatGoodLooksLike: "Real engagement or credible testimonials — better to omit than show an empty comment section.",
      },
    ],
  },
  {
    slug: "product-page",
    title: "Product Page",
    status: "full",
    summary: "A single SKU or offering's dedicated page — where consideration turns into purchase intent.",
    zones: [
      {
        id: "title-price",
        marker: "1",
        label: "Title & price block",
        whatItIs: "Product name, price, and core identifying details at the top of the page.",
        whySeoAeo:
          "Often the exact passage cited when someone asks an AI 'how much does X cost' or 'does X have Y feature' — needs to be unambiguous and current.",
        whatGoodLooksLike: "A specific product name, an accurate visible price not rendered only via script a crawler can't see.",
      },
      {
        id: "image-gallery",
        marker: "2",
        label: "Image gallery",
        whatItIs: "Product photos, often with zoom or a carousel of angles.",
        whySeoAeo:
          "Alt text here is a meaningful, underused signal — one of the few ways image content becomes text-searchable and model-legible.",
        whatGoodLooksLike: "Descriptive alt text per image, not a repeated generic string or the filename.",
      },
      {
        id: "description-specs",
        marker: "3",
        label: "Description & specs",
        whatItIs: "The written product description plus a structured specs/attributes table.",
        whySeoAeo:
          "Structured specs in real markup (table/list, not an image) are some of the most reliably extractable content on the web — exactly what a retrieval system prefers to cite.",
        whatGoodLooksLike: "Specs in real HTML markup; description that says something a spec sheet can't.",
      },
      {
        id: "reviews-ratings",
        marker: "4",
        label: "Reviews & ratings",
        whatItIs: "Customer star ratings and written reviews.",
        whySeoAeo:
          "A major source of the specific, concrete language ('the strap wore out after 3 months') that both search snippets and AI answers like to pull from.",
        whatGoodLooksLike: "Real, unedited reviews with structured rating markup, not just a static star image.",
      },
      {
        id: "add-to-cart-cta",
        marker: "5",
        label: "Add-to-cart / primary CTA",
        whatItIs: "The primary conversion action — add to cart, buy now, request quote.",
        whySeoAeo:
          "Not an SEO/AEO signal directly, but this is the page's actual job — visibility work is wasted if this step has friction.",
        whatGoodLooksLike: "One unambiguous primary action; stock/availability shown honestly.",
      },
      {
        id: "cross-sell",
        marker: "6",
        label: "Related / cross-sell products",
        whatItIs: "A module suggesting related or complementary products.",
        whySeoAeo:
          "Supports internal linking between product pages, helping a crawler and a retrieval system understand the catalog's structure.",
        whatGoodLooksLike: "Genuinely related items for the same use case, not just 'other things in this category.'",
      },
    ],
  },
  {
    slug: "homepage",
    title: "Homepage",
    status: "full",
    summary: "The default entry point for brand-name and navigational traffic — and often the page an AI system leans on to understand 'what is this company.'",
    zones: [
      {
        id: "hero-value-prop",
        marker: "1",
        label: "Hero / value proposition",
        whatItIs: "The headline and subhead at the top stating what the company does and for whom.",
        whySeoAeo:
          "Often the clearest statement of entity identity on the whole site — a major input to how both search engines and AI systems understand 'what is this company.'",
        whatGoodLooksLike: "A specific, plain-language statement of what you do and who it's for, not an abstract tagline.",
      },
      {
        id: "primary-nav",
        marker: "2",
        label: "Primary navigation",
        whatItIs: "The top navigation bar linking to the site's main sections.",
        whySeoAeo: "A site-architecture signal — a clear, shallow nav helps both classic crawling and a model's sense of what the site covers.",
        whatGoodLooksLike: "A small number of clearly labeled top-level sections, not a mega-menu trying to surface everything.",
      },
      {
        id: "social-proof-logos",
        marker: "3",
        label: "Social proof / logos",
        whatItIs: "Customer logos, review scores, or press mentions shown near the top.",
        whySeoAeo: "An authority/trust signal that indirectly supports being treated as a credible source.",
        whatGoodLooksLike: "Real, current, recognizable logos with permission — outdated logos undercut more than they help.",
      },
      {
        id: "product-solution-overview",
        marker: "4",
        label: "Product / solution overview",
        whatItIs: "A section, often with sub-cards, summarizing the company's main products or solution areas.",
        whySeoAeo:
          "Gives crawlers and retrieval systems a structured map of the offering — often what gets excerpted when a model is asked 'what does this company offer.'",
        whatGoodLooksLike: "Distinct, non-overlapping cards linking to real dedicated pages, not just same-page anchors.",
      },
      {
        id: "homepage-cta",
        marker: "5",
        label: "Primary CTA",
        whatItIs: "The primary conversion action on the homepage — demo request, sign-up, contact sales.",
        whySeoAeo: "Same logic as a product page CTA — visibility work is wasted if the homepage doesn't convert once someone lands.",
        whatGoodLooksLike: "One clear primary action, not competing CTAs pulling in different directions.",
      },
      {
        id: "footer-sitemap",
        marker: "6",
        label: "Footer / sitemap links",
        whatItIs: "The footer, typically containing a fuller link map of the site plus legal/contact info.",
        whySeoAeo:
          "A meaningful crawl/discovery aid for pages not reachable from the primary nav, and often where entity info feeding knowledge panels lives.",
        whatGoodLooksLike: "A genuine sitemap of important pages, not a dumping ground; accurate legal/contact details.",
      },
    ],
  },
  {
    slug: "product-description-vs-listing",
    title: "Product Description vs. Listing Page",
    status: "stub",
    summary: "The difference between a single product's detail page and a category/listing page showing many products.",
    zones: [],
  },
  {
    slug: "resource-kb-page",
    title: "Resource / Knowledge-Base Page",
    status: "stub",
    summary: "Documentation-style, task-oriented pages — different structure and intent from a marketing blog post.",
    zones: [],
  },
  {
    slug: "marketing-landing-page",
    title: "Marketing / Landing Page",
    status: "stub",
    summary: "A focused, single-conversion-goal page, usually built for a specific campaign or channel.",
    zones: [],
  },
];
