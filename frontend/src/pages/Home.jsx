import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ClientLogos from "../components/home/ClientLogos";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";
import AnimatedSection from "../components/common/AnimatedSection";


export default function Home() {
  return (
    <>
    <AnimatedSection delay={0.05}>
      <Hero />
    </AnimatedSection>
    
    <AnimatedSection delay={0.1}>
      <ServicesPreview />
    </AnimatedSection>

    <AnimatedSection delay={0.15}>
      <ClientLogos />
    </AnimatedSection>

    <AnimatedSection delay={0.2}>
      <WhyChooseUs />
    </AnimatedSection>

    <AnimatedSection delay={0.25}>
      <Testimonials />
    </AnimatedSection>

    <AnimatedSection delay={0.3}>
      <Stats />
    </AnimatedSection>

    <AnimatedSection delay={0.35}>
      <CTA />
    </AnimatedSection>

    </>
  );
}
