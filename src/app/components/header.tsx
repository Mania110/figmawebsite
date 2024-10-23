import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold font-sans text-zinc-900">Mani's</h2>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link className="hover:text-blue-700 text-zinc-900" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 text-zinc-900" href="/about">About Us</Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 text-zinc-900" href="/products">Products</Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 text-zinc-900" href="/test">testimonial</Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
