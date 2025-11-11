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
    icon: "/images/software.png",
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

export default function FourPillars() {
  return (
    <section
      className="pt-12 pb-20  sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px] relative overflow-hidden"
      style={{
        backgroundColor: "#0a1a2e",
      }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: "url('/images/pillars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 items-center px-2">
          <h3 className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
            From Insight to Impact - Our Four Pillars
          </h3>
          <p className="text-sm sm:text-base font-normal text-white max-w-full sm:max-w-[600px] md:max-w-[741px] text-center leading-relaxed px-2">
            Every project begins with intelligence, not guesswork. We move from
            diagnosis to deployment through four integrated solutions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-[13px] w-full pb-25">
          {pillars.map((pillar, index) => {
            let colSpan = "col-span-6";
            if (index === 2) {
              colSpan = "col-span-7";
            } else if (index === 3) {
              colSpan = "col-span-5";
            }

            return (
              <div
                key={index}
                className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 overflow-hidden group ${colSpan} h-[280px] sm:h-[300px] md:h-[320px] lg:h-[355px] flex flex-col`}
              >
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('${pillar.icon}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {index === 0 && (
                  <>
                    <div className="absolute inset-0 flex items-end justify-center pb-16 pointer-events-none">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute w-24 h-24 rounded-full border-11 border-[#258fff]/70 pulse-ring"></div>
                        <div
                          className="absolute w-24 h-24 rounded-full border-11 border-[#258fff]/70 pulse-ring"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
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

                <div className="relative  flex flex-col gap-2 h-full ">
                  <div>
                    <h4 className="text-xl font-bold text-[#49A2FF]">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#B6DAFF] font-normal leading-relaxed max-w-[322px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
