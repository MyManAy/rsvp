import { Resend } from "resend";
import "dotenv/config";
import { supabase } from "./supabase/adminSupabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const run = async () => {
  const { data: supabaseEmails } = await supabase
    .from("attendants")
    .select("email");
  const audienceEmails = (
    await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE!,
    })
  ).data?.data;

  for (const contact of audienceEmails ?? []) {
    // if there is an email in the audience which is NOT part of the database, remove it
    if (!supabaseEmails!.some((item) => contact.email == item.email)) {
      await resend.contacts.remove({
        id: contact.id,
        audienceId: process.env.RESEND_AUDIENCE!,
      });
    }
  }

  for (const row of supabaseEmails ?? []) {
    // if there is an email in the database which is NOT part of the audience, add it
    if (!audienceEmails!.some((item) => row.email == item.email)) {
      await resend.contacts.create({
        email: row.email,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE!,
      });
    }
  }
};

run();
