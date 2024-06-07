"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 p-4 bg-white shadow-md rounded-lg">
            <div className="relative flex place-items-center text-4xl font-extrabold ">
              You're Invited!
            </div>
            <div className="relative flex place-items-center p-8">
              <Image
                src="/Black And Grey Classic Photo Graduation Announcement.png"
                alt="Vercel Logo"
                width={500}
                height={24}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="col-span-2 p-4 bg-white shadow-md rounded-lg">
            <div className="relative flex place-items-center text-4xl font-extrabold pb-8 ">
              RSVP Form
            </div>
            <div className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-lg">
              <form>
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
                    Number of Adults Attending
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Number of Children Attending
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
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
                    name="name"
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
                    name="name"
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
