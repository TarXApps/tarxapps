import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
        {/* Profile Photo */}
        <div className="opacity-0 animate-fade-up mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-coral to-gold rounded-full blur-xl opacity-50 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Tariq Mohmad Shiekh"
              className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>

        <div className="opacity-0 animate-fade-up animation-delay-200">
          <p className="text-muted-foreground text-lg md:text-xl mb-4 tracking-wider uppercase">
            Welcome
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-up animation-delay-400">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text font-display">
            TARIQ MOHMAD
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text font-display mt-2">
            SHIEKH
          </span>
        </h1>

        <p className="opacity-0 animate-fade-up animation-delay-600 text-xl md:text-2xl lg:text-3xl text-foreground/90 mt-8 mb-24 max-w-3xl mx-auto leading-relaxed">
          Empowering audiences with meaningful digital experiences
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;