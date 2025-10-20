import { type CreateEmailOptions, Resend } from "resend";

interface EmailClientOptions {
  token: string;
}

export class EmailClient {
  private client: Resend;

  constructor({ token }: EmailClientOptions) {
    this.client = new Resend(token);
  }

  public async send(payload: CreateEmailOptions) {
    try {
      await this.client.emails.send(payload);
    } catch (error) {
      console.log({ error });
    }
  }
}
