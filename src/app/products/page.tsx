import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Products() {
  return (
    <div className="p-8">
      <h1 className="text-zinc-900 font-bold text-center text-4xl mb-8">
        Products
      </h1>
      
      {/* Navigation links */}
      <nav>
        <ul className="flex space-x-8 justify-center">
          <li><Link className="hover:text-blue-700 text-zinc-900 text-2xl font-semibold" href="/">All</Link></li>
          <li><Link className="hover:text-blue-700 text-zinc-900 text-2xl font-semibold" href="/">Chair</Link></li>
          <li><Link className="hover:text-blue-700 text-zinc-900 text-2xl font-semibold" href="/">Table</Link></li>
          <li><Link className="hover:text-blue-700 text-zinc-900 text-2xl font-semibold" href="/">Sofa</Link></li>
          <li><Link className="hover:text-blue-700 text-zinc-900 text-2xl font-semibold" href="/">Lamp</Link></li>
        </ul>
      </nav>
      
      <br />
      
      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="text-center p-4">
          <Image
            src="/image2.jpg"
            alt="Stool"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Stool $100
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Product 2 */}
        <div className="text-center p-4">
          <Image
            src="/image1.jpg"
            alt="Tea table"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Dark Sofa $150
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Product 3 */}
        <div className="text-center p-4">
          <Image
            src="/image3.jpg"
            alt="Sofa - Light"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Round Table $500
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Product 4 */}
        <div className="text-center p-4">
          <Image
            src="/image4.jpg"
            alt="Sofa - Dark"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Bedside Table $600
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {/* Product 5 */}
        <div className="text-center p-4">
          <Image
            src="/image6.jpg"
            alt="Table Lamp"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Lamp $50
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Product 6 */}
        <div className="text-center p-4">
          <Image
            src="/image7.jpg"
            alt="Chair"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Wood Chair $200
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Product 7 */}
        <div className="text-center p-4">
          <Image
            src="/image8.jpg"
            alt="Bedside table"
            width={200}
            height={200}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Light Sofa $150
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>

        {/* Additional Product */}
        <div className="text-center p-4">
          <Image
            src="/image14.jpg"
            alt="Chair"
            width={400}
            height={300}
            className="object-cover shadow-lg rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold flex items-center justify-center">
            Chair $150
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-orange-500" />
          </p>
        </div>
      </div>
    </div>
  );
}
