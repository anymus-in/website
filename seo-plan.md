# Programmatic SEO expansion — solutions, blog, industries

> **Status (12 Jul 2026):** Phases A–D implemented and verified (build +
> visual). Live in the working tree: 9 solution pages + hub, `/how-we-work`,
> MDX blog with 5 posts + index, 6 industry pages + hub, all schema, sitemap
> (34 URLs), nav/footer links, and cross-links between services ↔ solutions ↔
> industries ↔ posts. Phase E remains manual (checklist below). Not yet
> committed to git.

## Context

The user pasted a generic ~14-point programmatic-SEO playbook (industry pages,
solution pages, 100+ blog posts, schema markup, internal linking, resources,
backlinks, local SEO) and asked for a plan built from whatever's relevant. The
anymus site is currently thin from an SEO surface-area standpoint: one route
tree with home, a 3-item services hub/detail pair, contact/discovery/schedule,
legal pages, and gated client-portal/sign-in pages — no blog, no industry
pages, no problem/solution pages, no resources section. The goal is to grow
organic surface area (long-tail solution searches, industry-specific searches,
topical-authority blog content) using the same hand-maintained, typed-array
architecture the site already uses for services, rather than bolting on a CMS
or generating hundreds of thin auto-written pages. Scope was narrowed with the
user via three explicit decisions: (1) include off-site/manual tasks as a
checklist but do not implement them, (2) build reusable infra plus a genuine
small first batch of real content rather than mass thin content, (3) prioritize
solution pages → blog → industry pages, in that order.

