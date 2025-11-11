"use client";

import AnimatedCard from "./animated-card";

const partners = [
  "/images/samsung.png",
  "/images/bank-china.png",
  "/images/google.png",
  "/images/shein.png",
  "/images/microsoft.png",
];

export default function TrustedPartners() {
  return (
    <section className="flex flex-col gap-8 sm:gap-10 md:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px] bg-[#E9F4FF]">
      <div className="flex flex-col gap-3 sm:gap-4 items-center px-2">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
          Trusted by Governments and Global Partners
        </h3>
        <p className="text-sm sm:text-base font-normal text-[#535862] max-w-full sm:max-w-[550px] md:max-w-[606px] text-center leading-relaxed">
          We collaborate with government ministries, NGOs, and development
          institutions to accelerate impact across regions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-8">
        {partners.map((item, idx) => (
          <AnimatedCard
            key={idx}
            delay={idx * 100}
            animationType="scale"
            className="flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14 w-20 sm:w-24 md:w-28 lg:w-32"
          >
            <img
              src={item}
              alt={`partner ${idx + 1}`}
              className="max-h-full max-w-full w-full h-full object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 filter hover:drop-shadow-lg"
            />
          </AnimatedCard>
        ))}
      </div>
      <p className="text-[#717680] text-center text-xs sm:text-sm font-normal px-2">
        Trusted by development finance institutions and international
        organizations worldwide
      </p>
    </section>
  );
}
