// ===== HomeHeroSection.jsx =====
import React from "react";
import heroImg from "../assets/heroimg.png";

export const HomeHeroSection = () => {
  return (
    <section className="w-full min-h-[90vh] px-6 md:px-10 py-20 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden bg-gradient-to-b from-[#0c0f16] to-black">

      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-lg text-center md:text-left z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Talib <span className="text-teal-400">Abbasi</span>
        </h1>

        <div>
          <h3 className="text-teal-400 underline decoration-teal-500 font-semibold text-xl">
            Freelancer
          </h3>
          <p className="text-lg">
            Get in touch for freelance projects.
          </p>
        </div>
      </div>

      {/* Hero Image (Centered Like Screenshot) */}
      <div className="relative flex justify-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-0">
        <img
          src={heroImg}
          alt="hero"
          className="h-[350px] md:h-[600px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-6 max-w-md text-center md:text-left z-10 mt-10 md:mt-0">
        <h3 className="text-teal-400 underline decoration-teal-500 font-semibold text-xl">
          UI Designer
        </h3>

        <p className="text-lg leading-relaxed">
          Are you looking UI UX designer and Figma expert? You're the right place.
          I'm here with my expertise and I will convert your idea into real world
          and increase the user experience of your design. My priority is user
          satisfaction and creating a clean, user-friendly design.
        </p>
      </div>

      {/* Shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-teal-400 rotate-45 opacity-60"></div>
      <div className="absolute bottom-32 right-10 w-10 h-10 bg-white rotate-12 opacity-60"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-teal-400 rotate-12 opacity-60"></div>
    </section>
  );
};

export default HomeHeroSection;
