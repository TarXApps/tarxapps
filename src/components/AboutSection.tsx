import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

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
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionLabel label="About" />
          <h2 className="gradient-text inline-block mb-6">About Me</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
        </div>

        {/* Story content */}
        <div
          ref={ref}
          className={`space-y-6 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lead text-foreground/90">
            A digital creator driven by curiosity, empathy, and a love for meaningful storytelling. I craft visuals and narratives that resonate across YouTube, Instagram, Facebook, and other digital platforms because I believe{" "}
            <span className="text-secondary font-semibold">every story deserves to be told in a way that truly moves people</span>.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My work centers on turning ideas into emotionally engaging content—content that informs, inspires, and builds real connection with diverse audiences. With a commitment to constant growth and creative exploration, I approach every project with equal parts strategy and heart, aiming to create experiences that feel authentic, memorable, and genuinely impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;