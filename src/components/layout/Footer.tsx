import { services } from "@/lib/services";

const COLUMNS = [
  {
    label: "Index",
    links: [
      { label: "All services", href: "/services" },
      ...services.map((s, i) => ({
        label: `0${i + 1} ${s.name}`,
        href: `/services/${s.slug}`,
      })),
    ],
  },
  {
    label: "Anymus",
    links: [
      { label: "Client sign-in", href: "/client-sign-in" },
      { label: "Contact", href: "/contact" },
      { label: "Schedule a call", href: "/schedule-call" },
    ],
  },
  {
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
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 pb-14 sm:pb-20">
          {/* Colophon / disclaimer */}
          <div className="max-w-[460px]">
            <p className="anno !text-sheet/45 block mb-5">Colophon</p>
            <p className="text-[12.5px] text-sheet/55 leading-relaxed mb-4">
              We help growing businesses build modern websites, automate manual
              operations, and run on internal tools and dashboards built around
              clean data. We are a software and services provider and do not
              provide legal, financial, or other licensed advisory services.
            </p>
            <p className="text-[12.5px] text-sheet/55 leading-relaxed">
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
          </div>

          {/* Link ledger */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-8">
            {COLUMNS.map((col) => (
              <div key={col.label}>
                <p className="anno !text-sheet/45 block mb-5 pb-2 border-b border-sheet/15">
                  {col.label}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-baseline gap-1.5 text-[13px] text-sheet/60 hover:text-sheet transition-colors"
                      >
                        <span className="u-draw">{link.label}</span>
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
            © {new Date().getFullYear()} anymus — all systems running
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
