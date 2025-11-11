"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Company", "Solutions", "Projects", "Contact"];

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-4 sm:px-6 md:px-8 lg:px-[124px] pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-4 flex justify-between items-center transition-all duration-300">
        <img
          src="/images/logo-image.png"
          alt="logo"
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[142px] h-auto"
        />

        <div className="hidden min-[635px]:flex gap-[64px]">
          {navLinks.map((item, idx) => (
            <a
              className="text-black text-sm font-normal hover:text-[#268fff] transition-colors whitespace-nowrap cursor-pointer"
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  const navHeight = 80;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="hidden max-[634px]:flex items-center justify-center p-2 bg-[#258FFF] rounded-lg transition-all duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </nav>

      <div
        className={`fixed top-[62px] left-0 right-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "62px" }}
      >
        <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-[124px] py-4 gap-4">
          {navLinks.map((item, idx) => (
            <a
              className="text-black text-base font-normal hover:text-[#268fff] transition-colors pt-2 pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer"
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="relative h-[calc(100vh-80px)] min-h-[500px] sm:min-h-[600px] md:min-h-[700px] mt-20 sm:mt-24 overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-6 lg:mx-[27px]">
        <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <HeroContent />
      </div>
    </>
  );
}

function HeroContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative z-10 h-full px-4 sm:px-6 md:px-12 lg:px-[90px] flex flex-col items-start justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 gap-3 sm:gap-4 md:gap-5">
      <h1
        className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight sm:leading-tight font-unbounded transition-all duration-1000 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        BUILD THE UNSEEN, <br />
        MOVE THE FUTURE!!!
      </h1>

      <div className="flex flex-col gap-4 sm:gap-5 mt-2 sm:mt-4">
        <p
          className={`text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-full sm:max-w-[450px] md:max-w-[510px] leading-relaxed transition-all duration-1000 ease-out delay-200 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We use software intelligence to deploy modular systems that strengthen
          critical infrastructure.
        </p>
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="bg-[#268fff] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-[50px] font-semibold text-xs sm:text-sm md:text-base hover:bg-blue-700 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 w-fit cursor-pointer relative overflow-hidden group">
            <span className="relative z-10">Explore Our Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
