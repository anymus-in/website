import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Anymus uses cookies and similar technologies on our website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="June 17, 2026">
      <LegalSection heading="1. Overview">
        <p>
          This Cookie Policy explains how Anymus (&quot;Anymus,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies when
          you visit our website. It should be read alongside our{" "}
          <a href="/privacy" className="text-accent-ink underline underline-offset-1 hover:text-accent transition-colors">
            Privacy Policy
          </a>
          , which explains more generally how we handle personal information.
        </p>
      </LegalSection>

      <LegalSection heading="2. What cookies are">
        <p>
          Cookies are small text files placed on your device when you visit
          a website. They are widely used to make websites work, work more
          efficiently, and provide information to the site owner. Similar
          technologies include local storage and pixels, which we refer to
          collectively as &quot;cookies&quot; in this policy.
        </p>
      </LegalSection>

      <LegalSection heading="3. Categories of cookies we use">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-[#18181B] font-medium">Essential cookies</span>{" "}
            — required for the website to function, such as remembering your
            session and security preferences. These cannot be disabled.
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Preference cookies</span>{" "}
            — remember choices you make, such as display settings, so we can
            provide a more personalized experience.
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Analytics cookies</span>{" "}
            — help us understand how visitors use our website, such as which
            pages are viewed and how visitors navigate the site, so we can
            improve it over time.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Third-party cookies">
        <p>
          Some cookies are placed by third-party service providers who help
          us operate and analyze our website, such as hosting and analytics
          providers. These third parties may use cookies to collect
          information about your use of our website in accordance with
          their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="5. Managing your cookie preferences">
        <p>
          Most browsers let you control cookies through their settings,
          including blocking or deleting cookies. Because cookies allow
          certain features of the Service to work, disabling them may affect
          your experience or prevent some features from functioning
          correctly.
        </p>
      </LegalSection>

      <LegalSection heading="6. Changes to this policy">
        <p>
          We may update this Cookie Policy from time to time. If we make
          material changes, we will update the &quot;Last updated&quot; date
          above.
        </p>
      </LegalSection>

      <LegalSection heading="7. Contact us">
        <p>
          If you have questions about this Cookie Policy, please contact us
          through the contact options listed on our website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
