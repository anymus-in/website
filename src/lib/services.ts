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

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export type ServiceAccent = "amber" | "green" | "blue";

/** Selects which animated mock-UI visual (defined in service-visuals.tsx) renders in the hero. */
export type ServiceVisualKey = "erp" | "crm" | "automation" | "website";

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
  /** Icon used in cards and page headers. */
  icon: LucideIcon;
  /** Brand accent for the icon tile + small color cues (solid, no gradients). */
  accent: ServiceAccent;
  /** Animated mock-UI visual shown in the page hero. */
  visualKey: ServiceVisualKey;
  /** Short signs/symptoms that indicate a business needs this service. */
  signs: string[];
  /** Service-specific implementation steps (3-4), shown on the detail page. */
  process: ServiceProcessStep[];
  /** Service-specific FAQs (3-4), shown on the detail page. */
  faqs: ServiceFaqItem[];
}

/** Solid accent classes per service — restrained color, no gradient washes. */
export const accentTile: Record<
  ServiceAccent,
  { tile: string; text: string; bar: string }
> = {
  amber: { tile: "bg-grad-amber/15", text: "text-accent-ink", bar: "bg-grad-amber" },
  green: { tile: "bg-grad-green/15", text: "text-[#1F8A56]", bar: "bg-grad-green" },
  blue: { tile: "bg-grad-blue/15", text: "text-grad-blue", bar: "bg-grad-blue" },
};

