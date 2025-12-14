import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Story Documentary",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Event Highlight Reel",
    category: "Event Coverage",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Motion Graphics Showreel",
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Interview Series",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
];

const PortfolioGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text inline-block">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A curated selection of my video production and digital storytelling work
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                  hoveredItem === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              </div>

              {/* Play button */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredItem === item.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-effect">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  hoveredItem === item.id
                    ? "border-primary/50"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@DreamCutStudiosAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300 hover:border-primary group"
          >
            <span>View Full Portfolio</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
