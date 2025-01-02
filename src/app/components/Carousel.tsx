import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Title Section */}
          <div className="mb-12 mt-6 w-full flex justify-center items-center">
            <h1 className="text-4xl font-extrabold text-black">
              Discover Your Perfect Drink
            </h1>
          </div>

          {/* Carousel Section */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* First Column of Images */}
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 relative">
                <Link href="/product/1">
                  <Image
                    alt="Coffee Drink"
                    className="w-full object-cover h-full object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/c2.jpg"
                    width={450}
                    height={200}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <Link href="/product/2">
                  <Image
                    alt="Tea Drink"
                    className="w-full object-cover h-full object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/tea1.jpg"
                    width={501}
                    height={301}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-full relative">
                <Link href="/product/3">
                  <Image
                    alt="Cold Drink"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/j1.jpg"
                    width={550}
                    height={302}
                  />
                </Link>
              </div>
            </div>
            {/* Second Column of Images */}
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full relative">
                <Link href="/product/4">
                  <Image
                    alt="Smoothie"
                    className="w-full h-30 object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/c6.jpg"
                    width={550}
                    height={302}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <Link href="/product/5">
                  <Image
                    alt="Juice"
                    className="w-full object-cover h-full object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/j2.jpg"
                    width={502}
                    height={302}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <Link href="/product/6">
                  <Image
                    alt="Water"
                    className="w-full object-cover h-full object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                    src="/assets/j3.jpg"
                    width={503}
                    height={303}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
