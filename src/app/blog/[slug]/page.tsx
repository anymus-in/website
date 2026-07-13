import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import Reveal from "@/components/motion/Reveal";
import EndCta from "@/components/sections/EndCta";
import JsonLd from "@/components/seo/JsonLd";
import { posts, getPostMeta } from "@/lib/blog";
import { getService } from "@/lib/services";
import { getSolution } from "@/lib/solutions";
import { articleSchema, breadcrumbList } from "@/lib/structured-data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${post.seoTitle} | anymus`,
      description: post.metaDescription,
      url: path,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);
  const service = getService(post.relatedServiceSlug);
  const related = post.relatedSolutionSlugs
    .map((s) => getSolution(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <div className="flex items-baseline justify-between border-b rule-strong pb-3 gap-4">
            <nav aria-label="Breadcrumb" className="min-w-0">
              <ol className="anno flex items-center gap-2 whitespace-nowrap overflow-hidden">
                <li className="hidden sm:block">
                  <Link
                    href="/"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Anymus
                  </Link>
                </li>
                <li aria-hidden className="hidden sm:block">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Field notes
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="truncate" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>
            <span className="anno anno-mark shrink-0">{formatDate(post.date)}</span>
          </div>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-14 pb-10 sm:pb-14">
            <p className="eyebrow mb-5 sm:mb-6">
              Field note · {post.readingTime} read
            </p>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <h1 className="lg:col-span-9 font-serif font-light text-[clamp(32px,5.5vw,68px)] leading-[1.05] tracking-[-0.025em] text-inkwarm max-w-[900px]">
                {post.title}
              </h1>
            </div>
            <p className="mt-6 text-[16px] sm:text-[18px] font-serif italic text-inkwarm-soft leading-relaxed max-w-[640px]">
              {post.standfirst}
            </p>
            {/* Meta row — mobile/tablet only; the sticky marginalia covers lg+ */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 lg:hidden">
              {service && (
                <Link
                  href={`/services/${service.slug}`}
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-inkwarm-soft border rule rounded-[2px] px-2.5 py-1.5 hover:border-mark hover:text-mark transition-colors"
                >
                  Re: {service.name}
                </Link>
              )}
              <span className="font-mono text-[10px] text-inkwarm-faint">
                {post.tags.map((t) => `#${t}`).join("  ")}
              </span>
            </div>
          </Reveal>
        </header>

        {/* ── Article body ────────────────────────────────── */}
        <article className="border-t rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-10 sm:py-16 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Marginalia */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[110px] space-y-6 pr-8">
                <div>
                  <p className="anno mb-2">Filed</p>
                  <p className="font-mono text-[12px] text-inkwarm-soft">
                    {formatDate(post.date)}
                  </p>
                </div>
                {service && (
                  <div>
                    <p className="anno mb-2">Relates to</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="u-draw font-serif text-[16px] text-inkwarm"
                    >
                      {service.name}
                    </Link>
                  </div>
                )}
                <div>
                  <p className="anno mb-2">Tagged</p>
                  <p className="font-mono text-[11px] text-inkwarm-faint leading-relaxed">
                    {post.tags.map((t) => `#${t}`).join("  ")}
                  </p>
                </div>
                <div className="border-t rule pt-5">
                  <a
                    href="/schedule-call"
                    className="u-draw inline-flex items-center gap-1.5 text-[13px] font-medium text-mark"
                  >
                    Talk to us
                    <span aria-hidden className="font-mono text-[11px]">→</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Body copy — drop cap on the opening paragraph */}
            <div className="lg:col-span-8 max-w-[680px] [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:font-light [&>p:first-of-type]:first-letter:text-[3.3em] [&>p:first-of-type]:first-letter:leading-[0.85] [&>p:first-of-type]:first-letter:text-mark [&>p:first-of-type]:first-letter:mr-2.5 [&>p:first-of-type]:first-letter:mt-[0.08em]">
              <Body />
            </div>
          </div>
        </article>

        {/* ── Related playbooks ───────────────────────────── */}
        {related.length > 0 && (
          <section className="graph-bg bg-sheet-deep/60 border-y rule">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
              <div className="flex items-baseline justify-between border-b rule pb-3 mb-8 sm:mb-10">
                <span className="eyebrow !mb-0">Mentioned in this note</span>
                <span className="anno hidden sm:block">Playbooks</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="group block border rule bg-sheet-lift px-6 pt-6 pb-5 rounded-[2px] card-lift"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="anno anno-mark">Playbook</span>
                      <span
                        aria-hidden
                        className="font-mono text-[12px] text-mark transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                    <p className="font-serif text-[19px] sm:text-[21px] leading-tight text-inkwarm mb-2">
                      {s.name}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed">
                      {s.intro}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Closing ─────────────────────────────────────── */}
        <EndCta
          stamp="End of note"
          heading={
            <>
              Reading is free. So is{" "}
              <span className="italic text-mark">discovery</span>.
            </>
          }
        />
      </main>
      <MobileCtaBar />
      <Footer />
    </>
  );
}
