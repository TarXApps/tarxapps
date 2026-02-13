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
            I don't just create content—I build <span className="text-secondary font-semibold">creative marketing solutions</span> that help brands grow, connect, and convert. Every project is crafted to elevate your <span className="text-secondary font-semibold">brand visibility</span> and drive real audience engagement.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My approach blends empathy-driven storytelling with data-informed strategy—because great marketing isn't just seen, it's felt. From cinematic brand films to scroll‑stopping campaigns, I create experiences that strengthen customer connection and turn viewers into loyal advocates.
          </p>
          <p className="text-lead text-foreground/90 font-semibold">
            "We ensure that your product <span className="text-secondary">shines brighter</span> than your competition."
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Beyond content, I help businesses build their digital presence through modern websites, mobile apps, and platform-ready experiences. By combining creativity, strategy, and technology, I deliver measurable impact—so your brand doesn't just show up online, it stands out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;