Grounded in current repo state: `src/lib/services.ts` (3 services:
digital-presence, automation, internal-systems — confirms AI Agents
positioning is gone; current copy is website/automation/internal-tools only),
`src/lib/structured-data.ts` (Organization, WebSite, Service, FAQPage,
BreadcrumbList schemas already exist), `src/app/sitemap.ts` (flat array, easy
to extend), `src/lib/site.ts` (SITE_URL = https://anymus.in, `SOCIALS: string[]
= []`). Next 16's `@next/mdx` does **not** support frontmatter natively —
confirmed in `node_modules/next/dist/docs/01-app/02-guides/mdx.md` — so content
metadata must come from `export const meta = {...}` inside each `.mdx` file
plus a parallel hand-maintained TS registry, not YAML frontmatter parsing.

**Target markets: India AND the US.** This shapes the whole plan:

- **Domain (structural, not blocking):** `anymus.in` is a ccTLD, and Google
  hard-geotargets `.in` to India — this cannot be overridden in Search
  Console. It won't block US rankings but is a persistent headwind on
  competitive US queries. `anymus.com` is NOT available (checked 2026-07-12).
  Available generic-TLD alternatives (all geo-neutral in Google):
  `anymus.systems` ($22/yr — strikingly on-brand with "the system your
  business runs on"), `anymus.co` ($30/yr — most conventional),
  `getanymus.com` ($11/yr), `anymus.io` ($38/yr). Recommendation: secure
  `anymus.systems`/`anymus.co` cheaply now, ship all content on `anymus.in`,
  and only migrate (single clean 301 migration) later if US organic proves
  out as a channel. Do not block content work on this.
- **One English site, no hreflang, no /us/ or /in/ sections.** Both markets
  are English; duplicating pages per country creates thin near-duplicate
  content. Instead, write core pages market-neutral and let individual blog
  posts / solutions target one market where the channel itself is
  market-specific (e.g. WhatsApp is India; SMS/text-back is US).
- **Two-track content batch:** keep India-anchored pieces (WhatsApp, IndiaMART
  audiences) and pair them with US-relevant equivalents (SMS follow-up
  automation, missed-call text-back, HubSpot/Zoho setup). Zoho and HubSpot
  read well in both markets.
- **Schema:** use `areaServed: ["IN", "US"]` or omit `areaServed` entirely
  (services delivered remotely) — do NOT hardcode `"IN"`.

---

## Brand voice & messaging (from the 2026 company profile)

All new pages must be written in this positioning, not generic agency copy —
it's what differentiates the content from every other agency's SEO pages:

- **Master line:** "ANYMUS — the system your business runs on." / "We build
  the system your business runs on."
- **What we sell:** not websites, SEO, or automation — *better business
  operations*. Those are components of one connected system.
- **Connection over replacement:** "We don't replace everything. We connect
  everything." Businesses already have WhatsApp/Excel/Gmail/Tally/website/CRM
  — the problem is zero connections between them, not missing tools.
- **Philosophy:** "If someone has to remember it, the system is broken." /
  "We build systems that don't forget." / "A lead that can be forgotten is a
  lead you've already lost."
- **The growth wall narrative** (use as the problem framing on solution &
  industry pages): enquiries increase → follow-ups turn inconsistent →
  customer info fragments across sheets/chats/inboxes → manual re-typing
  compounds → owners lose visibility.
- **Fit first, software second:** "The system adapts to your workflow, not
  the other way around."
- **SEO framing:** "Traffic without enquiries is simply a number" — outcomes
  (enquiries, qualified leads, local visibility), never rankings.
- **Automation framing:** "It isn't replacing people. It's removing
  repetition."
- **End-to-end journey** (use for the connected-system story on the solutions
  hub): discovered on Google → visits website → submits enquiry → enters CRM
  automatically → routed to right person → follow-ups fire on their own →
  management sees it in real time → nothing gets missed.
- **Citable stats used in the profile** — verify each against its primary
  source before publishing on the site (don't republish unchecked): HBR 2011
  (contact within 1 hour = 7× more likely to qualify, 60× vs waiting a day),
  Stanford Web Credibility (75% judge credibility on design), Google (53%
  mobile abandonment >3s load; 76% of "near me" searchers visit within 24h,
  28% buy; 46% of searches have local intent), McKinsey (~60% of jobs have
  ≥30% automatable tasks).

**New page this unlocks — `/how-we-work`:** the profile's Part III
(discovery-first, complimentary discovery session, proposal in 2–3 business
days, modular milestone-tied payments, no large upfront commitment,
everything defined in writing, no hidden charges) doesn't exist anywhere on
the site as a page. This is high-trust conversion content and a genuine
differentiator — especially for US buyers evaluating an offshore agency,
where payment-tied-to-delivery directly answers their biggest fear. Build as
a static page (`src/app/how-we-work/page.tsx`) with `FAQPage` schema for the
engagement questions ("Do I pay upfront?", "What does discovery cost?",
"What's in the proposal?"). Slot it into Phase A alongside solutions, link it
from every solution/industry page's CTA area.

---

## Phase A — Solution pages (`/solutions/[slug]`) — build first

**New file:** `src/lib/solutions.ts`, mirroring the `Service` shape in
`services.ts`, reusing its exported types (`ServiceFaqItem`, `ServiceAccent`)
rather than redefining them:

```ts
export interface Solution {
  slug: string;                    // e.g. "whatsapp-lead-automation"
  name: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;                 // "Solution"
  intro: string;                   // one-line problem→outcome statement
  problem: string;                 // pain-point paragraph (the "before")
  outcome: string;                 // the "after" paragraph
  signs: string[];                 // symptoms, mirrors Service.signs
  howItWorks: { title: string; description: string }[]; // mirrors process[]
  relatedServiceSlug: string;      // FK into services.ts
  relatedIndustrySlugs: string[];  // FKs into industries.ts (Phase C)
  faqs: ServiceFaqItem[];
  icon: LucideIcon;
  accent: ServiceAccent;
}
export const solutions: Solution[];
export function getSolution(slug: string): Solution | undefined;
```

`relatedServiceSlug` is load-bearing: it drives the "Delivered as part of
{Service}" cross-link and lets `services/[slug]` list "Solutions built on this
service" (Phase D).

**Routes:**
- `src/app/solutions/page.tsx` — hub, same ledger/list layout as
  `src/app/services/page.tsx` (`RevealGroup`/`RevealItem`, `breadcrumbList`).
- `src/app/solutions/[slug]/page.tsx` — detail page. Build a new
  `src/components/layout/SolutionLayout.tsx` rather than overloading
  `ServiceLayout` — solutions are lighter (problem/outcome framing, no
  multi-paragraph body).
- `src/app/solutions/opengraph-image.tsx` and
  `src/app/solutions/[slug]/opengraph-image.tsx`, same Satori pattern as
  `src/app/services/opengraph-image.tsx`.
- `generateStaticParams` from `solutions`, `generateMetadata` per solution
  (title/description/canonical/OG), matching `services/[slug]/page.tsx`.

**Schema:** `Service` schema is still correct (a narrower-scoped service
offering) — do not introduce `HowTo`, which is for step-by-step consumer
instructions, not marketing copy. Add `BreadcrumbList`: Home → Solutions →
{solution}.

---

## Phase B — Blog (`/blog`, `/blog/[slug]`) — build second

**Content storage:** `src/content/blog/*.mdx`, one file per post. No
contentlayer/velite — that's tooling overkill for a 3-5 post batch and adds a
build step to maintain. Use Next's native MDX support per the docs:

1. `next.config.ts`: wrap with `createMDX` from `@next/mdx`. Use the *dynamic
   import* pattern from the docs (`app/blog/[slug]/page.tsx` importing
   `@/content/blog/${slug}.mdx` at build time via `generateStaticParams` +
   `dynamicParams = false`), so metadata/schema stays in a `.tsx` page rather
   than pageless MDX routing.
2. New deps: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`. No
   `gray-matter` (no YAML frontmatter support/need).
3. `mdx-components.tsx` at the project root — maps MDX elements (h1-h4, p, ul,
   a, code, img) to the site's existing typographic classes; confirm exact
   required location during implementation. No `@tailwindcss/typography` — the
   type system is bespoke (`globals.css` tokens), so hand-map elements.
4. Each `.mdx` file exports metadata directly:
   ```mdx
   export const meta = {
     slug: "whatsapp-crm-automation-india",
     title: "...", seoTitle: "...", metaDescription: "...",
     date: "2026-07-01", updated: "2026-07-01", author: "anymus",
     tags: ["automation", "whatsapp", "crm"],
     relatedServiceSlug: "automation",
     relatedSolutionSlugs: ["whatsapp-lead-automation"],
     relatedIndustrySlugs: ["clinics-healthcare"],
   }
   ```
5. **Blog registry:** `src/lib/blog.ts` — small static TS array importing each
   post's `meta` export explicitly (no filesystem globbing, consistent with
   the hand-maintained `services.ts` philosophy):
   ```ts
   import { meta as post1 } from "@/content/blog/whatsapp-crm-automation-india.mdx";
   export const posts = [post1, ...].sort(byDateDesc);
   export function getPostMeta(slug: string) { ... }
   ```
6. **Routes:** `src/app/blog/page.tsx` (index, ledger pattern),
   `src/app/blog/[slug]/page.tsx` (`generateStaticParams` from `posts`,
   `dynamicParams = false`, dynamic `import()` for the MDX component),
   `src/app/blog/opengraph-image.tsx`, `src/app/blog/[slug]/opengraph-image.tsx`.
7. **Schema:** `Article` (or `BlogPosting`) — new function in
   `structured-data.ts` (Phase D), plus `BreadcrumbList`.

---

## Phase C — Industry pages (`/industries/[slug]`) — build third

**New file:** `src/lib/industries.ts`, same shape discipline:

```ts
export interface Industry {
  slug: string;                     // "clinics-healthcare"
  name: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;                  // "Industry"
  intro: string;
  body: string;                     // why this industry needs these systems
  signs: string[];                  // industry-specific pain points
  relatedServiceSlugs: string[];    // usually 2-3 of the 3 services
  relatedSolutionSlugs: string[];   // FKs into solutions.ts
  faqs: ServiceFaqItem[];
  icon: LucideIcon;
  accent: ServiceAccent;
}
export const industries: Industry[];
export function getIndustry(slug: string): Industry | undefined;
```

**Routes:** `src/app/industries/page.tsx` (hub) +
`src/app/industries/[slug]/page.tsx` (detail) + opengraph-image routes, same
pattern as Phase A.

**Schema:** `Service` schema unchanged; `BreadcrumbList`: Home → Industries →
{industry}.

---

## Phase D — Wiring: schema, sitemap, internal linking

**`src/lib/structured-data.ts` additions:**
- Generalize `serviceFaqSchema` → `faqSchema(faqs: ServiceFaqItem[])` so
  solutions/industries/blog can reuse it without a full `Service` object; keep
  `serviceFaqSchema` as a thin wrapper for backward compat.
- Add `articleSchema(post)` → `Article`/`BlogPosting`, with `headline`,
  `datePublished`, `dateModified`, `author: { "@type": "Organization", name:
  SITE_NAME }` (no named authors exist yet), `publisher`, `mainEntityOfPage`.
- Add `solutionSchema(solution)` and `industrySchema(industry)` — thin
  `Service`-typed wrappers like `serviceSchema`.
- **LocalBusiness schema: only if anymus has a real address/phone to publish**
  — schema.org LocalBusiness needs concrete NAP data to be non-spammy and
  Google-safe. This is a decision for the user, not something to fabricate. If
  yes, add `localBusinessSchema` with `address`, `areaServed: ["IN", "US"]`
  (or omit areaServed — remote delivery), rendered once in root layout.
- `breadcrumbList` is already generic — just call it with new path segments.

**`src/app/sitemap.ts` additions:** import `solutions`, `industries`, `posts`
and append entries for each, plus the three hub pages and `/how-we-work`. Keep the no-lastModified
policy for evergreen solutions/industries pages; add real
`lastModified: new Date(post.updated)` for blog posts specifically — the one
place a real lastModified is justified since dated content changing is a
genuine signal.

**Internal linking (pure array filtering, no new data layer):**
- `services/[slug]`: add "Related solutions" (`relatedServiceSlug ===
  service.slug`) and "Related industries" sections, reusing the existing card
  list pattern from `services/page.tsx`.
- `solutions/[slug]`: "Part of {Service.name}" link, "Used by" related
  industries, "Related reading" linking blog posts where
  `relatedSolutionSlugs` matches.
- `industries/[slug]`: "Recommended services" + "Common solutions for this
  industry."
- Blog posts: byline area shows "Related service"/"Related solution" chips.

---

## Phase E — Manual / non-code SEO checklist (NOT implemented by Claude)

Operational/marketing tasks for the user to do outside this codebase:

- [ ] Secure a generic-TLD domain while cheap (`anymus.com` is taken;
      `anymus.systems` ~$22/yr or `anymus.co` ~$30/yr are available as of
      2026-07-12). Hold it; only migrate later if US organic proves out. If
      migrating: 301 all `.in` URLs, update `SITE_URL` in `src/lib/site.ts`,
      re-verify Search Console.
- [ ] Google Business Profile: create/claim listing, category "Business
      management consultant" or closest match, service area = India (GBP is
      tied to physical presence — only useful for the India side).
- [ ] Decide: city+service local-SEO pages (e.g. "CRM automation in
      Bangalore")? Recommend deferring until there's a real local
      address/presence to back it — thin local pages without real NAP data
      are a spam risk. If pursued later, this adds a `locations.ts` +
      combinatorial route and should be scoped separately.
- [ ] Directory listings — split by market:
      - US buyers: Clutch.co (US buyers rely on it heavily; get real client
        reviews there), GoodFirms, UpCity, G2 (if applicable).
      - India: JustDial, IndiaMART.
- [ ] Backlink/guest content targets: Medium (canonical back to anymus.in),
      Dev.to, LinkedIn articles, industry-specific communities matched to
      whichever industry pages ship first.
- [ ] Populate `SOCIALS` in `src/lib/site.ts` (currently `[]`) once real
      profiles exist, so `organizationSchema.sameAs` isn't empty.
- [ ] Submit sitemap.xml to Google Search Console + Bing Webmaster Tools once
      new routes ship.
- [ ] Review/testimonial collection for a future `Review`/`AggregateRating`
      schema — don't add this schema until real reviews exist (fabricated
      ratings violate Google's spam policy).

---

## First-batch content (concrete, ~5-8 each + 3-5 posts)

Adapted to anymus's actual 3 services — no AI-agent framing (confirmed dropped
in `services.ts`). Two-track: market-neutral pages form the core; a few pieces
deliberately target one market where the channel is market-specific
(WhatsApp = India, SMS/text-back = US).

**Solutions** (priority 1):
1. `whatsapp-lead-automation` — WhatsApp Lead Capture & Follow-Up Automation (→ automation) [India-leaning]
2. `sms-follow-up-automation` — SMS Follow-Up & Missed-Call Text-Back Automation (→ automation) [US-leaning]
3. `crm-setup-for-small-business` — CRM Setup & Configuration (HubSpot / Zoho) (→ automation) [both]
4. `website-to-crm-integration` — Connecting Your Website to a CRM (→ digital-presence + automation) [both]
5. `appointment-booking-automation` — Automated Appointment Booking & Reminders (→ automation) [both]
6. `invoice-and-billing-automation` — Automated Invoice Generation & Billing Follow-Ups (→ automation + internal-systems) [both]
7. `lead-routing-and-qualification` — Lead Routing & Qualification Automation (→ automation) [both]
8. `client-portal-development` — Client Portals for Service Businesses (→ internal-systems) [both]
9. `business-dashboard-development` — Real-Time Business Dashboards, Replacing Spreadsheets (→ internal-systems) [both]

**Blog posts** (priority 2):
0. `if-it-has-to-be-remembered-its-broken` — If Someone Has to Remember It,
   the System Is Broken [both — FLAGSHIP: this is the brand's ownable idea;
   write it first, link it from everywhere]
0b. `the-growth-wall` — The Wall Every Growing Business Hits (and Why More
   Software Isn't the Fix) [both — uses the growth-wall narrative + HBR
   speed-to-lead stat]
1. `whatsapp-crm-automation-india` — Why WhatsApp + CRM Automation Is the Fastest ROI for Indian SMBs [India]
2. `signs-you-need-a-crm` — 5 Signs Your Business Has Outgrown Spreadsheets [both]
3. `website-that-actually-generates-leads` — What Makes a Website Actually Generate Leads (Not Just Look Good) [both]
4. `choosing-off-the-shelf-vs-custom-internal-tools` — Off-the-Shelf vs Custom Internal Tools: How to Decide [both]
5. `automation-audit-checklist` — A Practical Checklist for Auditing Manual Work Worth Automating [both]
6. `custom-internal-tools-cost` — What Custom Internal Tools Actually Cost: Offshore vs US Agency Pricing [US]
   (targets the exact query a US buyer evaluating an offshore agency types —
   the strongest dual-market angle; be honest about the tradeoffs, that's what
   makes it rank and convert)

**Industry pages** (priority 3):
1. `clinics-healthcare` — Automation & Systems for Clinics & Healthcare Practices
2. `real-estate` — CRM & Automation for Real Estate Agencies
3. `retail-ecommerce` — Systems for Retail & D2C Brands
4. `professional-services` — Internal Systems for Consultancies & Agencies
5. `education-coaching` — CRM & Automation for Coaching Institutes & Ed-Businesses
6. `manufacturing-distribution` — Internal Systems for Manufacturing & Distribution Businesses

---

## Execution order

1. **Phase A** — `solutions.ts` + routes + `SolutionLayout` + OG images, plus
   the `/how-we-work` page (discovery-first / modular payments content from
   the company profile).
2. **Phase D (partial)** — generalize `faqSchema`, add `solutionSchema`, wire
   solution pages into sitemap, add related-service links on `services/[slug]`.
3. **Phase B** — MDX config, `mdx-components.tsx`, `blog.ts` registry, routes,
   `articleSchema`, sitemap wiring.
4. **Phase C** — `industries.ts` + routes + OG images, `industrySchema`,
   sitemap wiring, cross-links from solutions/services.
5. **Phase D (remainder)** — full cross-linking pass once all four content
   types exist; LocalBusiness schema decision with user.
6. **Phase E** — hand off as a checklist; no code.

## Verification

- `npm run lint` and `npm run build` after each phase — new dynamic routes
  (`generateStaticParams`) must build cleanly with no missing metadata.
- Visually check `/solutions`, `/solutions/[slug]`, `/blog`, `/blog/[slug]`,
  `/industries`, `/industries/[slug]` in the dev server for layout/animation
  parity with `/services` pages.
- Validate structured data with Google's Rich Results Test for at least one
  page of each new type (Service, Article, BreadcrumbList, FAQPage).
- Confirm `sitemap.xml` (via dev server or build output) includes all new
  routes with correct paths.
- Check internal links render correctly (no broken FK slugs) — since these are
  plain TS arrays, a broken FK will surface as a TypeScript build error or an
  empty filtered list, not a runtime crash, but eyeball the first batch anyway.
