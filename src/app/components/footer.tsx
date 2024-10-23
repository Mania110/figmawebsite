import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 p-10">
      <div className="container mx-auto">
        {/* Quick Links Section */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mt-7 md:mt-0">
            <h2 className="text-lg font-semibold">Mani's</h2>
            <p className="mt-2">
              Address<br />
              Washington<br />
              Manchester,<br />
              Kentucky<br />
              39485
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="hover:underline transition duration-300 ease-in-out">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition duration-300 ease-in-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/buy" className="hover:underline transition duration-300 ease-in-out">
                  Buy Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Policy</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline transition duration-300 ease-in-out">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline transition duration-300 ease-in-out">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Social</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/instagram" className="hover:underline transition duration-300 ease-in-out">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="hover:underline transition duration-300 ease-in-out">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/linkedin" className="hover:underline transition duration-300 ease-in-out">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 Mani's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
