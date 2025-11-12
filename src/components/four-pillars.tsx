"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Pillar {
  title: string;
  description: string;
  icon: string;
  //   backgroundPattern: "dots" | "waves";
}

const pillars: Pillar[] = [
  {
    title: "Software Intelligence",
    description:
      "Our MAI platform identifies where systems are failing and predicts what's next.",
    icon: "/images/software-bg.png",
    // backgroundPattern: "dots",
  },
  {
    title: "Advisory & Consultation",
    description:
      "Rapid-deploy modular units for healthcare, education, water, and food security.",
    icon: "/images/pillar2.png",
    // backgroundPattern: "waves",
  },
  {
    title: "Integration & Operation",
    description:
      "We help governments and partners design smarter infrastructure strategies.",
    icon: "/images/pillar3.png",
    // backgroundPattern: "waves",
  },
  {
    title: "Hardware & Field Solutions",
    description:
      "Long-term management to keep systems efficient, measurable, and future-ready.",
    icon: "/images/pillar4.png",
    // backgroundPattern: "dots",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: index * 0.15,
    },
  },
});

const imageVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const contentVariants = {
  rest: {
    y: 0,
    opacity: 1,
  },
  hover: {
    y: -10,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function FourPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px] relative overflow-hidden"
      style={{
        backgroundColor: "#0a1a2e",
      }}
    >
      <div
        className="absolute inset-0 h-full"
        style={{
          backgroundImage: "url('/images/pillars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        ref={ref}
        className="relative z-10 flex flex-col gap-8 sm:gap-10 md:gap-12 pb-22"
      >
        <motion.div
          className="flex flex-col gap-3 sm:gap-4 items-center px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
            From Insight to Impact - Our Four Pillars
          </h3>
          <p className="text-sm sm:text-base font-normal text-white max-w-full sm:max-w-[600px] md:max-w-[741px] text-center leading-relaxed px-2">
            Every project begins with intelligence, not guesswork. We move from
            diagnosis to deployment through four integrated solutions:
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: -5,
                z: 20,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative rounded-xl p-6 overflow-hidden group h-[250px] sm:h-[280px] flex flex-col w-full cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{
                  scale: 1.1,
                  filter: "brightness(1.2)",
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                style={{
                  backgroundImage: `url('${pillar.icon}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <motion.div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {index === 0 && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div
                      className="relative w-full h-full flex items-center justify-center"
                      style={{ transform: "translateY(8%)" }}
                    >
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
                        <img
                          src="/images/circle1.png"
                          alt="circle1"
                          className="absolute w-full h-full object-contain"
                          style={{
                            zIndex: 21,
                          }}
                        />
                        <img
                          src="/images/brain.png"
                          alt="brain"
                          className="relative w-12 h-12 sm:w-14 sm:h-14 object-contain"
                          style={{
                            zIndex: 30,
                          }}
                        />
                      </div>
                      <img
                        src="/images/circle1.png"
                        alt="circle2"
                        className="absolute w-40 h-40 sm:w-48 sm:h-48 object-contain circle-fade-in"
                        style={{
                          animationDelay: "0s",
                          zIndex: 22,
                        }}
                      />
                      <img
                        src="/images/circle2.png"
                        alt="circle3"
                        className="absolute w-40 h-40 sm:w-48 sm:h-48 object-contain circle-fade-in"
                        style={{
                          animationDelay: "5s",
                          zIndex: 23,
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"></div>
                    <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"></div>
                    <div className="absolute bottom-24 left-24 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-3"></div>
                    <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-[#40B4E5] dot-blink-4"></div>
                    <div
                      className="absolute top-32 right-12 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="absolute bottom-32 left-12 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </>
              )}

              <motion.div
                className="relative flex flex-col gap-2 h-full justify-start z-10"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <div>
                  <motion.h4
                    className="text-lg font-bold text-[#49A2FF]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {pillar.title}
                  </motion.h4>
                  <p className="text-xs sm:text-sm text-[#B6DAFF] font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:grid grid-cols-12 gap-3 md:gap-[13px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => {
            let colSpan = "col-span-6";
            if (index === 2) {
              colSpan = "col-span-7";
            } else if (index === 3) {
              colSpan = "col-span-5";
            }

            return (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                whileHover="hover"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden group ${colSpan} h-[300px] md:h-[320px] lg:h-[355px] flex flex-col cursor-pointer`}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                  style={{
                    backgroundImage: `url('${pillar.icon}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <motion.div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div className="absolute inset-0 bg-[#258FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {index === 0 && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{ transform: "translateY(8%)" }}
                      >
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                          <img
                            src="/images/circle1.png"
                            alt="circle1"
                            className="absolute w-full h-full object-contain"
                            style={{
                              zIndex: 21,
                            }}
                          />
                          <img
                            src="/images/brain.png"
                            alt="brain"
                            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
                            style={{
                              zIndex: 30,
                            }}
                          />
                        </div>
                        <img
                          src="/images/circle1.png"
                          alt="circle2"
                          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain circle-fade-in"
                          style={{
                            animationDelay: "0s",
                            zIndex: 22,
                          }}
                        />
                        <img
                          src="/images/circle2.png"
                          alt="circle3"
                          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain circle-fade-in"
                          style={{
                            animationDelay: "5s",
                            zIndex: 23,
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"></div>
                      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"></div>
                      <div className="absolute bottom-24 left-24 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-3"></div>
                      <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-[#40B4E5] dot-blink-4"></div>
                      <div
                        className="absolute top-32 right-12 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="absolute bottom-32 left-12 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </>
                )}

                <motion.div
                  className="relative flex flex-col gap-2 h-full justify-start z-10"
                  variants={contentVariants}
                >
                  <div>
                    <motion.h4
                      className="text-lg sm:text-xl font-bold text-[#49A2FF]"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {pillar.title}
                    </motion.h4>
                    <motion.p
                      className="text-xs sm:text-sm text-[#B6DAFF] font-normal leading-relaxed max-w-full sm:max-w-[280px] md:max-w-[322px]"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {pillar.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// interface Pillar {
//   title: string;
//   description: string;
//   icon: string;
//   //   backgroundPattern: "dots" | "waves";
// }

// const pillars: Pillar[] = [
//   {
//     title: "Software Intelligence",
//     description:
//       "Our MAI platform identifies where systems are failing and predicts what's next.",
//     icon: "/images/software-bg.png",
//     // backgroundPattern: "dots",
//   },
//   {
//     title: "Advisory & Consultation",
//     description:
//       "Rapid-deploy modular units for healthcare, education, water, and food security.",
//     icon: "/images/pillar2.png",
//     // backgroundPattern: "waves",
//   },
//   {
//     title: "Integration & Operation",
//     description:
//       "We help governments and partners design smarter infrastructure strategies.",
//     icon: "/images/pillar3.png",
//     // backgroundPattern: "waves",
//   },
//   {
//     title: "Hardware & Field Solutions",
//     description:
//       "Long-term management to keep systems efficient, measurable, and future-ready.",
//     icon: "/images/hardware-plain.png",
//     // backgroundPattern: "dots",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants = (index: number) => ({
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.8,
//     rotateX: -15,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94] as const,
//       delay: index * 0.15,
//     },
//   },
// });

// const imageVariants = {
//   rest: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut" as const,
//     },
//   },
// };

// const contentVariants = {
//   rest: {
//     y: 0,
//     opacity: 1,
//   },
//   hover: {
//     y: -10,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut" as const,
//     },
//   },
// };

// export default function FourPillars() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <section
//       className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px] relative overflow-hidden"
//       style={{
//         backgroundColor: "#0a1a2e",
//       }}
//     >
//       <div
//         className="absolute inset-0 h-full"
//         style={{
//           backgroundImage: "url('/images/pillars-bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />
//       <div
//         ref={ref}
//         className="relative z-10 flex flex-col gap-8 sm:gap-10 md:gap-12"
//       >
//         <motion.div
//           className="flex flex-col gap-3 sm:gap-4 items-center px-2"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
//             From Insight to Impact - Our Four Pillars
//           </h3>
//           <p className="text-sm sm:text-base font-normal text-white max-w-full sm:max-w-[600px] md:max-w-[741px] text-center leading-relaxed px-2">
//             Every project begins with intelligence, not guesswork. We move from
//             diagnosis to deployment through four integrated solutions:
//           </p>
//         </motion.div>

//         {/* Mobile Layout - Stack vertically */}
//         <motion.div
//           className="flex flex-col gap-4 md:hidden"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {pillars.map((pillar, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants(index)}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               whileHover={{
//                 scale: 1.03,
//                 rotateY: 5,
//                 rotateX: -5,
//                 z: 20,
//                 transition: { duration: 0.4, ease: "easeOut" },
//               }}
//               className="relative rounded-xl p-6 overflow-hidden group h-[250px] sm:h-[280px] flex flex-col w-full cursor-pointer"
//               style={{ perspective: "1000px" }}
//             >
//               <motion.div
//                 className="absolute inset-0"
//                 whileHover={{
//                   scale: 1.1,
//                   filter: "brightness(1.2)",
//                   transition: { duration: 0.6, ease: "easeOut" },
//                 }}
//                 style={{
//                   backgroundImage: `url('${pillar.icon}')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               />
//               <motion.div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               {index === 0 && (
//                 <>
//                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//                     <div
//                       className="relative w-full h-full flex items-center justify-center"
//                       style={{ transform: "translateY(8%)" }}
//                     >
//                       <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
//                         <img
//                           src="/images/circle1.png"
//                           alt="circle1"
//                           className="absolute w-full h-full object-contain"
//                           style={{
//                             zIndex: 21,
//                           }}
//                         />
//                         <img
//                           src="/images/brain.png"
//                           alt="brain"
//                           className="relative w-12 h-12 sm:w-14 sm:h-14 object-contain"
//                           style={{
//                             zIndex: 30,
//                           }}
//                         />
//                       </div>
//                       <img
//                         src="/images/circle1.png"
//                         alt="circle2"
//                         className="absolute w-40 h-40 sm:w-48 sm:h-48 object-contain circle-fade-in"
//                         style={{
//                           animationDelay: "0s",
//                           zIndex: 22,
//                         }}
//                       />
//                       <img
//                         src="/images/circle2.png"
//                         alt="circle3"
//                         className="absolute w-40 h-40 sm:w-48 sm:h-48 object-contain circle-fade-in"
//                         style={{
//                           animationDelay: "5s",
//                           zIndex: 23,
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"></div>
//                     <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"></div>
//                     <div className="absolute bottom-24 left-24 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-3"></div>
//                     <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-[#40B4E5] dot-blink-4"></div>
//                     <div
//                       className="absolute top-32 right-12 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"
//                       style={{ animationDelay: "0.3s" }}
//                     ></div>
//                     <div
//                       className="absolute bottom-32 left-12 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"
//                       style={{ animationDelay: "0.5s" }}
//                     ></div>
//                   </div>
//                 </>
//               )}

//               {index === 3 && (
//                 <div className="absolute inset-0 pointer-events-none">
//                   {/* Eclipse Ring Images - Background Layer */}
//                   <div
//                     className="absolute flex items-center justify-center z-10"
//                     style={{
//                       left: "50%",
//                       top: "85%",
//                       transform: "translate(-50%, -50%)",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <img
//                       src="/images/eclipse1.png"
//                       alt="eclipse ring 1"
//                       className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain py-2"
//                     />
//                     <img
//                       src="/images/eclipse2.png"
//                       alt="eclipse ring 2"
//                       className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain py-2"
//                     />
//                     <img
//                       src="/images/eclipse3.png"
//                       alt="eclipse ring 3"
//                       className="absolute w-[270px] h-[270px] sm:w-[220px] sm:h-[220px] object-contain py-2"
//                     />
//                     <img
//                       src="/images/eclipse4.png"
//                       alt="eclipse ring 4"
//                       className="absolute w-[270px] h-[270px] sm:w-[290px] sm:h-[290px] object-contain py-2"
//                     />
//                   </div>

//                   {/* Rotating Icons - Above Eclipse Rings */}
//                   <motion.div
//                     className="absolute z-40"
//                     style={{
//                       left: "50%",
//                       top: "85%",
//                       transform: "translate(-50%, -50%)",
//                       width: "200px",
//                       height: "200px",
//                     }}
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 20,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     {[
//                       { icon: "/images/network.svg", angle: 0 },
//                       { icon: "/images/brain.png", angle: 240 },
//                       { icon: "/images/globe.svg", angle: 240 },
//                     ].map((item, idx) => {
//                       const radius = 40;
//                       const x =
//                         Math.round(
//                           Math.cos((item.angle * Math.PI) / 180) * radius * 100
//                         ) / 100;
//                       const y =
//                         Math.round(
//                           Math.sin((item.angle * Math.PI) / 180) * radius * 100
//                         ) / 100;

//                       return (
//                         <motion.div
//                           key={idx}
//                           className="absolute"
//                           style={{
//                             left: `calc(50% + ${x}px)`,
//                             top: `calc(50% + ${y}px)`,
//                             transform: "translate(-50%, -50%)",
//                           }}
//                           animate={{ rotate: -360 }}
//                           transition={{
//                             duration: 20,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         >
//                           <div className="bg-blue-500/30 backdrop-blur-sm border-2 border-blue-400/50 rounded-lg p-2 shadow-lg">
//                             <img
//                               src={item.icon}
//                               alt={`icon-${idx}`}
//                               className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
//                             />
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </motion.div>
//                 </div>
//               )}

//               <motion.div
//                 className="relative flex flex-col gap-2 h-full justify-start z-10"
//                 whileHover={{
//                   y: -10,
//                   transition: { duration: 0.4, ease: "easeOut" },
//                 }}
//               >
//                 <div>
//                   <motion.h4
//                     className="text-lg font-bold text-[#49A2FF]"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {pillar.title}
//                   </motion.h4>
//                   <p className="text-xs sm:text-sm text-[#B6DAFF] font-normal leading-relaxed">
//                     {pillar.description}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Desktop Layout - Grid with custom spans */}
//         <motion.div
//           className="hidden md:grid grid-cols-12 gap-3 md:gap-[13px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {pillars.map((pillar, index) => {
//             let colSpan = "col-span-6";
//             if (index === 2) {
//               colSpan = "col-span-7";
//             } else if (index === 3) {
//               colSpan = "col-span-5";
//             }

//             return (
//               <motion.div
//                 key={index}
//                 variants={cardVariants(index)}
//                 whileHover="hover"
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden group ${colSpan} h-[300px] md:h-[320px] lg:h-[355px] flex flex-col cursor-pointer`}
//                 style={{ perspective: "1000px" }}
//               >
//                 <motion.div
//                   className="absolute inset-0"
//                   variants={imageVariants}
//                   style={{
//                     backgroundImage: `url('${pillar.icon}')`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                   }}
//                 />
//                 <motion.div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <motion.div className="absolute inset-0 bg-[#258FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {index === 0 && (
//                   <>
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//                       <div
//                         className="relative w-full h-full flex items-center justify-center"
//                         style={{ transform: "translateY(8%)" }}
//                       >
//                         <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
//                           <img
//                             src="/images/circle1.png"
//                             alt="circle1"
//                             className="absolute w-full h-full object-contain"
//                             style={{
//                               zIndex: 21,
//                             }}
//                           />
//                           <img
//                             src="/images/brain.png"
//                             alt="brain"
//                             className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
//                             style={{
//                               zIndex: 30,
//                             }}
//                           />
//                         </div>
//                         <img
//                           src="/images/circle1.png"
//                           alt="circle2"
//                           className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain circle-fade-in"
//                           style={{
//                             animationDelay: "0s",
//                             zIndex: 22,
//                           }}
//                         />
//                         <img
//                           src="/images/circle2.png"
//                           alt="circle3"
//                           className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain circle-fade-in"
//                           style={{
//                             animationDelay: "5s",
//                             zIndex: 23,
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="absolute inset-0 pointer-events-none">
//                       <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"></div>
//                       <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"></div>
//                       <div className="absolute bottom-24 left-24 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-3"></div>
//                       <div className="absolute bottom-16 right-16 w-2.5 h-2.5 rounded-full bg-[#40B4E5] dot-blink-4"></div>
//                       <div
//                         className="absolute top-32 right-12 w-2 h-2 rounded-full bg-[#40B4E5] dot-blink-1"
//                         style={{ animationDelay: "0.3s" }}
//                       ></div>
//                       <div
//                         className="absolute bottom-32 left-12 w-3 h-3 rounded-full bg-[#40B4E5] dot-blink-2"
//                         style={{ animationDelay: "0.5s" }}
//                       ></div>
//                     </div>
//                   </>
//                 )}

//                 {index === 3 && (
//                   <div className="absolute inset-0 pointer-events-none z-20">
//                     {/* Eclipse Ring Images - Background Layer */}
//                     <div
//                       className="absolute flex items-center justify-center"
//                       style={{
//                         left: "50%",
//                         top: "85%",
//                         transform: "translate(-50%, -50%)",
//                         width: "100%",
//                         height: "100%",
//                       }}
//                     >
//                       <img
//                         src="/images/eclipse1.png"
//                         alt="eclipse ring 1"
//                         className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain "
//                       />
//                       <img
//                         src="/images/eclipse2.png"
//                         alt="eclipse ring 2"
//                         className="absolute w-[180px] h-[180px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px] object-contain "
//                       />
//                       <img
//                         src="/images/eclipse3.png"
//                         alt="eclipse ring 3"
//                         className="absolute w-[270px] h-[270px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] object-contain "
//                       />
//                       <img
//                         src="/images/eclipse4.png"
//                         alt="eclipse ring 4"
//                         className="absolute w-[340px] h-[340px] md:w-[390px] md:h-[390px] lg:w-[440px] lg:h-[440px] object-contain "
//                       />
//                     </div>

//                     {/* Central Disc */}
//                     <div
//                       className="absolute z-30"
//                       style={{
//                         left: "50%",
//                         top: "85%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     >
//                       <img
//                         src="/images/hardware-bg.png"
//                         alt="central disc"
//                         className="w-32 h-40 md:w-40 md:h-48 lg:w-44 lg:h-52 object-contain drop-shadow-2xl"
//                       />
//                     </div>

//                     {/* Rotating Icons */}
//                     <motion.div
//                       className="absolute z-40"
//                       style={{
//                         left: "50%",
//                         top: "85%",
//                         transform: "translate(-50%, -50%)",
//                         width: "300px",
//                         height: "300px",
//                       }}
//                       animate={{ rotate: 360 }}
//                       transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     >
//                       {[
//                         { icon: "/images/network.svg", angle: 0 },
//                         { icon: "/images/brain.png", angle: 120 },
//                         { icon: "/images/globe.svg", angle: 240 },
//                       ].map((item, idx) => {
//                         const radius = 60;
//                         const x =
//                           Math.round(
//                             Math.cos((item.angle * Math.PI) / 180) *
//                               radius *
//                               100
//                           ) / 100;
//                         const y =
//                           Math.round(
//                             Math.sin((item.angle * Math.PI) / 180) *
//                               radius *
//                               100
//                           ) / 100;

//                         return (
//                           <motion.div
//                             key={idx}
//                             className="absolute"
//                             style={{
//                               left: `calc(50% + ${x}px)`,
//                               top: `calc(50% + ${y}px)`,
//                               transform: "translate(-50%, -50%)",
//                             }}
//                             animate={{ rotate: -360 }}
//                             transition={{
//                               duration: 20,
//                               repeat: Infinity,
//                               ease: "linear",
//                             }}
//                           >
//                             <div className="bg-blue-500/30 backdrop-blur-sm border-2 border-blue-400/50 rounded-lg p-2 md:p-2.5 shadow-lg">
//                               <img
//                                 src={item.icon}
//                                 alt={`icon-${idx}`}
//                                 className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
//                               />
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </motion.div>
//                   </div>
//                 )}

//                 <motion.div
//                   className="relative flex flex-col gap-2 h-full justify-start z-10"
//                   variants={contentVariants}
//                 >
//                   <div>
//                     <motion.h4
//                       className="text-lg sm:text-xl font-bold text-[#49A2FF]"
//                       whileHover={{ scale: 1.05, x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {pillar.title}
//                     </motion.h4>
//                     <motion.p
//                       className="text-xs sm:text-sm text-[#B6DAFF] font-normal leading-relaxed max-w-full sm:max-w-[280px] md:max-w-[322px]"
//                       initial={{ opacity: 0.8 }}
//                       whileHover={{ opacity: 1 }}
//                     >
//                       {pillar.description}
//                     </motion.p>
//                   </div>
//                 </motion.div>

//                 {/* Animated border glow on hover */}
//                 <motion.div
//                   className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-[#258FFF] opacity-0"
//                   whileHover={{
//                     opacity: 0.6,
//                     scale: 1.02,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
