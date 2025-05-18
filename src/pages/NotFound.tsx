
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center bg-accent/10 py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
