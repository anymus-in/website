# Homepage repositioning: 4 services → 3 pillars + conversion sections

## Context

Reviewer scored the site 7.5/10 — design 9/10, but positioning/clarity 5/10 and
trust 4/10. The problem isn't visual: a business owner can't tell *what anymus does,
who it helps, and why to care* within 10 seconds. The site currently sells four
siloed implementation services (ERP, CRM, Business Automation, Website).

Decisions locked with the user:
1. Restructure into **3 pillars**: **Digital Presence** (websites & landing pages),
   **Automation** (WhatsApp, CRM, workflows), **Internal Systems** (dashboards,
   portals, management tools).
2. **Rewrite the hero** for outcome-led clarity.
3. Add **3 conversion sections**: Problems We Solve, Industries/Use Cases, Why Choose anymus.
4. **Full reach**: homepage + metadata + the `/services/*` detail routes.
5. **Reuse existing visuals** (remap only, no new art).

CRM folds into Automation; ERP-style dashboards fold into Internal Systems. Marketing
positioning only — no backend.

> **Strategic note (not relitigating — just flagged):** the pillar examples (WhatsApp,
> clinics, restaurants) broaden the audience toward SMB/local-business, softening the
> premium mid-market ERP/CRM positioning. The user chose this; implementing as-is.

---

## Architecture leverage (why this is smaller than it looks)

`src/lib/services.ts` is the **single source of truth**. Editing its `services` array
from 4 → 3 auto-updates: `/services/[slug]` routes (`generateStaticParams` +
`generateMetadata` read `seoTitle`/`metaDescription`), the services hub, Footer links,
sitemap, the schedule-call product dropdown, and the OfferCatalog JSON-LD. So the
restructure ≈ one rich data edit + a visual-map remap + copy. **The bulk of the effort
is writing 3 complete `Service` entries** (each has intro, body, outcomes[], signs[],
process[], faqs[], seoTitle, metaDescription) — done by **consolidating** the existing
4 entries, not writing from scratch.

### Old → new content reuse map (preserve the good lines)
- **Digital Presence** ← old `website-design` (near 1:1; broaden to add landing pages + conversion focus).
- **Automation** ← old `business-automation` **+** `crm`. Fold in WhatsApp/CRM workflows, lead routing, follow-ups, and the strong line *"No more leads lost in spreadsheets or inboxes."*
- **Internal Systems** ← old `erp-implementation` **+** the visibility/reporting bits of `crm`. Generalize ERP/inventory copy to dashboards, portals (ties to the existing Client Portal feature), reporting, management software, "real-time visibility into operations."

### The 3 pillars
| order | slug | name | visualKey | accent/tint | icon |
|-------|------|------|-----------|-------------|------|
| 1 | `digital-presence` | Digital Presence | `website` (WebsiteContent) | blue | `Globe` |
| 2 | `automation` | Automation | `automation` (WorkflowContent) | green | `Workflow` |
| 3 | `internal-systems` | Internal Systems | `internal` (ErpContent) | amber | `LayoutGrid` |

`accent` is set per pillar to match its tint for coherence (DP=blue, Auto=green, IS=amber).

---

## Files to modify

### 1. Data / source of truth — `src/lib/services.ts`
- Replace the 4-entry array with the 3 pillars (full `Service` shape each, via the reuse map).
- `ServiceVisualKey` type: `"erp" | "crm" | "automation" | "website"` → `"website" | "automation" | "internal"`.
- Update icon imports (`Globe`, `Workflow`, `LayoutGrid`; drop `Boxes`, `Users`).

### 2. Visuals (remap only) — `src/components/sections/service-visuals.tsx`
- Update the `serviceVisuals` map keys to `website` / `automation` / `internal`, with
  `internal` pointing at the existing **`ErpContent`** (closest "dashboard" mock).
- Update only the visible **`CardTag` labels**: "Website"→"Digital Presence",
  "Automation" stays, "ERP"→"Internal Systems". Per the user's "reuse & remap" choice,
  leave the mock's internal copy (e.g. ErpContent's stock rows) **untouched** — it reads
  as a generic ops dashboard, consistent with the hero. `CrmContent` becomes unused;
  leave it exported (no churn) and remove its import where it's no longer referenced to
  keep lint green.

### 3. Homepage sections
- **`Hero.tsx`** — eyebrow `Digital Presence · Automation · Internal Systems`; new
  headline + subhead (see Copy below); CTAs and dashboard mockup unchanged.
- **`FeatureBlocks.tsx`** — rebuild `features` to the 3 pillars (badge, slug, tint,
  `Highlight` heading, bullets, `MeshCard` + remapped visual, alternating `reversed`).
  Section heading → **"Three services. One connected system."** (keeps parallel with the
  "Services" nav + hub). Remove now-unused icon/visual imports.
- **`GetStarted.tsx`** — copy: "configure your ERP, CRM, or automation system" → "build
  your website, automation, or internal system". Keep `id="process"` (Hero's `#process`
  anchor depends on it).
- **`CtaBand.tsx`** — "running your business on spreadsheets" still lands; keep as-is.

### 4. New sections — match the existing premium idiom (no generic templates)
Use `Reveal` / `RevealGroup` / `RevealItem`, the `Chip` component, `.surface`,
`.card-hover`, serif headings, `eyebrow` class, and `border-line` hairlines.
- **`ProblemsWeSolve.tsx`** — eyebrow "The problem", serif heading "Sound familiar?".
  `RevealGroup` of 5 pains in the `BulletList` hairline idiom, each with a small pillar
  tag on the right (→ Automation / Internal Systems / Digital Presence):
  leads lost in WhatsApp & inboxes; manual follow-ups eating hours; no clear view of
  performance; outdated/no website; ops on a dozen spreadsheets. Closing line: *"We fix
  these with websites, automation, and internal systems — built to work together."*
