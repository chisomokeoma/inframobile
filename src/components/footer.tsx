import React from "react";

const socialsList = [
  {
    icon: "/images/linkedin.svg",
    link: "",
  },
  {
    icon: "/images/twitter.svg",
    link: "",
  },
  {
    icon: "/images/youtube.svg",
    link: "",
  },
];

const InfraMobileFooter = () => {
  return (
    <footer className="bg-[#F6FBFF] w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[124px] pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-6 sm:pb-8">
        <div className=" flex flex-col gap-[10px] mb-8 sm:mb-10 md:mb-[42px]">
          <img
            src="/images/logo-image.png"
            alt="logo"
            className="w-[150px] sm:w-[170px] md:w-[198px] h-auto"
          />
          <p className=" text-base font-normal text-[#181D27]">
            Building intelligent infrastructure for a better tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-2 min-[550px]:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="font-medium text-base  text-black mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-[#535862] text-sm font-normal hover:text-blue-500 transition-colors "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#535862] text-sm font-normal hover:text-blue-500 transition-colors "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#535862]  font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-[#535862] font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#535862] font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-medium text-base  text-black mb-6">
              Solutions
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#healthcare"
                  className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                >
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  href="#water"
                  className="text-[#535862] font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Water Systems
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-[#535862] font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#food"
                  className="text-[#535862]  font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Food Security
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 min-[550px]:col-span-1">
            <h3 className="font-medium text-base  text-black mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-[#535862]  font-normal text-sm">
                San Francisco, CA
              </li>
              <li>
                <a
                  href="mailto:contact@inframobile.com"
                  className="text-[#535862]  font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  contact@inframobile.com
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="text-[#535862] font-normal hover:text-blue-500 transition-colors text-sm"
                >
                  Press Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#A4A7AE36] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-xs font-normal  text-[#717680]">
            © 2025 InfraMobile. All rights reserved. |
            <a
              href="#privacy"
              className="hover:text-blue-500 transition-colors ml-1"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#terms"
              className="hover:text-blue-500 transition-colors ml-1"
            >
              Terms of Service
            </a>
          </div>

          <div className=" flex gap-3 items-center">
            {socialsList.map((item, idx) => (
              <a
                href=""
                key={idx}
                className=" p-[10px] rounded-full  w-9 h-9 bg-[#DAEDFF] flex items-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-8 px-4 pointer-events-none select-none">
        <div className="w-full flex justify-center">
          <img
            src="/images/inframobile.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain "
            style={
              {
                imageRendering: "auto",
                willChange: "transform",
              } as React.CSSProperties
            }
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </footer>
  );
};

export default InfraMobileFooter;
