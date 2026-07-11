import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import JsonLd from "@/components/seo/JsonLd";
import { services, getService } from "@/lib/services";
import {
  serviceSchema,
  serviceFaqSchema,
  breadcrumbList,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.seoTitle} | anymus`,
      description: service.metaDescription,
      url: path,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          serviceFaqSchema(service),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <ServiceLayout service={service} />
    </>
  );
}
