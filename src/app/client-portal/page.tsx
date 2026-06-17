import type { Metadata } from "next";
import ClientPortalApp from "./ClientPortalApp";

export const metadata: Metadata = {
  title: "Client Portal — anymus",
  description: "Track project status, documents, invoices, and deliverables.",
};

export default function ClientPortalPage() {
  return <ClientPortalApp />;
}
