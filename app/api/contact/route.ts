import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildLeadNotificationHtml,
  buildLeadNotificationText,
  buildCustomerConfirmationHtml,
  ContactEmailPayload,
} from "@/lib/email-template";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured (missing RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "House Removals").trim();
    const pickupPostcode = String(body.pickupPostcode || "").trim();
    const dropoffPostcode = String(body.dropoffPostcode || "").trim();
    const moveDate = body.moveDate ? String(body.moveDate).trim() : "";
    const notes = body.notes ? String(body.notes).trim() : "";
    const formSource = String(body.formSource || "Website Enquiry").trim();

    if (!fullName || !email || !phone || !pickupPostcode || !dropoffPostcode) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL?.trim() || "Contact@stressfreemoveltd.co.uk";
    const toAddress =
      process.env.RESEND_TO_EMAIL?.trim() ||
      process.env.CONTACT_RECEIVER_EMAIL?.trim() ||
      "Contact@stressfreemoveltd.co.uk";

    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/London",
    });

    const payload: ContactEmailPayload = {
      fullName,
      email,
      phone,
      service,
      pickupPostcode,
      dropoffPostcode,
      moveDate,
      notes,
      formSource,
      submittedAt,
    };

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Stress Free Move Limited <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `New ${service} Enquiry from ${fullName} (${pickupPostcode.toUpperCase()} → ${dropoffPostcode.toUpperCase()})`,
      html: buildLeadNotificationHtml(payload),
      text: buildLeadNotificationText(payload),
    });

    if (error) {
      console.error("[Contact API] Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 502 }
      );
    }

    // Best-effort confirmation email to customer (non-blocking if sender domain is unverified in sandbox)
    try {
      await resend.emails.send({
        from: `Stress Free Move Limited <${fromAddress}>`,
        to: [email],
        replyTo: toAddress,
        subject: `We've received your moving quote request - Stress Free Move Limited`,
        html: buildCustomerConfirmationHtml(payload),
      });
    } catch (confirmErr) {
      console.warn("[Contact API] Customer confirmation email skipped:", confirmErr);
    }

    return NextResponse.json(
      { success: true, id: data?.id || null },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong while submitting your request. Please try again." },
      { status: 500 }
    );
  }
}
