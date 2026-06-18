import type { Metadata } from "next";
import ClientPortalApp from "./ClientPortalApp";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Track project status, documents, invoices, and deliverables.",
  alternates: { canonical: "/client-portal" },
  robots: { index: false, follow: false },
};

export default function ClientPortalPage() {
  return <ClientPortalApp />;
}
