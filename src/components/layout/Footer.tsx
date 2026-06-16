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
    <footer className="w-full bg-white pt-16 pb-32">
      <div className="max-w-[1232px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20">
          {/* Disclaimer */}
          <div className="max-w-xl">
            <p className="text-[13px] text-[#71717A] leading-relaxed mb-5">
              anymus (&quot;anymus&quot;) provides technology and AI-powered
              agents designed to help businesses engage visitors, qualify
              inbound leads, deliver personalized product experiences, and guide
              users through onboarding. anymus is a software platform and does
              not provide sales, marketing, legal, or advisory services.
            </p>
            <p className="text-[13px] text-[#71717A] leading-relaxed">
              Any customer interactions, product information, or recommendations
              generated through anymus agents are based on the configuration and
              data provided by the customer. anymus does not control, verify, or
              guarantee the accuracy, completeness, or suitability of any
              information presented through its platform. By using this website
              or the anymus platform, you acknowledge that all content is
              provided for informational and operational purposes only and agree
              to our{" "}
              <a
                href="#"
                className="text-[#C97A1C] underline underline-offset-1 decoration-[#F0A23C]/50 hover:decoration-[#C97A1C] transition-colors"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#C97A1C] underline underline-offset-1 decoration-[#F0A23C]/50 hover:decoration-[#C97A1C] transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* anymus links */}
          <div>
            <p className="text-sm text-[#71717A] mb-5 font-medium">anymus</p>
            <ul className="space-y-4">
              {anymusLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-black hover:text-[#C97A1C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="text-sm text-[#71717A] mb-5 font-medium">Legal</p>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-black hover:text-[#C97A1C] transition-colors"
                  >
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
