import type { Metadata } from "next";
import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { postsByDate } from "@/lib/blog";
import { getService } from "@/lib/services";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Field Notes | Writing on Systems, Automation & Operations",
  description:
    "Field notes from anymus — how growing businesses leak leads, why spreadsheets stall growth, what automation actually costs, and how to build the system your business runs on.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes | anymus",
    description:
      "Writing on systems, automation, and the operations of growing businesses.",
    url: "/blog",
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const posts = postsByDate();
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Field notes", path: "/blog" },
        ])}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Field notes</span>
              <span className="anno anno-mark">{`${posts.length} entries`}</span>
            </div>
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                Field <span className="italic text-mark">notes</span>.
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  Notes from the field on how growing businesses actually run —
                  where leads leak, why spreadsheets stall, and what it takes to
                  build systems that don&rsquo;t forget.
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Entries ledger ──────────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20">
          <RevealGroup stagger={0.08}>
            {posts.map((post, i) => {
              const service = getService(post.relatedServiceSlug);
              return (
                <RevealItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 border-t rule py-8 sm:py-10 transition-colors active:bg-sheet-deep/60 hover:bg-sheet-lift/40"
                  >
                    {/* Entry stamp */}
                    <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
                      <span className="anno anno-mark">{`Entry ${String(
                        posts.length - i,
                      ).padStart(2, "0")}`}</span>
                      <span className="anno">{formatDate(post.date)}</span>
                    </div>

                    {/* Title + standfirst */}
                    <div className="lg:col-span-7 min-w-0">
                      <h2 className="font-serif font-light text-[clamp(24px,4vw,42px)] leading-[1.08] tracking-[-0.02em] text-inkwarm">
                        <span className="u-draw">{post.title}</span>
                        <span
                          aria-hidden
                          className="text-mark inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                        >
                          →
                        </span>
                      </h2>
                      <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-inkwarm-soft leading-relaxed max-w-[560px]">
                        {post.standfirst}
                      </p>
                    </div>

                    {/* Margin data */}
                    <div className="lg:col-span-3 lg:border-l lg:rule lg:pl-6 flex lg:flex-col gap-x-6 gap-y-2.5">
                      <p className="anno">{post.readingTime} read</p>
                      {service && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-inkwarm-soft">
                          Re: {service.name}
                        </p>
                      )}
                      <p className="hidden sm:block font-mono text-[11px] text-inkwarm-faint">
                        {post.tags.map((t) => `#${t}`).join("  ")}
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
            <div className="border-t rule" />
          </RevealGroup>

          <p className="anno mt-6">
            <span className="text-mark">✳</span> Written by the team that builds
            these systems — not a content mill.
          </p>
        </section>
      </main>
      <MobileCtaBar />
      <CtaBand />
      <Footer />
    </>
  );
}
