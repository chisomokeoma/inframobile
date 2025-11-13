// "use client";

// import { useState, useEffect } from "react";
// import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

// interface SlideData {
//   headline: string;
//   paragraph: string;
//   buttonLink: string;
//   media: string;
//   statistics: {
//     number: string;
//     description: string;
//   }[];
// }

// const slides: SlideData[] = [
//   {
//     headline: "Intelligent Infrastructure for a Changing World",
//     paragraph:
//       "InfraMobile is rethinking how infrastructure gets built. We combine data analytics, rapid diagnostics, and modular deployment to deliver solutions that strengthen essential systems, from clean water to resilient healthcare.",
//     buttonLink: "",
//     media: "/images/slide1.png",

//     statistics: [
//       {
//         number: "25+",
//         description:
//           "Projects Deployed Across healthcare, water, and education.",
//       },
//       {
//         number: "4x",
//         description:
//           "Faster Deployment enables infrastructure to go live in weeks, not years.",
//       },
//       {
//         number: "120K+",
//         description: "Lives Impacted. Real change in local communities.",
//       },
//       {
//         number: "92%",
//         description:
//           "Diagnostic Accuracy, powered by our MAI Intelligence platform.",
//       },
//     ],
//   },
//   {
//     headline: "Modular Operating Theatres",
//     paragraph:
//       "State of the art surgical facilities designed for rapid assembly and deployment. Meeting international medical standards while maintaining flexibility for diverse operational environments.",
//     buttonLink: "",
//     media: "/images/slide2.png",

//     statistics: [
//       {
//         number: "8+",
//         description: "Operating Theatres operational in Ukraine.",
//       },
//       {
//         number: "5x",
//         description: "Faster Deployment than traditional construction.",
//       },
//       {
//         number: "25K+",
//         description: "Surgeries Performed in modular facilities.",
//       },
//       {
//         number: "98%",
//         description: "Sterility Standards maintained in all facilities.",
//       },
//     ],
//   },
//   {
//     headline: "Mobile Clinics",
//     paragraph:
//       "Deployable healthcare units bringing essential medical services directly to communities in need. We combine data analytics, rapid diagnostics, and modular deployment to deliver solutions that strengthen healthcare systems.",
//     buttonLink: "",
//     media: "/images/slide3.png",

//     statistics: [
//       {
//         number: "15+",
//         description: "Mobile Units Deployed across crisis zones.",
//       },
//       {
//         number: "3x",
//         description: "Faster Setup compared to traditional clinics.",
//       },
//       {
//         number: "50K+",
//         description: "Patients Served through mobile healthcare.",
//       },
//       {
//         number: "95%",
//         description: "Patient Satisfaction with mobile clinic services.",
//       },
//     ],
//   },
//   {
//     headline: "Modular Diagnostic Centre",
//     paragraph:
//       "Comprehensive diagnostic facilities with advanced imaging and laboratory capabilities. Enabling accurate, timely diagnoses in areas with limited medical infrastructure.",
//     buttonLink: "",
//     media: "/images/slide4.png",

//     statistics: [
//       {
//         number: "12+",
//         description: "Diagnostic Centers deployed across communities.",
//       },
//       {
//         number: "4x",
//         description: "Faster Testing turnaround with on-site labs.",
//       },
//       {
//         number: "80K+",
//         description: "Diagnostic Tests completed annually.",
//       },
//       {
//         number: "92%",
//         description: "Diagnostic Accuracy powered by MAI Intelligence.",
//       },
//     ],
//   },
//   {
//     headline: "Modular Pharmacy Boxes",
//     paragraph:
//       "Secure, climate-controlled pharmaceutical storage and dispensing units. Ensuring proper medication storage and distribution in challenging environments while maintaining supply chain integrity.",
//     buttonLink: "Learn More About Us",
//     media: "/images/slide5.png",
//     statistics: [
//       {
//         number: "20+",
//         description: "Pharmacy Units operational in remote areas.",
//       },
//       {
//         number: "24/7",
//         description: "Climate Control ensuring medication integrity.",
//       },
//       {
//         number: "45K+",
//         description: "Prescriptions Filled through modular pharmacies.",
//       },
//       {
//         number: "99%",
//         description: "Inventory Accuracy with smart tracking systems.",
//       },
//     ],
//   },
// ];

