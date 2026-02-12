import { ArrowDown, Play } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-32 px-4 overflow-hidden">
      {/* Layered gradient background for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-coral/5" />
      
      {/* Cinematic glow elements */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Photo - Smaller, more refined */}
        <div className="opacity-0 animate-fade-up mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-coral to-gold rounded-full blur-xl opacity-50 scale-125" />
            <img
              src={profilePhoto}
              alt="Tariq Mohmad Shiekh"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/50 shadow-2xl"
            />
          </div>
          <p className="mt-4 text-3xl font-semibold text-primary tracking-wide">Tariq Mohmad Shiekh</p>
        </div>

        {/* Hook Headline - Bold & Curiosity-Driven */}
        <div className="opacity-0 animate-fade-up animation-delay-200 space-y-3 -mt-4">
          <p className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-foreground mb-4">
            Digital Storyteller & Content Creator
          </p>
          <h1 className="gradient-text leading-[1.1] font-extrabold text-5xl md:text-7xl">
            Stories That Move.
            <br />
            <span className="text-foreground font-extrabold">Moments That Matter.</span>
          </h1>
        </div>

        {/* Marketing Value Proposition */}
        <p className="opacity-0 animate-fade-up animation-delay-400 text-xl md:text-2xl font-semibold text-primary/90 mt-8 mb-4 max-w-3xl mx-auto tracking-tight">
          Helping brands grow through strategic content, digital storytelling, and high-impact marketing.
        </p>

        {/* Supporting Subheadline */}
        <p className="opacity-0 animate-fade-up animation-delay-400 text-lead mb-10 max-w-2xl mx-auto">
          I craft digital experiences that don't just capture attention—they spark emotion, 
          inspire action, and leave a lasting impression.
        </p>

        {/* Single Clear CTA */}
        <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col items-center gap-6">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group px-10 py-7 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore My Work
          </Button>
          
          {/* Scroll Indicator */}
          <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-caption tracking-wide">Scroll to discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;