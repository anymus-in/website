import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { posts } from "@/lib/blog";
import { industries } from "@/lib/industries";

/** Public, indexable routes. Gated routes (client-portal, client-sign-in) are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
    ...solutions.map((s) => ({
      path: `/solutions/${s.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    ...industries.map((i) => ({
      path: `/industries/${i.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/how-we-work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/schedule-call", priority: 0.8, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  // No lastModified on evergreen routes: emitting the build time on every
  // deploy tells crawlers every page changed, which erodes trust in the
  // signal entirely. Blog posts are the exception — their `updated` date is
  // a real, hand-maintained signal.
  return [
    ...routes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      lastModified: new Date(`${p.updated}T00:00:00Z`),
    })),
  ];
}
