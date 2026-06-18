import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  SOCIALS,
} from "./site";
import { faqs } from "./faqs";

/** schema.org Organization — brand entity for Google's Knowledge Graph. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/final-logo.svg`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  ...(SOCIALS.length > 0 ? { sameAs: SOCIALS } : {}),
};

/** schema.org WebSite — ties the domain to the brand. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/** schema.org FAQPage — built from the same FAQ data the page renders. */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};
