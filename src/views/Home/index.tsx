import LandingSection from "@Components/Home/LandingSection";
import AboutSection from "@Components/Home/AboutSection";
import OurServicesSection from "@Components/Home/OurServicesSection";
import WhatStudentsSay from "@Components/Home/WhatStudentsSay";
import FAQsSection from "@Components/Home/FAQsSection";
import FooterSection from "@Components/Home/FooterSection";

export default function Home() {
  return (
    <main className="scrollbar">
      <LandingSection />
      <AboutSection />
      <OurServicesSection />
      <WhatStudentsSay />
      <FAQsSection />
      <FooterSection />
    </main>
  );
}
