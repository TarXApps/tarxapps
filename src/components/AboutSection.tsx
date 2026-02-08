import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import profilePhoto from "@/assets/profile-photo.jpg";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionLabel label="About" />
          <h2 className="gradient-text inline-block">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-column layout */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image column */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <img
                src={profilePhoto}
                alt="Tariq Mohmad Shiekh"
                className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <p className="text-lead text-foreground/90">
              A digital creator driven by curiosity, empathy, and a love for meaningful storytelling. I craft visuals and narratives that resonate across YouTube, Instagram, Facebook, and other digital platforms because I believe{" "}
              <span className="text-secondary font-semibold">every story deserves to be told in a way that truly moves people</span>.
            </p>
            <p className="text-muted-foreground">
              My work centers on turning ideas into emotionally engaging content—content that informs, inspires, and builds real connection with diverse audiences. With a commitment to constant growth and creative exploration, I approach every project with equal parts strategy and heart, aiming to create experiences that feel authentic, memorable, and genuinely impactful.
            </p>
            
            {/* Quick stats or highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border/30">
                <span className="text-2xl font-bold gradient-text">20+</span>
                <p className="text-caption mt-1">Years Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border/30">
                <span className="text-2xl font-bold gradient-text">100+</span>
                <p className="text-caption mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;