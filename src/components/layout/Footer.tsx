import { services } from "@/lib/services";

const COLUMNS = [
  {
    num: "A",
    label: "Index",
    links: [
      { label: "All services", href: "/services" },
      ...services.map((s, i) => ({
        label: s.name,
        href: `/services/${s.slug}`,
        num: `0${i + 1}`,
      })),
    ],
  },
  {
    num: "B",
    label: "Anymus",
    links: [
      { label: "Client sign-in", href: "/client-sign-in" },
      { label: "Contact", href: "/contact" },
      { label: "Schedule a call", href: "/schedule-call" },
    ],
  },
  {
    num: "C",
    label: "Legal",
    links: [
      { label: "Terms of use", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#14110C] text-sheet border-t-2 border-mark overflow-hidden">
      {/* Top strip — one last door */}
      <div className="border-b border-sheet/15">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <span className="font-serif font-light text-[clamp(20px,2.6vw,30px)] leading-tight tracking-[-0.015em] text-sheet/85">
            Still reading? That&rsquo;s usually a sign.
          </span>
          <a
            href="/schedule-call"
            className="group inline-flex items-baseline gap-3 shrink-0"
          >
            <span className="u-draw font-serif text-[clamp(18px,2.2vw,24px)] leading-none text-sheet">
              Start a project
            </span>
            <span
              aria-hidden
              className="font-serif text-[clamp(18px,2.2vw,24px)] leading-none text-mark transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* Link ledger — ruled columns */}
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 py-12 sm:py-16">
          {/* Colophon */}
          <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-sheet/15">
            <p className="anno !text-sheet/45 block mb-5">Colophon</p>
            <p className="text-[12.5px] text-sheet/55 leading-relaxed mb-4 max-w-[440px]">
              We help growing businesses build modern websites, automate manual
              operations, and run on internal tools and dashboards built around
              clean data. We are a software and services provider and do not
              provide legal, financial, or other licensed advisory services.
            </p>
            <p className="text-[12.5px] text-sheet/55 leading-relaxed max-w-[440px]">
              Any customer interactions, product information, system
              configurations, or recommendations generated through our services
              are based on the configuration and data provided by the customer.
              By using this website you agree to our{" "}
              <a
                href="/terms"
                className="text-sheet/80 underline underline-offset-2 decoration-mark/60 hover:text-sheet transition-colors"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-sheet/80 underline underline-offset-2 decoration-mark/60 hover:text-sheet transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-live live-dot" />
              <span className="anno !text-sheet/45">All systems running</span>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-8 lg:pl-6">
            {COLUMNS.map((col) => (
              <div key={col.label}>
                <p className="flex items-baseline justify-between border-b border-sheet/15 pb-2.5 mb-5">
                  <span className="anno !text-sheet/45">{col.label}</span>
                  <span className="anno anno-mark !text-[9px]">{col.num}</span>
                </p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-baseline gap-2 text-sheet/65 hover:text-sheet transition-colors"
                      >
                        {"num" in link && link.num && (
                          <span className="font-mono text-[9px] text-sheet/35 group-hover:text-mark transition-colors">
                            {link.num}
                          </span>
                        )}
                        <span className="u-draw font-serif text-[15.5px] leading-snug">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-sheet/15 py-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sheet/40">
            © {new Date().getFullYear()} anymus
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sheet/40">
            Doc. 00 — rev. {new Date().getFullYear()}.07
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sheet/40">
            Set in Newsreader &amp; JetBrains Mono
          </span>
        </div>

        {/* Giant cropped wordmark */}
        <div aria-hidden className="select-none pointer-events-none -mb-[0.36em]">
          <span
            className="block font-serif font-light text-center leading-none tracking-[-0.03em] text-transparent"
            style={{
              fontSize: "clamp(96px, 21vw, 320px)",
              WebkitTextStroke: "1px rgba(244, 241, 232, 0.22)",
            }}
          >
            anymus
          </span>
        </div>
      </div>
    </footer>
  );
}
