import { Email } from "@/server/email";
import {
  CompanyInquiryEmail,
  UserConfirmationEmail,
} from "@/server/email/inquiry";

export async function POST(req: Request) {
  try {
    const from = "onboarding@resend.dev";
    const { firstName, lastName, email, phone, service, message } =
      await req.json();
    const name = `${firstName} ${lastName}`;

    await Email.send({
      from,
      to: "praneeth8101@gmail.com",
      subject: `New ${service} Inquiry from ${name}`,
      react: CompanyInquiryEmail({
        name,
        email,
        phone,
        service,
        message,
      }),
    });

    await Email.send({
      from,
      to: email,
      subject: "We’ve received your inquiry",
      react: UserConfirmationEmail({
        name,
        service,
        message,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
