"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "mohithingorani2003@gmail.com";

export type DiscoveryData = {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  industry: string;
  existingWebsite: string;
  googleBusinessProfile: string;
  leadSources: string;
  challenges: string;
  services: string[];
  preferredDate: string;
  notes: string;
};

export async function submitDiscovery(
  data: DiscoveryData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const servicesList =
      data.services.length > 0 ? data.services.join(", ") : "Not specified";

    await resend.emails.send({
      from: "Anymus <onboarding@resend.dev>",
      to: [TO],
      replyTo: data.email,
      subject: `Discovery — ${data.businessName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#18181b">
          <h2 style="margin-bottom:24px">New discovery entry</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 0;color:#71717a;width:160px;vertical-align:top;border-bottom:1px solid #e4e4e4">Business Name</td><td style="padding:8px 0;font-weight:500;border-bottom:1px solid #e4e4e4">${data.businessName}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Contact Person</td><td style="padding:8px 0;font-weight:500;border-bottom:1px solid #e4e4e4">${data.contactPerson}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Phone</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Email</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Industry</td><td style="padding:8px 0;font-weight:500;border-bottom:1px solid #e4e4e4">${data.industry}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Existing Website</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4">${data.existingWebsite}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Google Business Profile</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4">${data.googleBusinessProfile}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Main Lead Sources</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4;white-space:pre-wrap">${data.leadSources || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Current Challenges</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4;white-space:pre-wrap">${data.challenges || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Services Interested In</td><td style="padding:8px 0;font-weight:500;border-bottom:1px solid #e4e4e4">${servicesList}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top;border-bottom:1px solid #e4e4e4">Preferred Meeting Date</td><td style="padding:8px 0;border-bottom:1px solid #e4e4e4">${data.preferredDate || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;vertical-align:top">Notes</td><td style="padding:8px 0;white-space:pre-wrap">${data.notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Failed to send — please try again." };
  }
}
