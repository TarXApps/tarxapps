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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <SectionLabel label="Work" />
          <h2 className="gradient-text inline-block mb-6">My Recent Projects</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
        </div>

        {/* 3-column portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                onClick={() => openProject(project.url)}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.type === "youtube" && project.videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/50" />
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                      <Icon className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-medium text-foreground">
                        {project.type === "youtube" ? "Video" : project.type === "website" ? "Website" : "App"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h5 className="text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h5>
                  <p className="text-small text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
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
