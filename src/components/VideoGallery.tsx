import { Play, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const videos = [
  { id: "XLG_PfdkJss", title: "Featured Video 1" },
  { id: "XB3rijwjvGs", title: "Featured Video 2" },
  { id: "mZbZhNDCJFI", title: "Featured Video 3" },
  { id: "G8COVL8ubNU", title: "Featured Video 4" },
  { id: "rZIOQmW1Nqw", title: "Featured Video 5" },
  { id: "fAFUBjbH5k0", title: "Featured Video 6" },
  { id: "Z8GeAT6hZz8", title: "Featured Video 7" },
  { id: "OEBIqfiZM2M", title: "Featured Video 8" },
  { id: "zbjob0fC_Zk", title: "Featured Video 9" },
  { id: "2ODxVZTjTsA", title: "Featured Video 10" },
  { id: "VKn-ex73DTc", title: "Featured Video 11" },
  { id: "v7yC-_45yOw", title: "Featured Video 12" },
  { id: "c_wDogOhXXY", title: "Featured Video 13" },
  { id: "JSf-J9HMnfU", title: "Featured Video 14" },
];

const VideoGallery = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section id="videos" className="py-28 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel label="Videos" />
          <h2 className="gradient-text inline-block mb-6">Featured Videos</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-lead max-w-2xl mx-auto">
            A collection of my most popular content across platforms
          </p>
        </div>

        {/* Video Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => openVideo(video.id)}
              className={`group relative cursor-pointer rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${Math.min(index * 60, 500)}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center coral-glow transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-foreground fill-current ml-1" />
                  </div>
                </div>

                {/* YouTube Badge */}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2">
                  <Youtube className="w-4 h-4 text-coral" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
