import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  Gauge,
  GitBranch,
  Link2,
  MessageCircle,
  MessageSquareText,
  PanelsTopLeft,
  Receipt,
  Database,
} from "lucide-react";
import type { ServiceAccent, ServiceFaqItem, ServiceProcessStep } from "./services";

/**
 * Canonical solution definitions — problem-scoped offerings that sit under a
 * parent service. Single source of truth shared by the solutions hub, the
 * solution detail pages, the sitemap, JSON-LD, and cross-links from service
 * pages. Same shape discipline as services.ts.
 */
export interface Solution {
  slug: string;
  /** Full solution name — used as the page <h1> and card label. */
  name: string;
  /** schema.org serviceType / category keyword. */
  serviceType: string;
  /** <title> tag (the template appends "| anymus"). */
  seoTitle: string;
  /** Meta description + OG description. */
  metaDescription: string;
  /** Small uppercase eyebrow above the h1. */
  eyebrow: string;
  /** One-line problem→outcome statement, used as the page h1. */
  intro: string;
  /** The "before" — how this problem shows up day to day. */
  problem: string;
  /** The "after" — what running on the system looks like. */
  outcome: string;
  /** Short signs/symptoms that indicate a business needs this solution. */
  signs: string[];
  /** How the build works (3-4 steps), mirrors Service.process. */
  howItWorks: ServiceProcessStep[];
  /** Parent service in services.ts that delivers this solution. */
  relatedServiceSlug: string;
  /** Industries (industries.ts) where this solution is common. */
  relatedIndustrySlugs: string[];
  /** Solution-specific FAQs (3-4), shown on the detail page. */
  faqs: ServiceFaqItem[];
  /** Icon used in cards and page headers. */
  icon: LucideIcon;
  /** Brand accent — inherits the parent service's accent by convention. */
  accent: ServiceAccent;
}

