import { Film, Palette, Sparkles, Rocket, PenTool, Target, Check } from "lucide-react";
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

const services = [
  {
    icon: Film,
    title: "Video Production",
    description: "Creating high-impact visual content that tells compelling stories and drives audience engagement.",
    benefits: [
      "End-to-end video production workflow",
      "Platform-optimized content formats",
      "Engaging storytelling techniques"
    ]
  },
  {
    icon: Palette,
    title: "Digital Branding",
    description: "Building authentic brand identities through strategic messaging and visual design.",
    benefits: [
      "Cohesive visual identity systems",
      "Multi-platform brand consistency",
      "Strategic messaging frameworks"
    ]
  },
  {
    icon: Sparkles,
    title: "Event Marketing",
    description: "Designing and delivering digital campaigns that elevate events and boost attendance.",
    benefits: [
      "Pre-event buzz campaigns",
      "Live event coverage",
      "Post-event engagement strategies"
    ]
  },
  {
    icon: PenTool,
    title: "Creative Storytelling",
    description: "Crafting emotionally resonant narratives that connect audiences with ideas and experiences.",
    benefits: [
      "Audience-centric narratives",
      "Cross-platform story arcs",
      "Emotionally engaging content"
    ]
  },
  {
    icon: Target,
    title: "Audience Engagement",
    description: "Designing content that sparks curiosity and meaningful interaction across digital channels.",
    benefits: [
      "Data-driven content strategies",
      "Community building tactics",
      "Interactive content experiences"
    ]
  },
  {
    icon: Rocket,
    title: "Content Strategy",
    description: "Developing comprehensive plans that align content with business goals and audience needs.",
    benefits: [
      "Goal-aligned content calendars",
      "Performance analytics & insights",
      "Continuous optimization cycles"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <SectionLabel label="Services" />
          <h2 className="gradient-text inline-block mb-6">What I Do</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-lead max-w-2xl mx-auto">
            Transforming ideas into impactful digital experiences through creative expertise and strategic thinking.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: any;
    title: string;
    description: string;
    benefits: string[];
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-card border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Icon container */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
      </div>

      {/* Title */}
      <h4 className="text-foreground mb-3">{service.title}</h4>

      {/* Description */}
      <p className="text-muted-foreground text-small mb-5">
        {service.description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-2">
        {service.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-caption text-foreground/80">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Subtle gradient accent on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ServicesSection;
