import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY env var");
      return NextResponse.json(
        { error: "Server misconfigured (missing Resend API key)" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      // Until you verify your own domain in Resend, you must send "from"
      // their shared test domain — replace with e.g. "Prota Consulting
      // <hello@protaconsulting.com>" once your domain is verified.
      from: "Prota Consulting <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO || "hello@protaconsulting.com",
      replyTo: email,
      subject: `New message from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unhandled error in POST /api/contact:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}