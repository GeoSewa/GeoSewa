import LandingSection from "@Components/Home/LandingSection";
import AboutSection from "@Components/Home/AboutSection";

export default function Home() {
  return (
    <main className="scrollbar">
      <LandingSection />
      <AboutSection />
    </main>
  );
}