// function useCountUp(
//   target: string,
//   duration: number = 1500,
//   isVisible: boolean = false
// ) {
//   const [count, setCount] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const hasSlash = target.includes("/");
//   const hasK = target.includes("K");
//   const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));
//   const suffix = target.replace(/[0-9.]/g, "").trim();

//   useEffect(() => {
//     setHasAnimated(false);
//     setCount(0);
//     setIsAnimating(false);
//   }, [target]);

//   useEffect(() => {
//     if (!isVisible || hasAnimated) {
//       return;
//     }

//     if (hasSlash) {
//       setIsAnimating(false);
//       setHasAnimated(true);
//       return;
//     }

//     setIsAnimating(true);
//     setCount(0);
//     setHasAnimated(true);

//     if (isNaN(numericValue)) {
//       setCount(0);
//       setIsAnimating(false);
//       return;
//     }

//     const startTime = Date.now();
//     const startValue = 0;

//     const animate = () => {
//       const now = Date.now();
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const currentValue =
//         startValue + (numericValue - startValue) * easeOutQuart;

//       setCount(currentValue);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setIsAnimating(false);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [target, duration, hasSlash, numericValue, isVisible, hasAnimated]);

//   if (hasSlash) {
//     return target.trim();
//   }

//   if (isNaN(numericValue)) {
//     return target;
//   }

//   let displayValue: string;
//   if (isAnimating) {
//     if (hasK) {
//       displayValue = Math.round(count).toString();
//     } else if (suffix === "%") {
//       displayValue = Math.round(count).toString();
//     } else {
//       displayValue = Math.round(count).toString();
//     }
//   } else {
//     displayValue = numericValue.toString();
//   }

//   return `${displayValue}${suffix}`;
// }

// function AnimatedStat({
//   number,
//   description,
// }: {
//   number: string;
//   description: string;
// }) {
//   const { ref, isVisible } = useScrollAnimation({
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//     triggerOnce: true,
//   });
//   const animatedNumber = useCountUp(number, 1500, isVisible);

//   return (
//     <div
//       ref={ref}
//       className="flex flex-col gap-1 sm:gap-2 transition-opacity duration-300"
//     >
//       <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-unbounded bg-linear-to-r from-[#134880] to-[#258fff] bg-clip-text text-transparent">
//         {animatedNumber}
//       </div>
//       <p className="text-[10px] sm:text-xs font-normal text-gray-600 leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// }

// export default function SliderSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const currentData = slides[currentSlide];

//   return (
//     <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px]">
//       <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
//         <div className="flex-1 flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
//           <h2
//             key={`headline-${currentSlide}`}
//             className="text-xl sm:text-2xl md:text-3xl font-bold font-unbounded bg-linear-to-r from-[#134880] to-[#258fff] bg-clip-text text-transparent max-w-full lg:max-w-[480px] animate-fade-in"
//           >
//             {currentData.headline}
//           </h2>
//           <p
//             key={`paragraph-${currentSlide}`}
//             className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-full lg:max-w-[560px] transition-all duration-500 animate-slide-up"
//           >
//             {currentData.paragraph}
//           </p>

//           <div className="flex gap-1 bg-blue-50 px-[6px] py-[4px] rounded-full w-fit">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`transition-all duration-500 ease-out ${
//                   index === currentSlide
//                     ? "w-8 sm:w-10 md:w-11 h-[6px] sm:h-[7px] bg-[#258FFF] rounded-full cursor-pointer shadow-lg shadow-blue-500/50"
//                     : "w-[7px] sm:w-[8px] md:w-[9px] h-[6px] sm:h-[7px] bg-blue-200 rounded-full hover:bg-blue-400 hover:scale-125 cursor-pointer hover:shadow-md"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           <button
//             key={`button-${currentSlide}`}
//             className="bg-[#e6f3ff] text-[#195FAA] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#d0e7ff] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 w-fit cursor-pointer relative overflow-hidden group"
//           >
//             <span className="relative z-10">Learn More About Us</span>
//             <span className="absolute inset-0 `bg-linear-to-r from-[#195FAA]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//           </button>
//         </div>

