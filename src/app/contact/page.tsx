import Image from "next/image";
import Link from "next/link";
import React from "react"; // Ensure React is imported, especially for JSX

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-3xl">We would love to hear from you!</p>

          

          {/* Contact Form */}
          <div className="flex flex-col bg-white p-8 shadow-lg rounded-lg mt-8">
            
            <form action="#" method="POST">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
