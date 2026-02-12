import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DigitalPresenceSection from "@/components/DigitalPresenceSection";
import ExperienceSection from "@/components/ExperienceSection";
import HonorsSection from "@/components/HonorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import VideoGallery from "@/components/VideoGallery";
import ContactSection from "@/components/ContactSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <ServicesSection />
      <DigitalPresenceSection />
      <SectionDivider />
      <ExperienceSection />
      <HonorsSection />
      <SectionDivider />
      <ProjectsSection />
      <AIProjectsSection />
      <SectionDivider />
      <VideoGallery />
      <WhyWorkWithMeSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;