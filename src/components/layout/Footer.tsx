import { services } from "@/lib/services";
import { CONTACT_EMAIL } from "@/lib/site";

const COLUMNS = [
  {
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
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
        {/* Document header rule */}
        <div className="flex items-baseline justify-between border-b border-sheet/20 pb-3">
          <span className="anno !text-sheet/45">Anymus</span>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 py-12 sm:py-16">
          {/* Brand + contact */}
          <div className="lg:col-span-5 lg:pr-12 lg:border-r lg:border-sheet/15 flex flex-col">
            <p className="font-serif font-light text-[clamp(22px,2.8vw,32px)] leading-[1.18] tracking-[-0.015em] text-sheet/90 max-w-[400px] mb-8">
              The system your business runs on — designed, built, and wired by{" "}
              <span className="italic text-mark">anymus</span>.
            </p>
            <div className="mt-auto space-y-3">
              <p className="anno !text-sheet/45">Write to us</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="u-draw inline-block font-mono text-[13px] tracking-[0.04em] text-sheet/85 hover:text-sheet transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="anno !text-sheet/40">Reply &lt; 24h · no obligation</p>
            </div>
          </div>

          {/* Link ledger */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-8 lg:pl-6">
            {COLUMNS.map((col) => (
              <div key={col.label}>
                <p className="border-b border-sheet/15 pb-2.5 mb-5">
                  <span className="anno !text-sheet/45">{col.label}</span>
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

        {/* Small print — the disclaimer, demoted but intact */}
        <div className="border-t border-sheet/15 pt-6 pb-2">
          <p className="anno !text-sheet/35 mb-3">Small print</p>
          <div className="lg:columns-2 lg:gap-12 text-[11.5px] text-sheet/45 leading-relaxed max-w-[980px] space-y-3">
            <p>
              We help growing businesses build modern websites, automate manual
              operations, and run on internal tools and dashboards built around
              clean data. We are a software and services provider and do not
              provide legal, financial, or other licensed advisory services.
            </p>
            <p>
              Any customer interactions, product information, system
              configurations, or recommendations generated through our services
              are based on the configuration and data provided by the customer.
              By using this website you agree to our{" "}
              <a
                href="/terms"
                className="text-sheet/70 underline underline-offset-2 decoration-mark/60 hover:text-sheet transition-colors"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-sheet/70 underline underline-offset-2 decoration-mark/60 hover:text-sheet transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-sheet/15 py-5 mt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sheet/40">
            © {new Date().getFullYear()} anymus
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
