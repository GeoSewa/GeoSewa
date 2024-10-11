import LandingSection from "@Components/Home/LandingSection";
import AboutSection from "@Components/Home/AboutSection";
import OurServicesSection from "@Components/Home/OurServicesSection";
import FooterSection from "@Components/Home/FooterSection";
import FAQsSection from "@Components/Home/FAQsSection";

export default function Home() {
  return (
    <main className="scrollbar">
      <LandingSection />
      <AboutSection />
      <OurServicesSection />
      <FAQsSection />
      <FooterSection />
    </main>
  );
}