//         <div className="flex-1 w-full lg:w-auto rounded-2xl sm:rounded-3xl overflow-hidden group">
//           <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[377px] overflow-hidden">
//             <img
//               key={currentSlide}
//               src={currentData.media}
//               alt={currentData.headline}
//               className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 relative z-0"
//             />
//             {/* {currentSlide === 0 && <AnimatedSlideOverlay />} */}
//             <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"></div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12">
//         {currentData.statistics.map((stat, index) => (
//           <AnimatedStat
//             key={`stat-${currentSlide}-${index}`}
//             number={stat.number}
//             description={stat.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

interface SlideData {
  headline: string;
  paragraph: string;
  buttonLink: string;
  media: string;
  statistics: {
    number: string;
    description: string;
  }[];
}

const slides: SlideData[] = [
  {
    headline: "Intelligent Infrastructure for a Changing World",
    paragraph:
      "InfraMobile is rethinking how infrastructure gets built. We combine data analytics, rapid diagnostics, and modular deployment to deliver solutions that strengthen essential systems, from clean water to resilient healthcare.",
    buttonLink: "",
    media: "/images/slide1.png",

    statistics: [
      {
        number: "25+",
        description:
          "Projects Deployed Across healthcare, water, and education.",
      },
      {
        number: "4x",
        description:
          "Faster Deployment enables infrastructure to go live in weeks, not years.",
      },
      {
        number: "120K+",
        description: "Lives Impacted. Real change in local communities.",
      },
      {
        number: "92%",
        description:
          "Diagnostic Accuracy, powered by our MAI Intelligence platform.",
      },
    ],
  },
  {
    headline: "Modular Operating Theatres",
    paragraph:
      "State of the art surgical facilities designed for rapid assembly and deployment. Meeting international medical standards while maintaining flexibility for diverse operational environments.",
    buttonLink: "",
    media: "/images/slide2.png",

    statistics: [
      {
        number: "8+",
        description: "Operating Theatres operational in Ukraine.",
      },
      {
        number: "5x",
        description: "Faster Deployment than traditional construction.",
      },
      {
        number: "25K+",
        description: "Surgeries Performed in modular facilities.",
      },
      {
        number: "98%",
        description: "Sterility Standards maintained in all facilities.",
      },
    ],
  },
  {
    headline: "Mobile Clinics",
    paragraph:
      "Deployable healthcare units bringing essential medical services directly to communities in need. We combine data analytics, rapid diagnostics, and modular deployment to deliver solutions that strengthen healthcare systems.",
    buttonLink: "",
    media: "/images/slide3.png",

    statistics: [
      {
        number: "15+",
        description: "Mobile Units Deployed across crisis zones.",
      },
      {
        number: "3x",
        description: "Faster Setup compared to traditional clinics.",
      },
      {
        number: "50K+",
        description: "Patients Served through mobile healthcare.",
      },
      {
        number: "95%",
        description: "Patient Satisfaction with mobile clinic services.",
      },
    ],
  },
  {
    headline: "Modular Diagnostic Centre",
    paragraph:
      "Comprehensive diagnostic facilities with advanced imaging and laboratory capabilities. Enabling accurate, timely diagnoses in areas with limited medical infrastructure.",
    buttonLink: "",
    media: "/images/slide4.png",

    statistics: [
      {
        number: "12+",
        description: "Diagnostic Centers deployed across communities.",
      },
      {
        number: "4x",
        description: "Faster Testing turnaround with on-site labs.",
      },
      {
        number: "80K+",
        description: "Diagnostic Tests completed annually.",
      },
      {
        number: "92%",
        description: "Diagnostic Accuracy powered by MAI Intelligence.",
      },
    ],
  },
  {
    headline: "Modular Pharmacy Boxes",
    paragraph:
      "Secure, climate-controlled pharmaceutical storage and dispensing units. Ensuring proper medication storage and distribution in challenging environments while maintaining supply chain integrity.",
    buttonLink: "Learn More About Us",
    media: "/images/slide5.png",
    statistics: [
      {
        number: "20+",
        description: "Pharmacy Units operational in remote areas.",
      },
      {
        number: "24/7",
        description: "Climate Control ensuring medication integrity.",
      },
      {
        number: "45K+",
        description: "Prescriptions Filled through modular pharmacies.",
      },
      {
        number: "99%",
        description: "Inventory Accuracy with smart tracking systems.",
      },
    ],
  },
];

