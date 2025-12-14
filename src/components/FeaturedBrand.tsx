import { Youtube, Facebook, Instagram, ExternalLink, Sparkles } from "lucide-react";

const FeaturedBrand = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@DreamCutStudiosAI",
      color: "hover:text-red-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/DreamCutStudiosAI",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/DreamCutStudiosAI",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section id="brand" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            Featured Brand
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Brand card */}
        <div className="relative rounded-3xl bg-card/60 border border-border/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden group hover:border-primary/50 transition-all duration-500">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Brand info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                  DreamCut Studios AI
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A creative powerhouse dedicated to producing visually stunning content 
                that pushes the boundaries of digital storytelling. From AI-enhanced 
                videos to immersive brand experiences, we transform ideas into 
                unforgettable visual journeys.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Video Production", "AI Content", "Brand Stories", "Motion Graphics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-foreground"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Follow DreamCut Studios AI
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@DreamCutStudiosAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group/link"
              >
                <span>Visit Channel</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrand;
