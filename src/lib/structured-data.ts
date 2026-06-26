import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  SOCIALS,
} from "./site";
import { faqs } from "./faqs";
import { services, type Service } from "./services";

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
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "sales",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "website design and development",
    "business process automation",
    "workflow automation",
    "WhatsApp and CRM automation",
    "custom internal tools and dashboards",
    "systems integration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}`,
      },
    })),
  },
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

/** schema.org Service for a single service detail page. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

/** schema.org BreadcrumbList from an ordered list of { name, path } crumbs. */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