export const services: Service[] = [
  {
    slug: "erp-implementation",
    name: "ERP Implementation",
    icon: Boxes,
    accent: "amber",
    visualKey: "erp",
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
    signs: [
      "Inventory counts in your system never quite match what's actually on the shelf",
      "Stock, orders, and finance live in different tools that don't talk to each other",
      "Closing the books takes days of manually reconciling spreadsheets",
      "You've outgrown your current setup but dread the idea of switching systems",
    ],
    process: [
      {
        title: "Discovery & data audit",
        description:
          "We map your current inventory, purchasing, and fulfillment workflows, and audit the state of your existing data before anything gets migrated.",
      },
      {
        title: "Configuration & migration",
        description:
          "We configure the ERP around your real processes and migrate your existing data in, cleaning up inconsistencies as we go rather than carrying them over.",
      },
      {
        title: "Integration",
        description:
          "We connect the ERP to the other systems you rely on — accounting, e-commerce, CRM — so data moves automatically instead of being re-entered by hand.",
      },
      {
        title: "Go-live & training",
        description:
          "Your team learns the system hands-on before cutover, with support on hand through the first weeks of going live.",
      },
    ],
    faqs: [
      {
        question: "Will there be downtime while we switch over?",
        answer:
          "We plan the cutover around your operations — typically a short, scheduled window rather than an open-ended migration — and confirm a rollback plan before go-live.",
      },
      {
        question: "What if our current data is messy or incomplete?",
        answer:
          "That's normal. The data audit in discovery is where we catch and clean up inconsistencies, rather than migrating bad data into a new system.",
      },
      {
        question: "Which ERP platforms do you implement?",
        answer:
          "The right platform depends on your size, industry, and existing tools — we'll recommend a fit after discovery rather than pushing a single platform.",
      },
      {
        question: "Can it connect to our existing accounting or e-commerce tools?",
        answer:
          "Yes — integration with the tools you already use is part of the implementation, not a separate project.",
      },
    ],
  },
  {
    slug: "crm",
    name: "CRM Implementation",
    icon: Users,
    accent: "blue",
    visualKey: "crm",
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
    signs: [
      "Leads are tracked across spreadsheets, inboxes, and someone's memory",
      "Reps can't say with confidence where a deal actually stands",
      "Follow-ups get missed because nothing reminds anyone to send them",
      "Sales reporting takes manual compiling instead of opening a dashboard",
    ],
    process: [
      {
        title: "Discovery & pipeline mapping",
        description:
          "We map your real sales motion — stages, fields, and the people involved — instead of starting from a vendor's default pipeline.",
      },
      {
        title: "Configuration",
        description:
          "We build out pipelines, fields, permissions, and reporting around that real motion, so the CRM matches how your team actually sells.",
      },
      {
        title: "Migration & integration",
        description:
          "Existing contacts and deal history move in, and the CRM connects to your inbox, calendar, and other tools so reps aren't duplicating work.",
      },
      {
        title: "Launch & adoption",
        description:
          "We train the team hands-on before go-live, since a CRM only pays off if reps actually use it day to day.",
      },
    ],
    faqs: [
      {
        question: "Our team has resisted CRMs before — how is this different?",
        answer:
          "Most CRM rollouts fail because the system doesn't match how the team actually sells. We configure around your real pipeline first, then train hands-on, instead of handing over a generic default setup.",
      },
      {
        question: "Which CRM platforms do you work with?",
        answer:
          "The right platform depends on your sales motion, team size, and existing tools — we'll recommend a fit after discovery rather than pushing a single platform.",
      },
      {
        question: "Can you migrate our existing contacts and deal history?",
        answer:
          "Yes — migrating what you already have is part of the implementation, cleaned up along the way rather than carried over as-is.",
      },
      {
        question: "Will it connect to our email and calendar?",
        answer:
          "Yes — connecting the tools reps already work in is part of the setup, so logging activity doesn't become a second job.",
      },
    ],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    icon: Workflow,
    accent: "green",
    visualKey: "automation",
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
    signs: [
      "Someone is copying the same data between two or more tools by hand",
      "Status updates depend on people remembering to send them",
      "Approvals stall in someone's inbox waiting to be noticed",
      "Exceptions get caught only after a customer complains, not before",
    ],
    process: [
      {
        title: "Process mapping",
        description:
          "We document the manual steps as they actually happen today — the handoffs, the workarounds, the things nobody wrote down.",
      },
      {
        title: "Workflow design",
        description:
          "We design automations that trigger off real activity in your systems, replacing manual steps without changing how your team works day to day.",
      },
      {
        title: "Build & connect",
        description:
          "We build and connect the automations between the tools you already use, with exception handling so edge cases get flagged, not buried.",
      },
      {
        title: "Launch & monitor",
        description:
          "We launch the workflows, watch how they behave against real activity, and tune them based on what actually happens.",
      },
    ],
    faqs: [
      {
        question: "What kinds of tasks can actually be automated?",
        answer:
          "Anything currently manual between your tools — data entry, approvals, handoffs, status updates — as long as it follows a consistent trigger and rule.",
      },
      {
        question: "What happens when something doesn't fit the rules?",
        answer:
          "Exceptions get flagged and routed to a person instead of failing silently or getting forced through incorrectly.",
      },
      {
        question: "Do we need to replace our existing tools?",
        answer:
          "No — automation typically connects the tools you already use rather than requiring you to switch platforms.",
      },
      {
        question: "How do we know the automation is working correctly?",
        answer:
          "We monitor it against real activity after launch and tune the rules based on what actually happens, not just what we expected to happen.",
      },
    ],
  },
  {
    slug: "website-design",
    name: "Website Design & Development",
    icon: Globe,
    accent: "amber",
    visualKey: "website",
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
    signs: [
      "You don't have a website, or it's just a Google Business listing",
      "Your current site hasn't been updated in years and doesn't reflect the business anymore",
      "Enquiries from your site land in a generic inbox instead of your CRM",
      "You're losing credibility to competitors with a more professional online presence",
    ],
    process: [
      {
        title: "Discovery & content",
        description:
          "We map what the site needs to communicate and pull together the content and copy, rather than handing you a template to fill in yourself.",
      },
      {
        title: "Design",
        description:
          "We design a site that represents the business — fast, professional, and built around how customers actually find and contact you.",
      },
      {
        title: "Build & integrate",
        description:
          "We build the site and connect it to the same CRM and systems we set up for you, so enquiries flow straight into your pipeline.",
      },
      {
        title: "Launch",
        description:
          "We publish the site and confirm everything — forms, tracking, integrations — is working before handing it over.",
      },
    ],
    faqs: [
      {
        question: "How long does a website take from start to launch?",
        answer:
          "Most sites are ready in weeks, not months — we'll give you a clear timeline after scoping the content and pages you need.",
      },
      {
        question: "Do you write the content and copy too?",
        answer:
          "Yes — content and copy are handled as part of the build, not handed back to you as a half-finished template.",
      },
      {
        question: "Will it connect to our CRM?",
        answer:
          "Yes — if we've implemented your CRM, the site connects to it directly so enquiries land in your pipeline instead of a separate inbox.",
      },
      {
        question: "What if we already have a website but it's outdated?",
        answer:
          "We can rebuild on top of what you have or start fresh — whichever gets you to a site that actually represents the business faster.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