- **`Industries.tsx`** — eyebrow "Use cases", heading "What this looks like for your
  business". `RevealGroup` 4-card grid (`.surface` + `.card-hover`, icon + serif name +
  3 stack chips), framed honestly as example builds (no fabricated clients):
  Clinics (Website · Online booking · Patient reminders); Restaurants (Website · Online
  ordering · Customer database); Real estate (Landing pages · Lead capture · CRM
  follow-up); Service businesses (Website · Lead funnel · Ops dashboard).
- **`WhyChooseAnymus.tsx`** — eyebrow "Why anymus", heading "Why businesses choose
  anymus". `RevealGroup` of 5 **concrete, qualitative** reasons — **no invented metrics
  or testimonials**: technical-first team (we build, not just advise); custom-built, not
  locked templates; one connected stack; outcome-focused (hours saved, leads won);
  long-term support after launch. Visually light so it doesn't read as filler.

### 5. Page assembly + SEO
- **`page.tsx`** — import the 3 new sections; order:
  `Hero → ProblemsWeSolve → FeatureBlocks → Industries → WhyChooseAnymus → GetStarted → CtaBand`.
  Update `metadata.title.absolute` + `description` to the 3-pillar story (drop "ERP, CRM").
- **`services/page.tsx`** (hub) — `<h1>` "Four services…" → "Three services. One
  connected system." + intro + metadata.
- **`src/lib/site.ts`** — `SITE_DESCRIPTION` + `SITE_KEYWORDS`.
- **`src/lib/structured-data.ts`** — `organizationSchema.knowsAbout` array (swap
  ERP/CRM-specific strings for website design / business automation / internal tools &
  dashboards). OfferCatalog + `serviceSchema()` auto-update from the array.
- **`manifest.ts`**, **`opengraph-image.tsx`**, **`services/opengraph-image.tsx`** —
  rendered name/headline text.
- **`schedule-call/page.tsx`** + **`ScheduleCallForm.tsx`** + **`contact/page.tsx`** —
  meta descriptions and any visible ERP/CRM body copy (dropdown auto-updates from the array).

### 6. Redirects (NEW — prevents 404s on indexed/old URLs) — `next.config.ts`
The 4 old slugs disappear; add **permanent (301) redirects** via `async redirects()`:
- `/services/erp-implementation` → `/services/internal-systems`
- `/services/crm` → `/services/automation`
- `/services/business-automation` → `/services/automation`
- `/services/website-design` → `/services/digital-presence`

⚠️ Per **AGENTS.md**, Next 16 may differ — read `node_modules/next/dist/docs/01-app`
for the current `redirects()` config shape **before** writing it.

### Auto-updated (verify only, no edit)
Footer links, sitemap, `/services/[slug]` routes + their metadata, schedule-call dropdown.

### Out of scope — flag to user, don't change
- Client Portal sample data says "CRM & Automation Implementation" — still coherent
  (CRM ⊂ Automation), behind sign-in; leave.
- **Legal copy (Terms/Privacy)**: per prior guidance, a business-model surface change
  warrants a check — scan for service-specific language; if it lists ERP/CRM, draft an
  update and **flag as unreviewed** rather than silently editing.

---

## Recommended copy (hero is highest-leverage — pick one)

**Headline (recommended A):** "Build the systems that help your business scale"
- Alt B: "Your business runs better with better systems"
- Alt C: "Websites, automation, and the tools to run it all"

**Subhead:** "anymus designs and builds the websites, automations, and internal tools
that save time, tighten operations, and help you grow — built around the tools you
already use." (Keep the `#5F44E0` brand accent on "anymus".)

---

## Implementation sequencing (keep the build green throughout)
1. `services.ts` (data + types) → 2. `service-visuals.tsx` (map/labels) →
3. `FeatureBlocks.tsx` + `Hero.tsx` + `GetStarted.tsx` → 4. new sections + wire into
`page.tsx` → 5. SEO files (site.ts, structured-data, manifest, OG, schedule-call,
contact) → 6. `next.config.ts` redirects. Run `npm run build` after steps 1–3 (catches
`ServiceVisualKey` type mismatches early) and again at the end.

> When it's time to commit: branch off `main` first (currently on the default branch).

## Verification
1. `npm run lint` — clean (watch for unused imports from removed icons/`CrmContent`).
2. `npm run build` — emits exactly the 3 new slugs, no stale `erp-implementation` /
   `crm` / `website-design` routes; OG image routes compile.
3. `npm run dev` → `/`: hero reads clearly in <10s; section order + animations correct;
   reduced-motion respected. `/services` hub lists 3 pillars; each `/services/<slug>`
   renders via `ServiceLayout` with the right visual; cross-links point only to the
   other 2 pillars. Footer shows 3 services; schedule-call dropdown shows 3 + "Not sure yet".
4. `curl -sI localhost:3000/services/erp-implementation` → 308/301 to `internal-systems`
   (repeat for the other 3 old slugs).
5. `grep -ri "erp-implementation\|website-design\|/services/crm" src/` → nothing except
   intentional client-portal sample data.
6. Spot-check `/sitemap.xml`, page `<title>`, and OG text reflect the 3-pillar story.
