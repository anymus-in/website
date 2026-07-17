import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionLayout from "@/components/layout/SolutionLayout";
import JsonLd from "@/components/seo/JsonLd";
import { solutions, getSolution } from "@/lib/solutions";
import {
  solutionSchema,
  faqSchema,
  breadcrumbList,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  const path = `/solutions/${solution.slug}`;
  return {
    title: solution.seoTitle,
    description: solution.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${solution.seoTitle} | Anymus`,
      description: solution.metaDescription,
      url: path,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <JsonLd
        data={[
          solutionSchema(solution),
          faqSchema(solution.faqs),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ]),
        ]}
      />
      <SolutionLayout solution={solution} />
    </>
  );
}
