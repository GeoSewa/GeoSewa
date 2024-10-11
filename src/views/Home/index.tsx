import LandingSection from "@Components/Home/LandingSection";
import AboutSection from "@Components/Home/AboutSection";
import OurServicesSection from "@Components/Home/OurServicesSection";
import FooterSection from "@Components/Home/FooterSection";

export default function Home() {
  return (
    <main className="scrollbar">
      <LandingSection />
      <AboutSection />
      <OurServicesSection />
      <FooterSection />
    </main>
  );
}
