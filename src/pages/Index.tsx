import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import VideoGallery from "@/components/VideoGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AIProjectsSection />
      <VideoGallery />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;