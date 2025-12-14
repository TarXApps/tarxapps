import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-800" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <p className="text-muted-foreground text-lg md:text-xl mb-4 tracking-wider uppercase">
            Digital Creator & Storyteller
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-up animation-delay-200">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text font-display">
            TARIQ MOHMAD
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text font-display mt-2">
            SHIEKH
          </span>
        </h1>

        <p className="opacity-0 animate-fade-up animation-delay-400 text-xl md:text-2xl lg:text-3xl text-foreground/90 mt-8 max-w-3xl mx-auto leading-relaxed">
          Empowering audiences with meaningful digital experiences
        </p>

        <div className="opacity-0 animate-fade-up animation-delay-600 mt-12">
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full glow-effect transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
