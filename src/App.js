import NavBar from "./Components/NavBar";
import CustomCursor from "./Components/CustomCursor";

import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import AboutUs from "./Components/About";
import WhyChooseUs from "./Components/WhyChoose";
import FooterSection from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <CustomCursor />

      <NavBar />

      <HeroSection />

      <ServicesSection />
      <AboutUs/>
      <WhyChooseUs/>
      <FooterSection/>
      
    </div>
  );
}

export default App;
