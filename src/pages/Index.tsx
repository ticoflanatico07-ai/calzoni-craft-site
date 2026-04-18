import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyOrderButton from "@/components/StickyOrderButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
