import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  SOCIALS,
} from "./site";
import { services, type Service, type ServiceFaqItem } from "./services";
import type { Solution } from "./solutions";
import type { PostMeta } from "./blog";
import type { Industry } from "./industries";

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

/** schema.org FAQPage from any FAQ list — built from the same data the page renders. */
export function faqSchema(faqs: ServiceFaqItem[]) {
  return {
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
}

/** schema.org FAQPage for a service detail page. */
export function serviceFaqSchema(service: Service) {
  return faqSchema(service.faqs);
}

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

/** schema.org Service for a solution detail page — a narrower-scoped offering. */
export function solutionSchema(solution: Solution) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    serviceType: solution.serviceType,
    description: solution.metaDescription,
    url: `${SITE_URL}/solutions/${solution.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

/** schema.org Service scoped to an industry page, with an explicit audience. */
export function industrySchema(industry: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.seoTitle,
    serviceType: industry.serviceType,
    description: industry.metaDescription,
    url: `${SITE_URL}/industries/${industry.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: industry.name,
    },
  };
}

/** schema.org BlogPosting for a blog post page. Author is the organization —
 * no named authors exist yet. */
export function articleSchema(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updated,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    keywords: post.tags.join(", "),
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
