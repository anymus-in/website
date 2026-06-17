function AnymusLogo() {
  return (
    <div className="flex items-center gap-2 text-white mb-4">
      <svg width="22" height="18" viewBox="0 0 26 22" fill="none">
        <rect x="0" y="6" width="4" height="10" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="6" y="2" width="4" height="18" rx="2" fill="currentColor" />
        <rect x="12" y="0" width="4" height="22" rx="2" fill="currentColor" />
        <rect x="18" y="4" width="4" height="14" rx="2" fill="currentColor" opacity="0.85" />
        <rect x="24" y="8" width="2" height="8" rx="1" fill="currentColor" opacity="0.7" />
      </svg>
      <span className="font-serif text-[20px] font-medium tracking-tight">anymus</span>
    </div>
  );
}

export default function Footer() {
  const anymusLinks = [
    { label: "Sign in", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Careers", href: "#" },
  ];
  const legalLinks = [
    { label: "Privacy policy", href: "#" },
    { label: "Cookie policy", href: "#" },
    { label: "Responsible disclosure", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0F0F10] pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32 border-t-2 border-transparent"
      style={{ borderImage: "linear-gradient(135deg, #F5C26B 0%, #F08A3C 50%, #3B82F6 100%) 1" }}
    >
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-8 sm:gap-12 lg:gap-16 md:gap-20">
          {/* Brand + Disclaimer */}
          <div className="max-w-xl">
            <AnymusLogo />
            <p className="text-[12px] sm:text-[13px] text-[#52525B] leading-relaxed mb-4 sm:mb-5">
              anymus (&quot;anymus&quot;) provides technology and AI-powered
              agents designed to help businesses engage visitors, qualify
              inbound leads, deliver personalized product experiences, and guide
              users through onboarding. anymus is a software platform and does
              not provide sales, marketing, legal, or advisory services.
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#52525B] leading-relaxed">
              Any customer interactions, product information, or recommendations
              generated through anymus agents are based on the configuration and
              data provided by the customer. By using this website you agree to our{" "}
              <a href="#" className="text-[#F5C26B]/80 underline underline-offset-1 hover:text-[#F5C26B] transition-colors">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#F5C26B]/80 underline underline-offset-1 hover:text-[#F5C26B] transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* anymus links */}
          <div>
            <p className="text-xs sm:text-sm text-[#52525B] mb-3 sm:mb-5 font-medium uppercase tracking-wider">anymus</p>
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
            <p className="text-xs sm:text-sm text-[#52525B] mb-3 sm:mb-5 font-medium uppercase tracking-wider">Legal</p>
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
