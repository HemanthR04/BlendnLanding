// Vercel Serverless Function to capture waitlist submissions
// Stores submissions in Supabase and optionally forwards to a webhook.
// Required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// Optional env var: WAITLIST_WEBHOOK_URL

import { createClient } from "@supabase/supabase-js";

const ALLOWED_ORIGINS = ["*"]; // Consider restricting to your domain in production

function setCorsHeaders(res: any) {
  const allowOrigin = ALLOWED_ORIGINS[0] || "*";
  res.setHeader("Access-Control-Allow-Origin", allowOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: any, res: any) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, phone } = req.body || {};

    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const payload = {
      source: "blendn-landing",
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      phone,
      userAgent: req.headers["user-agent"] || "",
      ip: (Array.isArray(req.headers["x-forwarded-for"]) ? req.headers["x-forwarded-for"][0] : req.headers["x-forwarded-for"]) || req.socket?.remoteAddress || "",
    } as const;

    // Insert into Supabase using service role (bypasses RLS)
    const supabaseUrl = process.env.SUPABASE_URL as string;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: "Server not configured" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: insertError } = await supabase
      .from("waitlist_signups")
      .insert({
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        source: payload.source,
        user_agent: payload.userAgent,
        ip: payload.ip,
      });

    if (insertError) {
      // 23505 unique_violation (email already exists)
      if ((insertError as any)?.code === "23505") {
        return res.status(200).json({ success: true });
      }
      return res.status(500).json({ error: "Failed to save" });
    }

    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Do not fail the submission if the downstream webhook errors
        // This keeps the UX smooth; you can inspect logs on Vercel
        // console.error("Forwarding to webhook failed", err);
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


