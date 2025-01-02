import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="text-black bg-gray-700 bg-opacity-10 body-font -mb-20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-extrabold items-center text-black mb-4 md:mb-0">
          <span className="ml-3 text-3xl">Brew Bazaar</span>
        </a>
        <nav className="md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-700">
            Home
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-700">
            Contact
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-700">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
