
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-center bg-cover" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}>
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Transform Your Space Into Something Magical
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Innovative interior design solutions crafted with passion and precision
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/gallery">View Our Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-medium bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore some of our most innovative and inspiring interior design projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-151648311686${item}-4c69874266f7?q=80&w=1974&auto=format&fit=crop`}
                    alt={`Featured project ${item}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-muted-foreground mb-4">Modern | Minimal | Elegant</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/gallery">View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We offer comprehensive interior design services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Residential Design",
                description: "Create your dream home with our personalized residential interior design services."
              },
              {
                title: "Commercial Spaces",
                description: "Elevate your business with professionally designed commercial interiors."
              },
              {
                title: "Space Planning",
                description: "Optimize your space with our efficient and functional layout planning."
              },
              {
                title: "Custom Furniture",
                description: "Get uniquely crafted furniture pieces designed specifically for your space."
              },
              {
                title: "Renovation",
                description: "Transform your existing space with our comprehensive renovation services."
              },
              {
                title: "Consultation",
                description: "Get expert advice and guidance for your interior design projects."
              }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground mb-4">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to discuss your project requirements and get started on creating your dream space.
            </p>
            <Button asChild size="lg" variant="outline" className="font-medium border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
