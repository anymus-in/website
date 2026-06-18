import type { LucideIcon } from "lucide-react";
import { Boxes, Globe, Users, Workflow } from "lucide-react";

/**
 * Canonical service definitions — the single source of truth shared by the
 * service detail pages, the services hub, the sitemap, JSON-LD, and internal
 * links. Keep marketing copy here consistent with the homepage FeatureBlocks
 * section.
 */
export interface ServiceOutcome {
  title: string;
  description: string;
}

export type ServiceAccent = "amber" | "green" | "blue";

export interface Service {
  slug: string;
  /** Full service name — used as the page <h1> and nav label. */
  name: string;
  /** schema.org serviceType / category keyword. */
  serviceType: string;
  /** <title> tag (the template appends "— anymus"). */
  seoTitle: string;
  /** Meta description + OG description. */
  metaDescription: string;
  /** Small uppercase eyebrow above the h1. */
  eyebrow: string;
  /** One-line lead under the h1. */
  intro: string;
  /** Body paragraph(s) expanding on the service. */
  body: string;
  /** Concrete outcomes/what's included. */
  outcomes: ServiceOutcome[];
  /** Brand accent + icon for visual theming. */
  accent: ServiceAccent;
  icon: LucideIcon;
}

/** Tailwind class sets per accent — shared by the hub and detail pages. */
export const accentClasses: Record<
  ServiceAccent,
  { chip: string; iconWrap: string; gradient: string }
> = {
  amber: {
    chip: "border-grad-amber/40 bg-grad-amber/10 text-accent-ink",
    iconWrap: "bg-grad-amber/15 text-accent-ink",
    gradient: "from-grad-amber/25 via-grad-amber/5 to-transparent",
  },
  green: {
    chip: "border-grad-green/30 bg-grad-green/10 text-[#1F8A56]",
    iconWrap: "bg-grad-green/15 text-[#1F8A56]",
    gradient: "from-grad-green/25 via-grad-green/5 to-transparent",
  },
  blue: {
    chip: "border-grad-blue/30 bg-grad-blue/10 text-grad-blue",
    iconWrap: "bg-grad-blue/15 text-grad-blue",
    gradient: "from-grad-blue/25 via-grad-blue/5 to-transparent",
  },
};

export const services: Service[] = [
  {
    slug: "erp-implementation",
    name: "ERP Implementation",
    accent: "amber",
    icon: Boxes,
    serviceType: "ERP implementation and configuration",
    seoTitle: "ERP Implementation Services",
    metaDescription:
      "anymus implements and configures ERP systems around how your business actually operates — inventory, orders, and operations in one connected system, with real-time visibility.",
    eyebrow: "ERP Implementation",
    intro: "An ERP that finally matches how you operate.",
    body: "We implement and configure your ERP around your real processes — not a generic out-of-the-box template. Inventory, purchasing, orders, and operations live in one connected system, so your team stops reconciling spreadsheets and starts trusting a single source of truth.",
    outcomes: [
      {
        title: "Inventory, orders, and operations in one connected system",
        description:
          "Configured around your real processes, not a generic out-of-the-box template.",
      },
      {
        title: "Real-time visibility into stock, costs, and fulfillment",
        description:
          "Know what's in stock, what it costs, and where every order stands — without chasing people.",
      },
      {
        title: "Built to grow with you, not be replaced in two years",
        description:
          "We design for where your business is heading, so the system scales instead of becoming the next thing you rip out.",
      },
    ],
  },
  {
    slug: "crm",
    name: "CRM Implementation",
    accent: "blue",
    icon: Users,
    serviceType: "CRM implementation and configuration",
    seoTitle: "CRM Implementation Services",
    metaDescription:
      "anymus configures a CRM your sales team actually uses — pipelines, fields, permissions, and reporting built around how you sell, so no lead is ever lost in a spreadsheet again.",
    eyebrow: "CRM Solutions",
    intro: "A CRM your sales team actually uses.",
    body: "We implement and configure your CRM around real pipelines, fields, permissions, and reporting — not a generic template. Every rep works from the same trusted customer record, so leads stop falling through the cracks and management finally gets reporting it can rely on.",
    outcomes: [
      {
        title: "Pipelines, fields, and reporting built around how you sell",
        description:
          "We configure your CRM around your real sales motion, not a vendor's default setup.",
      },
      {
        title: "No more leads lost in spreadsheets or inboxes",
        description:
          "Every inquiry lands in one place and gets routed to the right person automatically.",
      },
      {
        title: "Every rep sees the same, trusted customer record",
        description:
          "One clean record per customer, shared across the team — no conflicting versions.",
      },
    ],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    accent: "green",
    icon: Workflow,
    serviceType: "Business process automation",
    seoTitle: "Business Automation & Workflow Services",
    metaDescription:
      "anymus replaces manual busywork with automated workflows that run between the tools you already use — data entry, approvals, handoffs, and status updates that run themselves.",
    eyebrow: "Business Automation",
    intro: "Workflows that run themselves.",
    body: "Whatever's currently manual between your tools — data entry, approvals, handoffs, status updates — we replace with workflows that run on their own, triggered by activity in your systems. Nothing depends on someone remembering to do it, and exceptions get flagged instead of slipping through.",
    outcomes: [
      {
        title: "Replaces busywork with workflows that run themselves",
        description:
          "Manual handoffs and updates are automated between the tools you already use.",
      },
      {
        title: "Triggers the right action the moment something changes",
        description:
          "Activity in one system kicks off the next step automatically — no waiting, no reminders.",
      },
      {
        title: "Flags exceptions instead of letting them slip through",
        description:
          "When something doesn't fit the rules, the system surfaces it rather than burying it.",
      },
    ],
  },
  {
    slug: "website-design",
    name: "Website Design & Development",
    accent: "amber",
    icon: Globe,
    serviceType: "Website design and development",
    seoTitle: "Website Design & Development Services",
    metaDescription:
      "No website yet, an outdated one, or just a Google Business listing? anymus designs, builds, and launches a fast, professional site — connected to the CRM and systems we set up for you.",
    eyebrow: "Website Design & Development",
    intro: "A website when you don't have one yet.",
    body: "No website, an outdated one, or just a Google Business listing? We design, build, and ship a site that actually represents the business — fast, professional, and connected to the same CRM and systems we set up for you, so enquiries flow straight into your pipeline.",
    outcomes: [
      {
        title: "A fast, professional site built and launched for you",
        description:
          "Design, build, content, and copy — handled end to end, not handed back as a half-finished template.",
      },
      {
        title: "Connected to the same CRM and systems we set up for you",
        description:
          "Enquiries land directly in your pipeline instead of a disconnected inbox.",
      },
      {
        title: "Ready in weeks, not months",
        description:
          "A clear scope and timeline so you're live quickly, with something your team and customers actually use.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
