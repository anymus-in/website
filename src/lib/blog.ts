/**
 * Blog post registry — the single source of truth for post metadata, shared
 * by the blog index, the post pages, the sitemap, and JSON-LD. The article
 * bodies live in src/content/blog/<slug>.mdx and are dynamically imported by
 * the post route; this file deliberately holds metadata only, keeping it
 * typed and hand-maintained like services.ts / solutions.ts.
 */
export interface PostMeta {
  slug: string;
  /** Display title — the page <h1> and index label. */
  title: string;
  /** <title> tag (the template appends "| anymus"). */
  seoTitle: string;
  /** Meta description + OG description. */
  metaDescription: string;
  /** One-line standfirst under the title on the post page and index. */
  standfirst: string;
  /** ISO date of first publication. */
  date: string;
  /** ISO date of last substantive update. Drives sitemap lastModified. */
  updated: string;
  /** Reading time, precomputed by hand (e.g. "6 min"). */
  readingTime: string;
  tags: string[];
  /** Parent service most relevant to the post. */
  relatedServiceSlug: string;
  /** Solutions (solutions.ts) the post should cross-link. */
  relatedSolutionSlugs: string[];
}

export const posts: PostMeta[] = [
  {
    slug: "if-it-has-to-be-remembered-its-broken",
    title: "If Someone Has to Remember It, the System Is Broken",
    seoTitle: "If Someone Has to Remember It, the System Is Broken",
    metaDescription:
      "The operating philosophy behind everything anymus builds: any process that depends on a person remembering — a follow-up, an invoice, a report — is a leak. Here's how to find yours.",
    standfirst:
      "The single test we apply to every business process — and what it reveals about where growth quietly leaks away.",
    date: "2026-07-12",
    updated: "2026-07-12",
    readingTime: "6 min",
    tags: ["philosophy", "automation", "operations"],
    relatedServiceSlug: "automation",
    relatedSolutionSlugs: ["whatsapp-lead-automation", "invoice-billing-automation"],
  },
  {
    slug: "the-growth-wall",
    title: "The Wall Every Growing Business Hits",
    seoTitle: "The Growth Wall — Why More Software Isn't the Fix",
    metaDescription:
      "Enquiries rise, follow-ups slip, information fragments, owners lose visibility. The growth wall isn't a tooling problem — it's a connection problem. Here's the pattern and the way through.",
    standfirst:
      "It isn't a lack of tools. Most businesses hit the wall with seven tools and zero connections between them.",
    date: "2026-07-12",
    updated: "2026-07-12",
    readingTime: "7 min",
    tags: ["operations", "growth", "systems"],
    relatedServiceSlug: "automation",
    relatedSolutionSlugs: ["lead-routing-qualification", "crm-setup"],
  },
  {
    slug: "signs-you-need-a-crm",
    title: "5 Signs Your Business Has Outgrown Spreadsheets",
    seoTitle: "5 Signs Your Business Has Outgrown Spreadsheets",
    metaDescription:
      "Spreadsheets are where growing businesses start — and where growth quietly stalls. Five concrete signs it's time to move customer data into a real system, and what that move looks like.",
    standfirst:
      "The spreadsheet didn't fail. The business outgrew it. Here's how to tell when that's happened.",
    date: "2026-07-12",
    updated: "2026-07-12",
    readingTime: "6 min",
    tags: ["crm", "spreadsheets", "operations"],
    relatedServiceSlug: "automation",
    relatedSolutionSlugs: ["crm-setup", "business-dashboards"],
  },
  {
    slug: "whatsapp-crm-automation-india",
    title: "Why WhatsApp + CRM Is the Fastest ROI for Indian SMBs",
    seoTitle: "WhatsApp + CRM Automation — the Fastest ROI for Indian SMBs",
    metaDescription:
      "For Indian businesses, the leads already arrive on WhatsApp. Connecting it to a CRM is the highest-leverage automation available — here's why, and what the setup involves.",
    standfirst:
      "Your customers already chose the channel. The only question is whether a system is on the other end of it.",
    date: "2026-07-12",
    updated: "2026-07-12",
    readingTime: "7 min",
    tags: ["whatsapp", "crm", "india", "automation"],
    relatedServiceSlug: "automation",
    relatedSolutionSlugs: ["whatsapp-lead-automation", "crm-setup"],
  },
  {
    slug: "custom-internal-tools-cost",
    title: "What Custom Internal Tools Actually Cost",
    seoTitle: "Custom Internal Tools Cost — Offshore vs Local Agency Pricing",
    metaDescription:
      "An honest breakdown of what dashboards, portals, and internal tools cost — how offshore and local agency pricing really compare, where the risks are, and how to buy well either way.",
    standfirst:
      "The honest version of the pricing conversation — including the trade-offs agencies usually leave out.",
    date: "2026-07-12",
    updated: "2026-07-12",
    readingTime: "8 min",
    tags: ["pricing", "internal-tools", "offshore"],
    relatedServiceSlug: "internal-systems",
    relatedSolutionSlugs: ["business-dashboards", "client-portal-development"],
  },
];

export function getPostMeta(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts sorted newest first for the index. */
export function postsByDate(): PostMeta[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
