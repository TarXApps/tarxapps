import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-32 px-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="opacity-0 animate-fade-up mb-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-coral to-gold rounded-full blur-2xl opacity-40 scale-110" />
            <img
              src={profilePhoto}
              alt="Tariq Mohmad Shiekh"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/40 shadow-2xl"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="opacity-0 animate-fade-up animation-delay-200">
          <h1 className="text-foreground">
            Hi, I'm{" "}
            <span className="gradient-text">Tariq Mohmad Shiekh</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-up animation-delay-400 text-lead mt-6 mb-12 max-w-2xl mx-auto">
          Digital content creator crafting meaningful experiences that inspire and engage audiences worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;