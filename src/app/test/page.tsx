import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div className=" text-center py-2 bg-[#00293d] text-white">
      <h1 className="text-4xl font-bold mb-8">What do customers say...</h1>
      <div className="flex items-left  ">
        {/* Image */}
        <div className="relative w-1/2">
          <Image
            src="/image13.jpg"
            alt="Image 7"
            width={1000}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-2xl text-white">
            Our customers consistently praise the exceptional quality of our
            products and the outstanding level of service they receive. From
            seamless online shopping experiences to timely deliveries, customers
            have shared their appreciation for the reliability and authenticity that
            we provide. Whether it’s the attention to detail in our products or the
            personalized support from our team, they feel valued and confident with
            every purchase. Customer reviews help us continually improve and assure
            new shoppers that they are in good hands. Trust and satisfaction are at
            the heart of everything we do.
          </p>
        </div>
      </div>
      
    </div>
  );
}
