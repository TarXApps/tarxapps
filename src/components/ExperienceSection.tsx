import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

interface ExperienceCardProps {
  exp: {
    company: string;
    role: string;
    period: string;
    location: string;
    description?: string;
    bullets?: string[];
  };
  index: number;
}

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const { ref, isInView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative pl-14 md:pl-0 pb-10 ${
        isEven ? "md:pr-[calc(50%+2.5rem)] md:text-right" : "md:pl-[calc(50%+2.5rem)]"
      }`}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute left-[0.625rem] md:left-1/2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_hsl(var(--primary))] md:-translate-x-1/2 z-10 transition-all duration-500 ${
          isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      />

      {/* Card */}
      <div 
        className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] hover:-translate-y-1 ${
          isInView 
            ? "opacity-100 translate-y-0" 
            : `opacity-0 ${isEven ? "md:translate-x-10" : "md:-translate-x-10"} translate-y-10`
        }`}
        style={{ transitionDelay: `${index * 100 + 150}ms` }}
      >
        {/* Date */}
        <span className={`inline-flex items-center gap-2 text-small font-medium text-secondary mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
          <Calendar className="w-4 h-4" />
          {exp.period}
        </span>

        {/* Company */}
        <h4 className="text-foreground mb-1">{exp.company}</h4>

        {/* Role */}
        <h6 className="gradient-text mb-2">{exp.role}</h6>

        {/* Location */}
        <p className={`text-caption mb-4 flex items-center gap-1 ${isEven ? "md:justify-end" : ""}`}>
          <MapPin className="w-3.5 h-3.5" />
          {exp.location}
        </p>

        {/* Description or bullets */}
        {exp.description && (
          <p className="text-small text-muted-foreground">
            {exp.description}
          </p>
        )}
        {exp.bullets && (
          <ul className={`text-small text-muted-foreground space-y-2 ${isEven ? "md:text-right" : ""}`}>
            {exp.bullets.map((bullet, i) => (
              <li key={i} className={`relative ${isEven ? "md:pr-5 md:pl-0 pl-5" : "pl-5"}`}>
                <span className={`absolute text-secondary ${isEven ? "md:right-0 md:left-auto left-0" : "left-0"}`}>▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "EV Auto Show Riyadh",
      role: "Digital Content Creator, Motion Graphics & Graphics Designer",
      period: "Dec 2022 - Present",
      location: "Riyadh, Saudi Arabia",
      description: "Leading digital content creation for Saudi Arabia's premier electric vehicle exhibition, promoting electric mobility and uniting stakeholders in the EV sector.",
    },
    {
      company: "Daneen Al Majaz",
      role: "Video Content Creator, Video Editor & Graphics Designer",
      period: "Sep 2022 - Nov 2022",
      location: "Srinagar, Jammu & Kashmir, India",
    },
    {
      company: "University of Technology and Applied Sciences",
      role: "Digital Content Creator / Video Editor / Graphics Designer",
      period: "Jun 2008 - May 2022 (14 years)",
      location: "Sultanate of Oman",
      bullets: [
        "Produced content for the official university website including announcements, thumbnails, banners, and news",
        "Created video presentations with b-rolls and animated event openers for special occasions",
        "Designed posters, rolling stand banners, and cover designs for curricular books",
        "Coordinated and edited official newsletters \"Technocrats\" and \"ICT Feed\"",
      ],
    },
    {
      company: "Aljury Co. LLC",
      role: "Website / Graphics / Multimedia",
      period: "Jan 2007 - May 2008",
      location: "Muscat, Oman",
      bullets: [
        "Designed website layouts based on client feedback and developed finalized pages",
        "Created brochures, pull-out banners, posters, and visiting cards",
        "Developed interactive programs and video presentations for clients",
      ],
    },
    {
      company: "Dream Valley Trading",
      role: "Website / Graphics Designer",
      period: "Mar 2006 - Dec 2006",
      location: "Muscat, Oman",
      bullets: [
        "Designed website layouts, visiting cards, posters, and ads for clients",
        "Developed websites using Dreamweaver",
      ],
    },
    {
      company: "Babylon Lions Est.",
      role: "Technical Support Associate",
      period: "May 2005 - Dec 2005",
      location: "Muscat, Oman",
      bullets: [
        "Provided computer hardware technical support to clients",
        "Helped clients troubleshoot networking and hardware issues",
      ],
    },
    {
      company: "Magnum Software Services",
      role: "Team Leader",
      period: "Jun 2004 - Dec 2004",
      location: "Srinagar, Jammu & Kashmir, India",
      bullets: ["Managed a team of 22 executives"],
    },
    {
      company: "Elite Software Services",
      role: "Multimedia / Graphics / Web Design Associate",
      period: "Jan 2001 - Dec 2003 (3 years)",
      location: "Srinagar, Jammu & Kashmir, India",
      bullets: [
        "Designed ads, posters, and visiting cards for clients",
        "Created interactive educational programs for students",
      ],
    },
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerInView, setHeaderInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 md:py-32 px-4 relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionLabel label="Experience" />
          <h2 className="gradient-text inline-block">Professional Experience</h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full transition-all duration-700 delay-300 ${
              headerInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
