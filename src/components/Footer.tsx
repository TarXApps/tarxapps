import { ArrowUp, Mail, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/shiekhtariq/", label: "LinkedIn" },
  { icon: Youtube, url: "https://www.youtube.com/@SpaceStallionX", label: "YouTube" },
  { icon: Facebook, url: "https://www.facebook.com/CreatarX/", label: "Facebook" },
  { icon: Instagram, url: "https://www.instagram.com/spacestallionx/", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/50 border-t border-border/30">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          
          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="gradient-text mb-4">Tariq Mohmad Shiekh</h4>
            <p className="text-small text-muted-foreground max-w-xs">
              Digital Content Creator crafting compelling visual stories and engaging digital experiences.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="flex flex-col items-center">
            <h6 className="text-foreground mb-4">Quick Links</h6>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-small text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div className="flex flex-col items-center md:items-end">
            <h6 className="text-foreground mb-4">Connect</h6>
            
            {/* Email */}
            <a
              href="mailto:shiekhtariq007@gmail.com"
              className="flex items-center gap-2 text-small text-muted-foreground hover:text-primary transition-colors duration-300 mb-5"
            >
              <Mail className="w-4 h-4" />
              shiekhtariq007@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-caption text-center sm:text-left">
            © {currentYear} Tariq Mohmad Shiekh. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;