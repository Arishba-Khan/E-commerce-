import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-1 text-lg font-extrabold tracking-wide text-white hover:text-white">
              Brew Bazaar
            </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center w-full">
            © 2025 Brew Bazaar —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/arishba-khan"
              className="text-gray-500"
            >
              <FaLinkedin className="text-2xl hover:text-[#0077B5] transition-all duration-500 ease-in-out delay-150" />
            </Link>

            <Link
              target="_blank"
              href="https://github.com/Arishba-Khan"
              className="text-gray-500 mx-1"
            >
              <FaGithub className="text-2xl hover:text-gray-600 transition-all duration-500 ease-in-out delay-150" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
