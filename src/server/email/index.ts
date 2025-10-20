import { EmailClient } from "./client";

export const Email = new EmailClient({
  token: process.env.RESEND_TOKEN!,
});
