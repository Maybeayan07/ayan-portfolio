import { createClient } from "@supabase/supabase-js";

export default {
  async fetch(request: Request) {
    // Only allow POST
    if (request.method !== "POST") {
      return Response.json(
        {
          success: false,
          message: "Method not allowed",
        },
        { status: 405 }
      );
    }

    try {
      const body = await request.json();

      const name = String(body.name ?? "").trim();
      const email = String(body.email ?? "").trim();
      const message = String(body.message ?? "").trim();

      // Validation
      if (!name || !email || !message) {
        return Response.json(
          {
            success: false,
            message: "Name, email and message are required.",
          },
          { status: 400 }
        );
      }

      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

      if (!supabaseUrl || !supabaseSecretKey) {
        console.error("Missing Supabase environment variables.");

        return Response.json(
          {
            success: false,
            message: "Server configuration error.",
          },
          { status: 500 }
        );
      }

      const supabase = createClient(
        supabaseUrl,
        supabaseSecretKey
      );

      const { error } = await supabase
        .from("messages")
        .insert({
          name,
          email,
          message,
        });

      if (error) {
        console.error("Supabase error:", error);

        return Response.json(
          {
            success: false,
            message: "Failed to save your message.",
          },
          { status: 500 }
        );
      }

      return Response.json({
        success: true,
        message: "Message sent successfully.",
      });
    } catch (error) {
      console.error("Contact API error:", error);

      return Response.json(
        {
          success: false,
          message: "Something went wrong.",
        },
        { status: 500 }
      );
    }
  },
};