function useCountUp(
  target: string,
  duration: number = 1500,
  isVisible: boolean = false
) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const hasSlash = target.includes("/");
  const hasK = target.includes("K");
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "").trim();

  useEffect(() => {
    setHasAnimated(false);
    setCount(0);
    setIsAnimating(false);
  }, [target]);

  useEffect(() => {
    if (!isVisible || hasAnimated) {
      return;
    }

    if (hasSlash) {
      setIsAnimating(false);
      setHasAnimated(true);
      return;
    }

    setIsAnimating(true);
    setCount(0);
    setHasAnimated(true);

    if (isNaN(numericValue)) {
      setCount(0);
      setIsAnimating(false);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue =
        startValue + (numericValue - startValue) * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, hasSlash, numericValue, isVisible, hasAnimated]);

  if (hasSlash) {
    return target.trim();
  }

  if (isNaN(numericValue)) {
    return target;
  }

  let displayValue: string;
  if (isAnimating) {
    if (hasK) {
      displayValue = Math.round(count).toString();
    } else if (suffix === "%") {
      displayValue = Math.round(count).toString();
    } else {
      displayValue = Math.round(count).toString();
    }
  } else {
    displayValue = numericValue.toString();
  }

  return `${displayValue}${suffix}`;
}

function AnimatedStat({
  number,
  description,
}: {
  number: string;
  description: string;
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const animatedNumber = useCountUp(number, 1500, isVisible);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1 sm:gap-2 transition-opacity duration-300"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-unbounded bg-linear-to-r from-[#134880] to-[#258fff] bg-clip-text text-transparent">
        {animatedNumber}
      </div>
      <p className="text-[10px] sm:text-xs font-normal text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentData = slides[currentSlide];

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
          <h2
            key={`headline-${currentSlide}`}
            className="text-xl sm:text-2xl md:text-3xl font-bold font-unbounded bg-linear-to-r from-[#134880] to-[#258fff] bg-clip-text text-transparent max-w-full lg:max-w-[480px] animate-fade-in"
          >
            {currentData.headline}
          </h2>
          <p
            key={`paragraph-${currentSlide}`}
            className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-full lg:max-w-[560px] transition-all duration-500 animate-slide-up"
          >
            {currentData.paragraph}
          </p>

          <div className="flex gap-1 bg-blue-50 px-[6px] py-[4px] rounded-full w-fit">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 ease-out ${
                  index === currentSlide
                    ? "w-8 sm:w-10 md:w-11 h-[6px] sm:h-[7px] bg-[#258FFF] rounded-full cursor-pointer shadow-lg shadow-blue-500/50"
                    : "w-[7px] sm:w-[8px] md:w-[9px] h-[6px] sm:h-[7px] bg-blue-200 rounded-full hover:bg-blue-400 hover:scale-125 cursor-pointer hover:shadow-md"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            key={`button-${currentSlide}`}
            className="bg-[#e6f3ff] text-[#195FAA] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#d0e7ff] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 w-fit cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">Learn More About Us</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#195FAA]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>

        <div className="flex-1 w-full lg:w-auto rounded-2xl sm:rounded-3xl overflow-hidden group">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[377px] overflow-hidden">
            <img
              key={currentSlide}
              src={currentData.media}
              alt={currentData.headline}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 relative z-0"
            />
            {/* {currentSlide === 0 && <AnimatedSlideOverlay />} */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12">
        {currentData.statistics.map((stat, index) => (
          <AnimatedStat
            key={`stat-${currentSlide}-${index}`}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}
