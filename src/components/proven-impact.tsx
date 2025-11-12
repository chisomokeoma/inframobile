"use client";

import { ArrowRight } from "lucide-react";
import AnimatedCard from "./animated-card";

export default function ProvenImpact() {
  return (
    <section className="flex flex-col gap-8 sm:gap-10 md:gap-12 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-[124px] bg-white">
      <div className="flex flex-col gap-3 sm:gap-4 items-center px-2">
        <h3 className="font-unbounded text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
          Proven Impact Across Communities
        </h3>
        <p className="text-sm sm:text-base font-normal text-[#535862] max-w-full sm:max-w-[550px] md:max-w-[610px] text-center leading-relaxed">
          From Ukraine&apos;s healthcare network to clean water initiatives in
          Nigeria, our modular systems are transforming how essential services
          reach people who need them most.
        </p>
      </div>

      <AnimatedCard
        delay={100}
        animationType="fadeUp"
        className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden w-full group hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        <figure className="relative w-full overflow-hidden">
          <img
            src="/images/impact-bg.png"
            alt="project1"
            className="w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <article className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-[#E0F7FA] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            <p className="text-[10px] sm:text-xs font-medium text-[#195FAA]">
              Healthcare
            </p>
          </article>
        </figure>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6">
          <section className="flex flex-col gap-2">
            <article className="flex gap-1 items-center px-2 py-1 rounded-full bg-[#E9F4FF] w-fit">
              <img
                src="/images/flag.svg"
                alt="flag"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <p className="text-[#195FAA] font-medium text-[10px] sm:text-xs">
                Ukraine
              </p>
            </article>
            <p className="text-black font-bold font-unbounded text-sm sm:text-base">
              Modular Healthcare facilites – Ukraine
            </p>
            <p className="text-[#535862] font-normal text-xs sm:text-sm leading-relaxed">
              Deployable Diagnostic Centres and Operating Theatres built in
              weeks, not years.
            </p>
          </section>
          <article className="flex gap-1 items-center cursor-pointer hover:gap-2 transition-all group-hover:translate-x-2 duration-300">
            <p className="text-[#195FAA] font-semibold text-sm sm:text-base group-hover:text-[#258FFF] transition-colors">
              View Project
            </p>
            <ArrowRight
              color="#195FAA"
              size={14}
              className="sm:w-4 sm:h-4 group-hover:text-[#258FFF] group-hover:rotate-[-45deg] transition-all duration-300"
            />
          </article>
        </div>
      </AnimatedCard>

      <AnimatedCard
        delay={200}
        animationType="fadeUp"
        className="w-fit mx-auto"
      >
        <button className="bg-[#E9F4FF] text-[#195FAA] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D0E8FF] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 w-fit relative overflow-hidden group">
          <span className="relative z-10">View All Projects</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#195FAA]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </button>
      </AnimatedCard>
    </section>
  );
}
