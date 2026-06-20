import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

// POST /api/bookings — creates the initial row right after the details form
export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "name and email are required" },
        { status: 400 }
      );
    }

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars");
      return NextResponse.json(
        { error: "Server misconfigured (missing Supabase env vars)" },
        { status: 500 }
      );
    }

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("bookings")
      .insert({ name, email, status: "pending_schedule" })
      .select("id")
      .single();

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (err) {
    console.error("Unhandled error in POST /api/bookings:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}