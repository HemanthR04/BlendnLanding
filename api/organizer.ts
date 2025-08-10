// Vercel Serverless Function to capture organizer leads
// Stores submissions in Supabase and optionally forwards to a webhook.
// Required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

import { createClient } from "@supabase/supabase-js";

const ALLOWED_ORIGINS = ["*"]; // Consider restricting in production

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
    const { name, organization, email, eventTypes, city } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const payload = {
      source: "blendn-organizer-landing",
      submittedAt: new Date().toISOString(),
      name,
      organization,
      email,
      eventTypes,
      city,
      userAgent: req.headers["user-agent"] || "",
      ip:
        (Array.isArray(req.headers["x-forwarded-for"]) ? req.headers["x-forwarded-for"][0] : req.headers["x-forwarded-for"]) ||
        req.socket?.remoteAddress ||
        "",
    } as const;

    const supabaseUrl = process.env.SUPABASE_URL as string;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

    if (!supabaseUrl || !supabaseServiceKey) {
      // Allow demo without backend configured
      return res.status(200).json({ success: true });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: insertError } = await supabase.from("organizer_leads").insert({
      name: payload.name,
      organization: payload.organization,
      email: payload.email,
      event_types: payload.eventTypes,
      city: payload.city,
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

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


