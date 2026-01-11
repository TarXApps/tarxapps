import { ExternalLink, Globe, Youtube, Smartphone } from "lucide-react";

const projects = [
  {
    title: "AT International",
    description: "Professional business website showcasing international services and solutions.",
    type: "website",
    url: "https://atinternational.online/",
    icon: Globe,
    status: "live",
  },
  {
    title: "Travel Documentary",
    description: "Cinematic travel video capturing beautiful destinations and experiences.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=GZiJOCa8lNQ&t=56s",
    icon: Youtube,
    status: "live",
    videoId: "GZiJOCa8lNQ",
  },
  {
    title: "CrickMate",
    description: "A mobile app for cricket enthusiasts to track matches, stats, and connect with fans.",
    type: "app",
    url: null,
    icon: Smartphone,
    status: "coming-soon",
  },
];

const ProjectsSection = () => {
  const openProject = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                {/* Thumbnail Area */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  {project.type === "youtube" && project.videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/50" />
                    </div>
                  )}

                  {/* Coming Soon Overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
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
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
