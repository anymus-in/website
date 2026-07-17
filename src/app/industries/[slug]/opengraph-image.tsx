import { getIndustry, industries } from "@/lib/industries";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const alt = "Anymus industry";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return renderOgImage(industry ? industry.name : "Anymus");
}
