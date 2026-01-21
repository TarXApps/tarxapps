import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-border/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center mb-8">
          <SocialLinks variant="footer" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Copyright © 2024 Tariq Mohmad Shiekh
          </p>

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