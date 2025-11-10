import { NextResponse } from "next/server";
import { getCalendarClient } from "@/lib/google";

export async function POST(req: Request) {
  const { name, email, start, end, service, message, timeZone } =
    await req.json();

  if (!name || !email || !start || !end || !timeZone) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const calendar = await getCalendarClient();

    const event = {
      summary: `Meeting with ${name} — ${service || "Consultation"}`,
      description: message || "Client meeting booked from website.",
      start: { dateTime: start, timeZone },
      end: { dateTime: end, timeZone },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}-${email}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [{ method: "email", minutes: 30 }],
      },
    };

    const { data } = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: "all",
    });

    return NextResponse.json({ success: true, data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
