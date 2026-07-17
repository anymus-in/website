import { getSolution, solutions } from "@/lib/solutions";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const alt = "Anymus solution";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  return renderOgImage(solution ? solution.name : "Anymus");
}
