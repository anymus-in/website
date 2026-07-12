import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";
import type { ServiceAccent, ServiceFaqItem } from "./services";

/**
 * Canonical industry definitions — vertical-specific pages that map the
 * services and solutions onto one industry's daily reality. Single source of
 * truth shared by the industries hub, detail pages, sitemap, and JSON-LD.
 * Same shape discipline as services.ts / solutions.ts.
 */
export interface Industry {
  slug: string;
  /** Full industry name — used as the page <h1> and card label. */
  name: string;
  /** Short label for chips and cross-links. */
  shortName: string;
  /** schema.org serviceType / category keyword. */
  serviceType: string;
  /** <title> tag (the template appends "| anymus"). */
  seoTitle: string;
  /** Meta description + OG description. */
  metaDescription: string;
  /** Small uppercase eyebrow above the h1. */
  eyebrow: string;
  /** One-line lead, used as the page h1. */
  intro: string;
  /** Why this industry hits the wall — the vertical-specific problem. */
  body: string;
  /** Industry-specific pain points. */
  signs: string[];
  /** Services (services.ts) that usually apply. */
  relatedServiceSlugs: string[];
  /** Solutions (solutions.ts) most commonly deployed in this vertical. */
  relatedSolutionSlugs: string[];
  /** Industry-specific FAQs (3), shown on the detail page. */
  faqs: ServiceFaqItem[];
  /** Icon used in cards and page headers. */
  icon: LucideIcon;
  accent: ServiceAccent;
}

