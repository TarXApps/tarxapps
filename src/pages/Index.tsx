import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import FeaturedBrand from "@/components/FeaturedBrand";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PortfolioGallery />
      <FeaturedBrand />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
