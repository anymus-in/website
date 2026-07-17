import type { LucideIcon } from "lucide-react";
import { Globe, LayoutGrid, Workflow } from "lucide-react";

/**
 * Canonical service definitions — the single source of truth shared by the
 * service detail pages, the services hub, the sitemap, JSON-LD, and internal
 * links. Keep marketing copy here consistent with the homepage service index.
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
export type ServiceVisualKey = "website" | "automation" | "internal";

export interface Service {
  slug: string;
  /** Full service name — used as the page <h1> and nav label. */
  name: string;
  /** schema.org serviceType / category keyword. */
  serviceType: string;
  /** <title> tag (the template appends "— Anymus"). */
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
    slug: "digital-presence",
    name: "Digital Presence",
    icon: Globe,
    accent: "blue",
    visualKey: "website",
    serviceType: "Website design and development",
    seoTitle: "Digital Presence — Websites & Landing Pages",
    metaDescription:
      "Anymus designs and builds fast, conversion-focused websites and landing pages — wired into the CRM and automations that turn every visitor into a tracked, followed-up lead.",
    eyebrow: "Digital Presence",
    intro: "A website that turns visitors into customers.",
    body: "Your website is the first impression and the front door to everything else. We design and build fast, polished sites and landing pages that look like the company you're becoming — then wire them into your CRM and automations so every enquiry is captured, routed, and followed up, instead of lost in an inbox.",
    outcomes: [
      {
        title: "A fast, conversion-focused site built end to end",
        description:
          "Design, build, content, and copy — handled for you, not handed back as a half-finished template.",
      },
      {
        title: "Wired into your CRM and automations from day one",
        description:
          "Every enquiry lands in your pipeline and triggers a follow-up, not a dead inbox.",
      },
      {
        title: "Live in weeks, built to scale",
        description:
          "A clear scope and timeline get you launched fast, on a foundation that grows with the business.",
      },
    ],
    signs: [
      "You don't have a website, or it's just a Google Business listing",
      "Your current site looks dated and no longer reflects the business",
      "Enquiries from your site disappear into a generic inbox",
      "You're losing credibility to competitors with a sharper online presence",
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
          "We design a site that represents the business — fast, professional, and built around how customers actually find and decide.",
      },
      {
        title: "Build & integrate",
        description:
          "We develop the site and connect it to your CRM and automations, so enquiries flow straight into your pipeline and get followed up.",
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
        question: "Will it connect to our CRM and automations?",
        answer:
          "Yes — the site plugs into the CRM and automations we set up, so enquiries land in your pipeline and trigger follow-ups automatically.",
      },
      {
        question: "What if we already have a website but it's outdated?",
        answer:
          "We can rebuild on what you have or start fresh — whichever gets you to a site that actually represents the business faster.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    icon: Workflow,
    accent: "green",
    visualKey: "automation",
    serviceType: "Business process and workflow automation",
    seoTitle: "Automation — WhatsApp, CRM & Workflows",
    metaDescription:
      "Anymus automates the busywork between your tools — WhatsApp and CRM workflows, lead routing, and follow-ups that run themselves — so no enquiry is ever lost or forgotten.",
    eyebrow: "Automation",
    intro: "Workflows that run themselves.",
    body: "Every lead, follow-up, and handoff that depends on someone remembering is a leak in the business. We automate the work between your tools — capturing enquiries from WhatsApp and your website into a CRM, routing them to the right person, and firing off follow-ups the moment something changes. Nothing waits on a reminder, and exceptions get flagged instead of slipping through.",
    outcomes: [
      {
        title: "Leads captured and routed automatically",
        description:
          "Enquiries from WhatsApp, forms, and calls land in one CRM and reach the right person instantly — no lead lost in an inbox.",
      },
      {
        title: "Follow-ups that send themselves",
        description:
          "Reminders, status updates, and nudges fire off real activity, so the manual chasing stops.",
      },
      {
        title: "Exceptions flagged, not buried",
        description:
          "When something doesn't fit the rules, the system surfaces it for a person instead of failing silently.",
      },
    ],
    signs: [
      "Leads get lost between WhatsApp, inboxes, and someone's memory",
      "Your team spends hours a week on manual follow-ups and data entry",
      "The same information gets copied by hand between two or more tools",
      "Approvals and handoffs stall because nothing moves them along",
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
          "We design automations that trigger off real activity, replacing manual steps without changing how your team works day to day.",
      },
      {
        title: "Build & connect",
        description:
          "We build and connect the workflows across WhatsApp, your CRM, and the rest of your tools, with exception handling so edge cases get flagged, not buried.",
      },
      {
        title: "Launch & monitor",
        description:
          "We launch the workflows, watch how they behave against real activity, and tune them based on what actually happens.",
      },
    ],
    faqs: [
      {
        question: "What kinds of work can actually be automated?",
        answer:
          "Lead capture, routing, follow-ups, data entry, approvals, and status updates — anything between your tools that follows a consistent trigger and rule.",
      },
      {
        question: "We don't have a CRM yet — is that a problem?",
        answer:
          "No. Setting up and configuring a CRM around how you sell is part of the work, so your automations have one clean place to capture and route leads.",
      },
      {
        question: "Do we need to replace our existing tools?",
        answer:
          "No — automation typically connects the tools you already use, including WhatsApp, rather than requiring you to switch platforms.",
      },
      {
        question: "How do we know the automation is working correctly?",
        answer:
          "We monitor it against real activity after launch and tune the rules based on what actually happens, not just what we expected.",
      },
    ],
  },
  {
    slug: "internal-systems",
    name: "Internal Systems",
    icon: LayoutGrid,
    accent: "amber",
    visualKey: "internal",
    serviceType: "Custom internal tools, dashboards, and portals",
    seoTitle: "Internal Systems — Dashboards & Portals",
    metaDescription:
      "Anymus builds the dashboards, portals, and internal tools that run your operations — real-time visibility and one source of truth, instead of a dozen disconnected spreadsheets.",
    eyebrow: "Internal Systems",
    intro: "Custom tools to run your operations.",
    body: "When the business runs on a dozen spreadsheets and gut feel, growth gets risky. We build the internal tools that give you a single source of truth — dashboards that show how the business is really doing, client and team portals, and management software shaped around how you actually operate. Real-time visibility, one trusted record, decisions you can stand behind.",
    outcomes: [
      {
        title: "One dashboard instead of a dozen spreadsheets",
        description:
          "Revenue, operations, and pipeline in one real-time view — not scattered across files and people.",
      },
      {
        title: "Tools built around how you actually work",
        description:
          "Portals, trackers, and internal apps configured to your processes, not a rigid off-the-shelf box.",
      },
      {
        title: "Visibility you can make decisions on",
        description:
          "Live numbers you trust, so planning is based on data instead of whoever asked last.",
      },
    ],
    signs: [
      "The business runs on a dozen spreadsheets that don't agree with each other",
      "You can't get a clear, current view of how the business is performing",
      "Reporting means someone manually compiling numbers every week",
      "Critical information lives in people's heads instead of a system",
    ],
    process: [
      {
        title: "Discovery & data audit",
        description:
          "We map how your operations actually run and audit the data you already have before anything gets built or migrated.",
      },
      {
        title: "Design & configuration",
        description:
          "We design the dashboards, portals, and tools around your real processes, so the system matches how your team works.",
      },
      {
        title: "Build & integrate",
        description:
          "We build the tools and connect them to your existing systems, so data flows in automatically instead of being re-entered by hand.",
      },
      {
        title: "Go-live & training",
        description:
          "Your team learns the system hands-on before cutover, with support on hand through the first weeks of going live.",
      },
    ],
    faqs: [
      {
        question: "Is this custom software, or off-the-shelf tools?",
        answer:
          "Whichever fits — we configure proven platforms where they work and build custom where your process needs it, rather than forcing the business into a rigid box.",
      },
      {
        question: "Will it connect to our existing tools?",
        answer:
          "Yes — connecting to the systems you already use so data flows in automatically is part of the build, not a separate project.",
      },
      {
        question: "What if our data is messy or spread across spreadsheets?",
        answer:
          "That's normal. The data audit in discovery is where we consolidate and clean things up, rather than carrying inconsistencies into the new system.",
      },
      {
        question: "Can it grow with us?",
        answer:
          "Yes — we design for where the business is heading, so the system scales instead of becoming the next thing you rip out.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
