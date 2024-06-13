import { Resend } from "resend";

const resend = new Resend(process.env.TEST);

resend.contacts.list({
  audienceId: "test",
});
