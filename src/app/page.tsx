import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PredictionDashboard from "./components/PredictionDashboard";
import ResultsGallery from "./components/ResultsGallery";
import WhyJoinSection from "./components/WhyJoinSection";
import HowToJoin from "./components/HowToJoin";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PredictionDashboard />
      <ResultsGallery />
      <WhyJoinSection />
      <HowToJoin />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
