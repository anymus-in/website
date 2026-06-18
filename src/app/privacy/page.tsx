import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How anymus collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 17, 2026">
      <LegalSection heading="1. Overview">
        <p>
          This Privacy Policy explains how anymus (&quot;anymus,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects
          information when you visit our website or use our platform
          (collectively, the &quot;Service&quot;). It applies to visitors,
          prospective customers, and Customers who engage anymus to
          implement ERP or CRM systems, automate workflows, or integrate
          AI on top of their data (each, a &quot;Customer&quot;).
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>We collect the following categories of information:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-[#18181B] font-medium">Account information</span>{" "}
            — name, email address, company, and password when you create an
            account or request a demo.
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Customer Content</span>{" "}
            — business data, documents, and system configuration
            information Customers provide to power their ERP, CRM, and
            automation systems.
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Usage and device data</span>{" "}
            — pages visited, referring URLs, browser type, and similar
            analytics collected automatically through cookies and similar
            technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we use information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain the Service;</li>
          <li>
            Power the systems, workflows, and AI integrations we implement
            on behalf of our Customers;
          </li>
          <li>Respond to support requests and communicate with you;</li>
          <li>Monitor, analyze, and improve the performance and safety of the Service; and</li>
          <li>Comply with legal obligations and enforce our agreements.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. AI processing">
        <p>
          Where a Customer engages anymus for AI integrations, anymus may
          use artificial intelligence to process Customer Content in order
          to generate reporting, forecasting, or other insights. This
          processing may involve sending relevant data to third-party AI
          model providers under contractual terms that restrict their use
          of the data to providing the requested processing. anymus does
          not use Customer Content to train models for the benefit of
          other customers.
        </p>
      </LegalSection>

      <LegalSection heading="5. Cookies and tracking technologies">
        <p>
          We use cookies and similar technologies to keep you signed in,
          remember preferences, and understand how visitors use our website.
          You can control cookies through your browser settings; disabling
          cookies may affect some functionality of the Service.
        </p>
      </LegalSection>

      <LegalSection heading="6. How we share information">
        <p>We may share information with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-[#18181B] font-medium">Service providers</span>{" "}
            — vendors who host infrastructure, provide analytics, or supply
            the AI models that power the Service, under confidentiality and
            data-protection obligations;
          </li>
          <li>
            <span className="text-[#18181B] font-medium">The Customer</span>{" "}
            — system configuration and business data you provide is used to
            deliver the engagement you&apos;ve contracted us for;
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Legal and safety</span>{" "}
            — when required to comply with law, enforce our agreements, or
            protect the rights, property, or safety of anymus, our users, or
            others; and
          </li>
          <li>
            <span className="text-[#18181B] font-medium">Business transfers</span>{" "}
            — in connection with a merger, acquisition, or sale of assets,
            subject to this Privacy Policy.
          </li>
        </ul>
        <p>We do not sell personal information.</p>
      </LegalSection>

      <LegalSection heading="7. Data retention">
        <p>
          We retain information for as long as needed to provide the
          Service, comply with our legal obligations, resolve disputes, and
          enforce our agreements. Customers can request deletion of their
          Customer Content, subject to any legal retention requirements.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your rights and choices">
        <p>
          Depending on your location, you may have the right to access,
          correct, export, or delete your personal information, or to object
          to or restrict certain processing. To exercise these rights,
          contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection heading="9. Data security">
        <p>
          We use administrative, technical, and physical safeguards designed
          to protect information against unauthorized access, loss, or
          misuse. No method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="10. International data transfers">
        <p>
          We may process and store information in countries other than your
          own. Where required, we rely on appropriate safeguards, such as
          standard contractual clauses, to protect information transferred
          internationally.
        </p>
      </LegalSection>

      <LegalSection heading="11. Children's privacy">
        <p>
          The Service is not directed to children under 16, and we do not
          knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us so we can take appropriate action.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will update the &quot;Last updated&quot; date above
          and, where appropriate, provide additional notice.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact us">
        <p>
          If you have questions about this Privacy Policy or how we handle
          your information, please contact us through the contact options
          listed on our website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
