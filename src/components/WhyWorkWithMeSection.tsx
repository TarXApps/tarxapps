import { Award, Brain, Clapperboard, MonitorSmartphone, Clock, TrendingUp } from "lucide-react";
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

const strengths = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Two decades of hands-on expertise in content creation, digital marketing, and brand storytelling across diverse industries.",
  },
  {
    icon: Brain,
    title: "Strategic Marketing Mindset",
    description: "Every project is driven by strategy—aligning creative output with business goals to maximize brand visibility and audience engagement.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Storytelling",
    description: "I bring a filmmaker's eye to every piece of content, crafting narratives that captivate, inspire, and leave a lasting emotional impact.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Platform Expertise",
    description: "From web and mobile to social media and live events—your message reaches the right audience on every channel that matters.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Consistent, on-time execution you can count on. I treat every deadline as a promise and every project as a partnership.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Data-informed creative decisions that deliver real results—higher engagement, stronger conversions, and tangible business growth.",
  },
];

const WhyWorkWithMeSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-28 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <SectionLabel label="Why Me" />
          <h2 className="gradient-text inline-block mb-6">Why Work With Me</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-lead max-w-2xl mx-auto">
            When you work with me, you get more than a creative—you get a strategic partner invested in your success.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-7 rounded-2xl bg-card border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h4 className="text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-small leading-relaxed">
                {item.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
