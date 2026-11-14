import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildLeadNotificationHtml,
  buildLeadNotificationText,
  buildCustomerConfirmationHtml,
  ContactEmailPayload,
} from "@/lib/email-template";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Periodic cleanup to prevent unbounded memory growth
  if (ipRequestLog.size > 1000) {
    for (const [key, timestamps] of Array.from(ipRequestLog.entries())) {
      const recent = timestamps.filter((ts) => ts > windowStart);
      if (recent.length === 0) {
        ipRequestLog.delete(key);
      } else {
        ipRequestLog.set(key, recent);
      }
    }
  }

  const timestamps = (ipRequestLog.get(ip) || []).filter((ts) => ts > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipRequestLog.set(ip, timestamps);
  return false;
}

function sanitizeSingleLine(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/[\r\n\t\x00-\x1f\x7f]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function sanitizeMultiLine(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]+/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes or call us on 020 8858 4684." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error("[Contact API] Missing RESEND_API_KEY configuration.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please call us on 020 8858 4684." },
        { status: 500 }
      );
    }

    let body: Record<string, unknown>;
    try {
      const parsed = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
      }
      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    // Honeypot check: bots filling hidden field get a silent 200 without sending mail
    if (body.website && String(body.website).trim() !== "") {
      return NextResponse.json({ success: true, id: null }, { status: 200 });
    }

    const fullName = sanitizeSingleLine(body.fullName, 120);
    const email = sanitizeSingleLine(body.email, 254);
    const phone = sanitizeSingleLine(body.phone, 30);
    const service = sanitizeSingleLine(body.service || "House Removals", 100) || "House Removals";
    const pickupPostcode = sanitizeSingleLine(body.pickupPostcode, 20);
    const dropoffPostcode = sanitizeSingleLine(body.dropoffPostcode, 20);
    const moveDate = sanitizeSingleLine(body.moveDate, 30);
    const notes = sanitizeMultiLine(body.notes, 3000);
    const formSource = sanitizeSingleLine(body.formSource || "Website Enquiry", 80) || "Website Enquiry";

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
        { error: "Unable to send your enquiry right now. Please try again or call 020 8858 4684." },
        { status: 502 }
      );
    }

    // Best-effort confirmation email to customer (non-blocking if sender domain is unverified in sandbox)
    try {
      await resend.emails.send({
        from: `Stress Free Move Limited <${fromAddress}>`,
        to: [email],
        replyTo: toAddress,
        subject: "We've received your moving quote request - Stress Free Move Limited",
        html: buildCustomerConfirmationHtml(payload),
      });
    } catch (confirmErr) {
      console.warn("[Contact API] Customer confirmation email skipped:", confirmErr);
    }

    return NextResponse.json(
      { success: true, id: data?.id || null },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong while submitting your request. Please try again." },
      { status: 500 }
    );
  }
}
