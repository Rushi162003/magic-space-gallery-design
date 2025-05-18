
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Residential",
    description: "A contemporary living room design with minimalist furniture and warm accents.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Bathroom",
    category: "Residential",
    description: "Elegant bathroom design featuring marble surfaces and high-end fixtures.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Minimalist Kitchen",
    category: "Residential",
    description: "Clean lines and functional design create this modern kitchen space.",
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Executive Office",
    category: "Commercial",
    description: "A sophisticated office design that balances professionalism and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cafe Interior",
    category: "Commercial",
    description: "Warm and inviting cafe space with custom lighting and seating.",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1847&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Master Bedroom",
    category: "Residential",
    description: "Luxurious master bedroom with custom headboard and integrated lighting.",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Retail Store Design",
    category: "Commercial",
    description: "An engaging retail environment that enhances the shopping experience.",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Hotel Lobby",
    category: "Commercial",
    description: "A welcoming hotel lobby design with custom furniture and art installations.",
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1774&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Dining Room",
    category: "Residential",
    description: "Elegant dining space with statement chandelier and custom table.",
    imageUrl: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1770&auto=format&fit=crop",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Residential", "Commercial"];
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Project Gallery</h1>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our portfolio of interior design projects across various spaces.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground hover:bg-accent/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="image-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="image-item rounded-lg overflow-hidden shadow-md"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.imageUrl} alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-serif font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-xl">{selectedImage.title}</DialogTitle>
                <DialogDescription>{selectedImage.category}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 rounded-md overflow-hidden">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-muted-foreground">{selectedImage.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
