import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON body.",
        });
      }
    }

    const { name, email, message } = body ?? {};

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "").trim();
    const cleanMessage = String(message ?? "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error("Missing Supabase environment variables.");
      return res.status(500).json({
        success: false,
        message: "Server configuration error.",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey);

    const { error } = await supabase.from("messages").insert({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to save your message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}