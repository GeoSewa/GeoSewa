import LandingSection from "@Components/Home/LandingSection";
import AboutSection from "@Components/Home/AboutSection";
import FooterSection from "@Components/Home/FooterSection";

export default function Home() {
  return (
    <main className="scrollbar">
      <LandingSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
