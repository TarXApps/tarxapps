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
    status: "live",
    thumbnail: atInternationalThumb,
  },
  {
    title: "How to Re-Register a Vehicle in J&K",
    description: "RTO Kashmir video guide explaining the vehicle re-registration process in Jammu & Kashmir.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=GZiJOCa8lNQ&t=56s",
    icon: Youtube,
    status: "live",
    videoId: "GZiJOCa8lNQ",
  },
  {
    title: "CrickMate",
    description: "A mobile app to schedule cricket matches from the comfort of your home.",
    type: "app",
    url: "https://play.google.com/store/apps/details?id=co.median.android.pwwrjrx&hl=en-US&ah=K7Y3WhGgKyUb0ko9KgbyUDJFOKs",
    icon: Smartphone,
    status: "live",
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isComingSoon = project.status === "coming-soon";

            return (
              <div
                key={index}
                onClick={() => !isComingSoon && openProject(project.url)}
                className={`group relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 ${
                  isComingSoon
                    ? "cursor-default"
                    : "cursor-pointer hover:border-primary/50 hover:scale-105 hover:shadow-xl"
                }`}
              >
                {/* Thumbnail Area - reduced size */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  {project.type === "youtube" && project.videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/50" />
                    </div>
                  )}

                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay for live projects */}
                  {!isComingSoon && (
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-10 h-10 text-primary" />
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        project.type === "youtube"
                          ? "bg-red-600 text-white"
                          : project.type === "website"
                          ? "bg-blue-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {project.type === "youtube"
                        ? "YouTube"
                        : project.type === "website"
                        ? "Website"
                        : "App"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h5 className="text-foreground">{project.title}</h5>
                  </div>
                  <p className="text-small text-muted-foreground">
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
