import React from "react";

export default function Banner() {
  return (
    <div className="relative mb-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-10"
        style={{
          backgroundImage: "url('/assets/bg2.jpg')",
          opacity: 0.2, // Adjust the opacity for the image
        }}
      ></div>

      {/* Content */}
      <div className="relative px-6 pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Savor Every Sip
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-slate-600 sm:text-xl">
              From energizing coffees to soothing teas and refreshing cold
              drinks, discover a world of beverages tailored to your taste. Your
              perfect sip is just a click away!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-3xl px-3.5 py-2.5 text-sm font-semibold text-white bg-black hover:bg-gray-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore Beverages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
