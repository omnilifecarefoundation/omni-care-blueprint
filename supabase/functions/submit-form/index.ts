// Edge function: receives form submissions and enqueues notification emails.
// Uses service role internally; exposes wide-open CORS so it works from any host.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE_NAME = "Omni Life Care Foundation";
const SENDER_DOMAIN = "notify.omnilifecare.org";
const FROM_DOMAIN = "notify.omnilifecare.org";
const RECIPIENTS = ["info@omnilifecare.org", "amal.a@omnihealthservices.in"];

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(opts: {
  formName: string;
  submittedAt: string;
  replyTo?: string;
  pageUrl?: string;
  fields: { label: string; value: string }[];
}) {
  const rows = opts.fields
    .map(
      (f) => `
        <tr>
          <td style="padding:12px 0 4px 0;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#6B7280;font-family:Arial,sans-serif;">${escapeHtml(f.label)}</td>
        </tr>
        <tr>
          <td style="padding:0 0 12px 0;font-size:15px;line-height:1.5;color:#0F1117;font-family:Arial,sans-serif;white-space:pre-wrap;">${escapeHtml(f.value || "—")}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="margin:0;background:#fff;font-family:Arial,sans-serif;color:#0F1117;">
    <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
      <p style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#6B7280;margin:0 0 12px 0;">${SITE_NAME}</p>
      <h1 style="font-size:22px;line-height:1.25;font-weight:600;margin:0 0 6px 0;">New ${escapeHtml(opts.formName)} submission</h1>
      <p style="font-size:14px;color:#6B7280;margin:0;">Received ${escapeHtml(opts.submittedAt)}</p>
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0;" />
      <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
      ${opts.pageUrl ? `<hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0;" /><p style="font-size:13px;color:#6B7280;margin:0;">Submitted from: ${escapeHtml(opts.pageUrl)}</p>` : ""}
      ${opts.replyTo ? `<p style="font-size:13px;color:#6B7280;margin:8px 0 0 0;">Reply directly: <strong>${escapeHtml(opts.replyTo)}</strong></p>` : ""}
    </div>
  </body></html>`;
}

function buildText(opts: {
  formName: string;
  submittedAt: string;
  replyTo?: string;
  pageUrl?: string;
  fields: { label: string; value: string }[];
}) {
  const lines = [
    `${SITE_NAME}`,
    `New ${opts.formName} submission`,
    `Received ${opts.submittedAt}`,
    "",
    ...opts.fields.flatMap((f) => [`${f.label.toUpperCase()}:`, f.value || "-", ""]),
  ];
  if (opts.pageUrl) lines.push(`Submitted from: ${opts.pageUrl}`);
  if (opts.replyTo) lines.push(`Reply to: ${opts.replyTo}`);
  return lines.join("\n");
}

function generateToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // Honeypot
  if (typeof body?.website === "string" && body.website.length > 0) {
    return json({ success: true });
  }

  const formName = typeof body?.formName === "string" ? body.formName.trim() : "";
  const fields = Array.isArray(body?.fields)
    ? body.fields
        .filter((f: any) => f && typeof f.label === "string" && typeof f.value === "string")
        .map((f: any) => ({ label: f.label.trim().slice(0, 80), value: f.value.trim().slice(0, 5000) }))
    : [];
  const replyTo = typeof body?.replyTo === "string" && body.replyTo.includes("@") ? body.replyTo.trim() : undefined;
  const pageUrl = typeof body?.pageUrl === "string" ? body.pageUrl.slice(0, 500) : undefined;

  if (!formName || fields.length === 0) return json({ error: "Invalid submission" }, 400);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) return json({ error: "Server not configured" }, 500);

  const supabase = createClient(supabaseUrl, serviceKey);
  const submittedAt = new Date().toUTCString();
  const html = buildHtml({ formName, submittedAt, replyTo, pageUrl, fields });
  const text = buildText({ formName, submittedAt, replyTo, pageUrl, fields });
  const subject = `[Omni Life Care] New ${formName} submission${replyTo ? ` - ${replyTo}` : ""}`;

  let anyFailed = false;
  for (const recipient of RECIPIENTS) {
    const normalizedEmail = recipient.toLowerCase();
    const messageId = crypto.randomUUID();

    // Ensure unsubscribe token
    let unsubscribeToken: string | undefined;
    const { data: existing } = await supabase
      .from("email_unsubscribe_tokens")
      .select("token, used_at")
      .eq("email", normalizedEmail)
      .maybeSingle();
    if (existing?.token && !existing.used_at) {
      unsubscribeToken = existing.token;
    } else if (!existing) {
      unsubscribeToken = generateToken();
      await supabase
        .from("email_unsubscribe_tokens")
        .upsert({ token: unsubscribeToken, email: normalizedEmail }, { onConflict: "email", ignoreDuplicates: true });
    }

    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: "form-notification",
      recipient_email: recipient,
      status: "pending",
    });

    const { error: enqErr } = await supabase.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: recipient,
        from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject,
        html,
        text,
        purpose: "transactional",
        label: "form-notification",
        idempotency_key: messageId,
        unsubscribe_token: unsubscribeToken,
        reply_to: replyTo,
        queued_at: new Date().toISOString(),
      },
    });

    if (enqErr) {
      anyFailed = true;
      console.error("enqueue failed", enqErr);
      await supabase.from("email_send_log").insert({
        message_id: messageId,
        template_name: "form-notification",
        recipient_email: recipient,
        status: "failed",
        error_message: enqErr.message ?? "Failed to enqueue",
      });
    }
  }

  if (anyFailed) return json({ error: "Failed to send" }, 500);
  return json({ success: true });
});
