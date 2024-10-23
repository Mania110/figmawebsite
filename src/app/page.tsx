"use client";

import React, { useState } from 'react'; 
import About from './about/page'; // Adjust the import paths as necessary
import Testimonial from './test/page'; // Adjust the import paths as necessary
import Product from './products/page'; // Adjust the import paths as necessary
import Contact from './contact/page'; // Adjust the import paths as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="mt-10 mx-10">
      {/* Hero Section */}
      <section className="bg-950 flex gap-6 items-center">
        <div className="flex-1">
          <h1 className="text-7xl font-bold text-center">
            Amazing furniture for
            <br />
            your home
          </h1>
          <br />
          <p className="text-3xl text-center">
            Transform your living space with our premium furniture collection,
            designed to blend style with comfort. Discover pieces that elevate
            your home, creating a perfect balance of elegance and functionality.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="my-6 flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500 pl-10"
          />
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="absolute left-3 top-3 text-gray-400" 
          />
        </div>
      </section>

      <br />

      {/* Background Image Section */}
      <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/image12.jpg')" }}>
        {/* Overlay content (optional) */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Add any content here if needed */}
        </div>
      </div>

      <br />

      {/* About Us Section */}
      <About />

      <br />

      {/* Testimonial Section */}
      <Testimonial />

      <br />

      {/* Product Section */}
      <Product />

      <br />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
