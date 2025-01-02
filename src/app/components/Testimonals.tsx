import Image from "next/image";
import React from "react";

export default function Testimonals() {
  return (
    <div>
      <section className="text-gray-600 body-font mt-10">
        <div className="container px-5 py-24 mx-auto">
          {/* Heading for Testimonials */}
          <div className="text-center mb-12">
            <h1 className="text-black font-bold text-4xl">Testimonials</h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/t1.jpg"
                  width={320}
                  height={320}
                />
                <p className="leading-relaxed text-gray-900">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-slate-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/t1.jpg"
                  width={320}
                  height={320}
                />
                <p className="leading-relaxed text-gray-900">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-slate-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/t1.jpg"
                  width={320}
                  height={320}
                />
                <p className="leading-relaxed text-gray-900">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-slate-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
