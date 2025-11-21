import { NextResponse } from "next/server";
import { getCalendarClient } from "@/lib/google";
import { Email } from "@/server/email";
import { InternalAlertEmail } from "@/server/email/alert";

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
    if (e instanceof Error && e.message.includes("invalid_grant")) {
      // send internal alert
      await Email.send({
        from: "Techspire Hub <sam@techspiirehub.com>",
        to: "sam@techspiirehub.com",
        subject: `New ${service || ""} Inquiry from ${name}`,
        react: InternalAlertEmail({
          title: "System Warning",
          message: "Refresh token expired — please re-authorize.",
        }),
      });
    }
    console.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
