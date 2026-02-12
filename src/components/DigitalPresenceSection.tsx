import { Globe, Smartphone, Layout, Layers, ArrowRight } from "lucide-react";
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const capabilities = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites built for performance, SEO, and conversion—ensuring your brand makes a powerful first impression online.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences that keep your audience engaged on the go, with intuitive interfaces and seamless functionality.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with usability—creating digital journeys that feel effortless and look exceptional.",
  },
  {
    icon: Layers,
    title: "Platform-Ready Experiences",
    description:
      "End-to-end digital solutions optimized for every platform, from web and mobile to social media and emerging channels.",
  },
];

const DigitalPresenceSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-28 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <SectionLabel label="Development" />
          <h2 className="gradient-text inline-block mb-6">
            Digital Presence & Development
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-lead max-w-2xl mx-auto">
            I help businesses build their digital presence through modern
            websites, mobile apps, and platform-ready content that drives
            measurable results.
          </p>
        </div>

        {/* Two-column grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <cap.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-foreground mb-2 flex items-center gap-2">
                    {cap.title}
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h4>
                  <p className="text-muted-foreground text-small leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>

              {/* Hover gradient accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPresenceSection;
