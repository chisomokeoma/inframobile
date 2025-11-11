import { Heart, Waves, Leaf, BookOpen } from "lucide-react";
import AnimatedCard from "./animated-card";

interface FocusCard {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  colSpan: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
}

const focusCards: FocusCard[] = [
  {
    title: "Healthcare",
    description:
      "Modular medical facilities and supply chain optimization for underserved areas.",
    image: "/images/focused1.png",
    icon: <Heart />,
    colSpan: "md:col-span-2",
    borderColor: "#fff",
    iconColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "Water",
    description:
      "Smart purification and distribution systems with real-time quality monitoring.",
    image: "/images/focused2.png",
    icon: <Waves />,
    colSpan: "",
    borderColor: "#0C3055",
    iconColor: "#0C3055",
    textColor: "#0C3055",
  },
  {
    title: "Food Security",
    description:
      "Agricultural technology and data systems to enhance crop resilience and yields.",
    image: "/images/focused3.png",
    icon: <Leaf />,
    colSpan: "",
    borderColor: "#0C3055",
    iconColor: "#0C3055",
    textColor: "#0C3055",
  },
  {
    title: "Education",
    description:
      "Connected learning infrastructure bringing digital resources to remote communities.",
    image: "/images/focused4.png",
    icon: <BookOpen />,
    colSpan: "md:col-span-2",
    borderColor: "#fff",
    iconColor: "#fff",
    textColor: "#fff",
  },
];

export default function FocusedSection() {
  return (
    <section className="flex flex-col gap-8 sm:gap-10 md:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[124px] bg-white">
      <div className="flex flex-col gap-3 sm:gap-4 items-center px-2">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-[#195FAA] to-[#258FFF] bg-clip-text text-transparent text-center">
          Focused Where It Matters Most
        </h3>
        <p className="text-sm sm:text-base font-normal text-[#535862] max-w-full sm:max-w-[550px] md:max-w-[606px] text-center leading-relaxed">
          We design modular infrastructure for the foundations of daily life,
          systems that protect, sustain, and empower communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {focusCards.map((card, index) => (
          <AnimatedCard
            key={index}
            delay={index * 100}
            animationType="fadeUp"
            className={`relative rounded-xl sm:rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] ${card.colSpan} flex flex-col group hover:scale-[1.03] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl`}
          >
            <div
              className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              style={{
                backgroundImage: `url('${card.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-6 md:p-8 transform group-hover:translate-y-[-12px] transition-transform duration-500">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-[11px] rounded-full border-2 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    borderColor: card.borderColor,
                  }}
                >
                  <div
                    style={{ color: card.iconColor }}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
                  >
                    {card.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h4
                    className="text-xl sm:text-2xl font-bold font-unbounded group-hover:scale-105 transition-transform duration-300"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-xs sm:text-sm font-normal leading-relaxed max-w-full sm:max-w-[400px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: card.textColor }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
