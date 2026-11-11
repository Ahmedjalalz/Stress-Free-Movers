export interface ContactEmailPayload {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  pickupPostcode: string;
  dropoffPostcode: string;
  moveDate?: string;
  notes?: string;
  formSource: string;
  submittedAt: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMoveDate(rawDate?: string): string {
  if (!rawDate) return "Flexible / Not specified";
  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) return escapeHtml(rawDate);
  return parsed.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function buildLeadNotificationHtml(payload: ContactEmailPayload): string {
  const fullName = escapeHtml(payload.fullName);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);
  const service = escapeHtml(payload.service);
  const pickup = escapeHtml(payload.pickupPostcode.toUpperCase());
  const dropoff = escapeHtml(payload.dropoffPostcode.toUpperCase());
  const moveDate = formatMoveDate(payload.moveDate);
  const formSource = escapeHtml(payload.formSource);
  const submittedAt = escapeHtml(payload.submittedAt);
  const notesHtml = payload.notes?.trim()
    ? escapeHtml(payload.notes.trim()).replace(/\r?\n/g, "<br />")
    : '<span style="color:#64748b;font-style:italic;">No additional notes provided.</span>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Moving Enquiry - Stress Free Move Limited</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#121F36;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f1ea;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(18,31,54,0.08);border:1px solid #e7e2d8;">
          <!-- Gold top bar -->
          <tr>
            <td style="height:5px;background-color:#C7A567;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background-color:#121F36;padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#C7A567;">
                      Stress Free Move Limited
                    </p>
                    <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:800;color:#ffffff;">
                      New Customer Moving Enquiry
                    </h1>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;background-color:rgba(199,165,103,0.18);border:1px solid #C7A567;color:#f5deb0;font-size:11px;font-weight:700;padding:6px 12px;border-radius:999px;white-space:nowrap;">
                      ${formSource}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service Highlight Banner -->
          <tr>
            <td style="padding:24px 32px 0 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fdfbf5;border:1px solid #eadfcd;border-left:4px solid #C7A567;border-radius:10px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#8c6f3b;">
                      Requested Service
                    </p>
                    <p style="margin:0;font-size:18px;font-weight:800;color:#121F36;">
                      ${service}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Route & Move Date -->
          <tr>
            <td style="padding:20px 32px 0 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;border-spacing:0;">
                <tr>
                  <td width="33%" valign="top" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:10px 0 0 10px;padding:14px 16px;">
                    <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Pick Up
                    </p>
                    <p style="margin:0;font-size:16px;font-weight:800;color:#121F36;">
                      ${pickup}
                    </p>
                  </td>
                  <td width="33%" valign="top" style="background-color:#f8fafc;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;padding:14px 16px;">
                    <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Drop Off
                    </p>
                    <p style="margin:0;font-size:16px;font-weight:800;color:#121F36;">
                      ${dropoff}
                    </p>
                  </td>
                  <td width="34%" valign="top" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:0 10px 10px 0;padding:14px 16px;">
                    <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Moving Date
                    </p>
                    <p style="margin:0;font-size:14px;font-weight:700;color:#121F36;">
                      ${moveDate}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Contact Details -->
          <tr>
            <td style="padding:24px 32px 0 32px;">
              <h2 style="margin:0 0 12px 0;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.8px;color:#475569;">
                Customer Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
                <tr>
                  <td width="34%" style="padding:12px 16px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:700;color:#475569;">
                    Full Name
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#121F36;">
                    ${fullName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:700;color:#475569;">
                    Email Address
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;">
                    <a href="mailto:${email}" style="color:#0f4c81;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;font-size:13px;font-weight:700;color:#475569;">
                    Phone Number
                  </td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:600;">
                    <a href="tel:${phone}" style="color:#0f4c81;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Additional Notes -->
          <tr>
            <td style="padding:24px 32px 0 32px;">
              <h2 style="margin:0 0 10px 0;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.8px;color:#475569;">
                Additional Notes &amp; Inventory
              </h2>
              <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;font-size:14px;line-height:1.6;color:#1e293b;">
                ${notesHtml}
              </div>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding:24px 32px 28px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="mailto:${email}?subject=${encodeURIComponent(`Your Moving Quote - ${payload.service} (${payload.pickupPostcode.toUpperCase()} to ${payload.dropoffPostcode.toUpperCase()})`)}" style="display:inline-block;background-color:#121F36;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:11px 20px;border-radius:8px;">
                      Reply to ${fullName}
                    </a>
                  </td>
                  <td>
                    <a href="tel:${phone}" style="display:inline-block;background-color:#C7A567;color:#121F36;font-size:13px;font-weight:700;text-decoration:none;padding:11px 20px;border-radius:8px;">
                      Call Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;font-size:12px;color:#64748b;">
              <p style="margin:0;">
                Submitted via <strong>stressfreemoveltd.co.uk</strong> (${formSource}) on ${submittedAt}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildLeadNotificationText(payload: ContactEmailPayload): string {
  return [
    "NEW CUSTOMER MOVING ENQUIRY - STRESS FREE MOVE LIMITED",
    `Source: ${payload.formSource}`,
    `Submitted: ${payload.submittedAt}`,
    "",
    `Service: ${payload.service}`,
    `Pick Up Postcode: ${payload.pickupPostcode.toUpperCase()}`,
    `Drop Off Postcode: ${payload.dropoffPostcode.toUpperCase()}`,
    `Moving Date: ${payload.moveDate || "Flexible / Not specified"}`,
    "",
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    "Additional Notes:",
    payload.notes?.trim() || "No additional notes provided.",
  ].join("\n");
}

export function buildCustomerConfirmationHtml(payload: ContactEmailPayload): string {
  const fullName = escapeHtml(payload.fullName);
  const service = escapeHtml(payload.service);
  const pickup = escapeHtml(payload.pickupPostcode.toUpperCase());
  const dropoff = escapeHtml(payload.dropoffPostcode.toUpperCase());
  const moveDate = formatMoveDate(payload.moveDate);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've Received Your Moving Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#121F36;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f1ea;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(18,31,54,0.08);border:1px solid #e7e2d8;">
          <tr>
            <td style="height:5px;background-color:#C7A567;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background-color:#121F36;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#C7A567;">
                Stress Free Move Limited
              </p>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">
                Thank You, ${fullName}!
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;font-size:15px;line-height:1.65;color:#334155;">
              <p style="margin:0 0 16px 0;">
                We have received your quote request for <strong>${service}</strong> (${pickup} &rarr; ${dropoff}, Moving Date: <strong>${moveDate}</strong>).
              </p>
              <p style="margin:0 0 16px 0;">
                A dedicated moving advisor from Stress Free Move Limited is reviewing your details and will get back to you promptly with a clear, transparent quote.
              </p>
              <p style="margin:0;">
                Need immediate assistance? Call us on <a href="tel:+442088584684" style="color:#121F36;font-weight:700;text-decoration:none;">020 8858 4684</a> or reply directly to this email.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center;font-size:12px;color:#64748b;">
              Stress Free Move Limited &bull; Contact@stressfreemoveltd.co.uk &bull; 020 8858 4684
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
