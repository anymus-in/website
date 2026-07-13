import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Page not filed",
  description: "This page was never filed — or the index moved on.",
};

const INDEX_LINKS = [
  { num: "01", label: "Contents", note: "the homepage", href: "/" },
  { num: "02", label: "Services", note: "the three chapters", href: "/services" },
  { num: "03", label: "Solutions", note: "the playbooks", href: "/solutions" },
  { num: "04", label: "Field notes", note: "the writing", href: "/blog" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px] min-h-[calc(100vh-70px)] flex flex-col">
        <div className="max-w-[1380px] w-full mx-auto px-5 sm:px-8 pt-8 sm:pt-12 flex-1 flex flex-col">
          {/* Document header */}
          <div className="flex items-baseline justify-between border-b rule-strong pb-3">
            <span className="anno">Anymus — Records</span>
            <span className="anno anno-mark">Filing error</span>
          </div>
          <div aria-hidden className="ruler-ticks h-[8px] opacity-60" />

          <Reveal className="flex-1 flex flex-col justify-center py-14 sm:py-20">
            <p className="eyebrow mb-4">Err. 404 — document missing</p>
            <p
              aria-hidden
              className="text-hollow-mark font-serif font-light leading-[0.9] tracking-[-0.04em] select-none"
              style={{ fontSize: "clamp(120px, 24vw, 340px)" }}
            >
              404
            </p>
            <h1 className="mt-6 font-serif font-light text-[clamp(26px,4.5vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[640px]">
              This page was never filed —{" "}
              <span className="italic text-mark">or the index moved on</span>.
            </h1>
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-inkwarm-soft leading-relaxed max-w-[480px]">
              If a link brought you here, the record it pointed to has been
              consolidated elsewhere. Everything current is reachable from the
              index below.
            </p>

            {/* The index */}
            <div className="mt-10 sm:mt-12 max-w-[560px]">
              {INDEX_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-baseline gap-4 border-t rule py-4 sm:py-5 transition-colors hover:bg-sheet-lift/40 active:bg-sheet-deep/60 focus-visible:outline-2 focus-visible:outline-mark focus-visible:-outline-offset-2"
                >
                  <span className="anno anno-mark shrink-0">{l.num}</span>
                  <span className="u-draw font-serif text-[19px] sm:text-[22px] leading-none text-inkwarm">
                    {l.label}
                  </span>
                  <span className="anno hidden sm:block">{l.note}</span>
                  <span
                    aria-hidden
                    className="ml-auto font-mono text-[13px] text-mark transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
              ))}
              <div className="border-t rule" />
            </div>

            <p className="anno mt-8">
              <span className="text-mark">✳</span> If someone has to remember a
              URL, the system is broken — use the index.
            </p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
