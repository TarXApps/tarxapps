import { ExternalLink, Globe, Youtube, Smartphone } from "lucide-react";
import atInternationalThumb from "@/assets/project-thumbnails/at-international.png";
import crickmateThumb from "@/assets/project-thumbnails/crickmate.png";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "AT International",
    description: "Professional business website showcasing international services and solutions.",
    type: "website",
    url: "https://atinternational.online/",
    icon: Globe,
    thumbnail: atInternationalThumb,
  },
  {
    title: "Vehicle Re-Registration Guide",
    description: "RTO Kashmir video guide explaining the vehicle re-registration process in Jammu & Kashmir.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=GZiJOCa8lNQ&t=56s",
    icon: Youtube,
    videoId: "GZiJOCa8lNQ",
  },
  {
    title: "CrickMate",
    description: "A mobile app to schedule cricket matches from the comfort of your home.",
    type: "app",
    url: "https://play.google.com/store/apps/details?id=co.median.android.pwwrjrx&hl=en-US",
    icon: Smartphone,
    thumbnail: crickmateThumb,
  },
];

const ProjectsSection = () => {
  const openProject = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-28 md:py-32 px-4 relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <SectionLabel label="Work" />
          <h2 className="gradient-text inline-block mb-6">My Recent Projects</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
        </div>

        {/* Compact portfolio grid matching other sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                onClick={() => openProject(project.url)}
                className="group relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
              >
                {/* Thumbnail */}
                {project.type === "youtube" && project.videoId ? (
                  <img
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary/50" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3">
                  <ExternalLink className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground text-center line-clamp-1">{project.title}</span>
                </div>

                {/* Type badge */}
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                    <Icon className="w-3 h-3 text-secondary" />
                    <span className="text-foreground">
                      {project.type === "youtube" ? "Video" : project.type === "website" ? "Website" : "App"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
