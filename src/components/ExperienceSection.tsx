import { Calendar, MapPin, Briefcase } from "lucide-react";

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

  return (
    <section id="experience" className="py-24 px-4 relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-14 md:pl-0 pb-10 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2.5rem)] md:text-right" : "md:pl-[calc(50%+2.5rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[0.625rem] md:left-1/2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_hsl(var(--primary))] md:-translate-x-1/2 z-10" />

              {/* Card */}
              <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] hover:-translate-y-1">
                {/* Date */}
                <span className={`inline-flex items-center gap-2 text-sm font-medium text-secondary mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>

                {/* Company */}
                <h3 className="text-xl font-bold font-display text-foreground mb-1">
                  {exp.company}
                </h3>

                {/* Role */}
                <p className="text-base font-semibold gradient-text mb-2">
                  {exp.role}
                </p>

                {/* Location */}
                <p className={`text-sm text-muted-foreground mb-4 flex items-center gap-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </p>

                {/* Description or bullets */}
                {exp.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                )}
                {exp.bullets && (
                  <ul className={`text-sm text-muted-foreground space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className={`relative ${index % 2 === 0 ? "md:pr-5 md:pl-0 pl-5" : "pl-5"}`}>
                        <span className={`absolute text-secondary ${index % 2 === 0 ? "md:right-0 md:left-auto left-0" : "left-0"}`}>▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
