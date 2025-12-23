import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ClientLogos from "../components/home/ClientLogos";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ClientLogos />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}