export const industries: Industry[] = [
  {
    slug: "clinics-healthcare",
    name: "Clinics & Healthcare Practices",
    shortName: "Clinics",
    icon: Stethoscope,
    accent: "green",
    serviceType: "Systems and automation for clinics and healthcare practices",
    seoTitle: "Automation & Systems for Clinics & Healthcare Practices",
    metaDescription:
      "anymus builds the systems clinics run on — WhatsApp enquiry capture, automated appointment booking and reminders, and patient records that don't live in registers.",
    eyebrow: "Clinics & Healthcare",
    intro: "A practice that runs on systems, not the front desk's memory.",
    body: "A clinic's operations live or die at the front desk: enquiries on WhatsApp and phone, appointments in a register or a shared calendar, reminders that happen when someone has a spare minute. Every missed call is a patient who books elsewhere; every forgotten reminder is an empty slot that cost real money. The clinical work is excellent — it's the operational layer around it that leaks. That layer is precisely what a connected system fixes: enquiries captured automatically, bookings that make themselves, reminders that fire on schedule, and a front desk freed to look after the patients actually standing in front of it.",
    signs: [
      "Appointment booking takes a phone back-and-forth the front desk has to manage",
      "No-shows are frequent because reminders depend on someone finding time",
      "Patient enquiries on WhatsApp go unanswered during busy hours",
      "Patient history and follow-up schedules live in registers and memory",
    ],
    relatedServiceSlugs: ["automation", "digital-presence"],
    relatedSolutionSlugs: [
      "appointment-booking-automation",
      "whatsapp-lead-automation",
      "sms-follow-up-automation",
    ],
    faqs: [
      {
        question: "Can patients book appointments without calling the clinic?",
        answer:
          "Yes — patients pick from live availability on your website or WhatsApp, confirmations go out instantly, and the slot lands in your calendar and records automatically.",
      },
      {
        question: "Will automated reminders actually reduce our no-shows?",
        answer:
          "Reminder sequences the day before and hour before an appointment reliably cut no-shows — and we measure yours against the baseline from before launch, so the effect is visible in numbers.",
      },
      {
        question: "Does this respect patient data sensitivity?",
        answer:
          "Yes — access control and data handling are designed in from the start, and we work within whatever compliance constraints your practice operates under.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Agencies & Developers",
    shortName: "Real estate",
    icon: Building2,
    accent: "blue",
    serviceType: "CRM and automation for real estate businesses",
    seoTitle: "CRM & Automation for Real Estate Agencies",
    metaDescription:
      "anymus builds the lead engine real estate runs on — every portal, WhatsApp, and site-visit enquiry captured, qualified, routed to the right agent, and followed up until it closes.",
    eyebrow: "Real Estate",
    intro: "Every lead worked, from first enquiry to handover.",
    body: "Real estate is a speed-to-lead business with long, expensive sales cycles — the worst possible combination to run on memory. Leads arrive from portals, ads, WhatsApp, and walk-ins; the serious buyer and the casual browser land in the same inbox; and follow-up over a months-long decision depends on individual agents' discipline. Meanwhile every lost lead has a five- or six-figure price tag. A connected system captures every enquiry with its source, qualifies and routes it in minutes, and keeps the follow-up alive across the whole cycle — site visit reminders, document nudges, stage-by-stage updates — so no buyer goes quiet because the agency did.",
    signs: [
      "Leads from portals, ads, and WhatsApp land in different inboxes with no owner",
      "Serious buyers wait in the same queue as casual enquiries",
      "Follow-up over long sales cycles depends on each agent's personal discipline",
      "Management can't see pipeline or agent performance without asking around",
    ],
    relatedServiceSlugs: ["automation", "internal-systems"],
    relatedSolutionSlugs: [
      "lead-routing-qualification",
      "whatsapp-lead-automation",
      "crm-setup",
    ],
    faqs: [
      {
        question: "Can it capture leads from property portals automatically?",
        answer:
          "Yes — portal enquiries, ad leads, website forms, and WhatsApp all flow into one CRM with source tags, so you also learn which channel actually produces buyers.",
      },
      {
        question: "How does lead distribution between agents work?",
        answer:
          "By your rules — project, territory, budget band, or round-robin — with hot leads escalated and SLA timers so no enquiry sits untouched. Assignment is logged, which keeps it fair.",
      },
      {
        question: "Our sales cycle runs months. Does automation help there?",
        answer:
          "That's where it helps most — scheduled nudges, site-visit reminders, and stage-based follow-ups keep long conversations alive without an agent having to remember each one.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & D2C Brands",
    shortName: "Retail & D2C",
    icon: ShoppingBag,
    accent: "amber",
    serviceType: "Systems and automation for retail and D2C businesses",
    seoTitle: "Systems for Retail & D2C Brands",
    metaDescription:
      "anymus connects the systems retail runs on — orders, inventory, billing, and customer communication in one flow, whether the sale happens in-store, online, or on WhatsApp.",
    eyebrow: "Retail & D2C",
    intro: "In-store, online, and WhatsApp — one connected operation.",
    body: "Modern retail sells everywhere at once — the counter, the website, Instagram, WhatsApp — and each channel spawns its own orders, stock questions, and customer chats. The result is re-typed order details, inventory that disagrees with reality, billing that lags the sale, and customer data scattered across platforms that never talk. The fix isn't another sales channel or another app; it's wiring the ones you have into one flow: orders from any channel landing in one place, stock and accounts updating themselves, invoices generating on the sale, and every customer conversation attached to their history.",
    signs: [
      "Orders from different channels get re-typed into billing or inventory by hand",
      "Stock levels in the system don't match what's actually on the shelf",
      "Customer WhatsApp orders and queries live in a chat, disconnected from their history",
      "You can't see sales, stock, and receivables in one view",
    ],
    relatedServiceSlugs: ["internal-systems", "automation", "digital-presence"],
    relatedSolutionSlugs: [
      "invoice-billing-automation",
      "business-dashboards",
      "website-to-crm-integration",
    ],
    faqs: [
      {
        question: "Does this work with Tally and our existing billing?",
        answer:
          "Yes — we connect to Tally, Zoho Books, and the tools you already run, so accounts stay the source of truth while data entry disappears.",
      },
      {
        question: "Can WhatsApp orders flow into the same system as everything else?",
        answer:
          "Yes — WhatsApp orders and enquiries become records like any other channel, attached to the customer's history rather than trapped in a chat thread.",
      },
      {
        question: "We're not ready to replace our POS or platform. Is that required?",
        answer:
          "No — the work is connecting what you have, not replacing it. Replacement only enters the conversation if something genuinely can't support the business anymore.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Consultancies, Agencies & Firms",
    shortName: "Professional services",
    icon: Briefcase,
    accent: "amber",
    serviceType: "Internal systems for professional services firms",
    seoTitle: "Internal Systems for Consultancies & Agencies",
    metaDescription:
      "anymus builds the operating layer for services firms — client portals that end status-update email, automated billing, and one live view of projects, people, and cash.",
    eyebrow: "Professional Services",
    intro: "Client work is the product. Everything else should run itself.",
    body: "Services firms sell expertise, but their weeks get eaten by everything around it: status update emails, resent documents, invoices raised late, receivables chased awkwardly, and a partner-level view of the business that only exists when someone assembles it. Every one of those hours is billable time spent on being your own back office. The system fix is well-trodden: a client portal that answers \"where are we?\" before it's asked, billing that generates itself from delivered work, and a live dashboard of projects, utilisation, and cash — so the firm's operations feel as sharp as its work.",
    signs: [
      "A real slice of the week goes to status updates and resending documents",
      "Invoices go out late because raising them is a manual chore",
      "Receivables are chased sporadically because it feels awkward",
      "Nobody has a live view of projects, utilisation, and cash together",
    ],
    relatedServiceSlugs: ["internal-systems", "automation"],
    relatedSolutionSlugs: [
      "client-portal-development",
      "invoice-billing-automation",
      "business-dashboards",
    ],
    faqs: [
      {
        question: "Will clients actually use a portal instead of emailing us?",
        answer:
          "Yes — when it answers the questions they were already emailing about: status, documents, invoices, approvals. Adoption follows usefulness, and the email volume drops with it.",
      },
      {
        question: "Can invoicing follow our milestone or retainer structure?",
        answer:
          "Yes — invoices generate from whatever your billing trigger is: milestones delivered, hours logged, or the retainer date, with follow-ups automated after.",
      },
      {
        question: "We run on a mix of tools already. Do we have to consolidate?",
        answer:
          "No — the portal and dashboards sit on top of your existing tools and pull from them live, so the team keeps working where they already work.",
      },
    ],
  },
  {
    slug: "education-coaching",
    name: "Coaching Institutes & Ed-Businesses",
    shortName: "Education",
    icon: GraduationCap,
    accent: "green",
    serviceType: "CRM and automation for education and coaching businesses",
    seoTitle: "CRM & Automation for Coaching Institutes",
    metaDescription:
      "anymus builds the enquiry-to-enrolment engine for coaching institutes — every parent enquiry captured and followed up, batches and fees tracked, reminders on autopilot.",
    eyebrow: "Education & Coaching",
    intro: "From first enquiry to enrolment, without a lead going cold.",
    body: "Admissions season decides a coaching institute's year, and admissions run on enquiries — WhatsApp messages from parents, walk-ins, calls after a school seminar. Each one is a family actively comparing options on a deadline; a reply that comes two days late is a seat filled by a competitor. After enrolment, the operational load shifts: fee reminders, batch communication, attendance follow-ups — all of it manual, all of it on memory. A connected system captures every enquiry with an owner and a follow-up schedule, converts admissions season from chaos into a pipeline, and puts fees and parent communication on autopilot.",
    signs: [
      "Parent enquiries on WhatsApp get answered late — or not at all — during peak season",
      "Nobody tracks which enquiries were followed up and which went cold",
      "Fee reminders and collections are chased manually every cycle",
      "Batch schedules and parent communication go out by hand, one chat at a time",
    ],
    relatedServiceSlugs: ["automation", "digital-presence"],
    relatedSolutionSlugs: [
      "whatsapp-lead-automation",
      "crm-setup",
      "invoice-billing-automation",
    ],
    faqs: [
      {
        question: "Can it handle the admissions season spike?",
        answer:
          "That's the design case — every enquiry gets an instant response and an owner regardless of volume, and the ones that go quiet get nudged automatically until there's an answer.",
      },
      {
        question: "Does it manage fee reminders too?",
        answer:
          "Yes — fee schedules drive automatic reminders by WhatsApp, with escalation for overdue payments and a live view of collections, so chasing stops being a monthly project.",
      },
      {
        question: "Can parents be updated automatically about batches and schedules?",
        answer:
          "Yes — batch changes, schedules, and announcements go out to the right parent groups automatically, instead of being forwarded chat by chat.",
      },
    ],
  },
  {
    slug: "manufacturing-distribution",
    name: "Manufacturers & Distributors",
    shortName: "Manufacturing",
    icon: Factory,
    accent: "blue",
    serviceType: "Internal systems for manufacturing and distribution businesses",
    seoTitle: "Internal Systems for Manufacturing & Distribution",
    metaDescription:
      "anymus builds the operational layer for manufacturers and distributors — orders, dispatches, outstanding payments, and production status in one live system instead of registers and calls.",
    eyebrow: "Manufacturing & Distribution",
    intro: "Orders, dispatches, and dues — visible without a phone call.",
    body: "In most manufacturing and distribution businesses, the truth lives in registers, in Tally, and in the heads of two indispensable people. Order status requires a phone call to the factory floor; outstanding payments require someone to cross-check ledgers; dispatch coordination happens over calls and chat. The business works — but every question costs a conversation, and every conversation interrupts someone. The system fix is a connected operational layer over what already exists: orders tracked from booking to dispatch, receivables visible and chased automatically, and a dashboard where the owner sees production, dispatches, and dues without calling anyone.",
    signs: [
      "Knowing an order's status means calling the factory or the godown",
      "Outstanding payments are tracked by cross-checking ledgers by hand",
      "Dispatch details get coordinated over calls and re-entered into systems later",
      "The full operational picture lives in two indispensable people's heads",
    ],
    relatedServiceSlugs: ["internal-systems", "automation"],
    relatedSolutionSlugs: [
      "business-dashboards",
      "invoice-billing-automation",
      "client-portal-development",
    ],
    faqs: [
      {
        question: "We run on Tally and Excel. Can you work with that?",
        answer:
          "Yes — Tally stays the accounting truth; we build the operational layer on top of it, so data flows instead of being re-entered, and nothing about your compliance setup changes.",
      },
      {
        question: "Can dealers or B2B customers see their own orders and dues?",
        answer:
          "Yes — a dealer portal showing orders, dispatch status, invoices, and outstanding amounts removes a large share of the daily phone calls on both sides.",
      },
      {
        question: "Our processes are specific to our factory. Will a standard tool fit?",
        answer:
          "We map how your operation actually runs before building anything — the system is shaped around your process, which is exactly when custom internal tooling earns its cost.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
