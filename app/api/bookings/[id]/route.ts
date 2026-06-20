import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";

// PATCH /api/bookings/:id — called when Calendly's postMessage event fires
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { status, calendlyEventUri, calendlyInviteeUri } = body;

  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("bookings")
    .update({
      status,
      calendly_event_uri: calendlyEventUri,
      calendly_invitee_uri: calendlyInviteeUri,
    })
    .eq("id", params.id);

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}