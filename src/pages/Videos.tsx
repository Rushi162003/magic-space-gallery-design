
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Sample video items
const videoItems = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    description: "Watch the complete renovation process of this modern living space.",
    thumbnailUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample URL - to be replaced with real videos
  },
  {
    id: 2,
    title: "Office Design Walkthrough",
    description: "A virtual tour of our award-winning office interior design.",
    thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample URL - to be replaced with real videos
  },
  {
    id: 3,
    title: "Kitchen Renovation Time-lapse",
    description: "See this amazing kitchen transformation in our detailed time-lapse video.",
    thumbnailUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1770&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample URL - to be replaced with real videos
  },
  {
    id: 4,
    title: "Luxury Apartment Design Process",
    description: "Behind the scenes of our design process for this luxury apartment project.",
    thumbnailUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1770&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample URL - to be replaced with real videos
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Video Gallery</h1>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Watch walkthroughs, time-lapses, and behind-the-scenes footage of our interior design projects.
            </p>
          </div>
          
          {/* Videos Grid */}
          <div className="video-grid">
            {videoItems.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-md border bg-card">
                <div className="aspect-video relative overflow-hidden">
                  {/* This would be replaced with the actual video embed component in a real site */}
                  <iframe 
                    className="w-full h-full absolute inset-0"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Videos;
