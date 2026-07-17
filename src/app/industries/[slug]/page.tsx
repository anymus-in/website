import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryLayout from "@/components/layout/IndustryLayout";
import JsonLd from "@/components/seo/JsonLd";
import { industries, getIndustry } from "@/lib/industries";
import {
  industrySchema,
  faqSchema,
  breadcrumbList,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  const path = `/industries/${industry.slug}`;
  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${industry.seoTitle} | Anymus`,
      description: industry.metaDescription,
      url: path,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={[
          industrySchema(industry),
          faqSchema(industry.faqs),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.shortName, path: `/industries/${industry.slug}` },
          ]),
        ]}
      />
      <IndustryLayout industry={industry} />
    </>
  );
}
