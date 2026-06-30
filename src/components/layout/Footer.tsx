import { services } from "@/lib/services";

function AnymusLogo() {
  return (
    <div className="flex items-center gap-2 text-white mb-4">
      <span
        aria-hidden
        className="w-6 h-6 bg-white shrink-0"
        style={{
          maskImage: "url(/final-logo.svg)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(/final-logo.svg)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />
      <span className="font-serif text-[20px] font-medium tracking-tight">anymus</span>
    </div>
  );
}

export default function Footer() {
  const serviceLinks = [
    { label: "All services", href: "/services" },
    ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  ];
  const anymusLinks = [
    { label: "Sign in", href: "/client-sign-in" },
    { label: "Contact us", href: "/contact" },
    { label: "Schedule a call", href: "/schedule-call" },
  ];
  const legalLinks = [
    { label: "Terms of use", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookie policy", href: "/cookies" },
  ];

  return (
    <footer className="w-full bg-[#0F0F10] pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32 border-t-2 border-transparent"
      style={{ borderImage: "linear-gradient(135deg, #F5C26B 0%, #F08A3C 50%, #3B82F6 100%) 1" }}
    >
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-8 sm:gap-12 lg:gap-16 md:gap-20">
          {/* Brand + Disclaimer */}
          <div className="max-w-xl">
            <AnymusLogo />
            <p className="text-[12px] sm:text-[13px] text-[#A1A1AA] leading-relaxed mb-4 sm:mb-5">
              We help growing businesses build modern websites,
              automate manual operations, and run on internal tools and
              dashboards built around clean data. We are a software and
              services provider and do not provide legal, financial, or
              other licensed advisory services.
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#A1A1AA] leading-relaxed">
              Any customer interactions, product information, system
              configurations, or recommendations generated through our
              services are based on the configuration and data provided by
              the customer. By using this website you agree to our{" "}
              <a href="/terms" className="text-[#F5C26B]/80 underline underline-offset-1 hover:text-[#F5C26B] transition-colors">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#F5C26B]/80 underline underline-offset-1 hover:text-[#F5C26B] transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Service links */}
          <div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-3 sm:mb-5 font-medium uppercase tracking-wider">Services</p>
            <ul className="space-y-3 sm:space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] sm:text-[15px] text-[#A1A1AA] hover:text-[#F5C26B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* anymus links */}
          <div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-3 sm:mb-5 font-medium uppercase tracking-wider">anymus</p>
            <ul className="space-y-3 sm:space-y-4">
              {anymusLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] sm:text-[15px] text-[#A1A1AA] hover:text-[#F5C26B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mb-3 sm:mb-5 font-medium uppercase tracking-wider">Legal</p>
            <ul className="space-y-3 sm:space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] sm:text-[15px] text-[#A1A1AA] hover:text-[#F5C26B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