export const solutions: Solution[] = [
  {
    slug: "whatsapp-lead-automation",
    name: "WhatsApp Lead Automation",
    icon: MessageCircle,
    accent: "green",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["clinics-healthcare", "real-estate", "education-coaching"],
    serviceType: "WhatsApp lead capture and follow-up automation",
    seoTitle: "WhatsApp Lead Capture & Follow-Up Automation",
    metaDescription:
      "anymus wires WhatsApp into your CRM so every enquiry is captured, routed, and followed up automatically — no lead left sitting unread in a chat.",
    eyebrow: "WhatsApp Automation",
    intro: "Every WhatsApp enquiry, captured and followed up.",
    problem:
      "For most Indian businesses, WhatsApp is where the leads actually arrive — and where they quietly die. Enquiries land in a personal chat, get a reply if someone's free, and then sink under the next hundred messages. Nobody knows how many leads came in this week, who replied, or which conversations went cold. The business runs on whoever remembers to scroll back.",
    outcome:
      "With the system in place, every WhatsApp enquiry becomes a CRM record the moment it arrives. The right person gets notified, a first response goes out immediately, and follow-ups fire on a schedule until there's an answer — while you see every open conversation and its status in one pipeline instead of someone's phone.",
    signs: [
      "Leads arrive on WhatsApp but live and die inside chat threads",
      "First replies depend on who's free — sometimes hours, sometimes never",
      "Nobody can say how many enquiries came in last week, or from where",
      "Conversations go cold because no one remembered to follow up",
    ],
    howItWorks: [
      {
        title: "Map the enquiry flow",
        description:
          "We trace where WhatsApp enquiries come from — ads, the website, referrals — and what should happen to each type, before touching any tooling.",
      },
      {
        title: "Connect WhatsApp to a CRM",
        description:
          "Using the WhatsApp Business API, every incoming enquiry creates or updates a CRM record automatically, with the full conversation attached.",
      },
      {
        title: "Automate the follow-up",
        description:
          "Instant first responses, scheduled nudges, and routing to the right person — all triggered by real activity, with edge cases flagged for a human.",
      },
      {
        title: "Launch & tune",
        description:
          "We watch the first weeks of real conversations and tune the rules — timings, templates, routing — against what actually happens.",
      },
    ],
    faqs: [
      {
        question: "Does this work with a normal WhatsApp number?",
        answer:
          "It runs on the WhatsApp Business API, which we set up as part of the work. Your team keeps replying from a shared inbox instead of one person's phone.",
      },
      {
        question: "Will automated messages feel robotic to customers?",
        answer:
          "No — automation handles capture, routing, and reminders. Actual conversations stay human; the system just makes sure they start fast and never stall.",
      },
      {
        question: "We don't have a CRM yet. Is that a problem?",
        answer:
          "No. Setting up a CRM around how you sell is part of the build, so WhatsApp has one clean place to capture and route every enquiry.",
      },
      {
        question: "How fast can this go live?",
        answer:
          "Most WhatsApp automation setups are live in weeks — the API approval and CRM wiring run in parallel, and we launch on real conversations, not a demo.",
      },
    ],
  },
  {
    slug: "sms-follow-up-automation",
    name: "SMS Follow-Up Automation",
    icon: MessageSquareText,
    accent: "green",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["clinics-healthcare", "professional-services", "real-estate"],
    serviceType: "SMS and missed-call follow-up automation",
    seoTitle: "SMS Follow-Up & Missed-Call Text-Back Automation",
    metaDescription:
      "anymus builds SMS follow-up and missed-call text-back automation — every missed call gets an instant text, every lead gets a timely follow-up, automatically.",
    eyebrow: "SMS Automation",
    intro: "Missed the call? The system already texted them back.",
    problem:
      "Most businesses miss more calls than they realise — during jobs, after hours, mid-conversation with another customer. Each missed call is a buyer who's already dialling the next company on the list. And the leads you do catch go into a notebook or someone's head, where follow-up depends entirely on memory.",
    outcome:
      "With missed-call text-back in place, every unanswered call triggers an instant SMS — \"Sorry we missed you, how can we help?\" — that starts the conversation before the caller moves on. From there, every lead sits in a pipeline with automated follow-ups, so the deal advances even when nobody's at a desk.",
    signs: [
      "Calls go unanswered during busy hours and never get returned",
      "There's no record of who called, when, or what they wanted",
      "Follow-ups happen when someone remembers — which means inconsistently",
      "After-hours enquiries wait until morning, and some don't wait at all",
    ],
    howItWorks: [
      {
        title: "Audit the call flow",
        description:
          "We look at where calls come from, when they're missed, and what happens next today — the baseline the automation has to beat.",
      },
      {
        title: "Wire up text-back",
        description:
          "Missed calls trigger an instant, well-written SMS from your business number, and the caller becomes a tracked lead in your CRM automatically.",
      },
      {
        title: "Automate the follow-through",
        description:
          "Replies route to the right person, reminders fire until there's a resolution, and every conversation is logged against the lead.",
      },
    ],
    faqs: [
      {
        question: "Does this replace our phone system?",
        answer:
          "No — it sits alongside it. Your number and call flow stay the same; the system just catches what the phone misses.",
      },
      {
        question: "What do the automated texts actually say?",
        answer:
          "We write them with you — short, human, and specific to your business. The goal is to start a conversation, not to sound like a robot.",
      },
      {
        question: "Can it handle appointment reminders too?",
        answer:
          "Yes — the same SMS pipeline handles booking confirmations, reminders, and review requests once the lead becomes a customer.",
      },
    ],
  },
  {
    slug: "crm-setup",
    name: "CRM Setup & Configuration",
    icon: Database,
    accent: "green",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["real-estate", "professional-services", "education-coaching"],
    serviceType: "CRM setup, configuration, and adoption",
    seoTitle: "CRM Setup & Configuration — HubSpot, Zoho & More",
    metaDescription:
      "anymus sets up and configures your CRM — HubSpot, Zoho, or the right fit for you — around how you actually sell, with your data migrated and your team onboard.",
    eyebrow: "CRM Setup",
    intro: "A CRM your team actually uses.",
    problem:
      "Most CRMs fail the same way: bought with good intentions, configured by nobody, abandoned within a quarter. The fields don't match how you sell, the pipeline stages are someone else's process, data entry feels like homework — so the team quietly goes back to spreadsheets and WhatsApp, and the CRM becomes a monthly invoice for software nobody opens.",
    outcome:
      "A CRM configured around your actual sales process — your stages, your fields, your follow-up cadence — with existing contacts migrated in clean, enquiries flowing in automatically from your website and WhatsApp, and a team that uses it because it saves them work instead of creating it.",
    signs: [
      "You bought a CRM but the team still lives in spreadsheets and chats",
      "Pipeline stages don't match how deals actually progress",
      "Contact data is split across phones, sheets, and inboxes",
      "Management can't see the pipeline without asking someone to compile it",
    ],
    howItWorks: [
      {
        title: "Map how you sell",
        description:
          "Before configuring anything, we document how enquiries actually become customers — stages, owners, handoffs, and where deals stall today.",
      },
      {
        title: "Pick and configure the platform",
        description:
          "HubSpot, Zoho, or whatever genuinely fits your size and budget — configured to your process, not the vendor's demo pipeline.",
      },
      {
        title: "Migrate and connect",
        description:
          "Existing contacts come in cleaned and de-duplicated, and your website, WhatsApp, and phone leads flow in automatically from day one.",
      },
      {
        title: "Onboard the team",
        description:
          "Hands-on training against real deals — and because capture is automated, the CRM asks less of the team than the spreadsheet did.",
      },
    ],
    faqs: [
      {
        question: "Which CRM do you recommend?",
        answer:
          "The one that fits how you sell and what you'll actually use — often Zoho or HubSpot for growing businesses. We're not resellers; the recommendation follows the process mapping, not a commission.",
      },
      {
        question: "We tried a CRM before and the team abandoned it. Why would this stick?",
        answer:
          "Because most of the data entry is automated away. When leads, conversations, and follow-ups log themselves, the CRM becomes the easiest place to work — not extra homework.",
      },
      {
        question: "Can you migrate our existing mess of spreadsheets?",
        answer:
          "Yes — consolidating, cleaning, and de-duplicating your existing contacts is part of the setup, not a separate project.",
      },
    ],
  },
  {
    slug: "website-to-crm-integration",
    name: "Website-to-CRM Integration",
    icon: Link2,
    accent: "blue",
    relatedServiceSlug: "digital-presence",
    relatedIndustrySlugs: ["real-estate", "professional-services", "retail-ecommerce"],
    serviceType: "Website, form, and CRM integration",
    seoTitle: "Website to CRM Integration — No Lead Left in an Inbox",
    metaDescription:
      "anymus connects your website forms, chat, and calls to your CRM — every visitor enquiry becomes a tracked, routed, followed-up lead instead of an email nobody saw.",
    eyebrow: "Website + CRM",
    intro: "From form fill to follow-up, automatically.",
    problem:
      "The website generates enquiries; the enquiries generate emails; the emails sit in an inbox that three people can see and nobody owns. By the time someone replies, the prospect has heard back from two competitors. The marketing spend that earned the click gets wasted in the last metre — between the form and the follow-up.",
    outcome:
      "Every form fill, chat message, and call from the website lands in the CRM as a lead — source-tagged, routed to the right owner, and answered with an immediate acknowledgement. Follow-ups fire on schedule, and you can finally see which pages and campaigns produce customers, not just traffic.",
    signs: [
      "Website enquiries arrive as emails in a shared inbox nobody owns",
      "Response times are measured in days when they should be minutes",
      "You can't trace which enquiries — or customers — came from the website",
      "Ad spend brings traffic, but nobody knows what happens to it after the click",
    ],
    howItWorks: [
      {
        title: "Audit every entry point",
        description:
          "Forms, chat widgets, call buttons, landing pages — we map every way an enquiry can reach you and where each one currently goes.",
      },
      {
        title: "Wire them into the CRM",
        description:
          "Each entry point feeds the CRM directly, with source tracking, so every lead is tagged with where it came from and routed to its owner.",
      },
      {
        title: "Automate the first response",
        description:
          "Instant acknowledgements, owner notifications, and scheduled follow-ups — so no enquiry waits on someone checking an inbox.",
      },
    ],
    faqs: [
      {
        question: "Do we need a new website for this?",
        answer:
          "No — we integrate what you have. If the site itself needs work, that's a separate conversation we'll flag honestly rather than bundle in.",
      },
      {
        question: "Which form tools and CRMs does this work with?",
        answer:
          "Practically all of the common ones — native forms, Typeform, WordPress plugins, into Zoho, HubSpot, and others. The audit confirms your exact stack before we commit.",
      },
      {
        question: "Will we know which marketing actually works?",
        answer:
          "Yes — because every lead is source-tagged from the first click, you can trace customers back to the page, ad, or campaign that produced them.",
      },
    ],
  },
  {
    slug: "appointment-booking-automation",
    name: "Appointment Booking Automation",
    icon: CalendarClock,
    accent: "green",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["clinics-healthcare", "education-coaching", "professional-services"],
    serviceType: "Appointment booking and reminder automation",
    seoTitle: "Automated Appointment Booking & Reminders",
    metaDescription:
      "anymus automates appointment booking, confirmations, and reminders — customers book themselves in, no-shows drop, and the calendar stops living in someone's head.",
    eyebrow: "Booking Automation",
    intro: "Bookings that make themselves. Reminders that send themselves.",
    problem:
      "Every booking is a small negotiation — three messages to find a slot, a calendar entry someone forgets to make, a reminder that never gets sent, and a no-show that costs real money. Multiply that by every appointment in a week and you have a full-time job that produces nothing but scheduling.",
    outcome:
      "Customers pick a slot themselves from your live availability — on the website or straight from WhatsApp. Confirmations go out instantly, reminders fire the day before and the hour before, reschedules handle themselves, and the calendar, the CRM, and the front desk all see the same truth.",
    signs: [
      "Booking an appointment takes a back-and-forth of messages or calls",
      "No-shows are frequent because reminders depend on someone remembering",
      "Double-bookings happen because the calendar lives in more than one place",
      "Staff spend hours a week doing scheduling a system could do",
    ],
    howItWorks: [
      {
        title: "Map the booking flow",
        description:
          "Services, durations, staff availability, buffers, cancellation rules — we capture how scheduling really works before automating it.",
      },
      {
        title: "Set up self-serve booking",
        description:
          "A booking flow on your website and WhatsApp that shows live availability and writes confirmed slots to the calendar and CRM automatically.",
      },
      {
        title: "Automate reminders & reschedules",
        description:
          "Confirmations, reminders, and reschedule links go out by WhatsApp or SMS on schedule — no-shows drop without anyone lifting a finger.",
      },
    ],
    faqs: [
      {
        question: "Does this work with our existing calendar?",
        answer:
          "Yes — Google Calendar, Outlook, and most practice or salon management tools. The system reads and writes your real availability, so double-bookings stop.",
      },
      {
        question: "Can customers book through WhatsApp?",
        answer:
          "Yes — booking links and slot selection work inside WhatsApp, which is where many customers prefer to do it.",
      },
      {
        question: "How much do reminders actually reduce no-shows?",
        answer:
          "Businesses typically see no-shows fall substantially once automated reminders are in place — and every recovered slot is direct revenue. We'll measure yours against the baseline from before launch.",
      },
    ],
  },
  {
    slug: "invoice-billing-automation",
    name: "Invoice & Billing Automation",
    icon: Receipt,
    accent: "amber",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["professional-services", "manufacturing-distribution", "retail-ecommerce"],
    serviceType: "Invoice generation and payment follow-up automation",
    seoTitle: "Automated Invoice Generation & Payment Follow-Ups",
    metaDescription:
      "anymus automates invoicing and payment follow-ups — invoices generate themselves from your data, reminders chase what's due, and cash stops waiting on paperwork.",
    eyebrow: "Billing Automation",
    intro: "Invoices out on time. Payments chased without the awkwardness.",
    problem:
      "Invoicing by hand means invoices go out late, with mistakes, in whatever week someone finds time — and then the harder part begins: chasing payment. Following up on overdue invoices is uncomfortable, so it happens inconsistently, and the gap between work delivered and cash collected quietly stretches into months.",
    outcome:
      "Invoices generate themselves from the source of truth — the completed order, the closed deal, the delivered milestone — and go out the moment they're due. Payment reminders escalate politely and automatically until settlement, and a live view shows exactly what's outstanding, from whom, and for how long.",
    signs: [
      "Invoices go out late because someone has to sit down and make them",
      "Payment follow-ups are sporadic because chasing feels awkward",
      "Nobody has a live view of what's outstanding and how overdue it is",
      "Details get re-typed from orders or timesheets into the invoice — with errors",
    ],
    howItWorks: [
      {
        title: "Trace the billing trail",
        description:
          "We map what triggers an invoice in your business — delivery, milestone, subscription date — and where the data for it already lives.",
      },
      {
        title: "Automate generation",
        description:
          "Invoices build themselves from your existing records — including GST-compliant formats where needed — and go out on the trigger, not on memory.",
      },
      {
        title: "Automate the follow-up",
        description:
          "Scheduled, escalating payment reminders by email and WhatsApp, with a live receivables dashboard so you always know where cash is stuck.",
      },
    ],
    faqs: [
      {
        question: "Does this work with Tally or our accounting software?",
        answer:
          "Yes — we integrate with what you run, including Tally, Zoho Books, and QuickBooks, so the accounts stay the single source of truth.",
      },
      {
        question: "Are the automated reminders GST/compliance-aware?",
        answer:
          "Invoice formats follow your compliance requirements, including GST fields for Indian businesses. Reminders reference the actual invoice, so there's never a mismatch.",
      },
      {
        question: "Can we still review invoices before they go out?",
        answer:
          "Yes — you choose per invoice type: fully automatic, or generated-and-held for a one-click approval.",
      },
    ],
  },
  {
    slug: "lead-routing-qualification",
    name: "Lead Routing & Qualification",
    icon: GitBranch,
    accent: "green",
    relatedServiceSlug: "automation",
    relatedIndustrySlugs: ["real-estate", "professional-services", "education-coaching"],
    serviceType: "Lead routing and qualification automation",
    seoTitle: "Lead Routing & Qualification Automation",
    metaDescription:
      "anymus automates lead routing and qualification — every enquiry scored, assigned to the right person instantly, and followed up before the competition answers.",
    eyebrow: "Lead Routing",
    intro: "The right lead, with the right person, in minutes.",
    problem:
      "When every lead goes to whoever sees it first, two things happen: the best salesperson drowns while others sit idle, and serious buyers wait in the same queue as tyre-kickers. Speed decides deals — the firm that responds within an hour is seven times more likely to qualify the lead — but manual triage means your response time is whatever the day allowed.",
    outcome:
      "Every enquiry is qualified on arrival — by source, budget signals, and the questions that matter in your business — then routed instantly to the right owner with context attached. Hot leads jump the queue, follow-ups fire until first contact, and no salesperson can sit on a lead without it being visible.",
    signs: [
      "Leads are distributed by who saw the message first, not by fit or load",
      "Serious buyers wait in the same queue as casual enquiries",
      "Response times vary from minutes to days depending on the day",
      "Leads go quiet and nobody notices until the deal is already lost",
    ],
    howItWorks: [
      {
        title: "Define what qualified means",
        description:
          "We work out the signals that actually predict a good customer for you — source, ticket size, urgency, fit — and turn them into scoring rules.",
      },
      {
        title: "Build the routing logic",
        description:
          "Round-robin, territory, expertise, or load-based — leads assign themselves by your rules, with hot leads escalated and context attached.",
      },
      {
        title: "Enforce the follow-up",
        description:
          "SLA timers, nudges, and reassignment if a lead sits untouched — so speed-to-lead becomes a property of the system, not of individual discipline.",
      },
    ],
    faqs: [
      {
        question: "How does the system know which leads are serious?",
        answer:
          "Scoring rules built from your actual history — source, budget indicators, response behaviour — refined against real outcomes after launch. No black-box AI verdicts; you can read every rule.",
      },
      {
        question: "Will salespeople accept leads being assigned automatically?",
        answer:
          "Usually with relief — fair, transparent distribution ends the scramble and the accusations. And because assignment is logged, performance conversations get factual.",
      },
      {
        question: "What happens to a lead nobody follows up?",
        answer:
          "It escalates — reminder, then manager visibility, then reassignment. The one thing the system never does is let a lead quietly die.",
      },
    ],
  },
  {
    slug: "client-portal-development",
    name: "Client Portals",
    icon: PanelsTopLeft,
    accent: "amber",
    relatedServiceSlug: "internal-systems",
    relatedIndustrySlugs: ["professional-services", "education-coaching", "manufacturing-distribution"],
    serviceType: "Client portal design and development",
    seoTitle: "Client Portals for Service Businesses",
    metaDescription:
      "anymus builds client portals for service businesses — a professional, branded place where clients see status, documents, and invoices without emailing you for updates.",
    eyebrow: "Client Portals",
    intro: "One place where clients see everything — without asking.",
    problem:
      "Every service business pays a hidden tax: the update tax. \"Where are we on this?\" \"Can you resend that document?\" \"What's the payment status?\" Each answer takes minutes, interrupts real work, and lands in an email thread that will be searched for, badly, months later. The more clients you serve, the more of the week disappears into being your own status page.",
    outcome:
      "Clients sign in to a branded portal and see it themselves: project status, shared documents, invoices, approvals, next steps. Updates post once instead of being repeated per client. The experience feels like working with a bigger, sharper firm — because the follow-up questions simply stop arriving.",
    signs: [
      "A meaningful slice of the week goes to answering \"what's the status?\"",
      "Documents are re-sent because clients can't find the email",
      "Approvals stall in inbox threads with no visible owner or deadline",
      "Your client experience feels smaller than the quality of your work",
    ],
    howItWorks: [
      {
        title: "Map the client journey",
        description:
          "We document what clients ask for, when, and what you repeatedly send — the portal is designed around those real interactions, not a generic template.",
      },
      {
        title: "Design & build the portal",
        description:
          "A branded, sign-in portal showing status, documents, invoices, and approvals — pulling live from the systems you already run, so nothing is maintained twice.",
      },
      {
        title: "Launch with your clients",
        description:
          "We roll it out client by client with simple onboarding, and tune what's shown based on what they actually use.",
      },
    ],
    faqs: [
      {
        question: "Do clients actually use portals?",
        answer:
          "Yes — when the portal answers the questions they were already emailing you about. Adoption follows usefulness, which is why we design from your real client interactions.",
      },
      {
        question: "Does the portal replace our project management tools?",
        answer:
          "No — it sits on top of them. Your team keeps working in their tools; the portal shows clients a clean, curated view of what matters to them.",
      },
      {
        question: "Is client data secure?",
        answer:
          "Each client sees only their own workspace, behind authenticated sign-in. Access control is part of the design from day one, not an afterthought.",
      },
    ],
  },
  {
    slug: "business-dashboards",
    name: "Business Dashboards",
    icon: Gauge,
    accent: "amber",
    relatedServiceSlug: "internal-systems",
    relatedIndustrySlugs: ["manufacturing-distribution", "retail-ecommerce", "professional-services"],
    serviceType: "Real-time business dashboard development",
    seoTitle: "Real-Time Business Dashboards — Beyond Spreadsheets",
    metaDescription:
      "anymus builds real-time business dashboards that replace the weekly spreadsheet ritual — revenue, pipeline, and operations in one live view you can actually trust.",
    eyebrow: "Dashboards",
    intro: "The state of the business, live — not compiled every Friday.",
    problem:
      "The numbers exist — in Tally, in the CRM, in seven spreadsheets that don't agree with each other. Turning them into a picture of the business takes someone half a day every week, and by the time the report circulates it describes last week. Decisions get made on stale numbers, gut feel, or whichever spreadsheet was opened last.",
    outcome:
      "One dashboard, fed live from the systems you already run: revenue, pipeline, receivables, operations. The Friday compilation ritual disappears. When someone asks how the business is doing, the answer is a glance — the same glance for everyone, from the same numbers, current as of now.",
    signs: [
      "Reporting means someone manually compiling numbers every week",
      "Different spreadsheets give different answers to the same question",
      "By the time reports circulate, the numbers are already stale",
      "You suspect problems days before you can see them in the data",
    ],
    howItWorks: [
      {
        title: "Decide what actually matters",
        description:
          "Not forty charts — the eight to twelve numbers that genuinely run your business, agreed with you before anything is built.",
      },
      {
        title: "Connect the sources",
        description:
          "Accounting, CRM, operations tools, spreadsheets — data flows in automatically and reconciles into one trusted set of numbers.",
      },
      {
        title: "Build & iterate the views",
        description:
          "An owner's view, a team view, a daily-pulse view — refined over the first weeks against the questions you actually ask.",
      },
    ],
    faqs: [
      {
        question: "Our data is a mess. Can you still build this?",
        answer:
          "Messy data is the normal starting point. Consolidating and reconciling the sources is the first part of the build — that cleanup is where the dashboard gets its credibility.",
      },
      {
        question: "Is this a BI tool subscription or custom software?",
        answer:
          "Whichever fits — sometimes a well-configured BI platform, sometimes a custom build. The recommendation follows your data and budget, and we tell you the trade-off plainly.",
      },
      {
        question: "How current are the numbers?",
        answer:
          "As current as the source systems allow — typically live or synced every few minutes, which is a different world from a weekly compilation.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

/** Solutions delivered under a given parent service. */
export function solutionsForService(serviceSlug: string): Solution[] {
  return solutions.filter((s) => s.relatedServiceSlug === serviceSlug);
}
