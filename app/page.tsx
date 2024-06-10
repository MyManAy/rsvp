import Image from "next/image";
import { redirect } from "next/navigation";
import { supabase } from "@/supabase/adminSupabase";
import { Resend } from "resend";
import ConfirmationDetails from "@/emails/confirmation-details";

const resend = new Resend(process.env.RESEND_API_KEY);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 p-4 bg-white shadow-md rounded-lg">
            <div className="relative flex place-items-center font-extrabold text-2xl lg:text-4xl ">
              You're Invited!
            </div>
            <div className="relative flex place-items-center lg:p-8 md:p-4">
              <Image
                src="/Black-And-Grey-Classic-Photo-Graduation-Announcement.png"
                alt="Grad Party Photo"
                width={500}
                height={24}
                className="rounded-lg max"
                priority
              />
            </div>
          </div>
          <div className="col-span-2 p-4 bg-white shadow-md rounded-lg">
            <div className="relative flex place-items-center font-extrabold pb-8 text-2xl lg:text-4xl">
              RSVP Form
            </div>
            <div className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-lg">
              <form
                action={async (formData) => {
                  "use server";
                  const { error } = await supabase.from("attendants").insert({
                    party_name: formData.get("name") as string,
                    comment: formData.get("comment") as string,
                    num_adults: formData.get("adults"),
                    num_children: formData.get("children"),
                    email: (formData.get("email") as string).toLowerCase(),
                  });

                  if (!error) {
                    await resend.emails.send({
                      from: "nithin.monni@lumedebate.com",
                      to: formData.get("email") as string,
                      subject: `${formData.get(
                        "name"
                      )}, Nithin Monni got your RSVP`,
                      react: (
                        <ConfirmationDetails
                          recipient={formData.get("name") as string}
                        />
                      ),
                    });
                    redirect("/success");
                  }
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Full Name or Family Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="i.e. John Smith or Smith family"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Number of Adults (Age 13+) Attending
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="adults"
                    required
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Number of Children (Age 5-12) Attending
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="children"
                    required
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="email"
                    required
                    placeholder="John.Smith@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Optional Text
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="comment"
                    placeholder="Any other info you'd like us to know"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
