/**
 * Central site constants used across metadata, sitemap, robots, manifest,
 * structured data, and the generated OG image. Single source of truth so
 * URLs and brand strings never drift between SEO surfaces.
 */
export const SITE_URL = "https://anymus.in";

export const SITE_NAME = "anymus";

export const SITE_TAGLINE = "Custom ERP, CRM & Automation Systems";

export const SITE_DESCRIPTION =
  "anymus is an implementation agency that builds custom ERP, CRM, and business-automation systems — and websites — for growing businesses. A clear process, not a black box.";

export const CONTACT_EMAIL = "anymus.shared@gmail.com";

/**
 * Public social/profile URLs. Feeds JSON-LD `sameAs` to strengthen brand
 * entity signals. Populate once the user provides their handles.
 */
export const SOCIALS: string[] = [];

/** SEO keywords for the homepage / default metadata. */
export const SITE_KEYWORDS = [
  "ERP implementation",
  "CRM implementation",
  "business automation",
  "workflow automation",
  "ERP agency",
  "CRM agency",
  "custom business systems",
  "website design and development",
  "systems integration",
];
