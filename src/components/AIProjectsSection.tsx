import { ExternalLink } from "lucide-react";

import worldEvDayThumbnail from "@/assets/project-thumbnails/world-ev-day.png";
import saudiNationalDayThumbnail from "@/assets/project-thumbnails/saudi-national-day.png";
import desertOasisThumbnail from "@/assets/project-thumbnails/desert-oasis.png";
import worldEnvironmentDayThumbnail from "@/assets/project-thumbnails/world-environment-day.png";
import evAutoShowRiyadhThumbnail from "@/assets/project-thumbnails/ev-auto-show-riyadh.png";
import latestInnovationThumbnail from "@/assets/project-thumbnails/latest-innovation.png";
import evAutoShowPassThumbnail from "@/assets/project-thumbnails/ev-auto-show-pass.png";
import evAutoShowLogoThumbnail from "@/assets/project-thumbnails/ev-auto-show-logo.png";

const projects = [
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7371125329442045952/",
    type: "linkedin",
    title: "World EV Day - Driving Change",
    thumbnail: worldEvDayThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7299075683446571008/",
    type: "linkedin",
    title: "Saudi National Day",
    thumbnail: saudiNationalDayThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7166466845179420673/",
    type: "linkedin",
    title: "Desert Oasis",
    thumbnail: desertOasisThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7336413662947004417/",
    type: "linkedin",
    title: "World Environment Day",
    thumbnail: worldEnvironmentDayThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7219985707967107074/",
    type: "linkedin",
    title: "EV Auto Show Riyadh",
    thumbnail: evAutoShowRiyadhThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7106633936952262656/",
    type: "linkedin",
    title: "Latest Innovation",
    thumbnail: latestInnovationThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7106260617270898688/",
    type: "linkedin",
    title: "EV Auto Show Pass",
    thumbnail: evAutoShowPassThumbnail
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7050016790025842688/",
    type: "linkedin",
    title: "EV Auto Show",
    thumbnail: evAutoShowLogoThumbnail
  },
  {
    url: "https://www.youtube.com/watch?v=HHuTL-d-cHI",
    type: "youtube",
    title: "AI Video 1",
    videoId: "HHuTL-d-cHI"
  },
  {
    url: "https://www.youtube.com/watch?v=wZlSXh08wkg",
    type: "youtube",
    title: "AI Video 2",
    videoId: "wZlSXh08wkg"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7028327886218477568/",
    type: "linkedin",
    title: "AI Project 9"
  }
];

const AIProjectsSection = () => {
  const openProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            AI Content Creation Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and digital content creation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openProject(project.url)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {project.type === "youtube" && project.videoId ? (
                <img
                  src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-violet-500/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">LinkedIn</span>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <ExternalLink className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">View Project</span>
                </div>
              </div>

              {/* Platform Badge */}
              <div className="absolute top-2 right-2">
                {project.type === "youtube" ? (
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    YouTube
                  </div>
                ) : (
                  <div className="bg-[#0A66C2] text-white text-xs px-2 py-1 rounded-full font-medium">
                    LinkedIn
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;
