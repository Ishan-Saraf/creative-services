import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ServicesSection from "./components/ServicesSection.jsx/ServicesSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
