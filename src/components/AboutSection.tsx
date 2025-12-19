import { Sparkles, Film, Palette, Rocket } from "lucide-react";
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
  }];
  return <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey into the world of digital creation began with a simple belief: 
              <span className="text-secondary font-semibold"> every story deserves to be told in a way that moves people</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">Work focuses on transforming ideas into emotionally engaging content that informs, inspires, and connects with diverse audiences. With a deep commitment to growth and creative exploration, each project is approached with a balance of strategy and heart, aiming to deliver experiences that feel authentic, memorable, and impactful.</p>
            
          </div>

          {/* Milestones grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => <div key={milestone.title} className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card/80" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <milestone.icon className="w-10 h-10 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;