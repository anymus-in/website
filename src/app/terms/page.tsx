import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use — anymus",
  description: "The terms governing your use of the anymus website and platform.",
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" updated="June 17, 2026">
      <LegalSection heading="1. Acceptance of terms">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of the
          website, software, and services provided by anymus (&quot;anymus,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website, creating an
          account, or otherwise using our services (collectively, the
          &quot;Service&quot;), you agree to be bound by these Terms. If you are
          using the Service on behalf of a company or other legal entity, you
          represent that you have the authority to bind that entity to these
          Terms.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of the service">
        <p>
          anymus provides implementation and consulting services for
          growing businesses, delivered individually or together: (a)
          implementation and configuration of enterprise resource planning
          (ERP) systems; (b) implementation and configuration of customer
          relationship management (CRM) systems; (c) design and deployment
          of automation and workflows that connect those systems and
          reduce manual operational work; and (d) integration of
          AI-powered features, such as reporting and forecasting, on top
          of a Customer&apos;s systems and data. anymus is a software and
          services provider and does not provide legal, financial, or
          other licensed advisory services. Any system configurations,
          workflows, or recommendations generated through anymus services
          are based on the configuration and data provided by the customer
          using the Service (&quot;Customer&quot;).
        </p>
      </LegalSection>

      <LegalSection heading="3. Accounts and eligibility">
        <p>
          You must be at least 18 years old and able to form a binding
          contract to use the Service. You are responsible for maintaining
          the confidentiality of your account credentials and for all
          activity that occurs under your account. Notify us immediately if
          you suspect unauthorized use of your account.
        </p>
      </LegalSection>

      <LegalSection heading="4. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Use the Service to deceive, defraud, or mislead any person;
          </li>
          <li>
            Upload or configure content that is unlawful, infringing,
            defamatory, or that violates the rights of any third party;
          </li>
          <li>
            Attempt to reverse engineer, decompile, or otherwise extract the
            source code of the Service, except as permitted by law;
          </li>
          <li>
            Interfere with, disrupt, or impose an unreasonable load on our
            infrastructure, or attempt to gain unauthorized access to the
            Service or related systems; or
          </li>
          <li>
            Use the Service to develop a competing product or for any
            purpose not expressly permitted by these Terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Customer content and data">
        <p>
          Customers retain all rights to the product information, scripts,
          documents, and other materials they upload or configure within the
          Service (&quot;Customer Content&quot;). You grant anymus a worldwide,
          non-exclusive license to host, process, and use Customer Content
          solely to provide and improve the Service. You are responsible for
          ensuring that you have the necessary rights and consents to submit
          Customer Content.
        </p>
      </LegalSection>

      <LegalSection heading="6. AI-generated content">
        <p>
          Where the Service includes AI integrations, anymus uses
          artificial intelligence to generate reporting, forecasting, or
          other recommendations based on Customer data. While we work to
          make this output accurate and helpful, AI-generated content may
          occasionally be incomplete, outdated, or incorrect. This output
          is based on the configuration and data supplied by the Customer,
          and neither anymus nor the Customer guarantees its accuracy. You
          should independently verify any information that is material to
          a business decision.
        </p>
      </LegalSection>

      <LegalSection heading="7. Intellectual property">
        <p>
          The Service, including its software, design, and underlying
          technology, is owned by anymus and protected by intellectual
          property laws. Except for the limited rights expressly granted to
          you under these Terms, no rights or licenses are granted to you by
          implication or otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="8. Fees and payment">
        <p>
          If you purchase a paid plan, you agree to pay the fees described at
          the time of purchase or in your order form. Fees are non-refundable
          except as required by law or as expressly stated in a separate
          agreement with anymus. We may change our pricing on a going-forward
          basis with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection heading="9. Termination">
        <p>
          You may stop using the Service at any time. We may suspend or
          terminate your access to the Service if you breach these Terms or
          if we reasonably believe your use poses a risk to anymus, other
          users, or third parties. Upon termination, your right to use the
          Service will immediately cease.
        </p>
      </LegalSection>

      <LegalSection heading="10. Disclaimers and limitation of liability">
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available,&quot; without
          warranties of any kind, express or implied. To the maximum extent
          permitted by law, anymus will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for any
          loss of profits, revenue, or data, arising from your use of the
          Service.
        </p>
      </LegalSection>

      <LegalSection heading="11. Indemnification">
        <p>
          You agree to indemnify and hold anymus harmless from any claims,
          damages, or expenses arising from your use of the Service, your
          Customer Content, or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Governing law">
        <p>
          These Terms are governed by the laws applicable in our place of
          incorporation, without regard to conflict-of-law principles. Any
          disputes arising under these Terms will be resolved in the courts
          located in that jurisdiction, unless otherwise required by
          applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="13. Changes to these terms">
        <p>
          We may update these Terms from time to time. If we make material
          changes, we will provide notice, such as by updating the &quot;Last
          updated&quot; date above or by other reasonable means. Your continued
          use of the Service after changes take effect constitutes
          acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="14. Contact us">
        <p>
          If you have any questions about these Terms, please contact us
          through the contact options listed on our website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
