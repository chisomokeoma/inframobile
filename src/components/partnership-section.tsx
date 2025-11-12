"use client";

import AnimatedCard from "./animated-card";

export default function PartnershipSection() {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-[124px] overflow-hidden bg-[#258FFF]">
      <div className="absolute right-0 top-0 h-full">
        <div className="relative h-full flex items-center justify-center">
          <img
            src="/images/partner-right.png"
            alt="Background decoration"
            className="h-full w-auto object-contain opacity-20 md:opacity-35"
          />

          <button className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 transform translate-x-[-20%] z-20 bg-[#E9F4FF] text-[#195FAA] px-5 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-gray-50 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg whitespace-nowrap relative overflow-hidden group">
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#195FAA]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-[18px]">
          <AnimatedCard
            delay={0}
            animationType="slideRight"
            className="shrink-0"
          >
            <img
              src="/images/partner-left.png"
              alt="Partnership icon"
              className="w-20 h-20 md:w-auto md:h-auto"
            />
          </AnimatedCard>

          <AnimatedCard
            delay={150}
            animationType="fadeUp"
            className="flex-1 flex flex-col gap-3 md:gap-4 max-w-full md:max-w-[650px] text-center md:text-left"
          >
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#0C3055] font-unbounded max-w-[585px]">
              Partner With Us to Build Resilient Systems That Matter
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal text-[#E9F4FF] leading-relaxed">
              Let&apos;s work together to turn data into durable impact for
              communities worldwide.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={200}
            animationType="fadeUp"
            className="md:hidden w-full flex justify-center mt-4"
          >
            <button className="bg-white text-[#195FAA] px-5 py-3 rounded-[50px] font-semibold text-sm hover:bg-gray-50 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer relative overflow-hidden group">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-linear-to-r from-[#195FAA]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </button>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
