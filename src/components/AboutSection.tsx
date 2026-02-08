import { Sparkles, Film, Palette, Rocket, PenTool, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const milestones = [{
    icon: Film,
    title: "Video Production",
    description: "Creating high-impact visual content that tells compelling stories and drives audience engagement across platforms."
  }, {
    icon: Palette,
    title: "Digital Branding",
    description: "Building authentic brand identities through strategic messaging, visual design, and multi-platform content execution."
  }, {
    icon: Sparkles,
    title: "Event Marketing",
    description: "Designing and delivering digital campaigns that elevate events, boost attendance, and strengthen stakeholder engagement."
  }, {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Expanding creative capabilities through ongoing self-development and exploration of emerging digital tools and techniques."
  }, {
    icon: PenTool,
    title: "Creative Storytelling",
    description: "Crafting emotionally resonant narratives that connect audiences with ideas, brands, and experiences."
  }, {
    icon: Target,
    title: "Audience Engagement",
    description: "Designing content that sparks curiosity, emotional connection, and meaningful interaction across digital channels."
  }];

  return (
    <section id="about" className="py-28 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="gradient-text inline-block">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Story content */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text content - takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/90">
              A digital creator driven by curiosity, empathy, and a love for meaningful storytelling. I craft visuals and narratives that resonate across YouTube, Instagram, Facebook, and other digital platforms because I believe <span className="text-secondary font-semibold">every story deserves to be told in a way that truly moves people</span>.
            </p>
            <p className="text-muted-foreground">
              My work centers on turning ideas into emotionally engaging content—content that informs, inspires, and builds real connection with diverse audiences. With a commitment to constant growth and creative exploration, I approach every project with equal parts strategy and heart, aiming to create experiences that feel authentic, memorable, and genuinely impactful.
            </p>
          </div>

          {/* Milestones grid - takes 3 columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.title} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone, index }: { milestone: { icon: any; title: string; description: string }; index: number }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:bg-card/80 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      <milestone.icon className="w-8 h-8 text-primary mb-3 group-hover:text-secondary transition-colors duration-300" />
      <h5 className="text-foreground mb-1">{milestone.title}</h5>
      <p className="text-caption">
        {milestone.description}
      </p>
    </div>
  );
};

export default AboutSection;