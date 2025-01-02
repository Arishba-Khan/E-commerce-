import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
       
      {/* About card */}

      <div className="bg-slate-200 shadow-lg rounded-lg p-6 mt-12 relative max-w-3xl mx-auto">
        <div className="flex items-center animation-fadeIn">
          <Image
            className="w-16 h-16 rounded-full mr-4 object-cover ring-[1.5px] ring-[#2f2723]"
            src="/assets/pp.jpg"
            alt="Arishba Khan"
            height={64}
            width={64}
          />

          <div>
            <h1 className="text-xl font-bold text-black">Arishba Khan</h1>
            <p className="text-slate-500">Web Developer | UI/UX Designer</p>
          </div>
        </div>

        <p className="mt-4 text-black leading-relaxed sm:max-h-[12rem] sm:overflow-auto">
          I'm a web developer who loves creating beautiful, user-friendly
          websites. Recently, I built a blog for travel and photography,
          blending my coding skills with storytelling. My goal is to share
          inspiring travel stories and stunning photos while ensuring a smooth
          experience for readers. As I continue to learn and explore new
          technologies, I bring fresh, creative ideas to life..
        </p>

        <div>
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
              <FaGithub className="text-2xl hover:text-[#171515] transition-all duration-500 ease-in-out delay-150" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
