import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import HonorsSection from "@/components/HonorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import VideoGallery from "@/components/VideoGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <HonorsSection />
      <ProjectsSection />
      <AIProjectsSection />
      <VideoGallery />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;