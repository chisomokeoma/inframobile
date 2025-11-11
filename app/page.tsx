import SliderSection from "@/src/components/slider-section";
import FourPillars from "@/src/components/four-pillars";
import ProvenImpact from "@/src/components/proven-impact";
import FocusedSection from "@/src/components/focused-section";
import TrustedPartners from "@/src/components/trusted-partners";
import PartnershipSection from "@/src/components/partnership-section";
import Footer from "@/src/components/footer";
import HeroSection from "@/src/components/hero-section";
import AnimatedSection from "@/src/components/animated-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <AnimatedSection animationType="fadeUp" delay={0}>
        <div id="solutions">
          <SliderSection />
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={100}>
        <div id="company">
          <FourPillars />
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={200}>
        <div id="projects">
          <ProvenImpact />
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={100}>
        <FocusedSection />
      </AnimatedSection>

      <AnimatedSection animationType="scale" delay={150}>
        <TrustedPartners />
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={100}>
        <PartnershipSection />
      </AnimatedSection>

      <AnimatedSection animationType="fadeIn" delay={0}>
        <div id="contact">
          <Footer />
        </div>
      </AnimatedSection>
    </main>
  );
}
