import { Youtube, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const secondaryChannels = [
    {
      name: "SpaceStallionX",
      youtube: "https://www.youtube.com/@SpaceStallionX",
      facebook: "https://www.facebook.com/SpaceStallionX",
    },
    {
      name: "TheOnRoadChronicles",
      youtube: "https://www.youtube.com/@TheOnRoadChronicles",
      facebook: "https://www.facebook.com/TheOnRoadChronicles",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 border-t border-border/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Secondary channels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {secondaryChannels.map((channel) => (
            <div
              key={channel.name}
              className="flex items-center justify-between p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-lg font-semibold text-foreground">
                {channel.name}
              </span>
              <div className="flex gap-3">
                <a
                  href={channel.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-all duration-300"
                  aria-label={`${channel.name} YouTube`}
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={channel.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300"
                  aria-label={`${channel.name} Facebook`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/20">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Copyright © 2024 Tariq Mohmad Shiekh
          </p>

          {/* Quick links */}
          <nav className="flex gap-6">
            {["About", "Portfolio", "Brand", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
