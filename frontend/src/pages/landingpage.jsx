import HeroSection from "./landing/herosection";
import LandingNavbar from "../layout/LandingNavbar";
import AssistantSection from "./landing/assistance";
import FinalCTASection from "./landing/FinalCTASection";
import Footer from "./landing/footer";
function LandingPage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md"
          style={{
            backgroundImage: "url('./opticodeherosectionimgae.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Page Content */}
        <div className="relative z-10">
          <LandingNavbar />
          <HeroSection />
        </div>
      </div>
      <AssistantSection />
      <FinalCTASection />
      <Footer />
    </>
    
  );
}

export default LandingPage;
