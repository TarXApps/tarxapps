import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  // LinkedIn
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/shiekhtariq/",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn Profile",
  },
  // YouTube
  {
    platform: "youtube",
    url: "https://www.youtube.com/@SpaceStallionX",
    icon: <Youtube className="w-5 h-5" />,
    label: "SpaceStallionX YouTube",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@TheOnRoadChronicles",
    icon: <Youtube className="w-5 h-5" />,
    label: "TheOnRoadChronicles YouTube",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@wellnesswonders4U",
    icon: <Youtube className="w-5 h-5" />,
    label: "WellnessWonders4U YouTube",
  },
  // Facebook
  {
    platform: "facebook",
    url: "https://www.facebook.com/CreatarX/",
    icon: <Facebook className="w-5 h-5" />,
    label: "Personal Facebook",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/SpaceStallionX/",
    icon: <Facebook className="w-5 h-5" />,
    label: "SpaceStallionX Facebook",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/dreamcutstudio/",
    icon: <Facebook className="w-5 h-5" />,
    label: "DreamCutStudio Facebook",
  },
  // Instagram
  {
    platform: "instagram",
    url: "https://www.instagram.com/spacestallionx/",
    icon: <Instagram className="w-5 h-5" />,
    label: "SpaceStallionX Instagram",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/tariq_the_traveler/",
    icon: <Instagram className="w-5 h-5" />,
    label: "Tariq The Traveler Instagram",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/dreamcutstudios.ai/",
    icon: <Instagram className="w-5 h-5" />,
    label: "DreamCutStudios Instagram",
  },
];

interface SocialLinksProps {
  variant?: "hero" | "footer";
}

const SocialLinks = ({ variant = "hero" }: SocialLinksProps) => {
  const baseClasses =
    "flex items-center justify-center rounded-full transition-all duration-300";
  
  const variantClasses = {
    hero: "w-10 h-10 bg-foreground/10 hover:bg-primary/20 hover:scale-110 text-foreground/70 hover:text-primary",
    footer: "w-9 h-9 border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-foreground",
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses[variant]}`}
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
