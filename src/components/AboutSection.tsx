import { Sparkles, Film, Palette, Rocket } from "lucide-react";
const AboutSection = () => {
  const milestones = [{
    icon: Film,
    title: "Video Production",
    description: "Crafting compelling visual stories that captivate and inspire audiences"
  }, {
    icon: Palette,
    title: "Digital Branding",
    description: "Building authentic brand identities that resonate with communities"
  }, {
    icon: Sparkles,
    title: "Event Marketing",
    description: "Creating memorable experiences through strategic digital campaigns"
  }, {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Recently mastering Lovable.dev & Blender to push creative boundaries"
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the years, I've dedicated myself to mastering the art of visual storytelling, 
              event marketing, and digital branding. From conceptualizing ideas to bringing them 
              to life through video production, I've always sought to create content that leaves 
              a lasting impact.
            </p>
            
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