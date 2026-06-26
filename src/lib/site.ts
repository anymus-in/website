/**
 * Central site constants used across metadata, sitemap, robots, manifest,
 * structured data, and the generated OG image. Single source of truth so
 * URLs and brand strings never drift between SEO surfaces.
 */
export const SITE_URL = "https://anymus.in";

export const SITE_NAME = "anymus";

export const SITE_TAGLINE = "Websites, Automation & Internal Systems";

export const SITE_DESCRIPTION =
  "anymus designs and builds the websites, automations, and internal tools that growing businesses run on — one connected system, built around the tools you already use.";

export const CONTACT_EMAIL = "anymus.shared@gmail.com";

/**
 * Public social/profile URLs. Feeds JSON-LD `sameAs` to strengthen brand
 * entity signals. Populate once the user provides their handles.
 */
export const SOCIALS: string[] = [];

/** SEO keywords for the homepage / default metadata. */
export const SITE_KEYWORDS = [
  "website design and development",
  "landing page design",
  "business automation",
  "workflow automation",
  "WhatsApp automation",
  "CRM automation",
  "custom internal tools",
  "business dashboards",
  "client portals",
  "systems integration",
];
