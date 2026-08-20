import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "gamingboyneilyt@gmail.com";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

const topicLabels: Record<string, string> = {
  sponsorship: "Sponsorship / Partnership",
  press: "Press / Speaking",
  student: "Join the Team",
  other: "Other",
};

function createEmailHTML(formData: {
  name: string;
  email: string;
  affiliation: string;
  topic: string;
  message: string;
}) {

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f6f6f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(90deg, #FF7518 0%, #FFAD42 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
                New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                From Illinois Solar Decathlon Website
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <!-- Name -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #111111; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Name</strong>
                    <span style="color: #444444; font-size: 15px;">${escapeHtml(formData.name)}</span>
                  </td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #111111; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Email</strong>
                    <a href="mailto:${escapeHtml(formData.email)}" style="color: #FF7518; font-size: 15px; text-decoration: none;">${escapeHtml(formData.email)}</a>
                  </td>
                </tr>
                
                <!-- Affiliation -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #111111; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Affiliation</strong>
                    <span style="color: #444444; font-size: 15px;">${escapeHtml(formData.affiliation)}</span>
                  </td>
                </tr>
                
                <!-- Topic -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #111111; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Topic</strong>
                    <span style="display: inline-block; background: linear-gradient(90deg, #FF7518 0%, #FFAD42 100%); color: #ffffff; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">
                      ${escapeHtml(topicLabels[formData.topic] || formData.topic)}
                    </span>
                  </td>
                </tr>
                
                <!-- Message -->
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #111111; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Message</strong>
                    <div style="color: #444444; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #FF7518;">
                      ${escapeHtml(formData.message)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This email was sent from the contact form on the Illinois Solar Decathlon website.
              </p>
              <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 12px;">
                You can reply directly to this email to respond to ${escapeHtml(formData.name)}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, affiliation, topic, message } = body;

    // Validation
    if (!name || !email || !affiliation || !topic || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: "Illinois Solar Decathlon Website <onboarding@resend.dev>", // Update this with your verified domain
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject: `New Contact Form: ${topicLabels[topic] || topic} - ${name}`,
      html: createEmailHTML({ name, email, affiliation, topic, message }),
      text: `
New Contact Form Submission
From Illinois Solar Decathlon Website

Name: ${name}
Email: ${email}
Affiliation: ${affiliation}
Topic: ${topicLabels[topic] || topic}

Message:
${message}

---
You can reply directly to this email to respond to ${name}.
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
