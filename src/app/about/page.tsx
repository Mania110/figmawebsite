import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col px-4">
      {/* About Us Header */}
      <h1 className="font-bold text-4xl">About Us</h1>
      <p className="mt-8">
        At Mani's, we are passionate about transforming ideas into functional,
        <br />
        beautifully designed web solutions. Our goal is to deliver exceptional
        <br />
        user experiences that combine creativity with seamless functionality.
      </p>

      {/* Mission, Motivation, Vision, and Goal Section */}
      <div className="flex gap-10 mt-8">
        <div className="flex-1 flex flex-col">
          <div className="flex gap-10 mt-8">
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl text-orange-400">1</h1>
              <h2 className="font-bold">Mission</h2>
              <p>
                To create innovative furniture solutions <br /> that enhance
                comfort and style.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl text-orange-400">2</h1>
              <h2 className="font-bold">Motivation</h2>
              <p>
                Driven by a passion for design <br /> and improving living
                spaces.
              </p>
            </div>
          </div>

          <div className="flex gap-10 mt-8">
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl text-orange-400">3</h1>
              <h2 className="font-bold">Vision</h2>
              <p>
                To be a leading brand known for exceptional <br /> craftsmanship
                and timeless design.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl text-orange-400">4</h1>
              <h2 className="font-bold">Goal</h2>
              <p>
                To exceed customer expectations with quality furniture <br /> and
                a seamless shopping experience.
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="flex flex-col items-center mt-0 space-y-2"> {/* Removed space above and between images */}
          {/* Two images side by side */}
          <div className="flex space-x-2">
            <Image
              src="/image9.jpg"
              alt="Image 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/image10.jpg"
              alt="Image 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* One image vertically aligned below */}
          <Image
            src="/image11.jpg"
            alt="Image 3"
            width={300}
            height={400} // Adjust height for better alignment
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
