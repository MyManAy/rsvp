import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(
  resend.contacts.list({
    audienceId: process.env.RESEND_AUDIENCE!,
  })
);
