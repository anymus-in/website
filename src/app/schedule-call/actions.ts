"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "mohithingorani2003@gmail.com";

export async function submitDiscoveryCall(data: {
  name: string;
  email: string;
  company: string;
  product: string;
  description: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    await resend.emails.send({
      from: "anymus <onboarding@resend.dev>",
      to: [TO],
      replyTo: data.email,
      subject: `Discovery call — ${data.company || data.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#18181b">
          <h2 style="margin-bottom:24px">New discovery call request</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 0;color:#71717a;width:140px">Name</td><td style="padding:8px 0;font-weight:500">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Company</td><td style="padding:8px 0;font-weight:500">${data.company}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Interested in</td><td style="padding:8px 0">${data.product}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e4e4e4;margin:20px 0"/>
          <p style="color:#71717a;margin:0 0 8px">What they need</p>
          <p style="margin:0;white-space:pre-wrap">${data.description}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Failed to send — please try again." };
  }
}
